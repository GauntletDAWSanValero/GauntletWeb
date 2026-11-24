import { findAllPokemons, findPokemon, registerPokemon, modifyPokemon, removePokemon } from '../Service/gauntlet';

// Operación que devuelve todos los pokemons de la base de datos
const getPokemons = (async (req, res) => {
    const data = await findAllPokemons();

    return res.status(200).json(data);
});

// Operaciópn que devuelve un pokemon determinado
const getPokemon = (async (req, res) => {
    const pokemon = await findPokemon(); // Aquí dentro pondremos el parámetro pokemon, que debería ser el nombre

    return res.status(200).json(pokemon);
});

// Operación que registra un nuevo pokemon en la base de datos
const postPokemon = (async (req, res) => {
    await registerPokemon() // Aquí dentro pondremos los datos que tendrán los pokemon

    return res.status(201).json({});
});

// Operación que modifica un pokemon en la base de datos
const putPokemon = (async (req, res) => {
    await modifyPokemon() // Aqui dentro pondremos los datos que tendrán los pokemon, y podremos modificar

    return res.status(204).json({});
});

const deletePokemon = (async (req, res) => {
    await removePokemon() // Aquí dentro pondremos el parámetro pokemon, que debería ser el nombre

    return res.status(204).json({})
});

export {
    getPokemons,
    getPokemon,
    postPokemon,
    putPokemon,
    deletePokemon,
};