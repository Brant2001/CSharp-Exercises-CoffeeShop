// Sets the value of "varieties" to an empty array
let varieties = []

// this grabs the varietiess from the server
export const getVarieties = () => {
    return fetch('https://localhost/api/beanvariety')
        .then(response => response.json())
        .then(parsedVarieties => {
            varieties = parsedVarieties
        })
}

// Provides a copy of our data and exports it to be used other places
export const useVarieties = () => varieties.slice()