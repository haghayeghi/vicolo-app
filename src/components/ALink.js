const ALink = (props) => {
  let status = props.status;

  return (
    <button onClick={props.clickHandler} className={status ? "transition-all font-semibold border-solid border-b-[3px] border-secondary-1 px-2 " : "transition-all  hover:text-gray-5  px-2"}>
      {props.title}
    </button>
  );
};

export default ALink;
