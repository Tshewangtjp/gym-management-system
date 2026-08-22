import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="navbar">

            <div className="navbar-container">

                {/* ================= LOGO ================= */}

                <NavLink
                    to="/"
                    className="navbar-brand"
                    onClick={closeMenu}
                >

                    <div className="brand-icon">
                        G
                    </div>

                    <div className="brand-text">
                        <strong>
                            GYM<span>PRO</span>
                        </strong>

                        <small>
                            Smart Gym Management
                        </small>
                    </div>

                </NavLink>


                {/* ================= DESKTOP NAV ================= */}

                <nav className="navbar-links">

                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                        }
                    >
                        <span className="nav-icon">⌂</span>
                        Home
                    </NavLink>


                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                        }
                    >
                        <span className="nav-icon">▦</span>
                        Dashboard
                    </NavLink>


                    <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                        }
                    >
                        <span className="nav-icon">◉</span>
                        Profile
                    </NavLink>

                </nav>


                {/* ================= RIGHT SIDE ================= */}

                <div className="navbar-actions">

                    <NavLink
                        to="/login"
                        className="login-button"
                    >
                        Login
                        <span>→</span>
                    </NavLink>

                </div>


                {/* ================= MOBILE BUTTON ================= */}

                <button
                    className={`menu-toggle ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </div>


            {/* ================= MOBILE MENU ================= */}

            <div
                className={`mobile-menu ${
                    menuOpen ? "show" : ""
                }`}
            >

                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        `mobile-link ${isActive ? "active" : ""}`
                    }
                    onClick={closeMenu}
                >
                    <span>⌂</span>
                    Home
                </NavLink>


                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        `mobile-link ${isActive ? "active" : ""}`
                    }
                    onClick={closeMenu}
                >
                    <span>▦</span>
                    Dashboard
                </NavLink>


                <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                        `mobile-link ${isActive ? "active" : ""}`
                    }
                    onClick={closeMenu}
                >
                    <span>◉</span>
                    Profile
                </NavLink>


                <NavLink
                    to="/login"
                    className="mobile-login"
                    onClick={closeMenu}
                >
                    Login →
                </NavLink>

            </div>

        </header>
    );
}

export default Navbar;