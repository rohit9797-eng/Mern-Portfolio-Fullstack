Fullstack portfolio (frontend + backend) with MongoDB storage.

Frontend: Vite + React + Tailwind (Tailwind v3 config provided)
Backend: Express + Mongoose with endpoints to store and retrieve contacts.

Setup:
1) Frontend
   cd frontend
   npm install
   npm run dev

2) Backend
   cd backend
   npm install
   copy .env.example .env
   edit .env and set MONGO_URI
   npm run dev

API endpoints:
POST /api/contact
GET /api/contacts
GET /api/contact/:id
PUT /api/contact/:id
DELETE /api/contact/:id
