# Mini CRM - Laravel Assessment

## FNXPERTS SDN. BHD.
Web Developer Assessment Version 2


## Technology

- Laravel 13
- PHP 8.4
- MySQL
- React + TypeScript
- Inertia.js
- Tailwind CSS


## Features

### Authentication

- Admin login
- Registration disabled


Default admin account:

Email:
admin@admin.com

Password:
password



## Companies Module

Features:

- Create company
- View company list
- Update company
- Delete company
- Upload company logo
- Pagination


Fields:

- Name
- Address
- Email
- Website
- Logo



## Employees Module

Features:

- Create employee
- View employee list
- Update employee
- Delete employee
- Pagination


Fields:

- First Name
- Last Name
- Company
- Email
- Phone



## API


Endpoint:

GET

/api/companies/{id}


Example:

/api/companies/1



Response includes:

- Company details
- Employee list
- employee_count



## Installation


Clone repository:


git clone <repository-url>


Install dependencies:


composer install

npm install



Environment:


copy .env.example .env


Generate key:


php artisan key:generate



Database:


php artisan migrate --seed



Run:


php artisan serve

npm run dev



## Testing API

Use Postman:


GET

http://localhost:8000/api/companies/1