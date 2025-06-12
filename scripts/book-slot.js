import { db, auth } from './firebase-config.js';
import {
  collection, query, where, getDocs, addDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const bunkId = localStorage.getItem("selectedBunk");
const slotListDiv = document.getElementById("slotList");

// 🔥 Load slots from Firestore for selected bunk
async function loadAvailableSlots() {
  const q = query(collection(db, "slots"), where("bunkId", "==", bunkId));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    slotListDiv.innerHTML = "<p>No slots available for this bunk.</p>";
    return;
  }

  slotListDiv.innerHTML = "<h3>Available Slots:</h3>";

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const slotDiv = document.createElement("div");
    slotDiv.innerHTML = `
      <p>${data.time} <button onclick="bookSlot('${data.time}')">Book</button></p>
    `;
    slotListDiv.appendChild(slotDiv);
  });
}

window.bookSlot = async function (slotTime) {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        await addDoc(collection(db, "bookings"), {
          userId: user.uid,
          bunkId: bunkId,
          slotTime: slotTime,
          timestamp: new Date()
        });
        alert("Slot booked ✅");
        window.location.href = "user-dashboard.html";
      } catch (error) {
        alert("Error: " + error.message);
      }
    } else {
      alert("Login required");
      window.location.href = "login.html";
    }
  });
};

loadAvailableSlots(); // 🔄 Trigger on page load
