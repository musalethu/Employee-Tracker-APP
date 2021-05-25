  
var selectedRow = null
var form=[]
function onFormSubmit(event) {
  event.preventDefault();
  
  var FormData = readFormData();
  if (FormData.name !== "" && FormData.surname !== "" && FormData.workOn !== "") {
    insertNewRecords(FormData);
  }
  form = [...form, FormData]
  console.log(form);
  // if (selectedRow=== null) {
  //     insertNewRecords(FormData);
  // }
      
  updateRecord(FormData);
  resertForm(); 
}
function readFormData() {
  var FormData = {};
  
  FormData["name"] = document.getElementById("name").value;
  FormData["surname"] = document.getElementById("surname").value;
  FormData["workOn"] = document.getElementById("work").value;
  return FormData;
}

function insertNewRecords(data) {
  var table = document.getElementById("employee-list").getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.name;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.surname;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.workOn;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = `<a onClick=" onEDIT(this)">EDIT</a>
                    <a onClick=" onDelete(this)">DELETE</a>
                    <input type="checkbox">`;
                   
}

function resertForm() {
  document.getElementById("name").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("work").value = "";
  selectedRow = null;
}

function onEDIT(td) {
  selectedRow = td.parentElement.parentElement
  document.getElementById("name").value = selectedRow.cells[0].innerHTML;
  document.getElementById("surname").value = selectedRow.cells[1].innerHTML;
  document.getElementById("workOn").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(FormData) {
  selectedRow.cells[0].innerHTML = FormData.name;
  selectedRow.cells[1].innerHTML = FormData.surname;
  selectedRow.cells[2].innerHTML = FormData.workOn;
}

function onDelete(td) {
 
    row = td.parentElement.parentElement;
    document.getElementById("employee-list").getElementsByTagName("tbody")[0].deleteRow(row);
    resertForm();
  
  }

