export default function ImageGallery() {
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
      description: 'Distributed microservices implementation',
      src: '/images/png/microservices_architecture.png',
      category: 'Architecture'
    },
    {
      id: 'microservices-architecture-hq',
      title: 'Microservices Architecture (HQ)',
      description: 'High-resolution microservices diagram',
      src: '/images/png/microservices_architecture_hq.png',
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
    }
  ]

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    }}>
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2rem', borderBottom: '2px solid rgba(255,255,255,0.2)', paddingBottom: '1rem' }}>
          <h1 style={{ margin: 0, fontSize: '2.5rem', fontWeight: 'bold' }}>Architecture & Design Gallery</h1>
          <p style={{ marginTop: '0.5rem', opacity: 0.9, fontSize: '1.1rem' }}>
            <a href="/docs" style={{ color: '#fff', opacity: 0.8 }}>← Back to Documentation</a>
          </p>
          <p style={{ marginTop: '1rem', opacity: 0.8, fontSize: '1rem' }}>
            Explore detailed architecture diagrams, UI mockups, and design assets for the QuantumGov platform. Click any image to view it in full-screen with zoom capabilities.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2rem',
          marginTop: '2rem'
        }}>
          {images.map((image) => (
            <div 
              key={image.id}
              style={{ 
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
            >
              <a href={`/images/${image.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img 
                    src={image.src}
                    alt={image.title}
                    style={{ 
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
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
                    {image.category}
                  </div>
                </div>
                
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ 
                    margin: '0 0 0.5rem 0',
                    fontSize: '1.25rem',
                    fontWeight: '600'
                  }}>
                    {image.title}
                  </h3>
                  <p style={{ 
                    margin: 0,
                    opacity: 0.8,
                    fontSize: '0.95rem',
                    lineHeight: '1.4'
                  }}>
                    {image.description}
                  </p>
                  
                  <div style={{ 
                    marginTop: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.9rem',
                    opacity: 0.7
                  }}>
                    <span>🔍</span>
                    <span>Click to view full-size</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

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