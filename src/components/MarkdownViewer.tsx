'use client'

import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github.css'
import 'katex/dist/katex.min.css'

interface MarkdownViewerProps {
  filePath: string
  fileName?: string
  title?: string
  showRawLink?: boolean
  pdfPath?: string
}

export default function MarkdownViewer({ filePath, fileName, title, showRawLink = true, pdfPath }: MarkdownViewerProps) {
  const [content, setContent] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchPath = filePath.startsWith('/') ? filePath : `/${filePath}`
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

  const displayName = title || fileName || filePath.split('/').pop() || 'Document'

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
        <div className="header-actions">
          {pdfPath && (
            <a href={pdfPath} target="_blank" className="pdf-link">
              📄 View PDF
            </a>
          )}
          {showRawLink && (
            <a href={`/${filePath}`} target="_blank" className="raw-link">
              📜 View Raw File
            </a>
          )}
        </div>
      </div>
      
      <div className="markdown-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex, rehypeHighlight]}
          components={{
            // Open external links in new tab
            a: ({ node, href, children, ...props }) => {
              const isExternal = href?.startsWith('http')
              return (
                <a
                  {...props}
                  href={href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                >
                  {children}
                </a>
              )
            },
            // Custom code block styling
            pre: ({ children, ...props }) => (
              <pre {...props} className="code-block">
                {children}
              </pre>
            ),
            // Custom table styling
            table: ({ children, ...props }) => (
              <div className="table-wrapper">
                <table {...props}>{children}</table>
              </div>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
      
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
          display: flex;
          gap: 0.5rem;
        }

        .pdf-link, .raw-link {
          text-decoration: none;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .pdf-link {
          background: #28a745;
          border: 1px solid #28a745;
          color: white;
        }

        .pdf-link:hover {
          background: #218838;
          border-color: #218838;
        }

        .raw-link {
          color: #667eea;
          border: 1px solid #667eea;
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

        :global(.markdown-content pre),
        :global(.markdown-content .code-block) {
          background: #f8f9fa;
          border: 1px solid #e9ecef;
          border-radius: 6px;
          padding: 1rem;
          overflow-x: auto;
          margin: 1rem 0;
          font-family: 'Fira Code', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
        }

        :global(.markdown-content code) {
          background: #f1f3f4;
          padding: 0.2rem 0.4rem;
          border-radius: 3px;
          font-family: 'Fira Code', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 0.9em;
          color: #d73a49;
          font-weight: 500;
        }

        :global(.markdown-content pre code) {
          background: none;
          padding: 0;
          color: inherit;
          font-weight: normal;
        }

        /* GitHub-style table styling */
        :global(.markdown-content .table-wrapper) {
          overflow-x: auto;
          margin: 1rem 0;
        }

        :global(.markdown-content table) {
          border-collapse: collapse;
          border-spacing: 0;
          width: 100%;
          max-width: 100%;
          border: 1px solid #d0d7de;
          border-radius: 6px;
          overflow: hidden;
        }

        :global(.markdown-content th),
        :global(.markdown-content td) {
          padding: 6px 13px;
          border: 1px solid #d0d7de;
          text-align: left;
        }

        :global(.markdown-content th) {
          font-weight: 600;
          background-color: #f6f8fa;
        }

        :global(.markdown-content tr:nth-child(even)) {
          background-color: #f6f8fa;
        }

        /* Task list styling */
        :global(.markdown-content .task-list-item) {
          list-style-type: none;
        }

        :global(.markdown-content .task-list-item input) {
          margin: 0 0.2em 0.25em -1.6em;
          vertical-align: middle;
        }

        /* Strikethrough for completed tasks */
        :global(.markdown-content .task-list-item input:checked + *) {
          text-decoration: line-through;
          color: #656d76;
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