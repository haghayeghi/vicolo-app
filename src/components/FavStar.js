import starFull from "../assets/star_full.svg";
import starEmpty from "../assets/star_empty.svg";

const FavStar = (props) => {
  let starRow = [];
  for (let index = 1; index < 6; index++) {
    index > props.rate
      ? starRow.push(
          <div key={index}>
            <img className="ml-[3px]" src={starEmpty} alt={index} />
          </div>
        )
      : starRow.push(
          <div key={index}>
            <img className="ml-[3px]" src={starFull} alt={index} />
          </div>
        );
  }

  return <>{starRow}</>;
};

export default FavStar;
