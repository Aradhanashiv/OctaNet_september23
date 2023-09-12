document.querySelector(".menu_logo").addEventListener("click" ,  () => {
    document.querySelector(".wrong_nav").style.display = "block"
    document.querySelector(".menu_logo").style.display = "none"
})

document.querySelector(".wrong_logo").addEventListener("click" ,  () => {
    document.querySelector(".menu_logo").style.display = "block"
    document.querySelector(".wrong_nav").style.display = "none"
})