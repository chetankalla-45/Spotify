# Spotify Clone 🎵

A full-stack music streaming web application inspired by Spotify, built with the MERN stack. Users can browse albums and play songs, while admins can upload and manage music content through a dedicated admin panel.

## Live Demo

- **Frontend:** [https://spotify-m8np.vercel.app](https://spotify-m8np.vercel.app)
- **Backend API:** [https://spotify-tr43.onrender.com](https://spotify-tr43.onrender.com)

## Features

- 🎧 Browse and play songs by album
- 📀 Album-based music organization
- ⬆️ Admin panel to add/remove songs and albums
- ☁️ Media (audio + images) hosted on Cloudinary
- 🗄️ MongoDB database for songs and albums
- 🔊 Custom audio player with playback controls

## Tech Stack

**Frontend**
- React (Vite)
- Tailwind CSS / CSS
- Axios

**Admin Panel**
- React (Vite)
- Axios

**Backend**
- Node.js + Express
- MongoDB (Mongoose)
- Cloudinary (media storage)
- Multer (file uploads)
- CORS, dotenv

## Project Structure

```
spotify-clone/
├── frontend/       # User-facing music player
├── admin/          # Admin panel for managing songs & albums
└── backend/        # Express API + MongoDB + Cloudinary
```

## Getting Started

### Prerequisites
- Node.js (v16+)
- MongoDB Atlas account (or local MongoDB)
- Cloudinary account

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:
```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Run the server:
```bash
npm run server
```

### 3. Frontend Setup
```bash
cd frontend
npm install
```

Create a `.env` file in `frontend/`:
```env
VITE_BACKEND_URL=http://localhost:4000
```

Run the app:
```bash
npm run dev
```

### 4. Admin Panel Setup
```bash
cd admin
npm install
```

Create a `.env` file in `admin/`:
```env
VITE_BACKEND_URL=http://localhost:4000
```

Run the admin panel:
```bash
npm run dev
```

## API Endpoints

### Songs
| Method | Endpoint          | Description        |
|--------|-------------------|---------------------|
| POST   | `/api/song/add`    | Add a new song      |
| GET    | `/api/song/list`   | List all songs      |
| POST   | `/api/song/remove` | Remove a song       |

### Albums
| Method | Endpoint           | Description          |
|--------|---------------------|-----------------------|
| POST   | `/api/album/add`     | Add a new album       |
| GET    | `/api/album/list`    | List all albums       |
| POST   | `/api/album/remove`  | Remove an album       |

## Deployment

- **Frontend:** Deployed on [Vercel](https://vercel.com)
- **Backend:** Deployed on [Render](https://render.com)
- **Admin Panel:** Run locally (not publicly deployed)

## License

This project is for educational purposes.

## Acknowledgements

- Inspired by Spotify's UI/UX
- Built as a learning project using the MERN stack
