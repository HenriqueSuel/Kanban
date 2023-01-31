import { Router } from "express";

const cardRoutes = Router();


cardRoutes.get('/', (res, resp) => {
    resp.json('OK')
});

export { cardRoutes };