import {FastifyReply, FastifyRequest} from "fastify";

export const clientGetAll = (
    request:FastifyRequest,
    response:FastifyReply
):void => {
    response
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send({message: "Listar todos os clientes"});
}

export const clientCreateItem = (
    request:FastifyRequest,
    response:FastifyReply
):void => {
    response
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send({message: "Criar cliente"})
}
