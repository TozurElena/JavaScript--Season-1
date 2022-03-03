// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)

(() => {
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");

  table.appendChild(thead);
  table.appendChild(tbody);

  // Adding the entire table to the target id
  document.getElementById("target").appendChild(table);

  // Creating and adding data to first row of the table
  let row_1 = document.createElement("tr");
  let heading_1 = document.createElement("th");
  heading_1.innerHTML = "Table";
  row_1.appendChild(heading_1);
  thead.appendChild(row_1);
  // Creating and adding data to  row of the table
  for (let i = 2; i <= 10; i++) {
    let row_i = document.createElement("tr");
    let row_i_data = document.createElement("td");
    row_i_data.innerHTML = i;
    
    row_i.appendChild(row_i_data);
    tbody.appendChild(row_i);
  }
})();
// https://www.delftstack.com/fr/howto/javascript/create-table-javascript/