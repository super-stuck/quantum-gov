import ImageViewer from '@/components/ImageViewer'

export default function ExtensionFrameworkViewer() {
  return (
    <ImageViewer
      src="/images/png/extension_framework.png"
      alt="QuantumGov Extension Framework Architecture"
      title="Extension Framework Architecture"
      description="Modular extension architecture enabling third-party integrations and custom functionality within the QuantumGov ecosystem."
      backLink="/images"
      backText="← Back to Image Gallery"
    />
  )
}