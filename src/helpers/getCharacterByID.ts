import type{ Character } from "../interfaces/Character";


export const getCharacterByID = async (character_id:number) => {
    const api = `https://thesimpsonsapi.com/api/characters/${character_id}`;
    const resp = await fetch(api);
    const data = await resp.json();
    const {id,age,description,name,portrait_path,occupation,status,gender}:Character = data;
    const character = {
        id,age,description,name,portrait_path,occupation,status,gender
    }


    return character;
}