window.addEventListener('load', function () {
    this.setInterval(function () { createBubble() }, 250);
});

async function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = Math.random() * 100 + 'vw';
    bubble.style.animationDuration = Math.random() * 5 + 13 + 's';
    bubble.style.backgroundColor = 'hsl(' + Math.random() * 360 + ', 100%, 50%)';
    document.body.appendChild(bubble);
    bubble.addEventListener('click', () => {
        bubble.style.animationPlayState = 'paused';
        bubble.style.backgroundColor = 'hsl(' + Math.random() * 360 + ', 100%,100%)';
        setTimeout(() => { document.body.removeChild(bubble) }, 500);
    });
    bubble.addEventListener('animationend', () => {
        document.body.removeChild(bubble);
    });
}