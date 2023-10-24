import { Router } from "express";
import { agregarCasa, editarCasa, getCasaId, getCasas } from "../controllers/casasController.js";

const router = Router();

// Public routes
router.get('', getCasas);
router.post('', agregarCasa);
router.get('/:id', getCasaId);
router.put('/editar/:id', editarCasa);

export default router;
