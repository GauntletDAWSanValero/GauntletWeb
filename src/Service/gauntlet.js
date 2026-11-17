import { db } from '../configuration/database.js';

// Operación que devuelve todos los pokemon de la base de datos
const findAllPokemon = (async () => {
    const result = await db('pokemon').select('*');
    return result;
});

// Operación que devuelve un pokemon determinado
const findPokemon = (async (pokemonName) => {
    const result = await db('pokemon').select('*').where({name: pokemonName}).first();
    return result;
});

// Operación que registra un nuevo pokemon en la base de datos
const registerPokemon = (async () => { // faltan los demás datos
    const result = await db('pokemon').insert({
        name: pokemonName,
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
    findAllPokemon,
    findPokemon,
    registerPokemon,
    modifyPokemon,
    removePokemon,
};