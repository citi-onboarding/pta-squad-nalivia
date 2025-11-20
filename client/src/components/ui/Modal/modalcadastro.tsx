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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-sm">  
    
            <div className="relative w-[408px] h-[423px] bg-white rounded-[24px] p-10 shadow-xl animate-in fade-in zoom-in duration-200 flex flex-col items-center">

                <button 
                    onClick={onClose} 
                    className="absolute top-6 right-6 transition-transform hover:scale-110"
                >
                    
                    {close ? <Image src={close} alt="Fechar" width={12} height={12} /> : <span className="text-2xl font-bold text-gray-400">&times;</span>}
                </button>


                <div className="mb-6 mt-4 flex items-center justify-center">
                    <Image src={LogoPet} alt="LogoCiti" width={189} height={74} />
                </div>
                

                <div className="mb-6 flex items-center justify-center px-4">
                    <p className="text-lg text-[#1C1C1C] text-center leading-tight">
                        <span className="font-bold">Cadastro finalizado! </span>
                        Envie o comprovante para o
                        <span className="font-bold text-[#1C1C1C]"> tutor</span>.
                    </p>
                </div>

            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-6"> 

                <div className="flex flex-col gap-2 w-full">
                    <label className="font-bold text-[#1C1C1C]">E-mail</label>
                    <input 
                    type="text"
                    {...register("email")}
                    placeholder="Digite aqui..."
                    className="border rounded-lg p-3"
                    ></input>
                </div>

                <div className="flex items-center justify-center mt-2">
                    <Button variant="default" size="lg" type="submit">Enviar</Button>
                </div>
                
            </form>
        
            </div>

        
        </div>
        
    )
}

