Gym Management System – Project Planning & Requirement Analysis

1. Project Title

Gym Management System

2. Problem Statement

Many fitness centers still manage member registrations, membership plans, attendance, trainer assignments, and payments using paper registers or spreadsheets. These manual methods can lead to inaccurate records, missed membership renewals, payment tracking problems, and inefficient communication between gym staff, trainers, and members.

The people affected include gym administrators, trainers, and members. A centralized web-based Gym Management System is needed to digitize gym operations, improve record accuracy, simplify membership and attendance management, track payments and renewals, and provide useful management information through dashboards and reports.

3. Project Objective

To develop a secure and user-friendly web-based Gym Management System using the MERN Stack that centralizes gym operations and enables administrators, trainers, and members to manage and access relevant information.

The system will provide member management, trainer management, membership plan management, attendance tracking, payment management, membership validity monitoring, dashboards, reports, authentication, and role-based authorization.

4. Target Users / Stakeholders

Administrator

Manage gym members.

Manage trainer profiles and trainer accounts.

Create and manage membership plans.

Manage payment and renewal records.

Monitor membership validity.

View dashboard statistics and management reports.

Manage users and system access.

Manage personal profile.

Trainer

Log in to the system.

View assigned members.

Record member attendance.

Monitor assigned member information.

Manage personal profile.

Support member progress monitoring where implemented.

Member

Register and log in.

View personal profile.

View active membership details.

View membership validity/status.

View attendance history.

View payment history and payment status.

5. Core Modules

User Management

Authentication and Role-Based Authorization

Member Management

Trainer Management

Membership Plan Management

Attendance Management

Payment Management

Dashboard and Reports

Profile Management

6. Project Scope

Included Features

User registration and login.

JWT-based authentication.

Password hashing.

Role-based authorization for Administrator, Trainer, and Member.

User profile management.

Register, view, update, search, and delete members.

View membership status and validity.

Add, view, update, and delete trainers.

Assign members to trainers.

Create, view, update, and delete membership plans.

Membership plan pricing and renewal management.

Record daily member attendance.

View attendance history.

Generate basic attendance reports and statistics.

Record membership payments.

Record membership renewal payments.

View payment history.

Track outstanding payments.

Generate basic revenue reports.

Dashboard showing membership, attendance, and revenue statistics.

RESTful API communication between frontend and backend.

Responsive web interface.

MongoDB database with Mongoose models and references.

Cloud deployment as a final project objective.

Project documentation, API documentation, README, user manual, and final presentation.

Excluded Features

Online payment gateway integration.

Biometric attendance devices.

Workout tracking using wearable devices.

Nutrition planning.

AI-based fitness recommendations.

Native mobile application.

Advanced fitness tracking features not defined in the project brief.

7. Functional Requirements

Authentication and Users

The system shall allow users to register where registration is permitted by the application workflow.

The system shall allow users to log in and log out.

The system shall authenticate users using JWT.

The system shall store passwords securely using password hashing.

The system shall restrict protected features according to the user's role.

The system shall allow users to view and update their profile.

The system shall provide role-based access for Administrator, Trainer, and Member users.

Member Management

The Administrator shall be able to register a member.

The Administrator shall be able to view member records.

The Administrator shall be able to update member information.

The Administrator shall be able to delete member records.

The Administrator shall be able to search members efficiently.

The system shall display membership status and validity for members.

The system shall maintain member profile information.

The system shall allow a member to view their own membership details.

Trainer Management

The Administrator shall be able to add a trainer.

The Administrator shall be able to view trainer information.

The Administrator shall be able to update trainer information.

The Administrator shall be able to delete trainer records.

The Administrator shall be able to assign members to trainers.

Trainers shall be able to view their assigned members.

Trainers shall be able to manage their own profiles.

Membership Plan Management

The Administrator shall be able to create membership plans.

The Administrator shall be able to view available membership plans.

The Administrator shall be able to update membership plans.

The Administrator shall be able to delete membership plans.

The system shall store membership plan pricing.

The system shall support membership renewal.

The system shall track membership validity and active status.

Attendance Management

Trainers shall be able to record member attendance.

Authorized users shall be able to view attendance records.

The system shall maintain attendance history for each member.

The system shall provide daily attendance information.

The system shall support attendance statistics and basic reports.

Members shall be able to view their attendance history.

Payment Management

The Administrator shall be able to record membership payments.

The Administrator shall be able to record membership renewal payments.

The system shall maintain payment history for each member.

The system shall display payment status.

The system shall track outstanding payments.

The system shall provide basic revenue reports.

Members shall be able to view their payment history and payment status.

Dashboard and Reports

The system shall display key membership statistics on the dashboard.

The system shall display attendance statistics.

The system shall display payment and revenue information.

The system shall show membership validity information.

The system shall provide basic management reports.

The system shall support attendance and revenue reporting.

8. Non-Functional Requirements

Security

Passwords must be hashed before storage.

Protected API routes must require a valid JWT.

Role checks must prevent unauthorized access.

User input must be validated.

Sensitive configuration values such as database credentials and JWT secrets must not be committed to GitHub.

