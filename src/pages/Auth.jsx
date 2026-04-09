import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Auth = () => {
  const handleLoginRedirect = (e) => {
    e.preventDefault()
    window.location.href = 'https://lmsathena.com/login'
  }

  return (
    <div style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1.2fr 1fr', background: '#f3f4f6' }}>
      {/* Left Side: Industrial Visuals */}
      <div style={{
        backgroundImage: 'url("/img/oil_refinery_night.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        padding: '80px'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,30,0,0.8)' }}></div>
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '500px' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px', fontWeight: 700, opacity: 0.8 }}>
            <i className="fas fa-arrow-left"></i> BACK TO HOME
          </Link>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: '30px' }}>
            Master Your <br /> Feedback Loop.
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
            Join 15k+ professionals scaling their industrial expertise with AI-powered behavioral training.
          </p>
        </div>
      </div>

      {/* Right Side: Auth Form (Grey Background) */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px', background: '#f3f4f6' }}>
        <div style={{ width: '100%', maxWidth: '420px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div className="brand" style={{ color: 'var(--text)', fontSize: '2.2rem', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
              <img src="/img/logo.png" alt="Logo" style={{ height: '45px' }} />
              <span>Aramco</span>
            </div>
            <p style={{ color: 'var(--muted)', fontWeight: 500 }}>Welcome back! Please enter your details.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleLoginRedirect} style={{ display: 'grid', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700, fontSize: '0.9rem' }}>Email Address</label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  required
                  style={{ width: '100%', padding: '16px', borderRadius: '10px', border: '1px solid var(--border)', background: 'white', fontFamily: 'var(--font-ui)' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700, fontSize: '0.9rem' }}>Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  required
                  style={{ width: '100%', padding: '16px', borderRadius: '10px', border: '1px solid var(--border)', background: 'white', fontFamily: 'var(--font-ui)' }}
                />
              </div>

              <div style={{ textAlign: 'right' }}>
                <a href="#" style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none' }}>Forgot password?</a>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '18px',
                  fontSize: '1rem',
                  marginTop: '10px'
                }}
              >
                Sign In
              </button>
            </form>
          </motion.div>

          <p style={{ textAlign: 'center', marginTop: '40px', color: 'var(--muted)', fontSize: '0.9rem' }}>
            By continuing, you agree to our <a href="#" style={{ color: 'var(--dark)', fontWeight: 700 }}>Terms of Service</a>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Auth
