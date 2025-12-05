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




interface Consult {
    id: number;
    type: string;
    description: string;
    dateTime: string;
    patientId: number;
    doctorName: string;
}

interface Patient {
    id: number;
    name: string;
    tutor: string;
    specie: string;
    age: number;
}

export default function Atendimento() {
    const [consults, setConsult] = useState<Consult[]>([]);
    const [patients, setPatient] = useState<Patient[]>([]);
    const [search, setSearch] = useState('');
    const [modo, setModo] = useState<"agendamento" | "historico">("agendamento");
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    
    useEffect(() => {
        loadCards();
    }, []);

    const loadCards = async () => {
        try {
            const consultResponse = await api.get('/consult');
            const patientResponse = await api.get('/patient');
            setConsult(consultResponse.data);
            setPatient(patientResponse.data);
            console.log('GET /consult - Consultas carregadas:', consultResponse.data);
            console.log('GET /patient - Pacientes carregados:', patientResponse.data);
        } catch (error) {
            console.error('Erro ao carregar usuários:', error);
        }    
        };
    
    function isHistorico(cardDate: string) {
        const today = new Date(); 
        const consultationDate = new Date(cardDate);
        return consultationDate < today;
    }

    const filteredConsults = consults.filter((consult) => {
        const patient = patients.find(p => p.id === consult.patientId);
        const petName = patient?.name || "";

        const matchesSearch = search === '' || 
            consult.doctorName.toLowerCase().includes(search.toLowerCase());
        
        const consultDate = new Date(consult.dateTime);
        const start = startDate ? new Date(startDate) : null;
        const end = endDate ? new Date(endDate) : null;
        if (end) end.setHours(23, 59, 59);

        const matchesDate = (!start || consultDate >= start) && (!end || consultDate <= end);
        const isPast = isHistorico(consult.dateTime);
        const matchesMode = modo === 'historico' ? isPast : !isPast;

        return matchesSearch && matchesDate && matchesMode;
    });

    return (
        <>
        <Header />
        <div className='w-[19%] h-auto mt-12 mb-8 ml-[10.10%] text-[48px] font-bold'>
            <p>Atendimento</p>
        </div>
        <SearchBar onSearch={(valorDigitado) => setSearch(valorDigitado)} />
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
            {filteredConsults.map((consult) => {
                const patient = patients.find(p => p.id === consult.patientId);

                const dataObj = new Date(consult.dateTime);
                const diaFormatado = dataObj.toLocaleDateString('pt-BR', { timeZone: 'UTC', day: '2-digit', month: '2-digit' });
                const horaFormatada = dataObj.toLocaleTimeString('pt-BR', {timeZone: 'UTC', hour: '2-digit', minute: '2-digit' });

                const appointmentMap: Record<string, string> = {
                    "FIRST": "Primeira consulta",
                    "CHECKUP": "Check-up",
                    "VACINATION": "Vacinação",
                    "RETURN": "Retorno"
                };

                const speciesMap: Record<string, string> = {
                    "DOG": "cachorro",
                    "CAT": "gato",
                    "COW": "vaca",
                    "HORSE": "cavalo",
                    "PIG": "pig",
                    "SHEEP": "ovelha"
                };

                const rawSpecie = patient?.specie || "";
                const normalizedSpecie = speciesMap[rawSpecie];
            return (
                <PetCard
                    key={consult.id}
                    date={diaFormatado}
                    time={horaFormatada}
                    doctor={consult.doctorName}
                    appointment={appointmentMap[consult.type]}
                    petName={patient?.name}
                    ownerName={patient?.tutor}
                    petType={normalizedSpecie}
                />
            )
        })}
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


  