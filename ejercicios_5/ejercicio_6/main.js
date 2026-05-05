const btnToggle = document.getElementById('modoOscuroBtn');

btnToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});