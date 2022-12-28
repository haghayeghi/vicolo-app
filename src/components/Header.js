import BGDiv from "./BGDiv";
import whiteLogo from "../assets/white-logo.svg"

function Header() {
  return (
    <div className="h-[96px]">
      <BGDiv className=" h-[96px] w-[260px]">
        <img className="m-auto pt-[30px] " src={whiteLogo} alt="Vicolo22"/>
      </BGDiv>

    </div>
  )
}

export default Header