/* eslint-disable */

import Tone, { Sampler } from "tone";
import { MOBILE_PUBLIC_URL } from "../../common/consts/env";
import { PIANO } from "../../common/consts/instruments";
import A0 from "../../samples/piano/A0.mp3";
import A1 from "../../samples/piano/A1.mp3";
import A2 from "../../samples/piano/A2.mp3";
import A4 from "../../samples/piano/A4.mp3";
import B1 from "../../samples/piano/B1.mp3";
import B3 from "../../samples/piano/B3.mp3";
import B4 from "../../samples/piano/B4.mp3";
import C1 from "../../samples/piano/C1.mp3";
import C2 from "../../samples/piano/C2.mp3";
import D0 from "../../samples/piano/D0.mp3";
import D2 from "../../samples/piano/D2.mp3";
import D4 from "../../samples/piano/D4.mp3";
import E1 from "../../samples/piano/E1.mp3";
import E3 from "../../samples/piano/E3.mp3";
import E4 from "../../samples/piano/E4.mp3";
import F0 from "../../samples/piano/F0.mp3";
import F1 from "../../samples/piano/F1.mp3";
import F2 from "../../samples/piano/F2.mp3";
import F4 from "../../samples/piano/F4.mp3";
import G2 from "../../samples/piano/G2.mp3";
import G4 from "../../samples/piano/G4.mp3";
import playNotes from "../../util/noteUtils/playNotes";
import isMobile from "../../util/platform/isMobile";
import { INSTRUMENT_PROVDER_SET_IS_LOADING, INSTRUMENT_PROVIDER_SET_PIANO, INSTRUMENT_PROVIDER_SET_SELECTED_INSTRUMENT } from "../types";
import isAndroid from "../../util/platform/isAndroid";

const notes = [
  "A0",
  "A1",
  "A2",
  "A3",
  "B3",
  "C2",
  "C3",
  "D3",
  "E3",
  "F3",
  "G3",
  "A4",
  "B4",
  "C4",
  "D4",
  "E4",
  "F4",
  "G4",
]

let piano // TODO: remove this! Bad!

export const onNotePlay = (notes, ) => async (_, getState) => {
  const state = getState();
  const instrument = state.instrument.selectedInstrument === PIANO && state.instrument.piano;
  if (instrument) {
    playNotes({ instrument, notes });
  }
}

const onPianoLoaded = (dispatch, piano) => {
  console.log("[SOLFEJ] piano loaded successfully");
  dispatch({
    type: INSTRUMENT_PROVIDER_SET_PIANO,
    payload: piano,
  });
  dispatch({
    type: INSTRUMENT_PROVIDER_SET_SELECTED_INSTRUMENT,
    payload: PIANO,
  });
  dispatch({
    type: INSTRUMENT_PROVDER_SET_IS_LOADING,
    payload: false
  });
}

const initFallbackPiano = dispatch => {
  piano = new Tone.PolySynth(4, Tone.Synth, {
    envelope: {
      attack: .001,
      decay: 1.73,
      sustain: .25,
      release: 1.47,
      attackCurve: 'exponential',
      decayCurve: "exponential",
      releaseCurve: "exponential"
    },
    volume: -4
  })

  piano.toMaster();

  onPianoLoaded(dispatch, piano);
}

const initMobilePiano = async dispatch => {
  const noteUrls = notes.map(async note => {
    const noteFile = await fetch(`${MOBILE_PUBLIC_URL}/${note}.mp3`)
    const blob = await noteFile.blob()
    const url = await URL.createObjectURL(blob)

    return { [note]: url }
  })

  // array of promises [{A2: promise}, {A3: promise}]
  const fetchedUrls = await Promise.all(noteUrls)

  // map the array of promises into one object { A2: "/bloblasdadd", A3: "/bloblasdsad "}
  const fetchedUrlsMappedToNoteNames = fetchedUrls.reduce((urlObject, fetchedUrl) => {
    const noteName = Object.keys(fetchedUrl)[0];
    const noteBlob = fetchedUrl[noteName];

    return { ...urlObject, ...{ [noteName]: noteBlob }};
  }, {}) 

  piano = new Sampler(
    fetchedUrlsMappedToNoteNames,
    {
      onload: () => onPianoLoaded(dispatch, piano),
      attack: .01,
      release: .9,
      volume: -4
    }
  ).toMaster();
}

const initWebPiano = dispatch => {
  console.log("[SOLFEJ] initWebPiano sample URLs:", { A0, A1, A2, A4, C1, C2 });
  try {
    piano = new Sampler(
      {
        A0,
        A1,
        A2,
        A4,
        B1,
        B3,
        B4,
        C1,
        C2,
        D0,
        D2,
        D4,
        E1,
        E3,
        E4,
        F0,
        F1,
        F2,
        F4,
        G2,
        G4,
      },
      {
        onload: () => onPianoLoaded(dispatch, piano),
        attack: .01,
        release: .9,
        volume: -4
      }
    ).toMaster();
  } catch (e) {
    console.error("[SOLFEJ] Failed to init piano sampler:", e);
    initFallbackPiano(dispatch);
  }
}


export const initPiano = () => async dispatch => {
  console.log("[SOLFEJ] starting...");
  dispatch({
    type: INSTRUMENT_PROVDER_SET_IS_LOADING,
    payload: true
  });

  if (isMobile() && !isAndroid()) {
    initMobilePiano(dispatch)
    return;   
  }

  initWebPiano(dispatch);
};
