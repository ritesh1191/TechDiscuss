# TechDiscuss-Application

TechDiscuss is a technical discussion forum application that allows users to post and comment on technical content. It is built using React, Node.js, Express.js, MongoDB, and Tailwind CSS, with secure user authentication provided by JWT and the Bcrypt library.

## Features

- Post and share technical content.
- Comment on posts to engage in discussions.
- Search a post for faster accesss.
- Secure user authentication and data protection using JWT and Bcrypt.
- Responsive Modern and Aesthetic design for optimal user experience on any device.

## Technologies Used

- React: Building the front-end interface.
- Node.js: Running the server.
- Express.js: Handling API requests.
- MongoDB: Storing user and forum data.
- Tailwind CSS: Styling the application.
- JWT (JSON Web Token): Providing secure authentication.
- Bcrypt: Hashing passwords for security.

## Usage

1. Open the TechDiscuss Forum Application Home Page.
2. Register a new account or log in with existing credentials.
3. Browse, post, and comment on technical content.
4. Enjoy secure and responsive interactions within the forum.

## Photos

- HomePage

<img width="1280" alt="Screenshot 2025-05-24 at 9 28 47 PM" src="https://github.com/user-attachments/assets/4702f591-be73-4a78-a406-a5ffad2d372e" />

- Login Page

<img width="1280" alt="Screenshot 2025-05-24 at 9 30 30 PM" src="https://github.com/user-attachments/assets/31c6b9ed-9bf0-4b7c-9b6a-94814e93bb55" />

- Register Page

<img width="1280" alt="Screenshot 2025-05-24 at 9 30 42 PM" src="https://github.com/user-attachments/assets/ce752d1b-e23b-4ea2-9cf9-460e16353bca" />

- PostDetails Page

  <img width="1280" alt="Screenshot 2025-05-24 at 9 32 24 PM" src="https://github.com/user-attachments/assets/e5995f97-fb70-4397-8ce4-b38fb1925eb9" />

- Profile Page
  <img width="1280" alt="Profile" src="https://github.com/user-attachments/assets/d820185c-a3d1-4fcf-8608-9381fc683cf4" />

- CreatePost Page

<img width="1280" alt="Create Post" src="https://github.com/user-attachments/assets/715840ed-02ea-4388-bfe9-80dc86afe5c0" />

## Run Locally

Clone the project

```bash
  git clone https://github.com/YOUR-USERNAME/TechDiscuss.git
```

Go to the project directory

```bash
  cd TechDiscuss
```

Install dependencies

```bash
  cd frontend
  npm install
```

```bash
  cd backend
  npm install
```

Start Application

Backend:

```bash
  cd backend
  node index.js
```

Frontend:

```bash
  cd frontend
  npm run dev
```

# Before Running Project add a .env File in backend folder.

# env file structure:

- PORT=ANY_PORT_NO
- MONGO_URL=YOUR_MONGO_URL
- SECRET=ANY_SECRET_KEY
