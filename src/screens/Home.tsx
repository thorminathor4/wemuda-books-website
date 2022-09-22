import React from "react";
import { AiFillApple, AiFillAndroid } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";

import { Link } from "react-router-dom";

function Home() {
  const LINKS = [
    {
      logo: <AiFillApple color="#000" size="26px" />,
      link: "https://apps.apple.com/dk/app/paythehippo/id518335895?l=da",
      alt: "apple",
    },
    {
      logo: <AiFillAndroid color="#000" size="26px" />,
      link: "https://play.google.com/store/apps/details?id=com.paythehippo&hl=da&gl=US",
      alt: "android",
    },
  ];

  return (
    <div className="bg-brand-bg relative">
      <div className="lg:flex">
        <div className="h-[400px] lg:h-screen w-full overflow-hidden flex flex-col p-[20px] justify-center lg:items-center">
          <div className="lg:w-1/2">
            <h1 className="font-normal">
              Wemuda books
            </h1>
            <h2 className="font-book mt-[30px] ">Prøv nu</h2>
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
              <a
                target="_blank"
                className="px-[16px] h-[54px] text-[14px] font-medium border-[1px] border-black flex justify-center items-center rounded-xl hover:border-transparent hover:bg-white hover:cursor-pointer hover:shadow-md transition-all duration-200"
              >
                <BsGlobe color="#000" size="22px" />
                <strong style={{ marginLeft: "10px" }}>Web</strong> &nbsp;-
                Coming soon!
              </a>
            </div>
            <div className="flex space-x-[20px] text-[14px] font-semibold mt-[40px]">
              <Link to="./reset" className="underline hover:no-underline">
                Reset
              </Link>
              <a
                target="_blank"
                href="mailto:info@wemuda.com"
                className="underline hover:no-underline"
              >
                Kontakt
              </a>
            </div>
          </div>
        </div>
        <div className="h-[800px] lg:h-screen bg-brand-highlight w-full overflow-hidden flex flex-col items-center justify-center">
        </div>
      </div>
    </div>
  );
}

export default Home;