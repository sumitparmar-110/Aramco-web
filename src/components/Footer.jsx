const Footer = () => {
   return (
      <footer style={{ background: 'var(--dark)', color: 'white', padding: '80px 0 40px' }}>
         <div className="container">
            <div style={{
               display: 'grid',
               gridTemplateColumns: '1.5fr 1fr 1fr 1.5fr',
               gap: '40px',
               paddingBottom: '50px'
            }}>
               <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                     <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: 'var(--gradient)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '0.85rem',
                        fontWeight: 800
                     }}>A</div>
                     <span style={{ fontSize: '1.3rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
                        Aramco<span style={{ color: 'var(--primary-light)' }}>.</span>
                     </span>
                  </div>
                  <p style={{
                     color: 'rgba(255,255,255,0.4)',
                     fontSize: '0.9rem',
                     lineHeight: 1.7,
                     maxWidth: '280px'
                  }}>
                     AI-powered training platform for industrial professionals to improve feedback, communication, and performance.
                  </p>
                  <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                     {['linkedin', 'twitter', 'youtube'].map(s => (
                        <a key={s} href="#" style={{
                           width: '36px',
                           height: '36px',
                           borderRadius: '10px',
                           background: 'rgba(255,255,255,0.05)',
                           border: '1px solid rgba(255,255,255,0.08)',
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center',
                           color: 'rgba(255,255,255,0.4)',
                           fontSize: '0.85rem',
                           textDecoration: 'none',
                           transition: 'all 0.3s ease'
                        }}>
                           <i className={`fab fa-${s}`}></i>
                        </a>
                     ))}
                  </div>
               </div>

               <div>
                  <h4 style={{
                     color: 'rgba(255,255,255,0.9)',
                     marginBottom: '24px',
                     fontSize: '0.9rem',
                     fontWeight: 700,
                     textTransform: 'uppercase',
                     letterSpacing: '0.08em'
                  }}>Platform</h4>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '12px' }}>
                     {['Features', 'How it Works', 'Pricing', 'API'].map(item => (
                        <li key={item}>
                           <a href="#" style={{
                              color: 'rgba(255,255,255,0.4)',
                              textDecoration: 'none',
                              fontSize: '0.88rem',
                              transition: 'color 0.3s ease'
                           }}>{item}</a>
                        </li>
                     ))}
                  </ul>
               </div>

               <div>
                  <h4 style={{
                     color: 'rgba(255,255,255,0.9)',
                     marginBottom: '24px',
                     fontSize: '0.9rem',
                     fontWeight: 700,
                     textTransform: 'uppercase',
                     letterSpacing: '0.08em'
                  }}>Company</h4>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '12px' }}>
                     {['About', 'Careers', 'Privacy', 'Terms'].map(item => (
                        <li key={item}>
                           <a href="#" style={{
                              color: 'rgba(255,255,255,0.4)',
                              textDecoration: 'none',
                              fontSize: '0.88rem',
                              transition: 'color 0.3s ease'
                           }}>{item}</a>
                        </li>
                     ))}
                  </ul>
               </div>

               <div>
                  <h4 style={{
                     color: 'rgba(255,255,255,0.9)',
                     marginBottom: '24px',
                     fontSize: '0.9rem',
                     fontWeight: 700,
                     textTransform: 'uppercase',
                     letterSpacing: '0.08em'
                  }}>Stay Updated</h4>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', marginBottom: '16px', lineHeight: 1.6 }}>
                     Get the latest insights on AI training delivered to your inbox.
                  </p>
                  <div style={{ display: 'flex', gap: '8px' }}>
                     <input
                        type="email"
                        placeholder="Your email"
                        style={{
                           flex: 1,
                           padding: '10px 14px',
                           borderRadius: '10px',
                           border: '1px solid rgba(255,255,255,0.1)',
                           background: 'rgba(255,255,255,0.05)',
                           color: 'white',
                           fontSize: '0.85rem',
                           fontFamily: 'Inter, sans-serif',
                           outline: 'none'
                        }}
                     />
                     <button className="btn btn-primary" style={{ padding: '10px 18px', fontSize: '0.8rem', borderRadius: '10px' }}>
                        <i className="fas fa-arrow-right"></i>
                     </button>
                  </div>
               </div>
            </div>

            <div style={{
               borderTop: '1px solid rgba(255,255,255,0.06)',
               paddingTop: '28px',
               textAlign: 'center',
               color: 'rgba(255,255,255,0.2)',
               fontSize: '0.82rem'
            }}>
               © 2026 Aramco Training Platform. All rights reserved.
            </div>
         </div>

         <style>{`
            @media (max-width: 900px) {
               footer .container > div:first-child {
                  grid-template-columns: 1fr 1fr !important;
               }
            }
            @media (max-width: 600px) {
               footer .container > div:first-child {
                  grid-template-columns: 1fr !important;
               }
            }
         `}</style>
      </footer>
   )
}

export default Footer
