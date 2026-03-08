
import React, { useEffect, useState } from "react";
import StartAudioContext from "startaudiocontext";
import Tone from "tone";
import Modal from "react-responsive-modal";
import { connect, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import warning from "./warning.png";
import { initPiano, onNotePlay } from "../../store/instrument/actions";
import { setAppIsInteractive, setShouldShowVolumeWarning } from "../../store/app/actions";
import { INSTRUMENT_PROVIDER_SET_PIANO } from "../../store/types";
import PlayerBlock from "../../common/components/PlayerBlock/PlayerBlock";
import playNotes from "../../util/noteUtils/playNotes";
import Button from "../../common/components/Button/Button";
import isIOS from "../../util/platform/isIOS";

const mapDispatchToProps = { initPiano, onNotePlay, setAppIsInteractive, };

const mapStateToProps = state => ({ instrument: state.instrument.piano, isLoading: state.instrument.isLoading  });

export default (WrappedComponent) => {
  
  const InjectedComponent = ({ initPiano, setAppIsInteractive, ...props }) => {
    const shouldShowVolumeWarning = useSelector(({ app }) => app.shouldShowVolumeWarning);
    const dispatch = useDispatch();
    const userHasSeenPopup = parseInt(localStorage.getItem("seen-volume-warning")) >= 3;
    const [activeLoopIndex, setActiveLoopIndex] = useState(undefined);
    const [isGoodToStart, setIsGoodToStart] = useState(userHasSeenPopup);

    useEffect(() => {
      console.log("[SOLFEJ] mounting, instrument:", !!props.instrument, "isLoading:", props.isLoading);
      StartAudioContext(Tone.context, "body").then(() => {
        console.log("[SOLFEJ] StartAudioContext resolved");
        setAppIsInteractive(true);
      });

      if (!props.instrument) {
        console.log("[SOLFEJ] no instrument, calling initPiano");
        initPiano();
      }
    }, []);

    return (
      <>
        {
          isGoodToStart ?
            <>
              <WrappedComponent {...props} /> 
              <Modal open={shouldShowVolumeWarning} onClose={() => {
                const seenCount = parseInt(localStorage.getItem("seen-volume-warning")) || 0;
                setIsGoodToStart(true);
                dispatch(setShouldShowVolumeWarning(false));
              }} center>
                <h2 className="overlay">{"Unmute Your Device"}</h2>
                <p className="overlay">
                  This exercise has audible elements.
                </p>
                {
                  isIOS() && <img src={warning} className="overlay" />
                }
                <p className="overlay">
                  Please make sure your volume is up and your phone is off silent mode.
                </p>
                <PlayerBlock
                  isPlaying={activeLoopIndex === 0}
                  onClick={() => {
                    setActiveLoopIndex(0);
                    Tone.Transport.stop();
                    Tone.Transport.cancel(0);

                    playNotes({
                      notes: [
                        { noteName: "C" },
                      ],
                      instrument: props.instrument
                    });
                    setTimeout(() => setActiveLoopIndex(undefined), 400);

                  }}
                  text="Play Test Sound"
                />
                <div className="button-container">
                  <Button
                    onClick={() => {
                      const seenCount = parseInt(localStorage.getItem("seen-volume-warning")) || 0;
                      localStorage.setItem("seen-volume-warning", seenCount + 1);
                      setIsGoodToStart(true);
                      dispatch(setShouldShowVolumeWarning(false));
                    }}
                    isTextCentered
                    isPrimary
                    text="Continue"
                  />
                </div>

              </Modal>     
            </> :
            <Modal open={(!userHasSeenPopup && props.instrument && !props.isLoading)} onClose={() => {
              const seenCount = parseInt(localStorage.getItem("seen-volume-warning")) || 0;
              localStorage.setItem("seen-volume-warning", seenCount + 1);
              setIsGoodToStart(true);
            }} center>
              <h2 className="overlay">{"Unmute Your Device"}</h2>
              <p className="overlay">
                This exercise has audible elements.
              </p>
              {
                isIOS() && <img src={warning} className="overlay" />
              }
              <p className="overlay">
                Please make sure your volume is up and your phone is off silent mode.
              </p>
              <PlayerBlock
                isPlaying={activeLoopIndex === 0}
                onClick={() => {
                  setActiveLoopIndex(0);
                  Tone.Transport.stop();
                  Tone.Transport.cancel(0);

                  playNotes({
                    notes: [
                      { noteName: "C" },
                    ],
                    instrument: props.instrument
                  });
                  setTimeout(() => setActiveLoopIndex(undefined), 400);

                }}
                text="Play Test Sound"
              />

              <div className="button-container">
                <Button 
                  onClick={() => {
                    const seenCount = parseInt(localStorage.getItem("seen-volume-warning")) || 0;
                    localStorage.setItem("seen-volume-warning", seenCount + 1);
                    setIsGoodToStart(true);
                  }}
                  isTextCentered
                  isPrimary
                  text="Continue"
                />
              </div>
             
            </Modal>     
        }
       
      </>
    );
  };

  return connect(mapStateToProps, mapDispatchToProps)(InjectedComponent);
};