"use client"
import React from "react";
import { useState } from "react";

import { Button } from "../Button";

interface SearchBarProps {
    onSearch: (value: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
    const [search, setSearch] = React.useState('');

    function handleSearch() {
        onSearch(search)
    }

    return (
        <div className='w-full md:w-[42%] px-4 sm:px-8 md:px-16 lg:px-32 xl:pl-[194px] xl:pr-0 mt-6 md:mt-8 flex flex-col text-lg md:text-[24px] gap-4 md:gap-6'>
            <p>Qual é o médico?</p>
            <div className='flex flex-col sm:flex-row gap-4 md:gap-6'>
                <input type='search' value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => {if (e.key === "Enter") {handleSearch();}}} placeholder='Pesquise aqui...' className='w-full h-[50px] rounded-[8px] p-[16px] border border-black text-[16px] outline-none'/>
                <Button variant='buscar' size='sm' className='w-full sm:w-auto sm:mt-1' onClick={handleSearch}>Buscar</Button>
            </div>
        </div>
    );
}