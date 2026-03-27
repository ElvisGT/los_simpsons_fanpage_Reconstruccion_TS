import type { Character } from "./Character"

export interface CharacterState {
    character?:Character | null,
    loading:boolean
    characters?:Character[] | null
}