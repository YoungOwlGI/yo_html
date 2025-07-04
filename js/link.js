document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // 阻止默认链接行为
        let target = this.getAttribute('href');

        // 如果href是#开头（表示页内链接），我们总是假设是平滑滚动
        if (target.charAt(0) === '#' && this.classList.contains('smooth-scroll')) {
            // 移除可能的URL查询参数或片段标识（如果存在）
            const elementId = target.split('?')[0].split('#')[1];
            const targetElement = document.getElementById(elementId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        } else if (this.classList.contains('scroll-to-top')) {
            // 如果链接是scroll-to-top，但我们仍然希望它像普通链接那样打开新页面
            // 这里假设href属性是一个完整的URL
            window.open(target, '_blank'); // 在新标签页中打开链接
        }
        // 如果没有smooth-scroll或scroll-to-top类，则不执行任何操作（或可以根据需要添加其他逻辑）
    });
});