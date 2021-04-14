  
var selectedRow = null

function onFormSubmit(event) {
  event.preventDefault();
  var FormData = readFormData();
  if (selectedRow == null)
    insertNewRecords(FormData);
  else
    updateRecord(FormData);
  resertForm();
  
}
function readFormData() {
  var FormData = {};
  FormData["name"] = document.getElementById("name").value;
  FormData["surname"] = document.getElementById("surname").value;
  FormData["WorkingON"] = document.getElementById("work").value;
  return FormData;
}

function insertNewRecords(data) {
  var table = document
    .getElementById("employee-list")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.name;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.surname;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.WorkingON;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = `<a>EDIT</a>
                    <a>DELETE</a>`;
}

function resertForm() {
  document.getElementById("name").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("work").value = "";
}

function onEDIT(td) {
  selectedRow = td.parentElement.parentElement
  document.getElementById("name").value = selectedRow.cells[0].innerHTML;
  document.getElementById("surname").value = selectedRow.cells[1].innerHTML;
  document.getElementById("workingON").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(FormData) {
  selectedRow.cells[0].innerHTML = FormData.name
  selectedRow.cells[1].innerHTML = FormData.surname;
  selectedRow.cells[2].innerHTML = FormData.WorkingON;
}