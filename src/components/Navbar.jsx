import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`topbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container topbar-inner">
        <Link to="/" className="brand" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="/img/logo.png" alt="Aramco Logo" style={{ height: '35px' }} />
          <span style={{ color: scrolled ? 'var(--text)' : 'white' }}>Aramco<span className="brand-dot">.</span></span>
        </Link>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="fas fa-bars" style={{ color: scrolled ? 'var(--dark)' : 'white' }}></i>
        </button>

        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          {['Platform', 'Features', 'How it Works', 'Insights'].map((item) => {
            const id = item.toLowerCase().replace(/\s+/g, '-')
            const linkPath = location.pathname === '/' ? `#${id}` : `/#${id}`
            return (
              <a key={item} href={linkPath} onClick={() => setIsOpen(false)}>
                {item}
              </a>
            )
          })}
          <a href="#" className="btn btn-ghost" onClick={() => setIsOpen(false)} style={{ padding: '10px 20px' }}>
            Book Demo
          </a>
          <a href="https://lmsathena.com/login" className="btn btn-primary" onClick={() => setIsOpen(false)} style={{ padding: '10px 20px' }}>
            Start Training
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
