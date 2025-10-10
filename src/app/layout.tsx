import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'QuantumGov Revolution - Documentation',
  description: 'Comprehensive documentation for the QuantumGov platform - quantum-enhanced democratic governance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-brand">
              <h1>QuantumGov Revolution</h1>
              <span>Documentation Hub</span>
            </div>
            <div className="nav-links">
              <a href="/">Home</a>
              <a href="/research">Research</a>
              <a href="/technical">Technical</a>
              <a href="/ui-ux">UI/UX</a>
              <a href="/business">Business</a>
            </div>
          </div>
        </nav>
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