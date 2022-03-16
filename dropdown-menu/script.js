const ref = document.querySelector('button')
const ref2 = document.querySelector('.drop')

document.querySelector('.drop').classList.contains
console.log(ref2.classList.contains('visible'))

ref.addEventListener('click', () =>{
    ref2.classList.toggle('visible')

})

// Not detecting class name