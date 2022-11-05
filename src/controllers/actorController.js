import { Actor } from '../models/actor'
import { sendErrorResponse, sendSuccessResponse } from '../helpers'

export const getActorList = async (req, res) => {
   const { name = '', gender = ''} = req.query
   let actors = await Actor.find({name: { $regex: name, $options: 'i' }, gender: {$regex: gender, $options: 'i'}})
   return sendSuccessResponse(res, actors)
}

export const createActor = async (req, res) => {
  const { actor } = req.body
  Actor.create(actor, (err, response) => {
    if(err) return sendErrorResponse(res, err)
    return sendSuccessResponse(res, response)
  })
}
