"use client"

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { LogoPet } from "@/assets";
import { favorite } from "@/assets";
import { LogoPurple } from "@/assets";
import { cn } from "@/lib/utils";

export default function Header() {
    const path = usePathname()

    return (
        <div className='w-full bg-#F0F0F0 font-(family-name:--SF Pro Display)
         text-[#7D1AD7] flex flex-row flex-nowrap items-center justify-between 
         text-[10px] sm:text-sm md:text-base
         border-[#D9D9D9] border-b
         px-2 py-2
         sm:px-6 sm:py-4
         lg:px-12'> {/* Header geral */}
            
            {/* Logo Pet */}
            <div className='flex-shrink-0 '> 
                <Image src={LogoPet} alt="Logo Pet" className='w-16 sm:w-32 lg:w-40 h-auto' />
            </div>

            {/* NavBar */}
            <div className='gap-2 sm:gap-6 lg:gap-12 flex flex-row font-normal'> 
                <Link href='/Atendimento' className={cn('px-1 py-3 text-[#242424] flex flex-nowrap', path === '/Atendimento' && 'border-b-2 border-[#50E678]')}>
                    Atendimento
                </Link>

                <Link href='/Cadastro' className={cn('px-1 py-3 text-[#242424] flex flex-nowrap', path === '/Cadastro' && 'border-b-2 border-[#50E678]')}>
                    Cadastro
                </Link>
            </div>

            {/* Frase lateral direta */}
            <div className='
            flex flex-row text-[8px] 
            sm:text-xs md:text-sm gap-1 sm:gap-2 
            font-normal flex-shrink-0'> 
                <p>made with</p>

                <div className='w-[14px] sm:w-[20px] h-auto mt-[2.5px] mb-[2.5px]'>
                    <Image src={favorite} alt="Coração" />
                </div>

                <p>and {'</>'} by</p>

                <div className='w-[24px] sm:w-[41px] h-auto mt-[1.5px] mb-[1.5px]'>
                    <Image src={LogoPurple} alt="Logo Citi Roxa" />
                </div>
            </div>
        </div>
    );
}