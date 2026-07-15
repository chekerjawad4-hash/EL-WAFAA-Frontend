const API = "http://127.0.0.1:3001/api";

export async function getWallet(userId){
    const res = await fetch(`${API}/wallet/${userId}`);
    return await res.json();
}

export async function getTransactions(userId){
    const res = await fetch(`${API}/transactions/${userId}`);
    return await res.json();
}
