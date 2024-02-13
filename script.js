window .addEventListener('DOMContentLoaded', function(){
    const menuBtn = document.querySelector('.menuBtn')
    const navigation = document.querySelector('.navigation-menu')

    menuBtn.addEventListener('click', () =>{
        menuBtn.classList.toggle('active')
        navigation.classList.toggle('active')
    })
})