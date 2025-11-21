"use client"
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {close, LogoPet, arrow_down, calendar, alarm} from "@/assets";


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type FormData = {
        tipoconsulta: string,
        medico: string,
        dataatendimento: string,
        horarioatendimento: string,
    }

export default function ModalNovaConsulta({isOpen, onClose}: ModalProps) {

    
    const { register, handleSubmit, reset } = useForm<FormData>();


    function onSubmit (data: FormData) {
        console.log(data);
        alert("Consulta marcada com sucesso!");
        reset();
        onClose();
    }

    if (!isOpen) return null;

    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">  
    
            <div className="relative w-full max-w-4xl bg-white rounded-[24px] p-8 shadow-xl animate-in fade-in zoom-in duration-200">

                <button 
                    onClick={onClose} 
                    className="absolute top-6 right-6 transition-transform hover:scale-110"
                >
                    
                    {close ? <Image src={close} alt="Fechar" width={12} height={12} /> : <span className="text-2xl font-bold text-gray-400">&times;</span>}
                </button>
                <div className="mb-8 flex justify-center">
                    <Image src={LogoPet} alt="LogoCiti" width={189} height={74} />
                </div>
                

                <div className="mb-8 flex justify-center">
                    <p className="text-lg text-[#1C1C1C] text-center">
                        <span className="font-bold">O pet já está cadastrado no sistema! </span>
                        Preencha os dados da 
                        <span className="font-bold text-[#1C1C1C]"> consulta</span>.
                    </p>
                </div>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6"> 

            <div className="flex flex-col gap-2">
                <label className="font-bold text-[#1C1C1C]" >Tipo de consulta</label>
                <div className="relative">
                    <select 
                     {...register("tipoconsulta")}
                     className="w-full h-[50px] rounded-[8px] border-black border p-[16px] pr-[48px] appearance-none"
                     defaultValue=""
                     >
                        <option value="" disabled hidden>Selecione</option>
                        <option value="primeiraconsulta"> Primeira Consulta</option>
                        <option value="retorno"> Retorno</option>
                        <option value="checkup"> Check-up</option>
                        <option value="vacinacao"> Vacinação</option>
                     </select>
                     <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <Image src={arrow_down} alt="" width={16} height={16} />
                     </div>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-bold text-[#1C1C1C]">Médico Responsável</label>
                <input 
                 type="text"
                 {...register("medico")}
                 placeholder="Digite aqui..."
                 className="w-full h-[50px] rounded-[8px] border-black border p-[16px]"
                 ></input>
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-bold text-[#1C1C1C]">Data do atendimento</label>
                <div className="relative">
                    <input 
                     type="date"
                     {...register("dataatendimento")}
                     placeholder="dd/mm/aa"
                     className="w-full h-[50px] rounded-[8px] border-black border p-[16px] pr-[48px] [&::-webkit-calendar-picker-indicator]:opacity-0"
                     ></input>
                     <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <Image src={calendar} alt="" width={20} height={20} />
                     </div>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-bold text-[#1C1C1C]">Horário do atendimento</label>
                <div className="relative">
                    <input 
                     type="time"
                     {...register("horarioatendimento")}
                     className="w-full h-[50px] rounded-[8px] border-black border p-[16px] pr-[48px] [&::-webkit-calendar-picker-indicator]:opacity-0"
                     ></input>
                     <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <Image src={alarm} alt="" width={20} height={20} />
                     </div>
                </div>
            </div>

            <div className="md:col-span-2 flex justify-center">
            <Button variant="default" size="xxlg" type="submit">Finalizar Cadastro</Button>
            </div>

        </form>

            </div>

        
        </div>
        
    )
}

