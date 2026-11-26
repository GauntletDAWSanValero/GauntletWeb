const db = require("../configuration/database");

// función para borrar las tablas. Usar con cuidado, especialmente si tenemos datos en la BBDD

async function dropTables(req, res) {
    const type_chart_exists = await db.schema.hasTable("type_chart");
    const pokedex_exists = await db.schema.hasTable("pokedex");
    const moves_exists = await db.schema.hasTable("moves");
    const natures_exists = await db.schema.hasTable("natures");
    const abilities_exists = await db.schema.hasTable("abilities");
    const items_exists = await db.schema.hasTable("items");
    const wild_encounter_location_exists = await db.schema.hasTable("wild_encounter_location");
    const pokemon_exists = await db.schema.hasTable("pokemon");

    if (pokemon_exists) {
        await db.schema.dropTable("pokemon");
    }

    if (moves_exists) {
        await db.schema.dropTable("moves");
    }

    if (pokedex_exists) {
        await db.schema.dropTable("pokedex");
    }

    if (wild_encounter_location_exists) {
        await db.schema.dropTable("wild_encounter_location");
    }

    if (items_exists) {
        await db.schema.dropTable("items");
    }

    if (abilities_exists) {
        await db.schema.dropTable("abilities");
    }

    if (natures_exists) {
        await db.schema.dropTable("natures");
    }

    if (type_chart_exists) {
        await db.schema.dropTable("type_chart");
    }

    console.log("Database dropped");
}

dropTables()
    .catch(console.error)
    .finally(() => db.destroy());