import Tone from "tone";

export default { isInteraction: Tone.context.state === "running", };