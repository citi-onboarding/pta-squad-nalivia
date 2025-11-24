import React from 'react';
import {arrow} from "@/assets"

interface HistoryCardProps {
  date: string;
  time: string;
  doctor: string;
  appointment: string;
}

export const HistoryCard = ({
  date,
  time,
  doctor,
  appointment,
}: HistoryCardProps) => {

  return (
    <div
      style={{
        backgroundColor: "#F0F0F0",
      }}
      className="flex h-[82px] w-[501px] rounded-[16px] py-4 px-6 items-center justify-between "> 

      <div className="
        bg-[#FFFFFFCC] 
        rounded-[4px]
        flex flex-col items-center justify-center 
        gap-2
        px-[6px]
        py-[6px]
        w-[51px] h-[50px] 
      ">
        <p className="text-black-700 font-bold text-[14px]">{date}</p>
        <p className="text-black-700 font-bold text-[14px]">{time}</p>
      </div>

      <div className="flex justify-center">
        <span className="text-[14px] font-bold text-black-700">
          {appointment}
        </span>
      </div>

      <div className="flex justify-center">
        <span className="text-[14px] font-regular text-black-400">
          {doctor}
        </span>
      </div>

      <div className="flex justify-center">
        <img src={arrow.src} alt="arrow" className="w-[24px] h-[24px]" />
      </div>


    </div>
  );
};