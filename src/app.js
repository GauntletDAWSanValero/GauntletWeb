// FIXME: import express from 'express'; can't be declared outside of a module
import express from 'express';

import { gauntletRouter } from './route/gauntlet.js';

const app = express();
app.use(express.json());

app.use('/', gauntletRouter);

app.listen(8080, () => {
    console.log('Iniciando el backend en el puerto 8080');
});