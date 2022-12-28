import colorLogo from "../assets/color-logo.svg"

const Footer = () => {
  return (
    <div className=" h-[96px] text-center py-[34px] text-gray-4 border-solid border-t-[1px] border-gray-2">
      <p className="inline-block ">©️ 2023</p>
      <img className="inline-block w-[85px] h-[21px] mt-1 mx-2" src={colorLogo} alt="Vicolo22"/>
      <p className="inline-block ">All rights reserved.</p>
    </div>
  );
};

export default Footer;
