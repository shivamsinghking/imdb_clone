import { Router } from "express";
import movieRoutes from "./movieRoutes";
import actorRoutes from './actorRoutes'
import producerRoutes from './producerRoutes'
import plotsRoutes from './plotsRoutes'

const router = Router();
router.use('/movies', movieRoutes)
router.use('/actors', actorRoutes)
router.use('/producers', producerRoutes)
router.use('/plots', plotsRoutes)
export default router;