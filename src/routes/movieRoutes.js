import { Router } from "express";
import { getMovieList, createMovie, updateMovieInfo } from '../controllers/movieController'
const router = Router();

router.get('/', getMovieList);
router.post('/', createMovie)
router.patch('/', updateMovieInfo)

export default router;