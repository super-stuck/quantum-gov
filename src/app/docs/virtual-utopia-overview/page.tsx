import ServerMarkdownViewer from '../../../components/ServerMarkdownViewer'

export default function VirtualUtopiaOverviewViewer() {
  return (
    <div>
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <a href="/docs" style={{ color: '#667eea', textDecoration: 'none', display: 'inline-block', marginBottom: '1rem' }}>← Back to Documentation</a>
        <h1 style={{ color: '#333', marginBottom: '0.5rem' }}>Virtual Utopia: Project Overview</h1>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>Decentralized virtual nation platform with social media and digital governance</p>
      </div>
      
      <ServerMarkdownViewer 
        filePath="public/materials/README.md"
        fileName="Virtual Utopia: Decentralized Virtual Nation Platform"
        showRawLink={true}
      />
    </div>
  )
}