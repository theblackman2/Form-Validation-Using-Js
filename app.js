
const inputs = document.querySelectorAll('input')


const userName = document.querySelector('#username')

const email = document.querySelector('#email')

const password = document.querySelector('password')

const passwordConfirm = document.querySelector('password-confirm')

const form = document.querySelector('#form')


form.addEventListener("submit", function(e){

    if(userName.value.length < 3 || userName.value.length > 25){

        let userNameMessage = userName.nextElementSibling

        userNameMessage.classList.add("visible")

        userName.classList.add("red")

        e.preventDefault()

    }





})