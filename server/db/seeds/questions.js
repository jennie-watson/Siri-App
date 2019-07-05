
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("form").del()
    .then(function () {
      // Inserts seed entries
      return knex("form").insert([
        { id: 1, name: 'one', questions: 'How do you want to get married?', answers: '["Las Vegas", "Beach", "Church"]', score: '[3, 2, 1]' },
        { id: 2, name: 'two', questions: 'Pizza, Wine and Netflix?', answers: '["On the first Date", "Saturdays", "Once a Month"]', score: '[1, 2, 3]' },
        { id: 3, name: 'three', questions: 'Weapon of choice for a zombie apocalipse?', answers: '["Samurai Sword", "Shotgun", "Weapons are heavy, I would run!"]', score: '[2, 3, 1]' },
        { id: 4, name: 'four', questions: 'Best memories are?', answers: '["To do with kids", "To do with Alcohol", "Naughty"]', score: '[1, 2, 3]' },
        { id: 5, name: 'five', questions: 'You are in a public restroom without toilet paper. What do you do?', answers: '["Ask a neighbour behind the wall", "I always carry some", "Use my handkerchief"]', score: '[1, 2, 3]' }
      ]);
    });
};
