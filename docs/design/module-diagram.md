# Gym Management System – Module Diagram

```mermaid
flowchart TD
    A[Gym Management System]

    A --> B[Authentication & User Management]
    A --> C[Member Management]
    A --> D[Trainer Management]
    A --> E[Membership Plan Management]
    A --> F[Attendance Management]
    A --> G[Payment Management]
    A --> H[Dashboard & Reports]

    B --> B1[Registration]
    B --> B2[Login / JWT]
    B --> B3[Role Authorization]
    B --> B4[Profile]

    C --> C1[Register Member]
    C --> C2[Search / View]
    C --> C3[Update / Delete]
    C --> C4[Membership Status]
    C --> C5[Trainer Assignment]

    D --> D1[Add / Update / Delete]
    D --> D2[Trainer Profile]
    D --> D3[Assign Members]

    E --> E1[Create Plan]
    E --> E2[Update / Delete]
    E --> E3[Pricing / Duration]
    E --> E4[Renewal / Validity]

    F --> F1[Mark Attendance]
    F --> F2[Attendance History]
    F --> F3[Statistics / Reports]

    G --> G1[Record Payment]
    G --> G2[Renewal Payment]
    G --> G3[Payment History]
    G --> G4[Outstanding / Revenue]

    H --> H1[Membership Statistics]
    H --> H2[Attendance Statistics]
    H --> H3[Revenue Reports]

    
This is your **Module Diagram deliverable**.

---

# Step 6 — Exercise 2: Design the ERD

The Project Brief gives these relationships:

```text
One Trainer → Many Members

One Member → One active Membership Plan

One Membership Plan → Many Members

One Member → Many Attendance Records

One Member → Many Payments

One Administrator → Many Membership Plans and Trainers