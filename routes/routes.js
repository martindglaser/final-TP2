import { Router } from "express";
import notasRoutes from "./notasRoutes.js";

const routes = Router();

routes.use("/notas", notasRoutes);

export default routes;
