import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import Cards from './components/Cards';
import Events from './components/Events';
import Form from './components/Form';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import Signin from './components/Signin';
import Organize from './components/Organize';
import Profile from './components/Profile';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import Bottom from './components/Bottom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';


const useStyles = makeStyles((theme) => ({
  root: {
    //minHeight: '90vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/children1.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    //height:'50%',
    //backgroundAttachment: 'fixed',
    backgroundSize:'100% 27%',
    fontFamily:'Roboto'
    
  },
  colorText: {
    color: '#BFBFBF',
    fontSize:'1rem'
  },
  container: {
    textAlign: 'left',
    marginLeft:'8rem',
    marginTop:'7.5rem',
  },
  title: {
    color: '#fff',
    //color: '#03A61C',
    fontSize: '3rem',
    marginTop:'5rem'
  },
  
  goDown: {
    color: '#5AFF3D',
    fontSize: '2rem',
  },
}));
export default function App() {

  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root}>
       <Router>
      <Header />
      <CssBaseline />
        <Switch>
      <Route exact path="/organize" component={Organize} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/signup" component={Form} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/profile" component={Profile} />
          <Route exact path="/">
          <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            WE RISE BY LIFTING OTHERS <br /></h1>
            <p className={classes.colorText}>Volunteering is a way of helping others. It is giving a person's time and ability to help
            <br /> someone who may be in need of help. Not only does volunteering help others, but 
            <br />what others may not know is that it can be helpful to themselves. It is a great way 
            <br />for someone to interact with others in his/her community. It gives someone the
            <br /> time to his/herself while also creating bonds when he or she are doing the greater
            <br /> good. The effects of volunteering can range from many helpful characteristics</p>
          
          <Scroll to="cards" smooth={true}>
            <Bottom name="Get Started" />
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
              <Cards />
              <Events />
          </Route>
      </Switch>
      <Footer />
      </Router>
    </div>
  );
}
