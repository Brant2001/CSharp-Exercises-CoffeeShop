/*
    This module is resposible for receiving other modules and 
    manipulating them to render our Customer list to the DOM
*/
import { Variety } from "./Variety";
import { useVarieties } from "./VarietiesProvider";

const url = "https://localhost:5001/api/beanvariety/";

const button = document.querySelector("#run-button");

const contentTarget = document.querySelector(".varietiesContainer");

const renderVarietyList = () => {
    contentTarget.innerHTML = getVarieties().then(() => {
        const allTheVarieties = useVarieties()

        for (const variety of allTheVarieties) {
            const varietyHTML = Variety(variety)
            return varietyHTML
        }
    });
};
export const VarietyList = () => {
    button.addEventListener("click", () => {
        renderVarietyList();
    });
};

button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);
        })
});

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}
