import { useEffect, useState } from "react";
import api from "../services/api";

function Home() {
    const [message, setMessage] = useState("Connecting to server...");

    useEffect(() => {
        api.get("/health")
            .then((response) => {
                setMessage(response.data.message);
            })
            .catch(() => {
                setMessage("Unable to connect to backend.");
            });
    }, []);

    return (
        <div>
            <h1>Gym Management System</h1>

            <p>
                {message}
            </p>
        </div>
    );
}

export default Home;