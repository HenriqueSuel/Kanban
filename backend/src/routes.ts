import { Router } from "express";

import { cardRoutes } from "./modules/cards/routes/cards.routes";

const routers = Router();

routers.use("/cards", cardRoutes);

export { routers }