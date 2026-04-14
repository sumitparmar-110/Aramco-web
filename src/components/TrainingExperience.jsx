import { motion } from 'framer-motion'

const experiences = [
  {
    icon: 'fa-comments',
    title: 'Practice Feedback Conversations',
    desc: 'Realistic dialogue simulations',
    bg: 'linear-gradient(135deg, #108a00, #22c55e)',
    shadow: 'rgba(16, 138, 0, 0.3)'
  },
  {
    icon: 'fa-microphone-lines',
    title: 'Improve Communication Style',
    desc: 'Tone and clarity analysis',
    bg: 'linear-gradient(135deg, #0d6e00, #108a00)',
    shadow: 'rgba(13, 110, 0, 0.3)'
  },
  {
    icon: 'fa-hand-fist',
    title: 'Build Confidence Under Pressure',
    desc: 'High-stakes scenario training',
    bg: 'linear-gradient(135deg, #22c55e, #16a34a)',
    shadow: 'rgba(34, 197, 94, 0.3)'
  },
  {
    icon: 'fa-heart-pulse',
    title: 'Learn Emotional Control',
    desc: 'Manage reactions effectively',
    bg: 'linear-gradient(135deg, #108a00, #0d6e00)',
    shadow: 'rgba(16, 138, 0, 0.3)'
  },
  {
    icon: 'fa-robot',
    title: 'Run AI Simulations',
    desc: 'Powered by behavioral AI',
    bg: 'linear-gradient(135deg, #16a34a, #108a00)',
    shadow: 'rgba(22, 163, 74, 0.3)'
  }
]

const TrainingExperience = () => {
  return (
    <section id="platform" style={{ background: 'var(--white)', padding: '120px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
          <span className="section-label">
            <i className="fas fa-wand-magic-sparkles"></i> Training Experience
          </span>
          <h2 className="section-title" style={{ maxWidth: '550px', margin: '0 auto 16px' }}>
            What You Can Achieve
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Interactive experiences designed to build real-world skills
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
          gap: '18px'
        }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -10, scale: 1.03 }}
              style={{
                background: exp.bg,
                borderRadius: 'var(--radius-lg)',
                padding: '36px 24px',
                textAlign: 'center',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.35s ease',
                boxShadow: `0 8px 30px ${exp.shadow}`
              }}
            >
              {/* Background decoration */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                pointerEvents: 'none'
              }} />

              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: 'rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                backdropFilter: 'blur(10px)',
                color: 'white',
                fontSize: '1.3rem'
              }}>
                <i className={`fas ${exp.icon}`}></i>
              </div>

              <h3 style={{
                color: 'white',
                fontSize: '1rem',
                fontWeight: 700,
                marginBottom: '8px',
                lineHeight: 1.3
              }}>
                {exp.title}
              </h3>

              <p style={{
                color: 'rgba(255,255,255,0.75)',
                fontSize: '0.82rem',
                margin: 0,
                lineHeight: 1.5
              }}>
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrainingExperience
