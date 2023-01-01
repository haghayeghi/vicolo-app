import BGTextClip from "./BGTextClip";
import delIcon from "../assets/delete.svg";

const Basket = (props) => {
  const amount = props.data.length;
  return (
    <div className="w-[375px]  bg-white">
      <div id="modalTitle" className="h-[64px]  shadow-subtle">
        <BGTextClip className="text-2xl  text-center pt-[12px]">MY ORDER</BGTextClip>
      </div>
      {amount === 0 && <div className="p-5 text-center">The Cart is Empty!</div>}
      {amount !== 0 &&
        props.data.map((result, index) => (
          <div key={index} className="flex border-b-2 hover:bg-gray-2">
            <div className="p-[25px]">
              <img alt="" src={result[5]} className="h-[55px] w-[55px]" />
            </div>
            <div className="flex-1 pt-[25px] ">
              <div className="flex font-semibold text-primary">{result[1]}</div>
              <div className="flex pt-2">
                <div className="text-gray-4 pr-1">$</div>
                <div className=" text-primary font-semibold">{result[4]}</div>
                <div className=" text-gray-4 pl-[45px] pr-1">size</div>
                <div className=" font-semibold">{result[3]}</div>
                <div className=" text-gray-4 pl-[45px] pr-1">X</div>
                <div className=" font-semibold">{result[2]}</div>
                <div className=" pl-5 w-[50px] flex-1">
                  <button
                    className="float-right pr-5"
                    onClick={() => {
                      props.handlDelIem(index);
                    }}
                  >
                    <img alt="delete" src={delIcon} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Basket;
