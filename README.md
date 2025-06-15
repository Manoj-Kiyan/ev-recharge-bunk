# ⚡ EV Recharge Bunk Management System

This is a full-stack EV Recharge Bunk Booking web app created as part of an internship at **Unified Mentor Pvt Ltd**.  
It uses **Firebase Authentication** and **Firestore** to manage users, roles (Admin/User), and bookings. Users can register, log in, search for EV recharge stations, and book available slots. Admins can add bunks and manage slots.

---

## 🔥 Features

- 🔐 User & Admin Login via Firebase Auth
- 🧭 Google Maps (Embed version)
- 🏪 Add EV Recharge Bunks
- ⏱️ Create and View Time Slots
- 📍 Search Bunks + Booking
- 📊 Role-based Dashboard Routing
- 🌐 Modern UI with responsive design

---

## 🛠 How to Run the Project

### 📌 Prerequisites
- A modern browser (Edge/Chrome)
- VS Code (recommended)
- Firebase project created and configured

### ✅ Steps

1. **Clone this repo:**

   ```bash
   git clone https://github.com/Manoj-Kiyan/ev-recharge-bunk.git
   cd ev-recharge-bunk
   ```

2. **Setup Firebase:**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a project
   - Enable **Authentication** and **Firestore**
   - Add a **web app** to get your Firebase config

3. **Add your Firebase config:**
   - Go to `scripts/firebase-config.js`
   - Paste your Firebase config:

   ```js
   const firebaseConfig = {
     apiKey: "YOUR_KEY",
     authDomain: "YOUR_DOMAIN",
     ...
   };
   ```

4. **Start the app:**
   - Open `index.html` or `login.html` in browser  
   - Or use **Live Server** in VS Code

---

## 📁 Folder Structure

```
ev-recharge-bunk/
├── admin-dashboard.html
├── book-slot.html
├── login.html
├── manage-bunks.html
├── manage-slots.html
├── register.html
├── search-bunks.html
├── user-dashboard.html
├── scripts/
│   ├── firebase-config.js
│   ├── login.js
│   ├── register.js
│   ├── search-bunks.js
│   ├── manage-bunks.js
│   ├── manage-slots.js
│   └── book-slot.js
├── styles/
│   └── style.css
└── README.md
```

---

## 🧰 Tech Stack

- HTML, CSS, JavaScript
- Firebase (Auth, Firestore)
- Google Maps (Embed)
- Git & GitHub

---

## 👨‍💻 Developed By

**Manoj Kiyan**  
💼 Internship Project @ Unified Mentor Pvt Ltd

---

## 📜 License

This project is open-source for educational and internship purposes.