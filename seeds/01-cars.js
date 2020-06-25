exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {VIN: "4ASDFASF4354F4F09", make: "yugo", model: "soviet", mileage: 999990},
        {VIN: "984JFJF9RJ49HF729", make: "chevy", model: "tahoe", mileage: 987654},
        {VIN: "73HCMI73777CJDG23", make: "gmc", model: "yukon", mileage: 456765},
        {VIN: "0292JFIVFJIKKMJRJ", make: "hot", model: "wheels", mileage: 0}
      ]);
    });
};