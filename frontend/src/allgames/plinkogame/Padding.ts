export const DecimalNumber=10000;

export function pad(n:number){
    return n*DecimalNumber;
}

export function unpad(n:number){
    return Math.floor( n/DecimalNumber);
}