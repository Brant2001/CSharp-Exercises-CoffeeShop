/*
    This module is resposible for receiving other modules and 
    manipulating them to render our Customer list to the DOM
*/
import { Variety } from "./Variety.js";
import { getVarieties } from "./VarietiesProvider.js";


const contentTarget = document.querySelector(".varietiesContainer");

const renderVarietyList = () => {
    getVarieties().then((allTheVarieties) => {
        for (const variety of allTheVarieties) {
            const varietyHTML = Variety(variety)
            contentTarget.innerHTML += varietyHTML
        }
    });
};

const button = document.querySelector("#run-button");

button.addEventListener("click", () => {
    renderVarietyList()
});

