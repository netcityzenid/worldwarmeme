import React from "react";

export default function Navbar() {
  return (
    <div className="relative z-[100] flex justify-center items-center w-full px-5">
      <div className="flex justify-center w-full items-center">
        <img src="/images/logo.png" alt="pepe" className="mt-0 h-8 w-auto mr-1 "></img>
        <div className="  h-16 items-center  flex z-[100] text-xl uppercase font-semibold text-yellow-500">World War Meme</div>
      </div>
      
    </div>
  );
}
