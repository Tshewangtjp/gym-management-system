import Card from "../../components/common/Card";

function Dashboard() {
    return (
        <div className="page">

            <p className="page-label">
                Administrator
            </p>

            <h1>Dashboard</h1>

            <p>
                Overview of gym management activities.
            </p>

            <div className="dashboard-grid">

                <Card title="Total Members">
                    <p>0</p>
                </Card>

                <Card title="Active Memberships">
                    <p>0</p>
                </Card>

                <Card title="Today's Attendance">
                    <p>0</p>
                </Card>

                <Card title="Revenue">
                    <p>₹0</p>
                </Card>

            </div>

        </div>
    );
}

export default Dashboard;