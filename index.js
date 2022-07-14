const button = document.querySelector('.btn');
const input = document.getElementById('input');
const icon = document.getElementById('icon');
const alert = document.querySelector('.alert')

button.addEventListener('click',()=>{
    generatePassword();
})

icon.addEventListener('click',()=>{
    copyPassword();
    if(input.value){
        alert.classList.remove('active');
        setTimeout(() => {
            alert.classList.add('active')
        }, 3000);
    }
})

function generatePassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^*()&{}:<>[]?ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passLength = 14;
    let password = '';
    for (let index = 0; index < passLength; index++) {
        const randomNum = Math.floor(Math.random()*chars.length);
        password += chars.substring(randomNum , randomNum + 1);
        
    }
    input.value = password;
    alert.innerText = password + ' copied!'
}

function copyPassword(){
    input.select();
    input.setSelectionRange(0,9999);
    navigator.clipboard.writeText(input.value)
}