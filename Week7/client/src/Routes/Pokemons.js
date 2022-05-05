import {useEffect, useState} from 'react';
import axios from 'axios';
import Pokemon from './Pokemon';
import { v4 as uuidv4 } from 'uuid';


function Pokemons() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(res => { setPokemons(res.data.results)  
            .then(err => console.log(err))
    })
}, [])

    const addPokemon = (e) => {
        e.preventDefault();
        const inputBox = e.target.previousElementSibling;
        const newPokemon = {pokemon: inputBox.value, id: uuidv4()};
        const tempPokemons = [...pokemons, newPokemon];
        setPokemons(tempPokemons);
        inputBox.value = '';
        inputBox.placeholder = 'write your own pokemon';
    }

    const delPokemon = (id) => {
        const tempPokemons = [...pokemons];
        const filteredPokemons = tempPokemons.filter(pokemon => pokemon.id !== id);
        setPokemons(filteredPokemons);
    }

    const listOfPokemons = pokemons.map((pokemon => {
        return <Pokemon key ={uuidv4()} pokemon={pokemon} delPokemon={delPokemon} />
    }))
    
    return (
        <div>
            <h1>Pokemons You Love</h1>
            <form id="pokemonsForm">
                <input placeholder="write your own pokemon" required></input><button onClick ={addPokemon}>Add Pokemon!</button>
            </form>
            <div id="pokemonsLists">
                 {listOfPokemons} 
            </div>
           
        </div>
        
    )
}

export default Pokemons;