import MainBtn from "./MainBtn";

const Basket = (props) => {
 return (
  <div className={!props.show ? 'hidden' : 'absolute bg-black bg-opacity-60 h-screen w-screen bg-transparent-50'}>
    <MainBtn className="w-8 h-8 pt-1 px-0 ml-4 mt-[3px] text-center" clickHandler={(e) => props.handleBasket(false)} status={'color'}>
          x
    </MainBtn>
    </div>
);
};

export default Basket;
