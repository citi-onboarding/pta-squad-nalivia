interface PetCardProps {
    imageSrc?: string;
    date: string;
    time: string;
    doctor: string;
    petName: string;
    ownerName: string;
    appointment: string;
    petType: string;
}

export const PetCardMock: PetCardProps[] = [
    {
      date: "21/01",
      time: "14:30",
      doctor: "Ana Bezerra",
      petName: "Luna",
      ownerName: "Mariana Torres",
      petType: "gato",
      appointment: "Retorno"
    },
    {
      date: "17/11",
      time: "11:00",
      doctor: "Camila Arruda",
      petName: "Tutu",
      ownerName: "Pedro Duarte",
      petType: "pig",
      appointment: "Check-up"
    },
    {
      date: "23/12",
      time: "16:00",
      doctor: "Sofia Martins",
      petName: "Mimi",
      ownerName: "João Nogueira",
      petType: "gato",
      appointment: "Check-up"
    },
    {
      date: "24/09",
      time: "11:00",
      doctor: "Camila Arruda",
      petName: "Tutu",
      ownerName: "Pedro Duarte",
      petType: "pig",
      appointment: "Primeira consulta"
    },
    {
      date: "04/06",
      time: "13:20",
      doctor: "Júlia Freitas",
      petName: "Relâmpago",
      ownerName: "Haras Ouro",
      petType: "cavalo",
      appointment: "Check-up"
    },
    {
      date: "12/07",
      time: "08:50",
      doctor: "Marcelo Azevedo",
      petName: "Mimosa",
      ownerName: "Sitio Vista",
      petType: "vaca",
      appointment: "Vacinação"
    },
    {
      date: "14/12",
      time: "11:00",
      doctor: "Camila Arruda",
      petName: "Tutu",
      ownerName: "Pedro Duarte",
      petType: "pig",
      appointment: "Vacinação"
    },
    {
      date: "20/11",
      time: "15:15",
      doctor: "Lucas Ferraz",
      petName: "Amora",
      ownerName: "Bianca Cavalcanti",
      petType: "gato",
      appointment: "Vacinação"
    },
    {
      date: "30/04",
      time: "17:40",
      doctor: "Helena Reis",
      petName: "Bob",
      ownerName: "Carlos Silva",
      petType: "cachorro",
      appointment: "Vacinação"
    },
    {
      date: "16/12",
      time: "17:40",
      doctor: "Helena Reis",
      petName: "Bob",
      ownerName: "Carlos Silva",
      petType: "cachorro",
      appointment: "Check-up"
    },
    // LUNA
    {
      date: "10/02",
      time: "09:30",
      doctor: "Ana Bezerra",
      petName: "Luna",
      ownerName: "Mariana Torres",
      petType: "gato",
      appointment: "Vacinação"
    },
    {
      date: "03/03",
      time: "14:10",
      doctor: "Ana Bezerra",
      petName: "Luna",
      ownerName: "Mariana Torres",
      petType: "gato",
      appointment: "Check-up"
    },
    {
      date: "18/08",
      time: "10:20",
      doctor: "Ana Bezerra",
      petName: "Luna",
      ownerName: "Mariana Torres",
      petType: "gato",
      appointment: "Retorno"
    },
    {
      date: "09/09",
      time: "13:00",
      doctor: "Ana Bezerra",
      petName: "Luna",
      ownerName: "Mariana Torres",
      petType: "gato",
      appointment: "Primeira consulta"
    },
    // MIMI
    {
      date: "12/02",
      time: "16:20",
      doctor: "Sofia Martins",
      petName: "Mimi",
      ownerName: "João Nogueira",
      petType: "gato",
      appointment: "Vacinação"
    },
    {
      date: "04/05",
      time: "11:40",
      doctor: "Sofia Martins",
      petName: "Mimi",
      ownerName: "João Nogueira",
      petType: "gato",
      appointment: "Retorno"
    },
    {
      date: "21/06",
      time: "15:00",
      doctor: "Sofia Martins",
      petName: "Mimi",
      ownerName: "João Nogueira",
      petType: "gato",
      appointment: "Primeira consulta"
    },
    {
      date: "30/10",
      time: "14:00",
      doctor: "Sofia Martins",
      petName: "Mimi",
      ownerName: "João Nogueira",
      petType: "gato",
      appointment: "Check-up"
    },
    // AMORA
    {
      date: "11/01",
      time: "10:15",
      doctor: "Lucas Ferraz",
      petName: "Amora",
      ownerName: "Bianca Cavalcanti",
      petType: "gato",
      appointment: "Primeira consulta"
    },
    {
      date: "19/04",
      time: "08:50",
      doctor: "Lucas Ferraz",
      petName: "Amora",
      ownerName: "Bianca Cavalcanti",
      petType: "gato",
      appointment: "Check-up"
    },
    {
      date: "05/08",
      time: "09:45",
      doctor: "Lucas Ferraz",
      petName: "Amora",
      ownerName: "Bianca Cavalcanti",
      petType: "gato",
      appointment: "Retorno"
    },
    {
      date: "29/09",
      time: "12:20",
      doctor: "Lucas Ferraz",
      petName: "Amora",
      ownerName: "Bianca Cavalcanti",
      petType: "gato",
      appointment: "Vacinação"
    },
    // TUTU
    {
      date: "02/01",
      time: "11:50",
      doctor: "Camila Arruda",
      petName: "Tutu",
      ownerName: "Pedro Duarte",
      petType: "pig",
      appointment: "Retorno"
    },
    {
      date: "15/03",
      time: "09:20",
      doctor: "Camila Arruda",
      petName: "Tutu",
      ownerName: "Pedro Duarte",
      petType: "pig",
      appointment: "Check-up"
    },
    {
      date: "30/07",
      time: "15:30",
      doctor: "Camila Arruda",
      petName: "Tutu",
      ownerName: "Pedro Duarte",
      petType: "pig",
      appointment: "Vacinação"
    },
    {
      date: "06/10",
      time: "13:15",
      doctor: "Camila Arruda",
      petName: "Tutu",
      ownerName: "Pedro Duarte",
      petType: "pig",
      appointment: "Retorno"
    },
    // MIMOSA
    {
      date: "05/02",
      time: "07:30",
      doctor: "Marcelo Azevedo",
      petName: "Mimosa",
      ownerName: "Sitio Vista",
      petType: "vaca",
      appointment: "Primeira consulta"
    },
    {
      date: "14/04",
      time: "09:10",
      doctor: "Marcelo Azevedo",
      petName: "Mimosa",
      ownerName: "Sitio Vista",
      petType: "vaca",
      appointment: "Check-up"
    },
    {
      date: "09/09",
      time: "10:30",
      doctor: "Marcelo Azevedo",
      petName: "Mimosa",
      ownerName: "Sitio Vista",
      petType: "vaca",
      appointment: "Retorno"
    },
    {
      date: "28/11",
      time: "08:00",
      doctor: "Marcelo Azevedo",
      petName: "Mimosa",
      ownerName: "Sitio Vista",
      petType: "vaca",
      appointment: "Vacinação"
    },
    // BOB
    {
      date: "07/03",
      time: "14:00",
      doctor: "Helena Reis",
      petName: "Bob",
      ownerName: "Carlos Silva",
      petType: "cachorro",
      appointment: "Retorno"
    },
    {
      date: "22/05",
      time: "16:10",
      doctor: "Helena Reis",
      petName: "Bob",
      ownerName: "Carlos Silva",
      petType: "cachorro",
      appointment: "Primeira consulta"
    },
    {
      date: "10/08",
      time: "10:40",
      doctor: "Helena Reis",
      petName: "Bob",
      ownerName: "Carlos Silva",
      petType: "cachorro",
      appointment: "Check-up"
    },
    {
      date: "03/11",
      time: "09:30",
      doctor: "Helena Reis",
      petName: "Bob",
      ownerName: "Carlos Silva",
      petType: "cachorro",
      appointment: "Vacinação"
    },
    // RELÂMPAGO
    {
      date: "01/03",
      time: "13:10",
      doctor: "Júlia Freitas",
      petName: "Relâmpago",
      ownerName: "Haras Ouro",
      petType: "cavalo",
      appointment: "Vacinação"
    },
    {
      date: "17/04",
      time: "08:30",
      doctor: "Júlia Freitas",
      petName: "Relâmpago",
      ownerName: "Haras Ouro",
      petType: "cavalo",
      appointment: "Retorno"
    },
    {
      date: "25/09",
      time: "11:50",
      doctor: "Júlia Freitas",
      petName: "Relâmpago",
      ownerName: "Haras Ouro",
      petType: "cavalo",
      appointment: "Primeira consulta"
    },
    {
      date: "14/12",
      time: "14:30",
      doctor: "Júlia Freitas",
      petName: "Relâmpago",
      ownerName: "Haras Ouro",
      petType: "cavalo",
      appointment: "Check-up"
    }
];
  