document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessages = {
        username: document.getElementById('usernameError'),
        password: document.getElementById('passwordError')
    };

    // 清除错误状态
    clearErrors();

    // 预定义账号密码
    const validCredentials = {
        username: 'admin',
        password: '123456'
    };

    // 验证逻辑
    if (!username) {
        showError('username', '用户名不能为空');
        return;
    }

    if (!password) {
        showError('password', '密码不能为空');
        return;
    }

    if (username === validCredentials.username && password === validCredentials.password) {
        // 模拟登录成功
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'home.html';
    } else {
        showError('password', '用户名或密码错误');
    }
});

function showError(field, message) {
    const errorElement = document.getElementById(`${field}Error`);
    const inputElement = document.getElementById(field);
    
    inputElement.classList.add('error');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(el => {
        el.style.display = 'none';
    });
    document.querySelectorAll('.form-control').forEach(el => {
        el.classList.remove('error');
    });
}

// 检查登录状态
window.addEventListener('load', () => {
    if (localStorage.getItem('isLoggedIn') && window.location.pathname.endsWith('index.html')) {
        window.location.href = 'home.html';
    }
});