"use client";

export default function PapersPage() {
  const papers = [
    {
      title: "AI & Machine Learning in Governance",
      basename: "QuantumGov_AI_ML_Paper",
      description: "Explores the integration of AI and ML technologies in quantum governance systems"
    },
    {
      title: "Blockchain Technology for Governance",
      basename: "QuantumGov_Blockchain_Paper", 
      description: "Analysis of blockchain applications in transparent and secure governance frameworks"
    },
    {
      title: "Economic Models in QuantumGov",
      basename: "QuantumGov_Economics_Paper",
      description: "Economic theory and modeling for quantum governance systems"
    },
    {
      title: "Game Theory Applications",
      basename: "QuantumGov_GameTheory_Paper",
      description: "Game-theoretic approaches to decision-making in quantum governance"
    },
    {
      title: "Political Science Foundations",
      basename: "QuantumGov_Political_Science_Paper",
      description: "Political science theory underlying quantum governance frameworks"
    },
    {
      title: "Psychology & Behavioral Science",
      basename: "QuantumGov_Psychology_Paper", 
      description: "Psychological and behavioral aspects of quantum governance participation"
    },
    {
      title: "Quantum Computing Applications",
      basename: "QuantumGov_Quantum_Computing_Paper",
      description: "Technical implementation of quantum computing in governance systems"
    }
  ];

  return (
    <div className="papers-container">
      <div className="papers-header">
        <h1>📄 Academic Papers</h1>
        <p>
          <a href="/docs">← Back to Documentation</a>
        </p>
        <p>
          Collection of academic papers exploring various aspects of the QuantumGov framework.
          Each paper is available in both PDF and LaTeX source formats.
        </p>
      </div>

      <div className="papers-grid">
        {papers.map((paper, index) => (
          <div key={index} className="paper-card">
            <h3>{paper.title}</h3>
            <p>{paper.description}</p>
            <div className="paper-links">
              <a 
                href={`/papers/${paper.basename}.pdf`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="pdf-link"
              >
                📄 PDF
              </a>
              <a 
                href={`/papers/${paper.basename}.tex`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="tex-link"
              >
                📝 LaTeX Source
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="papers-footer">
        <h3>📚 Bibliography Files</h3>
        <p>LaTeX bibliography files for citations:</p>
        <div className="bib-links">
          <a href="/papers/ai_ml_governance.bib" target="_blank">AI/ML Bibliography</a>
          <a href="/papers/blockchain_governance.bib" target="_blank">Blockchain Bibliography</a>
          <a href="/papers/political_science.bib" target="_blank">Political Science Bibliography</a>
          <a href="/papers/psychology_behavioral.bib" target="_blank">Psychology Bibliography</a>
          <a href="/papers/quantum_computing.bib" target="_blank">Quantum Computing Bibliography</a>
        </div>
        
        <div className="citation-note">
          <p>
            <strong>Citation:</strong> Please cite these papers appropriately if used in research or academic work. 
            All papers are available under academic use license.
          </p>
        </div>
      </div>

      <style jsx>{`
        .papers-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .papers-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .papers-header h1 {
          font-size: 2.5rem;
          color: #2563eb;
          margin-bottom: 1rem;
        }

        .papers-header a {
          color: #6b7280;
          text-decoration: none;
          margin-bottom: 1rem;
          display: inline-block;
        }

        .papers-header a:hover {
          color: #2563eb;
        }

        .papers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .paper-card {
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 2rem;
          background: white;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          transition: all 0.2s;
        }

        .paper-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          border-color: #2563eb;
        }

        .paper-card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.25rem;
          color: #1f2937;
        }

        .paper-card p {
          color: #6b7280;
          margin: 0 0 1.5rem 0;
          line-height: 1.6;
        }

        .paper-links {
          display: flex;
          gap: 1rem;
        }

        .pdf-link, .tex-link {
          padding: 0.5rem 1rem;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.2s;
        }

        .pdf-link {
          background: #dc2626;
          color: white;
        }

        .pdf-link:hover {
          background: #b91c1c;
        }

        .tex-link {
          background: #059669;
          color: white;
        }

        .tex-link:hover {
          background: #047857;
        }

        .papers-footer {
          background: #f9fafb;
          padding: 2rem;
          border-radius: 8px;
          text-align: center;
        }

        .papers-footer h3 {
          color: #1f2937;
          margin-bottom: 1rem;
        }

        .bib-links {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin: 1.5rem 0;
        }

        .bib-links a {
          padding: 0.5rem 1rem;
          background: #6b7280;
          color: white;
          text-decoration: none;
          border-radius: 6px;
          font-size: 0.875rem;
        }

        .bib-links a:hover {
          background: #4b5563;
        }

        .citation-note {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid #e5e7eb;
          color: #6b7280;
        }
      `}</style>
    </div>
  )
}