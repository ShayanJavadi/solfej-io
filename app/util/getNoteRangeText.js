import { NOTES } from "../common/consts/twelveToneConsts";

export default noteRange => `${NOTES[noteRange[0]]} - ${NOTES[noteRange[1]]}`;