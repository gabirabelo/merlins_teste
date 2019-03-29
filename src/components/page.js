import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import aging from "../img/aging-potion.png";
import bulgeye from "../img/bulgeye-potion.png";
import dragon from "../img/dragon-tonic.png";
import love from "../img/love-potion.png";
import polyjuice from "../img/polyjuice-potion.png";
import sleeping from "../img/sleeping-draught.png";

import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



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
});

class Page extends Component {
    state = {
        open: false,
        potions: [],
    };
    
      handleClickOpen = () => {
        this.setState({ open: true });
    };
    
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
                  <a onClick={this.handleClickOpen} value="1"><img src={aging} className={classes.img} alt="logo" /></a>
                  <a onClick={this.handleClickOpen} value="2"><img src={bulgeye} className={classes.img} alt="logo" /></a>
                  <a onClick={this.handleClickOpen} value="3"><img src={dragon} className={classes.img} alt="logo" /> </a>               
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
          <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText>

            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(Page);