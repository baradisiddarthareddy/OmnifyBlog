# OmnifyBlogs  
## Full Stack Blog Application  

A full-stack blog application built using **React.js (Vite)** for the frontend and **Node.js + Express + MongoDB** for the backend.

---

# 🛠️ Steps to Run the Application Locally

---

## ✅ Step 1: Run Backend Server  

I. Open the root project directory in **VS Code**  

II. Open the terminal  

- a. Command to enter into the backend directory:  
  ```bash
  cd blog-app-backend
- b. Command to run the backend server:
  ```bash
  npm run dev
- c. You should see the message:
   Server running on http://localhost:5000  
   MongoDB connected

---

## ✅ Step 2: Run Frontend

I. Open another terminal to run the frontend

- a. Command to enter into the frontend directory:
  ```bash
  cd blog-app-frontend
- b. Command to run the frontend server:
  ```bash
  npm run dev
- c. Frontend will open at:
  http://localhost:5173/

---
🧾 Notes
- Make sure MongoDB is running locally using MongoDB Compass or use MongoDB Atlas for deployment.

- Set your environment variables in a .env file inside blog-app-backend:
- PORT=5000
- MONGO_URI=your_mongodb_uri
- JWT_SECRET=your_jwt_secret

-Ensure CORS is configured properly in your backend to allow requests from your frontend origin.

---

📦 Technologies Used
- Frontend: React.js (Vite)

- Backend: Node.js, Express.js

- Database: MongoDB Compass(for local) and MongoDB Atlas(for deployment)

- Authentication: JWT

- Deployment: Render.com, MongoDB Atlas

---
## Interface Snapshots for review

# Home page

![Home page](https://github.com/user-attachments/assets/a09f9db6-3a38-4a8c-abb4-d4378dce341c)

# User Dashboard

![User Dashboard](https://github.com/user-attachments/assets/0102a123-66fa-434f-a9b7-09bfb0b072e4)

# Production link after deployment

https://blog-frontend-97rz.onrender.com


  





     

    
