# Beauty Parlor MERN Stack Project

## Installation & Setup

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd Beauty_Parlor
```

### 2. Install Dependencies

#### Frontend
```bash
cd frontend
npm install
```

#### Backend
```bash
cd ../backend
npm install
```

### 3. Environment Variables
- Create a `.env` file in the `backend` folder with your MongoDB URI and desired PORT (default: 5001):
```
MONGO_URI=your_mongodb_connection_string
PORT=5001
```

### 4. Seed Initial Data (Optional)
```bash
node seed.js
```

## Running the Application

### Start the Backend Server
```bash
cd backend
node server.js
```

### Start the Frontend Development Server
```bash
cd frontend
npm start
```

- Frontend will be available at [http://localhost:3000/](http://localhost:3000/)
- Backend API will run at [http://localhost:5001/](http://localhost:5001/)

## Additional Notes
- Ensure MongoDB is running and accessible.
- For production, configure HTTPS and environment variables securely.
- For any issues, check logs in both frontend and backend terminals.