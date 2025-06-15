import { db } from './firebase-config.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const bunkListDiv = document.getElementById("bunkList");

// ✅ CURRENT FUNCTIONALITY – display bunk list
async function loadBunks() {
  const bunkRef = collection(db, "bunks");
  const querySnapshot = await getDocs(bunkRef);

  querySnapshot.forEach((doc) => {
    const data = doc.data();

    // 🚗 Text card view
    const bunkCard = document.createElement("div");
    bunkCard.className = "card";
    bunkCard.innerHTML = `
    <h3>${data.name}</h3>
    <p>${data.address}</p>
    <button onclick="bookSlot('${doc.id}')">Book Slot</button>
    `;

    bunkListDiv.appendChild(bunkCard);
  });
}

window.bookSlot = (id) => {
  localStorage.setItem("selectedBunk", id);
  window.location.href = "book-slot.html";
};

loadBunks();


// 🔁 LATER UPGRADE: Enable this function when  have Maps API key
/*
let map;

window.initMap = async function () {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 13.0827, lng: 80.2707 }, // Default Chennai
    zoom: 10,
  });

  const bunkRef = collection(db, "bunks");
  const querySnapshot = await getDocs(bunkRef);

  querySnapshot.forEach((doc) => {
    const data = doc.data();

    // 🧾 Text card
    const bunkCard = document.createElement("div");
    bunkCard.innerHTML = `
      <h3>${data.name}</h3>
      <p>${data.address}</p>
      <button onclick="bookSlot('${doc.id}')">Book Slot</button>
      <hr>
    `;
    bunkListDiv.appendChild(bunkCard);

    // 📍 Map marker
    if (data.lat && data.lng) {
      const marker = new google.maps.Marker({
        position: { lat: data.lat, lng: data.lng },
        map,
        title: data.name,
      });

      const info = new google.maps.InfoWindow({
        content: `<b>${data.name}</b><br>${data.address}`,
      });

      marker.addListener("click", () => info.open(map, marker));
    }
  });
};
*/

