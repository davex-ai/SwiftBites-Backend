# 🍨 SwiftBites — Backend API  
**Secure • Scalable • Modern Node.js + Express API**

<p align="center">
  <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Backend-Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img src="https://img.shields.io/badge/Auth-JWT-black?style=for-the-badge&logo=jsonwebtokens"/>
  <img src="https://img.shields.io/badge/Deployed%20On-Render-pink?style=for-the-badge&logo=render&logoColor=white"/>
</p>

---

## 🚀 Overview  
SwiftBites Backend is a production-ready **REST API** powering the SwiftBites eCommerce experience.  
Built with **Express**, **MongoDB**, and **JWT Authentication**, this API handles:

- 🔐 User registration, login, and Google OAuth
- 📦 Full product catalog with categories (Fruits, Snacks, Dairy, etc.)
- 🛒 User-managed shopping cart
- ❤️ Wishlist support
- ⭐ Product reviews & ratings
- 📡 Fully deployable to Render with zero config

Built for developers who want a clean, modern, and extendable e-commerce foundation.

#### [🌐 Live API Endpoint](https://swiftbites-backend-cwmy.onrender.com/api)

## 📁 Project Structure
```cs
SwiftBites-Backend/
├── model/            # Mongoose schemas (User, Product)
├── route/            # Express routers (product, user, cart)
├── controller/       # Business logic handlers
├── middleware/       # Auth middleware (JWT protection)
├── utils/            # DB connection, CRUD helpers
├── uploads/          # Product image uploads
├── scripts/          # DB seeding & utilities
├── server.js         # Entry point
└── .env              # Environment variables (not tracked)
```

## 🛠️ Tech Stack
- Runtime: Node.js + ES Modules
- Framework: Express.js
- Database: MongoDB (via Mongoose)
- Auth: JWT + Google OAuth
- File Uploads: Local storage (/uploads)
- Deployment: Render (auto HTTPS, free tier)
- Dev Tools: Nodemon, ESLint, dotenv

## 🚦 Quick Start

#### 1. Clone the repo

```bash
git clone https://github.com/davex-ai/SwiftBites-Backend.git
cd SwiftBites-Backend
```
#### 2. Install dependencies
```bash
npm install
```

#### 3. Set up .env file
Create a .env file in the root:

```bash
MONGO_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/swiftbites
JWT_SECRET=your_strong_jwt_secret_here
PORT=5000
```
#### 4. Seed the database (optional)

```bash
node scripts/seed.js
```
#### 5. Run the server
```bash
npm start
# or
npm run dev  # with nodemon
```
Your API will be running at http://localhost:5000

#### 🔌 API Endpoints
🔑 Authentication

```bash
POST
/api/register
Register new user
POST
/api/login
Login with email/password
POST
/api/google-login
Login with Google
GET
/api/profile
Get user profile (protected)
PUT
/api/profile
Update profile (protected)
```
Deployment (Render)
Push to GitHub
Go to Render Dashboard
Create Web Service → connect repo
Set environment variables (MONGO_URI, JWT_SECRET, PORT)
Deploy!
Render will auto-restart on push and serve /uploads statically.

📝 License
MIT © Daveora

Made with ❤️ for modern e-commerce developers by [Daveora](https://github.com/davex-ai).

🚀 Ready to integrate with your React, Next.js, or mobile frontend!

