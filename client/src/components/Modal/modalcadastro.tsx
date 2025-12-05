"use client"
import { useForm } from "react-hook-form";
import { Button } from "@/components/Button";
import Image from "next/image";
import {close, LogoPet} from "@/assets";
import { useState } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type FormData = {
        email: string,
    }

export default function ModalCadastro({isOpen, onClose}: ModalProps) {
    const [isLoading, setIsLoading] = useState(false);
    
    const { register, handleSubmit, reset } = useForm<FormData>();

    async function onSubmit(data: FormData) {
        setIsLoading(true); 
        const emailBody = {
            email: data.email,
            subject: "Confirmação de cadastro", 
            html: 
            `
                <div style="background-color: #f3f4f6; padding: 40px 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                    
                    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                        
                        <div style="background-color: #10B981; padding: 30px; text-align: center;">
                            <div style="font-size: 40px; margin-bottom: 10px;">🐾</div>
                            <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 0.5px;">Cadastro Confirmado!</h1>
                        </div>

                        <div style="padding: 40px 30px;">
                            <p style="color: #374151; font-size: 16px; margin-top: 0;">Olá, <strong>Tutor</strong>!</p>
                            
                            <p style="color: #4B5563; font-size: 16px; line-height: 1.6;">
                                Tudo certo! Recebemos os dados do seu pet e o cadastro no e-mail <strong>${data.email}</strong> já está registrado em nossa base.
                            </p>


                            <div style="text-align: center; margin-bottom: 20px;">
                                <a href="#" style="background-color: #10B981; color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 50px; font-weight: bold; font-size: 16px; display: inline-block; transition: background-color 0.3s;">
                                    Acessar Painel do Pet
                                </a>
                            </div>
                        </div>

                        <div style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
                            <p style="margin: 0; font-size: 12px; color: #9CA3AF;">
                                © 2025 CitiPet. Feito com <3 e <>.<br>
                                <a href="#" style="color: #10B981; text-decoration: none;">Precisa de ajuda?</a>
                            </p>
                        </div>
                    </div>
                </div>
            `


        };

        try {
            const response = await fetch('http://localhost:3001/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(emailBody),
            });

            if (response.ok) {
                alert("Cadastro enviado com sucesso!");
                reset();
                onClose();
            } else {
                // Se o back-end retornar erro 
                alert("Houve um problema ao enviar o cadastro.");
            }
        } catch (error) {
            console.error("Erro de conexão:", error);
            alert("Erro ao conectar com o servidor. Verifique se o back-end está rodando.");
        } finally {
            setIsLoading(false); 
        }
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
