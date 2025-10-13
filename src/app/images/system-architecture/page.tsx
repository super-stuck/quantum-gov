import ImageViewer from '@/components/ImageViewer'

export default function SystemArchitectureViewer() {
  return (
    <ImageViewer
      src="/images/png/system_architecture.png"
      alt="QuantumGov System Architecture"
      title="System Architecture"
      description="Complete system architecture diagram showing all layers from quantum infrastructure to user interfaces."
      backLink="/images"
      backText="← Back to Image Gallery"
    />
  )
}