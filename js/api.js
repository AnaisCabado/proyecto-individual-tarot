const baseURL = "https://tarotapi.dev/api/v1/cards";
async function fetchData() {
    try {
        const response = await fetch(baseURL + "/random?n=5");

        if(!response.ok) {
            throw new Error('no funciona');
        }
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch(error) {
        console.error(error);
    }
    console.log(baseURL)
}

fetchData();


export {
    fetchData
}