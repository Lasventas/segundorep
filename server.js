const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let employees = [
    { id: 1, name: 'John Doe', department: 'HR', salary: 50000 },
    { id: 2, name: 'Jane Smith', department: 'Finance', salary: 60000 }
];

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/api/employees', (req, res) => {
    res.json(employees);
});

app.post('/api/employees', (req, res) => {
    const newEmployee = {
        id: employees.length + 1,
        name: req.body.name,
        department: req.body.department,
        salary: req.body.salary
    };
    employees.push(newEmployee);
    res.json(newEmployee);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
