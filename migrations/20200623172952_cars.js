
exports.up = function(knex) {
    return knex.schema.createTable("cars", (table) => {
        table.increments("id")
        table.text("VIN", 17).notNullable().unique()
        table.text("make").notNullable()
        table.text("model").notNullable()
        table.integer("mileage")
      });
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars");
};
