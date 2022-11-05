import { Router } from "express";
import { getProducerList, createProducer } from '../controllers/producerController'
const router = Router();

router.get('/', getProducerList);
router.post('/', createProducer);

export default router;