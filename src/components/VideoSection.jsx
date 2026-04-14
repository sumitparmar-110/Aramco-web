import { motion } from 'framer-motion'

const VideoSection = () => {
  return (
    <section id="video" style={{
      background: 'var(--gradient-hero)',
      padding: '120px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative bg */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '800px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16,138,0,0.08) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-label" style={{
          background: 'rgba(16, 138, 0, 0.15)',
            color: 'var(--primary-light)'
          }}>
            <i className="fas fa-play"></i> See It In Action
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: 'white',
            marginBottom: '16px',
            letterSpacing: '-0.03em'
          }}>
            See AI Training in Action
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '1.1rem',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: 1.7
          }}>
            Watch how AI transforms feedback into measurable improvement
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            position: 'relative',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: '0 40px 80px rgba(0,0,0,0.4)'
          }}
        >
          {/* Video placeholder */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 'var(--radius-lg)',
            aspectRatio: '16/9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            backdropFilter: 'blur(20px)'
          }}>
            {/* Play button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'var(--gradient)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 12px 40px rgba(16, 138, 0, 0.4)',
                zIndex: 2
              }}
            >
              <i className="fas fa-play" style={{ color: 'white', fontSize: '1.5rem', marginLeft: '4px' }}></i>
            </motion.div>

            {/* Overlay content showing video steps */}
            <div style={{
              position: 'absolute',
              bottom: '30px',
              left: '30px',
              right: '30px',
              display: 'flex',
              gap: '16px',
              justifyContent: 'center'
            }}>
              {[
                { icon: 'fa-user', label: 'Worker receives feedback' },
                { icon: 'fa-face-surprise', label: 'Emotional reaction' },
                { icon: 'fa-robot', label: 'AI-guided improvement' }
              ].map((step, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '12px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <i className={`fas ${step.icon}`} style={{ color: 'var(--primary-light)', fontSize: '0.85rem' }}></i>
                  <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.78rem', fontWeight: 500 }}>
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default VideoSection
