import { Movie } from '../models/movie'
import { sendErrorResponse } from '../helpers'

export const getMovieList = async (req, res) => {
  const { name = ''} = req.query
   let movies = await Movie.find({name: { $regex: name, $options: 'i' }})
   return res.status(200).send(movies)
}

export const createMovie = async (req, res) => {
  const {movie} = req.body
  // validate payload... before creating
  Movie.create(movie, (err, response) => {
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