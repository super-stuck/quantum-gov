#!/usr/bin/env node
/*
 * Build Materials PDFs
 * Converts all .md files under public/materials to .pdf using pandoc.
 */
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const execAsync = promisify(exec);
const materialsDir = path.resolve(__dirname, '../public/materials');
const cssPath = path.resolve(__dirname, './templates/materials-pdf.css');

// Comprehensive emoji and Unicode replacement mapping
const unicodeReplacements = {
  // Status indicators
  '✅': '[COMPLETE]',
  '❌': '[CANCELLED]', 
  'ℹ️': '[INFO]',
  '⚠️': '[WARNING]',
  '❗': '[ALERT]',
  
  // Action and process emojis
  '🚀': '[LAUNCH]',
  '🎯': '[TARGET]',
  '📋': '[CHECKLIST]',
  '📄': '[DOCUMENT]',
  '🔗': '[LINK]',
  '💡': '[IDEA]',
  '⚡': '[FAST]',
  '🌟': '[FEATURED]',
  '📊': '[ANALYTICS]',
  '🔍': '[SEARCH]',
  '⭐': '[IMPORTANT]',
  '📝': '[NOTES]',
  '📧': '[EMAIL]',
  '📞': '[PHONE]',
  '🏢': '[BUILDING]',
  '🏦': '[BANK]',
  '🏫': '[SCHOOL]',
  '🏭': '[FACTORY]',
  
  // Technology and science
  '💻': '[COMPUTER]',
  '🔧': '[TOOLS]',
  '🔬': '[MICROSCOPE]',
  '💫': '[QUANTUM]',
  '⚙️': '[SETTINGS]',
  
  // Business and finance
  '💰': '[MONEY]',
  '💳': '[CARD]',
  '💼': '[BRIEFCASE]',
  '📈': '[TRENDING_UP]',
  '📉': '[TRENDING_DOWN]',
  
  // Time and calendar
  '📅': '[CALENDAR]',
  '⏰': '[ALARM]',
  '⏳': '[HOURGLASS]',
  
  // Greek letters (common in scientific notation)
  'α': 'alpha',
  'β': 'beta', 
  'γ': 'gamma',
  'δ': 'delta',
  'ε': 'epsilon',
  'ζ': 'zeta',
  'η': 'eta',
  'θ': 'theta',
  'ι': 'iota',
  'κ': 'kappa',
  'λ': 'lambda',
  'μ': 'mu',
  'ν': 'nu',
  'ξ': 'xi',
  'ο': 'omicron',
  'π': 'pi',
  'ρ': 'rho',
  'σ': 'sigma',
  'τ': 'tau',
  'υ': 'upsilon',
  'φ': 'phi',
  'χ': 'chi',
  'ψ': 'psi',
  'ω': 'omega',
  
  // Mathematical symbols
  '∈': 'in',        // element of
  '∉': 'not_in',    // not element of
  '∑': 'sum',       // summation
  '∏': 'product',   // product
  '√': 'sqrt',      // square root
  '∞': 'infinity',  // infinity
  '∧': 'and',       // logical and
  '∨': 'or',        // logical or
  '±': '+/-',       // plus-minus
  '≠': '!=',        // not equal
  '≤': '<=',        // less than or equal
  '≥': '>=',        // greater than or equal
  '×': 'x',         // multiplication
  '÷': '/',         // division
};

// Function to clean markdown content for LaTeX compatibility
function cleanMarkdownForPDF(content) {
  if (!content || content.length === 0) {
    return content;
  }
  
  let cleaned = content;
  
  try {
    // Apply specific replacements safely
    Object.entries(unicodeReplacements).forEach(([unicode, replacement]) => {
      if (unicode && replacement) {
        // Use simple string replacement instead of regex for problematic characters
        cleaned = cleaned.split(unicode).join(replacement);
      }
    });
    
    // Handle remaining problematic characters with simple replacements
    // Replace common problematic patterns
    cleaned = cleaned
      // Remove variation selectors
      .replace(/\uFE0E/g, '')    // Variation Selector-15 (text)
      .replace(/\uFE0F/g, '')    // Variation Selector-16 (emoji)
      // Replace common emoji patterns
      .replace(/[\u{1F600}-\u{1F64F}]/gu, '[FACE]')     // Emoticons
      .replace(/[\u{1F300}-\u{1F5FF}]/gu, '[SYMBOL]')   // Misc Symbols
      .replace(/[\u{1F680}-\u{1F6FF}]/gu, '[ITEM]')     // Transport
      .replace(/[\u{1F900}-\u{1F9FF}]/gu, '[ICON]')     // Supplemental
      .replace(/[\u{2600}-\u{26FF}]/gu, '[MISC]')       // Miscellaneous Symbols
      .replace(/[\u{2700}-\u{27BF}]/gu, '[DINGBAT]')    // Dingbats
      // Clean up zero-width and problematic characters
      .replace(/[\u200B-\u200D]/g, '')                   // Zero-width spaces
      .replace(/\uFEFF/g, '')                            // BOM
      // Clean up multiple spaces
      .replace(/\s{3,}/g, '  ');
      
  } catch (error) {
    console.warn(`Warning: Unicode cleaning failed for content, using original: ${error.message}`);
    // Return original content if cleaning fails
    return content;
  }
    
  return cleaned;
}

