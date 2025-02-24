const form = document.getElementById('myForm');
const captchaImage = document.getElementById('captchaImage');

// 处理表单提交
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const enteredCaptcha = document.getElementById('captcha').value;
  const storedCaptcha = sessionStorage.getItem('captcha');

  if (enteredCaptcha === storedCaptcha) {
    console.log("表单提交成功！");
  } else {
    console.log("验证码错误，请重新输入。");
  }
});

// 生成并显示验证码图像
function generateCaptcha() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const captchaLength = 6;
  let captchaText = '';
  for (let i = 0; i < captchaLength; i++) {
    captchaText += characters[Math.floor(Math.random() * characters.length)];
  }

  sessionStorage.setItem('captcha', captchaText);

  const canvas = document.createElement('canvas');
  canvas.width = 100;
  canvas.height = 30;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = '15px Arial';
  ctx.fillStyle = 'black';
  ctx.fillText(captchaText, 15, 25);

  captchaImage.src = canvas.toDataURL();
}

// 刷新验证码
function refreshCaptcha() {
  generateCaptcha();
}

generateCaptcha();
