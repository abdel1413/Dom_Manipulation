const MOUNTAINS = [
  { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
  { name: "Everest", height: 8848, place: "Nepal" },
  { name: "Mount Fuji", height: 3776, place: "Japan" },
  { name: "Vaalserberg", height: 323, place: "Netherlands" },
  { name: "Denali", height: 6168, place: "United States" },
  { name: "Popocatepetl", height: 5465, place: "Mexico" },
  { name: "Mont Blanc", height: 4808, place: "Italy/France" },
];

// function buildTable(data) {
//   //create table
//   let table = document.createElement("table");
//   //get the keys from data
//   let fields = Object.keys(data[0]);
//   console.log(fields);

//   let headRow = document.createElement("tr");
//   //loop thru the keys to create a th where
//   //we're going to place each elt as text node
//   fields.forEach(function (field) {
//     //console.log(field);
//     let headCell = document.createElement("th");
//     headCell.appendChild(document.createTextNode(field));
//     //console.log("headcell", headCell);
//     headRow.appendChild(headCell);
//     // console.log("headrow", headRow);
//   });
//   table.appendChild(headRow);
//   console.log("data", data);
//   data.forEach(function (object) {
//     console.log(object);
//     let row = document.createElement("tr");
//     fields.forEach(function (field) {
//       let cell = document.createElement("td");
//       cell.appendChild(document.createTextNode(object[field]));
//       cell.style.textAlign = "center";
//       if (typeof object[field] == "number") {
//         cell.style.textAlign = "right";
//       }
//       row.appendChild(cell);
//     });
//     table.appendChild(row);
//   });
//   return table;
// }
// document.querySelector("#mountains").appendChild(buildTable(MOUNTAINS));

//create function that take object
// inside  function create a table
//get the keys forn the object and use those keys to create
// th inside the table
//then loop thru the objet to get its properties
// create also td where we pass the properties
//check if the type is number then align  to right
// return the whole table
// // get the body and append thable function

// function buildTable(data) {
//   let table = document.createElement("table");
//   console.log(table);
//   let headRow = document.createElement("tr");
//   console.log(headRow);
//   let headNames = Object.keys(data[0]);
//   console.log(headNames);
//   headNames.forEach((r) => {
//     let th = document.createElement("th");
//     th.appendChild(document.createTextNode(r));
//     headRow.appendChild(th);
//   });
//   table.appendChild(headRow);
//   console.log(table);
//   data.forEach((ob) => {
//     let tr = document.createElement("tr");
//     headNames.forEach((f) => {
//       let td = document.createElement("td");
//       console.log(td);
//       td.appendChild(document.createTextNode(ob[f]));
//       td.style.textAlign = "right";
//       console.log(ob[f]);
//       tr.appendChild(td);
//       console.log(tr);
//     });
//     table.appendChild(tr);
//     console.log(table);
//   });
//   return table;
// }
// document.querySelector("#mountains").appendChild(buildTable(MOUNTAINS));

function buildTable(data) {
  let table = document.createElement("table");
  let headRow = document.createElement("tr");
  let keys = Object.keys(data[0]);
  console.log(keys);
  keys.forEach((f) => {
    let headCell = document.createElement("th");
    headCell.appendChild(document.createTextNode(f));
    headRow.appendChild(headCell);
  });
  table.appendChild(headRow);
  data.forEach((el) => {
    let tr = document.createElement("tr");
    keys.forEach((f) => {
      let td = document.createElement("td");
      td.appendChild(document.createTextNode(el[f]));
      td.style.textAlign = "center";
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });
  return table;
}
document.querySelector("#mountains").appendChild(buildTable(MOUNTAINS));
