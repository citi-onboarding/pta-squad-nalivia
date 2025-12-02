"use client"

import { useSearchParams } from "next/navigation"
import { useState } from "react";
import { arrow_back, check } from "@/assets";
import { HistoryCard } from "@/components/Historycard";
import { dog, cat, cow, horse, pig, sheep } from "@/assets"
import { Button } from "@/components/Button";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import ModalNovaConsulta from "../../components/Modal/modalconsulta"
import { PetCardMock } from "@/data/petCards";

const animalImages: Record<string, string> = {
  cachorro: dog.src,
  gato: cat.src,
  vaca: cow.src,
  cavalo: horse.src,
  pig: pig.src,
  ovelha: sheep.src
};

export default function Detalhes() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const search = useSearchParams();

    const date = search.get('date');
    const doctor = search.get('doctor');
    const petName = search.get('petName');
    const ownerName = search.get('ownerName');
    const appointment = search.get('appointment');
    const petType = search.get('petType');
    const appointmentColor: Record<string, string> = {
        "Primeira consulta": "#BFB5FF",
        "Retorno": "#FF641999",
        "Check-up": "#9CFF95",
        "Vacinação": "#AAE1FF",
    };
    const color = appointment ? appointmentColor[appointment] : "#F0F0F0";
    const today = new Date();
    const historico = PetCardMock.filter(
        (card) => {
            const [day, month] = card.date.split("/").map(Number);
            const consultationDate = new Date(today.getFullYear(), month - 1, day);
            const isExpired = consultationDate < today;

            return(
                card.petName.toLowerCase() === petName?.toLowerCase() && isExpired
            );}
      );

    return (
        <>
            <Header />

            {/* Início */}
            <div className='w-[40%] h-auto mt-12 ml-[10.10%] flex flex-col space-x-8 space-y-6'>
                <div className='text-[48px] font-bold flex flex-row items-center gap-4'>
                    <Link href="/Atendimento" className="p-1 cursor-pointer hover:opacity-80 transition-opacity" aria-label="Voltar para a tela de Atendimento">
                        <Image src={arrow_back} alt="Arrow" width={32} height={32} />
                    </Link>
                    <p>Detalhes da Consulta</p>
                </div>
            </div>

            <div className="w-auto h-auto flex flex-row gap-[150px] ml-[10.10%] mr-[10.10%] mt-6 ">
                {/* Lado esquerdo */}
                <div>
                    <div>
                        <p className='w-[5%] h-auto text-[24px] font-bold'>Paciente</p>
                    </div>
                    {/* Informações do pet */}
                    <div className='flex flex-row space-x-[45px] mt-8'>
                        <Image src={cow} alt='Animal' className='w-[295px] h-[299px] mb-[60px]' />

                        <div className='flex flex-col'>
                            <div className='text-[24px] flex flex-col space-y-3 mt-[56px]'>
                                <p className='font-bold'>{petName}</p>
                                <p>5 anos</p>
                            </div>

                            <div className='text-[16px] flex flex-col space-y-3 mt-auto mb-auto'>
                                <p>{ownerName}</p>
                                <p>Dra. {doctor}</p>
                            </div>
                        </div>
                    </div>

                    {/* Descrição do problema */}
                    <div className='w-[631px] space-y-3 text-[16px] mb-6'>
                        <p className='font-bold'>Descrição do problema:</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    </div>

                    {/* Tipo de consulta */}
                    <div className='flex flex-row items-center space-x-6 text-[16px]'>
                        <p className='font-bold'>Tipo de consulta:</p>
                        <p className='w-auto h-[30px] px-4 flex items-center justify-center rounded-sm' style={{backgroundColor: color}}>{appointment}</p>
                    </div>

                    {/* Espaço com botão de Agendamento */}
                    <div className='w-[624px] mt-[40px] border border-[#D9D9D9] rounded-[24px] flex flex-col items-center justify-center space-y-6 py-6 px-6'>
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
                            {historico.map((card, index) => (<HistoryCard key={index} {...card} />))}
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