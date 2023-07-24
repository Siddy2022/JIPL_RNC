// Load Collapse menu items
function LoadSlide() {
    $('#SideBox3').slideUp();
    $('#SideBox2').slideUp();
    $('#SideBox1').slideUp();
}
// Add New Course
function addCourse() {
    /*  alert($("#courseID").val() + $("#courseName").val() + $("#courseFee").val() + $("#duration").val()); */
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "courseID": $("#courseID").val(),
        "courseName": $("#courseName").val(),
        "courseFee": $("#courseFee").val(),
        "courseDuration": $("#duration").val(),
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:3000/Course", requestOptions)

    $("#courseID").val("");
    $("#courseName").val("");
    $("#courseFee").val("");
    $("#duration").val("");
    showData();
};



// Course Details Display Function
function showData() {

    var settings = {
        "url": "http://localhost:3000/Course/",
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {


        if ((response.length) > 0) {
            var html = "";
            document.getElementById('tblBody').innerHTML = "";
            for (let i = 0; i < response.length; i++) {
                html += "<tr><td>" + response[i].id + "</td><td>" + response[i].courseID + "</td><td>" + response[i].courseName +
                    "</td><td>" + response[i].courseFee + "</td><td>" + response[i].courseDuration +
                    "</td></tr > ";

            }
            document.getElementById('tblBody').innerHTML += html;
        };
    });
};

// Show Edit Data
function showEditData() {

    var settings = {
        "url": "http://localhost:3000/Course/" + $("#slIDEdit").val(),
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
        $("#EditID").val(response.courseID);
        $("#EditName").val(response.courseName);
        $("#EditFee").val(response.courseFee);
        $("#Editduration").val(response.courseDuration);
    });

}

function EditData() {
    var settings = {
        "url": "http://localhost:3000/Course/" + $("#slIDEdit").val(),
        "method": "PUT",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "courseID": $("#EditID").val(),
            "courseName": $("#EditName").val(),
            "courseFee": $("#EditFee").val(),
            "courseDuration": $("#Editduration").val(),
            "id": $("#slIDEdit").val()
        }),
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    $("#EditID").val("");
    $("#EditName").val("");
    $("#EditFee").val("");
    $("#Editduration").val("");
    showData();
}


function showDeleteData() {

    var settings = {
        "url": "http://localhost:3000/Course/" + $("#slIDDelete").val(),
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
        $("#DeleteID").val(response.courseID);
        $("#DeleteName").val(response.courseName);
        $("#DeleteFee").val(response.courseFee);
        $("#Deleteduration").val(response.courseDuration);
    });

}

function DeleteCourse() {
    var settings = {
        "url": "http://localhost:3000/Course/" + $("#slIDDelete").val(),
        "method": "DELETE",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    $("#DeleteID").val("");
    $("#DeleteName").val("");
    $("#DeleteFee").val("");
    $("#Deleteduration").val("");
    showData();
}