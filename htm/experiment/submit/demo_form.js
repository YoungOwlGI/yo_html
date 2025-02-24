const form = document.getElementById('feedbackForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const errors = validateFormData({ name, email, message });

  if (errors.length === 0) {
    // 可以在这里进行保存到数据库或发送电子邮件的操作
    console.log('感谢您的反馈！');
  } else {
    const errorList = document.createElement('ul');
    errors.forEach(error => {
      const li = document.createElement('li');
      li.textContent = error;
      errorList.appendChild(li);
    });
    document.body.appendChild(errorList);
  }
});

function validateFormData(data) {
  const errors = [];

  // 验证姓名
  if (data.name === '') {
    errors.push('姓名不能为空');
  }

  // 验证电子邮件
  if (data.email === '') {
    errors.push('电子邮件不能为空');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('电子邮件格式不正确');
  }

  // 验证反馈信息
  if (data.message === '') {
    errors.push('反馈信息不能为空');
  }

  return errors;
}
