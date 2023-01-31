import { Router } from "express";
import { LoginController } from "../useCases/login/login.controller";

const authenticatorRoutes = Router();

const loginController = new LoginController();

authenticatorRoutes.post('/', loginController.handle);

export { authenticatorRoutes };