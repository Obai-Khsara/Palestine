(function(){
    const sliderContainer = document.querySelector(".slider-wrapper")
    const slides = document.querySelectorAll(".slider .text")
    const next = document.querySelector(".next")
    const prev = document.querySelector(".prev")
    let sliderIndex = 0
    let slideWidth = sliderContainer.offsetWidth
    slides.forEach(slide => {
        slide.style.width = slideWidth + "px"
    })
    sliderContainer.style.width = slides.length * slideWidth + "px"
    next.addEventListener("click", () =>{
        sliderIndex == slides.length - 1 ? sliderIndex = 0 : sliderIndex++
        sliderContainer.style.marginRight = - (sliderIndex * slideWidth) + "px"
    })
    prev.addEventListener("click", () =>{
        sliderIndex == 0 ? sliderIndex = slides.length - 1 : sliderIndex--
        sliderContainer.style.marginRight = - (sliderIndex * slideWidth) + "px"
    })
})()


// show and hide nav
let nav = document.querySelector("#nav")
let toggler = document.querySelector(".toggler")
let searchBox = document.querySelector(".searchBox")
toggler.addEventListener("click", () => {
    nav.classList.toggle("active")
    searchBox.classList.toggle("hidden")
})