const emailInput = document.getElementById('email')
const countryInput = document.getElementById('country')
const zipInput = document.getElementById('zip')
const passInput = document.getElementById('pass')
const passConfInput = document.getElementById('pass-conf')
const button = document.querySelector('button')


emailInput.addEventListener('blur',() =>{
    emailInput.setCustomValidity('')
    emailInput.style.backgroundColor = 'white'
    if(!emailInput.checkValidity()){
        emailInput.setCustomValidity('Please enter a proper e-mail!')
        emailInput.reportValidity()
        emailInput.style.backgroundColor = 'pink'
    }
})

zipInput.addEventListener('blur',() =>{
    zipInput.setCustomValidity('')
    zipInput.style.backgroundColor = 'white'
    if(!zipInput.checkValidity()){
        zipInput.setCustomValidity('Please enter a proper zip code!')
        zipInput.reportValidity()
        zipInput.style.backgroundColor = 'pink'
    }
})

button.addEventListener('click', () =>{

})