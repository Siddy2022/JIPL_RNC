// let names = [];
// let durations = [];
// let fees = [];

let names = JSON.parse(localStorage.getItem("NameLocal") || "[]");
let durations = JSON.parse(localStorage.getItem("DurationLocal") || "[]");
let fees = JSON.parse(localStorage.getItem("FeesLocal") || "[]");

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
  document.getElementById("cname").value = "";
  document.getElementById("cduration").value = "";
  document.getElementById("cfee").value = "";

  document.getElementById("cname2").value = "";
  document.getElementById("cduration2").value = "";
  document.getElementById("cfee2").value = "";
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
    text3 += durations[i] + "<br>";
    text4 += fees[i] + "<br>";
    text5 +=
      '<span onclick="EditData(' + i + ')"><i class="material-icons">&#xe3c9;</i></span>' +
      "&nbsp" +
      "&nbsp" +
      "&nbsp" +
      '<span onclick="DeleteData(' + i + ')"><i class="material-icons">&#xe872;</i></span>' +
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
  let cname = document.getElementById("cname").value;
  let cduration = document.getElementById("cduration").value;
  let cfee = document.getElementById("cfee").value;

  names.push(cname);
  durations.push(cduration);
  fees.push(cfee);

  const myJSON1 = JSON.stringify(names);
  localStorage.setItem("NameLocal", myJSON1);

  const myJSON2 = JSON.stringify(durations);
  localStorage.setItem("DurationLocal", myJSON2);

  const myJSON3 = JSON.stringify(fees);
  localStorage.setItem("FeesLocal", myJSON3);

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
  let x = document.getElementById("cname2").value;
  let y = document.getElementById("cduration2").value;
  let z = document.getElementById("cfee2").value;

  names[p] = x;
  durations[p] = y;
  fees[p] = z;

  // Update data in localStorage
  localStorage.setItem("NameLocal", JSON.stringify(names));
  localStorage.setItem("DurationLocal", JSON.stringify(durations));
  localStorage.setItem("FeesLocal", JSON.stringify(fees));

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

  document.getElementById("cname2").value = names[i];
  document.getElementById("cduration2").value = durations[i];
  document.getElementById("cfee2").value = fees[i];
}

//10-function for delete operation
function DeleteData(i) {
  names.splice(p, 1);
  durations.splice(p, 1);
  fees.splice(p, 1);

  // Update data in localStorage
  localStorage.setItem("NameLocal", JSON.stringify(names));
  localStorage.setItem("DurationLocal", JSON.stringify(durations));
  localStorage.setItem("FeesLocal", JSON.stringify(fees));

  displaydata();
}
