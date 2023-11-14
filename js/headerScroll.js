const headerScroll = () => {

    const header = document.querySelector('.home-header')
    const home = document.querySelector('.home')

    const toggleClassHeader = (event) => {

        if ( home.scrolly > 10 ) {
            header.classList.add('home-header--scroll')
            console.log(event)
        } else {
            header.classList.remove('home-header--scroll')
        } 

    }

    home.addEventListener('scroll', toggleClassHeader)


}

headerScroll()