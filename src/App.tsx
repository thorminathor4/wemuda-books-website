import React from 'react';
import { AiFillApple, AiFillAndroid } from "react-icons/ai";
import './App.css';

import { Link } from "react-router-dom";

const LINKS = [
  {
    logo: <AiFillApple color="inhieret" size="26px" />,
    link: "https://google.com",
    alt: "apple",
  },
  {
    logo: <AiFillAndroid color="inhieret" size="26px" />,
    link: "https://google.com",
    alt: "android",
  },
];

function App() {
  return (
    <div className="bg-brand-bg relative">
      <div className="lg:flex">
        <div className="h-[500px] lg:h-screen w-full overflow-hidden flex flex-col p-[20px] justify-center lg:items-center">
          <div className="lg:w-1/2">
            <h2 className="font-normal">
              Wemuda books
            </h2>
            <h2 className="font-book mt-[30px]">Installer nu</h2>
            <div className="flex space-x-[10px] mt-[10px]">
              {LINKS.map((item) => {
                return (
                  <a
                    href={item.link}
                    target="_blank"
                    className="w-[54px] h-[54px] border-[1px] border-black flex justify-center items-center rounded-xl hover:border-transparent hover:bg-white hover:cursor-pointer hover:shadow-md transition-all duration-200"
                  >
                    {item.logo}
                  </a>
                );
              })}
            </div>
            <div className="flex space-x-[20px] text-[14px] font-semibold mt-[40px]">
              <a href="" className="hover:underline">
                Til den gamle side
              </a>
              <Link to="./home" className="underline hover:no-underline">
                Home
              </Link>
            </div>
          </div>
        </div>
        <div className="h-[800px] lg:h-screen bg-brand-highlight w-full overflow-hidden flex flex-col items-center">
        </div>
      </div>
    </div>
  );
}

export default App;
