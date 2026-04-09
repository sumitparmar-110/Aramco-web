const Projects = () => {
  return (
    <section id="industries" style={{ background: 'var(--primary)', padding: '140px 0', color: 'white' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '100px', alignItems: 'center' }}>
          <div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '20px' }}>GLOBAL IMPACT</p>
            <h2 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '40px', color: 'white' }}>Our Services Reach <br/> Industries Worldwide</h2>
            
            <div style={{ display: 'grid', gap: '40px', marginBottom: '50px' }}>
               <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                  <i className="fas fa-satellite" style={{ fontSize: '1.8rem', marginTop: '5px' }}></i>
                  <div>
                    <h4 style={{ margin: 0, fontWeight: 800, fontSize: '1.25rem' }}>Unified Standards</h4>
                    <p style={{ margin: '15px 0 0', opacity: 0.8, fontSize: '1.05rem', lineHeight: 1.6 }}>Consistency across international borders with localized behavioral protocols.</p>
                  </div>
               </div>
               <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                  <i className="fas fa-microchip" style={{ fontSize: '1.8rem', marginTop: '5px' }}></i>
                  <div>
                    <h4 style={{ margin: 0, fontWeight: 800, fontSize: '1.25rem' }}>Digital Behavioral Mesh</h4>
                    <p style={{ margin: '15px 0 0', opacity: 0.8, fontSize: '1.05rem', lineHeight: 1.6 }}>AI feedback loops integrated into daily plant operational workflows.</p>
                  </div>
               </div>
            </div>
            
            <a href="#" className="btn btn-primary-inverse" style={{ padding: '18px 50px', borderRadius: '8px' }}>VIEW LOCATIONS</a>
          </div>
          
          <div style={{ textAlign: 'right', position: 'relative' }}>
             <i className="fas fa-globe-asia" style={{ fontSize: '30rem', color: 'rgba(255,255,255,0.1)' }}></i>
             <div style={{ position: 'absolute', top: '50%', right: '0', transform: 'translateY(-50%)', textAlign: 'right' }}>
                <strong style={{ fontSize: '12rem', fontWeight: 900, lineHeight: 0.8, display: 'block' }}>1K+</strong>
                <p style={{ fontSize: '1.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'rgba(255,255,255,0.9)', marginTop: '20px' }}>Global Projects Enabled</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
