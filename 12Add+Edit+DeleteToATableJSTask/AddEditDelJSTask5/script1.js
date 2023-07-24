document.addEventListener("DOMContentLoaded", function () {
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
});

//-1- For Add menu
//Step1-Initialising array with empty values
let name1 = [];
let address = [];
let contact = [];

//Step2-Getting array values through id in add function
function Add() {
  name1.push(document.getElementById("nameInput").value);
  address.push(document.getElementById("addressInput").value);
  contact.push(document.getElementById("contactInput").value);
  show(); // calling function to show values

  document.getElementById("nameInput").value="";
  document.getElementById("addressInput").value="";
  document.getElementsByClassName("contactInput").value="";
}

//Step3-Showing user input values in table
function show() {
  let txt1 = "";
  let txt2 = "";
  let txt3 = "";
  let txt4 = "";

  for (let i = 0; i < name1.length; i++) {
    txt1 += i + 1 + "<br>";
    txt2 += name1[i] + "<br>";
    txt3 += address[i] + "<br>";
    txt4 += contact[i] + "<br>";
  }
  document.getElementById("slno").innerHTML = txt1;
  document.getElementById("name2").innerHTML = txt2;
  document.getElementById("address1").innerHTML = txt3;
  document.getElementById("contact1").innerHTML = txt4;
}

//-2-For Edit Menu
function Edit() {
  let slno = parseInt(document.getElementById("slInput").value);
  let x = document.getElementById("nameInput1").value;
  let y = document.getElementById("addressInput1").value;
  let z = document.getElementById("contactInput1").value;

  name1[slno - 1] = x;
  address[slno - 1] = y;
  contact[slno - 1] = z;
  show();
}

function show1() {
  let x = parseInt(document.getElementById("slInput").value) - 1;
  document.getElementById("nameInput1").value = name1[x];
  document.getElementById("addressInput1").value = address[x];
  document.getElementById("contactInput1").value = contact[x];
}

//-3-For Delete Menu
function Del() {
  let a = document.getElementById("slInput1").value - 1;
  name1.splice(a, 1);
  contact.splice(a, 1);
  address.splice(a, 1);
  show();
}

function show2() {
  let y = parseInt(document.getElementById("slInput1").value)-1;

  document.getElementById("nameInput2").value = name1[y];
  document.getElementById("addressInput2").value = address[y];
  document.getElementById("contactInput2").value = contact[y];
}
