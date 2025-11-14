'use client'

import {
    getKeyValue,
    Pagination,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
} from '@heroui/react'
import axios from 'axios'
import { useEffect, useMemo, useState } from 'react'

type Pokemon = {
    name: string
}[]

export default function Pokemon() {
    const [dataPokemon, setDataPokemon] = useState<Pokemon>([])
    const [page, setPage] = useState<number>(1)
    const pages = Math.ceil(dataPokemon.length / 10)

    const loading = async () => {
        try {
            const res = await axios.get(
                `https://pokeapi.co/api/v2/pokemon?limit=${1328}&offset=${page}`,
            )
            const data = res.data.results
            // console.log(data)
            setDataPokemon(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        loading()
    }, [])

    const columns = [
        {
            key: 'name',
            label: 'name',
        },
    ]

    const items = useMemo(() => {
        const start = (page - 1) * 10
        const end = start + 10

        return dataPokemon.slice(start, end)
    }, [page, dataPokemon])
    return (
        <>
            <div className="flex h-screen w-full items-center justify-center p-4">
                <section className="max-w-lg w-full overflow-auto">
                    <Table
                        aria-label="table-of-pokemon"
                        bottomContent={
                            <div className="flex w-full justify-center">
                                <Pagination
                                    isCompact
                                    variant='light'
                                    showControls
                                    showShadow
                                    color="default"
                                    page={page}
                                    total={pages}
                                    onChange={(page) => setPage(page)}
                                />
                            </div>
                        }
                    >
                        <TableHeader columns={columns}>
                            {(column) => (
                                <TableColumn key={column.key}>
                                    {column.label}
                                </TableColumn>
                            )}
                        </TableHeader>
                        <TableBody items={items} emptyContent={'No Pokemon.'}>
                            {(item) => (
                                <TableRow key={item.name}>
                                    {(pokemon) => (
                                        <TableCell>
                                            {getKeyValue(item, pokemon)}
                                        </TableCell>
                                    )}
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </section>
            </div>
        </>
    )
}
