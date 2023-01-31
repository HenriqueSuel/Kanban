import { Router } from "express";
import { CreateCardController } from "../useCases/createCard/CreateCard.controller";
import { FindCardsController } from "../useCases/findCards/FindCards.controller";
import { UpdateCardsController } from "../useCases/updateCard/UpdateCard.controller";

const cardRoutes = Router();

const createCardController = new CreateCardController();
const findCardsController = new FindCardsController();
const updateCardsController = new UpdateCardsController()

cardRoutes.post('/', createCardController.handle);
cardRoutes.get('/', findCardsController.handle);
cardRoutes.put('/:id', updateCardsController.handle);

export { cardRoutes };