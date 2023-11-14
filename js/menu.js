const openCloseMenu = () => {

    const menu = document.querySelector('.side-bar')
    const menuButton = document.querySelector('.menu-button-bg')
    const closeButton = document.querySelector('.menu__close-link')

    const toggleMenu = (event) => {
        event.preventDefault()
        menu.classList.toggle('side-bar--open')
    }

    menuButton.addEventListener('click', toggleMenu);
    closeButton.addEventListener('click', toggleMenu)
    
}

openCloseMenu()