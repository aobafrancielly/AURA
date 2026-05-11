function updatePrice() {
    const metal = parseFloat(document.getElementById('metal').value) || 0;
    const pedra = parseFloat(document.getElementById('pedra').value) || 0;
    const total = metal + pedra;
            
    document.getElementById('totalPrice').innerText = 
        total > 0 ? `Estimativa: R$ ${total.toLocaleString('pt-BR')},00` : "R$ 0,00";
}

function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 50) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
window.onload = reveal;

document.addEventListener("DOMContentLoaded", function() {
    const track = document.getElementById('card-track');
        if (!track) return;
        const cards = Array.from(track.children);
        cards.forEach(card => {
            const clone = card.cloneNode(true);
            track.appendChild(clone);
        });

    let xPos = 0;
    const speed = 0.8;

    function move() {
        xPos -= speed;
        if (Math.abs(xPos) >= track.scrollWidth / 2) {
            xPos = 0;
        }
        track.style.transform = `translateX(${xPos}px)`;
            requestAnimationFrame(move);
        }
        move();
});
