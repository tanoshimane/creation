fetchData();

async function fetchData() {
    // REST APIのエンドポイントを指定
    const apiUrl = "https://6g4lt1qeia.execute-api.us-east-2.amazonaws.com/netlifty_api_atage";
    const response = await fetch(apiUrl);
    console.log(response);
}

/*
window.addEventListener('DOMContentLoaded', async () => {
//ヘッダー作成
const week = await run("week");
let headerTexts = week;
headerTexts.md.unshift(" ");
headerTexts.ymd.unshift(" ");
const thead = document.getElementById('my-thead');
const headerRow = document.createElement('tr');
for (let i = 0; i < headerTexts.md.length; i++) {
    const headerCell = document.createElement('th');
    headerCell.classList.add('col-header');
    headerCell.textContent = headerTexts.md[i];
    headerRow.appendChild(headerCell);
}
thead.appendChild(headerRow);

//テーブル本文
let table = [];
let kintoneRecord = await run("kintone_get","creation-takasaki",55,"wOW45LLBe9Om99ovfaGqdizguYYKYvNEpF73RMhf");
let dateKey = await run("dateKey",kintoneRecord);
const colTexts = await run("createHourArray",9, 18, 30);
console.log(colTexts);
for (let i = 0; i < colTexts.length; i++) {
    table.push([colTexts[i]])
    for (let j = 1; j < 8; j++) {
    let value = headerTexts.ymd[j] + colTexts[i];
    if(dateKey.indexOf(value) != -1){
        table[i].push("×");
    }else{
        table[i].push("〇");
    }
    
    }
}
const tbody = document.getElementById("my-tbody");
for (let i = 0; i < table.length; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < table[i].length; j++) {
    const cell = document.createElement("td");
    
    if(table[i][j] == "〇"){
        let link = document.createElement("a");
        link.href = "https://script.google.com/macros/s/AKfycbzQEFaf7B_xTbaeurPCtDtbQPGaFZIrz3mqdEvBQIJ1xWc6vpeAxcWej_bA50m4SCmf/exec";
        link.textContent = table[i][j]
        cell.appendChild(link);
    }else{
        cell.textContent = table[i][j]
    }
    row.appendChild(cell);
    }
    tbody.appendChild(row);
}


// Wrap google.script.run
function run(script,arg1,arg2,arg3,arg4) {
    return new Promise((resolve, reject) => {
    google.script.run
        .withSuccessHandler((result) => resolve(result))
        .withFailureHandler((error) => resolve(error))
        [script](arg1,arg2,arg3,arg4);
    });
}
});
*/
