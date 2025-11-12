'use client'
import TablePokemon from '@/components/table/TablePokemon'
import Image from 'next/image'

export default function Home() {
    return (
        <>
            <div className='flex items-center justify-center h-screen p-4'>
                <TablePokemon />
            </div>
        </>
    )
}
