import express from 'express'

import { signIn } from '../controllers/User.js'

const router = express.Router()

router.post('/login', signIn)

export default router