import { db } from './firebase-config.js';
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const form = document.getElementById("bunkForm");
const bunksList = document.getElementById("bunksList");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const location = document.getElementById("location").value;
  const address = document.getElementById("address").value;

  try {
    await addDoc(collection(db, "bunks"), {
      name,
      location,
      address
    });
    alert("Bunk added successfully ✅");
    form.reset();
    loadBunks(); // refresh bunk list
  } catch (error) {
    alert("Error adding bunk ❌ " + error.message);
  }
});

async function loadBunks() {
  bunksList.innerHTML = "";
  const querySnapshot = await getDocs(collection(db, "bunks"));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const bunkDiv = document.createElement("div");

    // 🧱 Professional card style
    bunkDiv.className = "card";
    bunkDiv.innerHTML = `
      <h3>${data.name}</h3>
      <p><strong>Location:</strong> ${data.location}</p>
      <p><strong>Address:</strong> ${data.address}</p>
    `;
    bunksList.appendChild(bunkDiv);
  });
}

loadBunks();
