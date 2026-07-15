const API_URL = "http://127.0.0.1:3001";

export async function http(url, options = {}){

    const token = localStorage.getItem("token");

    const headers = {
        "Content-Type":"application/json",
        ...options.headers
    };

    if(token){
        headers.Authorization = `Bearer ${token}`;
    }

    const res = await fetch(
        `${API_URL}${url}`,
        {
            ...options,
            headers
        }
    );

    if(res.status === 401){

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        window.location.href="/login";

        return;
    }

    return await res.json();
}
