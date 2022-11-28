import TrackingLoper from '../models/TrackingLoperModel.js'

export const getGudang = async(req, res) => {
    try {
        const menu = await TrackingLoper.findAll()
        res.json(menu)
    } catch (e) {
        res.json({
            message: e.message
        })
    }
}