# Gym Management System – MongoDB Collection Design

## Database

Database name:

`gym_management`

## Collection 1 – Users

Purpose: Stores authentication and user account information.

Fields:

| Field | Type | Description |
|---|---|---|
| _id | ObjectId | Unique ID |
| name | String | User name |
| email | String | Login email |
| password | String | Hashed password |
| role | String | admin/trainer/member |
| phone | String | Contact number |
| address | String | User address |
| isActive | Boolean | Account status |
| createdAt | Date | Creation date |
| updatedAt | Date | Updated date |

## Collection 2 – Members

Fields:

| Field | Type | Description |
|---|---|---|
| _id | ObjectId | Member ID |
| userId | ObjectId | User reference |
| memberCode | String | Unique member code |
| name | String | Member name |
| email | String | Member email |
| phone | String | Contact |
| gender | String | Gender |
| dateOfBirth | Date | Date of birth |
| address | String | Address |
| trainerId | ObjectId | Trainer reference |
| membershipPlanId | ObjectId | Membership plan reference |
| membershipStartDate | Date | Start date |
| membershipEndDate | Date | End date |
| membershipStatus | String | Active/Expired/Pending |

## Collection 3 – Trainers

Fields:

| Field | Type | Description |
|---|---|---|
| _id | ObjectId | Trainer ID |
| userId | ObjectId | User reference |
| trainerCode | String | Trainer code |
| name | String | Trainer name |
| email | String | Email |
| phone | String | Phone |
| specialization | String | Specialization |
| experienceYears | Number | Experience |
| status | String | Active/Inactive |

## Collection 4 – MembershipPlans

Fields:

| Field | Type | Description |
|---|---|---|
| _id | ObjectId | Plan ID |
| name | String | Plan name |
| description | String | Description |
| durationDays | Number | Duration |
| price | Number | Price |
| status | String | Active/Inactive |
| createdBy | ObjectId | Admin reference |

## Collection 5 – Attendance

Fields:

| Field | Type | Description |
|---|---|---|
| _id | ObjectId | Attendance ID |
| memberId | ObjectId | Member reference |
| trainerId | ObjectId | Trainer reference |
| attendanceDate | Date | Attendance date |
| checkInTime | Date | Check-in time |
| status | String | Present/Absent |
| remarks | String | Remarks |

## Collection 6 – Payments

Fields:

| Field | Type | Description |
|---|---|---|
| _id | ObjectId | Payment ID |
| memberId | ObjectId | Member reference |
| membershipPlanId | ObjectId | Plan reference |
| amount | Number | Payment amount |
| paymentDate | Date | Payment date |
| paymentType | String | New Membership/Renewal |
| paymentStatus | String | Paid/Pending/Outstanding |
| recordedBy | ObjectId | Administrator reference |
| reference | String | Payment reference |
| remarks | String | Remarks |

## Relationships

- Trainer → Members = One-to-Many
- MembershipPlan → Members = One-to-Many
- Member → Attendance = One-to-Many
- Member → Payments = One-to-Many
- User → Member = One-to-One/Optional
- User → Trainer = One-to-One/Optional