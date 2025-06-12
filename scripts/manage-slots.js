import { db } from './firebase-config.js';
import {
  collection, getDocs, addDoc,
  query, where
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const bunkSelect = document.getElementById("bunkSelect");
const slotForm = document.getElementById("slotForm");
const slotList = document.getElementById("slotList");
let selectedBunkId = null;

// Load all bunks into dropdown
async function loadBunks() {
  const snapshot = await getDocs(collection(db, "bunks"));
  snapshot.forEach(doc => {
    const option = document.createElement("option");
    option.value = doc.id;
    option.textContent = doc.data().name;
    bunkSelect.appendChild(option);
  });
}

bunkSelect.addEventListener("change", () => {
  selectedBunkId = bunkSelect.value;
  if (selectedBunkId) {
    loadSlots(selectedBunkId);
  } else {
    slotList.innerHTML = "";
  }
});

slotForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const slotTime = document.getElementById("slotTime").value;

  if (!selectedBunkId) {
    alert("Please select a bunk first.");
    return;
  }

  try {
    await addDoc(collection(db, "slots"), {
      bunkId: selectedBunkId,
      time: slotTime
    });
    alert("Slot added ✅");
    slotForm.reset();
    loadSlots(selectedBunkId);
  } catch (err) {
    alert("Error: " + err.message);
  }
});

// Show existing slots with styling
async function loadSlots(bunkId) {
  slotList.innerHTML = "<h3>Existing Slots:</h3>";
  const q = query(collection(db, "slots"), where("bunkId", "==", bunkId));
  const snapshot = await getDocs(q);

  snapshot.forEach(doc => {
    const slot = doc.data();
    const div = document.createElement("div");
    div.className = "card"; // 🧱 Add styling
    div.innerHTML = `<p><strong>Time:</strong> ${slot.time}</p>`;
    slotList.appendChild(div);
  });
}

loadBunks();
