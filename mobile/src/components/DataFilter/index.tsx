import React, { useState } from 'react';

import { View, Pressable } from 'react-native';

import { sun as Sun, cloud as Cloud, moon as Moon } from '../../assets';

interface DataFilterProps {
    onSelect: (filter: string) => void;
}

export default function DataFilter({ onSelect }: DataFilterProps) {
    
    const [SunColor, setSunColor] = useState("#FFFFFF")
    const [CloudColor, setCloudColor] = useState("#FFFFFF")
    const [MoonColor, setMoonColor] = useState("#FFFFFF")

    const handleClickSun = () => {

        if (SunColor === '#FFFFFF') {
            onSelect('sun');
        } else {
            onSelect('');
        }
       
        setSunColor(PrevColor => (PrevColor === '#FFFFFF' ? '#D9D9D9' : '#FFFFFF'))
        setCloudColor('#FFFFFF')
        setMoonColor('#FFFFFF')
    }

    const handleClickCloud = () => {

        if (CloudColor === '#FFFFFF') {
            onSelect('cloud');
        } else {
            onSelect('');
        }
       
        setCloudColor(PrevColor => (PrevColor === '#FFFFFF' ? '#D9D9D9' : '#FFFFFF'))
        setSunColor('#FFFFFF')
        setMoonColor('#FFFFFF')
    }

    const handleClickMoon = () => {

        if (MoonColor === '#FFFFFF') {
            onSelect('moon');
        } else {
            onSelect('');
        }
       
        setMoonColor(PrevColor => (PrevColor === '#FFFFFF' ? '#D9D9D9' : '#FFFFFF'))
        setSunColor(PrevColor => (PrevColor === '#FFFFFF' ? '#FFFFFF' : '#FFFFFF'))
        setCloudColor(PrevColor => (PrevColor === '#FFFFFF' ? '#FFFFFF' : '#FFFFFF'))
    }

    return (

        <View className='w-[252px] h-[70px] bg-[#FFFFFF] rounded-[32px] flex-row items-center justify-center'>   

            <View className='w-[254px] h-[20px] flex-row justify-between items-center'>
                
                <Pressable onPress={handleClickSun} className='w-[70px] h-[70px] items-center justify-center rounded-full ' style={{ backgroundColor: SunColor }}> 
                    <Sun width={30} height={30} color="black" />
                </Pressable>

                <Pressable onPress={handleClickCloud} className='w-[70px] h-[70px] items-center justify-center rounded-full ' style={{ backgroundColor: CloudColor }}> 
                    <Cloud width={30} height={30} color="black" />
                </Pressable>

                <Pressable onPress={handleClickMoon} className='w-[70px] h-[70px] items-center justify-center rounded-full ' style={{ backgroundColor: MoonColor }}> 
                    <Moon width={30} height={30} color="black" />
                </Pressable>
                

            </View>

        </View>
    
    
    )

}