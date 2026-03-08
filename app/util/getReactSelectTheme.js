import { primary, accentTwo } from "../common/consts/colors";

const colors = {
  primary: primary,
  primary75: accentTwo,
  primary50: "#ffe3e3",
  primary25: "#f9ecec"
};

export default theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    ...colors
  },
});