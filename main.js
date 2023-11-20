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


    function renderCoffee(coffee) {
        let html = '<div class="coffee">';
        html += `<div>${coffee.name}</div>`;
        html += `<div>${coffee.roast}</div>`;
        html += '</div>';

        return html;
    }

    function renderCoffees(coffees) {
        let html = '';
        coffees.forEach(coffee => {
            html += renderCoffee(coffee);
        });
        return html;
    }

    //
    function updateCoffees(event) {
        event.preventDefault();
        const value = searchInput.value.toLowerCase();
        const selectedRoast = document.querySelector('#roast-selection').value.toLowerCase();
        const allRoastOption = document.querySelector('#roast-selection').value.toLowerCase();


        const filteredCoffees = coffees.filter(coffee => {
            const isNameMatch = coffee.name.toLowerCase().includes(value);
            const isRoastMatch = coffee.roast.toLowerCase().includes(selectedRoast);
            const isAllMatch =  coffee.roast.toLowerCase().includes(allRoastOption);
            return isNameMatch && isRoastMatch || isAllMatch;
        });

        tbody.innerHTML = renderCoffees(filteredCoffees);
    }

    // combo function event for inputing a coffee search and or submitting
    function init() {
        searchInput.addEventListener("input", updateCoffees);
        document.querySelector('#submit').addEventListener('click', updateCoffees);
        tbody.innerHTML = renderCoffees(coffees);
    }



// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
    const coffees = [
        {id: 1, name: 'Light City', roast: 'light' , all:'all'},
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
    const submitButton = document.querySelector('#submit');
    const roastSelection = document.querySelector('#roast-selection');
    const allMatch = document.querySelector('#roast-selection')

    tbody.innerHTML = renderCoffees(coffees);

    submitButton.addEventListener('click', updateCoffees);



    init();
})()