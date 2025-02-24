const form = document.getElementById('myForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const birthday = document.getElementById('birthday').value;
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
  const avatar = document.getElementById('avatar').files[0];
  const captcha = document.getElementById('captcha').value;
  const remember = document.querySelector('input[name="remember"]').checked;

  console.log("用户名：" + username);
  console.log("密码：" + password);
  console.log("邮箱：" + email);
  console.log("手机号码：" + phone);
  console.log("地址：" + address);
  console.log("生日：" + birthday);
  console.log("性别：" + gender);
  console.log("爱好：" + hobbies.join(", "));
  console.log("头像：" + avatar);
  console.log("验证码：" + captcha);
  console.log("信任本设备：" + (remember? "是" : "否"));
});
