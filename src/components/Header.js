import BGDiv from "./BGDiv";
import BGText from "./BGTextClip";

function Header() {
  return (
    <div className="h-[96px]">
      <BGDiv className="h-[96px] w-[260px]">
        ddd
      </BGDiv>

      <BGText className="text-5xl font-black">
        What is this my dear
      </BGText>
    </div>
  )
}

export default Header