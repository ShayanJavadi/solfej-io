
import React, { useState, useEffect, useRef } from "react";
import Tone from "tone";
import "./TempoProvider.scss";
import Button from "../../common/components/Button/Button";
import Dot from "../../common/components/Dot/Dot";
import Screen from "../../common/components/Screen/Screen";
import onLoopClick from "../../util/tone/onLoopClick";
import createLoop from "../../util/tone/createLoop";
import useLoop from "../../common/hooks/useLoop";
import clearLoops from "../../util/tone/clearLoops";
import metronomeSample from "../../samples/metronome.wav";
import isMobile from "../../util/platform/isMobile";
import { MOBILE_PUBLIC_URL } from "../../common/consts/env";
import isAndroid from "../../util/platform/isAndroid";

export default WrappedComponent => props => {
  const [isGoodToStart, setIsGoodToStart] = useState(false);
  const loops = useLoop();
  const [activeLoopIndex, setActiveLoopIndex] = useState(undefined);
  const [beatIndex, setBeatIndex] = useState(0);
  const [metronomeLoaded, setMetronomeLoaded] = useState(false);
  const metronome = useRef(undefined);
  // need this because tone has issues accessing hooks api :/
  const beatRef = useRef(0);
  useEffect(() => {
    // set bpm
    Tone.Transport.bpm.value = 130;
    // load sample
    const getMobileMetronome = async () => {
      const noteFile = await fetch(`${MOBILE_PUBLIC_URL}/metronome.wav`);
      const blob = await noteFile.blob();
      const metronomeSampleUrl = await URL.createObjectURL(blob);

      metronome.current = new Tone.Player(metronomeSampleUrl, () => {
        setMetronomeLoaded(metronome);
      }).toMaster();
    };

    if (isMobile() && !isAndroid()) {
      getMobileMetronome();
    } else {
      metronome.current = new Tone.Player(metronomeSample, () => {
        setMetronomeLoaded(metronome);
      }).toMaster();
    }
  }, []);

  useEffect(() => {
    if (metronomeLoaded) {
      // loop sample once it's loaded
      const loopFunction = () => createLoop("", "", "4n", undefined, time => {
        beatRef.current = ++beatRef.current;
        setBeatIndex(beatRef.current % 4);
        metronome.current.start(time);
      });

      onLoopClick(loops, activeLoopIndex, 2, loopFunction, setActiveLoopIndex);
    }
  }, [metronomeLoaded]);

  useEffect(() => {
    if (isGoodToStart) {
      clearLoops(loops);
      Tone.Transport.stop();
    }

  }, [isGoodToStart]);
  if (!isGoodToStart) {
    return (
      <Screen className="tempo-provider">
        <div className="header-container">
          <h1>Lesson Tempo</h1>
        </div>
        <div className="bpm-container">
          <div className="text-container">
            <p>130 bpm at <span className="notes-font"> $4</span></p>
          </div>
          <div className="dots-container">
            {
              Array(4).fill(0).map((_, index) => <Dot className={index === beatIndex && "active"}/>)
            }
          </div>
        </div>
        <div className="button-container">
          <Button 
            text="Tap To Start"
            isSuccess
            isTextCentered
            onClick={() => setIsGoodToStart(true)}
          />
        </div>
      </Screen>
    );
  }
  
  return (
    <WrappedComponent {...props} metronome={metronome.current} />
  );
};