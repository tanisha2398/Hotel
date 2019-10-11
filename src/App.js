import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Layout from "./higherOrderComponent/Layout/Layout";
import Hotel from "../src/containers/Hotel/Hotel";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/Logout";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";
class App extends Component {
  // componentDidMount() {
  //   this.props.onTryAutoSignup();
  // }
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={Hotel} />
        <Redirect to="/" />
      </Switch>
    );
    // if (this.props.isAuthenticated) {
    //   routes = (
    //     <Switch>
    //       <Route path="/checkout" component={Checkout} />
    //       <Route path="/orders" component={Orders} />

    //       <Route path="/logout" component={Logout} />
    //       <Route path="/" exact component={Hotel} />
    //       <Redirect to="/" />
    //     </Switch>
    //   );
    // }
    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default App;
// export default withRouter(
//   connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(App)
// );
