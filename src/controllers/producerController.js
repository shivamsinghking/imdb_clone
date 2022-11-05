import { Producer } from '../models/producer'
import { sendErrorResponse } from '../helpers'

export const getProducerList = async (req, res) => {
  const { name = '', gender = ''} = req.query
  let producer = await Producer.find({name: { $regex: name, $options: 'i' }, gender: {$regex: gender, $options: 'i'}})
  return res.send(producer)
}

export const createProducer = async (req, res) => {
  const {producer} = req.body
  Producer.create(producer, (err, response) => {
    if(err) return sendErrorResponse(res, err)
    return res.send(response);
  })
}
