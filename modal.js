// モーダルダイアログを表示する関数
function showModalDialog() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}
// モーダルダイアログを閉じる関数
function closeModalDialog() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
// ボタンをクリックしたときの処理
function handleClick() {
    alert("ボタンがクリックされました。");
}
function displayValue(button) {
    console.log(button);
    let row = button.parentNode.parentNode;
    let col2 = row.cells[1].textContent;
    console.log(col2);
}