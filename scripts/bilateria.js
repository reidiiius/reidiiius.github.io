// Copyright 2015-2017 Reid Netterville III

"use strict";

var Hephaestus = [
"FePb HgCu ____ SnSn ____ CuHg PbFe ____ AuAg ____ AgAu ____ ",
"FeTi HgAg ____ SnAu ____ CuPb PbCu ____ AuSn ____ ____ TiFe ",
"FeTi ____ ____ SnAu ____ CuPb PbCu ____ AuSn ____ AgHg TiFe ",
"FeTi HgAg ____ SnAu ____ CuPb PbCu ____ ____ ____ AgHg TiFe ",
"FeTi HgAg ____ ____ ____ CuPb PbCu ____ AuSn ____ AgHg TiFe ",
"FeUr HgSn ____ SnHg UrFe ____ PbAg ____ AuAu ____ AgPb ____ ",
"FeMn HgSn ____ SnHg MnFe CuTi ____ ____ AuAu ____ ____ TiCu ",
"FeMn ____ ____ ____ MnFe CuTi PbAg ____ AuAu ____ AgPb TiCu ",
"FeMn ____ ____ SnHg MnFe CuTi PbAg ____ ____ ____ AgPb TiCu ",
"FeMn HgSn ____ ____ MnFe CuTi PbAg ____ ____ ____ AgPb TiCu ",
"FeNp HgAu ____ SnPb ____ CuUr PbSn ____ AuHg NpFe ____ ____ ",
"FeNp HgAu ____ SnPb UrCu ____ PbSn ____ AuHg NpFe ____ ____ ",
"FeNp HgAu ____ SnPb ____ CuUr PbSn ____ ____ NpFe ____ TiAg ",
"FeNp ____ ____ SnPb UrCu ____ PbSn ____ AuHg NpFe AgTi ____ ",
"FeNp HgAu ____ SnPb ____ CuUr ____ ____ AuHg NpFe ____ TiAg ",
"FeNp HgAu ____ ____ UrCu ____ PbSn ____ AuHg NpFe AgTi ____ ",
"FeNp HgAu ____ SnPb UrCu ____ ____ ____ AuHg NpFe AgTi ____ ",
"FeNp HgAu ____ ____ ____ CuUr PbSn ____ AuHg NpFe ____ TiAg ",
"FePu HgHg PuFe ____ ____ CuNp ____ ____ AuPb NpCu ____ TiSn ",
"FePu HgHg PuFe SnTi ____ CuNp PbAu ____ ____ NpCu ____ ____ ",
"FePu ____ PuFe SnTi ____ CuNp PbAu ____ AuPb NpCu ____ ____ ",
"FePu ____ PuFe ____ ____ CuNp PbAu ____ AuPb NpCu ____ TiSn ",
"FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ____ AgUr ____ ",
"FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb NpCu ____ ____ ",
"FePu HgHg PuFe ____ UrAg ____ PbAu ____ AuPb NpCu ____ ____ ",
"FePu HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ____ AgUr ____ ",
"FePu HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ____ ____ TiSn ",
"FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ____ AgUr ____ ",
"FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ____ ____ TiSn ",
"FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb NpCu ____ ____ ",
"FePu HgHg PuFe ____ ____ CuNp PbAu ____ ____ NpCu ____ TiSn ",
"FePu HgHg PuFe SnTi ____ CuNp ____ ____ AuPb NpCu ____ ____ ",
"FePu HgHg PuFe SnTi UrAg ____ ____ ____ AuPb NpCu ____ ____ ",
"FePu HgHg PuFe ____ ____ CuNp PbAu ____ ____ ____ AgUr TiSn ",
"FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ____ ____ TiSn ",
"FeFe HgTi ____ SnNp UrAu ____ PbPb ____ AuUr ____ ____ TiHg ",
"FeFe HgTi ____ ____ UrAu ____ PbPb ____ AuUr NpSn ____ TiHg ",
"FeFe HgTi ____ SnNp UrAu ____ ____ ____ AuUr NpSn ____ TiHg ",
"FeCu HgMn ____ ____ MnHg CuFe PbTi ____ AuNp NpAu ____ ____ ",
"FeCu HgMn ____ ____ MnHg CuFe ____ ____ AuNp NpAu ____ TiPb ",
"FeCu HgMn ____ ____ MnHg CuFe PbTi ____ AuNp ____ ____ TiPb ",
"FeCu HgMn ____ ____ MnHg CuFe PbTi ____ ____ NpAu ____ TiPb "];

