document.addEventListener("DOMContentLoaded", main);

const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "images/miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "images/tonkotsu.jpg", rating: 5, comment: "Amazing taste!" }
];

function displayRamens() {
    const menu = document.getElementById("ramen-menu");
    menu.innerHTML = ""; // Clear existing elements

    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => displayRamenDetails(ramen));
        menu.appendChild(img);
    });

    // Display the first ramen by default
    if (ramens.length > 0) {
        displayRamenDetails(ramens[0]);
    }
}

function displayRamenDetails(ramen) {
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
    document.getElementById("ramen-image").src = ramen.image;
    document.getElementById("ramen-rating").textContent = ramen.rating;
    document.getElementById("ramen-comment").textContent = ramen.comment;
}

function addSubmitListener() {
    document.getElementById("new-ramen-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const newRamen = {
            id: ramens.length + 1,
            name: this.name.value,
            restaurant: this.restaurant.value,
            image: this.image.value,
            rating: this.rating.value,
            comment: this.comment.value
        };

        ramens.push(newRamen);
        displayRamens(); // Refresh ramen menu
        this.reset(); // Clear form fields
    });
}

function main() {
    displayRamens();
    addSubmitListener();
}
