import React from "react";
import { withRouter } from "react-router-dom";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
const burger = props => {
  console.log(props);
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      console.log("igKey", igKey);
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        console.log("props.ingredients[igKey],i", props.ingredients[igKey], i);
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add Ingredient</p>;
  }
  console.log(transformedIngredients);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default withRouter(burger);
