let fcCurrent = 0, fcShuffled = [...fcData];

function setupFlashcards() {
    renderFlashcard();
    const card = document.getElementById('fc-card');
    card.addEventListener('click', function() {
        this.classList.toggle('is-flipped');
    });
    document.getElementById('btn-fc-flip').addEventListener('click', () => {
        card.classList.toggle('is-flipped');
    });
    document.getElementById('btn-fc-next').addEventListener('click', () => {
        if(fcCurrent < fcShuffled.length - 1) fcCurrent++;
        animateFCSwap();
    });
    document.getElementById('btn-fc-prev').addEventListener('click', () => {
        if(fcCurrent > 0) fcCurrent--;
        animateFCSwap();
    });
    document.getElementById('btn-fc-shuffle').addEventListener('click', () => {
        fcShuffled.sort(() => Math.random() - 0.5);
        fcCurrent = 0;
        animateFCSwap();
    });
}

function animateFCSwap() {
    const card = document.getElementById('fc-card');
    card.classList.remove('is-flipped');
    gsap.fromTo(card, {x: 50, opacity:0}, {x:0, opacity:1, duration:0.4, clearProps: "all"});
    setTimeout(renderFlashcard, 150);
}

function renderFlashcard() {
    const f = fcShuffled[fcCurrent];
    document.getElementById('fc-mod-f').textContent = f.m;
    document.getElementById('fc-mod-b').textContent = f.m;
    document.getElementById('fc-q').textContent = f.q;
    document.getElementById('fc-a').textContent = f.a;
    document.getElementById('fc-counter').textContent = `${fcCurrent + 1} / ${fcShuffled.length}`;
}
window.setupFlashcards = setupFlashcards;
