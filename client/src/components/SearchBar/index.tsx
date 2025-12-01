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
        <div className='w-[34.375%] h-auto mt-8 ml-[10.10%] mr-[55.52%] flex flex-col text-[24px] gap-6'>
            <p>Qual é o médico?</p>
            <div className='flex flex-row gap-6'>
                <input type='search' value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => {if (e.key === "Enter") {handleSearch();}}} placeholder='Pesquise aqui...' className='w-full h-[50px] rounded-[8px] p-[16px] border border-black text-[16px] outline-none'/>
                <Button variant='buscar' size='sm' className='mt-1' onClick={handleSearch}>Buscar</Button>
            </div>
        </div>
    );
}