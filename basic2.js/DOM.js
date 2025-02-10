document.title = 'ruang crot stikma';

const body = document.body;
body.style.backgroundColor = 'cyan';
body.style.fontSize = "14px";

let h1 = document.getElementById('h1');
let h2 = document.getElementById('h2');
let buttonLogin = document.getElementById('login');
let buttonLogout = document.getElementById('logout');
let input = document.getElementById('input');

let username = document.getElementById('username');
let password = document.getElementById('password');
let email = document.getElementById('email');
let reg = document.getElementById('reg');

h1.style.display = "none";
h2.style.display = "none";
buttonLogout.style.display = 'none';
buttonLogin.style.display = 'block';
input.style.display = "block";
email.style.display = "none"
// reg.style.display = "none"

function onLogin(){
    let userValue = username.value.trim();
    let passValue = parseInt(password.value); // Konversi password ke number

    localStorage.setItem('username', userValue);

    if (userValue === 'admin' && passValue === 123) {
        h1.style.display = "block";
        h2.style.display = "none";
        buttonLogout.style.display = 'block';
        buttonLogin.style.display = 'none';
        input.style.display = "none";

        localStorage.setItem('role', 'admin');
    } else {
        h1.style.display = "none";
        h2.style.display = "block";
        buttonLogout.style.display = 'block';
        buttonLogin.style.display = 'none';
        input.style.display = "none";

        localStorage.setItem('role', 'user');
    }
}

// Cek apakah ada pengguna yang sudah login
if(localStorage.getItem('username')){
    let role = localStorage.getItem('role');

    if (role === 'admin') {
        h1.style.display = 'block';
        h2.style.display = 'none';
    } else {
        h1.style.display = 'none';
        h2.style.display = 'block';
    }

    buttonLogin.style.display = 'none';
    input.style.display = 'none';
    buttonLogout.style.display = 'block';
}

function onRegis(){
    let userValue = username.value
    let passValue = password.value
    let emailValue = email.value

    if("admin" && "123"){
        email.style.display = 'block'
    }
}

function onLogout(){
    localStorage.clear();
    location.reload();
}
