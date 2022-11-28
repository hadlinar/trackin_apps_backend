import Customer from '../models/CustomerModel.js'

export const getCustomer = async(req, res) => {
    try {
        const menu = await Customer.findAll()
        res.json(menu)
    } catch (e) {
        res.json({
            message: e.message
        })
    }
}