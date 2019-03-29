import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

  appTitle:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
  },

  tittle:{
    color: "#d84025",
    fontSize: "40px",
    margin: "1%",
    width:"100%",
    fontFamily: "Oswald"
  },

  merlins:{
    fontWeight: "bold"
  },

  subTitle:{
    color:"#523468",
    padding: "5px",
    fontFamily: "Merriweather Sans",
    fontStyle: "italic",
    fontSize: "16px"
  },

  divider:{
    borderTop: "1px solid #523468",
    borderBottom: "none",
    borderLeft: "none",
    borderRight: "none",
    display: "block",
    textAlign: "center",
  }


  

});

class Logo extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.appTitle}> 
            <p className={classes.tittle}>
              <span className={classes.merlins}>MERLIN'S </span> POTIONS
            </p>
          <div>

            <fieldset  className={classes.divider}>
              <legend className={classes.subTitle}>
                fine potions since 1026  
              </legend> 
            </fieldset >

          </div>
        </div> 
      </div>
    );
  }
}

export default withStyles(styles)(Logo);