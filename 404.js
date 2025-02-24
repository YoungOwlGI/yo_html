window.addEventListener('load', function() {
  // 假设你有一些逻辑来判断当前页面是否应该显示404页面
  // 这里只是一个示例，你可以根据实际情况调整
  const is404 = shouldShow404Page(); // 你需要实现这个函数

  if (is404) {
    window.location.href = 'htm/404.html';
  }
});

// 示例函数，你需要根据实际情况实现
function shouldShow404Page() {
  if (window.location.pathname === '/some-page') {
    return true; // 返回true，表示显示404页面
  }
  return false; // 默认返回false，表示不显示404页面
}


