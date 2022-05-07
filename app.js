
const inputs = document.querySelectorAll('input')


const userName = document.querySelector('#username')

const email = document.querySelector('#email')

const password = document.querySelector('password')

const passwordConfirm = document.querySelector('password-confirm')

function validateEmail (email){
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (regex.test(email)) {
        return true
    } else {
        return false
    }
}
  

const form = document.querySelector('#form')


form.addEventListener("submit", function(e){

    // validate username
    if(userName.value.length < 3 || userName.value.length > 25){

        

        userName.nextElementSibling.classList.add("visible")

        userName.classList.add("red")

        e.preventDefault()

    }else{
        userName.classList.add("match")
    }

    //validate email adress
    if(!validateEmail(email.value)){
        email.nextElementSibling.classList.add("visible")

        email.classList.add("red")

        e.preventDefault()
    }else{
        email.classList.add("match")
    }

})

