document.addEventListener("DOMContentLoaded", () => {
    fetch('/api/employees')
        .then(response => response.json())
        .then(employees => {
            const employeeList = document.getElementById('employee-list');
            employees.forEach(employee => {
                const employeeElement = document.createElement('div');
                employeeElement.classList.add('employee');
                employeeElement.innerHTML = `
                    <div>
                        <h3>${employee.name}</h3>
                        <p>Department: ${employee.department}</p>
                        <p>Salary: $${employee.salary}</p>
                    </div>
                `;
                employeeList.appendChild(employeeElement);
            });
        });

    const form = document.getElementById('employee-form');
    form.addEventListener('submit', event => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const department = document.getElementById('department').value;
        const salary = document.getElementById('salary').value;

        fetch('/api/employees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, department, salary })
        })
        .then(response => response.json())
        .then(employee => {
            const employeeList = document.getElementById('employee-list');
            const employeeElement = document.createElement('div');
            employeeElement.classList.add('employee');
            employeeElement.innerHTML = `
                <div>
                    <h3>${employee.name}</h3>
                    <p>Department: ${employee.department}</p>
                    <p>Salary: $${employee.salary}</p>
                </div>
            `;
            employeeList.appendChild(employeeElement);
            form.reset();
        });
    });
});
