import React, { useState, useEffect, useRef, useCallback } from "react";
import { trackCoachmarkImpression, trackCoachmarkClick } from "../../common/utils/analytics";
import "./Coachmark.scss";

function isDismissed(id) {
    try {
        return localStorage.getItem(`coachmark_dismissed_${id}`) === "true";
    } catch {
        return false;
    }
}

function persistDismiss(id) {
    try {
        localStorage.setItem(`coachmark_dismissed_${id}`, "true");
    } catch {
        // localStorage unavailable
    }
}

export default function Coachmark({ id, title, text, position = "bottom", offset = 8, buttons = [], children }) {
    const [visible, setVisible] = useState(false);
    const impressionTracked = useRef(false);

    useEffect(() => {
        if (!isDismissed(id)) {
            setVisible(true);
        }
    }, [id]);

    useEffect(() => {
        if (visible && !impressionTracked.current) {
            impressionTracked.current = true;
            trackCoachmarkImpression(id);
        }
    }, [visible, id]);

    const dismiss = useCallback(() => {
        setVisible(false);
        persistDismiss(id);
    }, [id]);

    const handleTargetInteraction = useCallback(() => {
        if (visible) {
            trackCoachmarkClick(id, "target");
            dismiss();
        }
    }, [visible, dismiss, id]);

    const handleButtonClick = useCallback((button) => {
        trackCoachmarkClick(id, button.label);
        if (button.onClick) button.onClick();
        dismiss();
    }, [dismiss, id]);

    const handleClose = useCallback(() => {
        trackCoachmarkClick(id, "close");
        dismiss();
    }, [dismiss, id]);

    const tooltipStyle = {};
    if (position === "bottom") tooltipStyle.top = `calc(100% + ${offset}px)`;
    if (position === "top") tooltipStyle.bottom = `calc(100% + ${offset}px)`;
    if (position === "left") tooltipStyle.right = `calc(100% + ${offset}px)`;
    if (position === "right") tooltipStyle.left = `calc(100% + ${offset}px)`;

    return (
        <div
            className="coachmark-wrapper"
            onClick={handleTargetInteraction}
            onFocus={handleTargetInteraction}
        >
            {children}
            {visible && (
                <div className={`coachmark-tooltip coachmark-tooltip--${position}`} style={tooltipStyle} onClick={(e) => e.stopPropagation()} onFocus={(e) => e.stopPropagation()}>
                    <button className="coachmark-tooltip__close" onClick={handleClose}>
                        &times;
                    </button>
                    {title && <span className="coachmark-tooltip__title">{title}</span>}
                    <span className="coachmark-tooltip__text">{text}</span>
                    {buttons.length > 0 && (
                        <div className="coachmark-tooltip__buttons">
                            {buttons.map((button, i) => (
                                <button
                                    key={i}
                                    className="coachmark-tooltip__btn"
                                    onClick={() => handleButtonClick(button)}
                                >
                                    {button.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
