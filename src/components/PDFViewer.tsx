'use client'

import { useState } from 'react'

interface PDFViewerProps {
  src: string
  alt: string
  title: string
  description?: string
  backLink?: string
  backText?: string
}

export default function PDFViewer({ src, alt, title, description, backLink = '/docs', backText = '← Back to Docs' }: PDFViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [viewMode, setViewMode] = useState<'embed' | 'link'>('embed')

  const downloadPDF = () => {
    const link = document.createElement('a')
    link.href = src
    link.download = alt || 'document.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  const openInNewTab = () => {
    window.open(src, '_blank')
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    }}>
      {/* Header */}
      <div style={{ 
        position: 'sticky', 
        top: 0, 
        background: 'rgba(0,0,0,0.9)', 
        backdropFilter: 'blur(10px)',
        padding: '1rem 2rem',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        zIndex: 100
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <a href={backLink} style={{ color: '#fff', textDecoration: 'none', opacity: 0.8, fontSize: '0.9rem' }}>
              {backText}
            </a>
            <h1 style={{ margin: '0.5rem 0 0 0', fontSize: '1.5rem' }}>{title}</h1>
            {description && (
              <p style={{ margin: '0.25rem 0 0 0', opacity: 0.8, fontSize: '0.9rem' }}>{description}</p>
            )}
          </div>
          
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <button 
              onClick={() => setViewMode(viewMode === 'embed' ? 'link' : 'embed')}
              style={{ 
                background: 'rgba(255,255,255,0.1)', 
                border: '1px solid rgba(255,255,255,0.2)', 
                color: 'white', 
                padding: '0.5rem 1rem', 
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              {viewMode === 'embed' ? 'Link View' : 'Embed View'}
            </button>
            <button 
              onClick={toggleFullscreen}
              style={{ 
                background: isFullscreen ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)', 
                border: '1px solid rgba(255,255,255,0.2)', 
                color: 'white', 
                padding: '0.5rem 1rem', 
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            </button>
            <button 
              onClick={openInNewTab}
              style={{ 
                background: 'rgba(255,255,255,0.1)', 
                border: '1px solid rgba(255,255,255,0.2)', 
                color: 'white', 
                padding: '0.5rem 1rem', 
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Open in New Tab
            </button>
            <button 
              onClick={downloadPDF}
              style={{ 
                background: 'rgba(255,255,255,0.1)', 
                border: '1px solid rgba(255,255,255,0.2)', 
                color: 'white', 
                padding: '0.5rem 1rem', 
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Download PDF
            </button>
          </div>
        </div>
      </div>

      {/* PDF Container */}
      <div style={{ 
        padding: isFullscreen ? '0' : '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: isFullscreen ? '100vh' : 'calc(100vh - 120px)',
        position: isFullscreen ? 'fixed' : 'relative',
        top: isFullscreen ? '0' : 'auto',
        left: isFullscreen ? '0' : 'auto',
        width: isFullscreen ? '100vw' : 'auto',
        height: isFullscreen ? '100vh' : 'auto',
        zIndex: isFullscreen ? 1000 : 'auto',
        background: isFullscreen ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'transparent'
      }}>
        <div 
          style={{ 
            width: isFullscreen ? '100%' : '100%',
            maxWidth: isFullscreen ? 'none' : '1200px',
            height: isFullscreen ? '100%' : '80vh',
            border: isFullscreen ? 'none' : '1px solid rgba(255,255,255,0.1)',
            borderRadius: isFullscreen ? '0' : '8px',
            background: 'rgba(255,255,255,0.95)',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          {viewMode === 'embed' ? (
            <iframe
              src={src}
              title={alt}
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: isFullscreen ? '0' : '8px'
              }}
            />
          ) : (
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'center', 
              height: '100%',
              background: 'white',
              color: '#333',
              padding: '2rem'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📄</div>
              <h3 style={{ marginBottom: '1rem', color: '#333' }}>PDF Document</h3>
              <p style={{ marginBottom: '2rem', textAlign: 'center', color: '#666' }}>
                Click the button below to view the PDF document in a new tab or download it directly.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button 
                  onClick={openInNewTab}
                  style={{ 
                    background: '#667eea', 
                    border: 'none', 
                    color: 'white', 
                    padding: '1rem 2rem', 
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 'bold'
                  }}
                >
                  View PDF
                </button>
                <button 
                  onClick={downloadPDF}
                  style={{ 
                    background: '#28a745', 
                    border: 'none', 
                    color: 'white', 
                    padding: '1rem 2rem', 
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 'bold'
                  }}
                >
                  Download PDF
                </button>
              </div>
            </div>
          )}
          
          {/* Fullscreen close button */}
          {isFullscreen && (
            <button
              onClick={toggleFullscreen}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(0,0,0,0.8)',
                border: 'none',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer',
                zIndex: 1001,
                fontSize: '1rem'
              }}
            >
              ✕ Close
            </button>
          )}
        </div>
      </div>
    </div>
  )
}