export async function fetcher(url, options = {}) {
    let response;
    if(!options){
        response = await fetcher(url);
    }else {
        response = await fetch(url, options);
    }
    const data = await response.json();
    return data;
}