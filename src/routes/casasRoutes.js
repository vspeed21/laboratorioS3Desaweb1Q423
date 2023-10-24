import { Router } from "express";
import { getCasaId, getCasas } from "../controllers/casasController.js";

const router = Router();

// Public routes
router.get('', getCasas);
router.get('/:id', getCasaId);

export default router;
