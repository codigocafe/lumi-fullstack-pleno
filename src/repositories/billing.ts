import { PrismaClient } from "@prisma/client";
import {iBilling} from "../interfaces/iBilling";

const pg:PrismaClient = new PrismaClient();

export const save = async (data:iBilling):Promise<boolean> => {
    try {
        const { clientNumber, referenceMonth, eeQuantity, eeValue, esiQuantity, esiValue, ecgQuantity, ecgValue, publicTax } = data;
        await pg.billing.create({
            data: {
                clientNumber,
                referenceMonth,
                eeQuantity,
                eeValue,
                esiQuantity,
                esiValue,
                ecgQuantity,
                ecgValue,
                publicTax
            }
        });
        return true;
    } catch(err) {
        console.log('Error ao salvar fatura.', err);
        return false;
    }
}
export const getAll = async () => {
    // @ts-ignore
    const billings = await pg.billing.findMany();
    return billings;
}

export const get = async( id:number ) => {
    const billing = await pg.billing.findUnique({
        where: {
            id: id
        }
    });
    return billing;
}