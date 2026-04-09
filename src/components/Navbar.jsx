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
          <span style={{ color: scrolled ? 'var(--text)' : 'white' }}>Aramco</span>
        </Link>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="fas fa-bars" style={{ color: scrolled ? 'var(--dark)' : 'white' }}></i>
        </button>

        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          {['Home', 'Methodology', 'Industries', 'Articles'].map((item) => {
            const id = item.toLowerCase()
            const linkPath = location.pathname === '/' ? `#${id}` : `/#${id}`

            return (
              <a
                key={item}
                href={linkPath}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            )
          })}
          <a
            href="https://lmsathena.com/login"
            className="btn btn-primary"
            onClick={() => setIsOpen(false)}
          >
            Login
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
