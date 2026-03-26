import type { Character } from "../interfaces/Character";

export const getCharacterByName = (characters:Character[],character_name:string) => {
    const character:Character = characters.filter(character => character.name == character_name.toLocaleLowerCase())[0];

    return character.id;
}