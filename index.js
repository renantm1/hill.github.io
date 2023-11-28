function togglePopup() {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');

    popup.classList.toggle('show-popup');
    overlay.classList.toggle('show-popup');
}