import {FastifyReply, FastifyRequest} from "fastify";
import {get, getAll, save} from "../repositories/billing";
import {iBilling} from "../interfaces/iBilling";


export const create = async (
    request:FastifyRequest,
    response:FastifyReply
) => {
    //@ts-ignore
    const saved:boolean = await save(request.body);
    if(saved){
        response
            .code(200)
            .header('Content-Type', 'application/json; charset=utf-8')
            .send({success: `Fatura criado com sucesso.`});
    }else{
        response
            .code(500)
            .header('Content-Type', 'application/json; charset=utf-8')
            .send({error: `Falha ao criar fatura.`});
    }
}

export const read = async (
    request:FastifyRequest,
    response: FastifyReply
) => {
    //@ts-ignore
    const id:number = parseInt(request.params.id);
    const billing = await get(id);
    response.code(200).header("Content-Type", "application/json; charset=utf-8").send(billing)
}

export const readAll = async (
    request:FastifyRequest,
    response:FastifyReply
):Promise<void> => {
    const result = await getAll();
    if(result){
        response
            .code(200)
            .header('Content-Type', 'application/json; charset=utf-8')
            .send(result);
    }else{
        response
            .code(500)
            .header('Content-Type', 'application/json; charset=utf-8')
            .send({ "error": "Erro ao carregar faturas." });
    }
}