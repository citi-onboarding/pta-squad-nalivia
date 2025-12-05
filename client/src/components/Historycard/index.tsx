"use client"

import { useRouter } from 'next/navigation';
import React from 'react';
import { arrow } from "@/assets"

interface HistoryCardProps {
  date: string;
  time: string;
  doctor: string;
  petName: string;
  ownerName: string;
  appointment: string;
  petType: string;
}

export const HistoryCard = ({
  date,
  time,
  doctor,
  petName,
  ownerName,
  appointment,
  petType,
}: HistoryCardProps) => {

  const cardColor = "#F0F0F0"; // Histórico sempre cinza
  const router = useRouter();

  const handleClick = () => {
    router.push(`/Detalhes?date=${date}&time=${time}&doctor=${doctor}&petName=${petName}&ownerName=${ownerName}&appointment=${appointment}&petType=${petType}`);
  }

  return (
    <div style={{backgroundColor: cardColor,}}
      className="flex h-[82px] w-[501px] rounded-[16px] py-4 px-6 items-center justify-between cursor-pointer hover:opacity-90 transition-opacity"> 

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

      <div onClick={handleClick} className="flex justify-center">
          <img src={arrow.src} alt="arrow" className="w-[24px] h-[24px]" />      
      </div>

    </div>
  );
};