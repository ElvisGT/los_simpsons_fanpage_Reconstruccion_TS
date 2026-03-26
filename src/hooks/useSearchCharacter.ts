import { useState } from "react"


export const useSearchCharacter = (data,characterRef) => {
    const [search, setSearch] = useState("")
    const findedCharacters = data.filter(item => {
        return item.name.toLowerCase().includes(search.toLowerCase())
    })

    const handleSearch = () => {
        setSearch(characterRef.current.value)
    }


    return {
        findedCharacters,
        handleSearch
    }
}