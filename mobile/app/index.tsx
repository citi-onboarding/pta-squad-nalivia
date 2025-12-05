"use client"

import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { PetCard } from "../src/components/PetCard";
import DataFilter from "../src/components/DataFilter";
import { LogoPet } from "../src/assets";
import api from '../src/services/api';

interface Appointment {
  id: number;
  type: string;
  dateTime: string;
  doctorName: string;
  patientId: number;
}

interface Patient {
  id: number;
  name: string;
  tutor: string;
  specie: string;
  age: number;
}


const App: React.FC = () => {
  const [patients, setPatient] = useState<Patient[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('');
  const [appointments, SetAppointments] = useState<Appointment[]>([]);



  useEffect(() => {
    loadCards();
  }, []);

  const loadCards = async () => {
    try {
      const consultResponse = await api.get('/consult');
      const patientResponse = await api.get('/patient');

      SetAppointments(consultResponse.data);
      setPatient(patientResponse.data);
      console.log('GET /consult - Consultas carregadas:', consultResponse.data);
      console.log('GET /patient - Pacientes carregados:', patientResponse.data);

    } catch (error){
      console.error('Erro ao carregar usuários:', error);
    }
  };

  const getHour = (dateTimeString: string) => {
    const date = new Date(dateTimeString);
    return date.getUTCHours();
  };

  const filteredAppointments = appointments.filter((appointment) => {

    if (activeFilter === '') return true;
    const hour = getHour(appointment.dateTime);
    if (activeFilter === 'sun') return hour >= 5 && hour < 12;
    if (activeFilter === 'cloud') return hour >= 12 && hour < 18;
    if (activeFilter === 'moon') return hour >= 18 || hour < 5;
    return false;
  });

  const appointmentMap: Record<string, string> = {
    "FIRST": "Primeira Consulta",
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

  return (
    <View className="flex-1 ">
      
      <View className="flex-1 px-5 pt-12 items-center w-full">
        <View>
          <LogoPet width={143} height={53}></LogoPet>
        </View>

        <View className="mb-4 mt-4 w-full">
          <Text className="font-bold text-lg text-black">
            Sua agenda
          </Text>
          <Text className="font-regular text-gray-500">
            Veja aqui todos os seus pacientes agendados para hoje.
          </Text>
        </View>

        <DataFilter onSelect={(filter) => setActiveFilter(filter)} />

        <View className="mt-4 w-full flex-1"> 
          <FlatList
            data={filteredAppointments}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ paddingBottom: 20 }} 
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              
              const patient = patients.find(p => p.id === item.patientId);
              const dataObj = new Date(item.dateTime);

              const diaFormatado = dataObj.toLocaleDateString('pt-BR', { timeZone: 'UTC', day: '2-digit', month: '2-digit' });
              const horaFormatada = dataObj.toLocaleTimeString('pt-BR', {timeZone: 'UTC', hour: '2-digit', minute: '2-digit' });

              const rawSpecie = patient?.specie || ""; 
              const normalizedSpecie = speciesMap[rawSpecie];
              const normalizedType = appointmentMap[item.type] || item.type;
              return (
              <View className="mb-4">
                  <PetCard
                  petName={patient?.name}
                  date={diaFormatado}
                  doctor={item.doctorName}
                  ownerName={patient?.tutor}
                  time={horaFormatada}
                  petType={normalizedSpecie}
                  appointment={normalizedType}
                  />
              </View>
            )}}
            ListEmptyComponent={
              <Text className="text-center text-gray-500 mt-10">
                  Nenhum agendamento neste período.
              </Text>
            }
          />
        </View>
      </View>

      <View className="w-full h-[75px] bg-[#50E678] rounded-t-[24px] items-center justify-end pb-8 shadow-lg">
          
      </View>

    </View>
  );
};

export default App;