async function main() {
  if (!fs.existsSync(materialsDir)) {
    console.error(`Materials directory not found: ${materialsDir}`);
    process.exit(1);
  }

  const entries = fs.readdirSync(materialsDir);
  const mdFiles = entries.filter((f) => f.toLowerCase().endsWith('.md'));

  if (mdFiles.length === 0) {
    console.log('No markdown files found in materials. Nothing to do.');
    return;
  }

  console.log(`Found ${mdFiles.length} markdown files. Generating PDFs with pandoc...`);

  for (const file of mdFiles) {
    const inFile = path.join(materialsDir, file);
    const outFile = path.join(materialsDir, file.replace(/\.md$/i, '.pdf'));
    
    // Skip if PDF already exists from original sources
    if (fs.existsSync(outFile)) {
      const inStat = fs.statSync(inFile);
      const outStat = fs.statSync(outFile);
      if (outStat.mtime > inStat.mtime) {
        console.log(`⏭ Skipped ${path.basename(outFile)} (already up-to-date)`);
        continue;
      }
    }
    
    try {
      // Create cleaned temporary file
      const tempFile = path.join(materialsDir, `temp_${file}`);
      const originalContent = fs.readFileSync(inFile, 'utf8');
      const cleanedContent = cleanMarkdownForPDF(originalContent);
      fs.writeFileSync(tempFile, cleanedContent, 'utf8');
      
      let success = false;
      
      // Method 1: Try direct markdown to PDF with weasyprint
      try {
        let cmd = `pandoc "${tempFile}" -o "${outFile}" --pdf-engine=weasyprint --from=markdown --to=pdf`;
        if (fs.existsSync(cssPath)) {
          cmd += ` --css="${cssPath}"`;
        }
        cmd += ` --metadata=title="QuantumGov Materials" --metadata=author="QuantumGov Team"`;
        
        await execAsync(cmd);
        console.log(`✔ Generated ${path.basename(outFile)} (weasyprint)`);
        success = true;
      } catch (err1) {
        console.log(`⚠ Weasyprint failed for ${file}, trying LaTeX...`);
        
        // Method 2: Try default LaTeX engine
        try {
          let cmd = `pandoc "${tempFile}" -o "${outFile}" --from=markdown --to=pdf`;
          if (fs.existsSync(cssPath)) {
            cmd += ` --css="${cssPath}"`;
          }
          cmd += ` --metadata=title="QuantumGov Materials" --metadata=author="QuantumGov Team"`;
          
          await execAsync(cmd);
          console.log(`✔ Generated ${path.basename(outFile)} (latex)`);
          success = true;
        } catch (err2) {
          console.log(`⚠ LaTeX failed for ${file}, trying HTML approach...`);
          
          // Method 3: HTML-to-PDF via intermediate HTML
          try {
            const htmlFile = path.join(materialsDir, `temp_${file.replace('.md', '.html')}`);
            
            // Generate HTML first
            let htmlCmd = `pandoc "${tempFile}" -o "${htmlFile}" --from=markdown --to=html5 --standalone`;
            if (fs.existsSync(cssPath)) {
              htmlCmd += ` --css="${cssPath}"`;
            }
            htmlCmd += ` --metadata=title="QuantumGov Materials" --metadata=author="QuantumGov Team"`;
            
            await execAsync(htmlCmd);
            console.log(`ℹ Generated intermediate HTML for ${file}`);
            
            // Try to convert HTML to PDF using wkhtmltopdf if available
            try {
              const pdfCmd = `wkhtmltopdf --page-size A4 --margin-top 20mm --margin-bottom 20mm --margin-left 15mm --margin-right 15mm "${htmlFile}" "${outFile}"`;
              await execAsync(pdfCmd);
              console.log(`✔ Generated ${path.basename(outFile)} (html-to-pdf)`);
              success = true;
            } catch (err3) {
              console.log(`⚠ wkhtmltopdf not available, trying browser print CSS approach...`);
              
              // Method 4: Basic approach - just create a simple HTML version
              const simpleHtml = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>QuantumGov Materials</title>
<style>
body { font-family: Arial, sans-serif; line-height: 1.6; margin: 2cm; }
h1, h2, h3 { color: #2563eb; }
code { background: #f4f4f4; padding: 2px 4px; }
pre { background: #f4f4f4; padding: 10px; overflow-x: auto; }
</style>
</head>
<body>
${fs.readFileSync(htmlFile, 'utf8').replace(/<\/?(!DOCTYPE|html|head|body)[^>]*>/gi, '')}
</body>
</html>`;
              
              // Save as HTML for manual conversion
              const finalHtmlFile = path.join(materialsDir, file.replace('.md', '.html'));
              fs.writeFileSync(finalHtmlFile, simpleHtml, 'utf8');
              console.log(`ℹ Generated ${path.basename(finalHtmlFile)} (manual conversion needed)`);
            }
            
            // Clean up temp HTML
            if (fs.existsSync(htmlFile)) {
              fs.unlinkSync(htmlFile);
            }
          } catch (err3) {
            console.error(`✖ All methods failed for ${file}:`, err3.message.split('\n')[0]);
          }
        }
      }
      
      // Clean up temp file
      if (fs.existsSync(tempFile)) {
        fs.unlinkSync(tempFile);
      }
    } catch (err) {
      console.error(`✖ Error processing ${file}:`, err.message);
    }
  }

  console.log('Done.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
