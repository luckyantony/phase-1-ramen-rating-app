// Wait for the HTML file to load first before loading JS
document.addEventListener("DOMContentLoaded", main);

const ramens = [
   { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "./images/shoyu.jpg", rating: 5, comment: "Delicious!" },
   { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "./images/Miso.jpg", rating: 4, comment: "Very flavorful!" },
   { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "./images/tonkotsu.jpg", rating: 5, comment: "Amazing taste!" },
   { id: 4, name: "Korean Spicy", restaurant: "Korean", image: "./images/korean.jpg", rating: 5, comment: "Great Ramen" },
   { id: 5, name: "Gyukotsu Ramen", restaurant: "Gyukotsu", image: "./images/gyukotsu.jpg", rating: 5, comment: "Delicious!" },
   { id: 6, name: "Kojiro Ramen", restaurant: "Kojiro", image: "./images/kojiro.jpg", rating: 5, comment: "Delicious!" },
   { id: 7, name: "Naruto Ramen", restaurant: "Ichiraku", image: "./images/naruto.jpg", rating: 5, comment: "Great!" },
   { id: 8, name: "Nirvana Ramen", restaurant: "Nirvana", image: "./images/nirvana.jpg", rating: 5, comment: "Awesome!" }
];

//Create a function that display all ramen images in the section with if ramen-menu
function displayRamens() {
   const menu = document.getElementById("ramen-menu");
   menu.innerHTML = ""; // This clears menu before adding the images
    // This loops through each ramen object and create an image element for it
   ramens.forEach(ramen => {
       const img = document.createElement("img");
       img.src = ramen.image;
       img.alt = ramen.name;
       img.addEventListener("click", () => displayRamenDetails(ramen)); // Show details when clicked
       menu.appendChild(img); // Add image to the menu
   });

    // Display the details of the first ramen by default when page loads
   if (ramens.length > 0) {
       displayRamenDetails(ramens[0]);
   }
}

// This function displays the details of the selected ramen in section with id ramen-detail
function displayRamenDetails(ramen) {
   document.getElementById("ramen-name").textContent = ramen.name;
   document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
   document.getElementById("ramen-rating").textContent = ramen.rating;
   document.getElementById("ramen-comment").textContent = ramen.comment;
   document.getElementById('ramen-image').src = ramen.image;

   document.getElementById("edit-rating").value = ramen.rating;
   document.getElementById("edit-comment").value = ramen.comment;

   document.getElementById("delete-btn").onclick = () => deleteRamen(ramen.id); // Add a click event to the delete button
}

// This function handles submission to the new ramen form
function addSubmitListener() {
   const form = document.getElementById("new-ramen-form");
   form.addEventListener("submit", function(event) {
       event.preventDefault(); // This prevents the form from refreshing the page

       // Creates a new ramen object from the form inputs
       const newRamen = {
           id: ramens.length + 1,
           name: document.getElementById("name").value,
           restaurant: document.getElementById("restaurant").value,
           image: document.getElementById("image").value,
           rating: document.getElementById("rating").value,
           comment: document.getElementById("comment").value
       };
       ramens.push(newRamen); // Add new ramen to array
       displayRamens(); // Refreshes the ramen menu to show the new ramen
       form.reset();// This clears the input
   });
}

// Function to handle the submission of the edit form
function addEditListener() {
   const editForm = document.getElementById("edit-form");
   editForm.addEventListener("submit", function(event) {
       event.preventDefault();

       // This finds the current displayed ramen in array
       const selectedRamen = ramens.find(r => r.name === document.getElementById("ramen-name").textContent);
       if (selectedRamen) {
        // Updates ramen rating and comment with values from the edit form
           selectedRamen.rating = document.getElementById("edit-rating").value;
           selectedRamen.comment = document.getElementById("edit-comment").value;
           displayRamenDetails(selectedRamen);
       }
   });
}

//This function deletes a ramen form from the array and updates the display
function deleteRamen(id) {
   const index = ramens.findIndex(ramen => ramen.id === id);
   if (index !== -1) {
       ramens.splice(index, 1); // Remove ramen from array
       displayRamens(); // Refreshen the ramen menu
   }
}

// Main function that initializes the app
function main() {
   displayRamens(); // Display all ramens
   addSubmitListener(); // Add listeners for the new ramen form
   addEditListener(); // Addd listener for the edit form
}