# Mini CRM - Laravel Assessment

## FNXPERTS SDN. BHD.

**Web Developer Assessment Version 2**

A Mini CRM web application developed for managing companies and their employees.

The application provides administrator authentication, company management, employee management, logo upload, pagination, and API integration.

---

# Technology Stack

- Laravel 13
- PHP 8.4
- MySQL
- React
- TypeScript
- Inertia.js
- Tailwind CSS
- Vite

---

# System Features

## Authentication

Implemented using Laravel authentication starter kit.

Features:

- Administrator login
- Profile management
- Password management
- Registration disabled


Default administrator account:

```
Email:
admin@admin.com

Password:
password
```

---

# Companies Module

The Companies module provides complete CRUD functionality.

Features:

- Create company
- View company list
- Update company
- Delete company
- Upload company logo
- Pagination (10 records per page)


Company information fields:

| Field | Description |
|---|---|
| Name | Required company name |
| Address | Company address |
| Email | Company email |
| Website | Company website |
| Logo | Company logo image |


Logo storage location:

```
storage/app/public/logos
```


Public access:

```
public/storage
```

---

# Employees Module

The Employees module provides complete CRUD functionality.

Features:

- Create employee
- View employee list
- Update employee
- Delete employee
- Pagination (10 records per page)


Employee information fields:

| Field | Description |
|---|---|
| First Name | Required |
| Last Name | Required |
| Company | Related company |
| Email | Employee email |
| Phone | Employee phone number |


Database relationship:

```
Company
    |
    | hasMany
    |
Employees


Employee
    |
    | belongsTo
    |
Company
```

---

# Database Structure

Database tables:

```
users

companies

employees
```


Database migrations are included to create the required database structure.


Example relationships:

Company Model:

```php
public function employees()
{
    return $this->hasMany(Employee::class);
}
```


Employee Model:

```php
public function company()
{
    return $this->belongsTo(Company::class);
}
```

---

# API

The application provides an API endpoint to retrieve company information together with related employees.


## Endpoint

```
GET /api/companies/{id}
```


Example:

```
GET http://localhost:8000/api/companies/1
```


## API Response

The API response includes:

- Company details
- Employee list
- employee_count attribute


Example response:

```json
{
    "id": 1,
    "name": "FNXPERTS SDN. BHD.",
    "email": "info@fnxperts.com",
    "website": "https://fnxperts.com",
    "employee_count": 5,
    "employees": [
        {
            "id": 1,
            "first_name": "Muhammad",
            "last_name": "Rizal",
            "email": "muhammad.rizal@example.com"
        }
    ]
}
```

---

# Validation

Validation is implemented using Laravel validation functions.

Examples:

Company:

- Name is required
- Email format validation
- Logo image validation


Employee:

- First Name required
- Last Name required
- Company relationship required

---

# Pagination

Pagination is implemented using Laravel pagination.

Configuration:

```
10 records per page
```


Available on:

- Companies list
- Employees list

---

# Resource Controllers

The application uses Laravel Resource Controllers.

Implemented controllers:

```
CompanyController

EmployeeController
```


Available methods:

```
index()

create()

store()

show()

edit()

update()

destroy()
```

---

# Database Seeding

Database seeders are included.

Seed data creates:

- Default administrator account
- Companies data
- Employees data


Run:

```bash
php artisan db:seed
```

or:

```bash
php artisan migrate --seed
```

---

# Installation Guide

## 1. Clone Repository

```bash
git clone <repository-url>

cd mini-crm
```

---

## 2. Install Backend Dependencies

```bash
composer install
```

---

## 3. Install Frontend Dependencies

```bash
npm install
```

---

## 4. Setup Environment

Create `.env` file:

```bash
copy .env.example .env
```


Generate application key:

```bash
php artisan key:generate
```

---

## 5. Configure Database

Update `.env`:

Example:

```
DB_DATABASE=mini_crm
DB_USERNAME=root
DB_PASSWORD=
```


Run migration:

```bash
php artisan migrate --seed
```

---

## 6. Setup Storage

Create symbolic link for uploaded files:

```bash
php artisan storage:link
```


Company logos will be accessible through:

```
/storage/logos
```

---

# Running Application

Start Laravel server:

```bash
php artisan serve
```


Start frontend:

```bash
npm run dev
```


Application URL:

```
http://localhost:8000
```

---

# API Testing Using Postman

API can be tested using Postman.


Request:

```
GET

http://localhost:8000/api/companies/1
```


Expected result:

- Company information
- Related employees
- Employee count

---

# Screenshots Included

The submission includes screenshots showing:

1. Login page

2. Dashboard

3. Companies list

4. Create company page

5. Edit company functionality

6. Employees list

7. Create employee page

8. API response using Postman

---

# Git Repository

The completed project is available through Git repository.

Repository:

```
<insert-github-link-here>
```

---

# Default Login Credentials

```
Email:
admin@admin.com

Password:
password
```

---

# Project Completion Checklist

✅ Laravel Authentication  
✅ Admin seed account  
✅ Company CRUD  
✅ Employee CRUD  
✅ Company-Employee relationship  
✅ Logo upload and storage  
✅ Validation  
✅ Pagination  
✅ Resource Controllers  
✅ API endpoint  
✅ employee_count API attribute  
✅ Postman testing  
✅ README documentation  

---

## FNXPERTS SDN. BHD.
## Laravel Web Developer Assessment Submission