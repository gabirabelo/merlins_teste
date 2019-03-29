import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import facebook from "../img/facebook.svg"
import twitter from "../img/twitter.svg"
import tumblr from "../img/tumblr.svg"
import google from "../img/google.svg"
import pinterest from "../img/pinterest.svg"


const styles = theme => ({

    root:{
        display: "flex",
    },
   
    rodape:{
        width: "100%",
        height: 300,
        background: "#e6e6e6",
        display: "flex"
      
      },

    contact:{
        color: "#d73a1e",
        fontWeight: "bold",
        display: "flex",
        justifyContent: "flex-start",
        flexDirection:"column",
        margin: 60,
        width:"100%"
      },

    contactText:{
        padding: "30px 10px",
      },

    social:{
        display:"flex",
        alignItems: "center",
        marginTop: 20,
      },

    socialIcon:{
        width: 50,
        height: 50,
        padding: 10,
        margin: 11,
      },

    subtext:{
        color: "#736975",
        margin: "10px 60px",
      },

    position: {
        display: "flex",
        justifyContent: "flex-end",
        width:"100%"
        
      },

    subRodape:{
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        background: "#fff",
        borderRadius: 10,
        width: "80%",
        height: 180,
        margin: 50,
      },

    padding:{
        padding: 15,
      },

    textSing:{
        fontFamily: "Merriweather Sans",
          fontStyle: "italic",
      },

    text:{
        fontFamily: "Merriweather Sans",
      },

    input:{
        width: 200,
        border: "1px solid #000",
        borderRadius: 4,
        padding: 10,
        margin: 5,
      },

    buttonSubmit:{
        background: "#d73a1e",
        width: 100,
        padding: 10,
        margin: 5,
        boxShadow: "none",
        border: "none",
        color: "white",
        borderRadius: 4,
      
      },
});

class Rodape extends Component {
  render() {
    const { classes } = this.props;
    return (
        <div className={classes.root}>
            <div className={classes.rodape}>
                <div className={classes.contact}>
                    <div>
                        <span className={classes.contactText}>COMPANY RETURNS </span> 
                        <span className={classes.contactText}>CONTACT US CAREERS</span> 
                        <span className={classes.contactText}>SHIPPING</span> 
                    </div>
                <div className={classes.social}>
                    <img src={facebook} className={classes.socialIcon} alt="logo" />
                    <img src={twitter} className={classes.socialIcon} alt="logo" />
                    <img src={google} className={classes.socialIcon} alt="logo" />
                    <img src={tumblr} className={classes.socialIcon} alt="logo" />
                    <img src={pinterest} className={classes.socialIcon} alt="logo" />
                </div>
             	    <p className={classes.subtext}>&#169; 2015 Merlin's Potions. All Rights Resrved</p>
                </div>
                <div className={classes.position}>

                    <div className={classes.subRodape}>
                        <div className={classes.padding}>
                            <p className={classes.textSing}>Sing up for our Newsletter</p>
                            <p className={classes.text}>Sing up our newsletter get exclusive discounts! </p>
                            <input className={classes.input} type="text" placeholder="Enter your email"></input>
                            <button type="submit" className={classes.buttonSubmit}> SUBMIT </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default withStyles(styles)(Rodape);