
import type{ Character } from "../interfaces/Character";

export const getCharacters = async () => {
    const api = 'https://thesimpsonsapi.com/api/characters';
    const img_api = 'https://cdn.thesimpsonsapi.com/500';
    const resp = await fetch(api);
    const data = await resp.json();

    const characters:Character[] = data.results.map(({age,id,description,occupation,gender,name,portrait_path,status}:Character) => {

        const img:string = img_api + portrait_path;

        return {
            id,
            age,
            description,
            name,
            portrait_path,
            occupation,
            status,
            gender,
            img
        }
    })

    return characters;
}