import ServerMarkdownViewer from '../../../components/ServerMarkdownViewer'

export default function TheoryPage() {
  return (
    <div>
      <ServerMarkdownViewer 
        filePath="public/materials/THEORY.md" 
        fileName="QuantumGov Theoretical Framework"
        pdfPath="/materials/QuantumGov_Framework_ENHANCED_ULTIMATE.pdf"
      />
    </div>
  )
}
