# -*- coding: utf-8 -*-

import os

# ָ��Ҫɨ����ļ���·��
folder_path = "C:\\Pjyapplication\\webstie\\OnTheway\\OnTheway\\img"

# ֧�ֵ�ͼƬ��ʽ�б�
supported_formats = [".jpg", ".jpeg", ".png", ".gif", ".bmp"]

# �����ļ����е�ͼƬ�ļ�
image_files = []
for file in os.listdir(folder_path):
    if os.path.splitext(file)[1].lower() in supported_formats:
        image_files.append(file)

# ��ӡͼƬ�ļ���
print(image_files)
