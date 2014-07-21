/*  Copyright 2014 Reid Netterville III  */

var vv = "\u2591\u2591\u2591\u2591 ",
    qq = "\u2592\u2592\u2592\u2592 "

var blks = {
     j2:qq+qq+vv+vv+qq+qq+vv+qq+vv+qq+vv+qq,
     j3:qq+vv+qq+qq+vv+qq+vv+qq+vv+qq+vv+qq,
     j5:qq+vv+qq+vv+qq+qq+qq+vv+vv+qq+vv+qq,
     j6:qq+vv+qq+vv+qq+qq+vv+qq+qq+vv+vv+qq,
     k1:vv+qq+qq+vv+qq+qq+vv+qq+vv+qq+vv+qq,
     k2:qq+vv+vv+qq+qq+qq+vv+qq+vv+qq+vv+qq,
     k5:qq+vv+qq+vv+qq+qq+vv+vv+qq+qq+vv+qq,
     k6:qq+vv+qq+vv+qq+qq+vv+qq+vv+vv+qq+qq,
     n0:qq+vv+qq+vv+qq+qq+vv+qq+vv+qq+vv+qq,
    j17:vv+vv+qq+vv+qq+qq+vv+qq+vv+qq+qq+qq,
    j23:qq+qq+vv+qq+vv+qq+vv+qq+vv+qq+vv+qq,
    j25:qq+qq+vv+vv+qq+qq+qq+vv+vv+qq+vv+qq,
    j26:qq+qq+vv+vv+qq+qq+vv+qq+qq+vv+vv+qq,
    j36:qq+vv+qq+qq+vv+qq+vv+qq+qq+vv+vv+qq,
    j56:qq+vv+qq+vv+qq+qq+qq+vv+qq+vv+vv+qq,
    k12:vv+qq+vv+qq+qq+qq+vv+qq+vv+qq+vv+qq,
    k15:vv+qq+qq+vv+qq+qq+vv+vv+qq+qq+vv+qq,
    k25:qq+vv+vv+qq+qq+qq+vv+vv+qq+qq+vv+qq,
    k26:qq+vv+vv+qq+qq+qq+vv+qq+vv+vv+qq+qq,
    k34:qq+vv+qq+vv+vv+qq+qq+qq+vv+qq+vv+qq,
    k56:qq+vv+qq+vv+qq+qq+vv+vv+qq+vv+qq+qq,
   j236:qq+qq+vv+qq+vv+qq+vv+qq+qq+vv+vv+qq,
   j256:qq+qq+vv+vv+qq+qq+qq+vv+qq+vv+vv+qq,
   j2k5:qq+qq+vv+vv+qq+qq+vv+vv+qq+qq+vv+qq,
   j2k6:qq+qq+vv+vv+qq+qq+vv+qq+vv+vv+qq+qq,
   j2y3:qq+qq+qq+vv+vv+qq+vv+qq+vv+qq+vv+qq,
   j3k5:qq+vv+qq+qq+vv+qq+vv+vv+qq+qq+vv+qq,
   j3k6:qq+vv+qq+qq+vv+qq+vv+qq+vv+vv+qq+qq,
   j5y6:qq+vv+qq+vv+qq+qq+qq+qq+vv+vv+vv+qq,
   k125:vv+qq+vv+qq+qq+qq+vv+vv+qq+qq+vv+qq,
   k1j5:vv+qq+qq+vv+qq+qq+qq+vv+vv+qq+vv+qq,
   k1j6:vv+qq+qq+vv+qq+qq+vv+qq+qq+vv+vv+qq,
   k256:qq+vv+vv+qq+qq+qq+vv+vv+qq+vv+qq+qq,
   k2j5:qq+vv+vv+qq+qq+qq+qq+vv+vv+qq+vv+qq,
   k2j6:qq+vv+vv+qq+qq+qq+vv+qq+qq+vv+vv+qq,
   k2x1:vv+vv+qq+qq+qq+qq+vv+qq+vv+qq+vv+qq,
   k6x5:qq+vv+qq+vv+qq+qq+vv+vv+vv+qq+qq+qq,
   n167:qq+vv+vv+qq+vv+qq+qq+vv+qq+qq+vv+qq,
   n345:vv+qq+vv+vv+qq+qq+vv+qq+qq+vv+qq+qq,
   n5y2:qq+vv+vv+qq+qq+vv+vv+qq+qq+vv+qq+qq,
   n6x2:qq+qq+vv+vv+qq+qq+qq+vv+qq+qq+vv+vv,
  j17k2:vv+vv+vv+qq+qq+qq+vv+qq+vv+qq+qq+qq,
  j17y2:qq+vv+vv+vv+qq+qq+vv+qq+vv+qq+qq+qq,
  j23k6:qq+qq+vv+qq+vv+qq+vv+qq+vv+vv+qq+qq,
  j25y6:qq+qq+vv+vv+qq+qq+qq+qq+vv+vv+vv+qq,
  j26y3:qq+qq+qq+vv+vv+qq+vv+qq+qq+vv+vv+qq,
  j2k34:qq+qq+vv+vv+vv+qq+qq+qq+vv+qq+vv+qq,
  j2k56:qq+qq+vv+vv+qq+qq+vv+vv+qq+vv+qq+qq,
  j56y7:qq+vv+qq+vv+qq+qq+qq+vv+qq+qq+vv+vv,
  k12j5:vv+qq+vv+qq+qq+qq+qq+vv+vv+qq+vv+qq,
  k25x1:vv+vv+qq+qq+qq+qq+vv+vv+qq+qq+vv+qq,
  k26x5:qq+vv+vv+qq+qq+qq+vv+vv+vv+qq+qq+qq,
  k2j56:qq+vv+vv+qq+qq+qq+qq+vv+qq+vv+vv+qq,
  k34x2:qq+vv+vv+vv+qq+qq+qq+qq+vv+qq+vv+qq,
  k56x4:qq+vv+qq+vv+qq+vv+vv+qq+qq+vv+qq+qq,
  n25x6:qq+qq+qq+vv+vv+qq+qq+qq+vv+vv+vv+qq,
  n26y5:vv+vv+qq+qq+qq+qq+vv+vv+vv+qq+qq+qq,
  n45y2:qq+vv+vv+qq+vv+qq+vv+qq+qq+vv+qq+qq,
  n67x2:vv+qq+vv+vv+qq+qq+qq+vv+qq+qq+vv+qq,
 j136y7:vv+vv+qq+qq+vv+qq+vv+qq+qq+qq+vv+qq,
 j167y2:qq+vv+vv+vv+qq+qq+vv+qq+qq+vv+qq+qq,
 j246y3:qq+qq+qq+vv+qq+vv+vv+qq+qq+vv+vv+qq,
 j26y34:qq+qq+qq+qq+vv+vv+vv+qq+qq+vv+vv+qq,
 j2k6x5:qq+qq+vv+vv+qq+qq+vv+vv+vv+qq+qq+qq,
 j2k6y3:qq+qq+qq+vv+vv+qq+vv+qq+vv+vv+qq+qq,
 j346y5:qq+vv+qq+qq+qq+qq+vv+vv+qq+vv+vv+qq,
 j3k5x4:qq+vv+qq+qq+vv+vv+vv+qq+qq+qq+vv+qq,
 k135x4:vv+qq+qq+vv+vv+qq+vv+qq+qq+qq+vv+qq,
 k157x6:qq+qq+qq+vv+qq+qq+vv+vv+qq+vv+vv+qq,
 k1j6y7:vv+qq+qq+vv+qq+qq+vv+qq+qq+qq+vv+vv,
 k257x1:qq+vv+qq+qq+qq+qq+vv+vv+qq+qq+vv+vv,
 k25x17:vv+qq+qq+qq+qq+qq+vv+vv+qq+qq+vv+vv,
 k2j5x1:vv+vv+qq+qq+qq+qq+qq+vv+vv+qq+vv+qq,
 k2j5y6:qq+vv+vv+qq+qq+qq+qq+qq+vv+vv+vv+qq,
 k345x2:qq+vv+vv+vv+qq+qq+qq+vv+qq+qq+vv+qq,
 n167x4:qq+vv+vv+qq+vv+qq+vv+qq+qq+qq+vv+qq,
 n345y7:vv+qq+vv+vv+qq+qq+vv+qq+qq+qq+vv+qq,
j2k56x4:qq+qq+vv+vv+qq+vv+vv+qq+qq+vv+qq+qq,
k2j56y7:qq+vv+vv+qq+qq+qq+qq+vv+qq+qq+vv+vv}

