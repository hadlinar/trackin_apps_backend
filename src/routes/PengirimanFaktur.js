import express from 'express'
import verifyToken from "../middleware/authJwt.js"

import { getPengirimanFaktur } from '../controllers/PengirimanFaktur.js'

const router = express.Router()

router.get('/pengiriman-faktur/:id', verifyToken, getPengirimanFaktur)

export default router