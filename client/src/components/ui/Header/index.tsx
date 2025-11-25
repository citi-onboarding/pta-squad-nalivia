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
        <div className='w-full h-auto bg-#F0F0F0 font-(family-name:--SF Pro Display) text-#7D1AD7 flex flex-row justify-between text-base border-b border-[#D9D9D9] px-5 py-auto'> {/* Header geral */}
            
            {/* Logo Pet */}
            <div className='w-[189px] h-auto ml-12 mt-5 mb-5'> 
                <Image src={LogoPet} alt="Logo Pet" />
            </div>

            {/* NavBar */}
            <div className='w-[10.2%] h-[3.89%] mt-9 mb-9 gap-12 flex flex-row font-normal'> 
                <Link href='/Atendimento' className={cn('px-1 py-3 text-[#242424]', path === '/Atendimento' && 'border-b-2 border-[#50E678]')}>
                    Atendimento
                </Link>

                <Link href='/Cadastro' className={cn('px-1 py-3 text-[#242424]', path === '/Cadastro' && 'border-b-2 border-[#50E678]')}>
                    Cadastro
                </Link>
            </div>

            {/* Frase lateral direta */}
            <div className='flex flex-row mr-12 mt-[45px] mb-[45px] gap-1 font-normal'> 
                <p>made with</p>

                <div className='w-[24px] h-auto mt-[2.5px] mb-[2.5px]'>
                    <Image src={favorite} alt="Coração" />
                </div>

                <p>and {'</>'} by</p>

                <div className='w-[41px] h-auto mt-[1.5px] mb-[1.5px]'>
                    <Image src={LogoPurple} alt="Logo Citi Roxa" />
                </div>
            </div>
        </div>
    );
}