var clave = {
     j2:"HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ____ AgUr ____ FePu ",
     j3:"HgSn ____ SnHg UrFe ____ PbAg ____ AuAu ____ AgPb ____ FeUr ",
     j5:"PbCu ____ AuSn ____ AgHg TiFe FeTi ____ ____ SnAu ____ CuPb ",
     j6:"HgAu ____ SnPb ____ CuUr PbSn ____ AuHg NpFe ____ ____ FeNp ",
     k1:"____ FeUr HgSn ____ SnHg UrFe ____ PbAg ____ AuAu ____ AgPb ",
     k2:"NpCu ____ ____ FePu HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ",
     k5:"UrCu ____ PbSn ____ AuHg NpFe ____ ____ FeNp HgAu ____ SnPb ",
     k6:"HgAg ____ SnAu ____ CuPb PbCu ____ AuSn ____ ____ TiFe FeTi ",
     n0:"HgCu ____ SnSn ____ CuHg PbFe ____ AuAg ____ AgAu ____ FePb ",
    j17:"____ ____ SnAu ____ CuPb PbCu ____ AuSn ____ AgHg TiFe FeTi ",
    j23:"HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ____ AgUr ____ FePu ",
    j25:"FeCu HgMn ____ ____ MnHg CuFe PbTi ____ ____ NpAu ____ TiPb ",
    j26:"HgHg PuFe ____ ____ CuNp PbAu ____ AuPb NpCu ____ ____ FePu ",
    j36:"HgAu ____ SnPb UrCu ____ PbSn ____ AuHg NpFe ____ ____ FeNp ",
    j56:"UrCu ____ PbSn ____ AuHg NpFe AgTi ____ FeNp ____ ____ SnPb ",
    k12:"____ AgUr ____ FePu HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ",
    k15:"____ CuUr PbSn ____ AuHg NpFe ____ ____ FeNp HgAu ____ SnPb ",
    k25:"NpCu ____ ____ FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ",
    k26:"HgMn ____ ____ MnHg CuFe PbTi ____ AuNp ____ ____ TiPb FeCu ",
    k34:"PbCu ____ AuSn ____ ____ TiFe FeTi HgAg ____ SnAu ____ CuPb ",
    k56:"HgAu ____ SnPb ____ CuUr PbSn ____ ____ NpFe ____ TiAg FeNp ",
   j236:"HgHg PuFe ____ UrAg ____ PbAu ____ AuPb NpCu ____ ____ FePu ",
   j256:"FeCu HgMn ____ ____ MnHg CuFe PbTi ____ AuNp ____ ____ TiPb ",
   j2k5:"FeCu HgMn ____ ____ MnHg CuFe ____ ____ AuNp NpAu ____ TiPb ",
   j2k6:"HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ____ ____ TiSn FePu ",
   j2y3:"HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ____ AgUr ____ FePu ",
   j3k5:"NpCu ____ TiSn FePu ____ PuFe ____ ____ CuNp PbAu ____ AuPb ",
   j3k6:"HgTi ____ SnNp UrAu ____ PbPb ____ AuUr ____ ____ TiHg FeFe ",
   j5y6:"PbCu ____ AuSn ____ AgHg TiFe FeTi HgAg ____ ____ ____ CuPb ",
   k125:"____ AgUr ____ FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ",
   k1j5:"____ AuUr NpSn ____ TiHg FeFe HgTi ____ ____ UrAu ____ PbPb ",
   k1j6:"____ PuFe SnTi ____ CuNp PbAu ____ AuPb NpCu ____ ____ FePu ",
   k256:"HgMn ____ ____ MnHg CuFe PbTi ____ ____ NpAu ____ TiPb FeCu ",
   k2j5:"NpCu ____ ____ FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ",
   k2j6:"HgMn ____ ____ MnHg CuFe PbTi ____ AuNp NpAu ____ ____ FeCu ",
   k2x1:"____ ____ TiSn FePu HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ",
   k6x5:"HgAg ____ SnAu ____ CuPb PbCu ____ ____ ____ AgHg TiFe FeTi ",
   n167:"NpCu ____ ____ FePu ____ PuFe SnTi ____ CuNp PbAu ____ AuPb ",
   n345:"____ PuFe ____ ____ CuNp PbAu ____ AuPb NpCu ____ TiSn FePu ",
   n5y2:"HgMn ____ ____ MnHg CuFe ____ ____ AuNp NpAu ____ TiPb FeCu ",
   n6x2:"FeCu HgMn ____ ____ MnHg CuFe PbTi ____ AuNp NpAu ____ ____ ",
  j17k2:"____ ____ ____ MnFe CuTi PbAg ____ AuAu ____ AgPb TiCu FeMn ",
  j17y2:"HgAg ____ ____ ____ CuPb PbCu ____ AuSn ____ AgHg TiFe FeTi ",
  j23k6:"HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ____ ____ TiSn FePu ",
  j25y6:"TiCu FeMn ____ ____ SnHg MnFe CuTi PbAg ____ ____ ____ AgPb ",
  j26y3:"HgHg PuFe SnTi ____ ____ PbAu ____ AuPb NpCu ____ ____ FePu ",
  j2k34:"TiCu FeMn ____ ____ ____ MnFe CuTi PbAg ____ AuAu ____ AgPb ",
  j2k56:"HgHg PuFe ____ ____ CuNp PbAu ____ ____ NpCu ____ TiSn FePu ",
  j56y7:"UrCu ____ PbSn ____ AuHg NpFe AgTi ____ FeNp HgAu ____ ____ ",
  k12j5:"____ AgUr ____ FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ",
  k25x1:"____ ____ TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ",
  k26x5:"HgSn ____ ____ MnFe CuTi PbAg ____ ____ ____ AgPb TiCu FeMn ",
  k2j56:"NpCu ____ ____ FePu HgHg PuFe SnTi ____ CuNp ____ ____ AuPb ",
  k34x2:"PbCu ____ ____ ____ AgHg TiFe FeTi HgAg ____ SnAu ____ CuPb ",
  k56x4:"HgAu ____ SnPb ____ CuUr ____ ____ AuHg NpFe ____ TiAg FeNp ",
  n25x6:"TiCu FeMn HgSn ____ ____ MnFe CuTi PbAg ____ ____ ____ AgPb ",
  n26y5:"____ ____ SnHg MnFe CuTi PbAg ____ ____ ____ AgPb TiCu FeMn ",
  n45y2:"HgTi ____ ____ UrAu ____ PbPb ____ AuUr NpSn ____ TiHg FeFe ",
  n67x2:"____ AuUr ____ ____ TiHg FeFe HgTi ____ SnNp UrAu ____ PbPb ",
 j136y7:"____ ____ SnPb UrCu ____ PbSn ____ AuHg NpFe AgTi ____ FeNp ",
 j167y2:"HgAu ____ ____ ____ CuUr PbSn ____ AuHg NpFe ____ TiAg FeNp ",
 j246y3:"HgHg PuFe SnTi ____ CuNp ____ ____ AuPb NpCu ____ ____ FePu ",
 j26y34:"HgHg PuFe SnTi UrAg ____ ____ ____ AuPb NpCu ____ ____ FePu ",
 j2k6x5:"HgHg PuFe ____ ____ CuNp PbAu ____ ____ ____ AgUr TiSn FePu ",
 j2k6y3:"HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ____ ____ TiSn FePu ",
 j346y5:"NpCu ____ TiSn FePu HgHg PuFe ____ ____ CuNp ____ ____ AuPb ",
 j3k5x4:"HgAu ____ SnPb UrCu ____ ____ ____ AuHg NpFe AgTi ____ FeNp ",
 k135x4:"____ CuUr PbSn ____ ____ NpFe ____ TiAg FeNp HgAu ____ SnPb ",
 k157x6:"HgHg PuFe SnTi ____ CuNp PbAu ____ ____ NpCu ____ ____ FePu ",
 k1j6y7:"____ CuUr PbSn ____ AuHg NpFe ____ TiAg FeNp HgAu ____ ____ ",
 k257x1:"NpCu ____ TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ ____ ",
 k25x17:"____ AgUr TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ ____ ",
 k2j5x1:"____ ____ TiSn FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ",
 k2j5y6:"NpCu ____ ____ FePu HgHg PuFe SnTi UrAg ____ ____ ____ AuPb ",
 k345x2:"UrCu ____ ____ ____ AuHg NpFe AgTi ____ FeNp HgAu ____ SnPb ",
 n167x4:"HgAu ____ ____ UrCu ____ PbSn ____ AuHg NpFe AgTi ____ FeNp ",
 n345y7:"____ CuUr ____ ____ AuHg NpFe ____ TiAg FeNp HgAu ____ SnPb ",
j2k56x4:"HgHg PuFe ____ ____ CuNp ____ ____ AuPb NpCu ____ TiSn FePu ",
k2j56y7:"NpCu ____ ____ FePu HgHg PuFe SnTi ____ CuNp PbAu ____ ____ "}

