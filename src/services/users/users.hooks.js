const {authenticate} = require('feathers-authentication').hooks;
const commonHooks = require('feathers-hooks-common');
const {restrictToRoles} = require('feathers-authentication-hooks');
const {hashPassword} = require('feathers-authentication-local').hooks;

const restrictToAdmin = restrictToRoles({
  roles: ['admin'],
  idField: 'id',
});

const restrictToAdminOrOwner = restrictToRoles({
  roles: ['admin'],
  idField: 'id',
  ownerField: 'id',
  owner: true,
});

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [restrictToAdmin],
    get: [restrictToAdminOrOwner],
    create: [restrictToAdmin, hashPassword()],
    update: [restrictToAdminOrOwner, hashPassword()],
    patch: [restrictToAdminOrOwner, hashPassword()],
    remove: [restrictToAdminOrOwner],
  },

  after: {
    all: [
      commonHooks.when(
        hook => hook.params.provider,
        commonHooks.discard('password'),
      ),
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
