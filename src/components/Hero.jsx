const Hero = () => {
  return (
    <section className="hero" id="home" style={{ 
      backgroundImage: 'url("/img/oil_refinery_hero.png")', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="hero-overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(0,30,0,0.65)', zIndex: 1 }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 0.7fr)', gap: '100px', alignItems: 'center' }}>
          <div>
            <p style={{ color: 'var(--white-pure)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '20px' }}>
               Industrial Workforce Training
            </p>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'white', fontWeight: 900, lineHeight: 1.1, marginBottom: '35px' }}>
               Innovative Manufacturing <br/> & Construction Solutions
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', maxWidth: '650px', marginBottom: '50px', lineHeight: 1.6 }}>
               A structured, AI-powered learning experience designed to help industrial professionals respond to feedback with clarity, confidence, and control.
            </p>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
               <a href="#" className="btn btn-primary" style={{ padding: '20px 50px', fontSize: '1rem' }}>GET STARTED</a>
               <div style={{ display: 'flex', gap: '15px' }}>
                  <button style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'white', color: 'var(--primary)', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}><i className="fas fa-play"></i></button>
                  <span style={{ color: 'white', fontWeight: 700, fontSize: '1.1rem' }}>Watch Video</span>
               </div>
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
             <div className="hero-composition" style={{ position: 'relative', zIndex: 20 }}>
                {/* Main Mascot Image */}
                <img 
                   src="/img/industrial_worker_mascot.png" 
                   alt="Mascot" 
                   className="hero-mascot"
                   style={{ 
                      width: '100%', 
                      borderRadius: '30px', 
                      boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
                      animation: 'float 6s ease-in-out infinite',
                      position: 'relative',
                      zIndex: 10
                   }} 
                />

                {/* Bottom Stats Bar */}
                <div className="stats-bar">
                   <button className="btn-review">
                      Review's <i className="fas fa-arrow-right" style={{ transform: 'rotate(-45deg)' }}></i>
                   </button>
                   <div>
                      <h4 style={{ margin: 0, color: 'white', fontSize: '1.5rem', fontWeight: 900 }}>15k+</h4>
                      <p style={{ opacity: 0.7, fontSize: '0.8rem', fontWeight: 500, color: 'white' }}>People are already <br/> with us</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
