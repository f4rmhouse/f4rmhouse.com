#!/bin/bash

# Media optimization script for f4rmhouse landing page
# Converts GIFs to optimized MP4 videos for better performance

echo "🎬 Starting media optimization..."

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ ffmpeg is required but not installed."
    echo "Install with: brew install ffmpeg"
    exit 1
fi

# Create optimized directory if it doesn't exist
mkdir -p public/optimized

# Function to convert GIF to MP4
convert_gif_to_mp4() {
    local input_file="$1"
    local output_file="$2"
    
    echo "Converting $input_file to $output_file..."
    
    # Convert GIF to MP4 with high compression and quality
    ffmpeg -i "$input_file" \
        -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" \
        -c:v libx264 \
        -preset slow \
        -crf 23 \
        -pix_fmt yuv420p \
        -movflags +faststart \
        -y "$output_file"
    
    # Get file sizes for comparison
    original_size=$(du -h "$input_file" | cut -f1)
    new_size=$(du -h "$output_file" | cut -f1)
    
    echo "✅ $input_file ($original_size) → $output_file ($new_size)"
}

# Convert all GIFs in public directory
for gif_file in public/*.gif; do
    if [[ -f "$gif_file" ]]; then
        filename=$(basename "$gif_file" .gif)
        convert_gif_to_mp4 "$gif_file" "public/optimized/${filename}.mp4"
    fi
done

echo ""
echo "🎉 Media optimization complete!"
echo "📁 Optimized files are in public/optimized/"
echo ""
echo "Next steps:"
echo "1. Update your components to use the .mp4 files instead of .gif"
echo "2. Keep the original .gif files as fallbacks for older browsers"
echo "3. Consider using WebP format for static images"
