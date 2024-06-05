import { PrismaClient } from "@prisma/client";
import {iBilling} from "../interfaces/iBilling";

export const save = async (data:iBilling):Promise<boolean> => {
    try {
        const { clientNumber, referenceMonth, eeQuantity, eeValue, esiQuantity, esiValue, ecgQuantity, ecgValue, publicTax } = data;
        const pg:PrismaClient = new PrismaClient();
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
    const pg:PrismaClient = new PrismaClient();
    // @ts-ignore
    const billings = await pg.billing.findMany();
    return billings;
}