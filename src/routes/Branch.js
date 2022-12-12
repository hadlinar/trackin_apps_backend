import express from 'express'
import Branch from '../controllers/Branch.js'

const router = express.Router()

router.get('/branch', async (req, res) => {
    let branch = await new Branch().getBranch();
    return res.status(200).json({
        "message": "ok",
        "result": branch
    })
})

router.get('/branch/:id', async (req, res) => {
    let id = req.params.id;

    let branch = await new Branch().getBranchById(id);
    return res.status(200).json({
        "message": "ok",
        "result": branch
    })
})

export default router