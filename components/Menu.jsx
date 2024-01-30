import React from "react";
import { card2 } from "./Helper";
import Image from "next/image";

const Menu = () => {
  return (
    <>
      <div className="mt-[80px]">
        <div className="flex gap-[30px] justify-center">
          <h1 className="font-bold text-[32px]">Menu</h1>
          <h1 className="font-bold text-[32px]">Menu2</h1>
        </div>
        <div className="bg-[#f9fafd] max-w-[1440px] w-full rounded-xl mx-auto p-6 grid gap-4 justify-center grid-cols-3 max-md:grid-cols-2">
          {card2.map((item, index) => (
            <div
              key={index}
              className="max-w-[300px] hover:bg-[#FFC554] mx-auto duration-300 p-2 w-full border-[2px] rounded-xl border-[#FFC554]"
            >
              <div className="flex items-center justify-between">
                <h1 className="font-semibold text-[26px]">{item.product}</h1>
                <p className="font-semibold text-[22px]">{item.price}</p>
              </div>
              <p className="text-[#748194] font-medium text-[16px]">
                {item.descr}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[100px] bg-black">
        <div className="max-w-[1440px] w-full mx-auto flex items-center gap-[50px] justify-center">
          <Image src="/img/noodles.png" width={300} height={300} alt="noddles"/>
          <div>
            <h1 className="text-[#ffc554] text-[16px] font-bold">Hungry?</h1>
            <h1 className="text-white text-[25px] mt-1">We will home deliver !</h1>
            <button type="submit" className="text-[#4D5969] text-[16px] font-bold uppercase border-[2px] bg-[#FFC554] rounded-2xl max-w-[200px] w-full h-[40px] mt-[40px] hover:bg-transparent hover:text-white duration-300">Make an order</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
