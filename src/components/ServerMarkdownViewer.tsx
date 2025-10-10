import { readFileSync } from 'fs'
import { join } from 'path'

interface ServerMarkdownViewerProps {
  filePath: string
  fileName?: string
  showRawLink?: boolean
}

export default function ServerMarkdownViewer({ filePath, fileName, showRawLink = true }: ServerMarkdownViewerProps) {
  let content = ''
  let error = ''

  try {
    const fullPath = join(process.cwd(), filePath)
    content = readFileSync(fullPath, 'utf8')
  } catch (err) {
    error = `Failed to load file: ${err instanceof Error ? err.message : 'Unknown error'}`
  }

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
  const rawLinkPath = filePath.startsWith('public/') ? `/${filePath.replace('public/', '')}` : `/${filePath}`

  if (error) {
    return (
      <div className="markdown-viewer error">
        <div className="error-message">
          <h3>Error Loading Document</h3>
          <p>{error}</p>
          {showRawLink && (
            <a href={rawLinkPath} target="_blank" className="raw-link">
              Try viewing raw file →
            </a>
          )}
        </div>
<style dangerouslySetInnerHTML={{
          __html: `
            .markdown-viewer {
              max-width: 800px;
              margin: 0 auto;
              padding: 2rem;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
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
          `
        }} />
      </div>
    )
  }

  return (
    <div className="markdown-viewer">
      <div className="markdown-header">
        <h1>{displayName}</h1>
        {showRawLink && (
          <div className="header-actions">
            <a href={rawLinkPath} target="_blank" className="raw-link">
              View Raw File →
            </a>
          </div>
        )}
      </div>
      
      <div 
        className="markdown-content"
        dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
      />
      
<style dangerouslySetInnerHTML={{
        __html: `
          .markdown-viewer {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
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
          .markdown-content {
            line-height: 1.7;
            color: #333;
          }
          .markdown-content h1 {
            color: #333;
            margin: 2rem 0 1rem 0;
            font-size: 1.8rem;
            border-bottom: 2px solid #667eea;
            padding-bottom: 0.5rem;
          }
          .markdown-content h2 {
            color: #444;
            margin: 1.5rem 0 1rem 0;
            font-size: 1.4rem;
            border-bottom: 1px solid #ddd;
            padding-bottom: 0.3rem;
          }
          .markdown-content h3 {
            color: #555;
            margin: 1.2rem 0 0.8rem 0;
            font-size: 1.2rem;
          }
          .markdown-content p {
            margin: 1rem 0;
          }
          .markdown-content ul {
            margin: 1rem 0;
            padding-left: 2rem;
          }
          .markdown-content li {
            margin-bottom: 0.5rem;
          }
          .markdown-content pre {
            background: #f8f9fa;
            border: 1px solid #e9ecef;
            border-radius: 6px;
            padding: 1rem;
            overflow-x: auto;
            margin: 1rem 0;
          }
          .markdown-content code {
            background: #f8f9fa;
            padding: 0.2rem 0.4rem;
            border-radius: 3px;
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
            font-size: 0.9em;
            color: #e83e8c;
          }
          .markdown-content pre code {
            background: none;
            padding: 0;
            color: #333;
          }
          .markdown-content blockquote {
            border-left: 4px solid #667eea;
            background: #f8f9ff;
            margin: 1rem 0;
            padding: 1rem 1.5rem;
            font-style: italic;
          }
          .markdown-content a {
            color: #667eea;
            text-decoration: none;
          }
          .markdown-content a:hover {
            text-decoration: underline;
          }
          .markdown-content hr {
            border: none;
            border-top: 2px solid #eee;
            margin: 2rem 0;
          }
          .markdown-content strong {
            color: #333;
            font-weight: 600;
          }
          .markdown-content em {
            font-style: italic;
            color: #555;
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
        `
      }} />
    </div>
  )
}