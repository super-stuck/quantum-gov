'use client'
import { useState } from 'react'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-brand">
              <h1>QuantumGov Revolution</h1>
              <span>Documentation Hub</span>
            </div>
            <button 
              className="mobile-menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
            >
              <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
              <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
              <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
            </button>
            <div className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
              <a href="/" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="/research" onClick={() => setIsMenuOpen(false)}>Research</a>
              <a href="/technical" onClick={() => setIsMenuOpen(false)}>Technical</a>
              <a href="/ui-ux" onClick={() => setIsMenuOpen(false)}>UI/UX</a>
              <a href="/business" onClick={() => setIsMenuOpen(false)}>Business</a>
            </div>
          </div>
        </nav>
        {isMenuOpen && (
          <div 
            className="mobile-backdrop" 
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
        <main className="main-content">
          {children}
        </main>
        <footer className="footer">
          <p>&copy; 2024 QuantumGov Revolution. Advancing democratic governance through quantum technologies.</p>
        </footer>
      </body>
    </html>
  )
}
