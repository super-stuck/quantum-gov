'use client'

import PDFViewer from '@/components/PDFViewer'

export default function ImplementationTimelineRoadmapPage() {
  return (
    <PDFViewer
      src="/diagrams/compiled_diagrams/implementation_timeline_roadmap.pdf"
      alt="Implementation Timeline & Roadmap"
      title="QuantumGov Implementation Timeline"
      description="A comprehensive 4-phase deployment strategy for the QuantumGov framework, including milestones, scaling objectives, investment requirements, and risk management."
      backLink="/compiled-diagrams"
      backText="← Back to Compiled Diagrams"
    />
  )
}
