import SmallBtn from "./SmallBtn";

const SortChoices = (props) => {
  return (
    <div id="sort" className="bg-gradient-to-r from-white via-gray-3 to-white py-[1px] mx-[100px]">
      <div className="bg-white py-5 w-full flex">
        <div className="m-auto">
          <span className="mr-4">Sort</span>
          <SmallBtn
            clickFunc={() => {
              props.sortClickHandler(1);
            }}
            status={props.sortS === 1 ? "active" : ""}
            className="text-sm mx-2"
          >
            Relevance
          </SmallBtn>
          <SmallBtn
            clickFunc={() => {
              props.sortClickHandler(2);
            }}
            status={props.sortS === 2 ? "active" : ""}
            className="text-sm mx-2"
          >
            Popular
          </SmallBtn>
          <SmallBtn
            clickFunc={() => {
              props.sortClickHandler(3);
            }}
            status={props.sortS === 3 ? "active" : ""}
            className="text-sm mx-2"
          >
            Recent
          </SmallBtn>
          <SmallBtn
            clickFunc={() => {
              props.sortClickHandler(4);
            }}
            status={props.sortS === 4 ? "active" : ""}
            className="text-sm mx-2"
          >
            Price
          </SmallBtn>
        </div>
      </div>
    </div>
  );
};

export default SortChoices;
