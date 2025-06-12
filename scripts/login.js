import { auth, db } from './firebase-config.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Fetch user role from Firestore
    const userDocRef = doc(db, "users", user.uid);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      const role = userData.role;

      if (role === "admin") {
        window.location.href = "admin-dashboard.html";
      } else if (role === "user") {
        window.location.href = "user-dashboard.html";
      } else {
        alert("No role found. Please contact support.");
      }
    } else {
      alert("No user data found in Firestore.");
    }

  } catch (error) {
    alert("Login failed ❌ " + error.message);
  }
});
