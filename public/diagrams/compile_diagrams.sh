#!/usr/bin/env bash

# QuantumGov Framework: Diagram Compilation Script
# This script compiles all LaTeX diagrams to high-quality PDFs

echo "🚀 Compiling QuantumGov Framework Visual Materials..."
echo "=================================================="

# Create output directory
mkdir -p compiled_diagrams

# List of diagram files to compile
DIAGRAMS=(
    "QuantumGov_System_Architecture.tex"
    "QuantumGov_Results_Charts.tex" 
    "QuantumGov_Process_Flow.tex"
    "QuantumGov_Business_Impact.tex"
    "QuantumGov_UI_Demo.tex"
)

# Compile each diagram
for diagram in "${DIAGRAMS[@]}"; do
    echo "📊 Compiling $diagram..."
    
    if [ -f "$diagram" ]; then
        # Compile with pdflatex
        pdflatex -interaction=nonstopmode -output-directory=compiled_diagrams "$diagram" > /dev/null 2>&1
        
        if [ $? -eq 0 ]; then
            echo "✅ Successfully compiled $diagram"
        else
            echo "❌ Error compiling $diagram"
        fi
    else
        echo "⚠️  File $diagram not found"
    fi
done

echo ""
echo "🎯 Compilation Summary:"
echo "======================"

# Check compiled files
cd compiled_diagrams
for diagram in "${DIAGRAMS[@]}"; do
    pdf_name="${diagram%.tex}.pdf"
    if [ -f "$pdf_name" ]; then
        file_size=$(du -h "$pdf_name" | cut -f1)
        echo "✅ $pdf_name ($file_size)"
    else
        echo "❌ $pdf_name (failed)"
    fi
done

# Count successful compilations
successful=$(ls -1 *.pdf 2>/dev/null | wc -l)
total=${#DIAGRAMS[@]}

echo ""
echo "📈 Results: $successful/$total diagrams compiled successfully"

if [ $successful -eq $total ]; then
    echo "🎉 All diagrams compiled successfully!"
    echo ""
    echo "🖼️  Generated Visual Materials:"
    echo "• System Architecture Diagram"
    echo "• Experimental Results Charts" 
    echo "• Governance Process Flow"
    echo "• Business Impact Analysis"
    echo "• Interactive UI/UX Demo"
    echo ""
    echo "📁 All files available in: compiled_diagrams/"
else
    echo "⚠️  Some diagrams failed to compile. Check LaTeX installation and dependencies."
fi

echo ""
echo "🌟 QuantumGov Framework visual materials ready for presentation!"