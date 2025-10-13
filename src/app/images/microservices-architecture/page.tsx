import PDFViewer from '@/components/PDFViewer'

export default function MicroservicesArchitectureViewer() {
  return (
    <PDFViewer
      src="/diagrams/tikz/microservices_architecture.pdf"
      alt="QuantumGov Microservices Architecture"
      title="Microservices Architecture"
      description="Distributed microservices architecture for scalable and modular governance platform implementation with detailed service interactions and data flows."
      backLink="/images"
      backText="← Back to Image Gallery"
    />
  )
}
