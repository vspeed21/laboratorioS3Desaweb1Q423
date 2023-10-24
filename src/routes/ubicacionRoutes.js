import { Router } from "express";
import { agregarUbicacion, editarUbicacion, getUbicacionId, getUbicaciones } from "../controllers/ubicacionesController.js";

const router = Router();

// Public routes
router.get('', getUbicaciones);
router.post('', agregarUbicacion);
router.get('/:id', getUbicacionId);
router.put('/editar/:id', editarUbicacion);

export default router;
