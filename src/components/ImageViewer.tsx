'use client'

import { useState } from 'react'

interface ImageViewerProps {
  src: string
  alt: string
  title: string
  description?: string
  backLink?: string
  backText?: string
}

export default function ImageViewer({ src, alt, title, description, backLink = '/docs', backText = '← Back to Docs' }: ImageViewerProps) {
  const [isZoomed, setIsZoomed] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(1)

  const handleZoom = (level: number) => {
    setZoomLevel(level)
    setIsZoomed(level > 1)
  }

  const downloadImage = () => {
    const link = document.createElement('a')
    link.href = src
    link.download = alt || 'image'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
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
              onClick={() => handleZoom(0.5)}
              style={{ 
                background: zoomLevel === 0.5 ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)', 
                border: '1px solid rgba(255,255,255,0.2)', 
                color: 'white', 
                padding: '0.5rem 1rem', 
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              50%
            </button>
            <button 
              onClick={() => handleZoom(1)}
              style={{ 
                background: zoomLevel === 1 ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)', 
                border: '1px solid rgba(255,255,255,0.2)', 
                color: 'white', 
                padding: '0.5rem 1rem', 
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              100%
            </button>
            <button 
              onClick={() => handleZoom(1.5)}
              style={{ 
                background: zoomLevel === 1.5 ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)', 
                border: '1px solid rgba(255,255,255,0.2)', 
                color: 'white', 
                padding: '0.5rem 1rem', 
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              150%
            </button>
            <button 
              onClick={() => handleZoom(2)}
              style={{ 
                background: zoomLevel === 2 ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)', 
                border: '1px solid rgba(255,255,255,0.2)', 
                color: 'white', 
                padding: '0.5rem 1rem', 
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              200%
            </button>
            <button 
              onClick={downloadImage}
              style={{ 
                background: 'rgba(255,255,255,0.1)', 
                border: '1px solid rgba(255,255,255,0.2)', 
                color: 'white', 
                padding: '0.5rem 1rem', 
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Download
            </button>
          </div>
        </div>
      </div>

      {/* Image Container */}
      <div style={{ 
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 120px)'
      }}>
        <div 
          style={{ 
            overflow: isZoomed ? 'auto' : 'visible',
            maxWidth: isZoomed ? '100%' : 'none',
            maxHeight: isZoomed ? '80vh' : 'none',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '8px',
            background: 'rgba(255,255,255,0.05)',
            padding: '1rem'
          }}
        >
          <img 
            src={src}
            alt={alt}
            style={{ 
              width: isZoomed ? `${zoomLevel * 100}%` : '100%',
              height: 'auto',
              display: 'block',
              borderRadius: '4px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
            }}
          />
        </div>
      </div>
    </div>
  )
}