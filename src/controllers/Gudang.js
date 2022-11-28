import Gudang from '../models/GudangModel.js'

export const getGudang = async(req, res) => {
    try {
        const menu = await Gudang.findAll()
        res.json(menu)
    } catch (e) {
        res.json({
            message: e.message
        })
    }
}