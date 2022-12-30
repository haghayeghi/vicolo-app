import MainBtn from "./MainBtn";
import closeIcon from "../assets/closeIcon.svg";
import { useEffect, useRef } from "react";

const Basket = (props) => {

  useEffect(() => {
    const close = (e) => {
      if(e.keyCode === 27){
       props.handleBasket(false)
      }
    }
    window.addEventListener('keydown', close)
  return () => window.removeEventListener('keydown', close)
  },[props])

  const bgRef=useRef()

  useEffect(() => {
    const bgVar=bgRef.current

    const closebg = (e) => {
      if (e.target === bgVar ){
      props.handleBasket(false)
      };
    }
    bgVar.addEventListener('click', closebg)
  return () => bgVar.removeEventListener('click', closebg)
  },[props])

  return (
    <div id="BG" ref={bgRef}  className={!props.show ? "hidden" : " flex absolute bg-black bg-opacity-60 h-screen w-screen bg-transparent-50"}>
      <div  id="container" className="flex m-auto">
        <div id="closeBtn">
          <MainBtn className=" h-[64px] w-[64px] rounded-none px-0 text-center" clickHandler={(e) => props.handleBasket(false)} status={"color"}>
            <img src={closeIcon} className="m-auto" alt="close" />
          </MainBtn>
        </div>
        <div id="ModalContent">{props.children}</div>
      </div>

    </div>
  );
};

export default Basket;
