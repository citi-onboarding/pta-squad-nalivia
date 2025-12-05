import React from 'react';
import { useRouter } from "next/navigation";

import { dog, cat, cow, horse, pig, sheep, alarm} from "@/assets"

const animalImages: Record<string, string> = {
  cachorro: dog.src,
  gato: cat.src,
  vaca: cow.src,
  cavalo: horse.src,
  pig: pig.src,
  ovelha: sheep.src
};

const appointmentColor: Record<string, string> = {
  "Primeira Consulta": "#BFB5FF",
  "Retorno": "#FF641999",
  "Check-up": "#9CFF95",
  "Vacinação": "#AAE1FF",
};

interface PetCardProps {
  imageSrc?: string;
  date: string;
  time: string;
  doctor: string;
  petName: string;
  ownerName: string;
  appointment: string;
  petType: string;
}

export const PetCard = ({
  date,
  time,
  doctor,
  petName,
  ownerName,
  petType,
  appointment,
}: PetCardProps) => {

  const today = new Date();
  const [day, month] = date.split("/").map(Number);
  const consultationDate = new Date(today.getFullYear(), month - 1, day);
  const isExpired = consultationDate < today;
  const cardColor = isExpired ? "#F0F0F0" : appointmentColor[appointment];
  const router = useRouter();
  
  const handleClick = () => {
    router.push(`/Detalhes?date=${date}&time=${time}&doctor=${doctor}&petName=${petName}&ownerName=${ownerName}&appointment=${appointment}&petType=${petType}`);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: cardColor,
      }}
      className="max-w-[494.67px] flex w-full bg-[#BFB5FF] rounded-[16px] items-center px-6 py-4 justify-between min-h-[135px] cursor-pointer hover:opacity-90 transition-opacity overflow-hidden"> 

      {/*BOX CINZA (lado esquerdo) */}
      <div className="
        bg-[#FFFFFFCC] 
        rounded-[4px]
        flex flex-col items-center justify-center 
        gap-2
        px-[6px]
        py-[12px]
        w-[51px] h-[90px] 
      ">
        <img src={alarm.src} alt="Alarme" className="w-[20px] h-[20px]" />
        <p className="text-black-400 font-medium text-[14px]">{date}</p>
        <p className="text-black-400 font-medium text-[14px]">{time}</p>
      </div>

      {/* CONTEÚDO CENTRAL E DR. */}
      <div className="flex flex-col justify-center flex-grow ml-6 min-w-0"> 
        
        {/* LINHA PRINCIPAL: PetName / ownerName / Doctor */}
        <div className="flex items-center gap-2 flex-wrap"> 

          {/* Nomes (Pet / Owner) */}
          <div className="flex items-center">
            <span className="text-[12px] md:text-[14px] font-bold text-gray-900">
              {petName}
            </span>

            <span className="text-gray-500 text-[12px] md:text-[14px] mx-1">/</span>

            {/* Owner */}
            <span className="font-medium text-black-600 text-[12px] md:text-[14px]">
              {ownerName}
            </span>
          </div>

          <div> 
            <span className="text-[12px] md:text-[14px] font-medium weight-400">
              {doctor}
            </span>
          </div>
        </div>
      </div>


      {/* CONTEÚDO DIREITO (Imagem e Tipo de Consulta) */}
      <div className="flex flex-col items-center justify-center ml-4 flex-shrink-0">
        {/* imagem pet */}
        <div>
          <img 
          src = {animalImages[petType]}
          className="w-[69px] h-[70px] mt-[16px]"
          alt="Imagem do Pet"
          />
        </div>


        {/* barra com o tipo da consulta */}
        <div className="
        bg-[#FFFFFFCC] 
        rounded-[4px]
        flex flex-col justify-center 
              
        py-1   
        w-[90px]
        h-fit
        mt-[4px]
        ">
          <span className='text-[11px] flex items-center justify-center '>
          {appointment}
          </span>
        </div>
      </div>

    </div>
  );
};