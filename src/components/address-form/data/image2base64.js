// 把flags 里面的图片变成 base64
const fs = require('fs');
const DIR = './flag';

const files = fs.readdirSync(DIR);
// todo