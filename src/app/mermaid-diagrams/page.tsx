'use client'

export default function MermaidDiagrams() {
  const diagrams = [
    {
      id: 'system-architecture',
      title: 'System Architecture',
      description: 'Complete overview of the QuantumGov multi-layer architecture including quantum computing, AI integration, blockchain security, and governance layers.',
      path: '/diagrams/quantumgov-mermaid-svgs/system-architecture.svg'
    },
    {
      id: 'workflow-diagram',
      title: 'Workflow Diagram',
      description: 'End-to-end citizen proposal workflow from submission through quantum analysis, AI validation, community review, and blockchain recording.',
      path: '/diagrams/quantumgov-mermaid-svgs/workflow-diagram.svg'
    },
    {
      id: 'decision-flow',
      title: 'Decision Flow Process',
      description: 'Detailed decision-making flow showing quantum classification, AI analysis, community feedback, voting, and consensus building mechanisms.',
      path: '/diagrams/quantumgov-mermaid-svgs/decision-flow.svg'
    },
    {
      id: 'governance-model',
      title: 'Governance Model',
      description: 'Multi-tier governance structure combining direct democracy, representative democracy, quantum-enhanced decision making, and implementation.',
      path: '/diagrams/quantumgov-mermaid-svgs/governance-model.svg'
    },
    {
      id: 'integration-flow',
      title: 'System Integration Flow',
      description: 'Sequence diagram showing how different system components (citizen, quantum layer, AI, blockchain) interact in real-time.',
      path: '/diagrams/quantumgov-mermaid-svgs/integration-flow.svg'
    },
    {
      id: 'data-flow',
      title: 'Data Flow Architecture',
      description: 'Data processing pipeline from input collection through quantum processing, AI analysis, and immutable blockchain storage.',
      path: '/diagrams/quantumgov-mermaid-svgs/data-flow.svg'
    },
    {
      id: 'ai-ml-architecture',
      title: 'AI-ML Architecture',
      description: 'Comprehensive AI-ML system architecture showing human layer, interface layer, AI agents, belief networks, reinforcement learning, and game theory components.',
      path: '/diagrams/quantumgov-mermaid-svgs/ai-ml-architecture.svg'
    },
    {
      id: 'quantum-governance',
      title: 'Quantum Governance Framework',
      description: 'Complete QGO (Quantum Governance Operators) framework with classical input, quantum encoding, processing core, Hamiltonian, algorithms, and hardware.',
      path: '/diagrams/quantumgov-mermaid-svgs/quantum-governance.svg'
    }
  ]

  return (
    <div className="diagrams-container">
      <div className="hero">
        <h1>QuantumGov Mermaid Diagrams</h1>
        <p>
          Comprehensive system architecture and workflow diagrams created with Mermaid.
          These SVG diagrams visualize the quantum-enhanced democratic governance platform.
        </p>
      </div>

      <div className="section">
        <h2>Diagram Library</h2>
        <div className="diagrams-grid">
          {diagrams.map((diagram) => (
            <div key={diagram.id} className="diagram-card">
              <div className="diagram-header">
                <h3>{diagram.title}</h3>
              </div>
              <div className="diagram-image">
                <img
                  src={diagram.path}
                  alt={diagram.title}
                  className="responsive-svg"
                />
              </div>
              <div className="diagram-description">
                <p>{diagram.description}</p>
              </div>
              <div className="diagram-actions">
                <a
                  href={diagram.path}
                  download
                  className="download-btn"
                >
                  Download SVG
                </a>
                <button
                  onClick={() => window.open(diagram.path, '_blank')}
                  className="view-btn"
                >
                  View Full Size
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Technical Specifications</h2>
        <div className="specs-grid">
          <div className="spec-card">
            <h4>📐 Format</h4>
            <p>SVG (Scalable Vector Graphics)</p>
            <p>Resolution independent</p>
            <p>Print-ready quality</p>
          </div>
          <div className="spec-card">
            <h4>🎨 Style</h4>
            <p>QuantumGov brand colors</p>
            <p>Professional presentation</p>
            <p>Consistent visual language</p>
          </div>
          <div className="spec-card">
            <h4>⚡ Features</h4>
            <p>Interactive elements</p>
            <p>Zoom and pan support</p>
            <p>Export to multiple formats</p>
          </div>
          <div className="spec-card">
            <h4>📊 Coverage</h4>
            <p>8 comprehensive diagrams</p>
            <p>System architecture</p>
            <p>Complete workflows</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .diagrams-container {
          padding: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .diagrams-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
          margin: 2rem 0;
        }

        .diagram-card {
          background: white;
          border-radius: 15px;
          padding: 1.5rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .diagram-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(102, 126, 234, 0.2);
        }

        .diagram-header h3 {
          color: #667eea;
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }

        .diagram-image {
          background: #f8f9fa;
          border-radius: 10px;
          padding: 1rem;
          margin: 1rem 0;
          overflow: auto;
          min-height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .responsive-svg {
          max-width: 100%;
          height: auto;
          display: block;
        }

        .diagram-description {
          color: #666;
          line-height: 1.6;
          margin: 1rem 0;
          flex-grow: 1;
        }

        .diagram-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .download-btn, .view-btn {
          flex: 1;
          padding: 0.75rem 1rem;
          border: none;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
          text-decoration: none;
        }

        .download-btn {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .download-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .view-btn {
          background: white;
          color: #667eea;
          border: 2px solid #667eea;
        }

        .view-btn:hover {
          background: #667eea;
          color: white;
        }

        .specs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin: 2rem 0;
        }

        .spec-card {
          background: #f8f9fa;
          border-radius: 10px;
          padding: 1.5rem;
          border-left: 4px solid #667eea;
        }

        .spec-card h4 {
          color: #667eea;
          margin-bottom: 0.75rem;
          font-size: 1.1rem;
        }

        .spec-card p {
          color: #666;
          margin: 0.5rem 0;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .diagrams-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .diagram-actions {
            flex-direction: column;
          }

          .diagrams-container {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  )
}
