import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'

const Counter = ({ value, duration = 2, suffix = '' }) => {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 })
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView) motionValue.set(value)
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat('en-US').format(latest.toFixed(0)) + suffix
      }
    })
  }, [springValue, suffix])

  return <span ref={ref}>0{suffix}</span>
}

const Stats = () => {
  const stats = [
    {
      num: 85, suffix: '%',
      label: 'Confidence Boost',
      sub: 'After AI-powered practice sessions',
      icon: 'fa-shield-halved',
      gradient: 'linear-gradient(135deg, #108a00, #22c55e)'
    },
    {
      num: 70, suffix: '%',
      label: 'Reduced Defensive Reactions',
      sub: 'Measured behavioral improvement',
      icon: 'fa-chart-line',
      gradient: 'linear-gradient(135deg, #0d6e00, #108a00)'
    },
    {
      num: 3, suffix: 'X',
      label: 'Higher Engagement',
      sub: 'Compared to traditional training',
      icon: 'fa-bolt',
      gradient: 'linear-gradient(135deg, #22c55e, #16a34a)'
    }
  ]

  return (
    <section style={{ padding: '100px 0', background: 'var(--bg)', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8, boxShadow: '0 24px 50px rgba(16, 138, 0, 0.15)' }}
              style={{
                background: 'var(--white)',
                padding: '36px 28px',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                position: 'relative',
                transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                overflow: 'hidden'
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: s.gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.1rem',
                boxShadow: '0 8px 20px rgba(16, 138, 0, 0.25)'
              }}>
                <i className={`fas ${s.icon}`}></i>
              </div>

              <div>
                <h3 style={{
                  fontSize: '3.2rem',
                  fontWeight: 800,
                  color: 'var(--text)',
                  lineHeight: 1,
                  margin: '0 0 8px 0',
                  letterSpacing: '-0.03em'
                }}>
                  <Counter value={s.num} suffix={s.suffix} />
                </h3>
                <h4 style={{
                  fontSize: '1rem',
                  color: 'var(--text)',
                  fontWeight: 700,
                  margin: '0 0 8px 0',
                  letterSpacing: '-0.01em'
                }}>
                  {s.label}
                </h4>
                <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                  {s.sub}
                </p>
              </div>

              <div style={{
                position: 'absolute',
                bottom: 0,
                left: '28px',
                right: '28px',
                height: '3px',
                borderRadius: '2px 2px 0 0',
                background: s.gradient
              }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
