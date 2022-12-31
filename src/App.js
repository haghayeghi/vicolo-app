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
  const [basketAmount, setbasketAmount] = useState("0");

  const [showBasket, setshowBasket] = useState(false);
  const handleBasket = (showcheck) => {
    showcheck ? setshowBasket(true) : setshowBasket(false);
    basketAmount === 0 ? setbasketAmount("0") : setbasketAmount(basketAmount);
  };

  const wp = useLocation().pathname.substring(1);

  return (
    <div className="flex flex-col h-screen font-exo">
      <Header basketAmount={basketAmount} handleBasket={handleBasket} page={wp} />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/order" element={<Order />}>
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
        <Basket />
      </Modal>
    </div>
  );
}

export default App;
