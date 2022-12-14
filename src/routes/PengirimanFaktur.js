import express from 'express'
import PengirimanFaktur from '../controllers/PengirimanFaktur.js'
import jwt from 'jsonwebtoken'
import e from 'express';
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

router.get('/pengiriman-faktur/:id/:idLoper', verifyToken, (req, res)=>{
    let id = req.params.id;
    let idLoper = req.params.idLoper;
    let noFaktur = req.originalUrl.split('=');

    let fktFormatted = noFaktur[1].split('%2F').join('/')

    jwt.verify(req.token, process.env.SECRET_KEY,(err,authData)=>{
        try {
            let pengirimanFaktur = new PengirimanFaktur().getDetailFaktur(idLoper, id, fktFormatted)
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

router.post('/pengiriman-faktur/:id', verifyToken, (req, res)=>{
    let id = req.params.id;
    let noFaktur = req.originalUrl.split('=');
    let fktFormatted = noFaktur[1].split('%2F').join('/');

    let body = req.body;
    
    jwt.verify(req.token, process.env.SECRET_KEY,(err,authData)=>{
        try {
            new PengirimanFaktur().updateFinishTime(id, fktFormatted, body.finish_faktur, body.deskripsi, body.check_faktur);
            
            res.status(200).json({
                "message": "posted"
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

router.get('/pengiriman-faktur/:id/:idLoper', verifyToken, (req, res)=>{
    let id = req.params.id;
    let idLoper = req.params.idLoper;
    let noFaktur = req.originalUrl.split('=');

    let fktFormatted = noFaktur[1].split('%2F').join('/')

    jwt.verify(req.token, process.env.SECRET_KEY,(err,authData)=>{
        try {
            let pengirimanFaktur = new PengirimanFaktur().getDetailFaktur(idLoper, id, fktFormatted)
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

router.get('/pengiriman-faktur/rekap/:idLoper/:filter', verifyToken, (req, res)=>{
    let idLoper = req.params.idLoper;
    let filter = req.params.filter;

    let filtered
    if(filter == 'Harian') {
        filtered = '1 day'
    } else{
        filtered = '1 month'
    }

    jwt.verify(req.token, process.env.SECRET_KEY,(err,authData)=>{
        try {
            let pengirimanFaktur = new PengirimanFaktur().rekapFaktur(idLoper, filtered)
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