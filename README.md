# Employee Onboarding Application

A Node.js application for managing employee onboarding processes. This application provides a RESTful API for handling employee information, onboarding tasks, and document management.

## Features

- User authentication and authorization
- Employee profile management
- Onboarding task tracking
- Document management
- Progress tracking
- Role-based access control

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd employee-onboarding
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
MONGODB_URI=mongodb://localhost:27017/employee-onboarding
JWT_SECRET=your-secret-key
PORT=5000
```

4. Start the server:
```bash
# Development mode
npm run dev

# Production mode
npm start
```

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - Login user

### Employees
- GET `/api/employees` - Get all employees
- GET `/api/employees/:id` - Get single employee
- POST `/api/employees` - Create new employee
- PUT `/api/employees/:id` - Update employee
- DELETE `/api/employees/:id` - Delete employee
- PATCH `/api/employees/:id/progress` - Update onboarding progress

### Onboarding
- GET `/api/onboarding/:employeeId/tasks` - Get employee tasks
- POST `/api/onboarding/:employeeId/tasks` - Add new task
- PATCH `/api/onboarding/:employeeId/tasks/:taskId` - Update task status
- GET `/api/onboarding/:employeeId/documents` - Get employee documents
- POST `/api/onboarding/:employeeId/documents` - Add new document
- PATCH `/api/onboarding/:employeeId/documents/:documentId` - Update document status

## Security

- All routes except login and register are protected with JWT authentication
- Passwords are hashed using bcrypt
- Input validation using express-validator
- Role-based access control

## Error Handling

The application includes comprehensive error handling for:
- Invalid input
- Authentication errors
- Database errors
- Not found resources

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License. 