var t_eadgbe = function( t, x ) {
document.getElementById("sT").innerHTML=t
document.getElementById("s0").innerHTML=x.slice(20,61).concat(x.slice(0,20))
document.getElementById("s1").innerHTML=x.slice(55,61).concat(x.slice(0,55))
document.getElementById("s2").innerHTML=x.slice(35,61).concat(x.slice(0,35))
document.getElementById("s3").innerHTML=x.slice(10,61).concat(x.slice(0,10))
document.getElementById("s4").innerHTML=x.slice(45,61).concat(x.slice(0,45))
document.getElementById("s5").innerHTML=x.slice(20,61).concat(x.slice(0,20))
}
var t_fkbjdn = function( t, x ) {
document.getElementById("sT").innerHTML=t
document.getElementById("s0").innerHTML=x.slice(10,61).concat(x.slice(0,10))
document.getElementById("s1").innerHTML=x.slice(50,61).concat(x.slice(0,50))
document.getElementById("s2").innerHTML=x.slice(30,61).concat(x.slice(0,30))
document.getElementById("s3").innerHTML=x.slice(10,61).concat(x.slice(0,10))
document.getElementById("s4").innerHTML=x.slice(50,61).concat(x.slice(0,50))
document.getElementById("s5").innerHTML=x.slice(30,61).concat(x.slice(0,30))
}
var t_eadgcf = function( t, x ) {
document.getElementById("sT").innerHTML=t
document.getElementById("s0").innerHTML=x.slice(25,61).concat(x.slice(0,25))
document.getElementById("s1").innerHTML=x.slice( 0,61).concat(x.slice(0, 0))
document.getElementById("s2").innerHTML=x.slice(35,61).concat(x.slice(0,35))
document.getElementById("s3").innerHTML=x.slice(10,61).concat(x.slice(0,10))
document.getElementById("s4").innerHTML=x.slice(45,61).concat(x.slice(0,45))
document.getElementById("s5").innerHTML=x.slice(20,61).concat(x.slice(0,20))
}
var t_bfbfbf = function( t, x ) {
document.getElementById("sT").innerHTML=t
document.getElementById("s0").innerHTML=x.slice(25,61).concat(x.slice(0,25))
document.getElementById("s1").innerHTML=x.slice(55,61).concat(x.slice(0,55))
document.getElementById("s2").innerHTML=x.slice(25,61).concat(x.slice(0,25))
document.getElementById("s3").innerHTML=x.slice(55,61).concat(x.slice(0,55))
document.getElementById("s4").innerHTML=x.slice(25,61).concat(x.slice(0,25))
document.getElementById("s5").innerHTML=x.slice(55,61).concat(x.slice(0,55))
}
var t_fcgdae = function( t, x ) {
document.getElementById("sT").innerHTML=t
document.getElementById("s0").innerHTML=x.slice(20,61).concat(x.slice(0,20))
document.getElementById("s1").innerHTML=x.slice(45,61).concat(x.slice(0,45))
document.getElementById("s2").innerHTML=x.slice(10,61).concat(x.slice(0,10))
document.getElementById("s3").innerHTML=x.slice(35,61).concat(x.slice(0,35))
document.getElementById("s4").innerHTML=x.slice( 0,61).concat(x.slice(0, 0))
document.getElementById("s5").innerHTML=x.slice(25,61).concat(x.slice(0,25))
}
function sGj(o){document.writeln(o.slice(30,61).concat(o.slice(0,30))) }
function sDj(o){document.writeln(o.slice( 5,61).concat(o.slice(0, 5))) }
function sAj(o){document.writeln(o.slice(40,61).concat(o.slice(0,40))) }
function sEj(o){document.writeln(o.slice(15,61).concat(o.slice(0,15))) }
function sBj(o){document.writeln(o.slice(50,61).concat(o.slice(0,50))) }
function sFn(o){document.writeln(o.slice(25,61).concat(o.slice(0,25))) }
function sCn(o){document.writeln(o.slice( 0,61).concat(o.slice(0, 0))) }
function sGn(o){document.writeln(o.slice(35,61).concat(o.slice(0,35))) }
function sDn(o){document.writeln(o.slice(10,61).concat(o.slice(0,10))) }
function sAn(o){document.writeln(o.slice(45,61).concat(o.slice(0,45))) }
function sEn(o){document.writeln(o.slice(20,61).concat(o.slice(0,20))) }
function sBn(o){document.writeln(o.slice(55,61).concat(o.slice(0,55))) }
function sfk(o){document.writeln(o.slice(30,61).concat(o.slice(0,30))) }
function sCk(o){document.writeln(o.slice( 5,61).concat(o.slice(0, 5))) }
function sGk(o){document.writeln(o.slice(40,61).concat(o.slice(0,40))) }
function sDk(o){document.writeln(o.slice(15,61).concat(o.slice(0,15))) }
function sAk(o){document.writeln(o.slice(50,61).concat(o.slice(0,50))) }

function tk4(o) { return (o.slice(30,61).concat(o.slice(0,30))) }
function tn7(o) { return (o.slice( 5,61).concat(o.slice(0, 5))) }
function tn3(o) { return (o.slice(40,61).concat(o.slice(0,40))) }
function tn6(o) { return (o.slice(15,61).concat(o.slice(0,15))) }
function tn2(o) { return (o.slice(50,61).concat(o.slice(0,50))) }
function tn5(o) { return (o.slice(25,61).concat(o.slice(0,25))) }
function tn1(o) { return (o.slice( 0,61).concat(o.slice(0, 0))) }
function tn4(o) { return (o.slice(35,61).concat(o.slice(0,35))) }
function tj7(o) { return (o.slice(10,61).concat(o.slice(0,10))) }
function tj3(o) { return (o.slice(45,61).concat(o.slice(0,45))) }
function tj6(o) { return (o.slice(20,61).concat(o.slice(0,20))) }
function tj2(o) { return (o.slice(55,61).concat(o.slice(0,55))) }
function tj5(o) { return (o.slice(30,61).concat(o.slice(0,30))) }

var tune_ = t_eadgcf  // tuning

var trans_ = tn1  // transposition

var typSet_ = blks  // graphics

