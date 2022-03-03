// 08-dom/08-generate-table-two/script.js - 8.8: creating a table (2)

(() => {

    let table = document.createElement("table");
    let tbody = document.createElement("tbody");

    table.appendChild(tbody);

  // Adding the entire table to the target id
  document.getElementById("target").appendChild(table);

  
  // Creating and adding data to  row of the table
  for (let i = 1; i <= 10; i++) {
    let row_i = document.createElement("tr");
    for (let j = 1; j <= 10; j++) {
        let row_i_data_j = document.createElement("td");
        row_i_data_j.innerHTML = i * j;
        row_i.appendChild(row_i_data_j);
    }
    tbody.appendChild(row_i);
  }

})();
