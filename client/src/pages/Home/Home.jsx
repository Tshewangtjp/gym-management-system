import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* ================= HERO ================= */}
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
            A complete management platform to handle members, trainers,
            memberships, attendance and payments — all from one place.
          </p>

          <div className="hero-buttons">

            <button className="btn-primary">
              Get Started
              <span>→</span>
            </button>

            <button className="btn-secondary">
              Explore Features
            </button>

          </div>

          <div className="hero-trust">
            <div className="avatar-stack">
              <span>👤</span>
              <span>👤</span>
              <span>👤</span>
              <span>+</span>
            </div>

            <div>
              <strong>Easy to manage</strong>
              <small>Everything in one dashboard</small>
            </div>
          </div>

        </div>


        {/* ================= HERO VISUAL ================= */}
        <div className="hero-visual">

          <div className="image-glow"></div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900"
              alt="Fitness training"
            />
          </div>


          {/* Floating Attendance Card */}
          <div className="floating-card attendance-card">

            <div className="floating-icon">
              ✓
            </div>

            <div>
              <small>Today's Attendance</small>
              <strong>128 Members</strong>
            </div>

          </div>


          {/* Floating Growth Card */}
          <div className="floating-card growth-card">

            <small>Monthly Growth</small>

            <strong>+24.8%</strong>

            <span>↑ Improving</span>

          </div>

        </div>

      </section>


      {/* ================= STATS ================= */}
      <section className="stats">

        <div className="stat">
          <strong>1,250+</strong>
          <span>Active Members</span>
        </div>

        <div className="stat">
          <strong>35+</strong>
          <span>Professional Trainers</span>
        </div>

        <div className="stat">
          <strong>98%</strong>
          <span>Attendance Accuracy</span>
        </div>

        <div className="stat">
          <strong>24/7</strong>
          <span>System Availability</span>
        </div>

      </section>


      {/* ================= FEATURES ================= */}
      <section className="features">

        <div className="section-heading">

          <span className="section-label">
            CORE FEATURES
          </span>

          <h2>
            Everything You Need
            <br />
            <span>To Run Your Gym</span>
          </h2>

          <p>
            Powerful tools designed to simplify everyday gym operations
            and help you focus on your members.
          </p>

        </div>


        <div className="feature-grid">

          <div className="feature-card">

            <div className="feature-top">
              <div className="feature-icon">
                👥
              </div>

              <span className="feature-number">
                01
              </span>
            </div>

            <h3>Member Management</h3>

            <p>
              Manage member profiles, registrations, plans and
              membership status from one place.
            </p>

            <button className="feature-link">
              Manage Members →
            </button>

          </div>


          <div className="feature-card">

            <div className="feature-top">
              <div className="feature-icon">
                💪
              </div>

              <span className="feature-number">
                02
              </span>
            </div>

            <h3>Trainer Management</h3>

            <p>
              Organize trainers, assign members and manage
              training schedules efficiently.
            </p>

            <button className="feature-link">
              View Trainers →
            </button>

          </div>


          <div className="feature-card">

            <div className="feature-top">
              <div className="feature-icon">
                📅
              </div>

              <span className="feature-number">
                03
              </span>
            </div>

            <h3>Attendance Tracking</h3>

            <p>
              Monitor daily attendance and get a clear view of
              member activity and engagement.
            </p>

            <button className="feature-link">
              Check Attendance →
            </button>

          </div>


          <div className="feature-card">

            <div className="feature-top">
              <div className="feature-icon">
                💳
              </div>

              <span className="feature-number">
                04
              </span>
            </div>

            <h3>Payments & Memberships</h3>

            <p>
              Track payments, membership plans, renewals and
              payment history with ease.
            </p>

            <button className="feature-link">
              View Payments →
            </button>

          </div>

        </div>

      </section>


      {/* ================= QUICK ACTIONS ================= */}
      <section className="quick-section">

        <div className="quick-content">

          <div>
            <span className="section-label">
              QUICK ACCESS
            </span>

            <h2>
              What would you like
              <br />
              to manage today?
            </h2>

            <p>
              Quickly access the most frequently used areas
              of your gym management system.
            </p>
          </div>


          <div className="quick-actions">

            <button className="quick-action">
              <span>＋</span>
              <div>
                <strong>Add Member</strong>
                <small>Register a new member</small>
              </div>
              <b>→</b>
            </button>


            <button className="quick-action">
              <span>✓</span>
              <div>
                <strong>Mark Attendance</strong>
                <small>Record today's attendance</small>
              </div>
              <b>→</b>
            </button>


            <button className="quick-action">
              <span>💳</span>
              <div>
                <strong>Record Payment</strong>
                <small>Update payment records</small>
              </div>
              <b>→</b>
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;