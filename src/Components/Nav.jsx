import { useState } from "react";
import logo from "../assets/logoblack.png";

const Nav = () => {
  const navs = [
    "Home",
    "Methodical products",
    "About Us",
    "Sample Works",
    "Promotional Work",
  ];
  const [selectedNav, setSelectedNav] = useState(0);
  const handleNavChange = (nav) => {
    setSelectedNav(nav);
  };
  return (
    <nav className="h-fit w-full  top-0  font-source z-10  bg-transparent relative">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row py-3  justify-between items-center h-full px-10">
        <div className="flex h-full items-center gap-4">
          <img className="aspect-square h-[3.5rem]" src={logo} alt="logo" />
          <div className="text-lg font-semibold">
            <p>Lorem Ipsum</p>
            <p>dolor sit amet</p>
          </div>
        </div>
        <ul className="flex flex-wrap items-center">
          {navs.map((item, index) => {
            return (
              <li
                key={index}
                className={
                  selectedNav === index
                    ? " relative active-nav  cursor-pointer"
                    : "  relative hover:active-nav  cursor-pointer"
                }
                onClick={()=>{
                    handleNavChange(index)
                }}
              >
                <p>{item}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
