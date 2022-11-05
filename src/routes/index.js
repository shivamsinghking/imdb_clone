import { Router } from "express";
import movieRoutes from "./movieRoutes";
import actorRoutes from './actorRoutes'
import producerRoutes from './producerRoutes'

const router = Router();
router.use('/movies', movieRoutes)
router.use('/actors', actorRoutes)
router.use('/producers', producerRoutes)
export default router;