function j136y7()  { tune_("j136y7",  trans_(typSet_.j136y7))  }
function j167y2()  { tune_("j167y2",  trans_(typSet_.j167y2))  }
function j17k2()   { tune_("j17k2",   trans_(typSet_.j17k2))   }
function j17()     { tune_("j17",     trans_(typSet_.j17))     }
function j17y2()   { tune_("j17y2",   trans_(typSet_.j17y2))   }
function j236()    { tune_("j236",    trans_(typSet_.j236))    }
function j23k6()   { tune_("j23k6",   trans_(typSet_.j23k6))   }
function j23()     { tune_("j23",     trans_(typSet_.j23))     }
function j246y3()  { tune_("j246y3",  trans_(typSet_.j246y3))  }
function j256()    { tune_("j256",    trans_(typSet_.j256))    }
function j25()     { tune_("j25",     trans_(typSet_.j25))     }
function j25y6()   { tune_("j25y6",   trans_(typSet_.j25y6))   }
function j26()     { tune_("j26",     trans_(typSet_.j26))     }
function j26y34()  { tune_("j26y34",  trans_(typSet_.j26y34))  }
function j26y3()   { tune_("j26y3",   trans_(typSet_.j26y3))   }
function j2k34()   { tune_("j2k34",   trans_(typSet_.j2k34))   }
function j2k56()   { tune_("j2k56",   trans_(typSet_.j2k56))   }
function j2k56x4() { tune_("j2k56x4", trans_(typSet_.j2k56x4)) }
function j2k5()    { tune_("j2k5",    trans_(typSet_.j2k5))    }
function j2k6()    { tune_("j2k6",    trans_(typSet_.j2k6))    }
function j2k6x5()  { tune_("j2k6x5",  trans_(typSet_.j2k6x5))  }
function j2k6y3()  { tune_("j2k6y3",  trans_(typSet_.j2k6y3))  }
function j2()      { tune_("j2",      trans_(typSet_.j2))      }
function j2y3()    { tune_("j2y3",    trans_(typSet_.j2y3))    }
function j346y5()  { tune_("j346y5",  trans_(typSet_.j346y5))  }
function j36()     { tune_("j36",     trans_(typSet_.j36))     }
function j3k5()    { tune_("j3k5",    trans_(typSet_.j3k5))    }
function j3k5x4()  { tune_("j3k5x4",  trans_(typSet_.j3k5x4))  }
function j3k6()    { tune_("j3k6",    trans_(typSet_.j3k6))    }
function j3()      { tune_("j3",      trans_(typSet_.j3))      }
function j56()     { tune_("j56",     trans_(typSet_.j56))     }
function j56y7()   { tune_("j56y7",   trans_(typSet_.j56y7))   }
function j5()      { tune_("j5",      trans_(typSet_.j5))      }
function j5y6()    { tune_("j5y6",    trans_(typSet_.j5y6))    }
function j6()      { tune_("j6",      trans_(typSet_.j6))      }
function k125()    { tune_("k125",    trans_(typSet_.k125))    }
function k12j5()   { tune_("k12j5",   trans_(typSet_.k12j5))   }
function k12()     { tune_("k12",     trans_(typSet_.k12))     }
function k135x4()  { tune_("k135x4",  trans_(typSet_.k135x4))  }
function k157x6()  { tune_("k157x6",  trans_(typSet_.k157x6))  }
function k15()     { tune_("k15",     trans_(typSet_.k15))     }
function k1j5()    { tune_("k1j5",    trans_(typSet_.k1j5))    }
function k1j6()    { tune_("k1j6",    trans_(typSet_.k1j6))    }
function k1j6y7()  { tune_("k1j6y7",  trans_(typSet_.k1j6y7))  }
function k1()      { tune_("k1",      trans_(typSet_.k1))      }
function k256()    { tune_("k256",    trans_(typSet_.k256))    }
function k257x1()  { tune_("k257x1",  trans_(typSet_.k257x1))  }
function k25()     { tune_("k25",     trans_(typSet_.k25))     }
function k25x17()  { tune_("k25x17",  trans_(typSet_.k25x17))  }
function k25x1()   { tune_("k25x1",   trans_(typSet_.k25x1))   }
function k26()     { tune_("k26",     trans_(typSet_.k26))     }
function k26x5()   { tune_("k26x5",   trans_(typSet_.k26x5))   }
function k2j56()   { tune_("k2j56",   trans_(typSet_.k2j56))   }
function k2j56y7() { tune_("k2j56y7", trans_(typSet_.k2j56y7)) }
function k2j5()    { tune_("k2j5",    trans_(typSet_.k2j5))    }
function k2j5x1()  { tune_("k2j5x1",  trans_(typSet_.k2j5x1))  }
function k2j5y6()  { tune_("k2j5y6",  trans_(typSet_.k2j5y6))  }
function k2j6()    { tune_("k2j6",    trans_(typSet_.k2j6))    }
function k2()      { tune_("k2",      trans_(typSet_.k2))      }
function k2x1()    { tune_("k2x1",    trans_(typSet_.k2x1))    }
function k345x2()  { tune_("k345x2",  trans_(typSet_.k345x2))  }
function k34()     { tune_("k34",     trans_(typSet_.k34))     }
function k34x2()   { tune_("k34x2",   trans_(typSet_.k34x2))   }
function k56()     { tune_("k56",     trans_(typSet_.k56))     }
function k56x4()   { tune_("k56x4",   trans_(typSet_.k56x4))   }
function k5()      { tune_("k5",      trans_(typSet_.k5))      }
function k6()      { tune_("k6",      trans_(typSet_.k6))      }
function k6x5()    { tune_("k6x5",    trans_(typSet_.k6x5))    }
function n0()      { tune_("n0",      trans_(typSet_.n0))      }
function n167()    { tune_("n167",    trans_(typSet_.n167))    }
function n167x4()  { tune_("n167x4",  trans_(typSet_.n167x4))  }
function n25x6()   { tune_("n25x6",   trans_(typSet_.n25x6))   }
function n26y5()   { tune_("n26y5",   trans_(typSet_.n26y5))   }
function n345()    { tune_("n345",    trans_(typSet_.n345))    }
function n345y7()  { tune_("n345y7",  trans_(typSet_.n345y7))  }
function n45y2()   { tune_("n45y2",   trans_(typSet_.n45y2))   }
function n5y2()    { tune_("n5y2",    trans_(typSet_.n5y2))    }
function n67x2()   { tune_("n67x2",   trans_(typSet_.n67x2))   }
function n6x2()    { tune_("n6x2",    trans_(typSet_.n6x2))    }

function srl() { document.write(new Date().getTime()) }

function dsplyTm() {
  var xTm = new Date().getTime()
  document.getElementById("obvTm").innerHTML = xTm
  document.getElementById("revTm").innerHTML = xTm
}

function gtrTag(){
  var s = document.getElementById(q),
      t = s.getElementsByTagName("dt"),
      u = s.getElementsByTagName("dd")
  t[0].innerHTML = q
  u[0].innerHTML = tj6(r)
  u[1].innerHTML = tj2(r)
  u[2].innerHTML = tn4(r)
  u[3].innerHTML = tj7(r)
  u[4].innerHTML = tj3(r)
  u[5].innerHTML = tj6(r)
}

function gtrClass(){
  var s = document.getElementById(q),
      t = s.getElementsByClassName("sttl"),
      u = s.getElementsByClassName("strg")
  t[0].innerHTML = q
  u[0].innerHTML = tj6(r)
  u[1].innerHTML = tj2(r)
  u[2].innerHTML = tn4(r)
  u[3].innerHTML = tj7(r)
  u[4].innerHTML = tj3(r)
  u[5].innerHTML = tj6(r)
}

var o_j136y7 = [
  tn5(typSet_.j136y7),
  tn1(typSet_.j136y7),
  tn4(typSet_.j136y7),
  tj7(typSet_.j136y7),
  tj3(typSet_.j136y7),
  tj6(typSet_.j136y7),
  tj2(typSet_.j136y7),
  tj5(typSet_.j136y7),
  tn7(typSet_.j136y7),
  tn3(typSet_.j136y7),
  tn6(typSet_.j136y7),
  tn2(typSet_.j136y7)]

var o_j167y2 = [
  tn5(typSet_.j167y2),
  tn1(typSet_.j167y2),
  tn4(typSet_.j167y2),
  tj7(typSet_.j167y2),
  tj3(typSet_.j167y2),
  tj6(typSet_.j167y2),
  tj2(typSet_.j167y2),
  tj5(typSet_.j167y2),
  tn7(typSet_.j167y2),
  tn3(typSet_.j167y2),
  tn6(typSet_.j167y2),
  tn2(typSet_.j167y2)]

var o_j17k2 = [
  tn5(typSet_.j17k2),
  tn1(typSet_.j17k2),
  tn4(typSet_.j17k2),
  tj7(typSet_.j17k2),
  tj3(typSet_.j17k2),
  tj6(typSet_.j17k2),
  tj2(typSet_.j17k2),
  tj5(typSet_.j17k2),
  tn7(typSet_.j17k2),
  tn3(typSet_.j17k2),
  tn6(typSet_.j17k2),
  tn2(typSet_.j17k2)]

var o_j17 = [
  tn5(typSet_.j17),
  tn1(typSet_.j17),
  tn4(typSet_.j17),
  tj7(typSet_.j17),
  tj3(typSet_.j17),
  tj6(typSet_.j17),
  tj2(typSet_.j17),
  tj5(typSet_.j17),
  tn7(typSet_.j17),
  tn3(typSet_.j17),
  tn6(typSet_.j17),
  tn2(typSet_.j17)]

var o_j17y2 = [
  tn5(typSet_.j17y2),
  tn1(typSet_.j17y2),
  tn4(typSet_.j17y2),
  tj7(typSet_.j17y2),
  tj3(typSet_.j17y2),
  tj6(typSet_.j17y2),
  tj2(typSet_.j17y2),
  tj5(typSet_.j17y2),
  tn7(typSet_.j17y2),
  tn3(typSet_.j17y2),
  tn6(typSet_.j17y2),
  tn2(typSet_.j17y2)]

var o_j236 = [
  tn5(typSet_.j236),
  tn1(typSet_.j236),
  tn4(typSet_.j236),
  tj7(typSet_.j236),
  tj3(typSet_.j236),
  tj6(typSet_.j236),
  tj2(typSet_.j236),
  tj5(typSet_.j236),
  tn7(typSet_.j236),
  tn3(typSet_.j236),
  tn6(typSet_.j236),
  tn2(typSet_.j236)]

var o_j23k6 = [
  tn5(typSet_.j23k6),
  tn1(typSet_.j23k6),
  tn4(typSet_.j23k6),
  tj7(typSet_.j23k6),
  tj3(typSet_.j23k6),
  tj6(typSet_.j23k6),
  tj2(typSet_.j23k6),
  tj5(typSet_.j23k6),
  tn7(typSet_.j23k6),
  tn3(typSet_.j23k6),
  tn6(typSet_.j23k6),
  tn2(typSet_.j23k6)]

var o_j23 = [
  tn5(typSet_.j23),
  tn1(typSet_.j23),
  tn4(typSet_.j23),
  tj7(typSet_.j23),
  tj3(typSet_.j23),
  tj6(typSet_.j23),
  tj2(typSet_.j23),
  tj5(typSet_.j23),
  tn7(typSet_.j23),
  tn3(typSet_.j23),
  tn6(typSet_.j23),
  tn2(typSet_.j23)]

