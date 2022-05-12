const database = require('../db');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const ACCESS_SECRET = process.env.ACCESS_SECRET;

const validUser = ( req , res , next ) => {
    try {
        req.decoded = jwt.verify(req.headers.authorization , ACCESS_SECRET);
        return next();
    } catch (e) {
        if (!req.decoded) {
            return res.status(401).send("accesstoken이 없습니다");
        }
        if (error.name === 'TokenExpiredError') {

            return res.status(419).json({
                code: 419 ,
                message: '토큰이 만료되었습니다.'
            });
        }
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({
                code: 401 ,
                message: '유효하지 않은 토큰입니다.'
            });
        }
        res.status(404).json({
            code: 404 ,
            message: '확인되지않은 오류입니다.'
        });
    }
};

module.exports = {
    validUser ,
};