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
<img width="1280" alt="Screenshot 2025-05-25 at 1 48 10 PM" src="https://github.com/user-attachments/assets/96c66f3f-a29b-4464-a0d6-61a54b9c1062" />



- Login Page

<img width="1280" alt="Screenshot 2025-05-25 at 1 48 24 PM" src="https://github.com/user-attachments/assets/e51b0462-ab5b-4206-8f98-ac618d31c6fa" />


- Register Page

<img width="1280" alt="Screenshot 2025-05-25 at 1 48 33 PM" src="https://github.com/user-attachments/assets/f8f39481-114a-47b7-a673-9b8da7a4423d" />


- Create Post Page
<img width="1280" alt="Screenshot 2025-05-25 at 1 49 05 PM" src="https://github.com/user-attachments/assets/696e6266-92ae-410f-8dbf-dbc31726e0a5" />


- PostDetails Page

<img width="1280" alt="Screenshot 2025-05-25 at 1 49 44 PM" src="https://github.com/user-attachments/assets/deacd2e6-e2a9-40e5-9e76-75e9de9065af" />

  

- Profile Page
<img width="1280" alt="Screenshot 2025-05-25 at 1 49 19 PM" src="https://github.com/user-attachments/assets/26b67eef-04da-4da5-a2cb-938bb8266fce" />

  



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