var o_j246y3 = [
  tn5(typSet_.j246y3),
  tn1(typSet_.j246y3),
  tn4(typSet_.j246y3),
  tj7(typSet_.j246y3),
  tj3(typSet_.j246y3),
  tj6(typSet_.j246y3),
  tj2(typSet_.j246y3),
  tj5(typSet_.j246y3),
  tn7(typSet_.j246y3),
  tn3(typSet_.j246y3),
  tn6(typSet_.j246y3),
  tn2(typSet_.j246y3)]

var o_j256 = [
  tn5(typSet_.j256),
  tn1(typSet_.j256),
  tn4(typSet_.j256),
  tj7(typSet_.j256),
  tj3(typSet_.j256),
  tj6(typSet_.j256),
  tj2(typSet_.j256),
  tj5(typSet_.j256),
  tn7(typSet_.j256),
  tn3(typSet_.j256),
  tn6(typSet_.j256),
  tn2(typSet_.j256)]

var o_j25 = [
  tn5(typSet_.j25),
  tn1(typSet_.j25),
  tn4(typSet_.j25),
  tj7(typSet_.j25),
  tj3(typSet_.j25),
  tj6(typSet_.j25),
  tj2(typSet_.j25),
  tj5(typSet_.j25),
  tn7(typSet_.j25),
  tn3(typSet_.j25),
  tn6(typSet_.j25),
  tn2(typSet_.j25)]

var o_j25y6 = [
  tn5(typSet_.j25y6),
  tn1(typSet_.j25y6),
  tn4(typSet_.j25y6),
  tj7(typSet_.j25y6),
  tj3(typSet_.j25y6),
  tj6(typSet_.j25y6),
  tj2(typSet_.j25y6),
  tj5(typSet_.j25y6),
  tn7(typSet_.j25y6),
  tn3(typSet_.j25y6),
  tn6(typSet_.j25y6),
  tn2(typSet_.j25y6)]

var o_j26 = [
  tn5(typSet_.j26),
  tn1(typSet_.j26),
  tn4(typSet_.j26),
  tj7(typSet_.j26),
  tj3(typSet_.j26),
  tj6(typSet_.j26),
  tj2(typSet_.j26),
  tj5(typSet_.j26),
  tn7(typSet_.j26),
  tn3(typSet_.j26),
  tn6(typSet_.j26),
  tn2(typSet_.j26)]

var o_j26y34 = [
  tn5(typSet_.j26y34),
  tn1(typSet_.j26y34),
  tn4(typSet_.j26y34),
  tj7(typSet_.j26y34),
  tj3(typSet_.j26y34),
  tj6(typSet_.j26y34),
  tj2(typSet_.j26y34),
  tj5(typSet_.j26y34),
  tn7(typSet_.j26y34),
  tn3(typSet_.j26y34),
  tn6(typSet_.j26y34),
  tn2(typSet_.j26y34)]

var o_j26y3 = [
  tn5(typSet_.j26y3),
  tn1(typSet_.j26y3),
  tn4(typSet_.j26y3),
  tj7(typSet_.j26y3),
  tj3(typSet_.j26y3),
  tj6(typSet_.j26y3),
  tj2(typSet_.j26y3),
  tj5(typSet_.j26y3),
  tn7(typSet_.j26y3),
  tn3(typSet_.j26y3),
  tn6(typSet_.j26y3),
  tn2(typSet_.j26y3)]

var o_j2k34 = [
  tn5(typSet_.j2k34),
  tn1(typSet_.j2k34),
  tn4(typSet_.j2k34),
  tj7(typSet_.j2k34),
  tj3(typSet_.j2k34),
  tj6(typSet_.j2k34),
  tj2(typSet_.j2k34),
  tj5(typSet_.j2k34),
  tn7(typSet_.j2k34),
  tn3(typSet_.j2k34),
  tn6(typSet_.j2k34),
  tn2(typSet_.j2k34)]

var o_j2k56 = [
  tn5(typSet_.j2k56),
  tn1(typSet_.j2k56),
  tn4(typSet_.j2k56),
  tj7(typSet_.j2k56),
  tj3(typSet_.j2k56),
  tj6(typSet_.j2k56),
  tj2(typSet_.j2k56),
  tj5(typSet_.j2k56),
  tn7(typSet_.j2k56),
  tn3(typSet_.j2k56),
  tn6(typSet_.j2k56),
  tn2(typSet_.j2k56)]

var o_j2k56x4 = [
  tn5(typSet_.j2k56x4),
  tn1(typSet_.j2k56x4),
  tn4(typSet_.j2k56x4),
  tj7(typSet_.j2k56x4),
  tj3(typSet_.j2k56x4),
  tj6(typSet_.j2k56x4),
  tj2(typSet_.j2k56x4),
  tj5(typSet_.j2k56x4),
  tn7(typSet_.j2k56x4),
  tn3(typSet_.j2k56x4),
  tn6(typSet_.j2k56x4),
  tn2(typSet_.j2k56x4)]

var o_j2k5 = [
  tn5(typSet_.j2k5),
  tn1(typSet_.j2k5),
  tn4(typSet_.j2k5),
  tj7(typSet_.j2k5),
  tj3(typSet_.j2k5),
  tj6(typSet_.j2k5),
  tj2(typSet_.j2k5),
  tj5(typSet_.j2k5),
  tn7(typSet_.j2k5),
  tn3(typSet_.j2k5),
  tn6(typSet_.j2k5),
  tn2(typSet_.j2k5)]

var o_j2k6 = [
  tn5(typSet_.j2k6),
  tn1(typSet_.j2k6),
  tn4(typSet_.j2k6),
  tj7(typSet_.j2k6),
  tj3(typSet_.j2k6),
  tj6(typSet_.j2k6),
  tj2(typSet_.j2k6),
  tj5(typSet_.j2k6),
  tn7(typSet_.j2k6),
  tn3(typSet_.j2k6),
  tn6(typSet_.j2k6),
  tn2(typSet_.j2k6)]

var o_j2k6x5 = [
  tn5(typSet_.j2k6x5),
  tn1(typSet_.j2k6x5),
  tn4(typSet_.j2k6x5),
  tj7(typSet_.j2k6x5),
  tj3(typSet_.j2k6x5),
  tj6(typSet_.j2k6x5),
  tj2(typSet_.j2k6x5),
  tj5(typSet_.j2k6x5),
  tn7(typSet_.j2k6x5),
  tn3(typSet_.j2k6x5),
  tn6(typSet_.j2k6x5),
  tn2(typSet_.j2k6x5)]

var o_j2k6y3 = [
  tn5(typSet_.j2k6y3),
  tn1(typSet_.j2k6y3),
  tn4(typSet_.j2k6y3),
  tj7(typSet_.j2k6y3),
  tj3(typSet_.j2k6y3),
  tj6(typSet_.j2k6y3),
  tj2(typSet_.j2k6y3),
  tj5(typSet_.j2k6y3),
  tn7(typSet_.j2k6y3),
  tn3(typSet_.j2k6y3),
  tn6(typSet_.j2k6y3),
  tn2(typSet_.j2k6y3)]

var o_j2 = [
  tn5(typSet_.j2),
  tn1(typSet_.j2),
  tn4(typSet_.j2),
  tj7(typSet_.j2),
  tj3(typSet_.j2),
  tj6(typSet_.j2),
  tj2(typSet_.j2),
  tj5(typSet_.j2),
  tn7(typSet_.j2),
  tn3(typSet_.j2),
  tn6(typSet_.j2),
  tn2(typSet_.j2)]

var o_j2y3 = [
  tn5(typSet_.j2y3),
  tn1(typSet_.j2y3),
  tn4(typSet_.j2y3),
  tj7(typSet_.j2y3),
  tj3(typSet_.j2y3),
  tj6(typSet_.j2y3),
  tj2(typSet_.j2y3),
  tj5(typSet_.j2y3),
  tn7(typSet_.j2y3),
  tn3(typSet_.j2y3),
  tn6(typSet_.j2y3),
  tn2(typSet_.j2y3)]

var o_j346y5 = [
  tn5(typSet_.j346y5),
  tn1(typSet_.j346y5),
  tn4(typSet_.j346y5),
  tj7(typSet_.j346y5),
  tj3(typSet_.j346y5),
  tj6(typSet_.j346y5),
  tj2(typSet_.j346y5),
  tj5(typSet_.j346y5),
  tn7(typSet_.j346y5),
  tn3(typSet_.j346y5),
  tn6(typSet_.j346y5),
  tn2(typSet_.j346y5)]

