import Branch from '../models/BranchModel.js'

export const getBranch = async(req, res) => {
    try {
        const menu = await Branch.findAll()
        res.json(menu)
    } catch (e) {
        res.json({
            message: e.message
        })
    }
}