// index.js

// Callbacks
const displayBurgerDetails = (burger) => {
    // Add code
    const imageElement = document.getElementById("image")
    imageElement.src = burger.image

    const nameElement = document.getElementById("name")
    nameElement.textContent = burger.name

    const numberInCart = document.getElementById("number-in-cart-count")
    numberInCart.textContent = burger.number_in_cart

};

const addToCart = () => {
    // Add code
    const addToCartForm = document.getElementById("add-to-cart-form")
    addToCartForm.addEventListener("submit", (event => {
        event.preventDefault()
        
        const numberInCartElements = document.getElementById("number-in-cart-count")
        const numberToAddElement = document.getElementById("number-to-add")
        numberInCartElements.textContent = Number(numberInCartElements.textContent) + Number(numberToAddElement.value)
    }))
}

const addBurgerNamesToMenu = () => {
    // Add code
    const restaurantMenu = document.getElementById("restaurant-menu")

    fetch("http://localhost:3000/burgers")
    .then(response => response.json())
    .then(burgers => {
        burgers.forEach(burger => {
            const spanElement = document.createElement("span")
            spanElement.textContent = burger.name
            // restaurantMenu.appendChild(spanElement)

            const divElement = document.createElement("div")
            const deleteElement = document.createElement("button")
            deleteElement.textContent = "DELETE"

            deleteElement.addEventListener("click" , () => {
                divElement.remove()
            })

            divElement.appendChild(spanElement)
            divElement.appendChild(deleteElement)
            restaurantMenu.appendChild(divElement)

            spanElement.addEventListener("click", () => {
                displayBurgerDetails(burger)
            })
        })
        displayBurgerDetails(burgers[0])
    })
};

const main = () => {
    // Invoke addBurgerNamesToMenu here
    document.addEventListener("DOMContentLoaded", () => {
        addBurgerNamesToMenu()
        addToCart()
    })
    // Invoke addToCart here
    
}

main()