Performance

Member search should respond efficiently under expected classroom-scale usage.

Attendance recording should be quick and efficient.

REST API communication should be responsive.

Database queries should be designed efficiently.

Usability

The interface should be responsive on desktop and mobile browsers.

Member, attendance, membership, and payment operations should be simple and clear.

Navigation should be easy for all supported user roles.

Validation and error messages should be understandable.

Reliability

The system should handle invalid requests without crashing.

API errors should return meaningful responses.

Database and application errors should be handled appropriately.

Protected operations should fail safely when authorization is missing or invalid.

Maintainability

The backend should use modular routes, controllers, models, and middleware.

The frontend should use reusable React components.

Mongoose models should represent the main application entities.

Code should be organized using a clear client/server structure.

Project documentation should be maintained throughout development.

Scalability

The application architecture should support future features such as:

Online payment gateway integration.

Biometric attendance integration.

Workout plans.

Nutrition management.

Fitness progress tracking.

Additional reporting and analytics.

Mobile application support.

9. Database Planning

The project brief identifies the following main MongoDB collections:

Users

Stores login credentials, authentication information, roles, and profile-related user information.

Members

Stores gym member information, membership details, assigned trainer reference, and related status information.

Trainers

Stores trainer information and trainer profile data.

MembershipPlans

Stores available membership plans, pricing, duration, and related plan information.

Attendance

Stores member attendance records and attendance dates.

Payments

Stores membership payment and renewal records, payment amounts, dates, and payment status.

Recommended Relationships

One Trainer can manage many Members.

One Member can have one active Membership Plan.

One Membership Plan can be assigned to many Members.

One Member can have many Attendance Records.

One Member can have many Payments.

One Administrator can manage multiple Membership Plans and Trainers.

The relationships will be implemented using MongoDB references/ObjectId through Mongoose.

10. Planned Application Pages

Public Pages

Home

Membership Plans

Login

Register

Contact

Administrator Pages

Dashboard

Members

Trainers

Membership Plans

Payments

Reports

Users

Profile

Trainer Pages

Dashboard

Assigned Members

Attendance

Profile

Member Pages

Dashboard

My Membership

Attendance History

Payment History

Profile

11. Planned REST API

Authentication

POST /api/auth/register

POST /api/auth/login

GET /api/auth/profile

Members

GET /api/members

GET /api/members/:id

POST /api/members

PUT /api/members/:id

DELETE /api/members/:id

Trainers

GET /api/trainers

POST /api/trainers

PUT /api/trainers/:id

DELETE /api/trainers/:id

Membership Plans

GET /api/membership-plans

POST /api/membership-plans

PUT /api/membership-plans/:id

DELETE /api/membership-plans/:id

Attendance

GET /api/attendance

POST /api/attendance

PUT /api/attendance/:id

Payments

GET /api/payments

POST /api/payments

PUT /api/payments/:id

12. Technology Stack Verification

The project brief specifies the following MERN technologies:

MongoDB — database.

Express.js — backend web/API framework.

React.js — frontend library.

Node.js — backend JavaScript runtime.

Supporting technologies and tools identified for the project:

Mongoose — MongoDB object modeling.

JWT — authentication.

Git — version control.

GitHub — remote repository and collaboration.

Visual Studio Code — development environment.

Google Chrome / Microsoft Edge — application testing.

13. Sprint 2 Verification and Comparison

The following requirements have been reviewed against the original Gym Management System project brief during Sprint 2 planning:

Project title and health/fitness domain have been confirmed.

The original problem statement has been translated into a clear system requirement.

Project objectives have been aligned with the brief.

Administrator, Trainer, and Member roles have been identified.

Core modules from the project brief have been included.

Functional requirements for users, members, trainers, membership plans, attendance, and payments have been included.

Dashboard and management reporting requirements have been included.

Security requirements including password hashing and JWT authentication have been included.

Role-based authorization and protected routes have been included.

Performance, usability, reliability, maintainability, and scalability requirements have been included.

MongoDB collection planning and ObjectId relationships have been documented.

Suggested application pages have been reviewed and organized by user role.

Suggested REST API endpoints have been reviewed and included as the initial API plan.

The excluded features listed in the project brief have been preserved in the project scope.

The planned technology stack matches the required MERN Stack.

14. Sprint 2 Conclusion

After comparing the project requirements with the original Project Brief, the proposed Gym Management System requirements are aligned with the specified scope, users, modules, database relationships, REST API structure, security requirements, and non-functional requirements.

This document will serve as the baseline requirement and planning reference for future sprints. Any new feature introduced in later sprints should be checked against this planning document and the original Project Brief to ensure that the development remains within the agreed project scope.

15. Final Verification

Group Verification

The project group has reviewed the requirements and confirmed that the planning document represents the agreed scope and functionality of the Gym Management System.

Group Verified By: ______________________________

Date: ______________________________

Final Verification

The completed planning docuSment and requirement comparison have been reviewed and verified at the end of Sprint 2.

Verified By: ______________________________

Date: ______________________________

Status: Requirements Reviewed and Verified