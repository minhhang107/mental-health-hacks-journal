import { ReactComponent as HomeIcon } from "assets/svg/home-icon.svg";
import React from "react";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Button from "@material-ui/core/Button";

const Icon = withStyles({
  root: {
    boxShadow: "none",
    border: "1.2px solid",
    borderRadius: "11px",
    backgroundColor: "#CBDDFF",
    borderColor: "#FFFFFF",
    margin: "auto 4vw",
    width: "49px",
    height: "49px",
    "&:hover": {
      backgroundColor: "#FFFFFF",
      borderColor: "5F99FF",
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

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: 70,
    backgroundColor: "#CBDDFF",
  },
});

const Navbar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <Icon variant="contained" className={classes.margin}>
        <HomeIcon />
      </Icon>
      <Icon variant="contained" className={classes.margin}></Icon>
      <Icon variant="contained" className={classes.margin}></Icon>
      <Icon variant="contained" className={classes.margin}></Icon>
    </BottomNavigation>
  );
};

export default Navbar;
