/* Copyright 2014 Reid Netterville III */

function makeTable(x) {
  var xtbl = document.createElement("TABLE");
  xtbl.setAttribute("id", x);
  document.getElementById("upper").appendChild(xtbl);
}

function makeRow(x) {
  var rx = document.createElement("TR");
  rx.setAttribute("id", x);
  document.getElementById("tbl00").appendChild(rx);

    var cL00 = document.createElement("TD");
    var nd00 = document.createTextNode("");
    cL00.appendChild(nd00);
    document.getElementById(x).appendChild(cL00);

    var cL01 = document.createElement("TD");
    var nd01 = document.createTextNode("");
    cL01.appendChild(nd01);
    document.getElementById(x).appendChild(cL01);

    var cL02 = document.createElement("TD");
    var nd02 = document.createTextNode("");
    cL02.appendChild(nd02);
    document.getElementById(x).appendChild(cL02);

    var cL03 = document.createElement("TD");
    var nd03 = document.createTextNode("");
    cL03.appendChild(nd03);
    document.getElementById(x).appendChild(cL03);

    var cL04 = document.createElement("TD");
    var nd04 = document.createTextNode("");
    cL04.appendChild(nd04);
    document.getElementById(x).appendChild(cL04);

    var cL05 = document.createElement("TD");
    var nd05 = document.createTextNode("");
    cL05.appendChild(nd05);
    document.getElementById(x).appendChild(cL05);

    var cL06 = document.createElement("TD");
    var nd06 = document.createTextNode("");
    cL06.appendChild(nd06);
    document.getElementById(x).appendChild(cL06);

    var cL07 = document.createElement("TD");
    var nd07 = document.createTextNode("");
    cL07.appendChild(nd07);
    document.getElementById(x).appendChild(cL07);

    var cL08 = document.createElement("TD");
    var nd08 = document.createTextNode("");
    cL08.appendChild(nd08);
    document.getElementById(x).appendChild(cL08);

    var cL09 = document.createElement("TD");
    var nd09 = document.createTextNode("");
    cL09.appendChild(nd09);
    document.getElementById(x).appendChild(cL09);

    var cL10 = document.createElement("TD");
    var nd10 = document.createTextNode("");
    cL10.appendChild(nd10);
    document.getElementById(x).appendChild(cL10);

    var cL11 = document.createElement("TD");
    var nd11 = document.createTextNode("");
    cL11.appendChild(nd11);
    document.getElementById(x).appendChild(cL11);

    var cL12 = document.createElement("TD");
    var nd12 = document.createTextNode("");
    cL12.appendChild(nd12);
    document.getElementById(x).appendChild(cL12);
}

