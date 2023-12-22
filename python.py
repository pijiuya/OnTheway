# -*- coding: utf-8 -*-

import os

# 指定要扫描的文件夹路径
folder_path = "C:\\Pjyapplication\\webstie\\OnTheway\\OnTheway\\img"

# 支持的图片格式列表
supported_formats = [".jpg", ".jpeg", ".png", ".gif", ".bmp"]

# 检索文件夹中的图片文件
image_files = []
for file in os.listdir(folder_path):
    if os.path.splitext(file)[1].lower() in supported_formats:
        image_files.append(file)

# 打印图片文件名
print(image_files)
