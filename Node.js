const fs = require('fs');
const path = require('path');

const imagesDirectory = 'C:\\Pjyapplication\\webstie\\OnTheway\\img'; // 图片文件夹路径
const outputFilename = 'imageList.json'; // 输出 JSON 文件的名称

fs.readdir(imagesDirectory, (err, files) => {
    if (err) {
        return console.error('读取文件夹时发生错误: ', err);
    }

    const imageFiles = files.filter(file => path.extname(file).toLowerCase() === '.png');
    fs.writeFile(outputFilename, JSON.stringify(imageFiles), err => {
        if (err) {
            return console.error('写入 JSON 文件时发生错误: ', err);
        }
        console.log('图片列表已生成！');
    });
});
