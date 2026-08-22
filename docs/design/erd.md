# Gym Management System – Entity Relationship Diagram

```mermaid
erDiagram

    USERS ||--o| MEMBERS : "has profile"
    USERS ||--o| TRAINERS : "has profile"
    USERS ||--o{ MEMBERSHIP_PLANS : "creates"
    USERS ||--o{ PAYMENTS : "records"

    TRAINERS ||--o{ MEMBERS : "manages"

    MEMBERSHIP_PLANS ||--o{ MEMBERS : "assigned to"

    MEMBERS ||--o{ ATTENDANCE : "has"

    MEMBERS ||--o{ PAYMENTS : "makes"

    MEMBERSHIP_PLANS ||--o{ PAYMENTS : "related to"

    USERS {
        ObjectId _id
        string name
        string email
        string password
        string role
        boolean isActive
    }

    MEMBERS {
        ObjectId _id
        ObjectId userId
        string memberCode
        string name
        string email
        string phone
        ObjectId trainerId
        ObjectId membershipPlanId
        date membershipStartDate
        date membershipEndDate
        string membershipStatus
    }

    TRAINERS {
        ObjectId _id
        ObjectId userId
        string trainerCode
        string name
        string email
        string phone
        string specialization
        number experienceYears
        string status
    }

    MEMBERSHIP_PLANS {
        ObjectId _id
        string name
        string description
        number durationDays
        number price
        string status
        ObjectId createdBy
    }

    ATTENDANCE {
        ObjectId _id
        ObjectId memberId
        ObjectId trainerId
        date attendanceDate
        date checkInTime
        string status
        string remarks
    }

    PAYMENTS {
        ObjectId _id
        ObjectId memberId
        ObjectId membershipPlanId
        number amount
        date paymentDate
        string paymentType
        string paymentStatus
        ObjectId recordedBy
        string reference
    }
    