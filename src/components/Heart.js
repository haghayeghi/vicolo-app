import HeartFull from "../assets/heart_full.svg";
import HeartEmpty from "../assets/heart_empty.svg";

const Heart = (props) => {
  return <div>{props.heartStatus === true ? <img src={HeartFull} alt="" /> : <img src={HeartEmpty} alt="" />}</div>;
};

export default Heart;
