import { motion } from 'framer-motion'

const industries = [
  { icon: 'fa-industry', label: 'Manufacturing', color: '#108a00' },
  { icon: 'fa-helmet-safety', label: 'Construction', color: '#22c55e' },
  { icon: 'fa-oil-well', label: 'Oil & Gas', color: '#0d6e00' },
  { icon: 'fa-gears', label: 'Operations Teams', color: '#16a34a' }
]

const Industries = () => {
  return (
    <section style={{ background: 'var(--bg)', padding: '120px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
          <span className="section-label">
            <i className="fas fa-building"></i> Industries
          </span>
          <h2 className="section-title" style={{ maxWidth: '500px', margin: '0 auto 16px' }}>
            Built for Industrial Teams
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Tailored AI training for high-stakes environments
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
          maxWidth: '960px',
          margin: '0 auto'
        }}>
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(16, 138, 0, 0.12)' }}
              style={{
                background: 'var(--white)',
                borderRadius: 'var(--radius-lg)',
                padding: '40px 28px',
                textAlign: 'center',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
                cursor: 'default',
                transition: 'all 0.35s ease'
              }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '18px',
                background: `${ind.color}18`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: ind.color,
                fontSize: '1.5rem'
              }}>
                <i className={`fas ${ind.icon}`}></i>
              </div>
              <h3 style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--text)',
                margin: 0,
                letterSpacing: '-0.01em'
              }}>
                {ind.label}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries
