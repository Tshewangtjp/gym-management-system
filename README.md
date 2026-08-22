# Gym Management System

## Project Title

Gym Management System

## Team Members

* Student 1: Pema Tshewang Norbu
* Student 2: Sonam Yangchen
* Student 3: Dhan Maya
* Student 4: Yann 

## Project Domain

Health and Fitness

## Project Description

The Gym Management System is a web-based application developed using the MERN Stack. The system is designed to digitize and simplify daily gym operations by providing a centralized platform for managing members, trainers, membership plans, attendance, payments, and reports.

The application will provide role-based access for administrators, trainers, and members. Administrators will be able to manage gym members, trainers, membership plans, payments, and reports. Trainers will be able to view assigned members and manage attendance, while members will be able to view their membership information, attendance history, payment details, and profile.

The system aims to reduce manual record keeping, improve membership management, maintain accurate attendance and payment records, and provide an efficient platform for gym administration.

## Technology Stack

### Frontend

* React.js
* HTML5
* CSS3
* JavaScript
* Axios

### Backend

* Node.js
* Express.js
* RESTful API

### Database

* MongoDB
* Mongoose

### Authentication

* JSON Web Token (JWT)
* Password Hashing

### Development Tools

* Visual Studio Code
* Git
* GitHub
* Google Chrome / Microsoft Edge

## Project Structure

```text
Gym-Management-System/
│
├── client/
│   └── React frontend
│
├── server/
│   └── Node.js + Express backend
│
├── docs/
│   └── Project documentation
│
├── README.md
│
└── .gitignore
```

## Main Modules

The planned system will contain the following modules:

1. User Management
2. Member Management
3. Trainer Management
4. Membership Plan Management
5. Attendance Management
6. Payment Management
7. Dashboard and Reports

## User Roles

### Administrator

* Manage members
* Manage trainers
* Manage membership plans
* Manage payments
* View reports
* Manage users

### Trainer

* View assigned members
* Record attendance
* View member information
* Manage personal profile

### Member

* View membership details
* View attendance history
* View payment history
* Manage personal profile

## Project Status

**Sprint 1 — Project Foundation & Development Environment Setup**

The initial project workspace, Git repository, GitHub repository, and documentation are being prepared.

## Future Development

Future sprints will implement:

* React frontend
* Express.js backend
* MongoDB database
* JWT authentication
* Role-based authorization
* Member CRUD operations
* Trainer management
* Membership plans
* Attendance management
* Payment management
* Dashboard and reports
=======
# gym-management-system
MERN Stack Gym Management SystemS
# Gym Management System – Sprint 4 Setup

## Project Structure

The project uses a separate React frontend and Node.js/Express backend.

```text
Gym-Management-System/
├── client/
├── server/
└── docs/
```

## Requirements

* Node.js
* npm
* Git
* GitHub
* MongoDB Community Server or MongoDB Atlas
* Visual Studio Code
* Google Chrome or Microsoft Edge

## Frontend Setup

Open a terminal:

```bash
cd client
npm install
```

Start the React development server:

```bash
npm run dev
```

Frontend:

```text
http://localhost:5173
```

## Backend Setup

Open another terminal:

```bash
cd server
npm install
```

Start the development server:

```bash
npm run dev
```

Backend:

```text
http://localhost:5000
```

Health check:

```text
http://localhost:5000/api/health
```

## Frontend Dependencies

* React
* React Router DOM
* Axios
* Vite

## Backend Dependencies

* Express
* CORS
* Dotenv
* Nodemon

## Current Sprint

**Sprint 4 – Project Scaffolding & Development Environment Initialization**

At the completion of Sprint 4, the project contains a working React frontend, a working Express backend, organized project folders, required development dependencies, and separate frontend/backend development servers.

## Next Development Phase

Future sprints will implement the Gym Management System requirements defined during Sprint 2 and designed during Sprint 3, including:

* Authentication
* Member Management
* Trainer Management
* Membership Plans
* Attendance
* Payments
* Dashboard
* Reports
* MongoDB integration
