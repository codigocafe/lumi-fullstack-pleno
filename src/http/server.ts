import 'dotenv/config';
import Fastify, {FastifyInstance, FastifyReply, FastifyRequest} from 'fastify';
import Router from "./router";

const server:FastifyInstance = Fastify();

Router(server);

(async ():Promise<void> => {
    try{
        const number_port:string = process.env.PORT ?? '80';
        const port:number = parseInt(number_port);
        const host:string = '0.0.0.0';
        await server.listen({port, host});
        console.log('Server listening...');
    }catch(err){
        console.log(`Error: ${err}`);
    }
})();

