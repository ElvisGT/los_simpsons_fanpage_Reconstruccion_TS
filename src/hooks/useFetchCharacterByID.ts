import { useState,useEffect } from "react";
import { getCharacterByID } from "../helpers/getCharacterByID"
import type { Character } from "../interfaces/Character";

interface CharacterState {
    character:Character | null,
    loading:boolean
}

export const useFetchCharacterByID = (character_id:number) => {
    const [state,setState] = useState<CharacterState>({
        character:null,
        loading:true,
    });


    useEffect(() => {
        getCharacterByID(character_id)
            .then((character) => {
                setState({
                    character,
                    loading:false

                })
            })
    },[character_id])
    
    return state;
}