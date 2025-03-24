function login(event) {
   event.preventDefault();
   const enteredName = document.getElementById('username').value;
   const enteredPassword = document.getElementById('password').value;
   const storedData = JSON.parse(localStorage.getItem('users'));
   if (storedData && Array.isArray(storedData)) {
       const user = storedData.find(data => data.username === enteredName && data.password === enteredPassword);
       if (user) {
           alert('Giriş uğurludur!');
           localStorage.setItem('loggedInUser', enteredName);
           window.location.href = './index.html';
       } else {
           alert('İstifadəçi tapılmadı');
       }
   } else {
       alert('İstifadəçi tapılmadı');
   }
}


document.addEventListener('DOMContentLoaded', function () {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const usernameHeader = document.getElementById('userLog');
    const logoutButton = document.getElementById('logoutButton');
    const loginButton = document.getElementById('loginButton');

    if (loggedInUser) {
        if (usernameHeader) usernameHeader.textContent = `${loggedInUser}`;
        if (logoutButton) logoutButton.style.display = 'inline-block';
        if (loginButton) loginButton.style.display = 'none';
    } else {
        if (logoutButton) logoutButton.style.display = 'none';
        if (loginButton) loginButton.style.display = 'inline-block';
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            localStorage.removeItem('loggedInUser');
            if (logoutButton) logoutButton.style.display = 'none';
            if (loginButton) loginButton.style.display = 'inline-block';
            location.reload();
        });
    }
});

