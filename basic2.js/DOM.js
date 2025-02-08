document.title = 'ruang crot stikma'

const body = document.body
body.style.backgroundColorColor = 'cyan'
body.style.fontSize = "14px"

// const h2 = document.createElement('h1')
// h2.innerHTML = 'dumham crott ahh enak'
// h2.style.display = "none"
// body.append(h1)

let username = document.getElementById('username')
let password = document.getElementById('password')

let h1 = document.getElementById('h1')
let h2 = document.getElementById('h2')

h1.style.display = "none"
h2.style.display = "none"

function onLogin(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    if(username === 'admin' && password === '123'){
        h2.style.display = "none"
        h1.style.display = "block"
        console.log(username)
        console.log(password)
    }else{
        h1.style.display = "none"
        h2.style.display = "block"
        console.log('lu siapa anjing')

    }
}