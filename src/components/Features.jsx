import { motion } from 'framer-motion'

const features = [
  {
    icon: 'fa-robot',
    title: 'AI Feedback Simulator',
    desc: 'Practice giving and receiving feedback in realistic AI-driven scenarios',
    gradient: 'linear-gradient(135deg, #108a00, #22c55e)'
  },
  {
    icon: 'fa-chart-mixed',
    title: 'Behavioral Analytics',
    desc: 'Deep insights into communication patterns and emotional triggers',
    gradient: 'linear-gradient(135deg, #0d6e00, #108a00)'
  },
  {
    icon: 'fa-road',
    title: 'Personalized Learning Paths',
    desc: 'AI-curated training journeys tailored to individual needs',
    gradient: 'linear-gradient(135deg, #22c55e, #16a34a)'
  },
  {
    icon: 'fa-users-gear',
    title: 'Team Performance Tracking',
    desc: 'Monitor team progress with real-time dashboards and reports',
    gradient: 'linear-gradient(135deg, #108a00, #0d6e00)'
  },
  {
    icon: 'fa-clapperboard',
    title: 'Scenario-Based Training',
    desc: 'Immersive workplace simulations built from real incidents',
    gradient: 'linear-gradient(135deg, #22c55e, #108a00)'
  }
]

const Features = () => {
  return (
    <section id="features" style={{ background: 'var(--bg)', padding: '120px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
          <span className="section-label">
            <i className="fas fa-grid-2"></i> Platform Features
          </span>
          <h2 className="section-title" style={{ maxWidth: '600px', margin: '0 auto 16px' }}>
            Everything You Need to Transform Training
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto 40px' }}>
            Powerful tools designed for industrial teams to master feedback and communication
          </p>
          {/* Aerial image banner */}
          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }}>
            <img
              src="/img/oil_refinery_aerial.png"
              alt="Platform Overview"
              style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px'
        }}>
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(16, 138, 0, 0.12)' }}
              style={{
                background: 'var(--white)',
                borderRadius: 'var(--radius)',
                padding: '32px',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
                cursor: 'default',
                transition: 'all 0.35s ease'
              }}
            >
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                background: f.gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                color: 'white',
                fontSize: '1.15rem',
                boxShadow: '0 8px 20px rgba(16, 138, 0, 0.2)'
              }}>
                <i className={`fas ${f.icon}`}></i>
              </div>
              <div>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--text)',
                  marginBottom: '8px',
                  letterSpacing: '-0.02em'
                }}>
                  {f.title}
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
