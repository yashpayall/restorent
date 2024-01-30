import React from "react";
import { CallerIcon, InstaIcon, LocationIcon } from "./Icon";

const Loactioncontact = () => {
  return (
    <>
      <div className="bg-[#f9fafd] pt-[100px]">
        <div className="max-w-[1440px] pb-[100px] w-full mx-auto px-3">
          <p className="text-[24px] font-serif text-center">
            Location & Timing
          </p>
          <h1 className="font-bold text-center text-[32px]">Contact with us</h1>
          <div className="flex justify-center mt-[80px] gap-[30px]">
            <div className="max-w-[300px] flex flex-col gap-[15px] shadow-shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] w-full bg-white rounded-lg p-6">
              <div className="flex items-center gap-3">
                <div className="max-w-[20px] w-full">
                  {" "}
                  <CallerIcon />
                </div>
                <p className="font-bold text-[22px]">898967567</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="max-w-[20px] w-full">
                  {" "}
                  <LocationIcon />
                </div>
                <p className="font-bold text-[22px]">hisar</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="max-w-[20px] w-full">
                  {" "}
                  <InstaIcon />
                </div>
                <p className="font-bold text-[22px]">df</p>
              </div>
            </div>
            <div className="max-w-[300px] flex flex-col gap-[15px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] w-full bg-white rounded-lg p-6">
              <h1 className="text-[#FF806E] text-[16px] font-bold">
                Hours of service
              </h1>
              <p className="text-[#232E3C] text-[16px] font-medium mt-[23px]">
                Monday to Saturday
              </p>
              <p className="text-[#748194] pt-[7px] text-[16px] font-normal">
                1:00 pm - 3:00 pm and
              </p>
              <p className="text-[#748194] text-[16px] font-normal">
                7:00 pm - 11:00 pm{" "}
              </p>
            </div>
            <div className="max-w-[300px] flex flex-col gap-[15px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] w-full bg-white rounded-lg p-6">
              <h1 className="text-[#FF806E] text-[16px] font-bold">
                Telephone support:
              </h1>
              <p className="text-[#232E3C] text-[16px] font-medium mt-[23px]">
                Monday to Saturday from
              </p>
              <p className="text-[#232E3C] text-[16px] font-medium mt-[23px]">
                9:00 am to 9:00 pm
              </p>
            </div>
            <div className="max-w-[300px] flex flex-col gap-[15px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] w-full bg-white rounded-lg p-6">
              <h1 className="text-[#FF806E] text-[16px] font-bold">
                SPECIAL OFFERS
              </h1>
              <p className="text-[#232E3C] text-[16px] font-medium mt-[23px]">
                Saturday
              </p>
              <p className="text-[#232E3C] text-[16px] font-medium mt-[23px]">
                BUY 2 SMALL GET 1 LARGE PIZZA FREE
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loactioncontact;
