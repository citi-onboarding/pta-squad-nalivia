import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { PetCard } from "../src/components/PetCard";
import DataFilter from "../src/components/DataFilter";
import { LogoPet } from "../src/assets";

interface Appointment {
  id: string;
  petName: string;
  date: string;
  doctor: string;
  ownerName: string;
  time: string;
  petType: string;
  appointment: string;
}

const appointmentsData: Appointment[] = [
  {
    id: '1',
    petName: "Luna",
    date: "30/12",
    doctor: "Dr. José Carlos",
    ownerName: "João Alves",
    time: "09:30",
    petType: "cavalo",
    appointment: "Primeira Consulta",
  },
  {
    id: '2',
    petName: "Chica",
    date: "30/12",
    doctor: "Joao Pedro",
    ownerName: "Gabriel",
    time: "14:20",
    petType: "cachorro",
    appointment: "Primeira Consulta",
  },
  {
    id: '3',
    petName: "Rex",
    date: "30/12",
    doctor: "Dra. Ana",
    ownerName: "Maria",
    time: "19:00",
    petType: "gato",
    appointment: "Retorno",
  },
    // Adicionei mais itens para testar o scroll se necessário
    { id: '4', petName: "Toto", date: "30/12", doctor: "Dr. Ana", ownerName: "Maria", time: "20:00", petType: "porco", appointment: "Check-up" },
    { id: '5', petName: "Mel", date: "30/12", doctor: "Dr. Ana", ownerName: "Maria", time: "21:00", petType: "ovelha", appointment: "Vacinação" },
];

const App: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('');

  const getHour = (timeString: string) => {
    const [hour] = timeString.split(':');
    return parseInt(hour, 10);
  };

  const filteredAppointments = appointmentsData.filter((item) => {
    if (activeFilter === '') return true;
    const hour = getHour(item.time);
    if (activeFilter === 'sun') return hour >= 5 && hour < 12;
    if (activeFilter === 'cloud') return hour >= 12 && hour < 18;
    if (activeFilter === 'moon') return hour >= 18 || hour < 5;
    return false;
  });

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
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 20 }} 
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View className="mb-4">
                  <PetCard
                  petName={item.petName}
                  date={item.date}
                  doctor={item.doctor}
                  ownerName={item.ownerName}
                  time={item.time}
                  petType={item.petType}
                  appointment={item.appointment}
                  />
              </View>
            )}
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