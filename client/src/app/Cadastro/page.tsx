'use client';
import Header from "../../components/Header";
import { useState, FormEvent } from 'react'; 
import {Button} from "../../components/Button";
import { dog, cat, cow, horse, pig, sheep, arrow_back, arrow_down} from "@/assets"
import ModalCadastro from "../../components/Modal/modalcadastro";
import Link from "next/link";
import Image from "next/image";

const animalImages: Record<string, string> = {
    ovelha: sheep.src,
    gato: cat.src,
    porco: pig.src,
    vaca: cow.src,
    cavalo: horse.src,
    cachorro: dog.src,

};

const speciesMap: Record<string, string> = {
    "cachorro": "DOG",
    "gato": "CAT",
    "ovelha": "SHEEP",
    "porco": "PIG",
    "vaca": "COW",
    "cavalo": "HORSE"
};



export default function Cadastro() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [tutor, setTutor] = useState("");
    const [specie, setSpecie] = useState("");
    const [consult, setConsult] = useState(""); 
    const [doctor, setDoctor] = useState(""); 
    const [date, setDate] = useState(""); 
    const [time, setTime] = useState(""); 
    const [description, setDescription] = useState(""); 

    const [isModalOpen, setIsModalOpen] = useState(false);

    const today = new Date();
    today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    const dataMinima = today.toISOString().split("T")[0];

    async function handleCadastro(event: FormEvent) {
        event.preventDefault(); 

        if (!name || !age || !tutor || !specie || !consult || !doctor || !date || !time) {
            alert("Por favor, preencha todos os campos antes de finalizar!");
            return; 
        }

        try {
          
            const patientPayload = {
                name: name,
                tutor: tutor,
                age: Number(age),
                specie: speciesMap[specie]
            };

            const responsePatient = await fetch('http://localhost:3001/patient', { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(patientPayload),
            });

            if (!responsePatient.ok) {
                throw new Error("Falha ao cadastrar paciente.");
            }

            const patientData = await responsePatient.json();
            
            
            const newPatientId = patientData.values?.id;

            if (!newPatientId) {
                throw new Error("O servidor não retornou o ID do paciente.");
            }

            console.log("Paciente criado com ID:", newPatientId);

           
            const dateTimeCombined = `${date}T${time}:00`;

            const consultPayload = {
                type: consult,
                description: description,
                dateTime: dateTimeCombined, 
                doctorName: doctor,       
                patientId: newPatientId     
            };

             const responseConsult = await fetch('http://localhost:3001/consult', { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(consultPayload),
            });

            if (!responseConsult.ok) {
                throw new Error("Paciente criado, mas falha ao criar a consulta.");
            }

            const consultData = await responseConsult.json();
            console.log("Consulta agendada:", consultData);

            setIsModalOpen(true); 

        } catch (error) {
            console.error("Erro no processo:", error);
            alert("Erro ao realizar o cadastro. Verifique o console para mais detalhes.");
        }
    }

    return (
        <div className="min-h-screen">
            <Header />
            <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[194px] mt-6 md:mt-8 lg:mt-[48px] pb-8">

                <div className="flex items-center gap-4">
                    <Link href="/Atendimento" className="p-1 cursor-pointer hover:opacity-80 transition-opacity" aria-label="Voltar para a tela de Atendimento">
                         <img src={arrow_back.src} alt="arrow" className="w-6 h-6 md:w-[32px] md:h-[32px]" />
                    </Link>
                    <div>
                        <span className="text-2xl md:text-4xl lg:text-[48px] font-bold font-black-700">
                            Cadastro
                        </span>
                    </div>
                    
                </div>

                <div className="flex flex-col mt-6 md:mt-[32px] text-sm md:text-[16px] gap-4 md:gap-[24px]">
                    <div className="flex flex-col lg:flex-row gap-4 md:gap-[24px]">
                        <div className="flex flex-col gap-[12px] flex-1">
                            <span className="font-bold font-black-700">
                                Nome do paciente
                            </span>
                            <input 
                            type="text"
                            className="border border-black p-4 rounded-[8px] focus:outline-none w-full h-[50px]"
                            placeholder="Digite aqui..."
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        </div>
                        <div className="flex flex-col gap-[12px] flex-1">
                            <span className="font-bold font-black-700">
                                Nome do tutor
                            </span>
                            <input 
                            type="text"
                            placeholder="Digite aqui"
                            className="border border-black p-4 rounded-[8px] focus:outline-none w-full h-[50px]"
                            value={tutor}
                            onChange={(e) => setTutor(e.target.value)}
                        />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <span className="font-bold font-black-700">
                            Qual é a espécie do paciente?
                        </span>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-8 lg:gap-[60px] p-[10px]">
                            {Object.entries(animalImages).map(([chave,imagem]) => (
                                
                                <button 
                                    key={chave}
                                    type = "button"    
                                    onClick={() => setSpecie(chave)}
                                    className={`p-2 md:p-4 rounded-[8px] transition-all ${
                                        specie === chave 
                                        ? 'bg-[#D9D9D9]'   
                                        : 'bg-white'       
                                    }`}
                                >
                                    <img src={imagem} alt={chave} className="w-16 h-16 md:w-24 md:h-24 lg:w-[120px] lg:h-[120px]" />                               
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <div className="flex flex-col lg:flex-row gap-4 md:gap-[24px]">
                        <div className="flex flex-col gap-[12px] flex-1">
                            <span className="font-bold font-black-700">
                                Idade do Paciente
                            </span>
                            <input 
                            type="text"
                            className="border border-black p-4 rounded-[8px] focus:outline-none w-full h-[50px]"
                            placeholder="Digite aqui..."
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                        </div>
                        <div className="text-sm md:text-[16px] flex flex-col gap-[12px] flex-1">
                            <span className=" font-bold font-black-700">
                                Tipo de consulta
                            </span>
                            <div className="relative">
                                <select
                                    className={`border border-black px-4 py-3 rounded-[8px] focus:outline-none w-full h-[50px] bg-white cursor-pointer ${consult === "" ? "text-gray-400" : "text-black"}`}
                                    value={consult}
                                    onChange={(e) => setConsult(e.target.value)}
                                >
                                    <option value="" disabled hidden>Selecione aqui</option>
                                    <option value="FIRST">Primeira Consulta</option>
                                    <option value="CHECKUP">Check-up</option>
                                    <option value="VACINATION">Vacinação</option>
                                    <option value="RETURN">Retorno</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <Image src={arrow_down} alt="" width={16} height={16} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 md:gap-[24px]">

                        <div className="flex flex-col gap-[12px] flex-1 lg:flex-[2]">
                            <span className="font-bold font-black-700">
                                Médico Responsável
                            </span>
                            <input 
                            type="text"
                            className="border border-black p-4 rounded-[8px] focus:outline-none w-full h-[50px]"
                            placeholder="Digite aqui..."
                            value={doctor}
                            onChange={(e) => setDoctor(e.target.value)}
                        />
                        </div>

                        <div className="flex flex-col gap-[12px] flex-1">
                            <span className="font-bold font-black-700">
                                Data do atendimento
                            </span>
                            <input 
                            type="date"
                            min={dataMinima}
                            placeholder="dd/mm/aa"
                            className="border border-black p-4 rounded-[8px] focus:outline-none w-full h-[50px]"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                        </div>
                        
                        <div className="flex flex-col gap-[12px] flex-1">
                            <span className="font-bold font-black-700">
                                Horário do atendimento
                            </span>
                            <input 
                            type="time"
                            placeholder="00:00"
                            className="border border-black p-4 rounded-[8px] focus:outline-none w-full h-[50px]"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        />
                        </div>
                    </div>        


                    <div className="flex gap-4 md:gap-[24px]">
                        <div className="flex flex-col gap-[12px] w-full">
                            <span className="font-bold font-black-700">
                                Descrição do problema
                            </span>
                            <textarea 
                            className="border border-black p-4 rounded-[8px] focus:outline-none w-full h-[104px] resize-none"
                            placeholder="Digite aqui..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        </div>
                    </div>       
        

                    <div className="mt-4 md:mt-8 flex justify-center md:justify-end w-full"> 
                        <Button 
                            type="button" 
                            onClick={handleCadastro}
                            variant="default"                         
                            className="w-full md:w-[205px] h-[48px]"
                        >
                            Finalizar Cadastro
                        </Button>
                    </div>
                </div>
            </div>
            {/* --- AQUI ESTÁ A CHAMADA DO MODAL --- */}
            <ModalCadastro 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </div>
    );
}