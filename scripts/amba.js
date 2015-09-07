/* Copyright 2014-2015 Reid Netterville III */

"use strict";

var coLor = "#deb887";
var bgClr = "inherit";

function rsT(xRGB) {
var frets = document.getElementById("fingerboard");
var reset = frets.getElementsByTagName("td");
for ( var i = 0; i < reset.length; i++ ) {
  reset[i].style.backgroundColor = xRGB; }
}

function n0T() {
  rsT( coLor );
var xA = [
"f01","f03","f05","f08","f10",
"c01","c03","c06","c08","c10",
"g01","g03","g06","g08","g11",
"d01","d04","d06","d08","d11",
"a01","a04","a06","a09","a11",
"e02","e04","e06","e09","e11",
"b02","b04","b07","b09","b11"];
for ( var i = 0; i < xA.length; i++ ) {
  document.getElementById( xA[i] ).style.backgroundColor = bgClr; }
}

function k6T() {
  rsT( coLor );
var xA = [
"f01","f03","f04","f08","f10",
"c01","c03","c06","c08","c09",
"g01","g02","g06","g08","g11",
"d01","d04","d06","d07","d11",
"a00","a04","a06","a09","a11","a12",
"e02","e04","e05","e09","e11",
"b02","b04","b07","b09","b10"];
for ( var i = 0; i < xA.length; i++ ) {
  document.getElementById( xA[i] ).style.backgroundColor = bgClr; }
}

function j5T() {
  rsT( coLor );
var xA = [
"f02","f03","f05","f08","f10",
"c01","c03","c07","c08","c10",
"g00","g01","g03","g06","g08","g12",
"d01","d05","d06","d08","d11",
"a01","a04","a06","a10","a11",
"e03","e04","e06","e09","e11",
"b02","b04","b08","b09","b11"];
for ( var i = 0; i < xA.length; i++ ) {
  document.getElementById( xA[i] ).style.backgroundColor = bgClr; }
}

function j3T() {
  rsT( coLor );
var xA = [
"f01","f03","f05","f08","f11",
"c01","c04","c06","c08","c10",
"g01","g03","g06","g09","g11",
"d02","d04","d06","d08","d11",
"a01","a04","a07","a09","a11",
"e00","e02","e04","e06","e09","e12",
"b02","b05","b07","b09","b11"];
for ( var i = 0; i < xA.length; i++ ) {
  document.getElementById( xA[i] ).style.backgroundColor = bgClr; }
}

function k1T() {
  rsT( coLor );
var xA = [
"f01","f03","f05","f07","f10",
"c00","c03","c06","c08","c10","c12",
"g01","g03","g05","g08","g11",
"d01","d04","d06","d08","d10",
"a01","a03","a06","a09","a11",
"e02","e04","e06","e08","e11",
"b01","b04","b07","b09","b11"];
for ( var i = 0; i < xA.length; i++ ) {
  document.getElementById( xA[i] ).style.backgroundColor = bgClr; }
}

function j6T() {
  rsT( coLor );
var xA = [
"f01","f04","f05","f08","f10",
"c01","c03","c06","c09","c10",
"g02","g03","g06","g08","g11",
"d01","d04","d07","d08","d11",
"a00","a01","a04","a06","a09","a12",
"e02","e05","e06","e09","e11",
"b02","b04","b07","b10","b11"];
for ( var i = 0; i < xA.length; i++ ) {
  document.getElementById( xA[i] ).style.backgroundColor = bgClr; }
}

function k5T() {
  rsT( coLor );
var xA = [
"f01","f02","f05","f08","f10",
"c01","c03","c06","c07","c10",
"g00","g03","g06","g08","g11","g12",
"d01","d04","d05","d08","d11",
"a01","a04","a06","a09","a10",
"e02","e03","e06","e09","e11",
"b02","b04","b07","b08","b11"];
for ( var i = 0; i < xA.length; i++ ) {
  document.getElementById( xA[i] ).style.backgroundColor = bgClr; }
}

function j2T() {
  rsT( coLor );
var xA = [
"f01","f03","f05","f09","f10",
"c02","c03","c06","c08","c10",
"g01","g03","g07","g08","g11",
"d00","d01","d04","d06","d08","d12",
"a01","a05","a06","a09","a11",
"e02","e04","e06","e10","e11",
"b03","b04","b07","b09","b11"];
for ( var i = 0; i < xA.length; i++ ) {
  document.getElementById( xA[i] ).style.backgroundColor = bgClr; }
}

function k2T() {
  rsT( coLor );
var xA = [
"f01","f03","f05","f08","f09",
"c01","c02","c06","c08","c10",
"g01","g03","g06","g07","g11",
"d00","d04","d06","d08","d11","d12",
"a01","a04","a05","a09","a11",
"e02","e04","e06","e09","e10",
"b02","b03","b07","b09","b11"];
for ( var i = 0; i < xA.length; i++ ) {
  document.getElementById( xA[i] ).style.backgroundColor = bgClr; }
}


