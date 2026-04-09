const About = () => {
  return (
    <section id="about" style={{ background: 'var(--primary)', padding: '100px 0', color: 'white' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '80px', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
             <img 
               src="/img/oil_refinery_pipes.png" 
               alt="Industrial" 
               style={{ width: '100%', borderRadius: '12px', boxShadow: '0 30px 60px rgba(0,0,0,0.3)' }}
             />
             <div style={{ 
               position: 'absolute', 
               bottom: '-20px', 
               right: '-20px', 
               background: 'var(--white-pure)', 
               padding: '30px',
               borderRadius: '12px',
               textAlign: 'center',
               boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
               color: 'var(--dark)'
             }}>
                <strong style={{ fontSize: '3.5rem', display: 'block', lineHeight: 1, fontWeight: 900 }}>25</strong>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: 800, color: 'var(--muted)' }}>Years of <br/> Excellence</span>
             </div>
          </div>
          
          <div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '15px' }}>TRUSTED PARTNER</p>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1.2, marginBottom: '30px', color: 'white' }}>
               Trusted Global Partner For Manufacturing & Industries
            </h2>
            <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.9)', marginBottom: '40px', lineHeight: 1.7 }}>
               Every training module is optimized for high-performance industrial environments where precision and behavior are the bedrock of safety and success.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '40px' }}>
               <div style={{ background: 'rgba(255,255,255,0.1)', padding: '25px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <i className="fas fa-check-circle" style={{ fontSize: '1.5rem', marginBottom: '15px' }}></i>
                  <h4 style={{ margin: 0, fontWeight: 800 }}>Risk Management</h4>
                  <p style={{ marginTop: '10px', fontSize: '0.9rem', opacity: 0.8 }}>Reducing defensive triggers and improving safety compliance.</p>
               </div>
               <div style={{ background: 'rgba(255,255,255,0.1)', padding: '25px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <i className="fas fa-microchip" style={{ fontSize: '1.5rem', marginBottom: '15px' }}></i>
                  <h4 style={{ margin: 0, fontWeight: 800 }}>AI Integration</h4>
                  <p style={{ marginTop: '10px', fontSize: '0.9rem', opacity: 0.8 }}>Personalized growth metrics for every participant.</p>
               </div>
            </div>
            
            <a href="#" className="btn btn-primary-inverse" style={{ padding: '18px 45px' }}>READ MORE</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
