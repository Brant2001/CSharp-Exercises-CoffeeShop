/*
    This module is responsible for the HTML 
    representation of a single variety and 
    will create it and export it.
*/
export const Variety = (varietyObject) => {
    return `
        <div class="variety">
            <header class="variety__name">
                <h1>${varietyObject.Name}</h1>
            </header>
            <section class="variety__info">
                <p>
                ${varietyObject.Region}
                ${varietyObject.Notes}
                </p>
            </section>
        </div>
    `
}