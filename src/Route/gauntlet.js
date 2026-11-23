import express from 'express';
const gauntletRouter = express.Router();

import { getPokemons, getPokemon, postPokemon, putPokemon, deletePokemon } from '../controller/gauntlet.js';

gauntletRouter.get('/pokemons', getPokemons);
gauntletRouter.get('/pokemons/:pokemon', getPokemon);
gauntletRouter.post('/pokemons', postPokemon);
gauntletRouter.put('/pokemons/:pokemon', putPokemon);
gauntletRouter.delete('/pokemons/:pokemon', deletePokemon);

export {
    gauntletRouter
};