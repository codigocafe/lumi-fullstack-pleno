import {FastifyReply, FastifyRequest} from "fastify";
import {all, save} from "../repositories/billing";
import {iBilling} from "../interfaces/iBilling";

export const billingGetAll = async (
    request:FastifyRequest,
    response:FastifyReply
):Promise<void> => {
    try {
        const billings:iBilling[] = await all();
        response
            .code(200)
            .header('Content-Type', 'application/json; charset=utf-8')
            .send(billings);
    } catch(err) {
        response
            .code(500)
            .header('Content-Type', 'application/json; charset=utf-8')
            .send({error: 'Falha ao listar faturas'});
    }
}

// export const billingGetItem = (
//     request:FastifyRequest,
//     response:FastifyReply
// ):void => {
//     response
//         .code(200)
//         .header('Content-Type', 'application/json; charset=utf-8')
//         .send({message: `Listar item com uuid = ${request.params.id}`});
// }

export const createBilling = async (
    request:FastifyRequest,
    response:FastifyReply
):Promise<void> => {
    const saved:boolean = await save(request.body);
    if (saved)
    {
        response
            .code(200)
            .header('Content-Type', 'application/json; charset=utf-8')
            .send({success: `Fatura criado com sucesso.`});
    } else {
        response
            .code(500)
            .header('Content-Type', 'application/json; charset=utf-8')
            .send({error: `Falha ao criar fatura.`});
    }
}

// export const billingFilter = (
//     request:FastifyRequest,
//     response:FastifyReply
// ):void => {
//     response
//         .code(200)
//         .header('Content-Type', 'application/json; charset=utf-8')
//         .send({message: `Pesquisar pela query ${request.query.data}`});
// }