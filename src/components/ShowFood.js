import Alink from "./ALink";
import MainBtn from "./MainBtn";
import BGTextClip from "./BGTextClip";
import { Link } from "react-router-dom";
import bigger from "../assets/bigger.svg";
import clock from "../assets/clock.svg";
import cartIcon from "../assets/cart-white.svg";
import FavStar from "./FavStar";
import Heart from "./Heart";
import { useRef, useEffect, useState } from "react";

const ShowFood = (props) => {
  const catArray = ["Pizza", "Burger", "Pasta", "Steack", "Drink"];

  const [heartState, setHeartState] = useState(props.food.heart);

  const clickHeartHandler = (wh, hID) => {
    if (wh === "full") {
      setHeartState(false);
    } else {
      setHeartState(true);
    }
  };
  const [sizeState, setSizeState] = useState("M");
  const sizeHandler = (size) => {
    setSizeState(size);
  };

  const [amountState, setAmountState] = useState(1);
  const amountHandler = (q) => {
    if (q === "plus") {
      setAmountState(amountState + 1);
    } else if (q === "minus" && amountState !== 1) {
      setAmountState(amountState - 1);
    }
  };

  const foodRef = useRef();

  useEffect(() => {
    if (props.food.priceM !== 0) {
      setSizeState("M");
    } else if (props.food.priceS !== 0) {
      setSizeState("S");
    } else {
      setSizeState("L");
    }

    setAmountState(1);
    foodRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [props.food]);

  const countPrice = (S, M, L) => {
    let price = 0;
    switch (sizeState) {
      case "S":
        price = S * amountState;
        break;
      case "M":
        price = M * amountState;
        break;
      case "L":
        price = L * amountState;
        break;
      default:
        price = M * amountState;
        break;
    }
    return price;
  };

  const price = countPrice(props.food.priceS, props.food.priceM, props.food.priceL);
  const cartData = [props.food.itemID, props.food.title, amountState, sizeState, price, props.food.image];

  return (
    <div id="food" ref={foodRef} className="bg-gradient-to-r from-white via-gray-3 to-white pt-[1px] mx-[100px] mt-3">
      <div className="bg-white pt-[50px] w-full flex flex-row">
        <div id="LeftCol" className="basis1/2">
          <div className="p-5 border-[8px] border-solid border-gray-2 rounded-full">
            <img src={props.food.bigimage} alt={props.food.title} width="400px" height="400px" />
          </div>
        </div>
        <div id="RightCol" className="basis1/2 pl-[25px]">
          <div id="Nav" className="text-primary flex">
            <Link to="/order/All">
              <Alink title="Foods" />
            </Link>{" "}
            <img className="mt-[-5px]" src={bigger} alt="arrow" />{" "}
            <Link to={`/order/${catArray[props.food.catid - 1]}`}>
              <Alink title={catArray[props.food.catid - 1]} />
            </Link>{" "}
          </div>
          <div id="NameAndHeart" className="flex pt-3">
            <div className="pl-2 text-4xl font-bold text-primary">{props.food.title}</div>
            <div className="mt-5 ml-3">
              <Heart heartID={props.itemID} clickHeart={clickHeartHandler} heartStatus={heartState} />
            </div>
          </div>
          <div id="Star" className="flex pt-3">
            <div className="flex ml-2 mt-[2px]">
              <FavStar rate={props.food.star} />
            </div>
            <div className="text-gray-4 ml-2">({props.food.vote})</div>{" "}
          </div>
          <div id="readytime" className="flex pt-3">
            <div className="ml-2 mt-[9px]">
              <img alt="clock" src={clock} />
            </div>
            <div className="flex mt-[5px] ml-5 text-primary text-xl">{props.food.readytime}</div>
          </div>
          <div id="ChooseSize" className="flex pt-5 ml-1">
            {props.food.priceS !== 0 && sizeState === "S" && <button className="mr-3 bg-primary text-white text-xl px-3 py-[3px] rounded-[16px]">S</button>}
            {props.food.priceS !== 0 && sizeState !== "S" && (
              <button
                className="mr-3 bg-gray-3 text-white text-xl px-3 py-[3px] rounded-[16px] hover:bg-primary"
                onClick={() => {
                  sizeHandler("S");
                }}
              >
                S
              </button>
            )}
            {props.food.priceM !== 0 && sizeState === "M" && <button className="mr-3 bg-primary text-white text-xl px-[11px] py-[3px] rounded-[16px]">M</button>}
            {props.food.priceM !== 0 && sizeState !== "M" && (
              <button
                className="mr-3 bg-gray-3 text-white text-xl px-[11px] py-[3px] rounded-[16px] hover:bg-primary"
                onClick={() => {
                  sizeHandler("M");
                }}
              >
                M
              </button>
            )}
            {props.food.priceL !== 0 && sizeState === "L" && <button className="mr-3 bg-primary text-white text-xl px-3 py-[3px] rounded-[16px]">L</button>}
            {props.food.priceL !== 0 && sizeState !== "L" && (
              <button
                className="mr-3 bg-gray-3 text-white text-xl px-3 py-[3px] rounded-[16px] hover:bg-primary"
                onClick={() => {
                  sizeHandler("L");
                }}
              >
                L
              </button>
            )}
          </div>

          <div id="amount" className="flex pt-4">
            <button
              className="ml-2 mt-[12px] border-2 border-solid border-primary h-[25px] w-[25px] rounded-[10px] text-2xl leading-[20px] text-secondary-1 hover:bg-primary"
              onClick={() => {
                amountHandler("minus");
              }}
            >
              -
            </button>
            <div className="flex font-semibold mt-[5px] ml-3 text-primary text-2xl w-[40px] text-center">
              <p className="text-center w-full">{amountState}</p>
            </div>
            <button
              className="ml-3 mt-[12px] border-2 border-solid border-primary h-[25px] w-[25px] rounded-[10px] text-2xl leading-[23px] text-secondary-1 hover:bg-primary"
              onClick={() => {
                amountHandler("plus");
              }}
            >
              +
            </button>
          </div>
          <div id="addToBasket" className="flex pt-4">
            <MainBtn
              clickHandler={() => {
                props.addCartHandler(cartData);
              }}
              status="anim"
              className=""
            >
              <img alt="arrow" src={cartIcon} className="fill-white inline-block pr-4" />
              Add to Cart
            </MainBtn>
          </div>
          <div id="price" className="flex pt-4">
            <div className="border-2 border-solid border-gray-3 rounded-full px-6 pt-[4px]">
              <BGTextClip className="ml-2 font-semibold text-2xl">{price} $</BGTextClip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowFood;
