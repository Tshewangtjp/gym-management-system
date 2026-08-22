import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="badge">🏋️ Gym Management System</span>

          <h1>Transform Your Gym Into a Smarter Fitness Hub</h1>

          <p>
            Manage members, trainers, memberships, attendance, and payments
            through one powerful and easy-to-use dashboard.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700"
            alt="Gym"
          />
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Everything You Need to Manage Your Gym</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <span>👥</span>
            <h3>Member Management</h3>
            <p>Register, update, and monitor all gym members easily.</p>
          </div>

          <div className="feature-card">
            <span>💪</span>
            <h3>Trainer Management</h3>
            <p>Assign trainers and track their schedules efficiently.</p>
          </div>

          <div className="feature-card">
            <span>📅</span>
            <h3>Attendance Tracking</h3>
            <p>Keep accurate daily attendance records.</p>
          </div>

          <div className="feature-card">
            <span>💳</span>
            <h3>Membership & Payments</h3>
            <p>Manage plans, renewals, and payment history.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;