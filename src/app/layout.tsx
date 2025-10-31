'use client'
import { useState } from 'react'
import { AuthProvider } from './context/AuthContext'
import AuthWrapper from './components/AuthWrapper'
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
        <AuthProvider>
          <AuthWrapper>
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
                  <a href="/" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); window.location.href = '/'; }}>Home</a>
                  <a href="/materials" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); window.location.href = '/materials'; }}>Materials</a>
                  <a href="/images" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); window.location.href = '/images'; }}>Gallery</a>
                  <a href="/research" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); window.location.href = '/research'; }}>Research</a>
                  <a href="/technical" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); window.location.href = '/technical'; }}>Technical</a>
                  <a href="/ui-ux" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); window.location.href = '/ui-ux'; }}>UI/UX</a>
                  <a href="/business" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); window.location.href = '/business'; }}>Business</a>
                  <a href="/mermaid-diagrams" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); window.location.href = '/mermaid-diagrams'; }}>Diagrams</a>
                  <a href="/presentations" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); window.location.href = '/presentations'; }}>Presentations</a>
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
          </AuthWrapper>
        </AuthProvider>
      </body>
    </html>
  )
}
