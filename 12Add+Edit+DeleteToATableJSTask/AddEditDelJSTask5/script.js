document.addEventListener("DOMContentLoaded", function() {
    var coll = document.getElementsByClassName("collapsible");
    var i;
  
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
  
    // // for saving and showing data in table
    // var saveBtn = document.getElementById("saveBtn");
    // var showBtn = document.getElementById("showBtn");
    // var dataTable = document.getElementById("dataTable");
    // var dataBody = document.getElementById("dataBody");
    // var slNo = 1;
  
    // saveBtn.addEventListener("click", function(event) {
    //   event.preventDefault();
    //   var nameInput = document.getElementById("nameInput");
    //   var addressInput = document.getElementById("addressInput");
    //   var contactInput = document.getElementById("contactInput");
  
    //   var newRow = dataBody.insertRow();
    //   var slNoCell = newRow.insertCell(0);
    //   var nameCell = newRow.insertCell(1);
    //   var addressCell = newRow.insertCell(2);
    //   var contactCell = newRow.insertCell(3);
    //   //var actionsCell = newRow.insertCell(4);
  
    //   slNoCell.textContent = slNo++;
    //   nameCell.textContent = nameInput.value;
    //   addressCell.textContent = addressInput.value;
    //   contactCell.textContent = contactInput.value;
    //   //actionsCell.innerHTML = '<button class="editBtn">Edit</button>
    //    //                         <button class="deleteBtn">Delete</button>';
  
    //   nameInput.value = "";
    //   addressInput.value = "";
    //   contactInput.value = "";
  
    //   attachEditDeleteListeners();
    // });
  
    // showBtn.addEventListener("click", function() {
    //   var rows = dataBody.getElementsByTagName("tr");
    //   if (rows.length === 0) {
    //     alert("No data to show!");
    //   } else {
    //     var dataString = "Sl No\tName\tAddress\tContact\n";
    //     for (var i = 0; i < rows.length; i++) {
    //       var cells = rows[i].getElementsByTagName("td");
    //       var slNo = cells[0].textContent;
    //       var name = cells[1].textContent;
    //       var address = cells[2].textContent;
    //       var contact = cells[3].textContent;
    //       dataString += slNo + "\t" + name + "\t" + address + "\t" + contact + "\n";
    //     }
    //     alert(dataString);
    //   }

    //   var a = document.getElementById("slInput").value;
       
    // });
  
    // function attachEditDeleteListeners() {
      
    //         // Get all the edit buttons
    //     var editButtons = document.getElementsByClassName("editBtn");
    //     for (var i = 0; i < editButtons.length; i++) {
    //       editButtons[i].addEventListener("click", function () {
    //         var row = this.parentNode.parentNode;
    //         var cells = row.getElementsByTagName("td");
    //         var name = cells[1].textContent;
    //         var address = cells[2].textContent;
    //         var contact = cells[3].textContent;
  
    //         // Fill the form fields with the row data
    //         document.getElementById("nameInput").value = name;
    //         document.getElementById("addressInput").value = address;
    //         document.getElementById("contactInput").value = contact;
  
    //         // Remove the row from the table
    //         row.parentNode.removeChild(row);
    //       });
    //     }
  
    //     // Get all the delete buttons
    //     var deleteButtons = document.getElementsByClassName("deleteBtn");
    //     for (var i = 0; i < deleteButtons.length; i++) {
    //       deleteButtons[i].addEventListener("click", function () {
    //         var row = this.parentNode.parentNode;
    //         row.parentNode.removeChild(row);
    //       });
    //     }
    //   }
  
    //   // Attach event listeners for edit and delete buttons when the page loads
    //   attachEditDeleteListeners();
    // });
  
  })