async function loadModalHTML() {
    const response = await fetch('modal.html');
    const content = await response.text();
    document.getElementById('modal-container').innerHTML = content;
}

window.addEventListener('DOMContentLoaded', loadModalHTML);