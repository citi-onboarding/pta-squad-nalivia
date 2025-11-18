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
  imageSrc,
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
    // CARD PAI
    <div className="flex w-[494.67px] bg-[#BFB5FF] rounded-[16px] g">

      {/* BOX CINZA (lado esquerdo) */}
      <div className="
        bg-[#D9D9D9] 
        rounded-[4px]
        flex flex-col items-center justify-center 
        gap-2
        p-4 
        w-fit h-fit 
        ml-[24px] mt-[22.5px] mb-[22.5px]
      ">
        <img src={alarm.src} alt="Alarme" className="w-[20px] h-[20px]" />
        <p className="text-gray-700 font-medium">{date}</p>
        <p className="text-gray-700 font-medium">{time}</p>
      </div>

      {/* CONTEÚDO DIREITO */}
      <div className="flex flex-col justify-center ml-4">

        {/* LINHA: petName / ownerName / doctor */}
        <div className="flex items-center">

          {/* PetName */}
          <span className="text-[14px] font-bold text-gray-900 ml-[33.56px]">
            {petName}
          </span>

          {/* Barra */}
          <span className="text-gray-500 text-[14px] mx-1">/</span>

          {/* Owner */}
          <span className="font-medium text-black-600 text-[14px]">
            {ownerName}
          </span>

          {/* Doctor (afastado 33.36px) */}
          <span className="text-[14px] font-medium text-black-600 ml-[33.56px]">
            {doctor}
          </span>

        </div>
      </div>



      <div className="flex flex-col items-center justify-center ml-[33.56px] mr-[24px]">
        {/* imagem pet */}
        <div>
          <img 
          src = {animalImages[petType]}
          className="w-[69px] h-[70px] mt-[16px]"
          />

        </div>


        {/* barra com o tipo da consulta */}
        <div className="
        bg-[#D9D9D9] 
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
