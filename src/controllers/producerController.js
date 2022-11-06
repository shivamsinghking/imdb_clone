import { Producer } from '../models/producer'
import { sendErrorResponse, sendSuccessResponse } from '../helpers'

export const getProducerList = async (req, res) => {
   const { name = '', gender = '', limit = 10, isLimit = true, page = 0} = req.query
   const query = {name: { $regex: name, $options: 'i' }, gender: {$regex: gender, $options: 'i'}}

   // Counting total data
  let total = await Producer.count();
  if(!total) return sendErrorResponse(res, total);
   let producers;
   // isLimit == false, means send all data
   if(!isLimit){
    producers = await Producer.find({...query})
    if(!producers) return sendErrorResponse(res, producers).sort({name: 'asc'});
   }else{
    producers = await Producer.find({...query}).limit(limit).skip(limit*page).sort({name: 'asc'});
    if(!producers) return sendErrorResponse(res, producers)
   }
   return sendSuccessResponse(res, {producers, total, limit, isLimit, page, count: producers.length})
}

export const createProducer = async (req, res) => {
  const { name, gender, bio, dob = null } = req.body
  let isProducerPresent = await Producer.find({name: name})
  if(isProducerPresent.length) return sendErrorResponse(res, "Producer is already present")
  
  Producer.create({name, gender, bio, dob}, (err, response) => {
    if(err) return sendErrorResponse(res, err)
    return sendSuccessResponse(res, response)
  })
}
