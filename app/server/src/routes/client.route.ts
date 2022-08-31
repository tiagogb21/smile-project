import { Router } from "express";
import ClientController from "../controllers/client.controller";
import ClientMiddleware from "../middlewares/client.middleware";

const routes = Router();

const controller = new ClientController();

routes.get("/:email", controller.getClientInfo);

routes.post(
  "/",
  ClientMiddleware.isValidClientName,
  ClientMiddleware.isValidGenre,
  ClientMiddleware.isValidBirthday,
  ClientMiddleware.isValidNaturalness,
  ClientMiddleware.isValidProfession,
  ClientMiddleware.isValidMaritalStatus,
  ClientMiddleware.isValidCellphone,
  ClientMiddleware.isValidEmail,
  controller.registerClientSuccess
);

export default routes;
