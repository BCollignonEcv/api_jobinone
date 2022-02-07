const AccessControl = require('accesscontrol');

let grantsObject = {
    superadmin: {
        dataset: {
            'create:any': ['*'],
            'read:any': ['*'],
            'update:any': ['*'],
            'delete:any': ['*']
        },
        datamodel: {
            'create:any': ['*'],
            'read:any': ['*'],
            'update:any': ['*'],
            'delete:any': ['*']
        },
        user: {
            'create:any': ['*'],
            'read:any': ['*'],
            'update:any': ['*'],
            'delete:any': ['*']
        },
    },
    admin: {
        dataset: {
            'create:any': ['*'],
            'read:any': ['*'],
            'update:any': ['*'],
            'delete:any': ['*']
        },
        datamodel: {
            'create:any': ['*'],
            'read:any': ['*'],
            'update:any': ['*'],
            'delete:any': ['*']
        },
        user: {
            'create:any': ['*'],
            'read:any': ['*'],
            'update:any': ['*', , '!role'],
            'delete:any': ['*']
        },
    },
    contributor: {
        dataset: {
            'create:any': ['*'],
            'read:any': ['*'],
            'update:own': ['*'],
            'delete:own': ['*']
        },
        datamodel: {
            'create:own': ['*'],
            'read:any': ['*'],
            'update:own': ['*'],
            'delete:own': ['*']
        },
        user: {
            'read:own': ['*'],
            'update:own': ['*','!id', '!role'],
        },
    },
    user: {
        dataset: {
            'read:any': ['*'],
        },
        datamodel: {
            'create:own': ['*'],
            'read:any': ['*'],
            'update:own': ['*'],
            'delete:own': ['*']
        },
        user: {
            'read:own': ['*'],
            'update:own': ['*','!id', '!role'],
        },
    }
};

const ac = new AccessControl(grantsObject);

module.exports = {
    ac
}
