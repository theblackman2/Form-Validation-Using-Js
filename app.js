
const inputs = document.querySelectorAll('input')


const userName = document.querySelector('#username')

const email = document.querySelector('#email')

const password = document.querySelector('#password')

const passwordConfirm = document.querySelector('#password-confirm')

function validateEmail (email){
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (regex.test(email)) {
        return true
    } else {
        return false
    }
}

function passwordValidate(password){
    const reg1 = /[a-z]/
    const reg2 = /[0-9]/
    const reg3 = /[A-Z]/
    const reg4 = /\w{8,}/
    // const reg5 = /\s/

    return (reg1.test(password) && reg2.test(password) && reg4.test(password) && reg3.test(password))
}
  

const form = document.querySelector('#form')


form.addEventListener("submit", function(e){

    // validate username
    if(userName.value.length < 3 || userName.value.length > 25){

        userName.nextElementSibling.classList.add("visible")

        userName.classList.add("red")
        userName.classList.remove("match")

        e.preventDefault()

    }else{
        userName.nextElementSibling.classList.remove("visible")
        userName.classList.add("match")
    }

    //validate email adress
    if(!validateEmail(email.value)){
        email.nextElementSibling.classList.add("visible")

        email.classList.add("red")
        email.classList.remove("match")

        e.preventDefault()
    }else{
        email.classList.add("match")
        email.nextElementSibling.classList.remove("visible")
    }

    //validate password
    if(!passwordValidate(password.value)){

        password.nextElementSibling.classList.add("visible")

        password.classList.add("red")
        password.classList.remove("match")

        e.preventDefault()
    }else{
        password.nextElementSibling.classList.remove("visible")
        password.classList.add("match")
    }


})

