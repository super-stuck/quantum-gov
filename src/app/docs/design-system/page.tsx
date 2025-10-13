import ServerMarkdownViewer from '../../../components/ServerMarkdownViewer'

export default function DesignSystemPage() {
  return (
    <div>
      <ServerMarkdownViewer 
        filePath="public/ui/DESIGN_SYSTEM.md" 
        fileName="QuantumGov Design System"
        pdfPath="/materials/Virtual_Utopia_Research.pdf"
      />
    </div>
  )
}
