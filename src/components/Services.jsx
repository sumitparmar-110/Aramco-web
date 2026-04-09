const Services = () => {
  return (
    <section id="methodology" style={{ background: 'var(--bg)', padding: '80px 0' }}>
      <div className="container">
        <p style={{ color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', textAlign: 'center', marginBottom: '10px' }}>OUR METHODOLOGY</p>
        <h2 style={{ fontSize: '3rem', fontWeight: 900, textAlign: 'center', marginBottom: '60px', color: 'var(--dark)' }}>Work Process</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
          {[
            { 
              num: '01', 
              title: 'Quality Planning', 
              desc: 'Detailed behavioral assessment and baseline metric establishment.',
              img: '/img/oil_refinery_pipes.png'
            },
            { 
              num: '02', 
              title: 'Industrial AI', 
              desc: 'Custom mapping of response triggers and emotional control loops.',
              img: '/img/industrial_smart_automation.png'
            },
            { 
              num: '03', 
              title: 'Excellent Results', 
              desc: 'Deployment of mastery techniques with real-time AI performance monitoring.',
              img: '/img/oil_refinery_aerial.png'
            }
          ].map((item, i) => (
            <div key={i} className="card animate-in" style={{ padding: 0, animationDelay: `${i * 0.2}s` }}>
               <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ 
                    position: 'absolute', 
                    top: '15px', 
                    left: '15px', 
                    background: 'var(--primary)', 
                    color: 'white', 
                    padding: '8px 15px',
                    borderRadius: '4px',
                    fontWeight: 900,
                    fontSize: '0.9rem',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                  }}>{item.num}</div>
               </div>
               <div style={{ padding: '30px' }}>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 900, marginBottom: '15px', color: 'var(--dark)' }}>{item.title}</h3>
                  <p style={{ color: 'var(--muted)', lineHeight: 1.6, fontSize: '1rem', margin: 0 }}>{item.desc}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
