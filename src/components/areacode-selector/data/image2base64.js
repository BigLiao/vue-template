// 把flags 里面的图片变成 base64
const fs = require('fs');
const DIR = './flag';
const base64Img = require('base64-img');

const codeListJson = fs.readFileSync('./code.json');
const codeList = JSON.parse(codeListJson);

codeList.forEach(item => {
  if (item.locale) {
    const flagPath = './flags/flag_' + item.locale.toLocaleLowerCase() + '.png';
    try {
      const data = base64Img.base64Sync(flagPath);
      item.flag = data;
    } catch (error) {
      console.log(error);
    }
  }
});

fs.writeFileSync('./code-with-flag.json', JSON.stringify(codeList, null, 4));