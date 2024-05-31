import {FastifyReply, FastifyRequest} from "fastify";

export const home = (request:FastifyRequest, response:FastifyReply):void => {
    response
        .code(200)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({message: "Lumi API"});
}