'use client'

import { Key, useEffect, useState } from 'react'
import { Autocomplete, AutocompleteItem, Button } from '@heroui/react'
import poke from '@/libs/DataElement'
import iconElements, { icon2TagSvg } from '@/components/icons'
import { Minus, Plus } from 'lucide-react'
import Image from 'next/image'

const Pokemon = () => {
    const [count, setCount] = useState<number[]>([0])
    const [dataInput, setDataInput] = useState<string[]>([''])

    const handleAdd = () => {
        if (count.length < 2) {
            setCount((prev) => [...prev, prev.length])
            setDataInput((prev) => [...prev, ''])
        }
    }

    const handleRemove = () => {
        if (count.length > 1) {
            setCount((prev) => prev.slice(0, -1))
            setDataInput((prev) => prev.slice(0, -1))
        }
    }

    const handleSelectChange = (key: Key | null, index: number) => {
        if (key) {
            setDataInput((prev) => {
                const newData = [...prev]
                newData[index] = key.toString()
                return newData
            })
        }
    }

    useEffect(() => {
        console.log('dataInput:', dataInput)
    }, [dataInput])

    return (
        <div className="flex flex-col items-center justify-center gap-2 p-4">
            <header>
                <div className="flex flex-col items-center gap-4 p-2">
                    {count.map((_, index) => (
                        <Autocomplete
                            key={index}
                            label={`Select type of Pokémon ${index + 1}`}
                            size="sm"
                            className="w-60"
                            selectedKey={dataInput[index] || ''}
                            onSelectionChange={(key) =>
                                handleSelectChange(key, index)
                            }
                        >
                            {poke.map((e) => (
                                <AutocompleteItem
                                    key={e.name}
                                    startContent={icon2TagSvg(e.name, 20)}
                                >
                                    {e.name}
                                </AutocompleteItem>
                            ))}
                        </Autocomplete>
                    ))}

                    <div className="flex gap-3">
                        <Button
                            isIconOnly
                            isDisabled={count.length >= 2}
                            color="default"
                            disableRipple
                            onPress={handleAdd}
                        >
                            <Plus />
                        </Button>
                        <Button
                            isIconOnly
                            isDisabled={count.length <= 1}
                            color="danger"
                            disableRipple
                            onPress={handleRemove}
                        >
                            <Minus />
                        </Button>
                    </div>
                </div>
            </header>

            <section>
                <div className="mt-4 text-sm">
                    <table className="border [&_th,td]:border [&_th,td]:px-2 [&_th,td]:py-1">
                        <thead>
                            <th colSpan={2}>Element</th>
                            <th>Strong</th>
                            <th>Weak</th>
                            <th>NoEffectFrom</th>
                        </thead>
                        <tbody>
                            {poke
                                .filter((type) => dataInput.includes(type.name))
                                .map((e) => (
                                    <tr key={e.name}>
                                        <td className="border-r-transparent">
                                            <div className="w-10">
                                                <Image
                                                    src={iconElements(e.name)}
                                                    alt="image"
                                                    width={30}
                                                    height={30}
                                                    className={`icon ${e.name.toLowerCase()}`}
                                                />
                                            </div>
                                        </td>
                                        <td>
                                            <div>{e.name}</div>
                                        </td>
                                        <td>{e.strongAgainst.join(', ')}</td>
                                        <td>{e.weakAgainst.join(', ')}</td>
                                        <td>{e.noEffectFrom.join(', ')}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}

export default Pokemon
