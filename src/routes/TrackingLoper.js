import express from 'express'
import TrackingLoper from '../controllers/TrackingLoper.js'
import jwt from 'jsonwebtoken'
const router = express.Router()

router.get('/toba/track-loper/:id', verifyToken, (req, res)=>{
    let id = req.params.id;

    jwt.verify(req.token, process.env.SECRET_KEY,(err,authData)=>{
        try {
            let trackingLoper = new TrackingLoper().getLoperById(id)
            trackingLoper.then(function(result) {
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

router.get('/toba/track-loper/history/:id', verifyToken, (req, res)=>{
    let id = req.params.id;

    jwt.verify(req.token, process.env.SECRET_KEY,(err,authData)=>{
        try {
            let trackingLoper = new TrackingLoper().history(id)
            trackingLoper.then(function(result) {
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

export default router