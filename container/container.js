import Controller from "../controllers/controller.js";
import Dao from "../Dao/DaoAlumno.js";
import Service from "../service/Service.js";

const dao = new Dao();
const service = new Service(dao);
const controller = new Controller(service);

export default controller;
