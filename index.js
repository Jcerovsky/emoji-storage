const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById('pop-btn')
const shiftBtn = document.getElementById('shift-btn')

const myEmojis = []

function renderEmojis() {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

renderEmojis()


pushBtn.addEventListener("click", () => {
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

unshiftBtn.addEventListener("click", () => {
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

popBtn.addEventListener('click', () => {
    myEmojis.pop(myEmojis)
    emojiInput.value = ''
    renderEmojis()
    
})

shiftBtn.addEventListener('click', () => {
    myEmojis.shift(myEmojis)
    emojiInput.value = ''
    renderEmojis()
    
})