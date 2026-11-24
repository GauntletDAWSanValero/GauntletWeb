import express from 'express';
const gauntletRouter = express.Router();

import { getPokedex, getMonInDex, postPokemon, putPokemon, deletePokemon } from '../controller/gauntlet.js';

gauntletRouter.get('/pokedex', getPokedex);
gauntletRouter.get('/pokedex/:pokemon', getMonInDex);
gauntletRouter.post('/pokemons', postPokemon);
gauntletRouter.put('/pokemons/:pokemon', putPokemon);
gauntletRouter.delete('/pokemons/:pokemon', deletePokemon);

export {
    gauntletRouter
};