import { useState,useEffect } from 'react';
import {getCharacters} from '../helpers/getCharacters';

export const useFetchCharacters = () => {
    const [state,setState] = useState({
        data:[],
        loading:true,
    });


    useEffect(() => {
        getCharacters()
            .then(characters => {
                setState({
                    data:characters,
                    loading:false
                })
            })

    },[])
    

    return state;
}