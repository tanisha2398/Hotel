import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Burger from "../../components/Burger/Burger";
import Card from "../../components/Card/Card";
import * as actions from "../../store/actions/index";
import Aux from "../../higherOrderComponent/Auxilary/Auxilary";
import Hotel from "../../components/Hotel/Hotel";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "axios";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../higherOrderComponent/withErrorHandler/withErrorHandler";

class BurgerBuilder extends Component {
  // constructor(props){
  //   super(props);
  //   this.state={...}
  // }

  componentDidMount() {
    // console.log(this.props);
    this.props.onInitHotels();
  }

  render() {
    const useStyles = makeStyles(theme => ({
      root: {
        flexGrow: 1
      },
      paper: {
        height: 140,
        width: 100
      },
      control: {
        padding: theme.spacing(2)
      }
    }));

    let hotel = this.props.error ? <p>Hotels can't be loaded</p> : <Spinner />;
    if (this.props.hotels) {
      hotel = (
        <Grid container justify="center">
          {this.props.hotels.map(hotl => (
            <Grid key={hotl.id} item xs={4}>
              <Card
                className={useStyles.paper}
                name={hotl.hotel_name}
                picture={hotl.hotel_pic}
              />
            </Grid>
          ))}
        </Grid>
      );
    }

    return (
      <Container fixed>
        <Grid container className={useStyles.root} spacing={2}>
          <Grid item xs={12}>
            {hotel}
          </Grid>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    hotels: state.hotelData.hotels,

    error: state.hotelData.error
    // isAuthenticated: state.auth.isAuthenticated
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onInitHotels: () => dispatch(actions.initHotels())

    // onSetAuthRedirectPath: path => dispatch(actions.setAuthRedirectPath(path))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BurgerBuilder);
