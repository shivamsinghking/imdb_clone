import { Plots } from '../models/plots'
import { sendErrorResponse } from '../helpers'

export const getPlotList = async (req, res) => {
  const { name = ''} = req.query
  let plots = await Plots.find({name: { $regex: name, $options: 'i' }})
  return res.send(plots)
}
