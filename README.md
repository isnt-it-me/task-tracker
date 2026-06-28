# Task Tracker

A simple Task Tracker web application built using the MERN stack. It allows users to create, update, delete, and manage their daily tasks through a clean and responsive interface.

## Tech Stack

- React.js
- Node.js
- Express.js
- MongoDB Atlas
- Tailwind CSS

## Features

- Create Task
- View Tasks
- Update Task
- Delete Task
- Search Tasks
- Filter by Status and Priority
- Sort Tasks
- Light/Dark Theme
- Responsive Design

## Project Structure

```
task-tracker/
│
├── client/
├── server/
└── README.md
```

## Installation

### Clone the repository

```bash
git clone https://github.com/isnt-it-me/task-tracker.git
```

### Frontend

```bash
cd client
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
npm run dev
```

## Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
```

Create a `.env` file inside the `client` folder.

```env
VITE_API_URL=http://localhost:5000/api
```

## Live Demo

Frontend

https://task-tracker-iota-sage-98.vercel.app

Backend

https://task-tracker-api-ui58.onrender.com

## GitHub Repository

https://github.com/isnt-it-me/task-tracker