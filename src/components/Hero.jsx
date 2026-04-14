import { motion } from 'framer-motion'

const quickActions = [
  { icon: 'fa-comments', label: 'Start Feedback Training', color: '#108a00' },
  { icon: 'fa-robot', label: 'Run AI Simulation', color: '#22c55e' },
  { icon: 'fa-book-open', label: 'Explore Courses', color: '#16a34a' },
  { icon: 'fa-chart-bar', label: 'Track Team Performance', color: '#0d6e00' },
]

const Hero = () => {
  return (
    <section id="home" style={{
      backgroundImage: 'url("/img/oil_refinery_hero.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '100px',
      paddingBottom: '80px',
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0, 18, 0, 0.78)', zIndex: 0 }} />
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '-200px',
        right: '-200px',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16,138,0,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        left: '-100px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10, paddingTop: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '60px', alignItems: 'center' }}>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(16, 138, 0, 0.15)',
              border: '1px solid rgba(16, 138, 0, 0.25)',
              padding: '8px 16px',
              borderRadius: '100px',
              marginBottom: '28px',
              backdropFilter: 'blur(10px)'
            }}>
              <i className="fas fa-sparkles" style={{ color: 'var(--primary-light)', fontSize: '0.8rem' }}></i>
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.02em' }}>
                AI-Powered Training Platform
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
              color: 'white',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: '24px',
              letterSpacing: '-0.03em'
            }}>
              Train Industrial Teams<br />
              with <span style={{ background: 'linear-gradient(135deg, #22c55e, #86efac)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent', display: 'inline-block' }}>AI Precision</span>
            </h1>

            <p style={{
              fontSize: '1.15rem',
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '520px',
              marginBottom: '40px',
              lineHeight: 1.7
            }}>
              AI-powered simulations to improve feedback, behavior, and communication for industrial professionals.
            </p>

            <div style={{ display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '50px' }}>
              <a href="https://lmsathena.com/login" className="btn btn-primary btn-lg">
                Start Training <i className="fas fa-arrow-right" style={{ fontSize: '0.85rem' }}></i>
              </a>
              <a href="#video" className="btn btn-ghost btn-lg">
                <i className="fas fa-play" style={{ fontSize: '0.7rem' }}></i> Watch Demo
              </a>
            </div>

            {/* Quick Action Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', maxWidth: '480px' }}>
              {quickActions.map((action, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '14px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    cursor: 'pointer',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: `${action.color}22`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <i className={`fas ${action.icon}`} style={{ color: action.color, fontSize: '0.85rem' }}></i>
                  </div>
                  <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.82rem', fontWeight: 500 }}>
                    {action.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Dashboard Preview Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            <div style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 40px 80px rgba(0,0,0,0.3)',
              animation: 'float 6s ease-in-out infinite',
            }}>
              {/* Mock browser bar */}
              <div style={{ display: 'flex', gap: '6px', marginBottom: '20px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }} />
                <div style={{ flex: 1, height: '10px', borderRadius: '6px', background: 'rgba(255,255,255,0.06)', marginLeft: '12px' }} />
              </div>

              {/* Dashboard content mock */}
              <div style={{ display: 'grid', gap: '16px' }}>
                {/* Top row stats */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                  {[
                    { label: 'Sessions', value: '2,847', color: '#108a00' },
                    { label: 'Avg Score', value: '87%', color: '#22c55e' },
                    { label: 'Active Users', value: '436', color: '#16a34a' },
                  ].map((stat, i) => (
                    <div key={i} style={{
                      background: 'rgba(255,255,255,0.05)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '16px',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginBottom: '6px', fontWeight: 500 }}>{stat.label}</div>
                      <div style={{ fontSize: '1.4rem', fontWeight: 800, color: stat.color }}>{stat.value}</div>
                    </div>
                  ))}
                </div>

                {/* Fake chart area */}
                <div style={{
                  background: 'rgba(255,255,255,0.04)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '20px',
                  height: '140px',
                  display: 'flex',
                  alignItems: 'flex-end',
                  gap: '8px'
                }}>
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.8, delay: 0.6 + i * 0.05 }}
                      style={{
                        flex: 1,
                        background: `linear-gradient(to top, rgba(16,138,0,0.7), rgba(34,197,94,0.35))`,
                        borderRadius: '4px 4px 0 0',
                        minHeight: '4px'
                      }}
                    />
                  ))}
                </div>

                {/* Fake team list */}
                <div style={{ display: 'grid', gap: '8px' }}>
                  {['Feedback Session — Manufacturing Team', 'AI Simulation — Safety Protocol'].map((item, i) => (
                    <div key={i} style={{
                      background: 'rgba(255,255,255,0.04)',
                      borderRadius: '10px',
                      padding: '12px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{
                          width: '8px', height: '8px', borderRadius: '50%',
                          background: i === 0 ? '#22c55e' : '#f59e0b'
                        }} />
                        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.78rem', fontWeight: 500 }}>{item}</span>
                      </div>
                      <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem' }}>Live</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #home > .container > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero
