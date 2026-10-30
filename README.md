# DineHub – Smart Restaurant & Food Ordering Platform

DineHub is a full-stack restaurant and food ordering project based on the provided project synopsis.

## Stack
- Frontend: HTML, CSS, Vanilla JavaScript
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT
- AI: integration placeholder for Gemini/OpenAI

## Run backend
1. Install Node.js and MongoDB.
2. Open terminal in `backend`.
3. Run `npm install`.
4. Copy `.env.example` to `.env` and set `MONGO_URI` and `JWT_SECRET`.
5. Run `node seed.js`.
6. Run `npm run dev`.

Admin login:
- Email: admin@dinehub.com
- Password: admin123

## Run frontend
Open `frontend/index.html` with VS Code Live Server (recommended).

The frontend currently contains demo food data so the UI can be viewed even before the backend is started. When backend is running, authentication and order/admin APIs connect to MongoDB.
