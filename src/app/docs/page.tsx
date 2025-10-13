export default function DocsPage() {
  return (
    <div className="docs-container">
      <div className="docs-header">
        <h1>QuantumGov Documentation</h1>
        <p>
          <a href="/">← Back to Home</a>
        </p>
      </div>

      <div className="docs-grid">
        <div className="docs-card">
          <h3>🎓 Research</h3>
          <div className="docs-links">
            <a href="/docs/theory">Theoretical Framework</a>
            <a href="/docs/research-synthesis">Research Synthesis</a>
            <a href="/docs/virtual-utopia-overview">Virtual Utopia Overview</a>
            <a href="/docs/executive-summary">Executive Summary</a>
            <a href="/docs/academic-package">Academic Submission Package</a>
          </div>
        </div>

        <div className="docs-card">
          <h3>💼 Business</h3>
          <div className="docs-links">
            <a href="/docs/pitch-deck">Investor Pitch Deck</a>
            <a href="/docs/roadmap">Implementation Roadmap</a>
          </div>
        </div>

        <div className="docs-card">
          <h3>🎨 Design</h3>
          <div className="docs-links">
            <a href="/images">Architecture & Design Gallery</a>
            <a href="/docs/visual-materials">Visual Materials & Diagrams</a>
            <a href="/docs/design-system">Design System</a>
            <a href="/ui/QuantumGov_UI_Designs.fig">Figma File Download</a>
          </div>
        </div>
      </div>

      <div className="docs-resources">
        <h3>📚 Additional Resources</h3>
        <div className="resources-grid">
          <div className="resource-item">
            <h4>LaTeX Papers</h4>
            <a href="/papers">Source Files</a>
          </div>
          <div className="resource-item">
            <h4>Compiled PDFs</h4>
            <a href="/papers" target="_blank">Paper PDFs</a>
          </div>
          <div className="resource-item">
            <h4>Presentations</h4>
            <a href="/diagrams" target="_blank">Presentation PDFs</a>
          </div>
          <div className="resource-item">
            <h4>Research</h4>
            <a href="/materials" target="_blank">Research Directory</a>
          </div>
        </div>
      </div>
    </div>
  )
}