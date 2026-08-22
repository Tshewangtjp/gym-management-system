import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Members from "./pages/Members";
import Trainers from "./pages/Trainers";
import MembershipPlans from "./pages/MembershipPlans";
import Payments from "./pages/Payments";
import Reports from "./pages/Reports";
import Profile from "./pages/Profile";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/members" element={<Members />} />
                <Route path="/trainers" element={<Trainers />} />
                <Route
                    path="/membership-plans"
                    element={<MembershipPlans />}
                />
                <Route path="/payments" element={<Payments />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/profile" element={<Profile />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;