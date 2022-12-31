import CatItem from "./CatItem";
import ItemList from "./ItemList";

import { ReactComponent as LogoCatAll } from "../assets/logo-cat-all.svg";
import { ReactComponent as LogoCatPizza } from "../assets/logo-cat-pizza.svg";
import { ReactComponent as LogoCatBurger } from "../assets/logo-cat-burger.svg";
import { ReactComponent as LogoCatPasta } from "../assets/logo-cat-pasta.svg";
import { ReactComponent as LogoCatSteak } from "../assets/logo-cat-steak.svg";
import { ReactComponent as LogoCatDrink } from "../assets/logo-cat-drink.svg";
import { useParams } from "react-router-dom";

const Order = () => {
  const catArray = [
    { id: 1, title: "All", image: <LogoCatAll className="m-auto" /> },
    { id: 2, title: "Pizza", image: <LogoCatPizza className="m-auto" /> },
    { id: 3, title: "Burger", image: <LogoCatBurger className="m-auto" /> },
    { id: 4, title: "Pasta", image: <LogoCatPasta className="m-auto" /> },
    { id: 5, title: "Steak", image: <LogoCatSteak className="m-auto" /> },
    { id: 6, title: "Drink", image: <LogoCatDrink className="m-auto" /> },
  ];

  let { itemTitle } = useParams();

  let checkItemTitle = false;
  catArray.map((e) => {
    e.title === itemTitle && (checkItemTitle = true);
    return checkItemTitle;
  });

  checkItemTitle === false && (itemTitle = "All");

  return (
    <div className="grid grid-col-1 container  mx-auto my-10 bg-huge-logo bg-no-repeat bg-right-top">
      <div id="categories" className="m-auto flex">
        {catArray.map((e) => {
          return (
            <CatItem key={e.id} title={e.title} active={itemTitle === e.title ? "True" : "False"}>
              {e.image}
            </CatItem>
          );
        })}
      </div>
      <div id="itemList" className="m-auto mt-10">
        <ItemList itemTitle={itemTitle} />
      </div>
    </div>
  );
};

export default Order;
