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

## Now includes a new section describing the latest "Onboarding Tasks" UI features:


The Onboarding Tasks panel in the client application now includes:
- A wide, modern table view of all onboarding tasks for the selected employee.
- Status chips for each task (e.g., pending, completed) with color coding.
- An **Add Task** button that opens a dialog to create a new task (Title, Description, Due Date).
- **Edit** and **Delete** actions for each task:
  - Edit opens a dialog pre-filled with the task's info for easy updating.
  - Delete opens a confirmation dialog before removing the task.
- Mark tasks as completed directly from the table.

These features make it easy to manage onboarding tasks visually and efficiently from the web interface.

## Default Onboarding Tasks Template

When a new employee is created, the application automatically assigns a standard set of onboarding tasks to them. This helps ensure a consistent onboarding process for all employees.

**The default onboarding tasks (in English) are:**

1. Employee review after 6 months – Schedule and conduct a review meeting after 6 months.
2. Create competence plan – Develop a competence plan for the employee.
3. Review internal systems – Go through Tripletex, Teams, CV-partner, and other relevant systems.
4. Assign mentor and guesting in key projects – Assign a mentor and arrange guesting in central projects if needed.
5. Create system accesses – Set up necessary system accesses for the employee.
6. Order and deliver phone – Order and hand over a phone to the employee.
7. Order and deliver PC/Mac – Order and hand over a PC or Mac to the employee.
8. Order and deliver key card – Order and hand over a key card to the employee.

These tasks are visible in the onboarding tasks panel for each employee and can be managed (marked as completed, edited, or deleted) through the web interface.

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