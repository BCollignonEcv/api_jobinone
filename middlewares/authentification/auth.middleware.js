const jwt = require('jsonwebtoken');

module.exports = {
    authenticate: (req, res, next) => {
        const authHeader = req.headers.authorization;

        if (authHeader) {
            const token = authHeader.split(' ')[1];

            jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
                if (err) {
                    return res.sendStatus(403);
                }
                console.log(user);
                req.user = user;
                next();
            });
        } else {
            res.sendStatus(401);
        }
    },
    authorize: (permissions) => {
        return (req,res, next) =>{
            const userRole = req.user.role
            if (permissions.includes(userRole)) {
                next()
            }else{
                return res.status(401).json("You don't have permission")
            }
        }
    }
}