var o_j36 = [
  tn5(typSet_.j36),
  tn1(typSet_.j36),
  tn4(typSet_.j36),
  tj7(typSet_.j36),
  tj3(typSet_.j36),
  tj6(typSet_.j36),
  tj2(typSet_.j36),
  tj5(typSet_.j36),
  tn7(typSet_.j36),
  tn3(typSet_.j36),
  tn6(typSet_.j36),
  tn2(typSet_.j36)]

var o_j3k5 = [
  tn5(typSet_.j3k5),
  tn1(typSet_.j3k5),
  tn4(typSet_.j3k5),
  tj7(typSet_.j3k5),
  tj3(typSet_.j3k5),
  tj6(typSet_.j3k5),
  tj2(typSet_.j3k5),
  tj5(typSet_.j3k5),
  tn7(typSet_.j3k5),
  tn3(typSet_.j3k5),
  tn6(typSet_.j3k5),
  tn2(typSet_.j3k5)]

var o_j3k5x4 = [
  tn5(typSet_.j3k5x4),
  tn1(typSet_.j3k5x4),
  tn4(typSet_.j3k5x4),
  tj7(typSet_.j3k5x4),
  tj3(typSet_.j3k5x4),
  tj6(typSet_.j3k5x4),
  tj2(typSet_.j3k5x4),
  tj5(typSet_.j3k5x4),
  tn7(typSet_.j3k5x4),
  tn3(typSet_.j3k5x4),
  tn6(typSet_.j3k5x4),
  tn2(typSet_.j3k5x4)]

var o_j3k6 = [
  tn5(typSet_.j3k6),
  tn1(typSet_.j3k6),
  tn4(typSet_.j3k6),
  tj7(typSet_.j3k6),
  tj3(typSet_.j3k6),
  tj6(typSet_.j3k6),
  tj2(typSet_.j3k6),
  tj5(typSet_.j3k6),
  tn7(typSet_.j3k6),
  tn3(typSet_.j3k6),
  tn6(typSet_.j3k6),
  tn2(typSet_.j3k6)]

var o_j3 = [
  tn5(typSet_.j3),
  tn1(typSet_.j3),
  tn4(typSet_.j3),
  tj7(typSet_.j3),
  tj3(typSet_.j3),
  tj6(typSet_.j3),
  tj2(typSet_.j3),
  tj5(typSet_.j3),
  tn7(typSet_.j3),
  tn3(typSet_.j3),
  tn6(typSet_.j3),
  tn2(typSet_.j3)]

var o_j56 = [
  tn5(typSet_.j56),
  tn1(typSet_.j56),
  tn4(typSet_.j56),
  tj7(typSet_.j56),
  tj3(typSet_.j56),
  tj6(typSet_.j56),
  tj2(typSet_.j56),
  tj5(typSet_.j56),
  tn7(typSet_.j56),
  tn3(typSet_.j56),
  tn6(typSet_.j56),
  tn2(typSet_.j56)]

var o_j56y7 = [
  tn5(typSet_.j56y7),
  tn1(typSet_.j56y7),
  tn4(typSet_.j56y7),
  tj7(typSet_.j56y7),
  tj3(typSet_.j56y7),
  tj6(typSet_.j56y7),
  tj2(typSet_.j56y7),
  tj5(typSet_.j56y7),
  tn7(typSet_.j56y7),
  tn3(typSet_.j56y7),
  tn6(typSet_.j56y7),
  tn2(typSet_.j56y7)]

var o_j5 = [
  tn5(typSet_.j5),
  tn1(typSet_.j5),
  tn4(typSet_.j5),
  tj7(typSet_.j5),
  tj3(typSet_.j5),
  tj6(typSet_.j5),
  tj2(typSet_.j5),
  tj5(typSet_.j5),
  tn7(typSet_.j5),
  tn3(typSet_.j5),
  tn6(typSet_.j5),
  tn2(typSet_.j5)]

var o_j5y6 = [
  tn5(typSet_.j5y6),
  tn1(typSet_.j5y6),
  tn4(typSet_.j5y6),
  tj7(typSet_.j5y6),
  tj3(typSet_.j5y6),
  tj6(typSet_.j5y6),
  tj2(typSet_.j5y6),
  tj5(typSet_.j5y6),
  tn7(typSet_.j5y6),
  tn3(typSet_.j5y6),
  tn6(typSet_.j5y6),
  tn2(typSet_.j5y6)]

var o_j6 = [
  tn5(typSet_.j6),
  tn1(typSet_.j6),
  tn4(typSet_.j6),
  tj7(typSet_.j6),
  tj3(typSet_.j6),
  tj6(typSet_.j6),
  tj2(typSet_.j6),
  tj5(typSet_.j6),
  tn7(typSet_.j6),
  tn3(typSet_.j6),
  tn6(typSet_.j6),
  tn2(typSet_.j6)]

var o_k125 = [
  tn5(typSet_.k125),
  tn1(typSet_.k125),
  tn4(typSet_.k125),
  tj7(typSet_.k125),
  tj3(typSet_.k125),
  tj6(typSet_.k125),
  tj2(typSet_.k125),
  tj5(typSet_.k125),
  tn7(typSet_.k125),
  tn3(typSet_.k125),
  tn6(typSet_.k125),
  tn2(typSet_.k125)]

var o_k12j5 = [
  tn5(typSet_.k12j5),
  tn1(typSet_.k12j5),
  tn4(typSet_.k12j5),
  tj7(typSet_.k12j5),
  tj3(typSet_.k12j5),
  tj6(typSet_.k12j5),
  tj2(typSet_.k12j5),
  tj5(typSet_.k12j5),
  tn7(typSet_.k12j5),
  tn3(typSet_.k12j5),
  tn6(typSet_.k12j5),
  tn2(typSet_.k12j5)]

var o_k12 = [
  tn5(typSet_.k12),
  tn1(typSet_.k12),
  tn4(typSet_.k12),
  tj7(typSet_.k12),
  tj3(typSet_.k12),
  tj6(typSet_.k12),
  tj2(typSet_.k12),
  tj5(typSet_.k12),
  tn7(typSet_.k12),
  tn3(typSet_.k12),
  tn6(typSet_.k12),
  tn2(typSet_.k12)]

var o_k135x4 = [
  tn5(typSet_.k135x4),
  tn1(typSet_.k135x4),
  tn4(typSet_.k135x4),
  tj7(typSet_.k135x4),
  tj3(typSet_.k135x4),
  tj6(typSet_.k135x4),
  tj2(typSet_.k135x4),
  tj5(typSet_.k135x4),
  tn7(typSet_.k135x4),
  tn3(typSet_.k135x4),
  tn6(typSet_.k135x4),
  tn2(typSet_.k135x4)]

var o_k157x6 = [
  tn5(typSet_.k157x6),
  tn1(typSet_.k157x6),
  tn4(typSet_.k157x6),
  tj7(typSet_.k157x6),
  tj3(typSet_.k157x6),
  tj6(typSet_.k157x6),
  tj2(typSet_.k157x6),
  tj5(typSet_.k157x6),
  tn7(typSet_.k157x6),
  tn3(typSet_.k157x6),
  tn6(typSet_.k157x6),
  tn2(typSet_.k157x6)]

var o_k15 = [
  tn5(typSet_.k15),
  tn1(typSet_.k15),
  tn4(typSet_.k15),
  tj7(typSet_.k15),
  tj3(typSet_.k15),
  tj6(typSet_.k15),
  tj2(typSet_.k15),
  tj5(typSet_.k15),
  tn7(typSet_.k15),
  tn3(typSet_.k15),
  tn6(typSet_.k15),
  tn2(typSet_.k15)]

var o_k1j5 = [
  tn5(typSet_.k1j5),
  tn1(typSet_.k1j5),
  tn4(typSet_.k1j5),
  tj7(typSet_.k1j5),
  tj3(typSet_.k1j5),
  tj6(typSet_.k1j5),
  tj2(typSet_.k1j5),
  tj5(typSet_.k1j5),
  tn7(typSet_.k1j5),
  tn3(typSet_.k1j5),
  tn6(typSet_.k1j5),
  tn2(typSet_.k1j5)]

var o_k1j6 = [
  tn5(typSet_.k1j6),
  tn1(typSet_.k1j6),
  tn4(typSet_.k1j6),
  tj7(typSet_.k1j6),
  tj3(typSet_.k1j6),
  tj6(typSet_.k1j6),
  tj2(typSet_.k1j6),
  tj5(typSet_.k1j6),
  tn7(typSet_.k1j6),
  tn3(typSet_.k1j6),
  tn6(typSet_.k1j6),
  tn2(typSet_.k1j6)]

