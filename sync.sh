#!/bin/bash

SOURCE="./uploads"
DEST="dr:/chillax/uploads"
LOGFILE="./missing_files.txt"


rclone copy $SOURCE $DEST --ignore-existing --progress


# # Kiểm tra sự khác biệt và lưu vào log
# rclone check $SOURCE $DEST --log-file $LOGFILE

# rclone copy $SOURCE $DEST --ignore-existing --dry-run

# # Lọc file thiếu trên destination và sao chép
# grep "Missing on destination" $LOGFILE | awk '{print $NF}' | while read -r file; do
#     echo "$file"
#     rclone copy "$SOURCE/$file" "$DEST/$file" --progress
# done

echo "Đã sao chép các file thiếu lên Google Drive."
