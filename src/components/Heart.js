import HeartFull from "../assets/heart_full.svg";
import HeartEmpty from "../assets/heart_empty.svg";

const Heart = (props) => {
  return (
    <>
      {props.heartStatus === true ? (
        <button
          onClick={() => {
            props.clickHeart("full", props.heartID);
          }}
          className=""
        >
          <img src={HeartFull} alt="" />
        </button>
      ) : (
        <button
          onClick={() => {
            props.clickHeart("empty", props.heartID);
          }}
          className=""
        >
          <img src={HeartEmpty} alt="" />
        </button>
      )}
    </>
  );
};

export default Heart;
