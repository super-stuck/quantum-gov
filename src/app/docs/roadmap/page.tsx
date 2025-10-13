import ServerMarkdownViewer from '../../../components/ServerMarkdownViewer'

export default function RoadmapPage() {
  return (
    <div>
      <ServerMarkdownViewer 
        filePath="public/materials/QuantumGov_Implementation_Roadmap.md" 
        fileName="QuantumGov Implementation Roadmap"
        pdfPath="/materials/QuantumGov_Framework_ENHANCED_ULTIMATE.pdf"
      />
    </div>
  )
}
