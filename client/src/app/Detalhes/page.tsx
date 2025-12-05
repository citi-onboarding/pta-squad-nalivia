"use client"

import { useSearchParams } from "next/navigation"
import { useState, Suspense, useEffect } from "react";
import { arrow_back, check } from "@/assets";
import { HistoryCard } from "@/components/Historycard";
import { dog, cat, cow, horse, pig, sheep } from "@/assets"
import { Button } from "@/components/Button";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import ModalNovaConsulta from "../../components/Modal/modalconsulta"
import api from "@/services/api";

const animalImages: Record<string, string> = {
  cachorro: dog.src,
  gato: cat.src,
  vaca: cow.src,
  cavalo: horse.src,
  pig: pig.src,
  ovelha: sheep.src
};

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

const appointmentMap: Record<string, string> = {
    FIRST: "Primeira consulta",
    CHECKUP: "Check-up",
    VACINATION: "Vacinação",
    RETURN: "Retorno",
};
  
const speciesMap: Record<string, string> = {
    DOG: "cachorro",
    CAT: "gato",
    COW: "vaca",
    HORSE: "cavalo",
    PIG: "pig",
    SHEEP: "ovelha",
};

const appointmentColor: Record<string, string> = {
    "Primeira consulta": "#BFB5FF",
    "Retorno": "#FF641999",
    "Check-up": "#9CFF95",
    "Vacinação": "#AAE1FF",
};

function DetalhesContent() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const search = useSearchParams();
    const consultId = search.get("id");

    const [consult, setConsult] = useState<any>(null);
    const [patient, setPatient] = useState<any>(null);
    const [history, setHistory] = useState<any[]>([]);

    useEffect(() => {
        if (!consultId) return;
    
        async function loadData() {
            try {
                const consultResponse = await api.get(`/consult/${consultId}`);
                setConsult(consultResponse.data);
    
                const patientResponse = await api.get(`/patient/${consultResponse.data.patientId}`);
                setPatient(patientResponse.data);
    
                const allConsults = await api.get("/consult");
                const historyPet = allConsults.data.filter((c: any) => {
                    const isSamePet = c.patientId === consultResponse.data.patientId;
                    const isPast = new Date(c.dateTime) < new Date();
                    const isNotCurrent = c.id !== Number(consultId);
                    return isSamePet && isPast && isNotCurrent;
                });
    
                setHistory(historyPet);
            } catch (err) {
                console.log("Erro:", err);
            }
        }
    
        loadData();
    }, [consultId]);
    
    const appointmentChanged = appointmentMap[consult.type];
    const color = appointmentColor[appointmentChanged] || "#F0F0F0";

    return (
        <>
            <Header />

            {/* Início */}
            <div className='px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[194px] mt-6 md:mt-8 lg:mt-[48px] flex flex-col space-y-6'>
                <div className='text-2xl md:text-4xl lg:text-[48px] font-bold flex flex-row items-center gap-4'>
                    <Link href="/Atendimento" className="p-1 cursor-pointer hover:opacity-80 transition-opacity" aria-label="Voltar para a tela de Atendimento">
                        <Image src={arrow_back} alt="Arrow" width={32} height={32} />
                    </Link>
                    <p>Detalhes da Consulta</p>
                </div>
            </div>

            <div className="w-[79.8%] h-auto flex flex-col lg:flex-row justify-between gap-8 ml-[10.10%] mr-[10.10%] mt-6">
                {/* Lado esquerdo */}
                <div className="w-full">
                    <div>
                        <p className='w-[5%] h-auto text-[24px] font-bold'>Paciente</p>
                    </div>
                    {/* Informações do pet */}
                    <div className='flex flex-row space-x-[2.34%] mt-8'>
                        <Image src={patient ? animalImages[speciesMap[patient.specie]] : ''} alt='Animal' width={295} height={299} className='mb-[5.55%]' />

                        <div className='flex flex-col'>
                            <div className='text-[24px] flex flex-col space-y-3 mt-[5.18%]'>
                                <p className='font-bold'>{patient?.name}</p>
                                <p>{patient?.age}</p>
                            </div>

                            <div className='text-[16px] flex flex-col space-y-3 mt-auto mb-auto'>
                                <p>{patient?.tutor}</p>
                                <p>Dr. {consult?.doctorName}</p>
                            </div>
                        </div>
                    </div>

                    {/* Descrição do problema */}
                    <div className='w-full space-y-3 text-[16px] mb-6'>
                        <p className='font-bold'>Descrição do problema:</p>
                        <p>{consult?.description}</p>
                    </div>

                    {/* Tipo de consulta */}
                    <div className='flex flex-row items-center space-x-6 text-[16px]'>
                        <p className='font-bold'>Tipo de consulta:</p>
                        <p className='w-auto h-[30px] px-4 flex items-center justify-center rounded-sm' style={{backgroundColor: color}}>{appointmentChanged}</p>
                    </div>

                    {/* Espaço com botão de Agendamento */}
                    <div className='w-full mt-[40px] border border-[#D9D9D9] rounded-[24px] flex flex-col items-center justify-center space-y-6 py-6 px-6'>
                        <p className='font-bold'>Deseja realizar outra consulta?</p>
                        <Button variant="default" size="xlg" onClick={() => setIsModalOpen(true)}> <Image src={check} alt="Check Icon" width={20} height={20} />Agendamento</Button>
                    </div>
                </div>

                {/* Lado direito */}
                <div>
                    {/* Histórico de Consultas */}
                    <div className='flex flex-col space-y-8'>
                        <p className='font-bold text-[24px]'>Histórico de Consultas</p>
                        
                        <div className='w-[558px] flex flex-col space-y-6 border border-[#D9D9D9] px-6 py-6 rounded-[24px]'>
                        {history.map((c, index) => {
                            const dataObj = new Date(c.dateTime);
                            const dia = dataObj.toLocaleDateString('pt-BR', {timeZone: 'UTC', day: "2-digit", month: "2-digit" });
                            const hora = dataObj.toLocaleTimeString('pt-BR', {timeZone: 'UTC', hour: "2-digit", minute: "2-digit" });
    
                            return (
                                <HistoryCard
                                    key={c.id}
                                    date={dia}
                                    time={hora}
                                    doctor={c.doctorName}
                                    appointment={appointmentMap[c.type]}
                                    petName={patient?.name}
                                    ownerName={patient?.tutor}
                                    petType={speciesMap[patient?.specie]}
                                />
                            );
                        })}
                        </div>
                    </div>
                </div>
            </div>

                {/* Footer */}
                <div className='h-[82px] bg-[#FFFFFF]'></div>

                <ModalNovaConsulta 
                    isOpen={isModalOpen} 
                    onClose={() => setIsModalOpen(false)} />

        </>
    );
}

export default function Detalhes() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <DetalhesContent />
        </Suspense>
    );
}