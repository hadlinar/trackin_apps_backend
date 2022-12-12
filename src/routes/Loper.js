import express from 'express'
import Loper from '../controllers/Loper.js'

const router = express.Router()

router.get('/loper', async(req, res) => {
    let loper = await new Loper().getAllLoper();
    return res.status(200).json({
        "message": "ok",
        "result": loper
    })
})

export default router