'use client'

import { Autocomplete, AutocompleteItem, Button } from '@heroui/react'
import poke from '@/libs/DataElement'
import { icon2TagSvg } from '@/components/icons'
import { useState } from 'react'

const Pokemon = () => {
    const [count, setCount] = useState<number[]>([0])

    const handleAdd = () => {
        setCount((prev) => [...prev, prev.length])
    }

    const handleRemove = () => {
        setCount((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev))
    }

    return (
        <div className="flex justify-center p-4">
            <div className="flex flex-col items-center gap-4 p-2">
                {count.map((_, index) => (
                    <Autocomplete
                        key={index}
                        label={`Select type of Pokémon ${index + 1}`}
                        size="sm"
                        className="w-60"
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
                        isDisabled={count.length === 2}
                        disableRipple
                        onClick={handleAdd}
                    >
                        +
                    </Button>
                    <Button
                        isIconOnly
                        isDisabled={count.length <= 1}
                        disableRipple
                        onClick={handleRemove}
                    >
                        –
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Pokemon
