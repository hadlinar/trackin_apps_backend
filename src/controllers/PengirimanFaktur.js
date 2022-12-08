import PengirimanFaktur from '../models/PengirimanFakturModel.js'
import jwt from 'jsonwebtoken'
import config from '../config/auth.config.js'
import verifyToken from '../middleware/authJwt.js'

export const getPengirimanFaktur = (res, req) => {
    console.log(req.params)
    let userId = req.params.id
    console.log(req.token)
    console.log(userId)
    jwt.verify(req.token, config.secret, (err, authData) => {
        console.log(authData.id)
        try {
            const data = PengirimanFaktur.findAll({
                where: {
                    id_ref_pengiriman: userId
                }
            });
            res.send(data);
        } catch (err) {
            res.status(500).json({
                message: 'Failed to authenticate token.'
           });

           res.status(403).json({
               message: "Session time out",
           });
        }
    })
}