# Lens Photography API

A comprehensive NestJS backend API for managing photography bookings and invoices with Swagger documentation.

## Features

### 📋 Booking Management
- Submit new booking requests
- Get all bookings with filtering
- Update booking status
- Email notifications for new bookings

### 🧾 Invoice Management
- Create, read, update, and delete invoices
- Invoice status tracking (DRAFT, SENT, PAID, CANCELLED, OVERDUE)
- Get invoice statistics and counts
- Filter invoices by status and email

### 📚 API Documentation
- Interactive Swagger UI documentation
- Comprehensive endpoint descriptions
- Request/response schemas

## Tech Stack

- **NestJS** - Node.js framework
- **Prisma** - Database ORM
- **PostgreSQL** - Database
- **Swagger** - API documentation
- **Gmail SMTP** - Email service

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Database Setup

You have two options for the database:

#### Option A: Local PostgreSQL
1. Install PostgreSQL locally
2. Create a database named `lens_database`
3. Update the `DATABASE_URL` in `.env` with your credentials:
```env
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/lens_database?schema=public"
```

#### Option B: Cloud Database (Recommended)
Use a cloud database service like:
- **Neon** (https://neon.tech)
- **Supabase** (https://supabase.com)
- **Railway** (https://railway.app)

Get your connection string and update the `DATABASE_URL` in `.env`.

### 3. Environment Variables

Update the `.env` file with your configuration:

```env
# Gmail Configuration
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
GMAIL_SENDER_EMAIL=your-email@gmail.com
RECIPIENT_EMAIL_2=recipient@gmail.com

# Database Configuration
DATABASE_URL="your-postgresql-connection-string"

# Application
APP_PORT=3011
```

### 4. Database Migration

Run the migration to create database tables:

```bash
npm run db:migrate
```

### 5. Generate Prisma Client

```bash
npm run db:generate
```

### 6. Start the Application

```bash
# Development mode
npm run start:dev

# Production mode
npm run start:prod
```

## API Documentation

Once the application is running, visit:
- **Swagger UI**: http://localhost:3011/api/docs
- **Application**: http://localhost:3011

## Available Scripts

### Development
- `npm run start:dev` - Start in development mode with hot reload
- `npm run start:debug` - Start in debug mode

### Database
- `npm run db:migrate` - Run database migrations
- `npm run db:generate` - Generate Prisma client
- `npm run db:studio` - Open Prisma Studio (database GUI)
- `npm run db:reset` - Reset database (development only)
- `npm run db:push` - Push schema changes without migrations

### Build & Test
- `npm run build` - Build the application
- `npm run test` - Run unit tests
- `npm run test:e2e` - Run end-to-end tests

## API Endpoints

### Bookings
- `POST /booking/submit` - Submit a new booking request
- `GET /booking/all` - Get all bookings
- `GET /booking/:id` - Get booking by ID
- `PATCH /booking/:id/status` - Update booking status

### Invoices
- `POST /invoices` - Create a new invoice
- `GET /invoices` - Get all invoices (with optional filtering)
- `GET /invoices/count` - Get total invoice count
- `GET /invoices/statistics` - Get invoice statistics
- `GET /invoices/:id` - Get invoice by ID
- `PATCH /invoices/:id` - Update invoice
- `PATCH /invoices/:id/status` - Update invoice status
- `DELETE /invoices/:id` - Delete invoice

## Database Schema

### Booking Model
```prisma
model Booking {
  id           String   @id @default(cuid())
  name         String
  phone        String?
  email        String
  location     String
  proposedDate String
  budget       String?
  hearAbout    String?
  eventType    String[]
  message      String
  status       BookingStatus @default(PENDING)
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
}
```

### Invoice Model
```prisma
model Invoice {
  id        String   @id @default(cuid())
  email     String
  eventType String
  amount    Decimal  @db.Decimal(10, 2)
  duration  String
  date      DateTime
  location  String
  status    InvoiceStatus @default(DRAFT)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## Status Enums

### BookingStatus
- `PENDING` - Initial status for new bookings
- `CONFIRMED` - Booking has been confirmed
- `CANCELLED` - Booking has been cancelled
- `COMPLETED` - Event has been completed

### InvoiceStatus
- `DRAFT` - Invoice is being prepared
- `SENT` - Invoice has been sent to client
- `PAID` - Invoice has been paid
- `CANCELLED` - Invoice has been cancelled
- `OVERDUE` - Invoice payment is overdue

## Development Notes

### Email Configuration
The application uses Gmail SMTP for sending booking notifications. Make sure to:
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password for the application
3. Use the App Password in the `GMAIL_APP_PASSWORD` environment variable

### Database Migrations
Always run migrations when the schema changes:
```bash
npm run db:migrate
```

### Swagger Documentation
The Swagger UI provides interactive documentation and allows you to test endpoints directly from the browser.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests
5. Submit a pull request

## License

This project is licensed under the MIT License.
