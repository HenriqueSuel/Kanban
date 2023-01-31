import { Router } from "express";
import { CreateCardController } from "../useCases/createCard/CreateCard.controller";

const cardRoutes = Router();

const createCardController = new CreateCardController();

cardRoutes.post('/', createCardController.handle);

export { cardRoutes };