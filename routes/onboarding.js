const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

// Get onboarding tasks for an employee
router.get('/:employeeId/tasks', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.employeeId);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.json(employee.tasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Add new task to employee's onboarding
router.post('/:employeeId/tasks', async (req, res) => {
    try {
        const { title, description, dueDate } = req.body;
        const employee = await Employee.findById(req.params.employeeId);
        
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        employee.tasks.push({
            title,
            description,
            dueDate,
            status: 'pending'
        });

        await employee.save();
        res.status(201).json(employee.tasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Update task status
router.patch('/:employeeId/tasks/:taskId', async (req, res) => {
    try {
        const { status } = req.body;
        const employee = await Employee.findById(req.params.employeeId);
        
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        const task = employee.tasks.id(req.params.taskId);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        task.status = status;
        await employee.save();
        res.json(task);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get onboarding documents for an employee
router.get('/:employeeId/documents', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.employeeId);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.json(employee.documents);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Add new document to employee's onboarding
router.post('/:employeeId/documents', async (req, res) => {
    try {
        const { name, url } = req.body;
        const employee = await Employee.findById(req.params.employeeId);
        
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        employee.documents.push({
            name,
            url,
            uploadedAt: new Date(),
            status: 'pending'
        });

        await employee.save();
        res.status(201).json(employee.documents);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Update document status
router.patch('/:employeeId/documents/:documentId', async (req, res) => {
    try {
        const { status } = req.body;
        const employee = await Employee.findById(req.params.employeeId);
        
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        const document = employee.documents.id(req.params.documentId);
        if (!document) {
            return res.status(404).json({ message: 'Document not found' });
        }

        document.status = status;
        await employee.save();
        res.json(document);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router; 