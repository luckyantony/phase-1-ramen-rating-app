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

function displayRamens() {
   const menu = document.getElementById("ramen-menu");
   menu.innerHTML = "";

   ramens.forEach(ramen => {
       const img = document.createElement("img");
       img.src = ramen.image;
       img.alt = ramen.name;
       img.addEventListener("click", () => displayRamenDetails(ramen));
       menu.appendChild(img);
   });

   if (ramens.length > 0) {
       displayRamenDetails(ramens[0]);
   }
}

function displayRamenDetails(ramen) {
   document.getElementById("ramen-name").textContent = ramen.name;
   document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
   document.getElementById("ramen-rating").textContent = ramen.rating;
   document.getElementById("ramen-comment").textContent = ramen.comment;
   document.getElementById('ramen-image').src = ramen.image;

   document.getElementById("edit-rating").value = ramen.rating;
   document.getElementById("edit-comment").value = ramen.comment;

   document.getElementById("delete-btn").onclick = () => deleteRamen(ramen.id);
}

function addSubmitListener() {
   const form = document.getElementById("new-ramen-form");
   form.addEventListener("submit", function(event) {
       event.preventDefault();
       const newRamen = {
           id: ramens.length + 1,
           name: document.getElementById("name").value,
           restaurant: document.getElementById("restaurant").value,
           image: document.getElementById("image").value,
           rating: document.getElementById("rating").value,
           comment: document.getElementById("comment").value
       };
       ramens.push(newRamen);
       displayRamens();
       form.reset();
   });
}

function addEditListener() {
   const editForm = document.getElementById("edit-form");
   editForm.addEventListener("submit", function(event) {
       event.preventDefault();
       const selectedRamen = ramens.find(r => r.name === document.getElementById("ramen-name").textContent);
       if (selectedRamen) {
           selectedRamen.rating = document.getElementById("edit-rating").value;
           selectedRamen.comment = document.getElementById("edit-comment").value;
           displayRamenDetails(selectedRamen);
       }
   });
}

function deleteRamen(id) {
   const index = ramens.findIndex(ramen => ramen.id === id);
   if (index !== -1) {
       ramens.splice(index, 1);
       displayRamens();
   }
}

function main() {
   displayRamens();
   addSubmitListener();
   addEditListener();
}