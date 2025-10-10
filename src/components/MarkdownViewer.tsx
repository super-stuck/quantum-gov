'use client'

import { useState, useEffect } from 'react'

interface MarkdownViewerProps {
  filePath: string
  fileName?: string
  showRawLink?: boolean
}

export default function MarkdownViewer({ filePath, fileName, showRawLink = true }: MarkdownViewerProps) {
  const [content, setContent] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchPath = `/${filePath}`
    fetch(fetchPath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.text()
      })
      .then(text => {
        setContent(text)
        setLoading(false)
      })
      .catch(err => {
        setError(`Failed to load file: ${err.message}`)
        setLoading(false)
      })
  }, [filePath])

  const parseMarkdown = (markdown: string): string => {
    let html = markdown
      // Escape HTML first
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      
      // Headers (must be at start of line)
      .replace(/^### (.+)$/gm, '<h3>$1</h3>')
      .replace(/^## (.+)$/gm, '<h2>$1</h2>')
      .replace(/^# (.+)$/gm, '<h1>$1</h1>')
      
      // Bold and italic
      .replace(/\*\*([^\*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^\*]+)\*/g, '<em>$1</em>')
      
      // Code blocks (three backticks)
      .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
      
      // Inline code
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
      
      // Unordered lists (- or *)
      .replace(/^[\-\*] (.+)$/gm, '<li>$1</li>')
      
      // Ordered lists
      .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
      
      // Blockquotes
      .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
      
      // Horizontal rules
      .replace(/^---$/gm, '<hr>')
      
      // Line breaks (double newline becomes paragraph break)
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n/g, '<br>')

    // Wrap consecutive <li> elements in <ul> or <ol>
    html = html.replace(/(<li>.*?<\/li>)(\s*<li>.*?<\/li>)*/g, (match) => {
      return '<ul>' + match + '</ul>'
    })

    // Wrap content in paragraphs
    if (html && !html.startsWith('<h1>') && !html.startsWith('<h2>') && !html.startsWith('<h3>')) {
      html = '<p>' + html + '</p>'
    }

    return html
  }

  const displayName = fileName || filePath.split('/').pop() || 'Document'

  if (loading) {
    return (
      <div className="markdown-viewer loading">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading {displayName}...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="markdown-viewer error">
        <div className="error-message">
          <h3>Error Loading Document</h3>
          <p>{error}</p>
          {showRawLink && (
            <a href={`/${filePath}`} target="_blank" className="raw-link">
              Try viewing raw file →
            </a>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="markdown-viewer">
      <div className="markdown-header">
        <h1>{displayName}</h1>
        {showRawLink && (
          <div className="header-actions">
            <a href={`/${filePath}`} target="_blank" className="raw-link">
              View Raw File →
            </a>
          </div>
        )}
      </div>
      
      <div 
        className="markdown-content"
        dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
      />
      
      <style jsx>{`
        .markdown-viewer {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        @media (max-width: 768px) {
          .markdown-viewer {
            padding: 1rem;
          }

          .markdown-header {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .markdown-header h1 {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .markdown-viewer {
            padding: 0.5rem;
          }

          .markdown-header h1 {
            font-size: 1.3rem;
          }

          .raw-link {
            padding: 0.4rem 0.8rem;
            font-size: 0.85rem;
          }
        }

        .loading {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 300px;
        }

        .loading-spinner {
          text-align: center;
        }

        .spinner {
          border: 4px solid #f3f3f3;
          border-top: 4px solid #667eea;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 2s linear infinite;
          margin: 0 auto 1rem;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .error {
          text-align: center;
          padding: 3rem;
        }

        .error-message {
          color: #dc3545;
          background: #f8f9fa;
          border: 1px solid #dee2e6;
          border-radius: 8px;
          padding: 2rem;
        }

        .markdown-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 2px solid #667eea;
          padding-bottom: 1rem;
          margin-bottom: 2rem;
        }

        .markdown-header h1 {
          margin: 0;
          color: #333;
          font-size: 1.75rem;
        }

        .header-actions {
          font-size: 0.9rem;
        }

        .raw-link {
          color: #667eea;
          text-decoration: none;
          padding: 0.5rem 1rem;
          border: 1px solid #667eea;
          border-radius: 4px;
          transition: all 0.2s;
        }

        .raw-link:hover {
          background: #667eea;
          color: white;
        }

        :global(.markdown-content) {
          line-height: 1.7;
          color: #333;
        }

        :global(.markdown-content h1) {
          color: #333;
          margin: 2rem 0 1rem 0;
          font-size: 1.8rem;
          border-bottom: 2px solid #667eea;
          padding-bottom: 0.5rem;
        }

        :global(.markdown-content h2) {
          color: #444;
          margin: 1.5rem 0 1rem 0;
          font-size: 1.4rem;
          border-bottom: 1px solid #ddd;
          padding-bottom: 0.3rem;
        }

        :global(.markdown-content h3) {
          color: #555;
          margin: 1.2rem 0 0.8rem 0;
          font-size: 1.2rem;
        }

        :global(.markdown-content p) {
          margin: 1rem 0;
        }

        :global(.markdown-content ul) {
          margin: 1rem 0;
          padding-left: 2rem;
        }

        :global(.markdown-content li) {
          margin-bottom: 0.5rem;
        }

        :global(.markdown-content pre) {
          background: #f8f9fa;
          border: 1px solid #e9ecef;
          border-radius: 6px;
          padding: 1rem;
          overflow-x: auto;
          margin: 1rem 0;
        }

        :global(.markdown-content code) {
          background: #f8f9fa;
          padding: 0.2rem 0.4rem;
          border-radius: 3px;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 0.9em;
          color: #e83e8c;
        }

        :global(.markdown-content pre code) {
          background: none;
          padding: 0;
          color: #333;
        }

        :global(.markdown-content blockquote) {
          border-left: 4px solid #667eea;
          background: #f8f9ff;
          margin: 1rem 0;
          padding: 1rem 1.5rem;
          font-style: italic;
        }

        :global(.markdown-content a) {
          color: #667eea;
          text-decoration: none;
        }

        :global(.markdown-content a:hover) {
          text-decoration: underline;
        }

        :global(.markdown-content hr) {
          border: none;
          border-top: 2px solid #eee;
          margin: 2rem 0;
        }

        :global(.markdown-content strong) {
          color: #333;
          font-weight: 600;
        }

        :global(.markdown-content em) {
          font-style: italic;
          color: #555;
        }
      `}</style>
    </div>
  )
}