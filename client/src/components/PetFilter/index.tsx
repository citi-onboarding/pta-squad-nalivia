"use client"
import React, { useState } from 'react';

import Image from "next/image";
 
import {cat, cow, dog, horse, pig, sheep} from '@/assets';

interface PetFilterProps {
    onSelect: (pet: string) => void;
}

const pets = [
    { id: 'sheep', name: 'Ovelha', image: sheep },
    { id: 'cat', name: 'Gato', image: cat },
    { id: 'pig', name: 'Porco', image: pig },
    { id: 'cow', name: 'Vaca', image: cow },
    { id: 'horse', name: 'Cavalo', image: horse },
    { id: 'dog', name: 'Cachorro', image: dog },
];

export default function PetFilter({ onSelect }: PetFilterProps) {
    const [selectedPet, setSelectedPet] = useState<string>('');

    const handleClick = (petId: string) => {
        if (selectedPet === petId) {
            setSelectedPet('');
            onSelect('');
        } else {
            setSelectedPet(petId);
            onSelect(petId);
        }
    };

    return(
        <div className='h-[174px] w-[1042px] bg-[#FFFFFF] flex flex-col'>
            <p className='font-bold text-[16x] mb-[20px]'> Qual é a espécie do paciente?</p>

            <div className='w-[1042px] h-[144px] flex justify-around'> 
                {pets.map((pet) => (
                    <div 
                        key={pet.id}
                        className='h-[120px] w-[120px] rounded-[8px] cursor-pointer flex justify-center transition-colors' 
                        style={{ backgroundColor: selectedPet === pet.id ? '#D9D9D9' : '#FFFFFF' }} 
                        onClick={() => handleClick(pet.id)}
                    >
                        <Image src={pet.image} alt={`${pet.name}Logo`} className='h-[100px] w-[100px] mt-2'/>
                    </div>
                ))}
            </div>
        </div>
    );
}