"use client"
import { useForm } from "react-hook-form";
import { Button } from "@/components/Button";
import Image from "next/image";
import {close, LogoPet} from "@/assets";


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type FormData = {
        email: string,
    }

export default function ModalCadastro({isOpen, onClose}: ModalProps) {

    
    const { register, handleSubmit, reset } = useForm<FormData>();


    function onSubmit (data: FormData) {
        console.log(data);
        alert("Cadastro enviado com sucesso!");
        reset();
        onClose();
    }

    if (!isOpen) return null;

    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">  
    
            <div className="relative w-[408px] h-[423px] bg-white rounded-[24px] p-8 shadow-xl animate-in fade-in zoom-in duration-200 flex flex-col gap-6">

                <button 
                    onClick={onClose} 
                    className="absolute top-6 right-6 transition-transform hover:scale-110"
                >
                    
                    {close ? <Image src={close} alt="Fechar" width={12} height={12} /> : <span className="text-2xl font-bold text-gray-400">&times;</span>}
                </button>


                <div className="flex justify-center mt-2">
                    <Image src={LogoPet} alt="LogoCiti"/>
                </div>
                

                <div className="flex justify-center px-4">
                    <p className="text-lg text-[#1C1C1C] text-center">
                        <span className="font-bold">Cadastro finalizado! </span>
                        Envie o comprovante para o
                        <span className="font-bold text-[#1C1C1C]"> tutor</span>.
                    </p>
                </div>

            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center gap-6 mt-2"> 

                <div className="w-[312px] h-[80px] flex flex-col justify-between">
                    <label className="font-bold text-[#1C1C1C]">E-mail</label>
                    <input 
                    type="text"
                    {...register("email")}
                    placeholder="Digite aqui..."
                    className="w-full h-[50px] rounded-[8px] border-black border p-[16px]"
                    ></input>
                </div>

                <div className="flex flex-col justify-between">
                    <Button variant="default" size="lg" type="submit">Enviar</Button>
                </div>
                
            </form>
        
            </div>

        
        </div>
        
    )
}
