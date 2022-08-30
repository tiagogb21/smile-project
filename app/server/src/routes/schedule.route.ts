import { Router } from "express";
import SchedulleController from "../controllers/schedule.controller";

const routes = Router();

const controller = new SchedulleController();

routes.post("/", controller.scheduleSuccess);

export default routes;
