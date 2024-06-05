import { PrismaClient } from "@prisma/client";

const pg:PrismaClient = new PrismaClient();

export const getAll = async ():Promise<object|boolean> => {
    try {
        const clients = await pg.billing.groupBy({ by: 'clientNumber' });
        return clients;
    }catch(err){
        console.log(err)
        return false;
    }
}