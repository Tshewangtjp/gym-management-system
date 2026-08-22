import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* Brand */}
                <div className="footer-brand">

                    <div className="footer-logo">
                        <div className="logo-icon">
                            G
                        </div>

                        <div>
                            <h2>GYM<span>PRO</span></h2>
                            <p>Smart Gym Management</p>
                        </div>
                    </div>

                    <p className="footer-description">
                        A smarter way to manage your gym, members,
                        trainers, memberships, attendance and payments.
                    </p>

                    <div className="social-links">

                        <a href="#" aria-label="Facebook">
                            f
                        </a>

                        <a href="#" aria-label="Instagram">
                            ◎
                        </a>

                        <a href="#" aria-label="LinkedIn">
                            in
                        </a>

                        <a href="#" aria-label="Telegram">
                            ✈
                        </a>

                    </div>

                </div>


                {/* Navigation */}
                <div className="footer-column">

                    <h3>Navigation</h3>

                    <a href="/">Home</a>
                    <a href="/members">Members</a>
                    <a href="/trainers">Trainers</a>
                    <a href="/attendance">Attendance</a>
                    <a href="/payments">Payments</a>

                </div>


                {/* Management */}
                <div className="footer-column">

                    <h3>Management</h3>

                    <a href="/memberships">
                        Memberships
                    </a>

                    <a href="/plans">
                        Membership Plans
                    </a>

                    <a href="/reports">
                        Reports
                    </a>

                    <a href="/dashboard">
                        Dashboard
                    </a>

                    <a href="/settings">
                        Settings
                    </a>

                </div>


                {/* Contact */}
                <div className="footer-column contact-column">

                    <h3>Get in Touch</h3>

                    <div className="contact-item">
                        <span>✉</span>

                        <div>
                            <small>Email</small>
                            <p>support@gympro.com</p>
                        </div>
                    </div>


                    <div className="contact-item">
                        <span>☎</span>

                        <div>
                            <small>Phone</small>
                            <p>+91 98765 43210</p>
                        </div>
                    </div>


                    <div className="contact-item">
                        <span>⌖</span>

                        <div>
                            <small>Location</small>
                            <p>Guwahati, Assam</p>
                        </div>
                    </div>

                </div>

            </div>


            {/* Bottom Footer */}

            <div className="footer-bottom">

                <p>
                    © 2026 <strong>GYMPRO</strong>. All rights reserved.
                </p>

                <div className="footer-bottom-links">

                    <a href="/privacy">
                        Privacy Policy
                    </a>

                    <a href="/terms">
                        Terms of Service
                    </a>

                </div>

                <p className="made-with">
                    Built for better fitness management
                    <span>♥</span>
                </p>

            </div>

        </footer>
    );
}

export default Footer;