import ServerMarkdownViewer from '../../../components/ServerMarkdownViewer'

export default function VisualMaterialsViewer() {
  return (
    <div>
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <a href="/docs" style={{ color: '#667eea', textDecoration: 'none', display: 'inline-block', marginBottom: '1rem' }}>← Back to Documentation</a>
        <h1 style={{ color: '#333', marginBottom: '0.5rem' }}>Visual Materials & Diagrams</h1>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>Professional visualization suite for presentations and publications</p>
      </div>
      
      <ServerMarkdownViewer 
        filePath="public/materials/README_Visual_Materials.md"
        fileName="Visual Materials & Diagrams Guide"
        showRawLink={true}
      />
    </div>
  )
}
