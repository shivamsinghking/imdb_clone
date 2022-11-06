import { Router } from "express";
import { getPlotList } from '../controllers/plotController'
const router = Router();

router.get('/', getPlotList);
// router.post('/', createPlot);

export default router;