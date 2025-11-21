"use client"

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { LogoPet } from "@/assets";
import { favorite } from "@/assets";
import { LogoPurple } from "@/assets";
import { Button } from '../button';
import { cn } from "@/lib/utils";

export default function Header() {
    const path = usePathname()

    return (
        <div style={{width: '1920px', height: '114px', backgroundColor: '#D9D9D9', fontFamily: 'SF Pro Display', color: '#7D1AD7',
                    display: 'flex', flexDirection: 'row', justifyContent: 'space-between', fontSize: '16px'}}> {/* Header geral */}
            
            {/* Logo Pet */}
            <div style={{width: '189px', height: '74px', marginLeft: '48px', marginTop: '20px', marginBottom: '20px'}}> 
                <Image src={LogoPet} alt="Logo Pet" />
            </div>

            {/* NavBar */}
            <div style={{width: '196px', height: '42px', marginTop: '36px', marginBottom: '36px', gap: '48px', display: 'flex', flexDirection: 'row', fontWeight: '400'}}> 
                <Link href='/Atendimento' className={cn("px-1 py-3 text-[#242424]", path === "/Atendimento" && "border-b-2 border-[#50E678]")}>
                    Atendimento
                </Link>

                <Link href='/Cadastro' className={cn("px-1 py-3 text-[#242424]", path === "/Cadastro" && "border-b-2 border-[#50E678]")}>
                    Cadastro
                </Link>
            </div>

            {/* Frase lateral direta */}
            <div style={{display: 'flex', flexDirection: 'row', marginRight: '48px', marginTop: '45px', marginBottom: '45px', gap: '4px', fontWeight: '400'}}> 
                <p>made with</p>

                <div style={{width: '24px', height: '24px', marginTop: '2.5px', marginBottom: '2.5px'}}>
                    <Image src={favorite} alt="Coração" />
                </div>

                <p>and {'</>'} by</p>

                <div style={{width: '41px', height: '21px', marginTop: '1.5px', marginBottom: '1.5px'}}>
                    <Image src={LogoPurple} alt="Logo Citi Roxa" />
                </div>
            </div>
        </div>
    );
}
