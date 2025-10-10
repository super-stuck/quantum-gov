export default function DocsPage() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ marginBottom: '2rem', borderBottom: '2px solid #667eea', paddingBottom: '1rem' }}>
        <h1 style={{ margin: 0, color: '#333' }}>QuantumGov Documentation</h1>
        <p style={{ marginTop: '0.5rem', color: '#666' }}>
          <a href="/" style={{ color: '#667eea' }}>← Back to Home</a>
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
        <div style={{ border: '1px solid #e9ecef', borderRadius: '8px', padding: '1.5rem', background: '#f8f9fa' }}>
          <h3 style={{ margin: '0 0 1rem 0', color: '#333' }}>🎓 Research</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a href="/docs/theory" style={{ color: '#667eea', textDecoration: 'none' }}>Theoretical Framework</a>
            <a href="/docs/research-synthesis" style={{ color: '#667eea', textDecoration: 'none' }}>Research Synthesis</a>
            <a href="/docs/virtual-utopia-overview" style={{ color: '#667eea', textDecoration: 'none' }}>Virtual Utopia Overview</a>
            <a href="/docs/executive-summary" style={{ color: '#667eea', textDecoration: 'none' }}>Executive Summary</a>
            <a href="/docs/academic-package" style={{ color: '#667eea', textDecoration: 'none' }}>Academic Submission Package</a>
          </div>
        </div>

        <div style={{ border: '1px solid #e9ecef', borderRadius: '8px', padding: '1.5rem', background: '#f8f9fa' }}>
          <h3 style={{ margin: '0 0 1rem 0', color: '#333' }}>💼 Business</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a href="/docs/pitch-deck" style={{ color: '#667eea', textDecoration: 'none' }}>Investor Pitch Deck</a>
            <a href="/docs/roadmap" style={{ color: '#667eea', textDecoration: 'none' }}>Implementation Roadmap</a>
          </div>
        </div>

        <div style={{ border: '1px solid #e9ecef', borderRadius: '8px', padding: '1.5rem', background: '#f8f9fa' }}>
          <h3 style={{ margin: '0 0 1rem 0', color: '#333' }}>🎨 Design</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a href="/images" style={{ color: '#667eea', textDecoration: 'none' }}>Architecture & Design Gallery</a>
            <a href="/docs/visual-materials" style={{ color: '#667eea', textDecoration: 'none' }}>Visual Materials & Diagrams</a>
            <a href="/docs/design-system" style={{ color: '#667eea', textDecoration: 'none' }}>Design System</a>
            <a href="/figma/Social%20R.fig" style={{ color: '#667eea', textDecoration: 'none' }}>Figma File Download</a>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#f8f9ff', borderRadius: '8px', border: '1px solid #667eea' }}>
        <h3 style={{ margin: '0 0 1rem 0', color: '#333' }}>📚 Additional Resources</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#555' }}>LaTeX Papers</h4>
            <a href="/papers/" style={{ color: '#667eea', textDecoration: 'none' }}>Source Files</a>
          </div>
          <div>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#555' }}>Compiled PDFs</h4>
            <a href="/compiled-pdfs/papers/" style={{ color: '#667eea', textDecoration: 'none' }}>Paper PDFs</a>
          </div>
          <div>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#555' }}>Presentations</h4>
            <a href="/compiled-pdfs/presentations/" style={{ color: '#667eea', textDecoration: 'none' }}>Presentation PDFs</a>
          </div>
          <div>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#555' }}>Research</h4>
            <a href="/Quantum_Digital_Polities/" style={{ color: '#667eea', textDecoration: 'none' }}>Research Directory</a>
          </div>
        </div>
      </div>
    </div>
  )
}