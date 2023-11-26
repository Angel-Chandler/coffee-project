"use strict";
(() => {
    // users input from search bar
    const searchInput = document.querySelector("[data-search]");    // coffee suggestion button
    const btn = document.querySelector("#submit-coffeeSuggest")
    // coffee suggestions index to limit amount of suggested coffees
    let index = 0
    // coffee list
    const coffeesList = document.querySelector('#coffees')
    // coffee suggestion input
    let input = document.getElementById("coffeeAdd");


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
        let html = '<div class="card d-flex col mb-4">';
        html += `<img src="images/${coffee.image}" class="coffee-img" alt="Coffee Image">`;
        html += `<div class="card-body">${coffee.name}</div>`;
        html += `<p>${coffee.roast}</p>`;
        html += '</div>';

        return html;
    }

    // filters through the coffees array
    function updateCoffees(event) {
      if (event) {event.preventDefault();}

        const value = searchInput.value.toLowerCase();
        const selectedRoast = document.querySelector('#roast-selection').value.toLowerCase();

        coffeeCardsContainer.innerHTML = ''; // Clear previous cards

        // Filter through the original array of coffees
        coffees.forEach(coffee => {
            const isNameMatch = coffee.name.toLowerCase().includes(value);
            const isRoastMatch = coffee.roast.toLowerCase().includes(selectedRoast);
            const isAllMatch = selectedRoast === 'all';
            if (isNameMatch && (isRoastMatch || isAllMatch)) {
                const cardHtml = renderCoffee(coffee);
                coffeeCardsContainer.innerHTML += cardHtml;
            }
        });
    }



    // combo function event for inputing a coffee search and or submitting
    function init() {
        searchInput.addEventListener("input", updateCoffees);
        document.querySelector("#roast-selection").addEventListener('input', updateCoffees);
        document.querySelector('#searchRoast').addEventListener('submit', updateCoffees);
        updateCoffees();
    }

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide

    const coffees = [
        {id: 1, name: 'Light City', roast: 'light', image: 'IMG-20210719-WA0004_1_900x.webp'},
        {id: 2, name: 'Half City', roast: 'light', image: 'IMG-20210719-WA0004_1_900x.webp' },
        {id: 3, name: 'Cinnamon', roast: 'light', image: 'IMG-20210719-WA0004_1_900x.webp' },
        {id: 4, name: 'City', roast: 'medium', image: 'IMG-20210719-WA0004_1_900x.webp'},
        {id: 5, name: 'American', roast: 'medium', image: 'IMG-20210719-WA0004_1_900x.webp' },
        {id: 6, name: 'Breakfast', roast: 'medium', image: 'IMG-20210719-WA0004_1_900x.webp' },
        {id: 7, name: 'High', roast: 'dark', image: 'IMG-20210719-WA0004_1_900x.webp' },
        {id: 8, name: 'Continental', roast: 'dark', image: 'IMG-20210719-WA0004_1_900x.webp' },
        {id: 9, name: 'New Orleans', roast: 'dark', image: 'IMG-20210719-WA0004_1_900x.webp' },
        {id: 10, name: 'European', roast: 'dark', image: 'IMG-20210719-WA0004_1_900x.webp' },
        {id: 11, name: 'Espresso', roast: 'dark', image: 'IMG-20210719-WA0004_1_900x.webp' },
        {id: 12, name: 'Viennese', roast: 'dark', image: 'IMG-20210719-WA0004_1_900x.webp' },
        {id: 13, name: 'Italian', roast: 'dark', image: 'IMG-20210719-WA0004_1_900x.webp' },
        {id: 14, name: 'French', roast: 'dark', image: 'IMG-20210719-WA0004_1_900x.webp' },
    ];


    init();
})()