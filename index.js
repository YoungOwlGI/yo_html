const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  // 定义 index.html 的文件路径
  const filePath = path.join(__dirname, 'index.html');

  try {
    // 读取 index.html 文件内容
    const htmlContent = fs.readFileSync(filePath, 'utf8');

    // 返回 HTML 内容
    const output = {
      'statusCode': 200,
      'headers': {
        'Content-Type': 'text/html',  // 设置返回类型为 HTML
      },
      'isBase64Encoded': false,
      'body': htmlContent,  // 将文件内容作为 body 返回
    };

    return output;

  } catch (err) {
    // 如果文件读取失败，返回错误信息
    const output = {
      'statusCode': 500,
      'headers': {
        'Content-Type': 'application/json',
      },
      'isBase64Encoded': false,
      'body': JSON.stringify({ error: 'Failed to read index.html', details: err.message }),
    };

    return output;
  }
};
