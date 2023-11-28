function togglePopup() {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');

    // Alterna a visibilidade do pop-up e da sobreposição
    popup.classList.toggle('show-popup');
    overlay.classList.toggle('show-popup');
}