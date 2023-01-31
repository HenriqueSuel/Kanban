import { Router } from "express";
import { CreateCardController } from "../useCases/createCard/CreateCard.controller";
import { FindCardsController } from "../useCases/findCards/FindCards.controller";

const cardRoutes = Router();

const createCardController = new CreateCardController();
const findCardsController = new FindCardsController();

cardRoutes.post('/', createCardController.handle);
cardRoutes.get('/', findCardsController.handle);

export { cardRoutes };