import { Router } from "express";
import controller from "../container/container.js"
import inputValidates from "../midlewares/inputValidates.js";

const routes = Router();
routes.get("/", controller.getAll);
routes.post("/",inputValidates, controller.create);
routes.get("/notas/agrupadas", controller.getNotasAgrupadas);


export default routes;
