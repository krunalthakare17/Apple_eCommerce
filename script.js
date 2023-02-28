//cube
let y=0
const cube = document.querySelector('.cube')

const palyPlause = () => {
    setInterval(() => {
    cube.style.transform=`rotateY(${y++}deg)`
    },100)
}

palyPlause()
//cube end


// slideshow
const slideShowDiv = () => {
    for (let i = 1; i <= 6; i++) {
        const div = document.createElement('div')


        div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`

        i === 1 && div.classList.add("change")


        document.querySelector('.slideshow').appendChild(div)
    }
}
slideShowDiv()


const divs = document.querySelectorAll('.slideshow div')

let a = 1;


const slideshow = () => {
    setInterval
        (() => {

            a++

            const div = document.querySelector('.slideshow .change')

            div.classList.remove('change')



            if (a < divs.length) {
                div.nextElementSibling.classList.add('change')
            }
            else {
                a = 1
            }
        }, 1000)
}

slideshow()
