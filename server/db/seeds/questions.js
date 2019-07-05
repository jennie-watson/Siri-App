
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("form").del()
    .then(function () {
      // Inserts seed entries
      return knex("form").insert([
        { id: 1, name: 'one', questions: 'What would you rather replace your fingers with?', answers: '["Small green poisonous snakes", "Cheerio Sausages", "Knives"]', score: '[3, 2, 1]' },
        { id: 2, name: 'two', questions: 'Are you a blue square in a yellow hole or a blue round hole in a yellow square?', answers: '["A blue square in a yellow hole", "A blue round hole in a yellow square", "Can I be both?"]', score: '[1, 2, 3]' },
        { id: 3, name: 'three', questions: 'Weapon of choice for a zombie apocalypse?', answers: '["Samurai Sword", "Shotgun", "Weapons are heavy, I would run!"]', score: '[2, 3, 1]' },
        { id: 4, name: 'four', questions: 'What movie character would you rather be?', answers: '["Hannibal Lecter", "Ferris Bueller", "Cheech Martin"]', score: '[1, 2, 3]' },
        { id: 5, name: 'five', questions: 'You are in a public restroom without toilet paper. What do you do?', answers: '["Ask a neighbour behind the wall", "I always carry some", "Use my handkerchief"]', score: '[1, 2, 3]' }
      ]);
    });
};
