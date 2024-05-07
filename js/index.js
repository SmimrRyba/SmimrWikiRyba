let body = document.getElementById('body')
let modalWindow = document.getElementById('modal-window')

let img = document.getElementsByClassName('img')
let modalImg = document.getElementById('modal-img')

let caption = document.getElementById('modal-caption')

let closeBtn = document.getElementById('close-btn')

for (let i = 0; i < img.length; i++) {
    img[i].onclick = function() {
        modalWindow.style.display = 'block'
        modalImg.src = this.src
        caption.innerText = this.alt
        body.style.height = '100vh'
        body.style.overflowY = 'hidden'
        body.style.paddingRight = '15px'
    }
}

closeBtn.onclick = function() {
    modalWindow.style.display = 'none'
    body.style.height = 'auto'
    body.style.overflowY = 'auto'
    body.style.paddingRight = '0'
}
