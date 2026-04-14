import { motion } from 'framer-motion'

const CTA = () => {
  return (
    <section style={{
      background: 'var(--bg)',
      padding: '120px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            backgroundImage: 'url("/img/oil_refinery_night.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(50px, 8vw, 80px) clamp(30px, 6vw, 60px)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 40px 80px rgba(0,0,0,0.3)'
          }}
        >
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,18,0,0.85)', borderRadius: 'var(--radius-lg)' }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: 'white',
              marginBottom: '16px',
              letterSpacing: '-0.03em',
              lineHeight: 1.15
            }}>
              Ready to Transform<br />Your Workforce?
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '1.1rem',
              maxWidth: '480px',
              margin: '0 auto 36px',
              lineHeight: 1.7
            }}>
              Join thousands of industrial teams already using AI to improve feedback, communication, and performance.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://lmsathena.com/login" className="btn btn-lg" style={{
                background: 'white',
                color: 'var(--primary-dark)',
                fontWeight: 700,
                boxShadow: '0 8px 30px rgba(0,0,0,0.2)'
              }}>
                Start Training <i className="fas fa-arrow-right" style={{ fontSize: '0.85rem' }}></i>
              </a>
              <a href="#" className="btn btn-ghost btn-lg">
                Book Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
