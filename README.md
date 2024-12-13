# Bekreta: Multi-Vendor E-Commerce Platform

## Project Description

Bekreta is a dynamic and scalable multi-vendor e-commerce platform designed to cater to both vendors and customers. Vendors can seamlessly register, manage their products, and monitor sales, while customers enjoy a smooth shopping experience with intuitive browsing, searching, and purchasing features. This platform offers an all-in-one solution for building a thriving online marketplace, ensuring robust integration of multiple vendors, secure transactions, and an exceptional user experience.

---

## Admin Credentials

To log in as an admin, use the following credentials:

- **Email**: `admin@gmail.com`
- **Password**: `password`

```json
{
  "email": "admin@gmail.com",
  "password": "password"
}
```

## Live URLs

- **Frontend**: [Frontend Live URL](https://test-bekreta.vercel.app)
- **Backend**: [Backend API Live URL](https://test-assign-bekreta-server.vercel.app)

---

## Technology Stack & Packages

### Frontend

- **Framework**: Next.js
- **State Management**: Redux Toolkit
- **UI Library**: Material-UI (MUI)
- **Styling**: Tailwind CSS
- **Form Validation**: React Hook Form, Zod
- **Routing**: Next.js Routing

### Backend

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose for ODM)
- **Authentication**: JSON Web Tokens (JWT)
- **Email Service**: Nodemailer
- **Validation**: Joi
- **Error Handling**: Custom Middleware

### DevOps & Deployment

- **Frontend Hosting**: Vercel
- **Backend Hosting**: AWS EC2
- **Database Hosting**: MongoDB Atlas
- **Version Control**: Git, GitHub

### Key Packages

- Axios
- bcryptjs
- dotenv
- cors
- multer
- nodemailer
- mongoose-paginate-v2

---

## Setup Instructions

### Prerequisites

1. **Node.js**: Ensure Node.js is installed (v16 or higher).
2. **MongoDB**: Use MongoDB Atlas or a local MongoDB instance.

### Installation

#### Clone the Repository

```bash
# Clone the repository
git clone https://github.com/jayed-islam/phl2-final-assignment9-multivendor-ecom-bekreta-frontend
cd phl2-final-assignment9-multivendor-ecom-bekreta-frontend
```

#### Install Dependencies

**Frontend**:

```bash
cd frontend
npm install
```

**Backend**:

```bash
cd backend
npm install
```

### Environment Variables

Create `.env` files in both `frontend` and `backend` directories:

**Frontend `.env.local`**:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Running the Application

#### Start Backend

```bash
cd backend
npm run dev
```

#### Start Frontend

```bash
cd frontend
npm run dev
```

Visit `https://test-bekreta.vercel.app` for the frontend and `https://test-assign-bekreta-server.vercel.app` for the backend.

---

## Key Features & Functionality

### Vendor Features

- Vendor Registration and Login
- Dashboard for managing products
- View order statistics

### Customer Features

- User-friendly product browsing and search
- Cart management and checkout
- Order tracking
- Responsive design for all devices

### Admin Features

- Manage vendors and customers
- View overall platform analytics
- Resolve disputes

---

## Known Issues/Bugs

- Email verification delays under high server load.
- Product images not rendering correctly on slower networks.
- Search functionality may not handle complex queries efficiently.

---

## Professional Formatting

The project adheres to best practices for structure, coding standards, and readability. Each feature is modularized and well-documented to ensure ease of maintenance and scalability.

For any questions or contributions, feel free to open an issue or submit a pull request on GitHub.

---

### Contact

If you have any questions, feel free to reach out:

- Email: jayedbgh@example.com
- GitHub: [jayed-islam](https://github.com/jayed-islam)
