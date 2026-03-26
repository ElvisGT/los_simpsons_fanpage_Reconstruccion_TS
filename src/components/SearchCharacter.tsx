
const SearchCharacter = ({characterRef,handleSearch}) => {
    return (
        <div className='searchCharacter-container'>
            <input placeholder='Busque su personaje' 
                    ref={characterRef} 
                    onChange={handleSearch} 
                    className='searchCharacter' />
        </div>
    )
}

export default SearchCharacter
