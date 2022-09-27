import React from "react";
import { AiFillApple, AiFillAndroid } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";

import { Link } from "react-router-dom";

function Home() {

  return (
    <div className="bg-brand-bg relative">
      <div className="lg:flex">
        <div className="h-[400px] lg:h-screen w-full overflow-hidden flex flex-col p-[20px] justify-center lg:items-center">
          <div className="lg:w-1/2">
            <h1 className="font-normal">
              Wemuda books
            </h1>
            <div className="flex space-x-[10px] mt-[10px]">

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