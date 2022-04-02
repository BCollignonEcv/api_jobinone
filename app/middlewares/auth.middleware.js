const jwt = require('jsonwebtoken');
const AccessControl = require('accesscontrol');

const ac = new AccessControl({
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
});

module.exports = {
    authorize: (roles = []) => {
        const authHeader = req.headers.authorization || null;

        if (authHeader) {
            const token = authHeader.split(' ')[1];

            jwt.verify(token, process.env.SECRET_TOKEN_ADMIN, (err, user) => {
                if (err) {
                    return res.sendStatus(403);
                }

                req.user = user;
                next();
            });
        } else {
            res.sendStatus(401);
        }
    },
    accessControl: new AccessControl(grantsObject)
}