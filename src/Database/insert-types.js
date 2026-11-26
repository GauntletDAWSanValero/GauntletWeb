const db = require("../Configuration/Database");

/*
    FIXME: Hay un hueco en la db, creo que es porque la lista empieza en 1 en vez de en 0. Pero es
     posible que sea culpa de create-table.js
   */

async function insertTypeChart(req, res) {
    await Promise.all([
        db('type_chart').insert({ name: 'normal'}),
        db('type_chart').insert({ name: 'fire'}),
        db('type_chart').insert({ name: 'water'}),
        db('type_chart').insert({ name: 'grass'}),
        db('type_chart').insert({ name: 'electric'}),
        db('type_chart').insert({ name: 'ice'}),
        db('type_chart').insert({ name: 'fighting'}),
        db('type_chart').insert({ name: 'poison'}),
        db('type_chart').insert({ name: 'ground'}),
        db('type_chart').insert({ name: 'flying'}),
        db('type_chart').insert({ name: 'psychic'}),
        db('type_chart').insert({ name: 'bug'}),
        db('type_chart').insert({ name: 'rock'}),
        db('type_chart').insert({ name: 'ghost'}),
        db('type_chart').insert({ name: 'dragon'}),
        db('type_chart').insert({ name: 'dark'}),
        db('type_chart').insert({ name: 'steel'}),
        db('type_chart').insert({ name: 'fairy'})
    ]);

    console.log("Typechart data inserted")
}

insertTypeChart()
    .catch(console.error)
    .finally(() => db.destroy());
