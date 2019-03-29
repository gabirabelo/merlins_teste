import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';
import Logo from './components/logo.js';
import Search from './components/search.js';
import Bag from './components/bag.js';
import Rodape from './components/rodape.js';
import Page from './components/page.js';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";

import './app.css';

const styles = theme => ({

root:{
  width:"100%",
  height: "100%", 
  overflowX: "hidden"
  },
  
  appBar:{
    display:"flex",
    width:"100%",
    padding: "2% 2%",
    alignItems: "center",
    justifyContent:"center"
  },
  
  appMenu:{
    height: "40px",
    fontFamily: "Helvetica",
    fontStyle: "italic",
    padding: "15px 60px",
    background: "#523468",
    alignItems: "center",
    display: "flex",
    boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)",
},

  tipografia:{
    justifyContent: "center",
    alignItems: "center",
    fontSize: "15px",
    color: "#fff",
    fontFamily:"Arial",
    padding: "18px",
    '&:hover': {
      background:"#422a53",
      borderRadius: "10px",      
    }
  },

  tipografia2:{
    justifyContent: "center",
    alignItems: "center",
    fontSize: "15px",
    color: "#fff",
    fontFamily:"Arial",
    padding: "18px",
    
      '&:hover': {
        background:"#422a53",
        borderRadius: "10px",      
      }
  },

  sing:{
    justifyContent: "center",
    alignItems: "center",
    fontSize: "15px",
    color: "#8a8787",
    padding: "18px",
    marginLeft: "200px",
    textDecoration: "none",
  },

  border:{
    width: 60,
    height: 60,
    borderRadius: 90,
    background: "#e72552",
    border: "3px solid #68cbe8",
    marginTop: 80,
    color: "white"
},

page:{
  display:"flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
    
},

potions:{
  padding: "10px 100px",
  fontWeight: "bold",
  fontFamily: "Roboto Condensed",
  fontSize: 20,

},

row:{
  display: "flex",
  flexDirection: "row",
  width: 5,
},

textColor: {
  color: "white"
}

});

class App extends Component {
  render() {
    
    const { classes, fullScreen } = this.props;
    return (
      <div className={classes.root}>
       
          <div className={classes.appBar}>
            <Logo/>
            <Search/>
            <Bag/>
          </div>

          <div 
           className={`appBer ${classes.appMenu}`}
           >
            <Link style={{ textDecoration: 'none' }} to="/"> 
              <span className={classes.tipografia}>
              Potions <FontAwesomeIcon className ='font-awesome' icon={faCaretDown} />
              </span> 
            </Link>

            <Link style={{ textDecoration: 'none' }} to="/"> 
              <span className={classes.tipografia}>
              Ingredients <FontAwesomeIcon className ='font-awesome' icon={faCaretDown} />
              </span>
            </Link>

            <Link style={{ textDecoration: 'none' }} to="/"> 
              <span className={classes.tipografia}>
              Books <FontAwesomeIcon className ='font-awesome' icon={faCaretDown} />
              </span> 
            </Link>

            <Link style={{ textDecoration: 'none' }} to="/"> 
              <span className={classes.tipografia}>
              Suplies <FontAwesomeIcon className ='font-awesome' icon={faCaretDown} />
              </span> 
            </Link>

            <Link style={{ textDecoration: 'none' }} to="/"> 
              <span className={classes.tipografia}>
              Charms <FontAwesomeIcon className ='font-awesome' icon={faCaretDown} />
              </span> 
            </Link>

            <Link style={{ textDecoration: 'none' }} to="/"> 
              <span className={classes.tipografia2}>
              Clearance!
              </span> 
            </Link>

          <div className={classes.page}>
              <span className={classes.sing}>
              <Link className={classes.textColor} style={{ textDecoration: 'none' }} to="/"> Sing in</Link> or 
              <Link className={classes.textColor} style={{ textDecoration: 'none' }} to="/"> Sing Up</Link>
              </span> 
          </div>
        </div>

        <div>
          <p className={classes.potions}>Potions</p>
          <Page/>
          <Rodape/>
        </div>

      </div> 
    );
  }
}


App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
