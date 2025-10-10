import ServerMarkdownViewer from '../../../components/ServerMarkdownViewer'

export default function ExecutiveSummaryPage() {
  return (
    <div>
      <ServerMarkdownViewer 
        filePath="public/materials/QuantumGov_Executive_Summary.md" 
        fileName="QuantumGov Executive Summary"
      />
    </div>
  )
}
