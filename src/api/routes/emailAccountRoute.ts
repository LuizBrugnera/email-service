import express from "express";
import EmailAccountController from "../controllers/EmailAccountController";

const emailAccountRoute = express.Router();
const emailAccountController = new EmailAccountController();

emailAccountRoute.post("/emailAccount", (req, res) =>
  emailAccountController.create(req, res)
);
emailAccountRoute.get("/emailAccount/:id", (req, res) =>
  emailAccountController.findById(req, res)
);
emailAccountRoute.get("/emailAccount", (req, res) =>
  emailAccountController.findAll(req, res)
);
emailAccountRoute.put("/emailAccount/:id", (req, res) =>
  emailAccountController.update(req, res)
);
emailAccountRoute.delete("/emailAccount/:id", (req, res) =>
  emailAccountController.delete(req, res)
);

export default emailAccountRoute;
