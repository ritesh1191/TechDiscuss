# TechDiscuss - Technical Discussion Platform

TechDiscuss is a full-stack MERN application designed for technical discussions and knowledge sharing. It provides a platform where users can create, share, and discuss technical content through posts and comments.

Live Site: https://tech-discuss-frontend.onrender.com

## 🌟 Features

### User Authentication
- Secure user registration and login system
- JWT-based authentication
- Protected routes for authenticated users
- Persistent login using HTTP-only cookies

### Posts Management
- Create, read, update, and delete posts
- Rich text content support
- Image upload functionality
- Categorize posts with tags
- Search posts by title or content

### Interactive Features
- Comment on posts
- User profiles with post history
- Real-time updates
- Responsive design for all devices

### User Experience
- Modern and intuitive interface
- Dark/Light mode support
- Fast loading times
- Cross-browser compatibility


##  📸 Photo Gallery

### Register Page
<img width="1280" alt="Screenshot 2025-07-02 at 10 23 21 PM" src="https://github.com/user-attachments/assets/118f3134-4b36-46bd-861d-53f46fa1aae7" />

### Login Page
<img width="1280" alt="Screenshot 2025-07-02 at 10 23 12 PM" src="https://github.com/user-attachments/assets/1b873910-d73d-4860-b396-bbd90bd014fc" />

### Home Page
<img width="1280" alt="Screenshot 2025-07-02 at 10 23 39 PM" src="https://github.com/user-attachments/assets/1215bed2-64ab-4ccd-865f-283b88116421" />

### Post Details page
<img width="1144" alt="Screenshot 2025-07-02 at 10 24 17 PM" src="https://github.com/user-attachments/assets/db3df465-01c1-4e74-b462-ee8900a237ba" />

### Create Post page
<img width="1280" alt="Screenshot 2025-07-02 at 10 24 45 PM" src="https://github.com/user-attachments/assets/f3fc72d9-cc01-4280-a3ac-aea5312923fc" />

### Update Post Page
<img width="1280" alt="Screenshot 2025-07-02 at 10 27 45 PM" src="https://github.com/user-attachments/assets/3c547710-2d2d-4645-8e97-8d37eb76395b" />

### Profile Page
<img width="1137" alt="Screenshot 2025-07-02 at 10 24 59 PM" src="https://github.com/user-attachments/assets/5e3e48c5-8317-4dc6-bd7a-967f0454ba2b" />


## 🛠️ Technologies Used

### Frontend
- React.js
- Tailwind CSS for styling
- Axios for API requests
- React Router for navigation
- Context API for state management
- Vite as build tool

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Multer for file uploads
- bcrypt for password hashing

### Deployment
- Render for hosting
- MongoDB Atlas for database
- Environment variables for configuration

## 🚀 Usage

### As a User
1. Visit the application URL
2. Register for a new account or login
3. Browse existing posts on the home page
4. Create new posts using the "Create Post" button
5. Comment on posts to engage in discussions
6. Edit or delete your own posts and comments
7. Search for specific topics using the search bar
8. View and edit your profile

### For Developers

#### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Git

#### Local Setup
1. Clone the repository
```bash
git clone https://github.com/yourusername/TechDiscuss.git
cd TechDiscuss
```

2. Install dependencies
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Environment Variables

Backend (.env):
```
MONGO_URL=your_mongodb_connection_string
SECRET=your_jwt_secret_key
PORT=5001
```

Frontend (.env):
```
VITE_API_URL=http://localhost:5001
```

4. Start the application
```bash
# Start backend (from backend directory)
npm start

# Start frontend (from frontend directory)
npm run dev
```

5. Access the application
- Frontend: http://localhost:5173
- Backend: http://localhost:5001

## 📝 API Endpoints

### Authentication
- POST /api/auth/register - Register new user
- POST /api/auth/login - User login
- GET /api/auth/logout - User logout
- GET /api/auth/refetch - Refetch user data

### Posts
- GET /api/posts - Get all posts
- GET /api/posts/:id - Get single post
- POST /api/posts - Create new post
- PUT /api/posts/:id - Update post
- DELETE /api/posts/:id - Delete post

### Comments
- GET /api/comments/:postId - Get post comments
- POST /api/comments - Create comment
- DELETE /api/comments/:id - Delete comment

### Users
- GET /api/users/:id - Get user profile
- PUT /api/users/:id - Update user profile

## 🔐 Security Features
- Password hashing using bcrypt
- HTTP-only cookies for JWT
- CORS protection
- Input validation and sanitization
- Protected API endpoints
- Secure file upload handling

## 🎯 Future Enhancements
- Real-time notifications
- Social media sharing
- Advanced text editor
- User following system
- Email verification
- Password recovery

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.



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

