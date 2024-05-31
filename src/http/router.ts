import {FastifyInstance} from "fastify";

import {home} from "../controllers/home-controller";
import {createBilling, billingFilter, billingGetAll, billingGetItem} from "../controllers/billing-controller";
import {clientCreateItem, clientGetAll} from "../controllers/client-controller";

const Router = (server:FastifyInstance):void => {

    server.get('/', home);

    server.get('/billing', billingGetAll);
    // server.get('/billing/:id', billingGetItem);
    server.post('/billing', createBilling);
    // server.get('/billing/search', billingFilter);

    server.get('/clients', clientGetAll);
    server.post('/clients', clientCreateItem);

}

export default Router;