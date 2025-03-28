let form = document.querySelector("form");
let button = document.querySelector("#btn1");
let inputs = document.querySelectorAll("input");

// Uğur mesajını yarat və formun üstünə əlavə et
let successMessage = document.createElement("p");
successMessage.textContent = "Qeydiyyat uğurlu!";
successMessage.style.color = "green";
successMessage.style.textAlign = "center";
successMessage.style.fontSize = "18px";
successMessage.style.display = "none";
form.prepend(successMessage);

inputs.forEach(input => {
    input.addEventListener("keyup", () => {
        let trueMessage = input.nextElementSibling;

        if (input.checkValidity()) {
            trueMessage.style.display = "block";
        } else {
            trueMessage.style.display = "none";
        }
    });
});

button.addEventListener("click", (event) => {
    event.preventDefault();
    if (form.checkValidity()) {
        addNewUser();
        
        // Inputların içini tam təmizlə
        inputs.forEach(input => {
            input.value = "";
        });

        // Uğur mesajını göstər və 3 saniyə sonra gizlət
        successMessage.style.display = "block";
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 3000);
    } else {
        console.log("Form valid deyil");
    }
});

function checkUserFromLocalStorage() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    return users;
}

function addNewUser() {
    let newUser = {};
    inputs.forEach(input => {
        newUser[input.name] = input.value;
    });
    let users = checkUserFromLocalStorage();
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    console.log("User Elave edildi", newUser);
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
