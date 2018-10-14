const voteButton = document.querySelector('.vote-button__trigger')
const supervoteButton = document.querySelector('.supervote-button__trigger')
const popupContainer = document.querySelector('.popup-container')
const yesButton = popupContainer.querySelector('.yes')


const closePopup = () => {
    popupContainer.classList.add('hidden')
}


voteButton.addEventListener('click', () => {
    let cooldown = 1000 * 10 // 1s * n
    let increments = 1
    let interval = 100 / increments
    let counter = 0 // for clearing interval and progress tracking
    let voteButtonBg = voteButton.querySelector('.vote-button__bg')
    let voteButtonVal = voteButton.querySelector('.vote-button__val')

    if (!voteButton.classList.contains('cooling')) {
        let timer = setInterval(() => {
            if (counter == 0)
                voteButtonVal.classList.add('appear')

            if (counter <= interval) {
                voteButtonBg.style.width = `${counter * increments}%`
                voteButton.classList.add('cooling')
            } else {
                clearInterval(timer)
                voteButton.classList.remove('cooling')
                voteButtonVal.classList.remove('appear')
            }

            counter++
        }, (cooldown / interval))
    }
})


supervoteButton.addEventListener('click', () => {
    popupContainer.classList.remove('hidden')
})


popupContainer.addEventListener('click', e => {
    if (e.target === e.currentTarget) closePopup()
})


yesButton.addEventListener('click', e => {
    e.preventDefault()
    closePopup()

    let supervoteButtonVal = supervoteButton.querySelector('.vote-button__val')
    supervoteButtonVal.classList.add('appear')

    setTimeout(() => {
        supervoteButtonVal.classList.remove('appear')
    }, 1500)
})
