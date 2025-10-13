import ImageViewer from '@/components/ImageViewer'

export default function NetworkTopologyViewer() {
  return (
    <ImageViewer
      src="/images/png/network_topology.png"
      alt="QuantumGov Network Topology"
      title="Network Topology"
      description="Network infrastructure topology showing quantum-secure communication channels and distributed node architecture."
      backLink="/images"
      backText="← Back to Image Gallery"
    />
  )
}