# Car Price API

A robust RESTful API built with NestJS for retrieving and managing car pricing information. This API provides comprehensive endpoints for user authentication and car valuation.

## 🚗 Features

- **Car Valuation**: Get estimated market prices for vehicles based on make, model, year, and mileage
- **Search & Filter**: Advanced search capabilities with multiple filtering options
- **Authentication**: Secure API access with sessions
- **Validation**: Comprehensive input validation and error handling

## 🛠️ Technology Stack

- **Framework**: NestJS (Node.js)
- **Language**: TypeScript
- **Database**: Sqlite
- **Validation**: class-validator
- **Testing**: Jest

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v16 or higher)
- npm
- sqlite

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/nadiia-dev/car-price-api.git
cd car-price-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
# Database
DB_NAME= your_sqliet_db_name

# API Settings
NODE_ENV=development

#Cookie settings
COOKIE_KEY= your_cookie_key
```

### 4. Database Setup

```bash
# Run database migrations
npm run migration:run
```

### 5. Start the application

```bash
# Development mode
npm run start:dev

# Production mode
npm run start:prod
```

The API will be available at `http://localhost:3000`
