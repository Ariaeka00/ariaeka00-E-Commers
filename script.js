const toggle = document.querySelector('input[type=checkbox]')

toggle.addEventListener('click', () => {
    const menuList = document.querySelector('.menu-list')
    menuList.classList.toggle('slide')

})