"use client"
import React, { useState } from 'react';

import Image from "next/image";
 
import {cat, cow, dog, horse, pig, sheep} from '@/assets';

export default function PetFilter() {

    const [SheepColor, setSheepColor] = useState("#FFFFFF")

    const handleClickSheep = () => {
       
        setSheepColor(PrevColor => (PrevColor === '#FFFFFF' ? '#D9D9D9' : '#FFFFFF'))
        setCatColor(PrevColor => (PrevColor === '#FFFFFF' ? '#FFFFFF' : '#FFFFFF'))
        setPigColor(PrevColor => (PrevColor === '#FFFFFF' ? '#FFFFFF' : '#FFFFFF'))
        setCowColor(PrevColor => (PrevColor === '#FFFFFF' ? '#FFFFFF' : '#FFFFFF'))
        setHorseColor(PrevColor => (PrevColor === '#FFFFFF' ? '#FFFFFF' : '#FFFFFF'))
        setDogColor(PrevColor => (PrevColor === '#FFFFFF' ? '#FFFFFF' : '#FFFFFF'))
    }

    const [CatColor, setCatColor] = useState("#FFFFFF")

    const handleClickCat = () => {
       
        setCatColor(PrevColor => (PrevColor === '#FFFFFF' ? '#D9D9D9' : '#FFFFFF'))
        setSheepColor(PrevColor => (PrevColor === '#FFFFFF' ? '#FFFFFF' : '#FFFFFF'))
        setPigColor(PrevColor => (PrevColor === '#FFFFFF' ? '#FFFFFF' : '#FFFFFF'))
        setCowColor(PrevColor => (PrevColor === '#FFFFFF' ? '#FFFFFF' : '#FFFFFF'))
        setHorseColor(PrevColor => (PrevColor === '#FFFFFF' ? '#FFFFFF' : '#FFFFFF'))
        setDogColor(PrevColor => (PrevColor === '#FFFFFF' ? '#FFFFFF' : '#FFFFFF'))
    }

    const [PigColor, setPigColor] = useState("#FFFFFF")

    const handleClickPig = () => {
       
        setPigColor(PrevColor => (PrevColor === '#FFFFFF' ? '#D9D9D9' : '#FFFFFF'))
        setCatColor(PrevColor => (PrevColor === '#FFFFFF' ? '#FFFFFF' : '#FFFFFF'))
        setSheepColor(PrevColor => (PrevColor === '#FFFFFF' ? '#FFFFFF' : '#FFFFFF'))
        setCowColor(PrevColor => (PrevColor === '#FFFFFF' ? '#FFFFFF' : '#FFFFFF'))
        setHorseColor(PrevColor => (PrevColor === '#FFFFFF' ? '#FFFFFF' : '#FFFFFF'))
        setDogColor(PrevColor => (PrevColor === '#FFFFFF' ? '#FFFFFF' : '#FFFFFF'))
    }

    const [CowColor, setCowColor] = useState("#FFFFFF")

    const handleClickCow = () => {
       
        setCowColor(PrevColor => (PrevColor === '#FFFFFF' ? '#D9D9D9' : '#FFFFFF'))
        setCatColor(PrevColor => (PrevColor === '#FFFFFF' ? '#FFFFFF' : '#FFFFFF'))
        setPigColor(PrevColor => (PrevColor === '#FFFFFF' ? '#FFFFFF' : '#FFFFFF'))
        setSheepColor(PrevColor => (PrevColor === '#FFFFFF' ? '#FFFFFF' : '#FFFFFF'))
        setHorseColor(PrevColor => (PrevColor === '#FFFFFF' ? '#FFFFFF' : '#FFFFFF'))
        setDogColor(PrevColor => (PrevColor === '#FFFFFF' ? '#FFFFFF' : '#FFFFFF'))
    }

    const [HorseColor, setHorseColor] = useState("#FFFFFF")

    const handleClickHorse = () => {
       
        setHorseColor(PrevColor => (PrevColor === '#FFFFFF' ? '#D9D9D9' : '#FFFFFF'))
        setCatColor(PrevColor => (PrevColor === '#FFFFFF' ? '#FFFFFF' : '#FFFFFF'))
        setPigColor(PrevColor => (PrevColor === '#FFFFFF' ? '#FFFFFF' : '#FFFFFF'))
        setCowColor(PrevColor => (PrevColor === '#FFFFFF' ? '#FFFFFF' : '#FFFFFF'))
        setSheepColor(PrevColor => (PrevColor === '#FFFFFF' ? '#FFFFFF' : '#FFFFFF'))
        setDogColor(PrevColor => (PrevColor === '#FFFFFF' ? '#FFFFFF' : '#FFFFFF'))
    }

    const [DogColor, setDogColor] = useState("#FFFFFF")

    const handleClickDog = () => {
       
        setDogColor(PrevColor => (PrevColor === '#FFFFFF' ? '#D9D9D9' : '#FFFFFF'))
        setCatColor(PrevColor => (PrevColor === '#FFFFFF' ? '#FFFFFF' : '#FFFFFF'))
        setPigColor(PrevColor => (PrevColor === '#FFFFFF' ? '#FFFFFF' : '#FFFFFF'))
        setCowColor(PrevColor => (PrevColor === '#FFFFFF' ? '#FFFFFF' : '#FFFFFF'))
        setHorseColor(PrevColor => (PrevColor === '#FFFFFF' ? '#FFFFFF' : '#FFFFFF'))
        setSheepColor(PrevColor => (PrevColor === '#FFFFFF' ? '#FFFFFF' : '#FFFFFF'))
    }



    return(

        <div className='h-[174px] w-[1042px] bg-[#FFFFFF] flex flex-col'>
            <p className='font-bold text-[16x] mb-[20px]'> Qual é a espécie do paciente?</p>

            <div className='w-[1042px] h-[144px] flex justify-around'> 
                <div className='h-[120px] w-[120px] rounded-[8px] cursor-pointer flex justify-center' style={{ backgroundColor: SheepColor }} onClick={handleClickSheep}>
                    <Image src={sheep} alt='SheepLogo' className='h-[100px] w-[100px] mt-2'/>
                </div>
                
                <div className='h-[120px] w-[120px] rounded-[8px] cursor-pointer flex justify-center' style={{ backgroundColor: CatColor }} onClick={handleClickCat}>
                    <Image src={cat} alt='CatLogo' className='h-[100px] w-[100px] mt-2'/>
                </div>

                <div className='h-[120px] w-[120px] rounded-[8px] cursor-pointer flex justify-center' style={{ backgroundColor: PigColor }} onClick={handleClickPig}>
                    <Image src={pig} alt='PigLogo' className='h-[100px] w-[100px] mt-2'/>
                </div>

                <div className='h-[120px] w-[120px] rounded-[8px] cursor-pointer flex justify-center' style={{ backgroundColor: CowColor }} onClick={handleClickCow}>
                    <Image src={cow} alt='CowLogo' className='h-[100px] w-[100px] mt-2'/>
                </div>

                <div className='h-[120px] w-[120px] rounded-[8px] cursor-pointer flex justify-center' style={{ backgroundColor: HorseColor }} onClick={handleClickHorse}>
                    <Image src={horse} alt='HorseLogo' className='h-[100px] w-[100px] mt-2'/>
                </div>

                <div className='h-[120px] w-[120px] rounded-[8px] cursor-pointer flex justify-center' style={{ backgroundColor: DogColor }} onClick={handleClickDog}>
                    <Image src={dog} alt='DogLogo' className='h-[100px] w-[100px] mt-2'/>
                </div>
        
            </div>
        </div>
    );
}