import ServerMarkdownViewer from '../../../components/ServerMarkdownViewer'

export default function ResearchSynthesisViewer() {
  return (
    <div>
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <a href="/docs" style={{ color: '#667eea', textDecoration: 'none', display: 'inline-block', marginBottom: '1rem' }}>← Back to Documentation</a>
        <h1 style={{ color: '#333', marginBottom: '0.5rem' }}>Research Synthesis: Theoretical Foundations</h1>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>Academic insights from multiple disciplines informing Virtual Utopia design</p>
      </div>
      
      <ServerMarkdownViewer 
        filePath="public/materials/Research_Synthesis_Theoretical_Foundations_for_Virtual_Utopia.md"
        fileName="Research Synthesis: Theoretical Foundations for Virtual Utopia"
        showRawLink={true}
      />
    </div>
  )
}