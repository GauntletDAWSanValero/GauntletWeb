import { findAllInDex, findMonInDex, registerPokemon, modifyPokemon, removePokemon } from '../service/gauntlet';

// Operación que devuelve todos los pokemons de la base de datos
const getPokedex = (async (req, res) => {
    const data = await findAllInDex();

    return res.status(200).json(data);
});

// Operaciópn que devuelve un pokemon determinado
const getMonInDex = (async (req, res) => {
    const monindex = await findMonInDex(req.params.pokemon_name);

    return res.status(200).json(monindex);
});

// Operación que registra un nuevo pokemon en la base de datos
const postPokemon = (async (req, res) => {
    await registerPokemon() // todo: Aquí dentro pondremos los datos que tendrán los pokemon

    return res.status(201).json({});
});

// Operación que modifica un pokemon en la base de datos
const putPokemon = (async (req, res) => {
    await modifyPokemon() // todo: Aquí dentro pondremos los datos que tendrán los pokemon, y podremos modificar

    return res.status(204).json({});
});

const deletePokemon = (async (req, res) => {
    await removePokemon() // todo: Aquí dentro pondremos el parámetro pokemon, que debería ser el nombre

    return res.status(204).json({})
});

export {
    getPokedex,
    getMonInDex,
    postPokemon,
    putPokemon,
    deletePokemon,
};