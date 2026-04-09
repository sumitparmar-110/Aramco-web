const Footer = () => {
   return (
      <footer className="footer" id="contact" style={{ background: 'var(--dark)', color: 'white', padding: '0 0 60px' }}>
         <div className="container" style={{ maxWidth: '1000px' }}>

            {/* Transform CTA Box (High Impact Overlay) - Narrower & Medium */}
            <div style={{
               background: 'var(--primary)',
               padding: '40px 50px',
               borderRadius: '16px',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'space-between',
               marginBottom: '60px',
               marginTop: '-60px',
               position: 'relative',
               zIndex: 10,
               color: 'white',
               boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
               border: '1px solid rgba(255,255,255,0.1)'
            }}>
               <div>
                  <h2 style={{ fontSize: '2rem', lineHeight: 1.1, margin: 0, fontWeight: 900, color: 'white' }}>Transform Your <br /> Space with Us!</h2>
               </div>
               <div style={{ display: 'flex', gap: '15px' }}>
                  <input type="email" placeholder="Email Address" style={{ padding: '15px', borderRadius: '8px', border: 'none', width: '250px', fontSize: '0.95rem', fontFamily: 'var(--font-ui)' }} />
                  <button className="btn btn-primary-inverse" style={{ padding: '15px 35px', fontWeight: 900, borderRadius: '8px', fontSize: '0.9rem' }}>SUBSCRIBE</button>
               </div>
            </div>

            {/* Sitemap & Info Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1.5fr', gap: '40px', padding: '50px 0 30px' }}>
               <div>
                  <div className="brand" style={{ color: 'white', fontSize: '1.8rem' }}>Aramco<span></span></div>
                  <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '20px', fontSize: '1rem', lineHeight: 1.7 }}>
                     Empowering industrial workforces through unified standards and behavioral safety.
                  </p>
                  <div style={{ display: 'flex', gap: '20px', marginTop: '25px' }}>
                     {['linkedin', 'twitter', 'facebook', 'youtube'].map(s => (
                        <a key={s} href="#" style={{ color: 'white', fontSize: '1.3rem', opacity: 0.4 }}><i className={`fab fa-${s}`}></i></a>
                     ))}
                  </div>
               </div>

               <div>
                  <h4 style={{ color: 'white', marginBottom: '25px', fontSize: '1.1rem' }}>Sitemap</h4>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '10px', fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)' }}>
                     {['Home', 'Methodology', 'Industries', 'Articles'].map(item => (
                        <li key={item} style={{ cursor: 'pointer' }}>{item}</li>
                     ))}
                  </ul>
               </div>

               <div>
                  <h4 style={{ color: 'white', marginBottom: '25px', fontSize: '1.1rem' }}>Info</h4>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '10px', fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)' }}>
                     {['About Us', 'Privacy', 'Terms', 'Careers'].map(item => (
                        <li key={item} style={{ cursor: 'pointer' }}>{item}</li>
                     ))}
                  </ul>
               </div>

               <div>
                  <h4 style={{ color: 'white', marginBottom: '25px', fontSize: '1.1rem' }}>Contact</h4>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '20px', fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)' }}>
                     <li style={{ display: 'flex', gap: '10px' }}>
                        <i className="fas fa-map-marker-alt" style={{ color: 'var(--primary)', marginTop: '3px' }}></i>
                        <span>100 Industrial Pkwy, <br />London, UK</span>
                     </li>
                     <li style={{ display: 'flex', gap: '10px' }}>
                        <i className="fas fa-phone" style={{ color: 'var(--primary)' }}></i>
                        <span>+44 20 7946 0000</span>
                     </li>
                  </ul>
               </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '30px', textAlign: 'center', color: 'rgba(255,255,255,0.2)', fontSize: '0.85rem' }}>
               © 2026 FeedbackPRO. Industrial Excellence.
            </div>
         </div>
      </footer>
   )
}

export default Footer
