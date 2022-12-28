import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Basket from "./components/Basket";

function App() {
  // Page Selection
  // 1 : Home
  // 2: Order Now
  // 3: Menu
  // 4: Our Story
  // 5: Login
  // 6: SignUp
  const [page, setpage] = useState(1);
  const handleNavItemClick = (item) => {
    setpage(item);

    switch (item) {
      case 1:
        window.history.pushState("", "Home", "/Home");
        break;
      case 2:
        window.history.pushState("", "Order Now", "/Order");
        break;
      case 3:
        window.history.pushState("", "Menu", "/Menu");
        break;
      case 4:
        window.history.pushState("", "Our Story", "/About");
        break;
      case 5:
        window.history.pushState("", "Login", "/Login");
        break;
      case 6:
        window.history.pushState("", "Signup", "/Signup");
        break;
      default:
      // code block
    }
  };

  const [basketAmount, setbasketAmount] = useState('0');
  const [showBasket, setshowBasket] = useState(false);
  const handleBasket = (showcheck) => {
    showcheck ? setshowBasket(true) :setshowBasket(false);
  };

  return (
    <div className="flex flex-col h-screen font-exo">
      <Header basketAmount={basketAmount} handleBasket={handleBasket} handleNav={handleNavItemClick} page={page} />
      <Content page={page} />
      <Footer />
      <Basket  show={showBasket} handleBasket={handleBasket} />
    </div>
  );
}

export default App;
