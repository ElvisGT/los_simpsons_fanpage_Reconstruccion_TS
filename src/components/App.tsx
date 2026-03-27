import {useRef} from 'react';
import { useFetchCharacters } from '../hooks/useFetchCharacters.ts';
import CharactersCard from './CharactersCard.tsx';
import { useSearchCharacter } from '../hooks/useSearchCharacter.ts';
import SearchCharacter from './SearchCharacter.tsx';

export const App = () => {
  const {characters,loading} = useFetchCharacters();
  const characterRef = useRef("");
  // const {findedCharacters,handleSearch} = useSearchCharacter(characters,characterRef)

  return (
    <>
        <h1 className='title'>Bienvenido al mundo de los Simpsons</h1>
        
        {/*Componente Buscador*/}
        <SearchCharacter characterRef = {characterRef} handleSearch={characters}/>

        {loading && 
          <div className="ring">
            <h1>Cargando...</h1>
          </div>
        }
        {characters &&
          characters.map(item => (
            <CharactersCard key={item.id} {...item}/>
          ))
        }
    </>
  )
}

