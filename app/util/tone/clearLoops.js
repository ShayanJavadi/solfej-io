import Tone from "tone";

export default loops => {
  loops.current.map(loop => Tone.Transport.clear(loop));
}; 
