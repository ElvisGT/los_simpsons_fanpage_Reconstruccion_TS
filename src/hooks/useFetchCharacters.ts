import { useState,useEffect } from 'react';
import {getCharacters} from '../helpers/getCharacters';
import type { CharacterState } from '../interfaces/CharacterState';

export const useFetchCharacters = () => {
    const [state,setState] = useState<CharacterState>({
        characters:null,
        loading:true,
    });


    useEffect(() => {
        getCharacters()
            .then(characters => {
                console.log(characters)
                setState({
                    characters:characters,
                    loading:false
                })
            })

    },[])
    

    return state;
}