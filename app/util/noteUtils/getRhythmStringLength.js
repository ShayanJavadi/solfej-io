export default (rhythmString = "") => {
  return Array.isArray(rhythmString) ?
    rhythmString.join("").replace(/\./gi, "").length :
    rhythmString.replace(/\./gi, "").length;
};