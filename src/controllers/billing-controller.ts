import Fastify, {FastifyReply, FastifyRequest} from "fastify";
import {getAll, save} from "../repositories/billing";
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

const read = () => {}

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






// export const createBilling = async (
//     request:FastifyRequest,
//     response:FastifyReply
// ):Promise<void> => {
//     try{
//         const saved =
//         response
//             .code(200)
//             .header('Content-Type', 'application/json; charset=utf-8')
//             .send({success: `Fatura criado com sucesso.`});
//     }catch(err){
//         response
//             .code(500)
//             .header('Content-Type', 'application/json; charset=utf-8')
//             .send({error: `Falha ao criar fatura. [${err}]`});
//
//     }
// }
