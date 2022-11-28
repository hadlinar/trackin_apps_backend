import express from 'express'

import { getBranch } from '../controllers/Branch.js'

const router = express.Router()

router.get('/branch', getBranch)

export default router