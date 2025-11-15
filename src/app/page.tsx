'use client'
import TablePokemon from '@/components/table/TablePokemon'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <div className="flex h-screen items-center justify-center p-4">
                <div className="w-full max-w-md text-center">
                    <h1>Please Select</h1>
                    <div className="my-2 flex flex-col gap-5">
                        <Link
                            href={'/pokemon'}
                            className="rounded-sm border p-1 hover:bg-gray-200 transition-all"
                        >
                            Pokemon List
                        </Link>
                        <Link
                            href={'/pokemon/calculate'}
                            className="rounded-sm border p-1 hover:bg-gray-200 transition-all"
                        >
                         Calculate Type
                        </Link>
                        <Link
                            href={'/pokemon/elements'}
                            className="rounded-sm border p-1 hover:bg-gray-200 transition-all"
                        >
                            Table Elements of Pokemon
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