var Aphrodite = [
"PbFe ____ AuAg ____ AgAu ____ FePb HgCu ____ SnSn ____ CuHg ",
"TiFe FeTi ____ ____ SnAu ____ CuPb PbCu ____ AuSn ____ AgHg ",
"TiFe FeTi HgAg ____ SnAu ____ CuPb PbCu ____ AuSn ____ ____ ",
"TiFe FeTi HgAg ____ ____ ____ CuPb PbCu ____ AuSn ____ AgHg ",
"TiFe FeTi HgAg ____ SnAu ____ CuPb PbCu ____ ____ ____ AgHg ",
"UrFe ____ PbAg ____ AuAu ____ AgPb ____ FeUr HgSn ____ SnHg ",
"MnFe CuTi ____ ____ AuAu ____ ____ TiCu FeMn HgSn ____ SnHg ",
"MnFe CuTi PbAg ____ AuAu ____ AgPb TiCu FeMn ____ ____ ____ ",
"MnFe CuTi PbAg ____ ____ ____ AgPb TiCu FeMn HgSn ____ ____ ",
"MnFe CuTi PbAg ____ ____ ____ AgPb TiCu FeMn ____ ____ SnHg ",
"NpFe ____ ____ FeNp HgAu ____ SnPb UrCu ____ PbSn ____ AuHg ",
"NpFe ____ ____ FeNp HgAu ____ SnPb ____ CuUr PbSn ____ AuHg ",
"NpFe AgTi ____ FeNp ____ ____ SnPb UrCu ____ PbSn ____ AuHg ",
"NpFe ____ TiAg FeNp HgAu ____ SnPb ____ CuUr PbSn ____ ____ ",
"NpFe AgTi ____ FeNp HgAu ____ ____ UrCu ____ PbSn ____ AuHg ",
"NpFe ____ TiAg FeNp HgAu ____ SnPb ____ CuUr ____ ____ AuHg ",
"NpFe ____ TiAg FeNp HgAu ____ ____ ____ CuUr PbSn ____ AuHg ",
"NpFe AgTi ____ FeNp HgAu ____ SnPb UrCu ____ ____ ____ AuHg ",
"PuFe SnTi ____ CuNp PbAu ____ ____ NpCu ____ ____ FePu HgHg ",
"PuFe ____ ____ CuNp ____ ____ AuPb NpCu ____ TiSn FePu HgHg ",
"PuFe ____ ____ CuNp PbAu ____ AuPb NpCu ____ TiSn FePu ____ ",
"PuFe SnTi ____ CuNp PbAu ____ AuPb NpCu ____ ____ FePu ____ ",
"PuFe ____ UrAg ____ PbAu ____ AuPb NpCu ____ ____ FePb HgHg ",
"PuFe ____ ____ CuNp PbAu ____ AuPb ____ AgUr ____ FePu HgHg ",
"PuFe ____ ____ CuNp PbAu ____ AuPb NpCu ____ ____ FePb HgHg ",
"PuFe ____ UrAg ____ PbAu ____ AuPb ____ AgUr ____ FePu HgHg ",
"PuFe SnTi ____ ____ PbAu ____ AuPb ____ AgUr ____ FePu HgHg ",
"PuFe ____ UrAg ____ PbAu ____ AuPb ____ ____ TiSn FePu HgHg ",
"PuFe SnTi ____ ____ PbAu ____ AuPb NpCu ____ ____ FePu HgHg ",
"PuFe ____ ____ CuNp PbAu ____ AuPb ____ ____ TiSn FePu HgHg ",
"PuFe SnTi ____ CuNp ____ ____ AuPb NpCu ____ ____ FePu HgHg ",
"PuFe ____ ____ CuNp PbAu ____ ____ NpCu ____ TiSn FePu HgHg ",
"PuFe SnTi UrAg ____ ____ ____ AuPb NpCu ____ ____ FePu HgHg ",
"PuFe ____ ____ CuNp PbAu ____ ____ ____ AgUr TiSn FePu HgHg ",
"PuFe SnTi ____ ____ PbAu ____ AuPb ____ ____ TiSn FePu HgHg ",
"FeFe HgTi ____ ____ UrAu ____ PbPb ____ AuUr NpSn ____ TiHg ",
"FeFe HgTi ____ SnNp UrAu ____ PbPb ____ AuUr ____ ____ TiHg ",
"FeFe HgTi ____ SnNp UrAu ____ ____ ____ AuUr NpSn ____ TiHg ",
"CuFe ____ ____ AuNp NpAu ____ TiPb FeCu HgMn ____ ____ MnHg ",
"CuFe PbTi ____ AuNp NpAu ____ ____ FeCu HgMn ____ ____ MnHg ",
"CuFe PbTi ____ ____ NpAu ____ TiPb FeCu HgMn ____ ____ MnHg ",
"CuFe PbTi ____ AuNp ____ ____ TiPb FeCu HgMn ____ ____ MnHg "];

