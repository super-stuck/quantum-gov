import PDFViewer from '@/components/PDFViewer'

export default function BlockchainSecurityTransparencyImage() {
  return (
    <PDFViewer
      src="/diagrams/compiled_diagrams/blockchain_security_transparency.pdf"
      alt="QuantumGov Blockchain Security & Transparency"
      title="QuantumGov Blockchain Security & Transparency"
      description="This diagram showcases the multi-layer security architecture and public transparency system that ensures tamper-proof governance with citizen trust. It illustrates the blockchain chain, security components (cryptographic signatures, zero-knowledge proofs, quantum-resistant encryption), transparency mechanisms, validator networks, and citizen verification systems."
      backLink="/images"
      backText="← Back to Image Gallery"
    />
  )
}