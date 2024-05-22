import { Router } from "express";
const router =Router();
import plinkoRouter from '../routes/plinko'

router.use('/plinko',plinkoRouter);

export default router;
