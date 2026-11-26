const db = require("../configuration/database");

/* todo: hay que insertar todos los demás datos, de momento esto solo borra los datos de type chart
    porqué no hay más datos insertados */
// Borrar todos los datos de la tabla type_chart, el db().del() lo he encontrado en StackOverflow

async function deleteTypeChart(req, res) {
    const type_chart_exists = await db.schema.hasTable("type_chart");
    const pokedex_exists = await db.schema.hasTable("pokedex");
    const moves_exists = await db.schema.hasTable("moves");
    const natures_exists = await db.schema.hasTable("natures");
    const abilities_exists = await db.schema.hasTable("abilities");
    const items_exists = await db.schema.hasTable("items");
    const wild_encounter_location_exists = await db.schema.hasTable("wild_encounter_location");
    const pokemon_exists = await db.schema.hasTable("pokemon");

    if (type_chart_exists) {
        await db("type_chart").del();
    }

    if (natures_exists) {
        await db("natures").del();
    }

    if (abilities_exists) {
        await db("abilities").del();
    }

    if (items_exists) {
        await db("items").del();
    }

    if (wild_encounter_location_exists) {
        await db("wild_encounter_location").del();
    }

    if (pokedex_exists) {
        await db("pokedex").del();
    }

    if (moves_exists) {
        await db("moves").del();
    }

    if (pokemon_exists) {
        await db("pokemon").del();
    }

    if (type_chart_exists) {
        await db("type_chart").del();
    }

    console.log("Values deleted");
}

deleteTypeChart()
    .catch(console.error)
    .finally(() => db.destroy());
