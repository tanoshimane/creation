async function loadModalHTML() {
    const response = await fetch('modal_html.html');
    const content = await response.text();
    document.getElementById('modal-container').innerHTML = content;
}

window.addEventListener('DOMContentLoaded', loadModalHTML);