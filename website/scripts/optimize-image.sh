#!/bin/bash

# Script to optimize the Hero image for better performance
# This script compresses the image and creates WebP/AVIF versions

set -e

IMAGE_PATH="public/fallou-tall-photo.jpg"
OUTPUT_DIR="public/optimized"

echo "🖼️  Optimizing Hero image for performance..."

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick not found. Installing via Homebrew..."
    if command -v brew &> /dev/null; then
        brew install imagemagick
    else
        echo "❌ Please install ImageMagick manually: https://imagemagick.org/script/download.php"
        exit 1
    fi
fi

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Compress JPEG (target: <80KB)
echo "📦 Compressing JPEG..."
convert "$IMAGE_PATH" \
    -strip \
    -quality 85 \
    -resize 1000x1250\> \
    -interlace Plane \
    "$OUTPUT_DIR/fallou-tall-photo-optimized.jpg"

# Create WebP version (better compression)
if command -v cwebp &> /dev/null || command -v magick &> /dev/null; then
    echo "📦 Creating WebP version..."
    if command -v cwebp &> /dev/null; then
        cwebp -q 85 -resize 1000 1250 "$IMAGE_PATH" -o "$OUTPUT_DIR/fallou-tall-photo.webp"
    else
        magick "$IMAGE_PATH" -quality 85 -resize 1000x1250\> "$OUTPUT_DIR/fallou-tall-photo.webp"
    fi
else
    echo "⚠️  WebP tools not found. Skipping WebP creation."
    echo "   Install: brew install webp"
fi

# Create AVIF version (best compression, modern browsers)
if command -v magick &> /dev/null; then
    echo "📦 Creating AVIF version..."
    magick "$IMAGE_PATH" -quality 80 -resize 1000x1250\> "$OUTPUT_DIR/fallou-tall-photo.avif"
else
    echo "⚠️  ImageMagick not found. Skipping AVIF creation."
fi

# Show file sizes
echo ""
echo "✅ Optimization complete!"
echo ""
echo "File sizes:"
ls -lh "$OUTPUT_DIR/" | grep fallou-tall-photo
echo ""
echo "📝 Next steps:"
echo "1. Review the optimized images in $OUTPUT_DIR/"
echo "2. Replace public/fallou-tall-photo.jpg with the optimized version"
echo "3. Update Hero.tsx to use WebP/AVIF with fallback to JPEG"

