function myFun1() {
    document.getElementById("add").style.display = "none";
};

function myFun2() {
    document.getElementById("add").style.display = "block";
};

function myFun3() {
    document.getElementById("edit").style.display = "none";
};

function myFun4() {
    document.getElementById("edit").style.display = "block";
};

function myFun5() {
    document.getElementById("delete").style.display = "none";
};

function myFun6() {
    document.getElementById("delete").style.display = "block";
};


let student = [];
let fname = [];
let course = [];

function showLi1() {
    let txt1 = "";
    let txt2 = "";
    let txt3 = "";
    let txt4 = "";

    for (let i = 0; i < student.length; i++) {
        txt1 += (i + 1) + "<br>";
        txt2 += student[i] + "<br>";
        txt3 += fname[i] + "<br>";
        txt4 += course[i] + "<br>";

    }
    document.getElementById("display1").innerHTML = txt1;
    document.getElementById("display2").innerHTML = txt2;
    document.getElementById("display3").innerHTML = txt3;
    document.getElementById("display4").innerHTML = txt4;
};



function Add() {

    student.push(document.getElementById("demo2").value);
    fname.push(document.getElementById("demo3").value);
    course.push(document.getElementById("demo4").value);
    showLi1();

};


function Show1() {
    let x = parseInt((document.getElementById("show1").value) - 1);

    document.getElementById("show2").value = student[x];
    document.getElementById("show3").value = fname[x];
    document.getElementById("show4").value = course[x];
};



function Edit() {
    let slno = document.getElementById("show1").value;
    let x = document.getElementById("show2").value;
    let y = document.getElementById("show3").value;
    let z = document.getElementById("show4").value;

    student[slno - 1] = x;
    fname[slno - 1] = y;
    course[slno - 1] = z;
    showLi1();
};



function Show2() {
    let y = document.getElementById("delete1").value-1;

    document.getElementById("delete2").value = student[y];
    document.getElementById("delete3").value = fname[y];
    document.getElementById("delete4").value = course[y];
};



function Del() {
    let a = document.getElementById("delete1").value - 1;
    student.splice(a,1);
    fname.splice(a,1);
    course.splice(a,1);
    showLi1();
};