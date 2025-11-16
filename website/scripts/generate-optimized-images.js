#!/usr/bin/env node

/**
 * Script to generate WebP and AVIF versions of the Hero image
 * Uses Sharp for image processing (install with: npm install --save-dev sharp)
 */

const fs = require('fs')
const path = require('path')

const inputPath = path.join(__dirname, '../public/fallou-tall-photo.jpg')
const outputDir = path.join(__dirname, '../public')

async function generateOptimizedImages() {
  try {
    // Check if Sharp is available
    let sharp
    try {
      sharp = require('sharp')
    } catch (error) {
      console.error('❌ Sharp not found. Installing...')
      console.log('Run: npm install --save-dev sharp')
      process.exit(1)
    }

    // Check if input file exists
    if (!fs.existsSync(inputPath)) {
      console.error(`❌ Input file not found: ${inputPath}`)
      process.exit(1)
    }

    console.log('🖼️  Generating optimized image formats...')
    console.log(`📥 Input: ${inputPath}`)

    // Get original file size
    const originalStats = fs.statSync(inputPath)
    const originalSizeKB = (originalStats.size / 1024).toFixed(2)
    console.log(`📊 Original size: ${originalSizeKB} KB`)

    // Generate optimized JPEG (resize and compress)
    // Save to temp file first, then replace original
    console.log('\n📦 Generating optimized JPEG...')
    const tempJpegPath = path.join(outputDir, 'fallou-tall-photo-optimized.jpg')
    await sharp(inputPath)
      .resize(1000, 1250, { 
        fit: 'inside', 
        withoutEnlargement: true 
      })
      .jpeg({ 
        quality: 85, 
        progressive: true, 
        mozjpeg: true 
      })
      .toFile(tempJpegPath)
    
    // Replace original with optimized version
    fs.renameSync(tempJpegPath, path.join(outputDir, 'fallou-tall-photo.jpg'))

    const jpegStats = fs.statSync(path.join(outputDir, 'fallou-tall-photo.jpg'))
    const jpegSizeKB = (jpegStats.size / 1024).toFixed(2)
    const jpegSavings = ((1 - jpegStats.size / originalStats.size) * 100).toFixed(1)
    console.log(`✅ JPEG optimized: ${jpegSizeKB} KB (${jpegSavings}% reduction)`)

    // Generate WebP
    console.log('\n📦 Generating WebP...')
    await sharp(inputPath)
      .resize(1000, 1250, { 
        fit: 'inside', 
        withoutEnlargement: true 
      })
      .webp({ 
        quality: 85,
        effort: 6
      })
      .toFile(path.join(outputDir, 'fallou-tall-photo.webp'))

    const webpStats = fs.statSync(path.join(outputDir, 'fallou-tall-photo.webp'))
    const webpSizeKB = (webpStats.size / 1024).toFixed(2)
    const webpSavings = ((1 - webpStats.size / originalStats.size) * 100).toFixed(1)
    console.log(`✅ WebP generated: ${webpSizeKB} KB (${webpSavings}% reduction)`)

    // Generate AVIF
    console.log('\n📦 Generating AVIF...')
    await sharp(inputPath)
      .resize(1000, 1250, { 
        fit: 'inside', 
        withoutEnlargement: true 
      })
      .avif({ 
        quality: 80,
        effort: 4
      })
      .toFile(path.join(outputDir, 'fallou-tall-photo.avif'))

    const avifStats = fs.statSync(path.join(outputDir, 'fallou-tall-photo.avif'))
    const avifSizeKB = (avifStats.size / 1024).toFixed(2)
    const avifSavings = ((1 - avifStats.size / originalStats.size) * 100).toFixed(1)
    console.log(`✅ AVIF generated: ${avifSizeKB} KB (${avifSavings}% reduction)`)

    // Summary
    console.log('\n' + '='.repeat(50))
    console.log('✅ Optimization complete!')
    console.log('='.repeat(50))
    console.log(`Original JPEG: ${originalSizeKB} KB`)
    console.log(`Optimized JPEG: ${jpegSizeKB} KB`)
    console.log(`WebP: ${webpSizeKB} KB`)
    console.log(`AVIF: ${avifSizeKB} KB`)
    console.log('\n📝 Next steps:')
    console.log('1. Uncomment the <source> tags in Hero.tsx (lines 147-156)')
    console.log('2. Update the preload links in layout.tsx to include WebP/AVIF')
    console.log('3. Test the site to verify images load correctly')

  } catch (error) {
    console.error('❌ Error generating optimized images:', error.message)
    process.exit(1)
  }
}

generateOptimizedImages()

