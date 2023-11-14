const playerCollapse = () => {

    const player = document.querySelector('.player')
    const smallPlayer = document.querySelector('.player-small')
    const collapseButton = document.querySelector('.player__collapse-button')
    const expandButton = document.querySelector('.player-small__expand-button')
    const home = document.querySelector('.home')

    const collapsePlayer = (event) => {
        event.preventDefault()
        player.classList.add('player--collapsed')
        smallPlayer.classList.add('player-small--open')
        home.classList.add('home--player-collapsed')
    }

    collapseButton.addEventListener('click', collapsePlayer)

    const expandPlayer = (event) => {
        event.preventDefault()
        player.classList.remove('player--collapsed')
        smallPlayer.classList.remove('player-small--open')
        home.classList.remove('home--player-collapsed')
    }

    expandButton.addEventListener('click', expandPlayer)


    const togglePlayerClass = () => {

        if (window.innerWidth < 820) {
            player.classList.add('player--collapsed')
            smallPlayer.classList.add('player-small--open')
            home.classList.add('home--player-collapsed')
        } else {
            player.classList.remove('player--collapsed')
            smallPlayer.classList.remove('player-small--open')
            home.classList.remove('home--player-collapsed')
        }
    };
    
    window.addEventListener('resize', togglePlayerClass)
}


playerCollapse()