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

<img width="1280" alt="Screenshot 2025-05-25 at 4 25 51 PM" src="https://github.com/user-attachments/assets/2d1a8890-b8df-4b3f-92c9-745ec6275908" />


- Login Page
<img width="1280" alt="Screenshot 2025-05-25 at 4 25 03 PM" src="https://github.com/user-attachments/assets/35b0559d-e8a0-49ef-b9af-da4e2a634dcd" />



- Register Page
<img width="1280" alt="Screenshot 2025-05-25 at 4 25 17 PM" src="https://github.com/user-attachments/assets/da261b1a-1e00-4fca-bcf2-b00f76702111" />



- PostDetails Page
<img width="1280" alt="Screenshot 2025-05-25 at 4 26 25 PM" src="https://github.com/user-attachments/assets/993d1375-ee5c-461f-ba88-7a7b9783e93d" />



- Profile Page
<img width="1280" alt="Screenshot 2025-05-25 at 4 26 11 PM" src="https://github.com/user-attachments/assets/ee295836-a44d-49b9-a942-366ee8162b00" />


- CreatePost Page
<img width="1280" alt="Screenshot 2025-05-25 at 4 26 00 PM" src="https://github.com/user-attachments/assets/e1274e12-3840-4b88-9bb6-b2c1cde5ca3a" />



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
