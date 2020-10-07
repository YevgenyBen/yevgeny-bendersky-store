import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import CartIcon from '../components/CartIcon'
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      color:'white'
    },
    appBar:{
        backgroundColor:'#005361'
    }
  }));

function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap component={Link}
                to={"/"}>
            Material-UI
          </Typography>
          <CartIcon/>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default Header
