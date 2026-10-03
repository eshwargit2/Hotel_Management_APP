# 🏨 Hotel Management System

A full-stack Hotel Management & Discovery Web Application built with **React (Vite)**, **Node.js (Express)**, and **PostgreSQL**. The platform provides complete hotel catalog management with rich filtering, geolocation mapping, image uploads, and full CRUD capabilities.

---

## 📸 Application Screenshots

### 1. Home Page & Hotel Catalog
> Browse hotel listings with real-time search, interactive filters, price ranges, and detailed cards.

![Home Page](./Documentation/samples/Home%20Page.png)

---

### 2. Add New Hotel
> Add hotel entries with custom images, pricing, ratings, descriptions, and geographical coordinates (latitude & longitude).

![Add Hotel Page](./Documentation/samples/Add%20Hotels%20%20Page.png)

---

### 3. Update Hotel Information
> Easily modify existing hotel details, update pricing, descriptions, and replace hotel imagery.

![Update Hotel Page](./Documentation/samples/Upadate%20Page.png)

---

### 4. Delete & Management Actions
> Seamlessly manage listings with instant confirmation and removal.

![Delete Hotel Page](./Documentation/samples/Delete%20page%20.png)

---

## 📂 Project Structure

```text
Hotel_Management_APP/
├── Backend/
│   ├── uploads/                  # Uploaded hotel images static directory
│   ├── node_modules/             # Backend dependencies
│   ├── .gitignore                # Backend git ignore rules
│   ├── package.json              # Express server dependencies & scripts
│   ├── package-lock.json
│   └── Server.js                 # Express server, PostgreSQL pool & API routes
│
├── Frontend/
│   ├── public/                   # Public static assets
│   ├── src/
│   │   ├── assets/               # Icons and UI images
│   │   ├── components/           # Reusable UI components
│   │   │   ├── Banner.jsx        # Hero banner component
│   │   │   ├── Filter.jsx        # Price & rating filter component
│   │   │   ├── Filter.css        # Filter styling
│   │   │   ├── Footer.jsx        # Footer component
│   │   │   ├── Footer.css        # Footer styling
│   │   │   ├── HotelCard.jsx     # Hotel card item component
│   │   │   ├── HotelCard.css     # Hotel card styling
│   │   │   ├── Hotellist.jsx     # Hotel list grid container
│   │   │   ├── Hotellist.css     # Hotel list styling
│   │   │   ├── Nav.jsx           # Top navigation bar
│   │   │   ├── Nav.css           # Navigation bar styling
│   │   │   └── index.css         # Component utility styles
│   │   ├── page/                 # Application views & pages
│   │   │   ├── AddHotel.jsx      # Add new hotel form & validation
│   │   │   ├── AddHotel.css      # Add hotel page styling
│   │   │   ├── UpdateHotel.jsx   # Edit existing hotel form
│   │   │   ├── UpdateHotel.css   # Edit hotel styling
│   │   │   ├── HotelMap.jsx      # Interactive map view component
│   │   │   ├── view.jsx          # Detailed hotel view modal
│   │   │   └── view.css          # View modal styling
│   │   ├── App.jsx               # Main application routing & state handler
│   │   ├── App.css               # Global application layout styles
│   │   ├── hotelsStore.js        # Local store & API sync helper
│   │   └── main.jsx              # React application entry point
│   ├── index.html                # Vite HTML template
│   ├── vite.config.js            # Vite configuration
│   ├── eslint.config.js          # ESLint configuration
│   └── package.json              # Frontend dependencies & scripts
│
├── Documentation/
│   └── samples/                  # UI showcase & sample screenshots
│       ├── Home Page.png
│       ├── Add Hotels  Page.png
│       ├── Upadate Page.png
│       └── Delete page .png
│
└── README.md                     # Project documentation
```

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React 19](https://react.dev/) with [Vite](https://vitejs.dev/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Styling**: Vanilla CSS (Modern CSS3, Flexbox, CSS Grid, Glassmorphism effects)
- **Metadata**: React Helmet / React Helmet Async

### Backend
- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **File Uploads**: [Multer](https://github.com/expressjs/multer) (Multi-part form handler)
- **CORS**: Cross-Origin Resource Sharing middleware
- **Dev Tooling**: [Nodemon](https://nodemon.io/)

### Database
- **Database Engine**: [PostgreSQL](https://www.postgresql.org/)
- **Client**: `pg` (node-postgres connection pooling)

---

## ✨ Key Features

- 🔍 **Dynamic Search & Filtering**: Filter hotels by title, price range, and minimum rating.
- 🗺️ **Geolocation & Map View**: View latitude/longitude coordinates and map representations for every hotel.
- 📸 **Multi-part Image Uploads**: Upload images securely via Multer with disk storage and sanitized filenames.
- 🔄 **Full CRUD Operations**:
  - **Create**: Add new hotels with complete information and imagery.
  - **Read**: Fetch and display the full list of hotels or individual hotel details.
  - **Update**: Edit existing hotel details and upload replacement photos.
  - **Delete**: Remove hotel listings from the database.
- 📱 **Responsive Design**: Optimized for desktops, tablets, and mobile screens.

---

## 🗄️ Database Schema

Run the following SQL statement in your PostgreSQL database (`hotel_management`):

```sql
CREATE DATABASE hotel_management;

\c hotel_management;

CREATE TABLE hotel_details (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    latitude NUMERIC NOT NULL,
    longitude NUMERIC NOT NULL,
    price NUMERIC NOT NULL,
    rating NUMERIC DEFAULT 8.0,
    description TEXT NOT NULL,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🚀 Getting Started & Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [PostgreSQL](https://www.postgresql.org/) installed and running locally

---

### 1. Backend Setup

1. Open your terminal and navigate to the backend directory:
   ```bash
   cd Backend
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Configure your PostgreSQL connection in `Backend/Server.js` (or via environment variables):
   ```javascript
   const pool = new Pool({
       user: "postgres",
       host: "localhost",
       database: "hotel_management",
       password: "YOUR_POSTGRES_PASSWORD",
       port: 5432
   });
   ```

4. Start the backend server:
   ```bash
   npm start
   ```
   > The server will start on **`http://localhost:5000`**.

---

### 2. Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd Frontend
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   > Open **`http://localhost:5173`** in your browser to view the application.

---

## 📡 API Endpoints

| Method | Endpoint | Description | Request Body / Params |
| :--- | :--- | :--- | :--- |
| **GET** | `/hotels` | Fetch all hotel listings | None |
| **POST** | `/hotels` | Add a new hotel | `multipart/form-data` (name, location, price, rating, description, latitude, longitude, `images`) |
| **PUT** | `/hotels/:id` | Update hotel by ID | `multipart/form-data` (hotel details + optional `images`) |
| **DELETE** | `/hotels/:id` | Delete hotel by ID | URL parameter `:id` |

---
