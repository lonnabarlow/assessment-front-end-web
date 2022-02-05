const restaurants = ["The Break", "Cubby's", "CupBop", "Wendys", "Denny's", "Firehouse Sub's", "Waffle Love", "Starbucks", "Cafe Yugo","Panda Express", "Himalayan Kitchen", "Buffalo Wild Wings", "Olive Garden"]

const runRestaurants = () => {
    const randomElement = restaurants[Math.floor(Math.random() * restaurants.length)];
    console.log(randomElement)
    const restaurantName = document.createElement("h2")
    restaurantName.innerText = randomElement
    let section = document.querySelector("section")
    section.replaceChildren(restaurantName)
}
const restaurantButton = document.querySelector("#restaurant-selector")

restaurantButton.addEventListener("click", runRestaurants)