function viewScale(o) {

var arr_n4 = (o.slice(25,60).concat(o.slice(0,25)).split(" ")),
    arr_n1 = (o.slice(0, 60).concat(o.slice(0, 0)).split(" ")),
    arr_n5 = (o.slice(35,60).concat(o.slice(0,35)).split(" ")),
    arr_n2 = (o.slice(10,60).concat(o.slice(0,10)).split(" ")),
    arr_n6 = (o.slice(45,60).concat(o.slice(0,45)).split(" ")),
    arr_n3 = (o.slice(20,60).concat(o.slice(0,20)).split(" ")),
    arr_n7 = (o.slice(55,60).concat(o.slice(0,55)).split(" ")),
    arr_j5 = (o.slice(30,60).concat(o.slice(0,30)).split(" ")),
    arr_j2 = (o.slice(5, 60).concat(o.slice(0, 5)).split(" ")),
    arr_j6 = (o.slice(40,60).concat(o.slice(0,40)).split(" ")),
    arr_j3 = (o.slice(15,60).concat(o.slice(0,15)).split(" ")),
    arr_j7 = (o.slice(50,60).concat(o.slice(0,50)).split(" "));

var z = arr_n1;

function rw00() {
  var x = document.getElementById("tbl00").rows[0].cells;
  x[ 0].innerHTML = z[ 5];
  x[ 1].innerHTML = z[ 6];
  x[ 2].innerHTML = z[ 7];
  x[ 3].innerHTML = z[ 8];
  x[ 4].innerHTML = z[ 9];
  x[ 5].innerHTML = z[10];
  x[ 6].innerHTML = z[11];
  x[ 7].innerHTML = z[ 0];
  x[ 8].innerHTML = z[ 1];
  x[ 9].innerHTML = z[ 2];
  x[10].innerHTML = z[ 3];
  x[11].innerHTML = z[ 4];
  x[12].innerHTML = z[ 5];
}

function rw01() {
  var x = document.getElementById("tbl00").rows[1].cells;
  x[ 0].innerHTML = z[ 0];
  x[ 1].innerHTML = z[ 1];
  x[ 2].innerHTML = z[ 2];
  x[ 3].innerHTML = z[ 3];
  x[ 4].innerHTML = z[ 4];
  x[ 5].innerHTML = z[ 5];
  x[ 6].innerHTML = z[ 6];
  x[ 7].innerHTML = z[ 7];
  x[ 8].innerHTML = z[ 8];
  x[ 9].innerHTML = z[ 9];
  x[10].innerHTML = z[10];
  x[11].innerHTML = z[11];
  x[12].innerHTML = z[ 0];
}

function rw02() {
  var x = document.getElementById("tbl00").rows[2].cells;
  x[ 0].innerHTML = z[ 7];
  x[ 1].innerHTML = z[ 8];
  x[ 2].innerHTML = z[ 9];
  x[ 3].innerHTML = z[10];
  x[ 4].innerHTML = z[11];
  x[ 5].innerHTML = z[ 0];
  x[ 6].innerHTML = z[ 1];
  x[ 7].innerHTML = z[ 2];
  x[ 8].innerHTML = z[ 3];
  x[ 9].innerHTML = z[ 4];
  x[10].innerHTML = z[ 5];
  x[11].innerHTML = z[ 6];
  x[12].innerHTML = z[ 7];
}

function rw03() {
  var x = document.getElementById("tbl00").rows[3].cells;
  x[ 0].innerHTML = z[ 2];
  x[ 1].innerHTML = z[ 3];
  x[ 2].innerHTML = z[ 4];
  x[ 3].innerHTML = z[ 5];
  x[ 4].innerHTML = z[ 6];
  x[ 5].innerHTML = z[ 7];
  x[ 6].innerHTML = z[ 8];
  x[ 7].innerHTML = z[ 9];
  x[ 8].innerHTML = z[10];
  x[ 9].innerHTML = z[11];
  x[10].innerHTML = z[ 0];
  x[11].innerHTML = z[ 1];
  x[12].innerHTML = z[ 2];
}

function rw04() {
  var x = document.getElementById("tbl00").rows[4].cells;
  x[ 0].innerHTML = z[ 9];
  x[ 1].innerHTML = z[10];
  x[ 2].innerHTML = z[11];
  x[ 3].innerHTML = z[ 0];
  x[ 4].innerHTML = z[ 1];
  x[ 5].innerHTML = z[ 2];
  x[ 6].innerHTML = z[ 3];
  x[ 7].innerHTML = z[ 4];
  x[ 8].innerHTML = z[ 5];
  x[ 9].innerHTML = z[ 6];
  x[10].innerHTML = z[ 7];
  x[11].innerHTML = z[ 8];
  x[12].innerHTML = z[ 9];
}

function rw05() {
  var x = document.getElementById("tbl00").rows[5].cells;
  x[ 0].innerHTML = z[ 4];
  x[ 1].innerHTML = z[ 5];
  x[ 2].innerHTML = z[ 6];
  x[ 3].innerHTML = z[ 7];
  x[ 4].innerHTML = z[ 8];
  x[ 5].innerHTML = z[ 9];
  x[ 6].innerHTML = z[10];
  x[ 7].innerHTML = z[11];
  x[ 8].innerHTML = z[ 0];
  x[ 9].innerHTML = z[ 1];
  x[10].innerHTML = z[ 2];
  x[11].innerHTML = z[ 3];
  x[12].innerHTML = z[ 4];
}

function rw06() {
  var x = document.getElementById("tbl00").rows[6].cells;
  x[ 0].innerHTML = z[11];
  x[ 1].innerHTML = z[ 0];
  x[ 2].innerHTML = z[ 1];
  x[ 3].innerHTML = z[ 2];
  x[ 4].innerHTML = z[ 3];
  x[ 5].innerHTML = z[ 4];
  x[ 6].innerHTML = z[ 5];
  x[ 7].innerHTML = z[ 6];
  x[ 8].innerHTML = z[ 7];
  x[ 9].innerHTML = z[ 8];
  x[10].innerHTML = z[ 9];
  x[11].innerHTML = z[10];
  x[12].innerHTML = z[11];
}

function rplc(rw) {
    var rx = document.getElementById(rw).innerHTML; 
    var tt = rx.replace(/____/g,"&#x95;");
    document.getElementById(rw).innerHTML = tt;
}

  rw00();
  rw01();
  rw02();
  rw03();
  rw04();
  rw05();
  rw06();

  rplc("rw00");
  rplc("rw01");
  rplc("rw02");
  rplc("rw03");
  rplc("rw04");
  rplc("rw05");
  rplc("rw06");

}

function genesis() {
  makeTable("tbl00");
  makeRow("rw00");
  makeRow("rw01");
  makeRow("rw02");
  makeRow("rw03");
  makeRow("rw04");
  makeRow("rw05");
  makeRow("rw06");
  viewScale(n0);
}

function tbl(x) {
  viewScale(x);
}

