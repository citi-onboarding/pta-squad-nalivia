"use client"
import React, { useState } from 'react';

import Image from "next/image";
 
import {cat, cow, dog, horse, pig, sheep} from '@/assets';

interface PetFilterProps {
    onSelect: (pet: string) => void;
}

export default function PetFilter({ onSelect }: PetFilterProps) {

    const [SheepColor, setSheepColor] = useState("#FFFFFF")

    const [CatColor, setCatColor] = useState("#FFFFFF")

    const [PigColor, setPigColor] = useState("#FFFFFF")

    const [CowColor, setCowColor] = useState("#FFFFFF")

    const [HorseColor, setHorseColor] = useState("#FFFFFF")

    const [DogColor, setDogColor] = useState("#FFFFFF")

    const handleClickSheep = () => {

        if (SheepColor === '#FFFFFF') {
            onSelect('sheep');
        } else {
            onSelect('');
        }
       
        setSheepColor(PrevColor => (PrevColor === '#FFFFFF' ? '#D9D9D9' : '#FFFFFF'))
        setCatColor('#FFFFFF')
        setPigColor('#FFFFFF')
        setCowColor('#FFFFFF')
        setHorseColor('#FFFFFF')
        setDogColor('#FFFFFF')
    }

    const handleClickCat = () => {

        if (CatColor === '#FFFFFF') {
            onSelect('cat');
        } else {
            onSelect('');
        }
       
        setCatColor(PrevColor => (PrevColor === '#FFFFFF' ? '#D9D9D9' : '#FFFFFF'))
        setSheepColor('#FFFFFF')
        setPigColor('#FFFFFF')
        setCowColor('#FFFFFF')
        setHorseColor('#FFFFFF')
        setDogColor('#FFFFFF')
    }

    const handleClickPig = () => {

        if (PigColor === '#FFFFFF') {
            onSelect('pig');
        } else {
            onSelect('');
        }
       
        setPigColor(PrevColor => (PrevColor === '#FFFFFF' ? '#D9D9D9' : '#FFFFFF'))
        setCatColor('#FFFFFF')
        setSheepColor('#FFFFFF')
        setCowColor('#FFFFFF')
        setHorseColor('#FFFFFF')
        setDogColor('#FFFFFF')
    }

    const handleClickCow = () => {

        if (CowColor === '#FFFFFF') {
            onSelect('cow');
        } else {
            onSelect('');
        }
       
        setCowColor(PrevColor => (PrevColor === '#FFFFFF' ? '#D9D9D9' : '#FFFFFF'))
        setCatColor('#FFFFFF')
        setPigColor('#FFFFFF')
        setSheepColor('#FFFFFF')
        setHorseColor('#FFFFFF')
        setDogColor('#FFFFFF')
    }

    const handleClickHorse = () => {

        if (HorseColor === '#FFFFFF') {
            onSelect('horse');
        } else {
            onSelect('');
        }
       
        setHorseColor(PrevColor => (PrevColor === '#FFFFFF' ? '#D9D9D9' : '#FFFFFF'))
        setCatColor('#FFFFFF')
        setPigColor('#FFFFFF')
        setCowColor('#FFFFFF')
        setSheepColor('#FFFFFF')
        setDogColor('#FFFFFF')
    }

    const handleClickDog = () => {

        if (DogColor === '#FFFFFF') {
            onSelect('dog');
        } else {
            onSelect('');
        }
       
        setDogColor(PrevColor => (PrevColor === '#FFFFFF' ? '#D9D9D9' : '#FFFFFF'))
        setCatColor('#FFFFFF')
        setPigColor('#FFFFFF')
        setCowColor('#FFFFFF')
        setHorseColor('#FFFFFF')
        setSheepColor('#FFFFFF')
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