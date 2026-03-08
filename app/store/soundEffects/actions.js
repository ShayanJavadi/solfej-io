/* eslint-disable */

import isMobile from "../../util/platform/isMobile";
import Tone from "tone";
import correctSoundSample from "../../samples/correct.wav";
import wrongSoundSampleFile from "../../samples/wrong.mp3";
import { INSTRUMENT_PROVDER_SET_IS_LOADING, SOUND_EFFECTS_SET_IS_LOADING, SOUND_EFFECTS_SET_CORRECT_SOUND_EFFECT, SOUND_EFFECTS_SET_WRONG_SOUND_EFFECT } from "../types";
import { MOBILE_PUBLIC_URL } from "../../common/consts/env";
import isAndroid from "../../util/platform/isAndroid";

let correctSoundEffect;
let wrongSoundSample;


export const initSoundEffects = () => async dispatch => {
  console.log("[SOLFEJ] starting...");
  dispatch({
    type: SOUND_EFFECTS_SET_IS_LOADING,
    payload: true
  });

  if (isMobile() && !isAndroid()) {
    const correctSoundFile = await fetch(`${MOBILE_PUBLIC_URL}/correct.wav`)
    const correctSoundBlob = await correctSoundFile.blob()
    const correctSoundSampleUrl = await URL.createObjectURL(correctSoundBlob)
    const wrongSoundFile = await fetch(`${MOBILE_PUBLIC_URL}/wrong.mp3`)
    const wrongSound = await wrongSoundFile.blob()
    const wrongSoundSampleUrl = await URL.createObjectURL(wrongSound)

    correctSoundEffect = new Tone.Player(correctSoundSampleUrl, () => {
      dispatch({
        type: SOUND_EFFECTS_SET_CORRECT_SOUND_EFFECT,
        payload: correctSoundEffect
      });

      wrongSoundSample = new Tone.Player(wrongSoundSampleUrl, () => {
        dispatch({
          type: SOUND_EFFECTS_SET_WRONG_SOUND_EFFECT,
          payload: wrongSoundSample
        });
        dispatch({
          type: SOUND_EFFECTS_SET_IS_LOADING,
          payload: false
        });
      }).toMaster();
    }).toMaster();

    return;
  }

  try {
    console.log("[SOLFEJ] loading correct sound from:", correctSoundSample);
    correctSoundEffect = new Tone.Player(correctSoundSample, () => {
      console.log("[SOLFEJ] correct sound loaded");

      dispatch({
        type: SOUND_EFFECTS_SET_CORRECT_SOUND_EFFECT,
        payload: correctSoundEffect
      });

      console.log("[SOLFEJ] loading wrong sound from:", wrongSoundSampleFile);
      wrongSoundSample = new Tone.Player(wrongSoundSampleFile, () => {
        console.log("[SOLFEJ] wrong sound loaded, all done");
        dispatch({
          type: SOUND_EFFECTS_SET_WRONG_SOUND_EFFECT,
          payload: wrongSoundSample
        });
        dispatch({
          type: SOUND_EFFECTS_SET_IS_LOADING,
          payload: false
        });
      }).toMaster();
    }).toMaster();
  } catch (e) {
    console.error("[SOLFEJ] Failed:", e);
    dispatch({
      type: SOUND_EFFECTS_SET_IS_LOADING,
      payload: false
    });
  }

};
