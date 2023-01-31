import { Router } from "express";
import { ensureAuthenticate } from "./middlewares/ensureAuthenticate";
import { authenticatorRoutes } from "./modules/authenticator/routes/authenticator.routes";

import { cardRoutes } from "./modules/cards/routes/cards.routes";

const routers = Router();

routers.use("/cards", ensureAuthenticate, cardRoutes);
routers.use("/login", authenticatorRoutes);

export { routers }