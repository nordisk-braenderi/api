module.exports = {
  required: ['name'],
  properties: {
    name: {type: 'string'},
    abv: {type: 'number', minimum: 0, maximum: 100},
    mashing: {
      type: 'object',
      required: ['yeast', 'sugar'],
      properties: {
        yeast: {type: 'number'},
        sugar: {type: 'number'}
      },
    },
  },
};
