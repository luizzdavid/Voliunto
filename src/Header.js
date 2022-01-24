import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
//import SortIcon from '@material-ui/icons/Sort';
import  Button  from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import Bottom from './Bottom';
import About  from './About';

//import Footer from "./Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'left',
    fontFamily: 'Roboto',
    //height :'60px'
  },
  appbar: {
    background: 'none',
    //opacity:'10%'
    backgroundColor:'Black',
    
  },

  appbarTitle: {
    //flexGrow: '1',
   //color:'#03A61C',
    color:'white',
    //opacity:'100%',
    fontSize:'1.3rem',
    marginLeft:'6rem',
    fontWeight:'bold',
    fontFamily:'Roboto'

  },
  // icon: {
  //   color: '#03A61',
  //   fontSize: '2rem',
  // },

  navbtn:{
    paddingLeft:'45rem',
    // alignItems:'right',
    // alignContent:'right',
  },
  // links:{
  //   paddingRight:'-120rem',
  // },

  
  
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar>
        <Button className={classes.appbarTitle}>
            Volunto
          </Button>
          {/* <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton> */}

          <Button color="inherit" href="/" className={classes.navbtn}>
            Home
          </Button>

          <Button color="inherit" href="/organize" >
            Organize
          </Button>

          <Button color="inherit" href="/events" >
            Events
          </Button>

          <Button color="inherit" href="/signup" >
            Sign Up
          </Button>
          <Button color="inherit" href="/signin" >
            LogIn
          </Button>
          <Button color="inherit" href="/profile" >
            My Profile
          </Button>


        </Toolbar>
      </AppBar>

      {/* <Router>
        <Switch>
            <div className="homepage">
          <Route exact path="/about" component={About} />
          <Route exact path="/">
          </Route>
            </div>
        </Switch>
      </Router> */}
    </div>
  );
}