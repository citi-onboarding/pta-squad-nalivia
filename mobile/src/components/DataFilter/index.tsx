import React, { useState } from 'react';

import { View, Pressable } from 'react-native';

import { sun as Sun, cloud as Cloud, moon as Moon } from '../../assets';

interface DataFilterProps {
    onSelect: (filter: string) => void;
}

const data_filters = [
    {
        id: 'sun',
        icon: Sun,
    },
    {
        id: 'cloud',
        icon: Cloud,
    },
    {
        id: 'moon',
        icon: Moon,
    },
];

export default function DataFilter({ onSelect }: DataFilterProps) {
    

    const [selectedFilter, setSelectedFilter] = useState<string>('');

    const handleSelectFilter = (filter: string) => {
        if (selectedFilter === filter) {
            setSelectedFilter('');
            onSelect('');
        } else {
            setSelectedFilter(filter);
            onSelect(filter);
        }
    };

   

    return (

        <View className='w-[252px] h-[70px] bg-[#FFFFFF] rounded-[34px] flex-row items-center justify-center'>   

            <View className='w-[254px] h-[20px] flex-row justify-between items-center'>
                {data_filters.map((filter) => (
                    <Pressable key={filter.id}
                    className='w-[70px] h-[70px] items-center justify-center rounded-full'
                    style={{ backgroundColor: selectedFilter === filter.id ? '#D9D9D9' : '#FFFFFF' }}
                    onPress={() => handleSelectFilter(filter.id)}
                    >
                        <filter.icon width={30} height={30} color="black" />
                    </Pressable>

                ))}
            </View>

        </View>
    
    
    )

}