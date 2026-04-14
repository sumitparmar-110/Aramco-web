import { motion } from 'framer-motion'

const trustPoints = [
  { icon: 'fa-globe', label: 'Global Deployments', desc: 'Active in 40+ countries worldwide' },
  { icon: 'fa-microchip', label: 'AI-Driven Training', desc: 'Powered by behavioral intelligence' },
  { icon: 'fa-shield-halved', label: 'Real-World Scenarios', desc: 'Based on actual workplace incidents' }
]

const GlobalTrust = () => {
  return (
    <section style={{
      background: 'var(--gradient-hero)',
      padding: '120px 0',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '-100px',
        transform: 'translateY(-50%)',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16,138,0,0.1) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center'
        }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label" style={{
            background: 'rgba(16, 138, 0, 0.15)',
              color: 'var(--primary-light)'
            }}>
              <i className="fas fa-earth-americas"></i> Global Trust
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: '24px',
              color: 'white',
              letterSpacing: '-0.03em'
            }}>
              Trusted by Industrial<br />Teams Worldwide
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.65)',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              marginBottom: '40px',
              maxWidth: '460px'
            }}>
              Organizations across the globe rely on our AI-powered platform to transform workplace communication and team performance.
            </p>

            <div style={{ display: 'grid', gap: '20px' }}>
              {trustPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '16px 20px',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(16, 138, 0, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: 'var(--primary-light)',
                    fontSize: '1rem'
                  }}>
                    <i className={`fas ${point.icon}`}></i>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'white', margin: '0 0 4px' }}>{point.label}</h4>
                    <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', margin: 0 }}>{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ textAlign: 'center', position: 'relative' }}
          >
            <i className="fas fa-globe" style={{
              fontSize: '16rem',
              color: 'rgba(16, 138, 0, 0.08)',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}></i>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                fontSize: '8rem',
                fontWeight: 900,
                lineHeight: 0.9,
                background: 'linear-gradient(135deg, #22c55e, #86efac)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                1K+
              </div>
              <p style={{
                fontSize: '1.3rem',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.7)',
                marginTop: '16px'
              }}>
                Teams Trained Globally
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #global-trust .container > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default GlobalTrust
