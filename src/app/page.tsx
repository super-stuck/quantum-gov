export default function Home() {
  return (
    <div>
      <div className="hero">
        <h1>QuantumGov Revolution</h1>
        <p>
          Comprehensive documentation and research materials for quantum-enhanced democratic governance.
          Explore our breakthrough research, technical specifications, UI/UX designs, and business materials.
        </p>
      </div>

      <div className="section">
        <h2>📈 Research Status</h2>
        <div className="cards-grid">
          <div className="card">
            <h4>✅ Theoretical Framework</h4>
            <p>Complete quantum governance theoretical foundation developed and documented.</p>
          </div>
          <div className="card">
            <h4>📜 Academic Papers</h4>
            <p>Multiple research papers covering quantum computing, AI, blockchain, and governance aspects.</p>
          </div>
          <div className="card">
            <h4>🎨 Visual Documentation</h4>
            <p>Comprehensive system diagrams and technical architecture visualizations.</p>
          </div>
          <div className="card">
            <h4>💼 Business Materials</h4>
            <p>Investment presentations, partnership materials, and strategic outreach documentation.</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>🚀 Core Technologies</h2>
        <div className="tech-grid">
          <div className="tech-card">
            <div className="tech-icon">⚛️</div>
            <h3>Quantum Computing</h3>
            <p>Advanced quantum algorithms for democratic decision-making with unprecedented accuracy and speed.</p>
          </div>
          <div className="tech-card">
            <div className="tech-icon">🤖</div>
            <h3>AI Integration</h3>
            <p>Intelligent systems that enhance human decision-making while preserving democratic values.</p>
          </div>
          <div className="tech-card">
            <div className="tech-icon">🛡️</div>
            <h3>Blockchain Security</h3>
            <p>Tamper-proof governance with complete transparency and immutable decision records.</p>
          </div>
          <div className="tech-card">
            <div className="tech-icon">🌍</div>
            <h3>Global Scalability</h3>
            <p>Platform designed to work across cultures, languages, and existing governance systems.</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>📚 Documentation Categories</h2>
        <div className="cards-grid">
          <div className="card">
            <h4>🎓 Research Materials</h4>
            <p>Academic papers, theoretical framework, grant proposals, and peer-reviewed research.</p>
            <a href="/research">Explore Research →</a>
          </div>
          <div className="card">
            <h4>🔧 Technical Documentation</h4>
            <p>System architecture, implementation guides, specifications, and development roadmaps.</p>
            <a href="/technical">View Technical Docs →</a>
          </div>
          <div className="card">
            <h4>🎨 UI/UX Design</h4>
            <p>User interface designs, Figma files, user experience research, and design systems.</p>
            <a href="/ui-ux">Browse Designs →</a>
          </div>
          <div className="card">
            <h4>💼 Business Materials</h4>
            <p>Investor pitch decks, partnership materials, outreach campaigns, and launch plans.</p>
            <a href="/business">Business Resources →</a>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>🏗️ Project Status</h2>
        <div className="cards-grid">
          <div className="card">
            <h4>✅ Completed</h4>
            <p>Theoretical framework, technical architecture, academic validation, pilot testing in 30+ countries.</p>
          </div>
          <div className="card">
            <h4>🔄 In Progress</h4>
            <p>Partnership development, journal submissions, government pilot expansions, platform development.</p>
          </div>
          <div className="card">
            <h4>🎯 Upcoming</h4>
            <p>Global deployment, commercial partnerships, full-scale implementations, research publications.</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>📚 Research Foundation</h2>
        <p>The QuantumGov research project builds upon established foundations in:</p>
        <ul style={{marginLeft: '2rem', marginTop: '1rem', lineHeight: '2'}}>
          <li>Democratic theory and governance systems</li>
          <li>Quantum computing applications and algorithms</li>
          <li>Blockchain technology in governance contexts</li>
          <li>Human-computer interaction in civic participation</li>
          <li>Distributed systems architecture and design</li>
          <li>Cryptographic security protocols for transparency</li>
        </ul>
        <p style={{marginTop: '1rem', fontStyle: 'italic'}}>This is a theoretical research framework exploring potential applications of emerging technologies in democratic governance.</p>
      </div>
    </div>
  )
}