import PengirimanFaktur from '../models/PengirimanFakturModel.js'

export const getGudang = async(req, res) => {
    try {
        const menu = await PengirimanFaktur.findAll()
        res.json(menu)
    } catch (e) {
        res.json({
            message: e.message
        })
    }
}