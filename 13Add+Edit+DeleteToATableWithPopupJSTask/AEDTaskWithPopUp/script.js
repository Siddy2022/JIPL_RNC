let names = [];
let addresses = [];
let contacts = [];
let p;

//1-for opening of popup window
function ShowPopUp() {
  let popup = document.getElementById("popup");
  popup.style.display = "block";
}

//2-for closing popup window
function onClose() {
  let popup = document.getElementById("popup");
  popup.style.display = "none";
}

//3-for clearing data
function clearform() {
  document.getElementById("name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("contact").value = "";

  document.getElementById("name2").value = "";
  document.getElementById("address2").value = "";
  document.getElementById("contact2").value = "";
}

//4-for displaying data
function displaydata() {
  let text1 = "";
  let text2 = "";
  let text3 = "";
  let text4 = "";
  let text5 = "";

  for (let i = 0; i < names.length; i++) {
    text1 += i + 1 + "<br>";
    text2 += names[i] + "<br>";
    text3 += addresses[i] + "<br>";
    text4 += contacts[i] + "<br>";
    text5 +=
      '<span onclick="EditData(' +
      i +
      ')"><i class="material-icons">&#xe3c9;</i></span>' +
      "&nbsp" +
      "&nbsp" +
      "&nbsp" +
      '<span onclick="DeleteData(' +
      i +
      ')"><i class="material-icons">&#xe872;</i></span>' +
      "<br>";
  }
  document.getElementById("display1").innerHTML = text1;
  document.getElementById("display2").innerHTML = text2;
  document.getElementById("display3").innerHTML = text3;
  document.getElementById("display4").innerHTML = text4;
  document.getElementById("display5").innerHTML = text5;
}

//5-for saving data to table
function onSubmit() {
  let name = document.getElementById("name").value;
  let address = document.getElementById("address").value;
  let contact = document.getElementById("contact").value;
  
  names.push(name);
  addresses.push(address);
  contacts.push(contact);
  displaydata();
  clearform();
  onSubmitpopupclose();
}

//6-for closing popup window after saving
function onSubmitpopupclose() {
  let popup = document.getElementById("popup");
  popup.style.display = "none";
}

//7-for updating data in table after submit
function onUpdate() {
  let x = document.getElementById("name2").value;
  let y = document.getElementById("address2").value;
  let z = document.getElementById("contact2").value;

  names[p] = x;
  addresses[p] = y;
  contacts[p] = z;

  displaydata();
  clearform();
  onUpdateClose();
}

//8-for closing pop up window
function onUpdateClose() {
  let popup = document.getElementById("popup2");
  popup.style.display = "none";
}

//9-function for edit operation in table via popup window
function EditData(i) {
  let popup = document.getElementById("popup2");
  popup.style.display = "block";

  p = i;

  document.getElementById("name2").value = names[i];
  document.getElementById("address2").value = addresses[i];
  document.getElementById("contact2").value = contacts[i];
}

//10-function for delete operation
function DeleteData(i) {
  p = i;

  names.splice(p, 1);
  addresses.splice(p, 1);
  contacts.splice(p, 1);
  displaydata();
}
