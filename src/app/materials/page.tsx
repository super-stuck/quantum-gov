"use client";

export default function MaterialsPage() {
  // Check which files have corresponding PDFs available
  const hasPDF = (filename: string) => {
    if (filename.endsWith('.pdf')) return true;
    // Check if there's a corresponding PDF for markdown files
    const pdfName = filename.replace('.md', '.pdf');
    const availablePDFs = [
      'ACADEMIC_SUBMISSION_PACKAGE.pdf',
      'FIGURE_CAPTIONS_DOCUMENTATION.pdf',
      'LAUNCH_EXECUTION_PLAN_30_DAYS.pdf',
      'PLAN.pdf',
      'PROJECT_COMPLETION_SUMMARY.pdf',
      'PROJECT_WEBSITE_SPECIFICATIONS.pdf',
      'QuantumGov_Academic_Submission_Strategy.pdf',
      'QuantumGov_Executive_Summary.pdf',
      'QuantumGov_Framework_ENHANCED_ULTIMATE.pdf',
      'QuantumGov_Grant_Proposal.pdf',
      'QuantumGov_Implementation_Roadmap.pdf',
      'QUANTUMGOV_INVESTOR_PITCH_DECK.pdf',
      'QuantumGov_Partnership_Materials.pdf',
      'README.pdf',
      'README_QuantumGov.pdf',
      'README_Visual_Materials.pdf',
      'Research_Synthesis_Theoretical_Foundations_for_Virtual_Utopia.pdf',
      'STRATEGIC_OUTREACH_CAMPAIGN.pdf',
      'THEORY.pdf',
      'TODO.pdf',
      'TRACKER.pdf',
      'Virtual_Utopia_Research_Final.pdf',
      'Virtual_Utopia_Research.pdf',
      'VISUAL_MATERIALS_SUMMARY.pdf'
    ];
    return availablePDFs.includes(pdfName);
  };

  const materials = [
    {
      name: "ACADEMIC_SUBMISSION_PACKAGE.md",
      description: "Complete academic submission package for research institutions"
    },
    {
      name: "LAUNCH_EXECUTION_PLAN_30_DAYS.md", 
      description: "30-day execution plan for project launch"
    },
    {
      name: "PLAN.md",
      description: "Master project plan and timeline"
    },
    {
      name: "PROJECT_COMPLETION_SUMMARY.md",
      description: "Summary of project completion status and deliverables"
    },
    {
      name: "PROJECT_WEBSITE_SPECIFICATIONS.md",
      description: "Technical specifications for the project website"
    },
    {
      name: "QuantumGov_Academic_Submission_Strategy.md",
      description: "Strategy for academic submissions and research publication"
    },
    {
      name: "QuantumGov_Executive_Summary.md",
      description: "Executive summary of the QuantumGov framework"
    },
    {
      name: "QuantumGov_Framework_ENHANCED_ULTIMATE.pdf",
      description: "Complete enhanced QuantumGov framework documentation (PDF)"
    },
    {
      name: "QuantumGov_Grant_Proposal.md",
      description: "Grant proposal for funding QuantumGov research"
    },
    {
      name: "QuantumGov_Implementation_Roadmap.md",
      description: "Detailed implementation roadmap for QuantumGov deployment"
    },
    {
      name: "QUANTUMGOV_INVESTOR_PITCH_DECK.md",
      description: "Investor pitch deck materials and presentation content"
    },
    {
      name: "QuantumGov_Partnership_Materials.md",
      description: "Materials for establishing strategic partnerships"
    },
    {
      name: "README.md",
      description: "Main project README with overview and getting started guide"
    },
    {
      name: "Research_Synthesis_Theoretical_Foundations_for_Virtual_Utopia.md",
      description: "Research synthesis on theoretical foundations for Virtual Utopia"
    },
    {
      name: "STRATEGIC_OUTREACH_CAMPAIGN.md",
      description: "Strategic outreach campaign plan and materials"
    },
    {
      name: "THEORY.md",
      description: "Core theoretical foundations of the QuantumGov framework"
    },
    {
      name: "Virtual_Utopia_Research_Final.pdf",
      description: "Final research document on Virtual Utopia concept (PDF)"
    },
    {
      name: "Virtual_Utopia_Research.pdf",
      description: "Core research document on Virtual Utopia framework (PDF)"
    },
    {
      name: "VISUAL_MATERIALS_SUMMARY.md",
      description: "Summary of all visual materials and design assets"
    }
  ];

  return (
    <div className="materials-container">
      <div className="materials-header">
        <h1>📚 Research Materials</h1>
        <p>
          <a href="/docs">← Back to Documentation</a>
        </p>
        <p>
          Complete collection of QuantumGov research materials, documentation, and strategic resources.
        </p>
      </div>

      <div className="materials-grid">
        {materials.map((material, index) => (
          <div key={index} className="material-card">
            <h3>
              <a href={`/materials/${material.name}`} target="_blank" rel="noopener noreferrer">
                {material.name}
              </a>
            </h3>
            <p>{material.description}</p>
            <div className="material-meta">
              <span className="file-type">
                {material.name.endsWith('.pdf') ? 'PDF Document' : 'Markdown Document'}
              </span>
              {hasPDF(material.name) && (
                <a 
                  href={`/materials/${material.name.endsWith('.pdf') ? material.name : material.name.replace('.md', '.pdf')}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="pdf-button"
                >
                  📄 Open PDF
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="materials-footer">
        <p>
          <strong>Note:</strong> All materials are available for download and academic use. 
          Please cite appropriately if using in research or publications.
        </p>
      </div>

      <style jsx>{`
        .materials-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .materials-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .materials-header h1 {
          font-size: 2.5rem;
          color: #2563eb;
          margin-bottom: 1rem;
        }

        .materials-header a {
          color: #6b7280;
          text-decoration: none;
          margin-bottom: 1rem;
          display: inline-block;
        }

        .materials-header a:hover {
          color: #2563eb;
        }

        .materials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .material-card {
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 1.5rem;
          background: white;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          transition: all 0.2s;
        }

        .material-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          border-color: #2563eb;
        }

        .material-card h3 {
          margin: 0 0 0.5rem 0;
          font-size: 1.1rem;
        }

        .material-card h3 a {
          color: #1f2937;
          text-decoration: none;
          word-break: break-word;
        }

        .material-card h3 a:hover {
          color: #2563eb;
        }

        .material-card p {
          color: #6b7280;
          margin: 0 0 1rem 0;
          line-height: 1.5;
        }

        .material-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .file-type {
          background: #f3f4f6;
          color: #374151;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.875rem;
        }

        .pdf-button {
          background: #dc2626;
          color: white;
          text-decoration: none;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .pdf-button:hover {
          background: #b91c1c;
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(220, 38, 38, 0.3);
        }

        .materials-footer {
          text-align: center;
          color: #6b7280;
          background: #f9fafb;
          padding: 1.5rem;
          border-radius: 8px;
        }
      `}</style>
    </div>
  )
}