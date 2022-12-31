import starFull from "../assets/star_full.svg";
import starEmpty from "../assets/star_empty.svg";

const FavStar = (props) => {
  let starRow = [];
  for (let index = 1; index < 6; index++) {
    index > props.rate ? starRow.push(<img className="ml-[3px]" src={starEmpty} alt={index} />) : starRow.push(<img className="ml-[3px]" src={starFull} alt={index} />);
    console.log(index);
  }

  return <>{starRow}</>;
};

export default FavStar;
