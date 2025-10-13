'use client'

import PDFViewer from '@/components/PDFViewer'

export default function ResearchValidationResultsPage() {
  return (
    <PDFViewer
      src="/diagrams/compiled_diagrams/research_validation_results.pdf"
      alt="Research Validation & Experimental Results"
      title="QuantumGov Research Validation"
      description="Comprehensive research validation covering cross-cultural adaptation, democratic participation improvements, corruption detection accuracy, and statistical significance across multiple experimental studies."
      backLink="/compiled-diagrams"
      backText="← Back to Compiled Diagrams"
    />
  )
}
