import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const NavButton = withStyles({
  root: {
    boxShadow: "none",
    border: "1.2px solid",
    borderRadius: "11px",
    backgroundColor: "#CBDDFF",
    borderColor: "#FFFFFF",
    margin: "auto 4vw",
    width: "49px",
    height: "49px",
    disableRipple: true,
    "&:hover": {
      backgroundColor: "#FFFFFF",
      borderColor: "#5F99FF",
      border: "1.2px solid",
      borderRadius: "11px",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#FFFFFF",
      borderColor: "#5F99FF",
      border: "1.2px solid",
      borderRadius: "11px",
    },
    "&:focus": {
      boxShadow: "none",
      backgroundColor: "#FFFFFF",
      borderColor: "#5F99FF",
      border: "1.2px solid",
      borderRadius: "11px",
    },
  },
})(Button);

export default NavButton;
