'use client'
import { AuthProvider } from './context/AuthContext'
import AuthWrapper from './components/AuthWrapper'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
                <div className="nav-links">
                  <a href="/">Home</a>
                  <a href="/materials">Materials</a>
                  <a href="/images">Gallery</a>
                  <a href="/research">Research</a>
                  <a href="/technical">Technical</a>
                  <a href="/ui-ux">UI/UX</a>
                  <a href="/business">Business</a>
                  <a href="/mermaid-diagrams">Diagrams</a>
                  <a href="/presentations">Presentations</a>
                </div>
              </div>
            </nav>
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
