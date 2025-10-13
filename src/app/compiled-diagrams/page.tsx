import './compiled-diagrams.css';

export default function CompiledDiagrams() {
  return (
    <div className="compiled-diagrams-index">
      <h1>Compiled Diagrams</h1>
      <p>This page provides access to the compiled PDF diagrams for the QuantumGov project.</p>
      
      <div className="diagrams-grid">
        <div className="diagram-card">
          <h3>Implementation Timeline & Roadmap</h3>
          <a href="/diagrams/compiled_diagrams/implementation_timeline_roadmap.pdf" target="_blank">
            View PDF
          </a>
        </div>
        
        <div className="diagram-card">
          <h3>Research Validation & Experimental Results</h3>
          <a href="/diagrams/compiled_diagrams/research_validation_results.pdf" target="_blank">
            View PDF
          </a>
        </div>
        
        <div className="diagram-card">
          <h3>UI/UX Quantum Mockups</h3>
          <a href="/diagrams/compiled_diagrams/uiux_quantum_mockups.pdf" target="_blank">
            View PDF
          </a>
        </div>
        
        <div className="diagram-card">
          <h3>AI-Human Collaborative Decision-Making</h3>
          <a href="/diagrams/compiled_diagrams/ai_human_collaboration.pdf" target="_blank">
            View PDF
          </a>
        </div>
        
        <div className="diagram-card">
          <h3>Cross-Cultural Adaptation Framework</h3>
          <a href="/diagrams/compiled_diagrams/cross_cultural_adaptation.pdf" target="_blank">
            View PDF
          </a>
        </div>
        
        <div className="diagram-card">
          <h3>Interactive System Architecture</h3>
          <a href="/diagrams/compiled_diagrams/interactive_system_architecture.pdf" target="_blank">
            View PDF
          </a>
        </div>
        
        <div className="diagram-card">
          <h3>Quantum-AI Integration Flow</h3>
          <a href="/diagrams/compiled_diagrams/quantum_ai_integration_flow.pdf" target="_blank">
            View PDF
          </a>
        </div>
        
        <div className="diagram-card">
          <h3>Business Impact & ROI Analysis</h3>
          <a href="/diagrams/compiled_diagrams/business_impact_roi.pdf" target="_blank">
            View PDF
          </a>
        </div>
      </div>
    </div>
  )
}
