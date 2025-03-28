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