var o_k1j6y7 = [
  tn5(typSet_.k1j6y7),
  tn1(typSet_.k1j6y7),
  tn4(typSet_.k1j6y7),
  tj7(typSet_.k1j6y7),
  tj3(typSet_.k1j6y7),
  tj6(typSet_.k1j6y7),
  tj2(typSet_.k1j6y7),
  tj5(typSet_.k1j6y7),
  tn7(typSet_.k1j6y7),
  tn3(typSet_.k1j6y7),
  tn6(typSet_.k1j6y7),
  tn2(typSet_.k1j6y7)]

var o_k1 = [
  tn5(typSet_.k1),
  tn1(typSet_.k1),
  tn4(typSet_.k1),
  tj7(typSet_.k1),
  tj3(typSet_.k1),
  tj6(typSet_.k1),
  tj2(typSet_.k1),
  tj5(typSet_.k1),
  tn7(typSet_.k1),
  tn3(typSet_.k1),
  tn6(typSet_.k1),
  tn2(typSet_.k1)]

var o_k256 = [
  tn5(typSet_.k256),
  tn1(typSet_.k256),
  tn4(typSet_.k256),
  tj7(typSet_.k256),
  tj3(typSet_.k256),
  tj6(typSet_.k256),
  tj2(typSet_.k256),
  tj5(typSet_.k256),
  tn7(typSet_.k256),
  tn3(typSet_.k256),
  tn6(typSet_.k256),
  tn2(typSet_.k256)]

var o_k257x1 = [
  tn5(typSet_.k257x1),
  tn1(typSet_.k257x1),
  tn4(typSet_.k257x1),
  tj7(typSet_.k257x1),
  tj3(typSet_.k257x1),
  tj6(typSet_.k257x1),
  tj2(typSet_.k257x1),
  tj5(typSet_.k257x1),
  tn7(typSet_.k257x1),
  tn3(typSet_.k257x1),
  tn6(typSet_.k257x1),
  tn2(typSet_.k257x1)]

var o_k25 = [
  tn5(typSet_.k25),
  tn1(typSet_.k25),
  tn4(typSet_.k25),
  tj7(typSet_.k25),
  tj3(typSet_.k25),
  tj6(typSet_.k25),
  tj2(typSet_.k25),
  tj5(typSet_.k25),
  tn7(typSet_.k25),
  tn3(typSet_.k25),
  tn6(typSet_.k25),
  tn2(typSet_.k25)]

var o_k25x17 = [
  tn5(typSet_.k25x17),
  tn1(typSet_.k25x17),
  tn4(typSet_.k25x17),
  tj7(typSet_.k25x17),
  tj3(typSet_.k25x17),
  tj6(typSet_.k25x17),
  tj2(typSet_.k25x17),
  tj5(typSet_.k25x17),
  tn7(typSet_.k25x17),
  tn3(typSet_.k25x17),
  tn6(typSet_.k25x17),
  tn2(typSet_.k25x17)]

var o_k25x1 = [
  tn5(typSet_.k25x1),
  tn1(typSet_.k25x1),
  tn4(typSet_.k25x1),
  tj7(typSet_.k25x1),
  tj3(typSet_.k25x1),
  tj6(typSet_.k25x1),
  tj2(typSet_.k25x1),
  tj5(typSet_.k25x1),
  tn7(typSet_.k25x1),
  tn3(typSet_.k25x1),
  tn6(typSet_.k25x1),
  tn2(typSet_.k25x1)]

var o_k26 = [
  tn5(typSet_.k26),
  tn1(typSet_.k26),
  tn4(typSet_.k26),
  tj7(typSet_.k26),
  tj3(typSet_.k26),
  tj6(typSet_.k26),
  tj2(typSet_.k26),
  tj5(typSet_.k26),
  tn7(typSet_.k26),
  tn3(typSet_.k26),
  tn6(typSet_.k26),
  tn2(typSet_.k26)]

var o_k26x5 = [
  tn5(typSet_.k26x5),
  tn1(typSet_.k26x5),
  tn4(typSet_.k26x5),
  tj7(typSet_.k26x5),
  tj3(typSet_.k26x5),
  tj6(typSet_.k26x5),
  tj2(typSet_.k26x5),
  tj5(typSet_.k26x5),
  tn7(typSet_.k26x5),
  tn3(typSet_.k26x5),
  tn6(typSet_.k26x5),
  tn2(typSet_.k26x5)]

var o_k2j56 = [
  tn5(typSet_.k2j56),
  tn1(typSet_.k2j56),
  tn4(typSet_.k2j56),
  tj7(typSet_.k2j56),
  tj3(typSet_.k2j56),
  tj6(typSet_.k2j56),
  tj2(typSet_.k2j56),
  tj5(typSet_.k2j56),
  tn7(typSet_.k2j56),
  tn3(typSet_.k2j56),
  tn6(typSet_.k2j56),
  tn2(typSet_.k2j56)]

var o_k2j56y7 = [
  tn5(typSet_.k2j56y7),
  tn1(typSet_.k2j56y7),
  tn4(typSet_.k2j56y7),
  tj7(typSet_.k2j56y7),
  tj3(typSet_.k2j56y7),
  tj6(typSet_.k2j56y7),
  tj2(typSet_.k2j56y7),
  tj5(typSet_.k2j56y7),
  tn7(typSet_.k2j56y7),
  tn3(typSet_.k2j56y7),
  tn6(typSet_.k2j56y7),
  tn2(typSet_.k2j56y7)]

var o_k2j5 = [
  tn5(typSet_.k2j5),
  tn1(typSet_.k2j5),
  tn4(typSet_.k2j5),
  tj7(typSet_.k2j5),
  tj3(typSet_.k2j5),
  tj6(typSet_.k2j5),
  tj2(typSet_.k2j5),
  tj5(typSet_.k2j5),
  tn7(typSet_.k2j5),
  tn3(typSet_.k2j5),
  tn6(typSet_.k2j5),
  tn2(typSet_.k2j5)]

var o_k2j5x1 = [
  tn5(typSet_.k2j5x1),
  tn1(typSet_.k2j5x1),
  tn4(typSet_.k2j5x1),
  tj7(typSet_.k2j5x1),
  tj3(typSet_.k2j5x1),
  tj6(typSet_.k2j5x1),
  tj2(typSet_.k2j5x1),
  tj5(typSet_.k2j5x1),
  tn7(typSet_.k2j5x1),
  tn3(typSet_.k2j5x1),
  tn6(typSet_.k2j5x1),
  tn2(typSet_.k2j5x1)]

var o_k2j5y6 = [
  tn5(typSet_.k2j5y6),
  tn1(typSet_.k2j5y6),
  tn4(typSet_.k2j5y6),
  tj7(typSet_.k2j5y6),
  tj3(typSet_.k2j5y6),
  tj6(typSet_.k2j5y6),
  tj2(typSet_.k2j5y6),
  tj5(typSet_.k2j5y6),
  tn7(typSet_.k2j5y6),
  tn3(typSet_.k2j5y6),
  tn6(typSet_.k2j5y6),
  tn2(typSet_.k2j5y6)]

var o_k2j6 = [
  tn5(typSet_.k2j6),
  tn1(typSet_.k2j6),
  tn4(typSet_.k2j6),
  tj7(typSet_.k2j6),
  tj3(typSet_.k2j6),
  tj6(typSet_.k2j6),
  tj2(typSet_.k2j6),
  tj5(typSet_.k2j6),
  tn7(typSet_.k2j6),
  tn3(typSet_.k2j6),
  tn6(typSet_.k2j6),
  tn2(typSet_.k2j6)]

var o_k2 = [
  tn5(typSet_.k2),
  tn1(typSet_.k2),
  tn4(typSet_.k2),
  tj7(typSet_.k2),
  tj3(typSet_.k2),
  tj6(typSet_.k2),
  tj2(typSet_.k2),
  tj5(typSet_.k2),
  tn7(typSet_.k2),
  tn3(typSet_.k2),
  tn6(typSet_.k2),
  tn2(typSet_.k2)]

var o_k2x1 = [
  tn5(typSet_.k2x1),
  tn1(typSet_.k2x1),
  tn4(typSet_.k2x1),
  tj7(typSet_.k2x1),
  tj3(typSet_.k2x1),
  tj6(typSet_.k2x1),
  tj2(typSet_.k2x1),
  tj5(typSet_.k2x1),
  tn7(typSet_.k2x1),
  tn3(typSet_.k2x1),
  tn6(typSet_.k2x1),
  tn2(typSet_.k2x1)]

var o_k345x2 = [
  tn5(typSet_.k345x2),
  tn1(typSet_.k345x2),
  tn4(typSet_.k345x2),
  tj7(typSet_.k345x2),
  tj3(typSet_.k345x2),
  tj6(typSet_.k345x2),
  tj2(typSet_.k345x2),
  tj5(typSet_.k345x2),
  tn7(typSet_.k345x2),
  tn3(typSet_.k345x2),
  tn6(typSet_.k345x2),
  tn2(typSet_.k345x2)]

