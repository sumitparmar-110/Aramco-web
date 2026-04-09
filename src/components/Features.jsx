const Features = () => {
  return (
    <section id="features" style={{ background: 'var(--dark)', padding: '140px 0', color: 'white' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px' }}>
          <div>
            <p style={{ color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '15px' }}>SOLUTIONS</p>
            <h2 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.2, color: 'white' }}>Technical Solutions For <br/> Industry Research</h2>
          </div>
          <a href="#" className="btn btn-primary" style={{ padding: '20px 50px' }}>READ MORE</a>
        </div>
        
        <div style={{ position: 'relative' }}>
           <img 
             src="/img/oil_refinery_aerial.png" 
             alt="Factory" 
             style={{ width: '100%', height: '600px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 40px 100px rgba(0,0,0,0.5)' }}
           />
           <div style={{ 
             position: 'absolute', 
             bottom: '-50px', 
             left: '50px', 
             right: '50px', 
             display: 'grid', 
             gridTemplateColumns: 'repeat(4, 1fr)', 
             gap: '30px' 
           }}>
             {[
               { title: 'AI Monitoring', icon: 'fa-robot', desc: 'Real-time behavioral tracking.' },
               { title: 'Expert Analytics', icon: 'fa-chart-pie', desc: 'Deep dive into response patterns.' },
               { title: 'Global Training', icon: 'fa-network-wired', desc: 'Standards across continents.' },
               { title: 'Safety Protocol', icon: 'fa-shield-virus', desc: 'Minimizing factory floor risk.' }
             ].map((item, i) => (
               <div key={i} className="card" style={{ padding: '35px', textAlign: 'center' }}>
                  <i className={`fas ${item.icon}`} style={{ color: 'var(--primary)', fontSize: '2.2rem', marginBottom: '20px' }}></i>
                  <h4 style={{ margin: '0 0 12px', fontSize: '1.25rem', fontWeight: 900, color: 'var(--dark)' }}>{item.title}</h4>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.6 }}>{item.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </div>
    </section>
  )
}

export default Features
