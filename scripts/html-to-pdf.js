#!/usr/bin/env node
/*
 * HTML-to-PDF Converter
 * Converts HTML files to PDF using Chromium headless mode
 */
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const execAsync = promisify(exec);
const materialsDir = path.resolve(__dirname, '../public/materials');

async function main() {
  if (!fs.existsSync(materialsDir)) {
    console.error(`Materials directory not found: ${materialsDir}`);
    process.exit(1);
  }

  const entries = fs.readdirSync(materialsDir);
  const htmlFiles = entries.filter((f) => f.toLowerCase().endsWith('.html'));

  if (htmlFiles.length === 0) {
    console.log('No HTML files found in materials. Nothing to do.');
    return;
  }

  console.log(`Found ${htmlFiles.length} HTML files. Converting to PDF with Chromium...`);

  for (const file of htmlFiles) {
    const inFile = path.join(materialsDir, file);
    const outFile = path.join(materialsDir, file.replace(/\.html$/i, '.pdf'));
    
    // Skip if PDF already exists and is newer
    if (fs.existsSync(outFile)) {
      const inStat = fs.statSync(inFile);
      const outStat = fs.statSync(outFile);
      if (outStat.mtime > inStat.mtime) {
        console.log(`⏭ Skipped ${path.basename(outFile)} (already up-to-date)`);
        continue;
      }
    }
    
    try {
      // Use Chromium headless to convert HTML to PDF
      const cmd = [
        'chromium',
        '--headless',
        '--disable-gpu',
        '--disable-software-rasterizer',
        '--disable-dev-shm-usage',
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-extensions',
        '--disable-plugins',
        '--disable-images',  // Skip images for faster processing
        '--virtual-time-budget=30000',  // 30 second timeout
        '--run-all-compositor-stages-before-draw',
        '--disable-background-timer-throttling',
        '--disable-renderer-backgrounding',
        '--disable-backgrounding-occluded-windows',
        `--print-to-pdf="${outFile}"`,
        `--print-to-pdf-no-header`,
        '--disable-web-security',
        '--allow-running-insecure-content',
        `file://${inFile}`
      ].join(' ');
      
      console.log(`🔄 Converting ${file} to PDF...`);
      await execAsync(cmd);
      
      // Verify PDF was created
      if (fs.existsSync(outFile) && fs.statSync(outFile).size > 0) {
        console.log(`✔ Generated ${path.basename(outFile)} from HTML`);
      } else {
        throw new Error('PDF file was not created or is empty');
      }
    } catch (err) {
      console.error(`✖ Failed to convert ${file}:`, err.message.split('\n')[0]);
      
      // Try alternative approach with different flags
      try {
        console.log(`🔄 Retrying ${file} with alternative settings...`);
        const altCmd = [
          'chromium',
          '--headless',
          '--disable-gpu',
          '--no-sandbox',
          '--disable-dev-shm-usage',
          '--disable-extensions',
          '--virtual-time-budget=60000',  // Longer timeout
          `--print-to-pdf="${outFile}"`,
          `file://${inFile}`
        ].join(' ');
        
        await execAsync(altCmd);
        
        if (fs.existsSync(outFile) && fs.statSync(outFile).size > 0) {
          console.log(`✔ Generated ${path.basename(outFile)} (retry successful)`);
        } else {
          console.error(`✖ Retry failed for ${file}`);
        }
      } catch (retryErr) {
        console.error(`✖ Both attempts failed for ${file}:`, retryErr.message.split('\n')[0]);
      }
    }
  }
  
  // Clean up HTML files after successful conversion
  console.log('\n🧹 Cleaning up HTML files...');
  for (const file of htmlFiles) {
    const htmlFile = path.join(materialsDir, file);
    const pdfFile = path.join(materialsDir, file.replace(/\.html$/i, '.pdf'));
    
    if (fs.existsSync(pdfFile) && fs.statSync(pdfFile).size > 0) {
      try {
        fs.unlinkSync(htmlFile);
        console.log(`🗑️ Removed ${file} (PDF generated successfully)`);
      } catch (err) {
        console.warn(`⚠️ Could not remove ${file}:`, err.message);
      }
    }
  }

  console.log('\nDone.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});