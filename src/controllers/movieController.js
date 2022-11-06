import { Movie } from '../models/movie'
import { Actor } from '../models/actor'
import { Producer } from '../models/producer'
import { sendErrorResponse } from '../helpers'

export const getMovieList = async (req, res) => {
   const { name = '', limit = 10, page = 0} = req.query
   let movies = await Movie.find({name: { $regex: name, $options: 'i' }}).skip(page*limit).limit(limit).sort({year_of_release: 'desc'})
   let total = await Movie.count()
   if(!total) return sendErrorResponse(res, total)
   return res.status(200).send({movies, total, page, limit, count: movies.length})
}

export const createMovie = async (req, res) => {
  const {name = '', casts, plot, producer, year_of_release = null} = req.body
  // validate payload... before creating
  let isMoviePresent = await Movie.find({name: { $regex: name, $options: 'i' }});
  if(isMoviePresent.length) return sendErrorResponse(res, "Movie is already registered")

  // if cast are present
  casts.map(async (data, key) => {
    // {_id, actor_name} = data
    const { actor_name } = data;
    if(!actor_name) return sendErrorResponse(res, "Actor name is required");
    let isActorPresent = await Actor.find({name: actor_name})
    if(isActorPresent.length == 0) return sendErrorResponse(res, "Actor not listed"); 
  });

  // if producer is present is present
  if(!producer.name) return sendErrorResponse(res, "Producer name is required")
  let isProducerPresent = await Producer.find({name: producer.name})
  if(isProducerPresent.length == 0) return sendErrorResponse(res, "Producer not listed");

  Movie.create({name, casts, plot, producer, year_of_release}, (err, response) => {
    if(err) return sendErrorResponse(res, err)
    return res.send(response);
  })
}

export const updateMovieInfo = async (req, res) => {
  const { _id } = req.body
  let docs = await Movie.findOne({ _id })
  if(!docs) return sendErrorResponse(res, docs)
  docs = {...req.body}
  docs.save((err, result) => {
    if(err) return sendErrorResponse(res, result)
    return res.send(result)
  });
}