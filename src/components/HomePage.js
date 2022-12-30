import MainBtn from "./MainBtn";
import arrow from "../assets/arrow.svg";
import pizza1 from "../assets/foods/pizza-1-huge.png";
import {Link} from "react-router-dom";



const HomePage = () => {
return (
    <div className="flex flex-row container  mx-auto flex-grow my-10 bg-huge-logo bg-no-repeat bg-right-top">
        <div className="basis-1/2 mt-[120px;] mr-5">
            <p className="text-gray-4 text-xl">At Vicolo 22 Italian restaurant</p>
            <p className="text-primary mt-2 mb-4 text-5xl font-black">Enjoy Delicious Food at Popular Prices</p>
            <Link to="/order"><MainBtn status="anim">
                Order Now <img alt="arrow" src={arrow} className="inline-block pl-2"/>
            </MainBtn></Link>
            
        </div>
        <div className="basis-1/2 ">
            <div className="p-5 w-fit float-right mr-5 mt-7 border-solid border-2 border-gray-3 rounded-full">
                <img src={pizza1} alt="pizza" className="m-auto h-[480px] w-[480px] hover:animate-spin-pizza"/>
            </div>
        </div>
    </div>
);
    
};
    
export default HomePage;