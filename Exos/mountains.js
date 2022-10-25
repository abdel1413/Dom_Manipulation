const MOUNTAINS = [
  { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
  { name: "Everest", height: 8848, place: "Nepal" },
  { name: "Mount Fuji", height: 3776, place: "Japan" },
  { name: "Vaalserberg", height: 323, place: "Netherlands" },
  { name: "Denali", height: 6168, place: "United States" },
  { name: "Popocatepetl", height: 5465, place: "Mexico" },
  { name: "Mont Blanc", height: 4808, place: "Italy/France" },
];
function buildTable(data) {
  //create table
  let table = document.createElement("table");
  //get the keys from data
  let fields = Object.keys(data[0]);
  console.log(fields);

  let headRow = document.createElement("tr");
  //loop thru the keys to create a th where
  //we're going to place each elt as text node
  fields.forEach(function (field) {
    //console.log(field);
    let headCell = document.createElement("th");
    headCell.appendChild(document.createTextNode(field));
    //console.log("headcell", headCell);
    headRow.appendChild(headCell);
    // console.log("headrow", headRow);
  });
  table.appendChild(headRow);
  console.log("data", data);
  data.forEach(function (object) {
    console.log(object);
    let row = document.createElement("tr");
    fields.forEach(function (field) {
      let cell = document.createElement("td");
      cell.appendChild(document.createTextNode(object[field]));
      cell.style.textAlign = "center";
      if (typeof object[field] == "number") {
        cell.style.textAlign = "right";
      }
      row.appendChild(cell);
    });
    table.appendChild(row);
  });
  return table;
}
document.querySelector("#mountains").appendChild(buildTable(MOUNTAINS));
