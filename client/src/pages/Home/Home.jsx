import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

import "./Home.css";

function Home() {

    const handleGetStarted = () => {
        console.log("Get Started");
    };

    return (
        <div className="home">

            <section className="hero">

                <div className="hero-content">

                    <div className="hero-badge">
                        <span className="badge-dot"></span>

                        Smart Gym Management Platform
                    </div>

                    <h1>
                        Manage Your Gym.
                        <br />
                        <span>Build Stronger.</span>
                    </h1>

                    <p className="hero-description">
                        A complete management platform to handle
                        members, trainers, memberships, attendance
                        and payments.
                    </p>

                    <div className="hero-buttons">

                        <Button
                            variant="primary"
                            onClick={handleGetStarted}
                        >
                            Get Started →
                        </Button>

                        <Button variant="secondary">
                            Explore Features
                        </Button>

                    </div>

                </div>

            </section>


            <section className="features">

                <div className="section-heading">

                    <span className="section-label">
                        CORE FEATURES
                    </span>

                    <h2>
                        Everything You Need
                    </h2>

                    <p>
                        Powerful tools designed to simplify
                        everyday gym operations.
                    </p>

                </div>


                <div className="feature-grid">

                    <Card
                        title="Member Management"
                        description="Manage member profiles, registrations and membership status."
                    >
                        <button className="feature-link">
                            Manage Members →
                        </button>
                    </Card>


                    <Card
                        title="Trainer Management"
                        description="Manage trainers, assignments and training schedules."
                    >
                        <button className="feature-link">
                            View Trainers →
                        </button>
                    </Card>


                    <Card
                        title="Attendance Tracking"
                        description="Monitor daily attendance and member activity."
                    >
                        <button className="feature-link">
                            Check Attendance →
                        </button>
                    </Card>


                    <Card
                        title="Payments & Memberships"
                        description="Track payments, renewals and membership plans."
                    >
                        <button className="feature-link">
                            View Payments →
                        </button>
                    </Card>

                </div>

            </section>

        </div>
    );
}

export default Home;