var o_k34 = [
  tn5(typSet_.k34),
  tn1(typSet_.k34),
  tn4(typSet_.k34),
  tj7(typSet_.k34),
  tj3(typSet_.k34),
  tj6(typSet_.k34),
  tj2(typSet_.k34),
  tj5(typSet_.k34),
  tn7(typSet_.k34),
  tn3(typSet_.k34),
  tn6(typSet_.k34),
  tn2(typSet_.k34)]

var o_k34x2 = [
  tn5(typSet_.k34x2),
  tn1(typSet_.k34x2),
  tn4(typSet_.k34x2),
  tj7(typSet_.k34x2),
  tj3(typSet_.k34x2),
  tj6(typSet_.k34x2),
  tj2(typSet_.k34x2),
  tj5(typSet_.k34x2),
  tn7(typSet_.k34x2),
  tn3(typSet_.k34x2),
  tn6(typSet_.k34x2),
  tn2(typSet_.k34x2)]

var o_k56 = [
  tn5(typSet_.k56),
  tn1(typSet_.k56),
  tn4(typSet_.k56),
  tj7(typSet_.k56),
  tj3(typSet_.k56),
  tj6(typSet_.k56),
  tj2(typSet_.k56),
  tj5(typSet_.k56),
  tn7(typSet_.k56),
  tn3(typSet_.k56),
  tn6(typSet_.k56),
  tn2(typSet_.k56)]

var o_k56x4 = [
  tn5(typSet_.k56x4),
  tn1(typSet_.k56x4),
  tn4(typSet_.k56x4),
  tj7(typSet_.k56x4),
  tj3(typSet_.k56x4),
  tj6(typSet_.k56x4),
  tj2(typSet_.k56x4),
  tj5(typSet_.k56x4),
  tn7(typSet_.k56x4),
  tn3(typSet_.k56x4),
  tn6(typSet_.k56x4),
  tn2(typSet_.k56x4)]

var o_k5 = [
  tn5(typSet_.k5),
  tn1(typSet_.k5),
  tn4(typSet_.k5),
  tj7(typSet_.k5),
  tj3(typSet_.k5),
  tj6(typSet_.k5),
  tj2(typSet_.k5),
  tj5(typSet_.k5),
  tn7(typSet_.k5),
  tn3(typSet_.k5),
  tn6(typSet_.k5),
  tn2(typSet_.k5)]

var o_k6 = [
  tn5(typSet_.k6),
  tn1(typSet_.k6),
  tn4(typSet_.k6),
  tj7(typSet_.k6),
  tj3(typSet_.k6),
  tj6(typSet_.k6),
  tj2(typSet_.k6),
  tj5(typSet_.k6),
  tn7(typSet_.k6),
  tn3(typSet_.k6),
  tn6(typSet_.k6),
  tn2(typSet_.k6)]

var o_k6x5 = [
  tn5(typSet_.k6x5),
  tn1(typSet_.k6x5),
  tn4(typSet_.k6x5),
  tj7(typSet_.k6x5),
  tj3(typSet_.k6x5),
  tj6(typSet_.k6x5),
  tj2(typSet_.k6x5),
  tj5(typSet_.k6x5),
  tn7(typSet_.k6x5),
  tn3(typSet_.k6x5),
  tn6(typSet_.k6x5),
  tn2(typSet_.k6x5)]

var o_n0 = [
  tn5(typSet_.n0),
  tn1(typSet_.n0),
  tn4(typSet_.n0),
  tj7(typSet_.n0),
  tj3(typSet_.n0),
  tj6(typSet_.n0),
  tj2(typSet_.n0),
  tj5(typSet_.n0),
  tn7(typSet_.n0),
  tn3(typSet_.n0),
  tn6(typSet_.n0),
  tn2(typSet_.n0)]

var o_n167 = [
  tn5(typSet_.n167),
  tn1(typSet_.n167),
  tn4(typSet_.n167),
  tj7(typSet_.n167),
  tj3(typSet_.n167),
  tj6(typSet_.n167),
  tj2(typSet_.n167),
  tj5(typSet_.n167),
  tn7(typSet_.n167),
  tn3(typSet_.n167),
  tn6(typSet_.n167),
  tn2(typSet_.n167)]

var o_n167x4 = [
  tn5(typSet_.n167x4),
  tn1(typSet_.n167x4),
  tn4(typSet_.n167x4),
  tj7(typSet_.n167x4),
  tj3(typSet_.n167x4),
  tj6(typSet_.n167x4),
  tj2(typSet_.n167x4),
  tj5(typSet_.n167x4),
  tn7(typSet_.n167x4),
  tn3(typSet_.n167x4),
  tn6(typSet_.n167x4),
  tn2(typSet_.n167x4)]

var o_n25x6 = [
  tn5(typSet_.n25x6),
  tn1(typSet_.n25x6),
  tn4(typSet_.n25x6),
  tj7(typSet_.n25x6),
  tj3(typSet_.n25x6),
  tj6(typSet_.n25x6),
  tj2(typSet_.n25x6),
  tj5(typSet_.n25x6),
  tn7(typSet_.n25x6),
  tn3(typSet_.n25x6),
  tn6(typSet_.n25x6),
  tn2(typSet_.n25x6)]

var o_n26y5 = [
  tn5(typSet_.n26y5),
  tn1(typSet_.n26y5),
  tn4(typSet_.n26y5),
  tj7(typSet_.n26y5),
  tj3(typSet_.n26y5),
  tj6(typSet_.n26y5),
  tj2(typSet_.n26y5),
  tj5(typSet_.n26y5),
  tn7(typSet_.n26y5),
  tn3(typSet_.n26y5),
  tn6(typSet_.n26y5),
  tn2(typSet_.n26y5)]

var o_n345 = [
  tn5(typSet_.n345),
  tn1(typSet_.n345),
  tn4(typSet_.n345),
  tj7(typSet_.n345),
  tj3(typSet_.n345),
  tj6(typSet_.n345),
  tj2(typSet_.n345),
  tj5(typSet_.n345),
  tn7(typSet_.n345),
  tn3(typSet_.n345),
  tn6(typSet_.n345),
  tn2(typSet_.n345)]

var o_n345y7 = [
  tn5(typSet_.n345y7),
  tn1(typSet_.n345y7),
  tn4(typSet_.n345y7),
  tj7(typSet_.n345y7),
  tj3(typSet_.n345y7),
  tj6(typSet_.n345y7),
  tj2(typSet_.n345y7),
  tj5(typSet_.n345y7),
  tn7(typSet_.n345y7),
  tn3(typSet_.n345y7),
  tn6(typSet_.n345y7),
  tn2(typSet_.n345y7)]

var o_n45y2 = [
  tn5(typSet_.n45y2),
  tn1(typSet_.n45y2),
  tn4(typSet_.n45y2),
  tj7(typSet_.n45y2),
  tj3(typSet_.n45y2),
  tj6(typSet_.n45y2),
  tj2(typSet_.n45y2),
  tj5(typSet_.n45y2),
  tn7(typSet_.n45y2),
  tn3(typSet_.n45y2),
  tn6(typSet_.n45y2),
  tn2(typSet_.n45y2)]

var o_n5y2 = [
  tn5(typSet_.n5y2),
  tn1(typSet_.n5y2),
  tn4(typSet_.n5y2),
  tj7(typSet_.n5y2),
  tj3(typSet_.n5y2),
  tj6(typSet_.n5y2),
  tj2(typSet_.n5y2),
  tj5(typSet_.n5y2),
  tn7(typSet_.n5y2),
  tn3(typSet_.n5y2),
  tn6(typSet_.n5y2),
  tn2(typSet_.n5y2)]

var o_n67x2 = [
  tn5(typSet_.n67x2),
  tn1(typSet_.n67x2),
  tn4(typSet_.n67x2),
  tj7(typSet_.n67x2),
  tj3(typSet_.n67x2),
  tj6(typSet_.n67x2),
  tj2(typSet_.n67x2),
  tj5(typSet_.n67x2),
  tn7(typSet_.n67x2),
  tn3(typSet_.n67x2),
  tn6(typSet_.n67x2),
  tn2(typSet_.n67x2)]

var o_n6x2 = [
  tn5(typSet_.n6x2),
  tn1(typSet_.n6x2),
  tn4(typSet_.n6x2),
  tj7(typSet_.n6x2),
  tj3(typSet_.n6x2),
  tj6(typSet_.n6x2),
  tj2(typSet_.n6x2),
  tj5(typSet_.n6x2),
  tn7(typSet_.n6x2),
  tn3(typSet_.n6x2),
  tn6(typSet_.n6x2),
  tn2(typSet_.n6x2)]


