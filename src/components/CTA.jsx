const CTA = () => {
  return (
    <section id="contact" style={{ 
      backgroundImage: 'url("/img/oil_refinery_night.png")', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '60px 0',
      position: 'relative'
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,30,0,0.85)' }}></div>
      <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '900px' }}>
        <div className="card" style={{ 
          background: 'var(--white-pure)', 
          padding: '30px 50px', 
          display: 'grid', 
          gridTemplateColumns: '1fr 1.5fr', 
          gap: '30px', 
          alignItems: 'center',
          boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
          border: 'none',
          borderRadius: '12px'
        }}>
           <h2 style={{ fontSize: '1.8rem', fontWeight: 900, margin: 0, color: 'var(--dark)', lineHeight: 1.1 }}>Join The <br/> Program Today</h2>
           <div style={{ display: 'flex', gap: '15px' }}>
              <input type="text" placeholder="Your Name" style={{ background: 'var(--bg)', padding: '15px', borderRadius: '8px', border: '1px solid var(--border)', flex: 1, fontSize: '0.95rem', fontFamily: 'var(--font-ui)' }} />
              <input type="email" placeholder="Email" style={{ background: 'var(--bg)', padding: '15px', borderRadius: '8px', border: '1px solid var(--border)', flex: 1, fontSize: '0.95rem', fontFamily: 'var(--font-ui)' }} />
              <button className="btn btn-primary" style={{ padding: '15px 30px', fontWeight: 700, borderRadius: '8px', fontSize: '0.9rem' }}>JOIN</button>
           </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
