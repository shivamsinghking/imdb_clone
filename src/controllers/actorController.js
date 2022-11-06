import { Actor } from '../models/actor'
import { sendErrorResponse, sendSuccessResponse } from '../helpers'

export const getActorList = async (req, res) => {
   const { name = '', gender = '', limit = 10, isLimit = true, page = 0} = req.query
   const query = {name: { $regex: name, $options: 'i' }, gender: {$regex: gender, $options: 'i'}}

   // Counting total data
  let total = await Actor.count();
  if(!total) return sendErrorResponse(res, total);
   let actors;
   // isLimit == false, means send all data
   if(!isLimit){
    actors = await Actor.find({...query})
    if(!actors) return sendErrorResponse(res, actors).sort({name: 'asc'});
   }else{
    actors = await Actor.find({...query}).limit(limit).skip(limit*page).sort({name: 'asc'});
    if(!actors) return sendErrorResponse(res, actors)
   }
   return sendSuccessResponse(res, {actors, total, limit, isLimit, page, count: actors.length})
}

export const createActor = async (req, res) => {
  const { name, gender, bio, dob = null } = req.body
  let isActorPresent = await Actor.find({name: name})
  if(isActorPresent.length) return sendErrorResponse(res, "Actor is already present")
  Actor.create({name, gender, bio, dob}, (err, response) => {
    if(err) return sendErrorResponse(res, err)
    return sendSuccessResponse(res, response)
  })
}
