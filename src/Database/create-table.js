const db = require("../Configuration/Database");

async function createTables(req, res) {
    const type_chart_exists = await db.schema.hasTable("type_chart");
    const pokedex_exists = await db.schema.hasTable("pokedex");
    const moves_exists = await db.schema.hasTable("moves");
    const natures_exists = await db.schema.hasTable("natures");
    const abilities_exists = await db.schema.hasTable("abilities");
    const items_exists = await db.schema.hasTable("items");
    const wild_encounter_location_exists = await db.schema.hasTable("wild_encounter_location");
    const pokemon_exists = await db.schema.hasTable("pokemon");

    if (!type_chart_exists) {
        await db.schema.createTable("type_chart", table => {
            table.increments("type_id").primary();
            table.string("name").notNullable();
        });
    }

    if (!natures_exists) {
        await db.schema.createTable("natures", table => {
            table.increments("nature_id").primary();
            table.string("name").notNullable();
            table.string("boosted_stat")
                .notNullable()
                .checkIn(["hp", "atk", "def", "spa", "spd", "spe"]);
            table.string("reduced_stat")
                .notNullable()
                .checkIn(["hp", "atk", "def", "spa", "spd", "spe"]);
        })
    }

    if (!abilities_exists) {
        await db.schema.createTable("abilities", table => {
            table.increments("ability_id").primary();
            table.string("name").notNullable();
            table.string("description").notNullable();
        })
    }

    if (!items_exists) {
        await db.schema.createTable("items", table => {
            table.increments("item_id").primary();
            table.string("name").notNullable();
            table.string("description").notNullable();
        })
    }

    if (!wild_encounter_location_exists) {
        await db.schema.createTable("wild_encounter_location", table => {
            table.increments("location_id").primary();
            table.string("name").notNullable();
        })
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
            table.string("category").notNullable().checkIn(["physical", "special", "status"]);
            table.integer("power").notNullable();
            table.double("accuracy").notNullable().checkBetween([0.1, 1]);
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

    if (!pokemon_exists) {
        await db.schema.createTable("pokemon", table => {
            table.increments("pokemon_id").primary();
            table.string("nickname").notNullable();
            table.integer("level").checkBetween([1, 100]).notNullable();
            table.integer("hp_iv").checkBetween([0, 31]).notNullable();
            table.integer("atk_iv").checkBetween([0, 31]).notNullable();
            table.integer("def_iv").checkBetween([0, 31]).notNullable();
            table.integer("spa_iv").checkBetween([0, 31]).notNullable();
            table.integer("spd_iv").checkBetween([0, 31]).notNullable();
            table.integer("spe_iv").checkBetween([0, 31]).notNullable();
            table
                .integer("nature_id")
                .references("nature_id")
                .inTable("natures")
                .onDelete("CASCADE")
                .onUpdate("Cascade");
            table
                .integer("ability_id")
                .references("ability_id")
                .inTable("abilities")
                .onDelete("CASCADE")
                .onUpdate("Cascade");
            table
                .integer("item_id")
                .references("item_id")
                .inTable("items")
                .onDelete("CASCADE")
                .onUpdate("Cascade");
            table
                .integer("met_location_id")
                .references("location_id")
                .inTable("wild_encounter_location_id")
                .onDelete("CASCADE")
                .onUpdate("Cascade");
            table
                .integer("move_1_id")
                .references("move_id")
                .inTable("moves")
                .onDelete("CASCADE")
                .onUpdate("Cascade");
            table
                .integer("move_2_id")
                .references("move_id")
                .inTable("moves")
                .onDelete("CASCADE")
                .onUpdate("Cascade");
            table
                .integer("move_3_id")
                .references("move_id")
                .inTable("moves")
                .onDelete("CASCADE")
                .onUpdate("Cascade");
            table
                .integer("move_4_id")
                .references("move_id")
                .inTable("moves")
                .onDelete("CASCADE")
                .onUpdate("Cascade");
        })
    }

    console.log("Database prepared");
}

createTables()
    .catch(console.error)
    .finally(() => db.destroy());