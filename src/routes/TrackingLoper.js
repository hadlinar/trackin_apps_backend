import express from 'express'

import { getTrackingLoper } from '../controllers/TrackingLoper.js'

const router = express.Router()

router.get('/track-loper/:id', getTrackingLoper)

export default router