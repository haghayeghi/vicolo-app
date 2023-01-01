const ShowFood = (props) => {
  return (
    <div id="sort" className="bg-gradient-to-r from-white via-gray-3 to-white pt-[1px] mx-[100px] mt-3">
      <div className="bg-white py-5 w-full flex">
        <div className="m-auto">{props.food.title}</div>
      </div>
    </div>
  );
};

export default ShowFood;
