import {FastifyReply, FastifyRequest} from "fastify";
import {getAll} from "../repositories/client";


export const readAll = async (
    request:FastifyRequest,
    response:FastifyReply
):Promise<void> => {

    const clients:object | boolean = await getAll();
    if(clients){
        response
            .code(200)
            .header("Content-Type", "application/json; charset=utf-8")
            .send(clients);
    }else{
        response
            .code(500)
            .header("Content-Type", "application/json; charset=utf-8")
            .send({error: "Falha ao carregar lista de clientes."});
    }
}

