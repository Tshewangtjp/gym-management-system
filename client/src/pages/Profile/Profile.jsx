import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

function Profile() {

    return (
        <div className="profile-page">

            <PageTitle
                title="My Profile"
                description="Manage your personal information and account settings."
            />

            <Card
                title="Personal Information"
                description="Your account information"
            >

                <p>
                    Name: Pema Tshewang Norbu
                </p>

                <p>
                    Email: user@example.com
                </p>

                <Button>
                    Edit Profile
                </Button>

            </Card>

        </div>
    );
}

export default Profile;