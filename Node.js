const fs = require('fs');
const path = require('path');

const imagesDirectory = 'C:\\Pjyapplication\\webstie\\OnTheway\\img'; // ͼƬ�ļ���·��
const outputFilename = 'imageList.json'; // ��� JSON �ļ�������

fs.readdir(imagesDirectory, (err, files) => {
    if (err) {
        return console.error('��ȡ�ļ���ʱ��������: ', err);
    }

    const imageFiles = files.filter(file => path.extname(file).toLowerCase() === '.png');
    fs.writeFile(outputFilename, JSON.stringify(imageFiles), err => {
        if (err) {
            return console.error('д�� JSON �ļ�ʱ��������: ', err);
        }
        console.log('ͼƬ�б������ɣ�');
    });
});
