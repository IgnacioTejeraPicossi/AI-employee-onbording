const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Employee = require('../models/Employee');

// Get all employees
router.get('/', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get single employee
router.get('/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.json(employee);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Create new employee
router.post('/', [
    body('firstName').notEmpty().trim(),
    body('lastName').notEmpty().trim(),
    body('email').isEmail().normalizeEmail(),
    body('position').notEmpty(),
    body('department').notEmpty(),
    body('startDate').isISO8601()
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Onboarding tasks template (English)
        const onboardingTasksTemplate = [
            {
                title: 'Employee review after 6 months',
                description: 'Schedule and conduct a review meeting after 6 months.',
                status: 'pending'
            },
            {
                title: 'Create competence plan',
                description: 'Develop a competence plan for the employee.',
                status: 'pending'
            },
            {
                title: 'Review internal systems',
                description: 'Go through Tripletex, Teams, CV-partner, and other relevant systems.',
                status: 'pending'
            },
            {
                title: 'Assign mentor and guesting in key projects',
                description: 'Assign a mentor and arrange guesting in central projects if needed.',
                status: 'pending'
            },
            {
                title: 'Create system accesses',
                description: 'Set up necessary system accesses for the employee.',
                status: 'pending'
            },
            {
                title: 'Order and deliver phone',
                description: 'Order and hand over a phone to the employee.',
                status: 'pending'
            },
            {
                title: 'Order and deliver PC/Mac',
                description: 'Order and hand over a PC or Mac to the employee.',
                status: 'pending'
            },
            {
                title: 'Order and deliver key card',
                description: 'Order and hand over a key card to the employee.',
                status: 'pending'
            }
        ];

        // Add tasks to the new employee
        const employeeData = { ...req.body, tasks: onboardingTasksTemplate };
        const employee = new Employee(employeeData);
        await employee.save();
        res.status(201).json(employee);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Update employee
router.put('/:id', async (req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.json(employee);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Delete employee
router.delete('/:id', async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.json({ message: 'Employee deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Update onboarding progress
router.patch('/:id/progress', async (req, res) => {
    try {
        const { progress } = req.body;
        const employee = await Employee.findByIdAndUpdate(
            req.params.id,
            { onboardingProgress: progress },
            { new: true }
        );
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.json(employee);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router; 