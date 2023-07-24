// function validateForm() {
//   var x = document.forms["myForm"]["name"].value;
//   if (x == "") {
//     alert("Name must be filled out");
//     return false;
//   }

//   var x = document.forms["myForm"]["email"].value;
//   if (x == "") {
//     alert("email must be filled out");
//     return false;
//   }

//   var x = document.forms["myForm"]["password"].value;
//   if (x == "") {
//     alert("password must be filled out");
//     return false;
//   }

//   var x = document.forms["myForm"]["rpassword"].value;
//   if (x == "") {
//     alert("rpassword must be filled out");
//     return false;
//   }
// }

///////////////////////////////////////////////////////////////////////////////


// // local storage  
// $(document).ready(function () {
// // Retrieve data from local storage if available
//     var formData = JSON.parse(localStorage.getItem('formData')) || [];
// //   var formData = [];

// // Display existing data in the table
// // displayData();

// // Form submit event handler
// $('#myForm').submit(function (event) {
//     event.preventDefault();

//     // Get form values
    
//     var name = $('input[name="name"]').val();
//     var email = $('input[name="email"]').val();
//     var password = $('input[name="password"]').val();
//     var rpassword = $('input[name="rpassword"]').val();

//     // Create an object with the form data
//     var data = {
        
//         name: name,
//         email: email,
//         password: password,
//         rpassword: rpassword
//     };

//     // Add data to the array

//     formData.push(data);

//     // Save data to local storage
//     localStorage.setItem('formData', JSON.stringify(formData));


//     // Reset the form
//     $('#myForm')[0].reset();
//   });

// });


/////////////////////////////////////////////////////////////////////////////////////

//sidebar 
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");


closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});
// Sidebar open when you click on the search iocn
sidebar.classList.toggle("open");
menuBtnChange(); //calling the function(optional)
;

// following are the code to change sidebar button(optional)
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
  }


}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
  // update edit modal7
  //  function onshow1(){
  //   myModal7.style.display = "block"
  //  }

  //  function close7(){
  //   myModal7.style.display="none";
  //  }
  
  //  end update modal7

// Get the modal2
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal
btn2.onclick = function () {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function () {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
// script modelbox 3
 // Get the modal3
// var modal3 = document.getElementById("myModal3");

// // Get the button that opens the modal
// var btn3 = document.getElementById("myBtn3");

// // Get the <span> element that closes the modal
// var span3 = document.getElementsByClassName("close3")[0];

// // When the user clicks on the button, open the modal
// btn3.onclick = function () {
//   modal3.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span3.onclick = function () {
//   modal3.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal3) {
//     modal3.style.display = "none";
//   }
// }

  // fee summery function start
const compareDates = (firstDate, secondDate) => {
  const d1 = firstDate.split("-");
  const d2 = secondDate.split("-");
  if (Number(d1[0]) > Number(d2[0])) {
    return 1;
  } else if(Number(d1[0]) < Number(d2[0])) {
    return -1;
  }

  if(Number(d1[1]) > Number(d2[1])) {
    return 1;
  } else if(Number(d1[1]) < Number(d2[1])) {
    return -1;
  }

  if(Number(d1[2]) > Number(d2[2])) {
    return 1;
  } else if(Number(d1[2]) < Number(d2[2])) {
    return -1;
  }

  return 0;
}

let filteredFeeData = [];

const getMoneyReceiptByDate = () => {
  let dateMin = document.getElementById("date1").value;
  let dateMax = document.getElementById("date2").value;
  if(dateMin === "") {
    window.alert("Required Fields are empty");
    return;
  }
  if(dateMax === "") {
    window.alert("Required Fields are empty");
    return;
  }
  var myHeaders = new Headers();

  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    url: "http://localhost:3000/money",
    method: 'GET',
  };
  const tableBody = document.getElementById("tblBody3");
  const selectInput = document.getElementById("Sel99");
  let contentTable = ``;
  let contentSelect = `<option value="-1" selected>Please select a student</option>
  `;
  let id = 1;
  $.ajax(requestOptions).done((res) => {
    filteredFeeData = [];
    for(let i=0; i<res.length; i++) {
      if(compareDates(res[i].date, dateMin) >= 0 
      && compareDates(res[i].date, dateMax) <= 0) {
        let row = `<tr id="dateMoneyRow_${id}">
          <td>${id}</td>
          <td>${dateMin}</td>
          <td>${dateMax}</td>
          <td>${res[i].Sel}</td>
          <td>${res[i].amount}</td>
        </tr>
        `;
        filteredFeeData.push({
          id: id,
          dateMin: dateMin,
          dateMax: dateMax,
          name: res[i].Sel,
          amount: res[i].amount,
        });
        let option = `<option value=${id}>${res[i].Sel}</option>
        `;
        contentTable = contentTable.concat(row);
        contentSelect = contentSelect.concat(option);
        id++;
      }
    }
    tableBody.innerHTML = contentTable;
    selectInput.innerHTML = contentSelect;
  });

}

const filterMoneyReceipts = () => {
  const id = document.getElementById("Sel99").value;
  const tableBody = document.getElementById("tblBody3");
  if(id === "-1") {
    tableBody.innerHTML = "";
    return;
  }
  let index = Number(id) - 1;
  tableBody.innerHTML = `<tr id="dateMoneyRow_${id}">
          <td>${filteredFeeData[index].id}</td>
          <td>${filteredFeeData[index].dateMin}</td>
          <td>${filteredFeeData[index].dateMax}</td>
          <td>${filteredFeeData[index].name}</td>
          <td>${filteredFeeData[index].amount}</td>
  </tr>
  `;
}
  //  end fee summary function


// Add New Course
function addCourse() {
  /*  alert($("#courseID").val() + $("#courseName").val() + $("#courseFee").val() + $("#duration").val()); */

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
      // "id": $("#id").val(),
      "name": $("#name").val(),
      "height": $("#height").val(),
      "weight": $("#weight").val(),
      "fee": $("#fee").val(),
      "address1": $("#address1").val(),
      "contact1": $("#contact1").val(),
      
  });

  var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
  };

  fetch("http://localhost:3000/student", requestOptions)

  // $("#id").val("");
  $("#name").val("");
  $("#height").val("");
  $("#weight").val("");
  $("#fee").val("");
  $("#address1").val("");
  $("#contact1").val("");
  showData();
};



