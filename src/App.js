import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Modal from "./components/Modal";
import Basket from "./components/Basket";
import HomePage from "./components/HomePage";
import Order from "./components/Order";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const wp = useLocation().pathname.substring(1);
  const [cartItems, setCartItems] = useState([]);

  const addCartHandler = (pm) => {
    const itemId = pm[0];
    const itemSize = pm[3];
    const item = cartItems.filter((e) => (e[0] === itemId) & (e[3] === itemSize));
    const existItem = item.length;

    if (existItem === 0) {
      setCartItems((cartItems) => [...cartItems, pm]);
    }
  };

  const handlDelIem = (ii) => {
    const temp = [...cartItems];
    temp.splice(ii, 1);
    setCartItems(temp);
  };

  const basketAmount = cartItems.length;

  const [showBasket, setshowBasket] = useState(false);
  const handleBasket = (showcheck) => {
    showcheck ? setshowBasket(true) : setshowBasket(false);
  };

  return (
    <div className="flex flex-col h-screen font-exo">
      <Header basketAmount={basketAmount} handleBasket={handleBasket} page={wp} />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/order" element={<Order addCartHandler={addCartHandler} />}>
          <Route path=":itemTitle" element={<Order />}></Route>
        </Route>
        <Route path="/menu" element={<Content content="Menu - Not Prepared in This Version!" />}></Route>
        <Route path="/about" element={<Content content="Our Story - Not Prepared in This Version!" />}></Route>
        <Route path="/login" element={<Content content="Login Form" />}></Route>
        <Route path="/signup" element={<Content content="SignUp Here" />}></Route>
        <Route path="*" element={<Content content="Page Not Found" />}></Route>
      </Routes>
      <Footer />
      <Modal show={showBasket} handleBasket={handleBasket}>
        <Basket handlDelIem={handlDelIem} data={cartItems} />
      </Modal>
    </div>
  );
}

export default App;
