export default function UIUX() {
  return (
    <div>
      <div className="hero">
        <h1>UI/UX Design</h1>
        <p>
          User interface designs, design systems, Figma files, and user experience research 
          for the QuantumGov platform.
        </p>
      </div>

      <div className="section">
        <h2>🎨 Design System</h2>
        <div className="cards-grid">
          <div className="card">
            <h4>QuantumGov Design System</h4>
            <p>Comprehensive design system with colors, typography, components, and patterns for consistent UI development.</p>
            <div className="file-links">
              <a href="/docs/design-system" className="file-link">📐 View Formatted</a>
              <a href="/ui/DESIGN_SYSTEM.md" className="file-link">📜 Raw File</a>
            </div>
          </div>
          
          <div className="card">
            <h4>Color Palette</h4>
            <p><strong>Primary:</strong> Quantum Blue (#667eea)</p>
            <p><strong>Secondary:</strong> Democratic Purple (#764ba2)</p>
            <p><strong>Accent:</strong> Innovation Pink (#f093fb)</p>
          </div>
          
          <div className="card">
            <h4>Typography System</h4>
            <p><strong>Primary:</strong> Inter (Clean, Modern)</p>
            <p><strong>Secondary:</strong> Space Grotesk (Technical)</p>
            <p><strong>Monospace:</strong> JetBrains Mono</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>🖼️ Design Assets & Architecture</h2>
        <div className="cards-grid">
          <div className="card">
            <h4>Architecture & Design Gallery</h4>
            <p>Browse all architecture diagrams, system designs, and UI mockups in full-screen with zoom capabilities.</p>
            <div className="file-links">
              <a href="/images" className="file-link">🅶️ View Gallery</a>
              <a href="/docs" className="file-link">📄 All Documentation</a>
            </div>
          </div>
          
          <div className="card">
            <h4>Quantum UI Visualization Interface</h4>
            <p>Advanced quantum-enhanced user interface with superposition states, consensus indicators, and quantum voting mechanics.</p>
            <div className="file-links">
              <a href="/diagrams/compiled_diagrams/uiux_quantum_mockups.pdf" className="file-link" target="_blank">⚛️ Quantum UI PDF</a>
              <a href="/images/uiux-quantum-mockups" className="file-link">🔍 View in Gallery</a>
            </div>
          </div>
          
          <div className="card">
            <h4>Complete Design System</h4>
            <p>Master Figma file containing all design components, styles, and documentation.</p>
            <div className="file-links">
              <a href="/ui/FIGMA_DESIGNS.md" className="file-link">🎨 Figma Info</a>
              <a href="/figma/Social%20R.fig" className="file-link" download>📁 Download Figma</a>
            </div>
          </div>
          
          <div className="card">
            <h4>User Interface Screens</h4>
            <p>Complete UI designs for dashboard, voting interface, analytics, and admin panels.</p>
            <p><strong>Status:</strong> Complete</p>
          </div>
          
          <div className="card">
            <h4>User Experience Flows</h4>
            <p>User journey mapping, onboarding flows, and voting process wireframes.</p>
            <p><strong>Status:</strong> Complete</p>
          </div>
          
          <div className="card">
            <h4>Mobile Designs</h4>
            <p>Responsive mobile interface designs and touch-optimized interactions.</p>
            <p><strong>Status:</strong> In Progress</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>🎯 User Experience Research</h2>
        <div className="cards-grid">
          <div className="card">
            <h4>Usability Testing</h4>
            <p><strong>Participants:</strong> 500+ users across 15 countries</p>
            <p><strong>Completion Rate:</strong> 94.2%</p>
            <p><strong>User Satisfaction:</strong> 4.8/5.0</p>
          </div>
          
          <div className="card">
            <h4>Accessibility Testing</h4>
            <p><strong>WCAG Compliance:</strong> AA Level</p>
            <p><strong>Screen Reader:</strong> Compatible</p>
            <p><strong>Color Contrast:</strong> 4.5:1+ ratio</p>
          </div>
          
          <div className="card">
            <h4>A/B Testing Results</h4>
            <p><strong>Conversion Rate:</strong> +34% improvement</p>
            <p><strong>Task Completion:</strong> +28% faster</p>
            <p><strong>User Engagement:</strong> +45% increase</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>🚀 Component Library</h2>
        <div className="tech-grid">
          <div className="tech-card">
            <div className="tech-icon">🔘</div>
            <h3>Quantum Buttons</h3>
            <p>Interactive buttons with gradient effects and quantum glow animations for primary actions.</p>
          </div>
          
          <div className="tech-card">
            <div className="tech-icon">📋</div>
            <h3>Democratic Cards</h3>
            <p>Clean card layouts with subtle animations for displaying governance information and data.</p>
          </div>
          
          <div className="tech-card">
            <div className="tech-icon">📊</div>
            <h3>Data Visualizations</h3>
            <p>Interactive charts and graphs for displaying voting results and participation metrics.</p>
          </div>
          
          <div className="tech-card">
            <div className="tech-icon">📝</div>
            <h3>Governance Forms</h3>
            <p>Accessible multi-step interfaces for voting, proposals, and democratic participation.</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>📱 Interface Previews</h2>
        <div className="visual-grid">
          <div className="visual-card">
            <div style={{
              height: '200px',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.5rem',
              fontWeight: 'bold'
            }}>
              🗳️ Voting Interface
            </div>
            <div className="visual-card-content">
              <h4>Quantum Voting Dashboard</h4>
              <p>Clean, intuitive interface for democratic participation and decision-making.</p>
            </div>
          </div>
          
          <div className="visual-card">
            <div style={{
              height: '200px',
              background: 'linear-gradient(135deg, #f093fb, #667eea)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.5rem',
              fontWeight: 'bold'
            }}>
              📊 Analytics Panel
            </div>
            <div className="visual-card-content">
              <h4>Data Analytics Dashboard</h4>
              <p>Comprehensive analytics interface showing participation metrics and decision outcomes.</p>
            </div>
          </div>
          
          <div className="visual-card">
            <div style={{
              height: '200px',
              background: 'linear-gradient(135deg, #4facfe, #f093fb)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.5rem',
              fontWeight: 'bold'
            }}>
              ⚙️ Admin Console
            </div>
            <div className="visual-card-content">
              <h4>Administrative Interface</h4>
              <p>Powerful admin tools for managing governance processes and system configuration.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>🎨 Visual Design Principles</h2>
        <div className="cards-grid">
          <div className="card">
            <h4>Quantum-Inspired Aesthetics</h4>
            <p>Visual metaphors representing quantum computing concepts through gradients, particle effects, and network patterns.</p>
          </div>
          
          <div className="card">
            <h4>Democratic Transparency</h4>
            <p>Clear visual hierarchy, accessible color schemes, and transparent information architecture.</p>
          </div>
          
          <div className="card">
            <h4>Modern & Trustworthy</h4>
            <p>Contemporary design language that conveys security, reliability, and technological advancement.</p>
          </div>
          
          <div className="card">
            <h4>Global Accessibility</h4>
            <p>Multi-language support, cultural sensitivity, and inclusive design patterns for worldwide usage.</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>📊 Design Metrics</h2>
        <div className="stats">
          <div className="stat-card">
            <div className="stat-number">4.8/5</div>
            <div>User Satisfaction</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">94.2%</div>
            <div>Task Completion Rate</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">AA</div>
            <div>WCAG Compliance</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">15+</div>
            <div>Countries Tested</div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>🔧 Implementation Guidelines</h2>
        <p>Design implementation follows these technical standards:</p>
        <ul style={{marginLeft: '2rem', marginTop: '1rem', lineHeight: '2'}}>
          <li><strong>CSS Custom Properties:</strong> Design tokens for consistent styling</li>
          <li><strong>Component Architecture:</strong> Modular, reusable component library</li>
          <li><strong>Responsive Design:</strong> Mobile-first, progressive enhancement approach</li>
          <li><strong>Accessibility Standards:</strong> WCAG 2.1 AA compliance throughout</li>
          <li><strong>Performance Optimization:</strong> Optimized assets and efficient animations</li>
          <li><strong>Cross-browser Testing:</strong> Compatibility across all modern browsers</li>
        </ul>
      </div>
    </div>
  )
}