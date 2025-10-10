#!/usr/bin/env bash

# QuantumGov Documentation Site - Static Build Script
echo "🚀 Building QuantumGov Documentation Site..."

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the static site
echo "🔨 Building static site..."
npm run build

# Copy files from parent virtual-utopia directory
echo "📂 Copying files from virtual-utopia directory..."
if [ -d "../" ] && [ -d "out" ]; then
    # Create directory structure
    mkdir -p out/materials
    mkdir -p out/papers
    mkdir -p out/presentations
    mkdir -p out/diagrams
    mkdir -p out/figma
    mkdir -p out/compiled-pdfs/papers
    mkdir -p out/compiled-pdfs/presentations
    
    # Copy .tex, .pdf, .md files from parent directory
    cp ../*.tex out/materials/ 2>/dev/null || true
    cp ../*.pdf out/materials/ 2>/dev/null || true
    cp ../*.md out/materials/ 2>/dev/null || true
    cp ../*.bib out/materials/ 2>/dev/null || true
    
    # Copy papers, presentations, and diagrams
    cp -r ../papers/* out/papers/ 2>/dev/null || true
    cp -r ../presentations/* out/presentations/ 2>/dev/null || true
    cp -r ../diagrams/* out/diagrams/ 2>/dev/null || true
    
    # Copy compiled diagram PDFs to a dedicated directory
    mkdir -p out/compiled-diagrams
    cp ../diagrams/compiled_diagrams/*.pdf out/compiled-diagrams/ 2>/dev/null || true
    
    # Copy Quantum_Digital_Polities directory
    cp -r ../Quantum_Digital_Polities out/ 2>/dev/null || true
    
    # Note: Figma files now in public/ui/ directory
    # Note: UI-UX images now in public/ui/ directory
    # These are now copied with public files
    
    echo "📋 Files copied from virtual-utopia directory"
fi

# Compile LaTeX files to PDF
echo "🗓 Compiling LaTeX files to PDF..."
if command -v pdflatex >/dev/null 2>&1; then
    # Compile papers
    for tex_file in out/papers/*.tex; do
        if [ -f "$tex_file" ]; then
            filename=$(basename "$tex_file" .tex)
            echo "  Compiling $filename.tex..."
            cd out/papers
            pdflatex -interaction=nonstopmode "$filename.tex" >/dev/null 2>&1 || true
            [ -f "$filename.pdf" ] && cp "$filename.pdf" "../compiled-pdfs/papers/" || true
            cd ../..
        fi
    done
    
    # Compile presentations  
    for tex_file in out/presentations/*.tex; do
        if [ -f "$tex_file" ]; then
            filename=$(basename "$tex_file" .tex)
            echo "  Compiling $filename.tex..."
            cd out/presentations
            pdflatex -interaction=nonstopmode "$filename.tex" >/dev/null 2>&1 || true
            [ -f "$filename.pdf" ] && cp "$filename.pdf" "../compiled-pdfs/presentations/" || true
            cd ../..
        fi
    done
    
    echo "📝 LaTeX compilation completed"
else
    echo "⚠️  LaTeX not available, skipping PDF compilation"
fi

# Also copy public files to ensure they're accessible
echo "📂 Ensuring public files are accessible..."
if [ -d "public" ] && [ -d "out" ]; then
    # Copy all public files to out directory (avoid overwriting Next.js generated files)
    cp -r public/* out/ 2>/dev/null || true
    echo "📋 Public files copied to output directory"
fi

# Copy public files to ensure they're accessible
echo "📂 Ensuring public files are accessible..."
if [ -d "public" ] && [ -d "out" ]; then
    # Copy all public files to out directory (avoid overwriting Next.js generated files)
    cp -r public/* out/ 2>/dev/null || true
    echo "📋 Public files copied to output directory"
fi

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Static files are in the 'out' directory"
    echo ""
echo "🌐 To serve locally:"
    echo "   npm run serve"
    echo "   Then visit: http://localhost:3000"
    echo ""
    echo "📤 To deploy:"
    echo "   - Upload the 'out' directory to your web server"
    echo "   - Or serve directly from any static hosting service"
    echo "   - No server-side processing required!"
    echo ""
    echo "📋 Contents:"
    echo "   - Home: Complete overview and project information"
    echo "   - Research: Academic papers, presentations, and LaTeX sources"
    echo "   - Technical: System architecture diagrams and specifications"
    echo "   - UI/UX: Design system, UI mockups, and Figma files"
    echo "   - Business: Investment and partnership materials"
    echo ""
    echo "🔗 All materials served from virtual-utopia directory:"
    echo "   - LaTeX papers in /papers/"
    echo "   - LaTeX presentations in /presentations/"
    echo "   - TikZ diagrams in /diagrams/tikz/"
    echo "   - Research documents in /Quantum_Digital_Polities/"
    echo "   - Compiled PDFs in /compiled-pdfs/papers/ and /compiled-pdfs/presentations/"
    echo "   - Figma design file in /ui/QuantumGov_UI_Designs.fig"
    echo "   - UI/UX mockup images in /images/ui-ux/"
    echo "   - Professional compiled diagrams in /compiled-diagrams/"
    echo ""
    echo "📝 LaTeX Compilation Results:"
    PAPER_COUNT=$(ls out/compiled-pdfs/papers/*.pdf 2>/dev/null | wc -l)
    PRES_COUNT=$(ls out/compiled-pdfs/presentations/*.pdf 2>/dev/null | wc -l)
    echo "   - $PAPER_COUNT research papers compiled to PDF"
    echo "   - $PRES_COUNT presentations compiled to PDF"
else
    echo "❌ Build failed. Please check the errors above."
fi