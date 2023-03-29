export const tableCreate = async (week,kintoneRecord,dateKey,colTexts) => {
    //ヘッダー作成
    let headerTexts = week;
    console.log(headerTexts);
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
          link.href = "form.html";
          link.textContent = table[i][j]
          cell.appendChild(link);
        }else{
          cell.textContent = table[i][j]
        }
        row.appendChild(cell);
      }
      tbody.appendChild(row);
    }
}
