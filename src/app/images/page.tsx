'use client'

import { useState, useEffect } from 'react'

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<any>(null)

  const images = [
    {
      id: 'data-models',
      title: 'Data Models Architecture',
      description: 'Entity relationships and data flow patterns',
      src: '/images/png/data_models.png',
      category: 'Data & Models'
    },
    {
      id: 'extension-framework',
      title: 'Extension Framework',
      description: 'Modular third-party integration architecture',
      src: '/images/png/extension_framework.png',
      category: 'Architecture'
    },
    {
      id: 'framework-overview',
      title: 'Framework Overview',
      description: 'High-level architectural overview',
      src: '/images/png/framework_overview.png',
      category: 'Overview'
    },
    {
      id: 'governance-architecture',
      title: 'Governance Architecture',
      description: 'Digital governance and decision-making frameworks',
      src: '/images/png/governance_architecture.png',
      category: 'Governance'
    },
    {
      id: 'microservices-architecture',
      title: 'Microservices Architecture',
      description: 'Distributed microservices implementation with detailed service interactions',
      src: '/images/png/microservices_architecture.png',
      category: 'Architecture'
    },
    {
      id: 'microservices-architecture-hq',
      title: 'Quantum Microservices Architecture (HQ)',
      description: 'Advanced quantum-enhanced microservices with quantum communication layers',
      src: '/diagrams/compiled_diagrams/quantum_ai_integration_flow.pdf',
      category: 'Architecture'
    },
    {
      id: 'quantum-microservices-architecture',
      title: 'Quantum Microservices Architecture',
      description: 'Advanced quantum-enhanced microservices with quantum communication layers',
      src: '/images/png/microservices_architecture.png',
      category: 'Architecture'
    },
    {
      id: 'network-topology',
      title: 'Network Topology',
      description: 'Quantum-secure communication infrastructure',
      src: '/images/png/network_topology.png',
      category: 'Infrastructure'
    },
    {
      id: 'system-architecture',
      title: 'System Architecture',
      description: 'Complete system architecture overview',
      src: '/images/png/system_architecture.png',
      category: 'Architecture'
    },
    // UI/UX Mockups
    {
      id: 'ui-home-1',
      title: 'Home Screen - Version 1',
      description: 'Primary home screen interface design',
      src: '/images/ui-ux/1. Home.png',
      category: 'UI Design'
    },
    {
      id: 'ui-post',
      title: 'Post Interface',
      description: 'Social posting and civic engagement interface',
      src: '/images/ui-ux/2. Post.png',
      category: 'UI Design'
    },
    {
      id: 'ui-skill-tree',
      title: 'Skill Tree Interface',
      description: 'Gamified civic skill development system',
      src: '/images/ui-ux/3. Skill tree.png',
      category: 'UI Design'
    },
    {
      id: 'ui-skill-tree-alt',
      title: 'Skill Tree - Alternative',
      description: 'Alternative skill tree design approach',
      src: '/images/ui-ux/3. Skill tree-1.png',
      category: 'UI Design'
    },
    {
      id: 'ui-post-alt',
      title: 'Post Interface - Alternative',
      description: 'Alternative post interface design',
      src: '/images/ui-ux/4. Post.png',
      category: 'UI Design'
    },
    {
      id: 'ui-court',
      title: 'Digital Court Interface',
      description: 'Justice system and legal proceedings interface',
      src: '/images/ui-ux/5. Court.png',
      category: 'UI Design'
    },
    {
      id: 'ui-store',
      title: 'Digital Store Interface',
      description: 'Economic marketplace and rewards system',
      src: '/images/ui-ux/6. Store.png',
      category: 'UI Design'
    },
    {
      id: 'ui-nation',
      title: 'Nation Management Interface',
      description: 'Nation-level governance and administration',
      src: '/images/ui-ux/7. Nation.png',
      category: 'UI Design'
    },
    {
      id: 'ui-map',
      title: 'Interactive Map Interface',
      description: 'Geospatial governance and territorial data',
      src: '/images/ui-ux/8. Map.png',
      category: 'UI Design'
    },
    {
      id: 'ui-home-2',
      title: 'Home Screen - Version 2',
      description: 'Alternative home screen design approach',
      src: '/images/ui-ux/9. Home.png',
      category: 'UI Design'
    },
    {
      id: 'ui-home-3',
      title: 'Home Screen - Version 3',
      description: 'Minimalist home screen design iteration',
      src: '/images/ui-ux/10. Home.png',
      category: 'UI Design'
    },
    // Enhanced Framework Diagrams
    {
      id: 'quantum-ai-integration',
      title: 'Quantum-AI Integration Flow',
      description: 'Comprehensive integration of quantum computing, AI, and blockchain for democratic governance',
      src: '/diagrams/compiled_diagrams/quantum_ai_integration_flow.pdf',
      category: 'Enhanced Framework'
    },
    {
      id: 'interactive-system-architecture',
      title: 'Interactive System Architecture',
      description: 'Layered architecture with component interactions and data flows',
      src: '/diagrams/compiled_diagrams/interactive_system_architecture.pdf',
      category: 'Enhanced Framework'
    },
    {
      id: 'detailed-quantum-process',
      title: 'Detailed Quantum Process Flow',
      description: 'Step-by-step quantum governance decision-making process',
      src: '/diagrams/compiled_diagrams/detailed_quantum_process_flow.pdf',
      category: 'Enhanced Framework'
    },
    {
      id: 'ai-human-collaboration',
      title: 'AI-Human Collaboration',
      description: 'Augmented decision-making while preserving democratic values',
      src: '/diagrams/compiled_diagrams/ai_human_collaboration.pdf',
      category: 'Enhanced Framework'
    },
    {
      id: 'blockchain-security-transparency',
      title: 'Blockchain Security & Transparency',
      description: 'Tamper-proof governance with citizen trust and verifiable records',
      src: '/diagrams/compiled_diagrams/blockchain_security_transparency.pdf',
      category: 'Enhanced Framework'
    },
    {
      id: 'cross-cultural-adaptation',
      title: 'Cross-Cultural Adaptation',
      description: 'System adaptability across different cultural contexts',
      src: '/diagrams/compiled_diagrams/cross_cultural_adaptation.pdf',
      category: 'Enhanced Framework'
    },
    {
      id: 'business-impact-roi',
      title: 'Business Impact & ROI Analysis',
      description: 'Market opportunity, financial projections, and strategic value',
      src: '/diagrams/compiled_diagrams/business_impact_roi.pdf',
      category: 'Enhanced Framework'
    },
    {
      id: 'implementation-timeline-roadmap',
      title: 'Implementation Timeline & Roadmap',
      description: '4-phase deployment strategy with milestones and scaling objectives',
      src: '/diagrams/compiled_diagrams/implementation_timeline_roadmap.pdf',
      category: 'Enhanced Framework'
    },
    {
      id: 'research-validation-results',
      title: 'Research Validation & Experimental Results',
      description: 'Cross-cultural validation, performance metrics, and statistical significance',
      src: '/diagrams/compiled_diagrams/research_validation_results.pdf',
      category: 'Enhanced Framework'
    },
    {
      id: 'uiux-quantum-mockups',
      title: 'UI/UX Quantum Visualization Interface',
      description: 'Quantum-enhanced user interface with superposition states and consensus indicators',
      src: '/diagrams/compiled_diagrams/uiux_quantum_mockups.pdf',
      category: 'Enhanced Framework'
    }
  ]

  const openModal = (item: any) => {
    setSelectedImage(item)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const isPDF = (src: string) => src.toLowerCase().endsWith('.pdf')

  const navigateNext = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage?.id)
    const nextIndex = (currentIndex + 1) % images.length
    setSelectedImage(images[nextIndex])
  }

  const navigatePrev = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage?.id)
    const prevIndex = (currentIndex - 1 + images.length) % images.length
    setSelectedImage(images[prevIndex])
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!selectedImage) return
    if (e.key === 'ArrowLeft') navigatePrev()
    if (e.key === 'ArrowRight') navigateNext()
    if (e.key === 'Escape') closeModal()
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    }}>
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2rem', borderBottom: '2px solid rgba(255,255,255,0.2)', paddingBottom: '1rem' }}>
          <h1 style={{ margin: 0, fontSize: '2.5rem', fontWeight: 'bold' }}>Architecture & Design Gallery</h1>
          <p style={{ marginTop: '1rem', opacity: 0.8, fontSize: '1rem' }}>
            Explore comprehensive architecture diagrams, enhanced framework visualizations, UI mockups, and design assets for the QuantumGov platform. The collection now includes detailed diagrams showing quantum-AI integration, cross-cultural adaptation, business impact analysis, and more. Click any item to view it in full-screen with zoom capabilities.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          {images.map((item) => (
            <div
              key={item.id}
              style={{
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.2)',
                cursor: 'pointer'
              }}
              onClick={() => openModal(item)}
            >
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden', background: '#fff' }}>
                {isPDF(item.src) ? (
                  <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #667eea20, #764ba220)'
                  }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📄</div>
                    <div style={{ color: '#667eea', fontWeight: '600', fontSize: '1.1rem' }}>PDF Document</div>
                    <div style={{ color: '#666', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                      {item.category}
                    </div>
                  </div>
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4='
                    }}
                  />
                )}
                <div style={{
                  position: 'absolute',
                  top: '0.5rem',
                  right: '0.5rem',
                  background: 'rgba(0,0,0,0.7)',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: '500'
                }}>
                  {item.category}
                </div>
              </div>

              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  margin: '0 0 0.5rem 0',
                  fontSize: '1.25rem',
                  fontWeight: '600'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  margin: 0,
                  opacity: 0.8,
                  fontSize: '0.95rem',
                  lineHeight: '1.4'
                }}>
                  {item.description}
                </p>

                <div style={{
                  marginTop: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.9rem',
                  opacity: 0.7
                }}>
                  <span>{isPDF(item.src) ? '📄' : '🔍'}</span>
                  <span>Click to view {isPDF(item.src) ? 'PDF' : 'full-size'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.95)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
            onClick={closeModal}
          >
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(255,255,255,0.2)',
                border: 'none',
                color: 'white',
                fontSize: '2rem',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10000
              }}
            >
              ×
            </button>

            <button
              onClick={navigatePrev}
              style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.2)',
                border: 'none',
                color: 'white',
                fontSize: '2rem',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10000
              }}
            >
              ←
            </button>

            <button
              onClick={navigateNext}
              style={{
                position: 'absolute',
                right: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.2)',
                border: 'none',
                color: 'white',
                fontSize: '2rem',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10000
              }}
            >
              →
            </button>

            <div
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                display: 'flex',
                flexDirection: 'column'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {isPDF(selectedImage.src) ? (
                <div style={{
                  background: 'white',
                  borderRadius: '8px',
                  padding: '3rem',
                  textAlign: 'center',
                  maxWidth: '600px'
                }}>
                  <div style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>📄</div>
                  <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.8rem', color: '#333' }}>
                    {selectedImage.title}
                  </h3>
                  <p style={{ margin: '0 0 2rem 0', color: '#666', fontSize: '1rem' }}>
                    {selectedImage.description}
                  </p>
                  <a
                    href={selectedImage.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      background: 'linear-gradient(135deg, #667eea, #764ba2)',
                      color: 'white',
                      padding: '1rem 2rem',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontSize: '1.1rem',
                      fontWeight: '600'
                    }}
                  >
                    📥 Open PDF
                  </a>
                </div>
              ) : (
                <>
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '80vh',
                      objectFit: 'contain',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '8px'
                    }}
                  />
                  <div style={{
                    marginTop: '1rem',
                    textAlign: 'center',
                    color: 'white'
                  }}>
                    <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.5rem' }}>
                      {selectedImage.title}
                    </h3>
                    <p style={{ margin: 0, opacity: 0.9 }}>
                      {selectedImage.description}
                    </p>
                    <a
                      href={selectedImage.src}
                      download
                      style={{
                        display: 'inline-block',
                        marginTop: '1rem',
                        background: 'rgba(255,255,255,0.2)',
                        color: 'white',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '8px',
                        textDecoration: 'none'
                      }}
                    >
                      📥 Download
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        <div style={{
          marginTop: '3rem',
          padding: '2rem',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '12px',
          border: '1px solid rgba(255,255,255,0.2)',
          textAlign: 'center'
        }}>
          <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem' }}>🎨 Figma Design Assets</h3>
          <p style={{ margin: '0 0 1.5rem 0', opacity: 0.9 }}>
            Access the complete Figma design file containing UI/UX designs, prototypes, and design system components.
          </p>
          <a
            href="/figma/Social%20R.fig"
            style={{
              display: 'inline-block',
              background: 'rgba(255,255,255,0.2)',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.3)'
            }}
          >
            📥 Download Figma File
          </a>
        </div>
      </div>
    </div>
  )
}