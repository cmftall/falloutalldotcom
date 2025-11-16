#!/bin/bash

# Company Logo Download Script
# Run this from /website/public/logos/ directory

echo "📥 Downloading company logos..."

# National Bank of Canada
echo "1/4 - Downloading National Bank of Canada logo..."
curl -L "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/National_Bank_of_Canada_logo.svg/800px-National_Bank_of_Canada_logo.svg.png" -o bnc.png

# Orange
echo "2/4 - Downloading Orange logo..."
curl -L "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/800px-Orange_logo.svg.png" -o orange.png

# Onepoint
echo "3/4 - Downloading Onepoint logo..."
curl -L "https://www.groupeonepoint.com/wp-content/uploads/2021/09/Logo-Onepoint.png" -o onepoint.png 2>/dev/null || echo "⚠️  Onepoint: Manual download needed from https://www.groupeonepoint.com"

# Sopra Steria
echo "4/4 - Downloading Sopra Steria logo..."
curl -L "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Logo_Sopra_Steria.svg/800px-Logo_Sopra_Steria.svg.png" -o sopra-steria.png

echo "✅ Logo download complete!"
echo ""
echo "⚠️  NOTE: Some logos may need manual download if URLs are outdated."
echo "Please verify all 4 logo files exist:"
echo "  - bnc.png"
echo "  - orange.png"
echo "  - onepoint.png"
echo "  - sopra-steria.png"

