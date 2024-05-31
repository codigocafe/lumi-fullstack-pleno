export interface iBilling
{
    id ?: number,
    clientNumber : number,
    referenceMonth: string,
    eeQuantity : number,
    eeValue : number,
    esiQuantity : number,
    esiValue : number,
    ecgQuantity : number,
    ecgValue : number,
    publicTax : number
}