const queueMore = () => {

    const queueItem = document.querySelectorAll('.queue__item')
    const queueLinksExpand = document.querySelectorAll('.queue-more__link')
    const queueLinksCollapse = document.querySelectorAll('.queue-more__close-link')

    const addQueueItemClass = (event) => {

        event.preventDefault()
        const parent = event.currentTarget.parentElement
        parent.classList.add('queue__item--open')


    }

    queueLinksExpand.forEach(link => link.addEventListener('click', addQueueItemClass))

    const removeQueueItemClass = (event) => {

        event.preventDefault()
        console.log(event)

        const parentParent = event.currentTarget.parentNode.parentNode
        parentParent.classList.remove('queue__item--open')

    }

    queueLinksCollapse.forEach(link => link.addEventListener('click', removeQueueItemClass))


}

queueMore()