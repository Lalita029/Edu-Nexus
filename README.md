# 🎓 Edu-Nexus

Edu-Nexus is a full-stack Learning Management System (LMS) built using the MERN Stack. It provides a modern platform for students, teachers, and administrators to manage educational activities efficiently.

## 🌐 Live Demo

**Frontend:** https://edu-nexus-frontend.onrender.com

**Backend API:** https://edu-nexus-r2s2.onrender.com

---

# 📌 Features

### 👨‍🎓 Student
- Student Registration & Login
- Secure JWT Authentication
- View Dashboard
- Update Profile
- Participate in Quizzes
- Track XP, Levels, and Badges
- View Learning Progress

### 👩‍🏫 Teacher
- Teacher Login
- Manage Courses
- Manage Students
- View Student Performance
- Upload Learning Resources

### 👨‍💼 Admin
- Admin Dashboard
- Manage Students
- Manage Teachers
- Manage Courses
- User Management
- System Monitoring

---

# 🚀 Tech Stack

## Frontend
- React.js
- Vite
- React Router DOM
- Context API
- CSS3

## Backend
- Node.js
- Express.js

## Database
- MongoDB Atlas
- Mongoose

## Authentication
- JWT (JSON Web Token)

## Deployment
- Render (Frontend)
- Render (Backend)
- MongoDB Atlas

---

# 📂 Project Structure

```
Edu-Nexus
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── config
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── context
│   │   ├── pages
│   │   ├── styles
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── public
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/Lalita029/Edu-Nexus.git
```

```
cd Edu-Nexus
```

---

## Backend Setup

```
cd backend
npm install
```

Create a `.env` file

```env
PORT=5000
MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_SECRET_KEY
NODE_ENV=development
```

Run backend

```bash
npm run dev
```

---

## Frontend Setup

```
cd frontend
npm install
```

Create a `.env`

```env
VITE_API_URL=http://localhost:5000
```

Run frontend

```bash
npm run dev
```

---

# 🌍 Production Environment

Create `.env.production`

```env
VITE_API_URL=https://edu-nexus-r2s2.onrender.com
```

---

# 🔐 Authentication

- JWT Authentication
- Protected Routes
- Role-Based Access
- Persistent Login
- Secure API Authorization

---

# 📡 API Endpoints

## Authentication

```
POST /api/auth/login
POST /api/auth/register-student
GET  /api/auth/me
```

## Student

```
PUT /api/student/profile
GET /api/student/dashboard
```

## Teacher

```
GET /api/teacher/dashboard
```

## Admin

```
GET /api/admin/dashboard
```

---

# 📸 Screenshots

<img width="1918" height="972" alt="image" src="https://github.com/user-attachments/assets/b60ae82c-dff3-445f-8fc9-eecfc03060fc" />

<img width="1918" height="863" alt="image" src="https://github.com/user-attachments/assets/5a534ab3-89ee-4656-b44b-02bdf0d28cd9" />



---

# 🚀 Deployment

### Frontend

- Render Static Site

### Backend

- Render Web Service

### Database

- MongoDB Atlas

---

# 🔧 Future Improvements

- Email Verification
- Forgot Password
- Notifications
- Attendance Management
- Payment Integration
- AI-Based Learning Recommendations
- Mobile Responsive UI
- Dark Mode

---

# 👩‍💻 Author

**Lalita Bishnoi**

GitHub:
https://github.com/Lalita029

LinkedIn:
www.linkedin.com/in/lalitabishnoi92

---

