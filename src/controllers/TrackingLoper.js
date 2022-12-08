import TrackingLoper from '../models/TrackingLoperModel.js'

export const getTrackingLoper = async(req, res) => {
    try {
        const data = await TrackingLoper.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(data);
    } catch (err) {
        console.log(err);
    }
}