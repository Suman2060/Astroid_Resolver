
import { resourcesController } from "./resources.controller";
import {Router} from 'express';

const router = Router()

router.get("/",resourcesController)

export default router;