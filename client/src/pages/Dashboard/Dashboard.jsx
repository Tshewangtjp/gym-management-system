import PageTitle from "../../components/ui/PageTitle";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

import "./Dashboard.css";

function Dashboard() {

    return (
        <div className="dashboard-page">

            <PageTitle
                title="Dashboard"
                description="Monitor your gym activities and performance."
                action={
                    <Button>
                        + Add Member
                    </Button>
                }
            />


            <div className="dashboard-grid">

                <Card
                    title="Total Members"
                    description="Currently registered members"
                >
                    <div className="dashboard-number">
                        1,250
                    </div>
                </Card>


                <Card
                    title="Active Trainers"
                    description="Currently available trainers"
                >
                    <div className="dashboard-number">
                        35
                    </div>
                </Card>


                <Card
                    title="Today's Attendance"
                    description="Members checked in today"
                >
                    <div className="dashboard-number">
                        128
                    </div>
                </Card>


                <Card
                    title="Monthly Revenue"
                    description="Revenue generated this month"
                >
                    <div className="dashboard-number">
                        ₹85,400
                    </div>
                </Card>

            </div>

        </div>
    );
}

export default Dashboard;