// Course Details Display Function
function showData() {

  var settings = {
      "url": "http://localhost:3000/student",
      "method": "GET",
      "timeout": 0,
  };

  $.ajax(settings).done(function (response) {


      if ((response.length) > 0) {
          var html = "";
          document.getElementById('tblBody').innerHTML = "";
          for (let i = 0; i < response.length; i++) {
              html += "<tr><td>" + response[i].id + "</td><td>" + response[i].name + "</td><td>" + response[i].height +
                  "</td><td>" + response[i].weight + "</td><td>" + response[i].fee +
                  "</td><td>" + response[i].address1 + "</td><td>" + response[i].contact1 + "</td><td>" + '<button onclick="onshow1(' + response[i].id +')">EDIT</button>' +"&nbsp" +'<button onclick="del(' + response[i].id +')" >Delete</button>'+"</td></tr > ";

          }
          document.getElementById('tblBody').innerHTML += html;
      };
  });
      //  bind dropdown
  $.ajax(settings).done(function (dropdown) {
    let option1 = "";
    for (i = 0; i < dropdown.length; i++) {
      option1 += "<option>" + dropdown[i].name + "</option>"
    }
    document.getElementById("Sel").innerHTML = option1;
  });
    
};

const showStudent = () => {
  s2.style.display = "none"
  s3.style.display = "none"
  s1.style.display = "block"
};

