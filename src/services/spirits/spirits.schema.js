module.exports = {
  required: ['name', 'recipe'],
  properties: {
    name: {type: 'string'},
    recipe: {type: 'string'},
    email: {type: 'string', format: 'email'},
  },
};
