import { http } from "./http";


export async function login(email,password){

    return await http(
        "/api/login",
        {
            method:"POST",
            body:JSON.stringify({
                email,
                password
            })
        }
    );

}


export async function register(username,email,password){

    return await http(
        "/api/register",
        {
            method:"POST",
            body:JSON.stringify({
                username,
                email,
                password
            })
        }
    );

}


export async function getWallet(){

    return await http(
        "/api/wallet"
    );

}


export async function getDZC(){

    return await http(
        "/api/dzc"
    );

}


export async function buyDZC(userId,amount){

    return await http(
        "/api/buy-dzc",
        {
            method:"POST",
            body:JSON.stringify({
                userId,
                amount
            })
        }
    );

}


export async function getMarkets(){

    return await http(
        "/api/markets"
    );

}


export async function getTransactions(){

    return await http(
        "/api/transactions"
    );

}


export async function getCandles(symbol, interval="1h"){

    return await http(
        `/api/candles/${symbol}?interval=${interval}`
    );

}
