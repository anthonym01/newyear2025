window.addEventListener('load', function () {
    this.setInterval(function () { createBubble() }, 150);
});

async function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = Math.random() * 100 + 'vw';
    bubble.style.animationDuration = Math.random() * 5 + 8 + 's';
    bubble.style.backgroundColor = 'hsl(' + Math.random() * 360 + ', 100%, 50%)';
    document.body.appendChild(bubble);
    bubble.addEventListener('click', () => {
        bubble.style.animationPlayState = 'paused';
        document.body.removeChild(bubble);
    });
    bubble.addEventListener('animationend', () => {
        document.body.removeChild(bubble);
    });
}