const form = document.getElementById('myForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const address = document.getElementById('address').value.trim();
  const birthday = document.getElementById('birthday').value.trim();
  const genderRadios = document.getElementsByName('gender');
  let gender;
  for (let i = 0; i < genderRadios.length; i++) {
    if (genderRadios[i].checked) {
      gender = genderRadios[i].value;
      break;
    }
  }
  const hobbyCheckboxes = document.getElementsByName('hobby');
  const hobbies = [];
  for (let i = 0; i < hobbyCheckboxes.length; i++) {
    if (hobbyCheckboxes[i].checked) {
      hobbies.push(hobbyCheckboxes[i].value);
    }
  }
  const avatarInput = document.getElementById('avatar');
  const captcha = document.getElementById('captcha').value.trim();

  if (username === '' || password === '' || email === '') {
    alert("用户名、密码和邮箱不能为空。");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("无效的邮箱格式。");
    return;
  }

  // 假设正确的验证码
  const correctCaptcha = "12345";
  if (captcha!== correctCaptcha) {
    alert("验证码不正确。");
    return;
  }

  const avatarFile = avatarInput.files[0];
  if (avatarFile) {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!allowedTypes.includes(avatarFile.type)) {
      alert("无效的文件类型。请上传 JPEG、PNG 或 GIF 格式的文件。");
      return;
    }
    const uploadDir = 'uploads/';
    const formData = new FormData();
    formData.append('avatar', avatarFile);
    fetch(uploadDir, {
      method: 'POST',
      body: formData
    })
      .then(response => {
        if (response.ok) {
          console.log('头像上传成功！');
        } else {
          console.log('头像上传失败。');
        }
      })
      .catch(error => console.log(error));
  }

  // 可以在这里进行其他操作，比如发送数据到服务器进行存储等

  console.log("感谢您提交的信息！");
  console.log("用户名: " + username);
  console.log("邮箱: " + email);
  console.log("手机号码: " + phone);
  console.log("地址: " + address);
  console.log("生日: " + birthday);
  console.log("性别: " + gender);
  console.log("爱好: " + hobbies.join(", "));
});
