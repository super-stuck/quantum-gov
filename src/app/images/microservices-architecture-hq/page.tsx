import PDFViewer from '@/components/PDFViewer'

export default function MicroservicesArchitectureHQViewer() {
  return (
    <PDFViewer
      src="/diagrams/tikz/quantum_microservices_architecture.pdf"
      alt="QuantumGov Quantum Microservices Architecture (High Quality)"
      title="Quantum Microservices Architecture (High Quality)"
      description="Advanced quantum-enhanced microservices architecture with quantum communication layers, entanglement protocols, and distributed quantum computing components for the QuantumGov platform."
      backLink="/images"
      backText="← Back to Image Gallery"
    />
  )
}
