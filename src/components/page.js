import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';

import aging from "../img/aging-potion.png";
import bulgeye from "../img/bulgeye-potion.png";
import dragon from "../img/dragon-tonic.png";
import love from "../img/love-potion.png";
import polyjuice from "../img/polyjuice-potion.png";
import sleeping from "../img/sleeping-draught.png";

import axios from 'axios';

import Grid from '@material-ui/core/Grid';

import Dialog from '@material-ui/core/Dialog';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";


const API = 'https://my-json-server.typicode.com/gabirabelo/apimerlins/db';

const styles = theme => ({

    grid:{
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
    },

    img:{
        width: 200,
        padding: "10px 100px",
    },

    descricao1:{
        marginLeft: 130,
        marginBottom: 10,
      
      },
      
      descricao2:{
        marginLeft: 250,
        marginBottom: 10,
      
      },
      
      descricao3:{
        marginLeft: 230,
        marginBottom: 10,
      
      },

      dolar:{
        color: "red"
      },
      margin:{
        marginBottom: 50,
      },
      
      modal:{
        width:" 500px",
        height:"500px",
        padding: 20,
        overflowY:"hidden",
        overflowX:"hidden",
        display: "flex",
        justifyContent:"center",
        alignItems: "center",
      },

      imgApi:{
        width: 300,
        height:300,
      },

      buttonCard:{
        background: "#d73a1e",
        border: "none",
        padding: 15,
        color: "white",
        borderRadius: 10,
        
      },

      buttonOpen:{
        float: "right",
        textAling: "right",
        display:"flex",
        justifyContent: "flex-end",
        padding: 10,
      }
});

class Page extends Component {
    state = {
        open: false,
        potions: [],
    };

    componentDidMount() {
      axios.get(API)
        .then(res => {
          let pot = res.data.potions;          
          console.log(res.data.potions);
          this.setState({
            potions: pot
          });
        })
    }
    
    handleClickOpen = id => {
      this.setState({ open: true, id });
      const potion = this.state.potions.find(potion => potion.id === id)
      this.setState(
        { potion }
      )
}  

      handleClose = () => {
        this.setState({ open: false });
    };



  render() {
    const { classes, fullScreen } = this.props;

    return (
      <div className={classes.root}>
              <div className={classes.grid}>
          <Grid >
              <Grid item xs={12}>

                  <a href="javascript:void(0)" onClick={() => this.handleClickOpen(1)}><img src={aging} className={classes.img} alt="logo" /></a>  
                  <a href="javascript:void(0)" onClick={() => this.handleClickOpen(2)}><img src={bulgeye} className={classes.img} alt="logo" /></a>
                  <a href="javascript:void(0)" onClick={() => this.handleClickOpen(3)}><img src={dragon} className={classes.img} alt="logo" /> </a>               
              </Grid>
              <span className={classes.descricao1}>Aging Potion<span className={classes.dolar}> $29.99</span></span>
              <span className={classes.descricao2}>Bulgeye Potion<span className={classes.dolar}> $29.99</span></span>
              <span className={classes.descricao3}>Dragon Tonic<span className={classes.dolar}> $29.99</span></span>
              <div className={classes.margin}/>
              <Grid item xs={12}>
                  <img src={love} className={classes.img} alt="logo" />
                  <img src={polyjuice} className={classes.img} alt="logo" />
                  <img src={sleeping} className={classes.img} alt="logo" />
              </Grid>
              <span className={classes.descricao1}>Love potion <span className={classes.dolar}> $29.99</span> </span>
              <span className={classes.descricao2}>Polyjuice Potion<span className={classes.dolar}> $29.99</span> </span>
              <span className={classes.descricao3}>Sleeping Draught<span className={classes.dolar}> $29.99</span> </span>
              <div className={classes.margin}/>
            </Grid>
        </div>

        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          { this.state.potion && 
        <React.Fragment>   
          <div  className={classes.buttonOpen} onClick={this.handleClose} color="primary">
          <FontAwesomeIcon className ='font-awesome' icon={faTimes} />
          </div>
          <div className={classes.modal}>
          
             <div><img src={`../img/${this.state.potion.image}`} className={classes.imgApi}/> </div>  
             <div><h2>{this.state.potion.name}</h2>
              <h4>Use/Effect</h4>
              <p> {this.state.potion.effect}</p>
              <h4>Ingredients</h4>
              <p>{this.state.potion.ingredients}</p>
              <h3>Price</h3>
              <p style={{ color: '#d73a1e' }}>{this.state.potion.price}</p>
              <button className={classes.buttonCard}>ADD TO CARD</button>
          </div> 
          </div>
          </React.Fragment>
          
          }
        </Dialog>

      </div>
    );
  }
}

export default withStyles(styles)(Page);