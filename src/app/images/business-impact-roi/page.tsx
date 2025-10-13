import PDFViewer from "@/components/PDFViewer"

export default function BusinessImpactROIImage() {
  return (
    <PDFViewer
      src="/diagrams/compiled_diagrams/business_impact_roi.pdf"
      alt="QuantumGov Business Impact & ROI Analysis"
      title="QuantumGov Business Impact & ROI Analysis"
      description="This comprehensive business analysis diagram presents the market opportunity, financial projections, and strategic value of QuantumGov. It shows the progression from initial seed investment through various funding rounds to potential IPO, with detailed market penetration strategies across digital nations, corporate governance, government technology, and social platforms."
      backLink="/images"
      backText="← Back to Image Gallery"
    />
  )
}
