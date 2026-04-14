import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    icon: 'fa-robot',
    title: 'AI Simulation',
    desc: 'Practice real workplace conversations with AI-powered scenarios',
    color: '#108a00',
    img: '/img/oil_refinery_pipes.png'
  },
  {
    num: '02',
    icon: 'fa-brain',
    title: 'Instant Feedback',
    desc: 'AI analyzes your tone, reactions, and behavioral patterns in real-time',
    color: '#22c55e',
    img: '/img/industrial_smart_automation.png'
  },
  {
    num: '03',
    icon: 'fa-arrows-rotate',
    title: 'Improve with 3Rs',
    desc: 'Receive → Reflect → Respond — a proven framework for lasting change',
    color: '#0d6e00',
    img: '/img/oil_refinery_aerial.png'
  }
]

const HowItWorks = () => {
  return (
    <section id="how-it-works" style={{ background: 'var(--white)', padding: '120px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
          <span className="section-label">
            <i className="fas fa-route"></i> How It Works
          </span>
          <h2 className="section-title" style={{ maxWidth: '600px', margin: '0 auto 16px' }}>
            Three Steps to Better Performance
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A simple, proven process powered by AI to transform how your team handles feedback
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -8 }}
              style={{
                background: 'var(--white)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
                overflow: 'hidden',
                transition: 'all 0.35s ease'
              }}
            >
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img
                  src={step.img}
                  alt={step.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  left: '15px',
                  background: step.color,
                  color: 'white',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                }}>
                  {step.num}
                </div>
              </div>

              <div style={{ padding: '30px' }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: 'var(--text)',
                  marginBottom: '12px',
                  letterSpacing: '-0.02em'
                }}>
                  {step.title}
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.92rem',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
