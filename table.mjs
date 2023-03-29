export const tableCreate = async (arr) => {
    
    createTableFromArray(arr)
}

function createTableFromArray(array) {
    const table = document.getElementById("my-tbody");
    for (let i = 0; i < array.length; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < array[i].length; j++) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode(array[i][j]);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}
