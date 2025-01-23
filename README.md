# User Authentication System
## Project Overview
Node.js user authentication system using Express and PostgreSQL.
## Prerequisites
- Node.js
- PostgreSQL
- Postman(API platform)
## Setup Instructions
### 1. Clone the Repository
```
git clone <your-repository-url>
cd user-auth-system
```
### 2. Install Dependencies
```
npm install
```
### 3. Database Configuration
- Create a PostgreSQL database named `user_auth_db`
- Update database credentials to your own in `server.js`
### 4. Run the Application
```
node server.js
```
## API requests through Postman
### User Registration
- **URL:** [`/register`] (http://localhost:3000/api/auth/register)
- **Method:** POST
- **Payload:**
```json
{
  "username": "testuser",
  "email": "test@example.com",
  "password": "password123"
}
```
### User Login
- **URL:** [`/login`] (http://localhost:3000/api/auth/login)
- **Method:** POST
- **Payload:**
```json
{
  "email": "test@example.com",
  "password": "password123"
}
```
## Troubleshooting
- Ensure PostgreSQL is running
- Verify database connection parameters
- Check network ports are open
