import { Router } from "express";
import { getActorList, createActor } from '../controllers/actorController'
const router = Router();

router.get('/', getActorList);
router.post('/', createActor);

export default router;