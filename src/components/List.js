import ListItem from "./ListItem";
import pizza1 from "../assets/foods/pizzaSmall1.png";
import pizza2 from "../assets/foods/pizzaSmall2.png";
import pizza3 from "../assets/foods/pizzaSmall3.png";
import pizza4 from "../assets/foods/pizzaSmall4.png";

const List = (props) => {
  return (
    <>
      {/* {props.itemTitle} - {props.sortType} */}
      <div id="list" className="grid grid-cols-4 gap-10 mt-10 px-[100px]">
        <ListItem itemID="2" imageUrl={pizza1} title="Pizza Mixed" star="3" vote="43" heart={false} />
        <ListItem itemID="2" imageUrl={pizza2} title="Pizza Mixed" star="3" vote="43" heart={false} />
        <ListItem itemID="2" imageUrl={pizza3} title="Pizza Mixed" star="3" vote="43" heart={true} />
        <ListItem itemID="2" imageUrl={pizza3} title="Pizza Mixed" star="3" vote="43" heart={false} />
        <ListItem itemID="2" imageUrl={pizza4} title="Pizza Mixed" star="3" vote="43" heart={false} />
        <ListItem itemID="2" imageUrl={pizza4} title="Pizza Mixed" star="3" vote="43" heart={false} />
      </div>
    </>
  );
};

export default List;
