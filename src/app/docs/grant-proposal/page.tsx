import MarkdownViewer from '@/components/MarkdownViewer';

export default function GrantProposal() {
  return (
    <MarkdownViewer 
      filePath="materials/QuantumGov_Grant_Proposal.md"
      title="Grant Proposal: QuantumGov Framework"
      pdfPath="/materials/QuantumGov_Grant_Proposal.pdf"
    />
  );
}
