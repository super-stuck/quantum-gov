"use client";

import { useState } from 'react'

export default function MaterialsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Materials', icon: '📚' },
    { id: 'research', name: 'Research', icon: '🎓' },
    { id: 'technical', name: 'Technical', icon: '🔧' },
    { id: 'business', name: 'Business', icon: '💼' },
    { id: 'visual', name: 'Visual', icon: '🎨' },
    { id: 'presentations', name: 'Presentations', icon: '🎤' }
  ]

  const materials = [
    {
      id: 1,
      title: 'Academic Submission Package',
      description: 'Complete package for journal submissions including all research papers and documentation.',
      type: 'PDF',
      category: 'research',
      icon: '🎓',
      size: '334 KB',
      link: '/materials/ACADEMIC_SUBMISSION_PACKAGE.pdf',
      download: '/materials/ACADEMIC_SUBMISSION_PACKAGE.pdf'
    },
    {
      id: 2,
      title: 'Theoretical Framework',
      description: 'Core theoretical foundations for quantum-enhanced democratic governance.',
      type: 'PDF',
      category: 'research',
      icon: '📖',
      size: '164 KB',
      link: '/materials/THEORY.pdf',
      download: '/materials/THEORY.pdf'
    },
    {
      id: 3,
      title: 'Research Synthesis',
      description: 'Theoretical foundations for virtual utopia research and implementation.',
      type: 'PDF',
      category: 'research',
      icon: '🔬',
      size: '273 KB',
      link: '/materials/Research_Synthesis_Theoretical_Foundations_for_Virtual_Utopia.pdf',
      download: '/materials/Research_Synthesis_Theoretical_Foundations_for_Virtual_Utopia.pdf'
    },
    {
      id: 4,
      title: 'Grant Proposal',
      description: 'Funding application materials for quantum governance research.',
      type: 'PDF',
      category: 'research',
      icon: '💰',
      size: '339 KB',
      link: '/materials/QuantumGov_Grant_Proposal.pdf',
      download: '/materials/QuantumGov_Grant_Proposal.pdf'
    },
    {
      id: 5,
      title: 'Academic Submission Strategy',
      description: 'Strategy for journal submissions and academic publication.',
      type: 'PDF',
      category: 'research',
      icon: '📝',
      size: '210 KB',
      link: '/materials/QuantumGov_Academic_Submission_Strategy.pdf',
      download: '/materials/QuantumGov_Academic_Submission_Strategy.pdf'
    },
    {
      id: 6,
      title: 'Project Website Specifications',
      description: 'Technical specifications for the QuantumGov platform.',
      type: 'PDF',
      category: 'technical',
      icon: '⚙️',
      size: '876 KB',
      link: '/materials/PROJECT_WEBSITE_SPECIFICATIONS.pdf',
      download: '/materials/PROJECT_WEBSITE_SPECIFICATIONS.pdf'
    },
    {
      id: 7,
      title: 'Implementation Roadmap',
      description: 'Step-by-step deployment guide and implementation strategy.',
      type: 'PDF',
      category: 'technical',
      icon: '🗺️',
      size: '216 KB',
      link: '/materials/QuantumGov_Implementation_Roadmap.pdf',
      download: '/materials/QuantumGov_Implementation_Roadmap.pdf'
    },
    {
      id: 8,
      title: 'Launch Execution Plan',
      description: '30-day launch strategy and execution plan.',
      type: 'PDF',
      category: 'technical',
      icon: '🚀',
      size: '355 KB',
      link: '/materials/LAUNCH_EXECUTION_PLAN_30_DAYS.pdf',
      download: '/materials/LAUNCH_EXECUTION_PLAN_30_DAYS.pdf'
    },
    {
      id: 9,
      title: 'Project Completion Summary',
      description: 'Implementation milestones and project status.',
      type: 'PDF',
      category: 'technical',
      icon: '✅',
      size: '201 KB',
      link: '/materials/PROJECT_COMPLETION_SUMMARY.pdf',
      download: '/materials/PROJECT_COMPLETION_SUMMARY.pdf'
    },
    {
      id: 10,
      title: 'Executive Summary',
      description: 'High-level overview of the QuantumGov platform and vision.',
      type: 'PDF',
      category: 'business',
      icon: '📊',
      size: '233 KB',
      link: '/materials/QuantumGov_Executive_Summary.pdf',
      download: '/materials/QuantumGov_Executive_Summary.pdf'
    },
    {
      id: 11,
      title: 'Investor Pitch Deck',
      description: 'Complete investor presentation with business model and projections.',
      type: 'PDF',
      category: 'business',
      icon: '💼',
      size: '236 KB',
      link: '/materials/QUANTUMGOV_INVESTOR_PITCH_DECK.pdf',
      download: '/materials/QUANTUMGOV_INVESTOR_PITCH_DECK.pdf'
    },
    {
      id: 12,
      title: 'Partnership Materials',
      description: 'Materials for strategic partnerships and collaborations.',
      type: 'PDF',
      category: 'business',
      icon: '🤝',
      size: '211 KB',
      link: '/materials/QuantumGov_Partnership_Materials.pdf',
      download: '/materials/QuantumGov_Partnership_Materials.pdf'
    },
    {
      id: 13,
      title: 'Strategic Outreach Campaign',
      description: 'Marketing and outreach strategy for global adoption.',
      type: 'PDF',
      category: 'business',
      icon: '🌍',
      size: '221 KB',
      link: '/materials/STRATEGIC_OUTREACH_CAMPAIGN.pdf',
      download: '/materials/STRATEGIC_OUTREACH_CAMPAIGN.pdf'
    },
    {
      id: 14,
      title: 'Visual Materials Summary',
      description: 'Overview of all visual assets and design materials.',
      type: 'PDF',
      category: 'visual',
      icon: '🎨',
      size: '304 KB',
      link: '/materials/VISUAL_MATERIALS_SUMMARY.pdf',
      download: '/materials/VISUAL_MATERIALS_SUMMARY.pdf'
    },
    {
      id: 15,
      title: 'System Architecture Diagram',
      description: 'Technical system architecture visualization.',
      type: 'PNG',
      category: 'visual',
      icon: '🏗️',
      size: '~',
      link: '/images/png/system_architecture.png',
      download: '/images/png/system_architecture.png'
    },
    {
      id: 16,
      title: 'Governance Architecture',
      description: 'Democratic processes workflow and governance structure.',
      type: 'PNG',
      category: 'visual',
      icon: '🏛️',
      size: '~',
      link: '/images/png/governance_architecture.png',
      download: '/images/png/governance_architecture.png'
    },
    {
      id: 17,
      title: 'Microservices Architecture',
      description: 'Service-oriented design and microservices topology.',
      type: 'PNG',
      category: 'visual',
      icon: '🔌',
      size: '~',
      link: '/images/png/microservices_architecture.png',
      download: '/images/png/microservices_architecture.png'
    },
    {
      id: 18,
      title: 'Network Topology',
      description: 'Network infrastructure design and topology.',
      type: 'PNG',
      category: 'visual',
      icon: '🌐',
      size: '~',
      link: '/images/png/network_topology.png',
      download: '/images/png/network_topology.png'
    },
    {
      id: 19,
      title: 'Data Models',
      description: 'Data structure and relationships visualization.',
      type: 'PNG',
      category: 'visual',
      icon: '📊',
      size: '~',
      link: '/images/png/data_models.png',
      download: '/images/png/data_models.png'
    },
    {
      id: 20,
      title: 'Main Presentation',
      description: 'Complete QuantumGov presentation for conferences and demos.',
      type: 'TEX',
      category: 'presentations',
      icon: '🗣️',
      size: '~',
      link: '/presentations/QuantumGov_Main_Presentation.tex',
      download: '/presentations/QuantumGov_Main_Presentation.tex'
    },
    {
      id: 21,
      title: 'Poster Presentation',
      description: 'Conference poster presentation design.',
      type: 'TEX',
      category: 'presentations',
      icon: '📋',
      size: '~',
      link: '/presentations/QuantumGov_Poster.tex',
      download: '/presentations/QuantumGov_Poster.tex'
    },
    {
      id: 22,
      title: 'Short Presentation',
      description: 'Condensed presentation for quick demos.',
      type: 'TEX',
      category: 'presentations',
      icon: '⚡',
      size: '~',
      link: '/presentations/QuantumGov_Short_Presentation.tex',
      download: '/presentations/QuantumGov_Short_Presentation.tex'
    }
  ]

  const filteredMaterials = materials.filter(material => {
    const matchesSearch = material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         material.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || material.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      'PDF': '#e74c3c',
      'PNG': '#3498db',
      'TEX': '#2ecc71',
      'MD': '#9b59b6'
    }
    return colors[type] || '#95a5a6'
  }

  return (
    <div className="materials-page">
      <div className="materials-header">
        <div className="container">
          <div className="header-content">
            <h1>📚 Materials Library</h1>
            <p>Complete collection of QuantumGov research, technical documentation, and resources</p>

            <div className="search-bar">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
              <input
                type="text"
                placeholder="Search materials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="materials-content">
          <div className="sidebar">
            <h3>Categories</h3>
            <div className="category-list">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category-item ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <span className="category-icon">{category.icon}</span>
                  <span className="category-name">{category.name}</span>
                  <span className="category-count">
                    {category.id === 'all'
                      ? materials.length
                      : materials.filter(m => m.category === category.id).length}
                  </span>
                </button>
              ))}
            </div>

            <div className="stats-box">
              <h4>Quick Stats</h4>
              <div className="stat-item">
                <span className="stat-label">Total Materials</span>
                <span className="stat-value">{materials.length}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Research Papers</span>
                <span className="stat-value">{materials.filter(m => m.category === 'research').length}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Technical Docs</span>
                <span className="stat-value">{materials.filter(m => m.category === 'technical').length}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Visual Assets</span>
                <span className="stat-value">{materials.filter(m => m.category === 'visual').length}</span>
              </div>
            </div>
          </div>

          <div className="materials-main">
            <div className="materials-header-row">
              <h2>
                {selectedCategory === 'all'
                  ? 'All Materials'
                  : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <span className="results-count">{filteredMaterials.length} items</span>
            </div>

            <div className="materials-grid">
              {filteredMaterials.map(material => (
                <div key={material.id} className="material-card">
                  <div className="material-header">
                    <div className="material-icon">{material.icon}</div>
                    <div className="material-type" style={{ background: getTypeColor(material.type) }}>
                      {material.type}
                    </div>
                  </div>

                  <h3>{material.title}</h3>
                  <p>{material.description}</p>

                  <div className="material-meta">
                    <span className="material-size">📦 {material.size}</span>
                  </div>

                  <div className="material-actions">
                    <a
                      href={material.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-view"
                    >
                      View
                    </a>
                    <a
                      href={material.download}
                      download
                      className="btn-download"
                    >
                      Download
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {filteredMaterials.length === 0 && (
              <div className="no-results">
                <div className="no-results-icon">🔍</div>
                <h3>No materials found</h3>
                <p>Try adjusting your search or category filter</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .materials-page {
          min-height: 100vh;
          background: #f8f9fa;
        }

        .materials-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 3rem 0;
          margin-bottom: 2rem;
        }

        .header-content {
          text-align: center;
        }

        .materials-header h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .materials-header p {
          font-size: 1.2rem;
          opacity: 0.9;
          margin-bottom: 2rem;
        }

        .search-bar {
          max-width: 600px;
          margin: 0 auto;
          position: relative;
        }

        .search-bar svg {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0.5;
        }

        .search-bar input {
          width: 100%;
          padding: 1rem 1rem 1rem 3rem;
          border: none;
          border-radius: 50px;
          font-size: 1rem;
          outline: none;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .materials-content {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .sidebar {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          height: fit-content;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          position: sticky;
          top: 100px;
        }

        .sidebar h3 {
          margin-bottom: 1.5rem;
          color: #333;
        }

        .category-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .category-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem 1rem;
          background: transparent;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
          width: 100%;
        }

        .category-item:hover {
          background: #f8f9fa;
        }

        .category-item.active {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .category-icon {
          font-size: 1.2rem;
        }

        .category-name {
          flex: 1;
          font-weight: 500;
        }

        .category-count {
          background: rgba(0, 0, 0, 0.1);
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.85rem;
        }

        .category-item.active .category-count {
          background: rgba(255, 255, 255, 0.2);
        }

        .stats-box {
          background: #f8f9fa;
          padding: 1.5rem;
          border-radius: 15px;
          margin-top: 2rem;
        }

        .stats-box h4 {
          margin-bottom: 1rem;
          color: #333;
        }

        .stat-item {
          display: flex;
          justify-content: space-between;
          padding: 0.75rem 0;
          border-bottom: 1px solid #e0e0e0;
        }

        .stat-item:last-child {
          border-bottom: none;
        }

        .stat-label {
          color: #666;
        }

        .stat-value {
          font-weight: 600;
          color: #667eea;
        }

        .materials-main {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        .materials-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #f0f0f0;
        }

        .materials-header-row h2 {
          color: #333;
        }

        .results-count {
          color: #666;
          font-size: 0.9rem;
        }

        .materials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }

        .material-card {
          background: white;
          border: 1px solid #f0f0f0;
          border-radius: 15px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .material-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.15);
          border-color: #667eea;
        }

        .material-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .material-icon {
          font-size: 2rem;
        }

        .material-type {
          padding: 0.35rem 0.75rem;
          border-radius: 20px;
          color: white;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .material-card h3 {
          color: #333;
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }

        .material-card p {
          color: #666;
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .material-meta {
          margin-bottom: 1rem;
        }

        .material-size {
          color: #999;
          font-size: 0.85rem;
        }

        .material-actions {
          display: flex;
          gap: 0.75rem;
        }

        .btn-view, .btn-download {
          flex: 1;
          padding: 0.6rem 1rem;
          border-radius: 8px;
          text-align: center;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .btn-view {
          background: #f8f9fa;
          color: #333;
          border: 1px solid #e0e0e0;
        }

        .btn-view:hover {
          background: #667eea;
          color: white;
          border-color: #667eea;
        }

        .btn-download {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .btn-download:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
        }

        .no-results {
          text-align: center;
          padding: 4rem 2rem;
          color: #666;
        }

        .no-results-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
        }

        .no-results h3 {
          color: #333;
          margin-bottom: 0.5rem;
        }

        @media (max-width: 1024px) {
          .materials-content {
            grid-template-columns: 1fr;
          }

          .sidebar {
            position: relative;
            top: 0;
          }
        }

        @media (max-width: 768px) {
          .materials-header h1 {
            font-size: 2rem;
          }

          .materials-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}