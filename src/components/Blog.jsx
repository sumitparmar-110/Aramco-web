import { motion } from 'framer-motion'

const articles = [
  {
    tag: 'AI Training',
    date: 'Apr 10, 2026',
    title: 'How AI Simulations Are Revolutionizing Workplace Feedback',
    desc: 'Discover how behavioral AI helps teams practice difficult conversations safely.',
    gradient: 'linear-gradient(135deg, #108a00, #22c55e)',
    img: '/img/oil_refinery_hero.png'
  },
  {
    tag: 'Behavioral Science',
    date: 'Apr 5, 2026',
    title: 'The 3R Framework: Receive, Reflect, Respond',
    desc: 'A proven model for transforming defensive reactions into growth opportunities.',
    gradient: 'linear-gradient(135deg, #0d6e00, #108a00)',
    img: '/img/oil_refinery_aerial.png'
  },
  {
    tag: 'Case Study',
    date: 'Mar 28, 2026',
    title: 'Manufacturing Team Sees 85% Confidence Boost',
    desc: 'Real results from deploying AI-powered feedback training at scale.',
    gradient: 'linear-gradient(135deg, #22c55e, #16a34a)',
    img: '/img/oil_refinery_night.png'
  }
]

const Blog = () => {
  return (
    <section id="insights" style={{ background: 'var(--white)', padding: '120px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <span className="section-label">
              <i className="fas fa-lightbulb"></i> Insights & Learning
            </span>
            <h2 className="section-title">Latest from Our Team</h2>
          </div>
          <a href="#" className="btn btn-outline" style={{ padding: '12px 28px' }}>
            View All <i className="fas fa-arrow-right" style={{ fontSize: '0.8rem' }}></i>
          </a>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {articles.map((article, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              style={{
                background: 'var(--white)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.35s ease'
              }}
            >
              {/* Article thumbnail */}
              <div style={{ height: '180px', overflow: 'hidden' }}>
                <img
                  src={article.img}
                  alt={article.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              {/* Color accent bar */}
              <div style={{ height: '3px', background: article.gradient }} />

              {/* Card body */}
              <div style={{ padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <span style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: 'var(--primary)',
                    background: 'rgba(16, 138, 0, 0.08)',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {article.tag}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>
                    {article.date}
                  </span>
                </div>

                <h3 style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: 'var(--text)',
                  marginBottom: '10px',
                  lineHeight: 1.35,
                  letterSpacing: '-0.02em'
                }}>
                  {article.title}
                </h3>

                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.88rem',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  {article.desc}
                </p>

                <div style={{
                  marginTop: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--primary)',
                  fontSize: '0.85rem',
                  fontWeight: 600
                }}>
                  Read more <i className="fas fa-arrow-right" style={{ fontSize: '0.7rem' }}></i>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