function perseus(o) { var d=document;
  d.writeln(o.slice(30,60).concat(o.slice( 0,30))) // n4
  d.writeln(o.slice( 5,60).concat(o.slice( 0, 5))) // n1
  d.writeln(o.slice(40,60).concat(o.slice( 0,40))) // n5
  d.writeln(o.slice(15,60).concat(o.slice( 0,15))) // n2
  d.writeln(o.slice(50,60).concat(o.slice( 0,50))) // n6
  d.writeln(o.slice(25,60).concat(o.slice( 0,25))) // n3
  d.writeln(o.slice( 0,60).concat(o.slice( 0, 0))) // n7
  d.writeln(o.slice(35,60).concat(o.slice( 0,35))) // j5
  d.writeln(o.slice(10,60).concat(o.slice( 0,10))) // j2
  d.writeln(o.slice(45,60).concat(o.slice( 0,45))) // j6
  d.writeln(o.slice(20,60).concat(o.slice( 0,20))) // j3
  d.writeln(o.slice(55,60).concat(o.slice( 0,55))) // j7
}

function andromeda(o) { var d=document;
  d.writeln(o.slice( 0,60).concat(o.slice( 0, 0))) // n4
  d.writeln(o.slice(35,60).concat(o.slice( 0,35))) // n1
  d.writeln(o.slice(10,60).concat(o.slice( 0,10))) // n5
  d.writeln(o.slice(45,60).concat(o.slice( 0,45))) // n2
  d.writeln(o.slice(20,60).concat(o.slice( 0,20))) // n6
  d.writeln(o.slice(55,60).concat(o.slice( 0,55))) // n3
  d.writeln(o.slice(30,60).concat(o.slice( 0,30))) // n7
  d.writeln(o.slice( 5,60).concat(o.slice( 0, 5))) // j5
  d.writeln(o.slice(40,60).concat(o.slice( 0,40))) // j2
  d.writeln(o.slice(15,60).concat(o.slice( 0,15))) // j6
  d.writeln(o.slice(50,60).concat(o.slice( 0,50))) // j3
  d.writeln(o.slice(25,60).concat(o.slice( 0,25))) // j7
}

