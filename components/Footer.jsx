import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#140303] bg-[url(/img/foter-bg.png)]">
        <div className="py-[100px] px-3 max-w-[1440px] w-full mx-auto flex justify-between">
          <div>
            <Image src="/img/logo.png" width={200} height={200} alt="logo" />
            <h1 className="text-[32px] font-bold text-white max-w-[271px] w-full pt-[40px]">
              Want To Taste Our Food?
            </h1>
            <button
              type="submit"
              className="max-w-[250px] mt-[50px] w-full h-[50px] rounded-xl bg-[#ffc554] border-[#ffc554] border-[2px] hover:bg-transparent hover:text-white duration-300 text-[20px] font-bold"
            >
              ORDER ONLINE
            </button>
          </div>
          <div>
            <h1 className="text-white text-[26px] font-bold">ABOUT</h1>
            <div className="flex flex-col gap-[30px] mt-[30px]">
              <Link
                href="#"
                className="text-[#FFff99] font-medium duration-300 text-[20px] hover:text-[#ffc554]"
              >
                ABOUT
              </Link>
              <Link
                href="#"
                className="text-[#FFff99] font-medium duration-300 text-[20px] hover:text-[#ffc554]"
              >
                SERVICES
              </Link>
            </div>
          </div>
          <div>
            <h1 className="text-white text-[26px] font-bold">Resources</h1>
            <div className="flex flex-col gap-[30px] mt-[30px]">
              <Link
                href="#"
                className="text-[#FFff99] font-medium duration-300 text-[20px] hover:text-[#ffc554]"
              >
                TERMS
              </Link>
              <Link
                href="#"
                className="text-[#FFff99] font-medium duration-300 text-[20px] hover:text-[#ffc554]"
              >
                HELPS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
