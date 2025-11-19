import React from 'react';
import alarm from '../../assets/Icons/alarm.png';

import dog from "../../assets/Pets/dog.png";
import cat from "../../assets/Pets/cat.png";
import cow from "../../assets/Pets/cow.png";
import horse from "../../assets/Pets/horse.png";
import pig from "../../assets/Pets/pig.png";
import sheep from "../../assets/Pets/sheep.png";

const animalImages: Record<string, string> = {
  cachorro: dog.src,
  gato: cat.src,
  vaca: cow.src,
  cavalo: horse.src,
  pig: pig.src,
  ovelha: sheep.src
};


interface PetCardProps {
  imageSrc: string;
  date: string;
  time: string;
  doctor: string;
  petName: string;
  ownerName: string;
  consulta: string;
  petType: string;
  onClick: () => void;
  onFavorite?: () => void;
}

export const PetCard = ({
  date,
  time,
  doctor,
  petName,
  ownerName,
  petType,
  consulta,
  onClick,
}: PetCardProps) => {
  return (
    <div className="flex w-[494.67px] bg-[#BFB5FF] rounded-[16px] items-center py-[22.5px] px-6 justify-between h-[fit]"> 

      {/*BOX CINZA (lado esquerdo) */}
      <div className="
        bg-[#F0F0F0] 
        rounded-[4px]
        flex flex-col items-center justify-center 
        gap-2
        p-4 
        w-fit h-fit 
      ">
        <img src={alarm.src} alt="Alarme" className="w-[20px] h-[20px]" />
        <p className="text-black-700 font-medium text-[14px]">{date}</p>
        <p className="text-black-700 font-medium text-[14px]">{time}</p>
      </div>

      {/* CONTEÚDO CENTRAL E DR. */}
      <div className="flex flex-col justify-center flex-grow ml-6"> 
        
        {/* LINHA PRINCIPAL: PetName / ownerName / Doctor */}
        <div className="flex items-center"> 
          
          {/* Nomes (Pet / Owner) */}
          <div className="flex items-center">
            <span className="text-[14px] font-bold text-gray-900">
              {petName}
            </span>

            <span className="text-gray-500 text-[14px] mx-1">/</span>

            {/* Owner */}
            <span className="font-medium text-black-600 text-[14px]">
              {ownerName}
            </span>
          </div>

          <div className="ml-6"> 
            <span className="text-[14px] font-medium text-black-600">
              {doctor}
            </span>
          </div>
        </div>
      </div>


      {/* CONTEÚDO DIREITO (Imagem e Tipo de Consulta) */}
      <div className="flex flex-col items-center justify-center ml-6">
        {/* imagem pet */}
        <div>
          <img 
          src = {animalImages[petType]}
          className="w-[69px] h-[70px] mt-[16px]"
          />
        </div>


        {/* barra com o tipo da consulta */}
        <div className="
        bg-[#F0F0F0] 
        rounded-[4px]
        flex flex-col justify-center 
        px-3      
        py-1   
        w-[101px] 
        h-fit
        mt-[8px] mb-[16px]
        ">
          <span className='text-[12px] flex items-center justify-center'>
          {consulta}
          </span>
        </div>
      </div>

    </div>
  );
};