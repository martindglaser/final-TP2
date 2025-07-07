import { Router } from "express";
import controller from "../container/container.js";
import inputValidates from "../middlewares/inputValidates.js";

const notasRoutes = Router();

// Lista todas las notas
notasRoutes.get("/", controller.getAll);

// Registrar una nota
notasRoutes.post("/", inputValidates, controller.create);

// Listar notas agrupadas por alumno
notasRoutes.get("/agrupadas", controller.getNotasAgrupadas);

export default notasRoutes;
