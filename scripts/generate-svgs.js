const fs = require('fs');
const path = require('path');
import mermaid from 'mermaid';

const inputDir = path.join(__dirname, '../mermaid-diagrams');
const outputDir = path.join(__dirname, '../public/diagrams/quantumgov-mermaid-svgs');

const mermaidAPI = mermaid.default;

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const diagramFiles = [
  { name: 'system-architecture', file: 'system-architecture.mmd' },
  { name: 'workflow-diagram', file: 'workflow-diagram.mmd' },
  { name: 'decision-flow', file: 'decision-flow.mmd' },
  { name: 'governance-model', file: 'governance-model.mmd' },
  { name: 'integration-flow', file: 'integration-flow.mmd' },
  { name: 'data-flow', file: 'data-flow.mmd' }
];

async function renderDiagrams() {
  for (const diagram of diagramFiles) {
    try {
      const inputPath = path.join(inputDir, diagram.file);
      const outputPath = path.join(outputDir, `${diagram.name}.svg`);

      console.log(`Rendering ${diagram.file}...`);

      const definition = fs.readFileSync(inputPath, 'utf-8');

      const { svg } = await mermaidAPI.render(diagram.name, definition);

      fs.writeFileSync(outputPath, svg);

      console.log(`✓ Generated ${outputPath}`);
    } catch (error) {
      console.error(`Error rendering ${diagram.file}:`, error.message);
    }
  }

  console.log('\nAll diagrams rendered successfully!');
}

renderDiagrams();
