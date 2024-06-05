import {FastifyInstance} from "fastify";

import {home} from "../controllers/home-controller";
import {create, readAll} from "../controllers/billing-controller";

const Router = (server:FastifyInstance):void => {

    server.get('/', home);

    server.get('/billing', readAll);
    // server.get('/billing/:id', billingGetItem);
    server.post('/billing', create);
    // server.get('/billing/search', billingFilter);

    // server.get('/clients', clientGetAll);
    // server.post('/clients', clientCreateItem);

}

export default Router;