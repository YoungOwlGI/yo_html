// 在百度翻译开发者平台申请的API Key
const apiKey = '20250106002246484';  
const apiSecret = 'KVVLvu9pY0qFzkyR5Hb7';  

document.getElementById('languageSelect').addEventListener('change', function() {
  const selectedLang = this.value;
  translateContent(selectedLang);
});

function translateContent(targetLang) {
  const content = document.getElementById('content');
  const texts = Array.from(content.getElementsByTagName('p')).map(p => p.innerText);

  // 合并文本并通过百度翻译API进行翻译
  const textToTranslate = texts.join(' ');

  // 生成请求参数
  const salt = Date.now();
  const sign = generateSign(textToTranslate, salt);

  const data = {
    q: textToTranslate,
    from: 'zh',  // 源语言为中文
    to: targetLang,
    appid: apiKey,
    salt: salt,
    sign: sign,
  };

  // 请求翻译 API
  fetch('https://fanyi-api.baidu.com/api/trans/vip/translate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(data),
  })
    .then(response => response.json())
    .then(data => {
      if (data.error_code) {
        console.error('百度翻译错误:', data.error_msg);
        return;
      }
      const translatedTexts = data.trans_result.map(item => item.dst);

      let index = 0;
      Array.from(content.getElementsByTagName('p')).forEach(p => {
        if (index < translatedTexts.length) {
          p.innerText = translatedTexts[index++];
        }
      });
    })
    .catch(error => {
      console.error('翻译失败:', error);
    });
}

// 生成签名方法
function generateSign(query, salt) {
  const str = apiKey + query + salt + apiSecret;
  return md5(str);
}

// md5 加密函数（可以使用现成的库）
function md5(string) {
  return CryptoJS.MD5(string).toString(CryptoJS.enc.Base64);  // 需要引用CryptoJS库
}
