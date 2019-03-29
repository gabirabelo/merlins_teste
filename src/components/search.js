import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const styles = theme => ({
    divInput:{
        width: "350px",
        height:38,
        border: "1px solid #424242",
        borderRadius: 5,
        margin: "20px 120px",
    },
    input:{
        color: "#d84025",
        background: "none",
        textAlign:"center",
        marginTop: 10,
        color: "black",
        border: "none",
        boxShadow:"none",
        outline: 0,
        width: 300,
    
      },
      icon:{
        color: "#d84025",
        margin: "-20px 10px",
        
      },
});

class Search extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
       <div className={classes.divInput}>
            <input className={classes.input} type="text" placeholder="Search our stock"/>
            <div className={classes.icon}>
                <FontAwesomeIcon className ='font-awesome' icon={faSearch} />
            </div>
        </div> 
      </div>
    );
  }
}

export default withStyles(styles)(Search);