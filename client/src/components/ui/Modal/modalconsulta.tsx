"use client"
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { close } from "../../../assets";
import { LogoPet } from "../../../assets";


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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-sm">  
    
            <div className="relative w-full max-w-4xl bg-white rounded-[24px] p-10 shadow-xl animate-in fade-in zoom-in duration-200">

                <button 
                    onClick={onClose} 
                    className="absolute top-6 right-6 transition-transform hover:scale-110"
                >
                    
                    {close ? <Image src={close} alt="Fechar" width={12} height={12} /> : <span className="text-2xl font-bold text-gray-400">&times;</span>}
                </button>
                <div className="mb-8 flex items-center justify-center">
                    <Image src={LogoPet} alt="LogoCiti" width={189} height={74} />
                </div>
                

                <div className="mb-8 flex items-center justify-center">
                    <p className="text-lg text-[#1C1C1C]">
                        <span className="font-bold">O pet já está cadastrado no sistema! </span>
                        Preencha os dados da 
                        <span className="font-bold text-[#1C1C1C]"> consulta</span>.
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6"> 

            <div className="flex flex-col gap-2">
                <label className="font-bold text-[#1C1C1C]" >Tipo de consulta</label>
                <select 
                 {...register("tipoconsulta")}
                 className="border rounded-lg p-3"
                 >
                    <option value=""> Selecione</option>
                    <option value="tipo1"> Tipo 1</option>
                    <option value="tipo2"> Tipo 2</option>
                    <option value="tipo3"> Tipo 3</option>
                    <option value="tipo4"> Tipo 4</option>
                    <option value="tipo5"> Tipo 5</option>
                 </select>
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-bold text-[#1C1C1C]">Médico Responsável</label>
                <input 
                 type="text"
                 {...register("medico")}
                 placeholder="Digite aqui..."
                 className="border rounded-lg p-3"
                 ></input>
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-bold text-[#1C1C1C]">Data do atendimento</label>
                <input 
                 type="date"
                 {...register("dataatendimento")}
                 placeholder="dd/mm/aa"
                 className="border rounded-lg p-3"
                 ></input>
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-bold text-[#1C1C1C]">Horário do atendimento</label>
                <input 
                 type="time"
                 {...register("horarioatendimento")}
                 className="border rounded-lg p-3"
                 ></input>
            </div>

            <div className="md:col-span-2 flex items-center justify-center">
            <Button variant="default" size="xxlg" type="submit">Finalizar Cadastro</Button>
            </div>
        </form>
            </div>

        
        </div>
        
    )
}

