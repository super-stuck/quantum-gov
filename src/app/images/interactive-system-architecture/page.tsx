import PDFViewer from "@/components/PDFViewer"

export default function InteractiveSystemArchitectureImage() {
  return (
    <PDFViewer
      src="/diagrams/compiled_diagrams/interactive_system_architecture.pdf"
      alt="Interactive System Architecture"
      title="Interactive System Architecture"
      description="This detailed layered architecture diagram shows the complete QuantumGov system structure with four distinct layers: User Interface & Experience, Application Services & Logic, Quantum-AI Processing Engine, and Infrastructure & Storage. The diagram illustrates component interactions, data flows, and scalability considerations across the entire platform."
      backLink="/images"
      backText="← Back to Image Gallery"
    />
  )
}
