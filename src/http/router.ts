import {FastifyInstance} from "fastify";

import {home} from "../controllers/home-controller";
import {create, read, readAll as readAllBilling} from "../controllers/billing-controller";
import { readAll as readAllClient } from  "../controllers/client-controller";

const Router = (server:FastifyInstance):void => {

    server.get('/', home);

    server.get('/billing', readAllBilling);
    server.get('/billing/:id', read);
    server.post('/billing', create);

    server.get('/clients', readAllClient);
}

export default Router;