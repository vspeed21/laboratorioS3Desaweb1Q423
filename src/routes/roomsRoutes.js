import { Router } from "express";
import { agregarRoom, editarRoom, getRoomId, getRooms } from "../controllers/roomsController.js";

const router = Router();

// Public routes
router.get('', getRooms);
router.post('', agregarRoom);
router.get('/:id', getRoomId);
router.put('/editar/:id', editarRoom);

export default router;
