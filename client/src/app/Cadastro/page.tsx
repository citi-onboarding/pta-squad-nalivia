'use client';
import Header from "../../components/Header";
import { useState, FormEvent } from 'react'; 
import {Button} from "../../components/Button";
import { dog, cat, cow, horse, pig, sheep, arrow_back} from "@/assets"
import ModalCadastro from "../../components/Modal/modalcadastro";
import Link from "next/link";

const animalImages: Record<string, string> = {
    ovelha: sheep.src,
    gato: cat.src,
    porco: pig.src,
    vaca: cow.src,
    cavalo: horse.src,
    cachorro: dog.src,

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

    function handleCadastro(event: FormEvent) {
        event.preventDefault(); 
        

        if (!name || !age || !tutor || !specie || !consult || !doctor || !date || !time) {
        alert("Por favor, preencha todos os campos antes de finalizar!");
        return; 
    }
        // objeto para mandar para usar a requisição do back
        const dadosPet = {
            nome: name,
            idade: age,
            tutor: tutor,
            especie: specie,
            consulta: consult,
            medico: doctor,
            data: date,
            hora: time,
            descrição: description
        };

        console.log("Dados prontos para envio:", dadosPet);
       

        setIsModalOpen(true);
    }

    return (
        <div className="min-h-screen ">
            <Header />
            <div className="px-[194px] mt-[48px]">

                <div className="flex items-center gap-4">
                    <Link href="/Atendimento" className="p-1 cursor-pointer hover:opacity-80 transition-opacity" aria-label="Voltar para a tela de Atendimento">
                         <img src={arrow_back.src} alt="arrow" className="w-[32px] h-[32px]" />
                    </Link>
                    <div>
                        <span className="text-[48px] font-bold font-black-700 ">
                            Cadastro
                        </span>
                    </div>
                    
                </div>

                <div className="flex flex-col mt-[32px] text-[16px] gap-[24px]">
                    <div className="flex gap-[24px]">
                        <div className="flex flex-col gap-[12px]">
                            <span className="font-bold font-black-700">
                                Nome do paciente
                            </span>
                            <input 
                            type="text"
                            className="border border-black p-4 rounded-[8px] focus:outline-none w-[754px] h-[50px]"
                            placeholder="Digite aqui..."
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        </div>
                        <div className="flex flex-col gap-[12px]">
                            <span className="font-bold font-black-700">
                                Nome do tutor
                            </span>
                            <input 
                            type="text"
                            placeholder="Digite aqui"
                            className="border border-black p-4 rounded-[8px] focus:outline-none w-[754px] h-[50px]"
                            value={tutor}
                            onChange={(e) => setTutor(e.target.value)}
                        />
                        </div>
                    </div>






                    <div className="flex flex-col">
                        <span className="font-bold font-black-700">
                            Qual é a espécie do paciente?
                        </span>
                        <div className="gap-[60px] flex flex-row p-[10px]">
                            {Object.entries(animalImages).map(([chave,imagem]) => (
                                
                                <button 
                                    key={chave}
                                    type = "button"    
                                    onClick={() => setSpecie(chave)}
                                    className={`p-4 rounded-[8px] transition-all ${
                                        specie === chave 
                                        ? 'bg-[#D9D9D9]'   
                                        : 'bg-white'       
                                    }`}
                                >
                                    <img src={imagem} alt={chave} className="w-[120px] h-[120px]" />                               
                                </button>
                            ))}
                        </div>
                    </div>
                    



                    <div className="flex gap-[24px]">
                        <div className="flex flex-col gap-[12px]">
                            <span className="font-bold font-black-700">
                                Idade do Paciente
                            </span>
                            <input 
                            type="text"
                            className="border border-black p-4 rounded-[8px] focus:outline-none w-[754px] h-[50px]"
                            placeholder="Digite aqui..."
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                        </div>
                        <div className="text-[16px] flex flex-col gap-[12px]">
                            <span className=" font-bold font-black-700">
                                Tipo de consulta
                            </span>
                            <select
                                className={`border border-black px-4 py-3 rounded-[8px] focus:outline-none w-[754px] h-[50px] bg-white cursor-pointer ${consult === "" ? "text-gray-400" : "text-black"}`}
                                value={consult}
                                onChange={(e) => setConsult(e.target.value)}
                            >
                                <option value="" disabled>Selecione aqui</option>
                                <option value="rotina">Primeira Consulta</option>
                                <option value="emergencia">Check-up</option>
                                <option value="vacina">Vacinação</option>
                                <option value="retorno">Retorno</option>
                        </select>
                        </div>
                    </div>






                    <div className="flex gap-[24px]">

                        <div className="flex flex-col gap-[12px]">
                            <span className="font-bold font-black-700">
                                Médico Responsável
                            </span>
                            <input 
                            type="text"
                            className="border border-black p-4 rounded-[8px] focus:outline-none w-[696px] h-[50px]"
                            placeholder="Digite aqui..."
                            value={doctor}
                            onChange={(e) => setDoctor(e.target.value)}
                        />
                        </div>

                        <div className="flex flex-col gap-[12px]">
                            <span className="font-bold font-black-700">
                                Data do atendimento
                            </span>
                            <input 
                            type="date"
                            min={dataMinima}
                            placeholder="dd/mm/aa"
                            className="border border-black p-4 rounded-[8px] focus:outline-none w-[390px] h-[50px]"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                        </div>
                        
                        <div className="flex flex-col gap-[12px]">
                            <span className="font-bold font-black-700">
                                Horário do atendimento
                            </span>
                            <input 
                            type="time"
                            placeholder="00:00"
                            className="border border-black p-4 rounded-[8px] focus:outline-none w-[390px] h-[50px]"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        />
                        </div>
                    </div>        


                    <div className="flex gap-[24px]">
                        <div className="flex flex-col gap-[12px]">
                            <span className="font-bold font-black-700">
                                Descrição do problema
                            </span>
                            <input 
                            type="text"
                            className="border border-black p-4 rounded-[8px] focus:outline-none w-[1532px] h-[104px]"
                            placeholder="Digite aqui..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        </div>
                    </div>       
        

                    <div className="mt-8 flex justify-end w-[1532px]"> 
                        <Button 
                            type="button" 
                            onClick={handleCadastro}
                            variant="default"                         
                            className="w-[205px] h-[48px]"
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