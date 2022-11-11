export const getGift = async (category) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?api_key=NegQ8L0aDQlkJ67aCpkvwqNt5j74AIQA&q=${category}&limit=10`;
    const coors = {
        method: 'GET',
        credentials: "same-origin", 
        headers: {Accept: 'application/json', 'Content-Type': 'application/json',},
    };
    const respuesta = await fetch(url, coors).then(resp =>resp.json());
    return Promise.resolve(respuesta.data);
}

