// Load Collapse menu items
// Explanation in Details-
//This function is responsible for collapsing or sliding up the elements 
//with the IDs SideBox3, SideBox2, and SideBox1. 
//It uses the jQuery library ($) and the slideUp() method to animate the sliding up effect.


function LoadSlide() {
    $('#SideBox3').slideUp();
    $('#SideBox2').slideUp();
    $('#SideBox1').slideUp();
}
// Add New Contact
// Explanation-
// This function is triggered when adding a new contact. 
// It creates a new Headers object and sets the "Content-Type" header to "application/json". 
// Then, it creates a JSON payload with contact information obtained from input fields. 
// The payload is sent to the server using a POST request via the fetch API.

function addContact() {
    /*  alert($("#courseID").val() + $("#courseName").val() + $("#courseFee").val() + $("#duration").val()); */
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "contactID": $("#contactID").val(),
        "contactName": $("#contactName").val(),
        "contactAge": $("#contactAge").val(),
        "contactAddress": $("#address").val(),
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:3000/Contact", requestOptions)

    $("#contactID").val("");
    $("#contactName").val("");
    $("#contactAge").val("");
    $("#address").val("");
    showData();
};



// Course Details Display Function
// Explanation-
// This function retrieves data from the server by sending a GET request to "http://localhost:3000/Contact/". 
// The response data is processed and used to generate an HTML table. 
// The table rows are then appended to the element with the ID tblBody.
function showData() {

    var settings = {
        "url": "http://localhost:3000/Contact/",
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {


        if ((response.length) > 0) {
            var html = "";
            document.getElementById('tblBody').innerHTML = "";
            for (let i = 0; i < response.length; i++) {
                html += "<tr><td>" + response[i].id + "</td><td>" + response[i].contactID + "</td><td>" + response[i].contactName +
                    "</td><td>" + response[i].contactAge + "</td><td>" + response[i].contactAddress +
                    "</td></tr > ";

            }
            document.getElementById('tblBody').innerHTML += html;
        };
    });
};

//Other functions xplanation-
//The remaining functions (showEditData(), EditData(), showDeleteData(), and DeleteContact()) are similar in structure to the showData() function. 
//They perform AJAX requests to retrieve specific data, update or delete data on the server, and then call the showData() function to refresh the displayed data.


// Show Edit Data
function showEditData() {

    var settings = {
        "url": "http://localhost:3000/Contact/" + $("#slIDEdit").val(),
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
        $("#EditID").val(response.contactID);
        $("#EditName").val(response.contactName);
        $("#EditAge").val(response.contactAge);
        $("#Editaddress").val(response.contactAddress);
    });

}

function EditData() {
    var settings = {
        "url": "http://localhost:3000/Contact/" + $("#slIDEdit").val(),
        "method": "PUT",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "contactID": $("#EditID").val(),
            "contactName": $("#EditName").val(),
            "contactAge": $("#EditAge").val(),
            "contactAddress": $("#Editaddress").val(),
            "id": $("#slIDEdit").val()
        }),
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    $("#EditID").val("");
    $("#EditName").val("");
    $("#EditAge").val("");
    $("#Editaddress").val("");
    showData();
}


function showDeleteData() {

    var settings = {
        "url": "http://localhost:3000/Contact/" + $("#slIDDelete").val(),
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
        $("#DeleteID").val(response.contactID);
        $("#DeleteName").val(response.contactName);
        $("#DeleteAge").val(response.contactAge);
        $("#Deleteaddress").val(response.contactAddress);
    });

}

function DeleteContact() {
    var settings = {
        "url": "http://localhost:3000/Contact/" + $("#slIDDelete").val(),
        "method": "DELETE",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    $("#DeleteID").val("");
    $("#DeleteName").val("");
    $("#DeleteAge").val("");
    $("#Deleteaddress").val("");
    showData();
}

//Overall, this code appears to be a client-side implementation for managing contact information through AJAX requests to a local server.
