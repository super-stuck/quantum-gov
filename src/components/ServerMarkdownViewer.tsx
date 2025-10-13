import { readFileSync } from 'fs'
import { join } from 'path'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkRehype from 'remark-rehype'
import rehypeKatex from 'rehype-katex'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'

interface ServerMarkdownViewerProps {
  filePath: string
  fileName?: string
  showRawLink?: boolean
  pdfPath?: string
}

export default function ServerMarkdownViewer({ filePath, fileName, showRawLink = true, pdfPath }: ServerMarkdownViewerProps) {
  let content = ''
  let error = ''
  let htmlContent = ''

  try {
    const fullPath = join(process.cwd(), filePath)
    content = readFileSync(fullPath, 'utf8')
    
    // Process markdown with unified pipeline
    const result = unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkMath)
      .use(remarkRehype, {
        allowDangerousHtml: false,
      })
      .use(rehypeKatex)
      .use(rehypeHighlight)
      .use(rehypeStringify)
      .processSync(content)
    
    htmlContent = String(result)
  } catch (err) {
    error = `Failed to load or process file: ${err instanceof Error ? err.message : 'Unknown error'}`
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
        <div className="header-actions">
          {pdfPath && (
            <a href={pdfPath} target="_blank" className="pdf-link">
              📄 View PDF
            </a>
          )}
          {showRawLink && (
            <a href={rawLinkPath} target="_blank" className="raw-link">
              📜 View Raw File
            </a>
          )}
        </div>
      </div>
      
      <div 
        className="markdown-content"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
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
            display: flex;
            gap: 0.5rem;
          }
          .pdf-link, .raw-link {
            color: #667eea;
            text-decoration: none;
            padding: 0.5rem 1rem;
            border: 1px solid #667eea;
            border-radius: 4px;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            gap: 0.25rem;
          }
          .pdf-link {
            background: #28a745;
            border-color: #28a745;
            color: white;
          }
          .pdf-link:hover {
            background: #218838;
            border-color: #218838;
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
            font-family: 'Fira Code', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          }
          .markdown-content code {
            background: #f1f3f4;
            padding: 0.2rem 0.4rem;
            border-radius: 3px;
            font-family: 'Fira Code', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
            font-size: 0.9em;
            color: #d73a49;
            font-weight: 500;
          }
          .markdown-content pre code {
            background: none;
            padding: 0;
            color: inherit;
            font-weight: normal;
          }
          /* GitHub-style table styling */
          .markdown-content table {
            border-collapse: collapse;
            border-spacing: 0;
            width: 100%;
            max-width: 100%;
            border: 1px solid #d0d7de;
            border-radius: 6px;
            overflow: hidden;
            margin: 1rem 0;
          }
          .markdown-content th,
          .markdown-content td {
            padding: 6px 13px;
            border: 1px solid #d0d7de;
            text-align: left;
          }
          .markdown-content th {
            font-weight: 600;
            background-color: #f6f8fa;
          }
          .markdown-content tr:nth-child(even) {
            background-color: #f6f8fa;
          }
          /* Task list styling */
          .markdown-content .task-list-item {
            list-style-type: none;
          }
          .markdown-content .task-list-item input {
            margin: 0 0.2em 0.25em -1.6em;
            vertical-align: middle;
          }
          /* Strikethrough for completed tasks */
          .markdown-content .task-list-item input:checked + * {
            text-decoration: line-through;
            color: #656d76;
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