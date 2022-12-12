import express from 'express'
import PengirimanFaktur from '../controllers/PengirimanFaktur.js'
const router = express.Router()

router.get('/pengiriman-faktur/:id', verifyToken, (req, res)=>{
    let id = req.params.id;

    jwt.verify(req.token, process.env.SECRET_KEY,(err,authData)=>{
        try {
            let pengirimanFaktur = new PengirimanFaktur().getPengirimanFakturById(id)
            pengirimanFaktur.then(function(result) {
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