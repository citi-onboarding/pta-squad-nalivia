import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';

const { flatten } = StyleSheet;

import { dog, cat, cow, horse, pig, sheep, alarm } from "../../assets"

type AssetSource = React.FC<SvgProps> | number;

const animalImages: Record<string, AssetSource> = {
  cachorro: dog as AssetSource,
  gato: cat as AssetSource,
  vaca: cow as AssetSource,
  cavalo: horse as AssetSource,
  porco: pig as AssetSource,
  ovelha: sheep as AssetSource,
};

const appointmentColor: Record<string, string> = {
  "Primeira Consulta": "#BFB5FF",
  "Retorno": "#FF641999",
  "Check-up": "#9CFF95",
  "Vacinação": "#AAE1FF",

};

interface PetCardProps {
  date: string;
  time: string;
  doctor: string;
  petName: string;
  ownerName: string;
  appointment: string;
  petType: string;
}

interface AssetProps {
  source: AssetSource;
  style: any;
}

const AssetRenderer = ({ source, style,}: AssetProps) => {

  const flatStyle = flatten(style || {});
  const { width, height, ...remainingStyle } = flatStyle;
  const finalWidth = width || 60;
  const finalHeight = height || 60;

  if (typeof source === 'function') {
    const SvgComponent = source;
    return (
        <View style={{ width: finalWidth, height: finalHeight, ...remainingStyle }}>
            <SvgComponent
                width="100%"
                height="100%"
            />
        </View>
    );
  }
  return <Image source={source} style={style} />;
};

export const PetCard = ({
  date,
  time,
  doctor,
  petName,
  ownerName,
  petType,
  appointment,
}: PetCardProps) => {

  const today = new Date();
  const [dayStr, monthStr] = date.split("/");
  const day = Number(dayStr);
  const month = Number(monthStr);
  const consultationDate = new Date(today.getFullYear(), month - 1, day);
  const todayStartOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const isExpired = consultationDate < todayStartOfDay;
  const cardColor = isExpired ? "#F0F0F0" : appointmentColor[appointment] || "#FFFFFF";
  const petImage = animalImages[petType];
  
  return (
    <View style={{
        flexDirection: 'row',
        width: '100%',
        borderRadius: 16,
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingVertical: 16,
        height: 122,
        gap: 26.5,
        backgroundColor: cardColor
    }}>
      {/* BOX CINZA (lado esquerdo - Data/Hora) */}
      <View style={{
          backgroundColor: '#FFFFFFCC',
          borderRadius: 4,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 24,
          paddingVertical: 16,
          width: 51,
          height: 90,
      }}>
        <AssetRenderer
            source={alarm}
            style={{ width: 20, height: 20 }}
        />
        <Text style={{ color: 'black', fontWeight: '700', fontSize: 14 }}>
            {date}
        </Text>
        <Text style={{ color: 'black', fontWeight: '700', fontSize: 14 }}>
            {time}
        </Text>
      </View>
      {/* CONTEÚDO CENTRAL E DR. */}
      <View style={{
          flexDirection: 'column',
          justifyContent: 'flex-start',
          flex: 1,
          alignItems: 'flex-start',
      }}>
        {/* LINHA PRINCIPAL: PetName / ownerName / Doctor */}
        <View style={{ flexDirection: 'column', gap: 12 }}>
          {/* Nomes (Pet / Owner) */}
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#1f2937' }}>
              {petName}
            </Text>
            <Text style={{ color: '#6b7280', fontSize: 14,  paddingHorizontal: 4 }}>
                /
            </Text>
            {/* Owner */}
            <Text style={{ fontWeight: '500', color: 'black', fontSize: 14 }}>
              {ownerName}
            </Text>
          </View>
          {/* Doutor */}
          <View>
            <Text style={{ fontSize: 14, fontWeight: '400' }}>
              {doctor}
            </Text>
          </View>
        </View>
      </View>
      {/* CONTEÚDO DIREITO (Imagem e Tipo de Consulta) */}
      <View style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
      }}>
        {/* imagem pet */}
        <View>
          <AssetRenderer
            source={petImage}
            style={{ width: 60, height: 60 }}
          />
        </View>
        {/* barra com o tipo da consulta */}
        <View style={{
            backgroundColor: '#FFFFFFCC',
            borderRadius: 4,
            flexDirection: 'column',
            justifyContent: 'center',
            paddingVertical: 4,
            width: 101,
            height: 'auto',
        }}>
          <Text style={{ fontSize: 12, textAlign: 'center' }}>
            {appointment}
          </Text>
        </View>
      </View>
    </View>

  );

};