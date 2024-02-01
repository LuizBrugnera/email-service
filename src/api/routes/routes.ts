import { Router } from "express";
import userRoute from "./userRoute";
import emailAccountRoute from "./emailAccountRoute";

const routes = Router();

routes.use(userRoute);
routes.use(emailAccountRoute);

export default routes;
