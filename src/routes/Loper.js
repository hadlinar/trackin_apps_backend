import express from 'express'

import { getLoper } from '../controllers/Loper.js'

const router = express.Router()

router.get('/loper', getLoper)

export default router