import Loper from '../models/LoperModel.js'

export const getLoper = async(req, res) => {
    try {
        const menu = await Loper.findAll()
        res.json(menu)
    } catch (e) {
        res.json({
            message: e.message
        })
    }
}