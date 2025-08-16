# 🎯 Lens Project Setup Guide

## 📋 Prerequisites

Before setting up the project, make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (comes with Node.js)
- **PostgreSQL** (for the backend database)
- **Git** (for version control)

## 🚀 Quick Start

### 1. Clone and Navigate to Project

```bash
cd Lens
```

### 2. Install Dependencies

#### Backend Dependencies

```bash
cd Backend
npm install
```

#### Frontend Dependencies

```bash
cd ../Frontend
npm install
```

### 3. Database Setup

#### Create PostgreSQL Database

1. Install PostgreSQL if you haven't already
2. Create a new database:

```sql
CREATE DATABASE lens_db;
```

#### Environment Configuration

Create a `.env` file in the `Backend` folder with the following content:

```env
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/lens_db"

# Application Configuration
APP_PORT=3011
NODE_ENV=development

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=24h

# Email Configuration (for password reset and notifications)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# CORS Configuration
CORS_ORIGIN=http://localhost:5173
```

**Important:** Replace the placeholder values with your actual database credentials and email settings.

#### Generate Prisma Client

```bash
cd Backend
npx prisma generate
```

#### Run Database Migrations

```bash
npx prisma migrate dev
```

### 4. Start the Applications

#### Start Backend (Development Mode)

```bash
cd Backend
npm run start:dev
```

The backend will run on: http://localhost:3011
API Documentation: http://localhost:3011/api/docs

#### Start Frontend (Development Mode)

```bash
cd Frontend
npm run dev
```

The frontend will run on: http://localhost:5173

## 📁 Project Structure

```
Lens/
├── Backend/                 # NestJS Backend
│   ├── src/
│   │   ├── auth/           # Authentication module
│   │   ├── booking/        # Booking management
│   │   ├── invoice/        # Invoice management
│   │   ├── mail/           # Email services
│   │   └── prisma/         # Database service
│   ├── prisma/
│   │   ├── schema.prisma   # Database schema
│   │   └── migrations/     # Database migrations
│   └── package.json
├── Frontend/               # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   └── main.jsx        # App entry point
│   └── package.json
└── README.md
```

## 🔧 Available Scripts

### Backend Scripts

```bash
npm run start          # Start in production mode
npm run start:dev      # Start in development mode with hot reload
npm run build          # Build the application
npm run test           # Run unit tests
npm run db:migrate     # Run database migrations
npm run db:generate    # Generate Prisma client
npm run db:studio      # Open Prisma Studio (database GUI)
```

### Frontend Scripts

```bash
npm run dev            # Start development server
npm run build          # Build for production
npm run preview        # Preview production build
npm run lint           # Run ESLint
```

## 🌐 API Endpoints

Once the backend is running, you can access:

- **API Documentation**: http://localhost:3011/api/docs
- **Health Check**: http://localhost:3011/
- **Bookings**: http://localhost:3011/booking
- **Invoices**: http://localhost:3011/invoice
- **Authentication**: http://localhost:3011/auth

## 🔐 Authentication

The application includes JWT-based authentication. Default test credentials:

- Email: `test@test.com`
- Password: `password123`

## 📧 Email Configuration

To enable email functionality (password reset, notifications), configure your SMTP settings in the `.env` file. For Gmail, you'll need to:

1. Enable 2-factor authentication
2. Generate an app password
3. Use the app password in the SMTP_PASS field

## 🐛 Troubleshooting

### Common Issues

1. **Port Already in Use**

   - Change the port in the `.env` file
   - Or kill the process using the port

2. **Database Connection Error**

   - Verify PostgreSQL is running
   - Check database credentials in `.env`
   - Ensure the database exists

3. **Prisma Errors**

   - Run `npx prisma generate` after schema changes
   - Run `npx prisma migrate dev` for new migrations

4. **CORS Errors**
   - Verify the CORS_ORIGIN in `.env` matches your frontend URL
   - Check that both frontend and backend are running

### Getting Help

- Check the console logs for error messages
- Verify all environment variables are set correctly
- Ensure all dependencies are installed

## 🚀 Deployment

### Backend Deployment

1. Set `NODE_ENV=production` in your environment
2. Run `npm run build`
3. Use `npm run start:prod` to start the production server

### Frontend Deployment

1. Run `npm run build`
2. Deploy the `dist` folder to your hosting service

## 📝 Notes

- The frontend is configured to connect to the backend at `http://localhost:3011`
- Make sure to update the API URL in production
- The database uses PostgreSQL with Prisma ORM
- Email functionality requires proper SMTP configuration

## 🎉 You're Ready!

Your Lens photography booking application should now be running with:

- Frontend: http://localhost:5173
- Backend: http://localhost:3011
- API Docs: http://localhost:3011/api/docs

Happy coding! 📸
