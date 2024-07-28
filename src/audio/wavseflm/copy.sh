SOURCE_DIR=/home/bltang/Downloads/output
DEST_DIR=/home/bltang/Downloads/output_test
EXCLUDE_DIR=/home/bltang/Downloads/output/old

find "$SOURCE_DIR" -type d -path "$EXCLUDE_DIR" -prune -o  -type f \( -name "*mix.wav" -o -name "*output_.wav" -o -name "*clean.wav" \) -exec cp {} "$DEST_DIR" \;