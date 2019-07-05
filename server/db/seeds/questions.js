
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('form').del()
    .then(function () {
      // Inserts seed entries
      return knex('form').insert([
        { id: 1, questions: "Where do you want to get married?", answers: "['Las Vegas', 'Beach', 'Church']", score: "[3, 2, 1]" },
        { id: 2, questions: "Pizza, Wine and Netflix?", answers: "['On the first Date', 'Saturdays', 'Once a Month']", score: "[1, 2, 3]" },
        { id: 3, questions: "Weapon of choice for a zombie apocalypse?", answers: "['Samurai Sword', 'Shotgun', 'Weapons are heavy, I would run!']", score: "[2, 3, 1]" },
        { id: 4, questions: "Best memories are?", answers: "['To do with kids', 'To do with Alcohol', 'Naughty']", score: "[1, 2, 3]" },
        { id: 5, questions: "You\'re in a public restroom without toilet paper. What do you do?", answers: "['Ask a neighbour behind the wall', 'I always carry some', 'Use my handkerchief']", score: "[1, 2, 3]" }
      ]);
    });
};
