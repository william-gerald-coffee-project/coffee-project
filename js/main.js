(function () {
"use strict"
// function adds object properties to html elements
function renderCoffee(coffee) {
    let html = `<div class="card" style="width: 18rem;">`;
    html +=`<div class="card-body">`;
    html +=`<h5 class="card-title">${coffee.name}</h5>`;
    html += `<h6 class="card-subtitle mb-2 text-body-secondary">${coffee.roast}</h6>`;
    html +=`</div>`
    html += `</div>`

    return html;

}
// function loops through array index
function renderCoffees(coffees) {
    let html = '';
    for (let i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
//function will display user's selected option
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    console.log(selectedRoast)
    let filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.roast.toLowerCase() === selectedRoast.toLowerCase()) {
            console.log("test");
            filteredCoffees.push(coffee);
        } else if (selectedRoast.toUpperCase() === 'ALL') {
            console.log("test2");
            filteredCoffees.push(coffee);
        }
    });
    container.innerHTML = renderCoffees(filteredCoffees);
}

//displays coffee selection based on user's input
let inputOne = document.querySelector("#first-form");
inputOne.addEventListener("input", updateNames => {
    let filteredCoffees = [];
    let names = updateNames.target.value.toLowerCase()
    coffees.forEach(function (coffee){
        if (coffee.name.toLowerCase().includes(names)) {
            filteredCoffees.push(coffee);
        }
    })
    container.innerHTML = renderCoffees(filteredCoffees);
})

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'Light'},
    {id: 2, name: 'Half City', roast: 'Light'},
    {id: 3, name: 'Cinnamon', roast: 'Light'},
    {id: 4, name: 'City', roast: 'Medium'},
    {id: 5, name: 'American', roast: 'Medium'},
    {id: 6, name: 'Breakfast', roast: 'Medium'},
    {id: 7, name: 'High', roast: 'Dark'},
    {id: 8, name: 'Continental', roast: 'Dark'},
    {id: 9, name: 'New Orleans', roast: 'Dark'},
    {id: 10, name: 'European', roast: 'Dark'},
    {id: 11, name: 'Espresso', roast: 'Dark'},
    {id: 12, name: 'Viennese', roast: 'Dark'},
    {id: 13, name: 'Italian', roast: 'Dark'},
    {id: 14, name: 'French', roast: 'Dark'},
];

let container = document.querySelector("#container");
let submitButton2 = document.querySelector('#secondSubmit');
let roastSelection = document.querySelector('#roast-selection');
let usersRoast = document.querySelector("#add-roast");

//code will populate the cards
container.innerHTML = renderCoffees(coffees);

roastSelection.addEventListener('change', updateCoffees);
submitButton2.addEventListener('click', assignID);

//function allows user to add their own coffee
function assignID (e) {
    e.preventDefault();
    // let newList = []
    let userInput = document.querySelector("#second-form").value;
    let newCoffee = {
        id: coffees.length + 1,
        name: userInput,
        roast: usersRoast.value
    }
    coffees.push(newCoffee);
    // container.innerHTML = renderCoffee(coffees);
    container.innerHTML = renderCoffees(coffees);
    document.querySelector('#second-form').value="";
}

})();
