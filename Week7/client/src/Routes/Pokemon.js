function Pokemon({pokemon, delPokemon}) {
    
    return (
        
        <>
            {
                (pokemon.pokemon) ? 
                <div className ="pokemon-div">
                    <li>{pokemon.pokemon}<button onClick ={() => delPokemon(pokemon.id)}>X</button></li>
                </div>:
                <div className ="pokemon-div">
                    <li>{`${pokemon.name}`}<button onClick ={() => delPokemon(pokemon.id)}>X</button></li>
                </div>
            }
        </>
    )
}

export default Pokemon;