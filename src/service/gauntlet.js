import db from '../configuration/database.js';

// Operación que devuelve todos los pokemon de la pokedex
const findAllInDex = (async () => {
    const result = await db('pokedex').select('*');
    return result;
});

// Operación que devuelve un pokemon determinado
const findMonInDex = (async (pokemon_name) => {
    const result = await db('pokedex').select('*').where({name: pokemon_name}).first();
    return result;
});

// Operación que registra un nuevo pokemon en la base de datos
const registerPokemon = (async (pokemon_name) => { // faltan los demás datos
    const result = await db('pokedex').insert({
        name: pokemon_name,
        // aquí van los demás datos
    });

    return result;
});

// Operación que modifica un pokemon en la base de datos
const modifyPokemon = (async (pokemonName) => {
    const result = await db('pokemon').where({ name: pokemonName}).update({
        // los datos a hacer update van aquí
    });

    return result;
});

// Operación que elimina un pokemon de la base de datos
const removePokemon = (async (pokemonName) => {
    const result = await db('pokemon').del().where({ name: pokemonName });

    return result;
});

export {
    findAllInDex,
    findMonInDex,
    registerPokemon,
    modifyPokemon,
    removePokemon,
};