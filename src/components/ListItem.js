import MainBtn from "./MainBtn";
import FavStar from "./FavStar";
import Heart from "./Heart";

const ListItem = (props) => {
  return (
    <div>
      <div className="w-[215px] group" key={props.itemId}>
        <div className="absolute mt-[23px] ml-[21px]">
          <Heart heartStatus={props.heart} />
        </div>
        <div className="group-hover:shadow-lg  flex h-[215px] w-[215px] rounded-full border-4 border-solid border-gray-3  ">
          <img className="m-auto" alt="" src={props.imageUrl} />
        </div>
        <div className="text-center font-semibold text-2xl mt-4 text-primary">{props.title}</div>

        <div className=" flex m-auto">
          <div className="flex m-auto">
            <div className="flex m-auto">
              <FavStar rate={props.star} />
            </div>
            <div className="text-gray-4 pl-1 pt-1">({props.vote})</div>
          </div>
        </div>
      </div>
      <div className="text-center m-auto mt-4">
        <MainBtn status="white" className="group flex m-auto ">
          <div className="pr-2 text-secondary-1 group-hover:text-white">+</div>
          <div>Add to Cart</div>
        </MainBtn>
      </div>
    </div>
  );
};

export default ListItem;
