const mainBtn = (props) => {
  if (props.status === "dark") {
    return (
      <button
        onClick={props.clickHandler}
        className={props.className + " transition-all hover:transition-all bg-primary py-2 px-6 text-white rounded-full hover:bg-gradient-to-b from-secondary-1 to-secondary-2"}
      >
        {props.children}
      </button>
    );
  } else if (props.status === "white") {
    return (
      <button
        onClick={props.clickHandler}
        className={
          props.className +
          " bg-white py-2 px-6 text-primary rounded-full inner-border-2 border-solid inner-border-gray-4 hover:bg-gradient-to-b from-secondary-1 to-secondary-2 hover:inner-border-0 hover:text-white"
        }
      >
        {props.children}
      </button>
    );
  } else if (props.status === "color") {
    return (
      <button
        onClick={props.clickHandler}
        className={props.className + " bg-gradient-to-b from-secondary-1 to-secondary-2 py-2 px-6 text-white rounded-full hover:bg-gradient-to-b hover:from-primary hover:to-primary"}
      >
        {props.children}
      </button>
    );
  } else if (props.status === "anim") {
    return (
      <button onClick={props.clickHandler} className=" bg-primary py-4 px-6 text-white rounded-full btn2 relative tracking-wider leading-none overflow-hidden" type="button">
        <span className="absolute inset-0 bg-gradient-to-b from-secondary-1 to-secondary-2"></span>
        <span className="absolute py-4 inset-0  justify-center items-center">{props.children}</span>
        {props.children}
      </button>
    );
  }
};

export default mainBtn;
