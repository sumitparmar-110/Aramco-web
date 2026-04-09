import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'

const Counter = ({ value, duration = 2, suffix = '' }) => {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(latest.toFixed(0)) + suffix
      }
    })
  }, [springValue, suffix])

  return <span ref={ref}>0{suffix}</span>
}

const Stats = () => {
  const stats = [
    { 
      num: 85, 
      suffix: '%', 
      label: 'Improved Confidence', 
      sub: 'Participants reported clarity through AI simulations.',
      icon: 'fa-user-shield',
      color: '#108a00'
    },
    { 
      num: 70, 
      suffix: '%', 
      label: 'Reduced Defensiveness', 
      sub: 'Measured behavioral shift in professional feedback.',
      icon: 'fa-chart-line',
      color: '#002e00'
    },
    { 
      num: 3, 
      suffix: 'X', 
      label: 'Higher Engagement', 
      sub: 'Increased interaction during complex training modules.',
      icon: 'fa-bolt',
      color: '#108a00'
    }
  ]

  return (
    <section className="stats" style={{ padding: '100px 0', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Background Element */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, var(--border), transparent)' }}></div>

      <div className="container" style={{ maxWidth: '1000px' }}> {/* Reduced container width */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}> {/* Adjusted gap */}
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 20px 40px rgba(16, 138, 0, 0.15)', // Enhanced shadow on hover
                borderColor: 'rgba(16, 138, 0, 0.2)'
              }}
              style={{
                background: 'white',
                padding: '40px 30px',
                borderRadius: '24px',
                boxShadow: '0 10px 30px rgba(16, 138, 0, 0.08)', // Light green shadow
                border: '1px solid rgba(16, 138, 0, 0.1)', // Subtle green border
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                position: 'relative',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {/* Card Header: Icon & Visual Detail */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '12px', 
                  background: 'rgba(16, 138, 0, 0.05)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  fontSize: '1.2rem'
                }}>
                  <i className={`fas ${s.icon}`}></i>
                </div>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: s.color, opacity: 0.4 }}></div>
              </div>

              {/* Metric Content */}
              <div>
                <h3 style={{ fontSize: '3.8rem', fontWeight: 900, color: 'var(--dark)', lineHeight: 1, margin: '0 0 8px 0', fontFamily: 'var(--font-heading)' }}>
                  <Counter value={s.num} suffix={s.suffix} />
                </h3>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--dark)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 12px 0' }}>
                  {s.label}
                </h4>
                <p style={{ margin: 0, color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {s.sub}
                </p>
              </div>

              {/* Visual "Growth" Border Bottom */}
              <div style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: '30px', 
                right: '30px', 
                height: '3px', 
                borderRadius: '2px 2px 0 0', 
                background: `linear-gradient(90deg, ${s.color}, rgba(16, 138, 0, 0.15))` 
              }}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
