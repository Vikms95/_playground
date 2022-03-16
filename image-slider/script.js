const sliderGlobal = document.querySelector('.image-slider')
// create array of images

const cat1 = 'images/cat1.jpg'
const cat2 = 'images/cat2.jpg'
const cat3 = 'images/cat3.jpg'

const images = []
images.push(cat1)
images.push(cat2)
images.push(cat3)
let imageCount = 0

function previous(){
    const slider = document.querySelector('.image-slider')
    const arrowPrevious = document.querySelector('.arrow-previous')
    arrowPrevious.addEventListener('click',()=>{
        if(imageCount === 0){
            imageCount = 2

        }else{
            imageCount -= 1
        }
        
        let catImage = new Image()
        catImage.src = images[imageCount]
        slider.removeChild(slider.firstChild)
        slider.appendChild(catImage)
        changeDots()
    })
}

function next(){
    const slider = document.querySelector('.image-slider')
    const arrowNext = document.querySelector('.arrow-next')
    arrowNext.addEventListener('click',()=>{
        if(imageCount === 2){
            imageCount = 1

        }else{
            imageCount += 1
        }
        let catImage = new Image()
        catImage.src = images[imageCount]
        slider.removeChild(slider.firstChild)
        slider.appendChild(catImage)
        changeDots()
    })
}

function changeDots(){
    const dots = Array.from(document.querySelectorAll('.dot'))
    dots.forEach(dot=>{
        dot.classList.remove('current')
    })
    dots[imageCount].classList.toggle('current')
}

previous()
next()
changeDots()