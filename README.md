# 🎵 Spotify Clone (Full Stack MERN Project)

A full-stack Spotify Clone built using React, Node.js, Express, and MongoDB.  
It includes a user music streaming frontend, an admin panel for managing songs/albums, and a REST API backend.

---

## 🚀 Live Links

🎧 Frontend (User App)  
https://spotify-m8np.vercel.app/

⚙️ Backend API  
https://spotify-tr43.onrender.com/

---

## 📁 Project Structure

spotify-clone/
│
├── Frontend/         # React + Vite user interface (Deployed on Vercel)
├── Backend/          # Node.js + Express API (Deployed on Render)
└── spotify-admin/    # Admin dashboard (local use only)

---

## ✨ Features

### 🎧 User App (Frontend)
- Play songs with custom player
- Browse albums and tracks
- Responsive UI (mobile + desktop)
- Smooth music controls (play, pause, skip)

### ⚙️ Admin Panel
- Add new songs
- Upload albums
- Manage music library

### 🔧 Backend API
- REST API built with Express
- MongoDB database integration
- Song & album management APIs
- File upload handling using Multer
- CORS-enabled API for frontend communication

---

## 🛠️ Tech Stack

Frontend:
- React.js
- Vite
- Tailwind CSS
- Axios

Backend:
- Node.js
- Express.js
- MongoDB + Mongoose
- Multer
- CORS
- dotenv

Deployment:
- Frontend → Vercel
- Backend → Render

---

## ⚙️ Installation & Setup

### 1. Clone repo
git clone https://github.com/your-username/spotify-clone.git
cd spotify-clone

---

### 2. Backend setup
cd Backend
npm install
npm start

Create .env file:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

---

### 3. Frontend setup
cd Frontend
npm install
npm run dev

---

### 4. Admin setup
cd spotify-admin
npm install
npm run dev

---

## 🌐 API Endpoints

Songs:
GET    /api/song/list
POST   /api/song/add

Albums:
GET    /api/album/list
POST   /api/album/add

---

## 🚀 Deployment Flow

Admin Panel → adds songs
        ↓
Backend API (Render)
        ↓
MongoDB Database
        ↓
Frontend (Vercel)

---

## ⚠️ Notes

- Backend must be running for frontend
- MongoDB Atlas required
- Admin panel is local only
- Add env variables in Render

---

## 👨‍💻 Author

Chetan Kalla

---

⭐ If you like this project, give it a star!
