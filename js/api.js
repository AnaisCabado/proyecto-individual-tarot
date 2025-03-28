async function fetchData(url) {
    try {
        const response = await fetch(url);

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
}

fetchData("https://tarotapi.dev/api/v1/cards");