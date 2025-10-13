import ServerMarkdownViewer from '../../../components/ServerMarkdownViewer'

export default function PitchDeckPage() {
  return (
    <div>
      <ServerMarkdownViewer 
        filePath="public/materials/QUANTUMGOV_INVESTOR_PITCH_DECK.md" 
        fileName="QuantumGov Investor Pitch Deck"
        pdfPath="/materials/QuantumGov_Framework_ENHANCED_ULTIMATE.pdf"
      />
    </div>
  )
}
