import BGDiv from "./BGDiv";
import ALink from "./ALink";
import MainBtn from "./MainBtn";
import whiteLogo from "../assets/white-logo.svg";
import cartIcon from "../assets/cart.svg";
import BGTextClip from "./BGTextClip";

function Header(props) {

  let basketColor='';
  props.basketAmount==='0' ? basketColor=' bg-gradient-to-b from-gray-4 to-gray-5 ':basketColor='  ';

  return (
    <div id="header" className="flex flex-row h-[96px] shadow-subtle">
      <BGDiv id="Logo" className=" h-[96px] w-[260px]">
        <img className="ml-[59px] pt-[32px]  " src={whiteLogo} alt="Vicolo22" />
      </BGDiv>

      <div id="Nav" className="flex-auto items-center">
        <ul className="flex pt-[36px] m-auto w-max text-primary">
          <li className="mx-6 w-[80px]">
            <ALink clickHandler={(e) => props.handleNav(1)} title="Home" status={props.page === 1 ? true : false} />
          </li>
          <li className="mx-6 w-[120px]">
            <ALink clickHandler={(e) => props.handleNav(2)} title="Order Now" status={props.page === 2 ? true : false} />
          </li>
          <li className="mx-6 w-[60px]">
            <ALink clickHandler={(e) => props.handleNav(3)} title="Menu" status={props.page === 3 ? true : false} />
          </li>
          <li className="mx-6 w-[100px]">
            <ALink clickHandler={(e) => props.handleNav(4)} title="Our Story" status={props.page === 4 ? true : false} />
          </li>
        </ul>
      </div>

      <div id="Right" className="">
        <MainBtn className="mt-[24px] mr-4 " clickHandler={(e) => props.handleNav(5)} status={'white'}>
          Login
        </MainBtn>
        <MainBtn className="mt-[24px]" clickHandler={(e) => props.handleNav(6)} status={'dark'}>
          SignUp
        </MainBtn>
        <div className="float-right flex flex-row mt-[24px] mx-6 h-[42px] w-[150px]">
          <BGTextClip className="font-semibold text-2xl pt-[1px]">|</BGTextClip>
          <MainBtn className={basketColor + 'w-8 h-8 pt-1 px-0 ml-4 mt-[3px] text-center'} clickHandler={(e) => props.handleBasket(true)} status={'color'}>
          {props.basketAmount}
        </MainBtn>
         <img src={cartIcon} className="ml-2 h-[28px] mt-[6px]" alt="cart"/>
        </div>
      </div>
    </div>
  );
}

export default Header;
