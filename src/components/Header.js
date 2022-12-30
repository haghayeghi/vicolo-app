import BGDiv from "./BGDiv";
import ALink from "./ALink";
import MainBtn from "./MainBtn";
import whiteLogo from "../assets/white-logo.svg";
import cartIcon from "../assets/cart.svg";
import BGTextClip from "./BGTextClip";
import {Link} from "react-router-dom";


function Header(props) {

  let basketColor='';
  props.basketAmount==='0' ? basketColor=' bg-gradient-to-b from-gray-4 to-gray-5 ':basketColor='';

  return (
    <div id="header" className="flex flex-row h-[96px] shadow-subtle  min-w-[1280px]">
      <BGDiv id="Logo" className=" h-[96px] w-[260px]">
        <img className="ml-[59px] pt-[32px]  " src={whiteLogo} alt="Vicolo22" />
      </BGDiv>

      <div id="Nav" className="flex-auto items-center">
        <ul className="flex pt-[36px] m-auto w-max text-primary">
          <li className="mx-6 w-[80px]">
            <Link to="/"><ALink title="Home" status={props.page === '' ? true : false} /></Link>
          </li>
          <li className="mx-6 w-[120px]">
          <Link to="/order"><ALink title="Order Now" status={props.page === 'order' ? true : false} /></Link>
          </li>
          <li className="mx-6 w-[60px]">
          <Link to="/menu"><ALink title="Menu" status={props.page === 'menu' ? true : false} /></Link>
          </li>
          <li className="mx-6 w-[100px]">
          <Link to="/about"><ALink title="Our Story" status={props.page === 'about' ? true : false} /></Link>
          </li>
        </ul>
      </div>

      <div id="Right" className="">
      <Link to="/login"><MainBtn className="mt-[24px] mr-4 " status={'white'}>
          Login
        </MainBtn></Link>
        <Link to="/signup"><MainBtn className="mt-[24px]" status={'dark'}>
          SignUp
        </MainBtn></Link>
        <div className="float-right flex flex-row mt-[24px] mx-6 h-[42px] w-[120px]">
          <BGTextClip className="font-semibold text-2xl pt-[1px]">|</BGTextClip>
          <MainBtn className={`${basketColor} w-8 h-8 pt-1 pl-0 pr-0 ml-4 mt-[3px] text-center`} clickHandler={(e) => props.handleBasket(true)} status={'color'}>
          {props.basketAmount}
        </MainBtn>
         <img src={cartIcon} className="ml-2 h-[28px] mt-[6px]" alt="cart"/>
        </div>
      </div>
    </div>
  );
}

export default Header;
