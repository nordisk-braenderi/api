const {BadRequest} = require('feathers-errors');

const checkDataUnique = (...strings) => {
  return async function(hook) {
    let errors = [];
    for (let string of strings) {
      const {total} = await hook.service.find({
        query: {[string]: hook.data[string]},
      });

      if (total > 0) {
        errors.push(`'${string}' is not unique`);
      }
    }

    if (errors.length > 0) {
      throw new BadRequest({errors});
    }
  };
};

module.exports = checkDataUnique;
