const db = require("../Configuration/Database");

async function createTables(req, res) {
    const type_chart_exists = await db.schema.hasTable("type_chart");
    const pokedex_exists = await db.schema.hasTable("pokedex");
    const moves_exists = await db.schema.hasTable("moves");

    if (!type_chart_exists) {
        await db.schema.createTable("type_chart", table => {
            table.increments("type_id").primary();
            table.string("name").notNullable();
        });
    }

    if (!pokedex_exists) {
        await db.schema.createTable("pokedex", table => {
            table.increments("pokemon_id").primary();
            table.string("pokemon_name").notNullable();
            table
                .integer("type_1_id")
                .references("type_id")
                .inTable("type_chart")
                .onDelete("CASCADE")
                .onUpdate("Cascade")
                .notNullable();
            table
                .integer("type_2_id")
                .references("type_id")
                .inTable("type_chart")
                .onDelete("CASCADE")
                .onUpdate("Cascade");
            table.integer("Base_HP").notNullable();
            table.integer("Base_ATK").notNullable();
            table.integer("Base_DEF").notNullable();
            table.integer("Base_SPA").notNullable();
            table.integer("Base_SPD").notNullable();
            table.integer("Base_SPE").notNullable();
        });
    }

    if (!moves_exists) {
        await db.schema.createTable("moves", table => {
            table.increments("move_id").primary();
            table.string("name").notNullable();
            table.string("category").notNullable();
            table.checkIn("category", ["physical", "special", "status"]);
            table.integer("power").notNullable();
            table.double("accuracy").notNullable();
            table.check("accuracy >= 0.1 AND accuracy <= 1");
            table.string("description").notNullable();
            table.integer("max_pp").notNullable();
            table
                .integer("move_type_id")
                .references("type_id")
                .inTable("type_chart")
                .onDelete("CASCADE")
                .onUpdate("Cascade");
        });
    }

    console.log("Database prepared");
}

createTables()
    .catch(console.error)
    .finally(() => db.destroy());