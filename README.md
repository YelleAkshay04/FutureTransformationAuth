## Future Transformation QA Authentication Assignment

### Author

**Akshay Yelle**

### Project Overview

This repository contains my submission for the **Future Transformation
QA Internship Assignment**. The project implements a secure User
Authentication and Authorization system using **Spring Boot, React, JWT,
MySQL, and Selenium Automation**.

### Features

* User Registration
* User Login
* JWT Authentication
* Protected Dashboard
* Logout Functionality
* Duplicate Email Validation
* BCrypt Password Encryption
* Input Validation
* Selenium Automation

### Repository Structure

``` text
 FutureTransformationAuth-main/
├── ManualTestCases.md
├── BoundaryCases.md
├── TestData.csv
├── Assumptions.md
├── README.md
├── Evidence/
│   ├── Registration screenshots
│   ├── Login screenshots
│   ├── Duplicate Email validation
│   ├── Dashboard authentication
│   └── Application execution evidence
├── Automation/
│   ├── BaseTest.java
│   ├── RegisterTest.java
│   ├── LoginTest.java
│   ├── InvalidLoginTest.java
│   ├── DuplicateRegisterTest.java
│   ├── DashboardAccessTest.java
│   └── HomePageTest.java
├── FutureTransformationAuth-Selenium/
│   ├── pom.xml
│   └── src/
│       ├── main/java/
│       └── test/java/com/futuretransformation/tests/
├── futuretransformationauth-backend/
│   ├── Spring Boot Application
│   ├── Authentication Controller
│   ├── DTOs
│   ├── JWT Security
│   ├── Services
│   ├── Repository
│   └── pom.xml
└── futuretransformationauth-frontend/
├── React Application
├── Registration Page
├── Login Page
├── Dashboard
└── Components```

### Technology Stack

**Frontend** - React.js - HTML5 - CSS3 - JavaScript - Tailwind CSS -
Axios

**Backend** - Java - Spring Boot - Spring Security - JWT
Authentication - Maven

**Database** - MySQL

**Automation** - Selenium WebDriver - JUnit 5 - WebDriverManager

### Test Coverage

**Manual Testing** - Registration - Login - Duplicate Email Validation -
Boundary Value Analysis - JWT Authentication - Dashboard Protection

**Selenium Automation** - Successful Registration - Duplicate
Registration - Successful Login - Invalid Login - Dashboard Protection

### Execution Evidence

The **Evidence** folder contains screenshots of: - Landing Page -
Registration - Login - Duplicate Email Validation - Dashboard -
Dashboard Protection - Selenium Execution

### How to Run

**Backend** - Run the Spring Boot application.

**Frontend**

``` bash
npm install
npm run dev
```

**Selenium** - Open the Selenium project in IntelliJ IDEA. - Install
Maven dependencies. - Execute the JUnit test classes.

### Deliverables

* Manual Test Cases
* Boundary Test Cases
* Test Data
* Assumptions
* Selenium Automation
* Execution Evidence
* Backend Source Code
* Frontend Source Code

### Thank You

Thank you for reviewing my submission.



