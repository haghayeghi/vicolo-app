import { Link } from "react-router-dom";

const CatItem = (props) => {
  const activeItem = props.active;
  return (
    <div className="mx-3">
      <Link to={"/order/" + props.title}>
        <button
          className={`h-[75px] w-[75px] rounded-full border-dotted border-2 border-primary hover:bg-primary transition-all hover:fill-white ${
            activeItem === "True" ? "bg-primary fill-white " : " fill-primary"
          }`}
        >
          {props.children}
        </button>
      </Link>
      <div className={`text-center mt-2 ${activeItem === "True" ? "font-black italic " : ""} }`}>{props.title}</div>
    </div>
  );
};

export default CatItem;
