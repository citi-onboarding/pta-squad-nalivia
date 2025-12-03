"use client";

import SearchBar from "@/components/SearchBar";
import Header from "../../components/Header";
import { useState, useEffect } from "react";
import api from '../../services/api';
import { PetCard } from "@/components/PetCard";
import { add } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/Button";


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


export default function Atendimento() {
    const [consult, setConsult] = useState<any[]>([])
    const [search, setSearch] = useState('');
    const [modo, setModo] = useState<"agendamento" | "historico">("agendamento");
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    
    useEffect(() => {
        loadCards();
    }, []);

    const loadCards = async () => {
        try {
            const response = await api.get('/consult');
            setConsult(response.data);
            console.log('GET /consult - Consultas carregadas:', response.data);
        } catch (error) {
            console.error('Erro ao carregar usuários:', error);
        }    
        };
    
    function isHistorico(cardDate: string) {
        const today = new Date(); 
        const [day, month] = cardDate.split('/').map(Number);
        const consultationDate = new Date(today.getFullYear(), month - 1, day);
      
        return consultationDate < today;
    }

    function CardDate(dateStr: string) {
        const [day, month] = dateStr.split("/").map(Number);
        const year = new Date().getFullYear(); 
        return new Date(year, month - 1, day);
    }

    const filterDate = consult.filter(card => {
        const cardDate = CardDate(card.date);
      
        if (startDate && endDate) {
          const start = new Date(startDate);
          const end = new Date(endDate);
          return cardDate >= start && cardDate <= end;
        }
      
        return true; 
    });


    const filterStatus = filterDate.filter(card => modo === "agendamento" ? !isHistorico(card.date) : isHistorico(card.date));
    const filter = filterStatus.filter(card => card.doctor.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
        <Header />
        <div className='w-[19%] h-auto mt-12 mb-8 ml-[10.10%] text-[48px] font-bold'>
            <p>Atendimento</p>
        </div>
        <SearchBar onSearch={setSearch}/>
        <div className='flex flex-row justify-between mt-[40px] ml-[10.10%] mr-[10.10%] text-[16px]'>
            {/* Filter by status */}
            <div className='w-[243px] h-[58px] justify-center items-center gap-4 flex flex-row bg-[#F0F0F0] rounded-xl'>
                <div onClick={() => setModo('agendamento')} 
                className={`cursor-pointer flex items-center justify-center w-[65.5%] h-[46px] rounded-lg ml-[8px] mt-[8px] mb-[8px] transition ${modo === 'agendamento' ? 'bg-[#FFFFFF]' : 'bg-transparent'}`}
                >Agendamento</div>

                <div onClick={() => setModo('historico')} 
                className={`cursor-pointer flex items-center justify-center w-[37.8%] h-[42px] rounded-lg mr-[8px] mt-[8px] mb-[8px] transition ${modo === 'historico' ? 'bg-[#FFFFFF]' : 'bg-transparent'}`}
                >Histórico</div>
            </div>

            {/* Filter by date range */}
            <div className='flex flex-row gap-4'>
                <div className='w-[140px] h-[56px] flex flex-row gap-1 justify-center items-center rounded-lg border border-[#F0F0F0]'>
                    <input type='date' value={startDate} onChange={(e) => setStartDate(e.target.value)} className='w-[92px] outline-none' />
                </div>

                <div className='w-[140px] h-[56px] flex flex-row gap-1 justify-center items-center rounded-lg border border-[#F0F0F0]'>
                    <input type='date' value={endDate} onChange={(e) => setEndDate(e.target.value)} className='w-[92px] outline-none' />
                </div>
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mx-[10.10%] mt-8'>
            {consult.map((card, index) => (<PetCard key={index} {...card}></PetCard>))}
        </div>

        {/* New register button */}
        <div className='mr-[10.10%] mt-[185px] flex flex-row justify-end'>
            <Button asChild variant="default">
                <Link href='/Cadastro'>
                    <Image src={add} alt="Add Icon" width={20} height={20} />
                    Nova Consulta
                </Link>
            </Button>
        </div>

        {/* Footer */}
        <div className='h-[76px] bg-[#FFFFFF]'></div>
        </>
    )
}


  