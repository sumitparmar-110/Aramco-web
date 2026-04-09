const Blog = () => {
  return (
    <section id="articles" style={{ background: 'var(--white)', padding: '140px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: '100px', alignItems: 'flex-start' }}>
          <div>
            <p style={{ color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '20px' }}>ARTICLES & BLOG</p>
            <h2 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.2, marginBottom: '50px', color: 'var(--dark)' }}>Articles & Blog Posts <br/> With Useful Information</h2>
            <img 
               src="/img/oil_refinery_pipes.png" 
               alt="Industrial Blog" 
               style={{ width: '100%', borderRadius: '12px', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}
            />
            <div style={{ marginTop: '50px' }}>
               <p style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.95rem', marginBottom: '15px' }}>PRO TIPS — JANUARY 15, 2026</p>
               <h3 style={{ fontSize: '2.2rem', fontWeight: 900, margin: '0 0 25px', color: 'var(--dark)' }}>Top Manufacturing Trends Driving Industrial Future</h3>
               <p style={{ color: 'var(--muted)', fontSize: '1.2rem', lineHeight: 1.8 }}>Comprehensive analysis of behavioral shifts in high-stakes environments and the role of AI intelligence in workforce scaling.</p>
            </div>
          </div>
          
          <div style={{ display: 'grid', gap: '40px', marginTop: '120px' }}>
             {[
               { date: 'JAN 18, 2026', title: 'Strategy For The Weather Industry Pipeline', img: '/img/oil_refinery_hero.png' },
               { date: 'JAN 20, 2026', title: 'Explaining The Future of Workforce Growth', img: '/img/oil_refinery_aerial.png' },
               { date: 'JAN 22, 2026', title: 'Developing The Modern Industrial Standard', img: '/img/oil_refinery_night.png' }
             ].map((post, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 0.6fr', gap: '30px', alignItems: 'center' }}>
                   <div>
                      <p style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.85rem', marginBottom: '12px' }}>{post.date}</p>
                      <h4 style={{ fontSize: '1.35rem', fontWeight: 800, margin: 0, lineHeight: 1.4, color: 'var(--dark)' }}>{post.title}</h4>
                   </div>
                   <img src={post.img} style={{ width: '100%', height: '130px', objectFit: 'cover', borderRadius: '12px' }} alt="Article Thumb" />
                </div>
             ))}
             <a href="#" className="btn btn-outline" style={{ alignSelf: 'flex-start', padding: '18px 45px', marginTop: '40px' }}>VIEW ALL ARTICLES</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
