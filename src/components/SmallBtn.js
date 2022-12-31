const SmallBtn = (props) => {
  return (
    <button
      onClick={props.clickFunc}
      className={`text-sm px-4 py-1 mx-1 rounded-full border-solid border-[1px] hover:bg-primary hover:text-white ${
        props.status === "active" ? "bg-primary text-white  border-primary" : "bg-white text-primary  border-gray-4"
      }`}
    >
      {props.children}
    </button>
  );
};

export default SmallBtn;
