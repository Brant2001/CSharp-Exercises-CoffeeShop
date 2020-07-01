/*
    This module is responsible for the HTML 
    representation of a single variety and 
    will create it and export it.
*/
export const Variety = (varietyObject) => {
    return `
        <div class="variety">
            <header class="variety__name">
                <h1>${varietyObject.name}</h1>
            </header>
            <section class="variety__info">
                <p>Region: ${varietyObject.region}</p>
                <p>Notes: ${varietyObject.notes}</p>
            </section>
        </div>
    `
}