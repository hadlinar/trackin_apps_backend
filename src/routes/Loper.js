const express = require('express')
const Loper = require('../controllers/Loper.js')
const jwt = require('jsonwebtoken')
const router = express.Router()

router.get('/toba/loper/all', async(req, res) => {
    let loper = await new Loper().getAllLoper();
    return res.status(200).json({
        "message": "ok",
        "result": loper
    })
})

router.get('/toba/loper', verifyToken, (req, res)=>{
    jwt.verify(req.token, process.env.SECRET_KEY,(err,authData)=>{
        try {
            let nik = authData.username
            let users = new Loper().getLoperById(nik)
            users.then(function(result) {
                res.status(200).json({
                    "message": "ok",
                    "result": result
                })
            })
        } catch (e) {
            res.status(500).json({
                 message: 'Failed to authenticate token.'
            });

            res.status(403).json({
                message: "Session time out",
            });
        }
    });  
});

function verifyToken(req, res, next) { 
    const bearerHearder = req.headers['authorization'];
    if(typeof bearerHearder != 'undefined'){
        const bearer = bearerHearder.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();  
  
    } else {  
        res.sendStatus(403);  
    }  
}

module.exports = router;