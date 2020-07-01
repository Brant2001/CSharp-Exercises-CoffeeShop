// this grabs the varieties from the server
export const getVarieties = () => {
    return fetch('https://localhost:5001/api/beanvariety/')
        .then(resp => resp.json());
}