import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag} from "@fortawesome/free-solid-svg-icons";

const styles = theme => ({

    root:{
        display: "flex",
    },
   
    textFree:{
        color:"#d84025",
        margin:"0px 50px",
        fontFamily: "Helvetica",
        fontStyle: "italic",
        fontSize: 18
      },

      orders:{
        marginTop:"-10px",
        fontSize: 13,
        textAlign:"center",
        fontFamily: "Roboto Condensed"

      },

      iconbag:{
        color: "#523468",
        fontSize: 35,
        marginTop: "10px",
        marginLeft: "20px"
      },

      bagShopping:{
          color: "#bcb5b5",
          margin: "10px",
          fontFamily: "Helvetica",


      },

      number:{
        color: "#d84025",
        fontWeight: "bold"
      }
    
});

class Bag extends Component {
  render() {
    const { classes } = this.props;
    return (

    
        <div className={classes.root}>
            <div className={classes.textFree}>
                <p>Free shipping</p>
                <p className={classes.orders}>on orders over $50</p>
            </div>
            <div className={classes.iconbag}>
                <FontAwesomeIcon className ='font-awesome' icon={faShoppingBag} />
            </div>
            <div className={classes.bagShopping}>
                <p>BAG: <span className={classes.number}>1</span></p> 
            </div>
        </div>
       
    );
  }
}

export default withStyles(styles)(Bag);