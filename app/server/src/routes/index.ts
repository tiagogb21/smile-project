import { Router } from "express";

import user from "./login.route";

const routes = Router();

routes.use("/login", user);

export default routes;