const showMoney = () => {
  s1.style.display = "none"
  s3.style.display = "none"
  s2.style.display = "block"
};
const showfee = () => {
  s1.style.display = "none"
  s2.style.display = "none"
  s3.style.display = "block"
};
  //  add sec 2 data
  function addCourse2() {
    /*  alert($("#courseID").val() + $("#courseName").val() + $("#courseFee").val() + $("#duration").val()); */
  
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
        // "id": $("#id").val(),
        "mr": $("#mr").val(),
        "date": $("#date").val(),
        "Sel": $("#Sel").val(),
        "address": $("#address").val(),
        "contact": $("#contact").val(),
        "amount": $("#amount").val(),
        "month": $("#month").val(),
        
    });
  
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
  
    fetch(" http://localhost:3000/money", requestOptions)
  
    // $("#id").val("");
    $("#mr").val("");
    $("#date").val("");
    $("#Sel").val("");
    $("#addrss").val("");
    $("#contact").val("");
    $("#amount").val("");
    $("#month").val("");
    showData2();
  };
  
  
  
  // Course Details Display Function
  function showData2() {
  
    var settings = {
        "url": " http://localhost:3000/money",
        "method": "GET",
        "timeout": 0,
    };
  
    $.ajax(settings).done(function (response) {
  
  
        if ((response.length) > 0) {
            var html = "";
            document.getElementById('tblBody2').innerHTML = "";
            for (let i = 0; i < response.length; i++) {
                html += "<tr><td>" + response[i].id + "</td><td>" + response[i].mr + "</td><td>" + response[i].date +
                    "</td><td>" + response[i].Sel + "</td><td>" + response[i].address +
                    "</td><td>" + response[i].contact + "</td><td>" + response[i].amount + "</td><td>" + response[i].month + "</td><td>" + '<button  onclick="onshow2(' + response[i].id +')">EDIT</button>' +"&nbsp" +'<button onclick="del2(' + response[i].id +')" >Delete</button>'+"</td></tr > ";
  
            }
            document.getElementById('tblBody2').innerHTML += html;
        };
    });

      //  bind dropdown3
  $.ajax(settings).done(function (dropdown) {
    let option2 = "";
    for (i = 0; i < dropdown.length; i++) {
      option2 += "<option>" + dropdown[i].Sel + "</option>"
    }
    document.getElementById("editSel").innerHTML = option2;
  });
  }
    // bind amount
    function ShowAmt() {
      var settings2 = {
        "url": "http://localhost:3000/money",
        "method": "GET",
        "timeout": 0,
      };
    
      $.ajax(settings2).done(function (response2) {
        let a = document.getElementById("Sel3").value;
    
        for (i = 0; i < response2.length; i++) {
          if (response2[i].Sel === a) {
            document.getElementById("amounts").value = response2[i].amount;
          }
        }
    
      });
    
    }

    // end sec 2 data 
      // add sec 3 data
      
 

  //  send email function
 function otp () {
  const characters =
    "0123456789";
  let ot = "";
  for (let i = 0; i < 6; i++) {
    ot += characters[Math.floor(Math.random() * characters.length)];
  }
  return ot;
};
var ooo;
      function sendEmail() {
          Email.send({
              Host: "smtp.elasticemail.com",
              Username: "arun1234@elasticemail.com",
              Password: "4D01152C2A3449F696C515A400DCE5F0882D",
              To: 'arun7549kumar@gmail.com',
              From: "arun7549kumar@gmail.com",
              Subject: "This is the subject",
              Body:  `your verification code is ${otp()}`
          }).then(
              message => alert(message)   
          );
          s5.style.display = "block";
          s4.style.display = "none";

          ooo= otp()
          console.log(ooo)
          
      }
        // end send email function

  //  /////////
  function verify() {
    
    const inputotp = document.getElementById('otpinput').value;
  
    // console.log(inputotp, "AAAAAAAAAA");
    // console.log(ooo, "BBBBBBBB");
  
    if (inputotp === ooo) {
      alert("Email address verified...");
      window.location.href="index.html"
    }
    else {
      alert("Invalid OTP");
      window.location.href = "singup.html"
    }
  }

  // add signup data in json
  function addCourse4() {
    /*  alert($("#courseID").val() + $("#courseName").val() + $("#courseFee").val() + $("#duration").val()); */
  
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
        // "id": $("#id").val(),
        "name": $("#name").val(),
        "email": $("#email").val(),
        "password": $("#password").val(),
        "rpassword": $("#rpassword").val(),
        
        
    });
  
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
  
    fetch(" http://localhost:3000/sdata", requestOptions)
  
    // $("#id").val("");
    $("#name").val("");
    $("#email").val("");
    $("#password").val("");
    $("#rpassword").val("");
    
    
  };

    // bind showAmt1
    function ShowAmt1() {
      var settings3 = {
        "url": "http://localhost:3000/student",
        "method": "GET",
        "timeout": 0,
      };
    
      $.ajax(settings3).done(function (response3) {
        let b = document.getElementById("Sel").value;
    
        for (i = 0; i < response3.length; i++) {
          if (response3[i].name === b) {
            document.getElementById("address").value = response3[i].address1;
            document.getElementById("contact").value = response3[i].contact1;
          }
        }
    
      });
    
    }
      //  end bind showamt1

        // delete function table
        function del(i) {
          var settings = {
            "url": "http://localhost:3000/student/" + i,
            "method": "DELETE",
            "timeout": 0,
          };
        
          $.ajax(settings).done(function (response) {
            console.log(response);
          });
          $("#name").val("");
          $("#height").val("");
          $("#weight").val("");
          $("#fee").val("");
          $("#address1").val("");
          $("#contact1").val("");
          showData();
        
          // alert(i)
        
        }
        //  end delete functin
         
        // edit modal7
        let myModal7 = document.getElementById("myModal7");
        let p;
        
        function onshow1(i) {
          var settings = {
            "url": "http://localhost:3000/student/" + i,
            "method": "GET",
            "timeout": 0,
          };
        
           myModal7.style.display = "block";
        
          $.ajax(settings).done(function (response) {
            $("#name7").val(response.name);
            $("#height7").val(response.height);
            $("#weight7").val(response.weight);
            $("#fee7").val(response.fee);
            $("#address7").val(response.address1);
            $("#contact7").val(response.contact1);
        
        
          });
          p = i
        }
        
         function close7() {
           myModal7.style.display = "none";
         }
        //////////////////////////////////////////////////////////////////////////////////////////
        
        function update() {
          var settings = {
            "url": "http://localhost:3000/student/" + p,
            "method": "PUT",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
            "data": JSON.stringify({
              "name": $("#name7").val(),
              "height": $("#height7").val(),
              "weight": $("#weight7").val(),
              "fee": $("#fee7").val(),
              "address1": $("#address7").val(),
              "contact1": $("#contact7").val()
            }),
          };
        
          $.ajax(settings).done(function (response) {
            console.log(response);
          });
        
          $("#name7").val("");
          $("#height7").val("");
          $("#weight7").val("");
          $("#fee7").val("");
          $("#address7").val("");
          $("#contact7").val("");
          showData();
        }
        //  end edit modal7  
          
        //  edit money editmodal
          
        let editmyModal = document.getElementById("editmyModal");
        let q;
        
        function onshow2(i) {
          var settings = {
            "url": "http://localhost:3000/money/" + i,
            "method": "GET",
            "timeout": 0,
          };
        
           editmyModal.style.display = "block";
        
          $.ajax(settings).done(function (response) {
            $("#editmr").val(response.mr);
            $("#editdate").val(response.date);
            $("#editSel").val(response.Sel);
            $("#editaddress").val(response.address);
            $("#editcontact").val(response.contact);
            $("#editamount").val(response.amount);
            $("#editmonth").val(response.month);
        
        
          });
          q = i
        }
        
         function editclose() {
           editmyModal.style.display = "none";
         }
        //////////////////////////////////////////////////////////////////////////////////////////
        
        function update1() {
          var settings = {
            "url": "http://localhost:3000/money/" + q,
            "method": "PUT",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
            "data": JSON.stringify({
              "mr": $("#editmr").val(),
              "date": $("#editdate").val(),
              "Sel": $("#editSel").val(),
              "address": $("#editaddress").val(),
              "contact": $("#editcontact").val(),
              "amount": $("#editamount").val(),
              "month": $("#editmonth").val(),
            }),
          };
        
          $.ajax(settings).done(function (response) {
            console.log(response);
          });
        
          $("#editmr").val("");
          $("#editdate").val("");
          $("#editSel").val("");
          $("#editaddress").val("");
          $("#editcontact").val("");
          $("#editamount").val("");
          $("#editmonth").val("");
          showData2();
        }

      
        //  end edit money editmodal
          
          // delete money function table
        function del2(i) {
          var settings = {
            "url": "http://localhost:3000/money/" + i,
            "method": "DELETE",
            "timeout": 0,
          };
        
          $.ajax(settings).done(function (response) {
            console.log(response);
          });
          $("#mr").val("");
          $("#date").val("");
          $("#Sel").val("");
          $("#address").val("");
          $("#contact").val("");
          $("#amount").val("");
          $("#month").val("");
          showData2();
        
          // alert(i)
        
        }
        //  end delete money functin
            


        // fee summary function
          
        function ShowAmt() {
          var settings2 = {
            "url": "http://localhost:3000/money",
            "method": "GET",
            "timeout": 0,
          };
        
          $.ajax(settings2).done(function (dropdown) {
            let option2 = '<option value="" selected>Select Student</option>';
            for (i = 0; i < dropdown.length; i++) {
              option2 += '<option>' + dropdown[i].Sel + '</option>'
            }
            document.getElementById("Sel3").innerHTML = option2;
          });
        
        };
        
        function ShowFee() {
          var settings2 = {
            "url": "http://localhost:3000/money",
            "method": "GET",
            "timeout": 0,
          };
        
           document.getElementById("total").value="";
        
          $.ajax(settings2).done(function (response2) {
        
            let a = document.getElementById("Sel3").value;
        
            for (i = 0; i < response2.length; i++) {
              if (response2[i].Sel === a) {
                document.getElementById("amounts").value = response2[i].amount;
              }
            }
        
          });
        }

          //  show total function
          function showtotal() {
            var settings2 = {
              "url": "http://localhost:3000/money",
              "method": "GET",
              "timeout": 0,
            };
          
            let sum2 = 0;
          
            let amm = [];
            $.ajax(settings2).done(function (response2) {
              amm.push(...response2)
          
              amm.filter(k => {
                let am = parseInt(k.amount)
                sum2 += am
              })
              console.log(sum2)
              document.getElementById("total").value=sum2;
            });
          
          }