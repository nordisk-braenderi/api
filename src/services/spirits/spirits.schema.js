module.exports = {
  required: ['name', 'recipe', 'abv'],
  properties: {
    name: {type: 'string'},
    recipe: {type: 'string'},
    abv: {type: 'number', minimum: 0, maximum: 100},
  },
};
