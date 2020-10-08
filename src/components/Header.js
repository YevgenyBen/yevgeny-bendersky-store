import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CartIcon from "../components/CartIcon";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: "white",
  },
  appBar: {
    backgroundColor: "#005361",
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography
            className={classes.title}
            variant="h6"
            noWrap
            component={Link}
            to={"/"}>
            Kornit Digital Demo Store
          </Typography>
          <CartIcon />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
