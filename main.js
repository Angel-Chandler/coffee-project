"use strict";
(() => {
    // users input from search bar
    const searchInput = document.querySelector("[data-search]")
    // coffee suggestion button
    const btn = document.querySelector("#submit-coffeeSuggest")
    // coffee suggestions index to limit amount of suggested coffees
    let index = 0
    // coffee list
    const coffeesList = document.querySelector('#coffees')
    // coffee suggestion input
    let input = document.getElementById("coffeeAdd")


// button event for adding coffee suggestion
    btn.addEventListener("click", (e) => {
        e.preventDefault()
        let div = document.createElement('div');
        let newCoffee = document.createTextNode(input.value)
        if (input.value === '') {
            alert('Must have input in text field')
        } else if (index >= 10) {
            alert("added max suggestions")
        } else {
            coffeesList.appendChild(div)
            div.appendChild(newCoffee)
            input.value = ' '
            index++;
        }

    })
    // Declared a const for the coffee cards
    const coffeeCardsContainer = document.getElementById("coffeeCards");

    // function that generates an HTML string representing a "coffee card" based on the information of a given coffee object.
    function renderCoffee(coffee) {
        let html = '<div class="card" style="width: 18rem;">';
        html += `<img src="images/IMG-20210719-WA0004_1_900x.webp" class="card-img-top">`;
        html += `<div class="card-body">${coffee.name}</div>`;
        html += `<div>${coffee.roast}</div>`;
        html += '</div>';

        return html;
    }
    // this function responsible for rendering coffee objects on the webpage.
    function renderCoffees(coffees) {
        coffeeCardsContainer.innerHTML = '';
        coffees.forEach(coffee => {
            const cardHtml = renderCoffee(coffee);
            coffeeCardsContainer.innerHTML += cardHtml;
        });
    }

    const value = searchInput.value.toLowerCase();
    const selectedRoast = document.querySelector('#roast-selection').value.toLowerCase();
    // filters through the coffees array
    function updateCoffees(event) {
        event.preventDefault();

        coffeeCardsContainer.innerHTML = '';

        // Iterate through the original array of coffees
        coffees.forEach(coffee => {
            // const filteredCoffees = coffeeCardsContainer.filter(coffee => {
            const isNameMatch = coffeeCardsContainer.name.toLowerCase().includes(value);
            const isRoastMatch = coffeeCardsContainer.roast.toLowerCase().includes(selectedRoast);
            const isAllMatch = selectedRoast === 'all'
            if (isNameMatch && (isRoastMatch || isAllMatch)) {
                const cardHtml = renderCoffee(coffee);
                coffeeCardsContainer.innerHTML += cardHtml;
            }
        });
    }

    // combo function event for inputing a coffee search and or submitting
    function init() {
        searchInput.addEventListener("input", updateCoffees);
        document.querySelector('#submit').addEventListener('click', updateCoffees);
        tbody.innerHTML = renderCoffees(coffees);
    }



// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide


    const coffees = [
        {id: 1, name: 'Light City', roast: 'light'},
        {id: 2, name: 'Half City', roast: 'light' },
        {id: 3, name: 'Cinnamon', roast: 'light' },
        {id: 4, name: 'City', roast: 'medium' },
        {id: 5, name: 'American', roast: 'medium' },
        {id: 6, name: 'Breakfast', roast: 'medium' },
        {id: 7, name: 'High', roast: 'dark' },
        {id: 8, name: 'Continental', roast: 'dark' },
        {id: 9, name: 'New Orleans', roast: 'dark' },
        {id: 10, name: 'European', roast: 'dark' },
        {id: 11, name: 'Espresso', roast: 'dark' },
        {id: 12, name: 'Viennese', roast: 'dark' },
        {id: 13, name: 'Italian', roast: 'dark' },
        {id: 14, name: 'French', roast: 'dark' },
    ];



    const tbody = document.querySelector('#coffees');
    const submitButton = document.querySelector('form').addEventListener('submit', updateCoffees);

    tbody.innerHTML = renderCoffees(coffees);

    submitButton.addEventListener('click', updateCoffees);


    init();
})()