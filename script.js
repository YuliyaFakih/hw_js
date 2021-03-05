const sliderContainer = document.getElementById('image-container')
const mainContainer = document.querySelector('.image-container')

const slides = new Array(10)
slides.fill('img')

let STEP = 1

slides.map((slide, index) => {
    slide = new Image(300)
    slide.src = `./images/img${index+1}.jpg`
    sliderContainer.appendChild(slide)
})

const arrowLeft = document.createElement('span')
const arrowRight = document.createElement('span')

const drawArrows = () => {
    //const arrowLeft = document.createElement('span')
    arrowLeft.innerHTML = '<'
    mainContainer.prepend(arrowLeft)
    arrowLeft.style.top = '57px'
    arrowLeft.addEventListener('click', slideLeft)
    //const arrowRight = document.createElement('span')
    arrowRight.innerHTML = '>'
    mainContainer.appendChild(arrowRight)
    arrowRight.addEventListener('click', slideRight)
}
drawArrows()

function slideRight () {
    console.log(STEP)
    ++STEP
    sliderContainer.style.transform = `translate3d(-${STEP*300}px, 0, 0)`
    if(STEP === 6) {
        arrowRight.style.opacity = '0.5';
        arrowRight.style.pointerEvents = 'none';
    } else if(STEP < 6 && STEP > 1){
       arrowRight.style.pointerEvents = 'auto';
       
    }
    
}

function slideLeft () {
    console.log(STEP)
    --STEP
    sliderContainer.style.transform = `translate3d(-${STEP*300}px, 0, 0)`
    if(STEP === 1) {
        arrowLeft.style.opacity = '0.5';
        arrowLeft.style.pointerEvents = 'none';
        //arrowLeft.style.display = 'none';
    } else if(STEP > 1 && STEP < 6){
        arrowLeft.style.pointerEvents = 'auto';
    }
}
//не получилось разблокировать стрелки, только один раз можно долистать до конца

let pagination = document.querySelector('.pagination')
let pag2 = document.querySelector('.pag2')
let pag3 = document.querySelector('.pag3')
let pag4 = document.querySelector('.pag4')
let pag5 = document.querySelector('.pag5')
let pag6 = document.querySelector('.pag6')
let pag7 = document.querySelector('.pag7')

pag2.addEventListener('click', () => {
    sliderContainer.style.transform = `translate3d(0px, 0px, 0px)`
    pag2.classList.add('active')
    pag3.classList.remove('active')
    pag4.classList.remove('active')
    pag5.classList.remove('active')
    pag6.classList.remove('active')
    pag7.classList.remove('active')
})

pag3.addEventListener('click', () => {
    sliderContainer.style.transform = `translate3d(-600px, 0px, 0px)`
    pag3.classList.add('active')
    pag2.classList.remove('active')
    pag4.classList.remove('active')
    pag5.classList.remove('active')
    pag6.classList.remove('active')
    pag7.classList.remove('active')
})

pag4.addEventListener('click', () => {
    sliderContainer.style.transform = `translate3d(-900px, 0px, 0px)`
    pag4.classList.add('active')
    pag2.classList.remove('active')
    pag3.classList.remove('active')
    pag5.classList.remove('active')
    pag6.classList.remove('active')
    pag7.classList.remove('active')
})

pag5.addEventListener('click', () => {
    sliderContainer.style.transform = `translate3d(-1200px, 0px, 0px)`
    pag5.classList.add('active')
    pag2.classList.remove('active')
    pag3.classList.remove('active')
    pag4.classList.remove('active')
    pag6.classList.remove('active')
    pag7.classList.remove('active')
})

pag6.addEventListener('click', () => {
    sliderContainer.style.transform = `translate3d(-1500px, 0px, 0px)`
    pag6.classList.add('active')
    pag2.classList.remove('active')
    pag3.classList.remove('active')
    pag4.classList.remove('active')
    pag5.classList.remove('active')
    pag7.classList.remove('active')
})

pag7.addEventListener('click', () => {
    sliderContainer.style.transform = `translate3d(-1800px, 0px, 0px)`
    pag7.classList.add('active')
    pag2.classList.remove('active')
    pag3.classList.remove('active')
    pag4.classList.remove('active')
    pag5.classList.remove('active')
    pag6.classList.remove('active')
})