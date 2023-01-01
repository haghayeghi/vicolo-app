import ListItem from "./ListItem";
import { useQuery } from "react-query";
import loading from "../assets/loading.svg";

const List = (props) => {
  const fetchFoods = async () => {
    const response = await fetch("https://haghayeghi.github.io/vicolo.json");
    return response.json();
  };

  const { data, isLoading, isError } = useQuery("foodItems", fetchFoods);

  if (isLoading) {
    return (
      <div className="flex mb-5 px-[10px]">
        <img className="m-auto h-[65px]" src={loading} alt="loading" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex mb-5 px-[10px]">
        <div className="m-auto h-[65px]">Error ...</div>
      </div>
    );
  }

  return (
    <>
      {/* {props.itemTitle} - {props.sortType} */}
      <div id="list" className="grid grid-cols-4 gap-10 mt-10 px-[100px]">
        {data.results.map((result) => (
          <ListItem
            key={result.id}
            itemID={result.id}
            imageUrl={result.image}
            title={result.name}
            star={result.star}
            vote={result.comments}
            heart={result.heart}
            catid={result.catid}
            readytime={result.readytime}
            priceS={result.price.S}
            priceM={result.price.M}
            priceL={result.price.L}
            showFoodHandler={props.showFoodHandler}
          />
        ))}
      </div>
    </>
  );
};

export default List;
