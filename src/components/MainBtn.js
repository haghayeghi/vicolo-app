const mainBtn = (props) => {
  if (props.status === "dark") {
    return (
      <button
        onClick={props.clickHandler}
        className={props.className + 
            " transition-all hover:transition-all bg-primary py-2 px-6 text-white rounded-full hover:bg-gradient-to-b from-secondary-1 to-secondary-2"}
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
          " bg-white py-2 px-6 text-primary rounded-full inner-border-2 border-solid inner-border-primary hover:bg-gradient-to-b from-secondary-1 to-secondary-2 hover:inner-border-0 hover:text-white"
        }
      >
        {props.children}
      </button>
    );
  } else if (props.status === "color") {
    return (
      <button
        onClick={props.clickHandler}
        className={
          props.className +
          " bg-gradient-to-b from-secondary-1 to-secondary-2 py-2 px-6 text-white rounded-full hover:bg-gradient-to-b hover:from-primary hover:to-primary"
        }
      >
        {props.children}
      </button>
    );
  }
};

export default mainBtn;
