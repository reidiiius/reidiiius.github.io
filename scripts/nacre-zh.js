// Copyright 2014 Reid Netterville III 
  var j2="汞汞 钚铁 一一 一一 铜镎 铅金 一一 金铅 一一 银铀 一一 铁钚 ",
      j3="汞锡 一一 锡汞 铀铁 一一 铅银 一一 金金 一一 银铅 一一 铁铀 ",
      j5="铅铜 一一 金锡 一一 银汞 钒铁 铁钒 一一 一一 锡金 一一 铜铅 ",
      j6="汞金 一一 锡铅 一一 铜铀 铅锡 一一 金汞 镎铁 一一 一一 铁镎 ",
      k1="一一 铁铀 汞锡 一一 锡汞 铀铁 一一 铅银 一一 金金 一一 银铅 ",
      k2="镎铜 一一 一一 铁钚 汞汞 钚铁 一一 铀银 一一 铅金 一一 金铅 ",
      k5="铀铜 一一 铅锡 一一 金汞 镎铁 一一 一一 铁镎 汞金 一一 锡铅 ",
      k6="汞银 一一 锡金 一一 铜铅 铅铜 一一 金锡 一一 一一 钒铁 铁钒 ",
      n0="汞铜 一一 锡锡 一一 铜汞 铅铁 一一 金银 一一 银金 一一 铁铅 ",
     j17="一一 一一 锡金 一一 铜铅 铅铜 一一 金锡 一一 银汞 钒铁 铁钒 ",
     j23="汞汞 钚铁 一一 铀银 一一 铅金 一一 金铅 一一 银铀 一一 铁钚 ",
     j25="铁铜 汞锰 一一 一一 锰汞 铜铁 铅钒 一一 一一 镎金 一一 钒铅 ",
     j26="汞汞 钚铁 一一 一一 铜镎 铅金 一一 金铅 镎铜 一一 一一 铁钚 ",
     j36="汞金 一一 锡铅 铀铜 一一 铅锡 一一 金汞 镎铁 一一 一一 铁镎 ",
     j56="铀铜 一一 铅锡 一一 金汞 镎铁 银钒 一一 铁镎 一一 一一 锡铅 ",
     k12="一一 银铀 一一 铁钚 汞汞 钚铁 一一 铀银 一一 铅金 一一 金铅 ",
     k15="一一 铜铀 铅锡 一一 金汞 镎铁 一一 一一 铁镎 汞金 一一 锡铅 ",
     k25="镎铜 一一 一一 铁钚 汞汞 钚铁 一一 一一 铜镎 铅金 一一 金铅 ",
     k26="汞锰 一一 一一 锰汞 铜铁 铅钒 一一 金镎 一一 一一 钒铅 铁铜 ",
     k34="铅铜 一一 金锡 一一 一一 钒铁 铁钒 汞银 一一 锡金 一一 铜铅 ",
     k56="汞金 一一 锡铅 一一 铜铀 铅锡 一一 一一 镎铁 一一 钒银 铁镎 ",
    j236="汞汞 钚铁 一一 铀银 一一 铅金 一一 金铅 镎铜 一一 一一 铁钚 ",
    j256="铁铜 汞锰 一一 一一 锰汞 铜铁 铅钒 一一 一一 镎金 一一 钒铅 ",
    j2k5="铁铜 汞锰 一一 一一 锰汞 铜铁 一一 一一 金镎 镎金 一一 钒铅 ",
    j2k6="汞汞 钚铁 一一 一一 铜镎 铅金 一一 金铅 一一 一一 钒锡 铁钚 ",
    j2y3="汞汞 钚铁 锡钒 一一 一一 铅金 一一 金铅 一一 银铀 一一 铁钚 ",
    j3k5="镎铜 一一 钒锡 铁钚 一一 钚铁 一一 一一 铜镎 铅金 一一 金铅 ",
    j3k6="汞钒 一一 锡镎 铀金 一一 铅铅 一一 金铀 一一 一一 钒汞 铁铁 ",
    j5y6="铅铜 一一 金锡 一一 银汞 钒铁 铁钒 汞银 一一 一一 一一 铜铅 ",
    k125="一一 银铀 一一 铁钚 汞汞 钚铁 一一 一一 铜镎 铅金 一一 金铅 ",
    k1j5="一一 金铀 镎锡 一一 钒汞 铁铁 汞钒 一一 一一 铀金 一一 铅铅 ",
    k1j6="一一 钚铁 锡钒 一一 铜镎 铅金 一一 金铅 镎铜 一一 一一 铁钚 ",
    k256="汞锰 一一 一一 锰汞 铜铁 铅钒 一一 一一 镎金 一一 钒铅 铁铜 ",
    k2j5="镎铜 一一 一一 铁钚 汞汞 钚铁 锡钒 一一 一一 铅金 一一 金铅 ",
    k2j6="汞锰 一一 一一 锰汞 铜铁 铅钒 一一 金镎 镎金 一一 一一 铁铜 ",
    k2x1="一一 一一 钒锡 铁钚 汞汞 钚铁 一一 铀银 一一 铅金 一一 金铅 ",
    k6x5="汞银 一一 锡金 一一 铜铅 铅铜 一一 一一 一一 银汞 钒铁 铁钒 ",
    n167="镎铜 一一 一一 铁钚 一一 钚铁 锡钒 一一 铜镎 铅金 一一 金铅 ",
    n345="一一 钚铁 一一 一一 铜镎 铅金 一一 金铅 镎铜 一一 钒锡 铁钚 ",
    n5y2="汞锰 一一 一一 锰汞 铜铁 一一 一一 金镎 镎金 一一 钒铅 铁铜 ",
    n6x2="铁铜 汞锰 一一 一一 锰汞 铜铁 铅钒 一一 金镎 镎金 一一 一一 ",
   j17k2="一一 一一 一一 锰铁 铜钒 铅银 一一 金金 一一 银铅 钒铜 铁锰 ",
   j17y2="汞银 一一 一一 一一 铜铅 铅铜 一一 金锡 一一 银汞 钒铁 铁钒 ",
   j23k6="汞汞 钚铁 一一 铀银 一一 铅金 一一 金铅 一一 一一 钒锡 铁钚 ",
   j25y6="钒铜 铁锰 一一 一一 锡汞 锰铁 铜钒 铅银 一一 一一 一一 银铅 ",
   j26y3="汞汞 钚铁 锡钒 一一 一一 铅金 一一 金铅 镎铜 一一 一一 铁钚 ",
   j2k34="钒铜 铁锰 一一 一一 一一 锰铁 铜钒 铅银 一一 金金 一一 银铅 ",
   j2k56="汞汞 钚铁 一一 一一 铜镎 铅金 一一 一一 镎铜 一一 钒锡 铁钚 ",
   j56y7="铀铜 一一 铅锡 一一 金汞 镎铁 银钒 一一 铁镎 汞金 一一 一一 ",
   k12j5="一一 银铀 一一 铁钚 汞汞 钚铁 锡钒 一一 一一 铅金 一一 金铅 ",
   k25x1="一一 一一 钒锡 铁钚 汞汞 钚铁 一一 一一 铜镎 铅金 一一 金铅 ",
   k26x5="汞锡 一一 一一 锰铁 铜钒 铅银 一一 一一 一一 银铅 钒铜 铁锰 ",
   k2j56="镎铜 一一 一一 铁钚 汞汞 钚铁 锡钒 一一 铜镎 一一 一一 金铅 ",
   k34x2="铅铜 一一 一一 一一 银汞 钒铁 铁钒 汞银 一一 锡金 一一 铜铅 ",
   k56x4="汞金 一一 锡铅 一一 铜铀 一一 一一 金汞 镎铁 一一 钒银 铁镎 ",
   n25x6="钒铜 铁锰 汞锡 一一 一一 锰铁 铜钒 铅银 一一 一一 一一 银铅 ",
   n26y5="一一 一一 锡汞 锰铁 铜钒 铅银 一一 一一 一一 银铅 钒铜 铁锰 ",
   n45y2="汞钒 一一 一一 铀金 一一 铅铅 一一 金铀 镎锡 一一 钒汞 铁铁 ",
   n67x2="一一 金铀 一一 一一 钒汞 铁铁 汞钒 一一 锡镎 铀金 一一 铅铅 ",
  j136y7="一一 一一 锡铅 铀铜 一一 铅锡 一一 金汞 镎铁 银钒 一一 铁镎 ",
  j167y2="汞金 一一 一一 一一 铜铀 铅锡 一一 金汞 镎铁 一一 钒银 铁镎 ",
  j246y3="汞汞 钚铁 锡钒 一一 铜镎 一一 一一 金铅 镎铜 一一 一一 铁钚 ",
  j26y34="汞汞 钚铁 锡钒 铀银 一一 一一 一一 金铅 镎铜 一一 一一 铁钚 ",
  j2k6x5="汞汞 钚铁 一一 一一 铜镎 铅金 一一 一一 一一 银铀 钒锡 铁钚 ",
  j2k6y3="汞汞 钚铁 锡钒 一一 一一 铅金 一一 金铅 一一 一一 钒锡 铁钚 ",
  j346y5="镎铜 一一 钒锡 铁钚 汞汞 钚铁 一一 一一 铜镎 一一 一一 金铅 ",
  j3k5x4="汞金 一一 锡铅 铀铜 一一 一一 一一 金汞 镎铁 银钒 一一 铁镎 ",
  k135x4="一一 铜铀 铅锡 一一 一一 镎铁 一一 钒银 铁镎 汞金 一一 锡铅 ",
  k157x6="汞汞 钚铁 锡钒 一一 铜镎 铅金 一一 一一 镎铜 一一 一一 铁钚 ",
  k1j6y7="一一 铜铀 铅锡 一一 金汞 镎铁 一一 钒银 铁镎 汞金 一一 一一 ",
  k257x1="镎铜 一一 钒锡 铁钚 汞汞 钚铁 一一 一一 铜镎 铅金 一一 一一 ",
  k25x17="一一 银铀 钒锡 铁钚 汞汞 钚铁 一一 一一 铜镎 铅金 一一 一一 ",
  k2j5x1="一一 一一 钒锡 铁钚 汞汞 钚铁 锡钒 一一 一一 铅金 一一 金铅 ",
  k2j5y6="镎铜 一一 一一 铁钚 汞汞 钚铁 锡钒 铀银 一一 一一 一一 金铅 ",
  k345x2="铀铜 一一 一一 一一 金汞 镎铁 银钒 一一 铁镎 汞金 一一 锡铅 ",
  n167x4="汞金 一一 一一 铀铜 一一 铅锡 一一 金汞 镎铁 银钒 一一 铁镎 ",
  n345y7="一一 铜铀 一一 一一 金汞 镎铁 一一 钒银 铁镎 汞金 一一 锡铅 ",
 j2k56x4="汞汞 钚铁 一一 一一 铜镎 一一 一一 金铅 镎铜 一一 钒锡 铁钚 ",
 k2j56y7="镎铜 一一 一一 铁钚 汞汞 钚铁 锡钒 一一 铜镎 铅金 一一 一一 ";

function cgdae() { var d=document
 d.writeln(o.slice(12,36).concat(o.slice(0,14)))
 d.writeln(o.slice(27,36).concat(o.slice(0,29)))
 d.writeln(o.slice( 6,36).concat(o.slice(0, 8)))
 d.writeln(o.slice(21,36).concat(o.slice(0,23)))
 d.writeln(o.slice( 0,36).concat(o.slice(0, 2))) }

function dadgad() { var d=document
 d.writeln(o.slice( 6,36).concat(o.slice(0, 8)))
 d.writeln(o.slice(27,36).concat(o.slice(0,29)))
 d.writeln(o.slice(21,36).concat(o.slice(0,23)))
 d.writeln(o.slice( 6,36).concat(o.slice(0, 8)))
 d.writeln(o.slice(27,36).concat(o.slice(0,29)))
 d.writeln(o.slice( 6,36).concat(o.slice(0, 8))) }

function dgdgbd() { var d=document
 d.writeln(o.slice( 6,36).concat(o.slice(0, 8)))
 d.writeln(o.slice(33,36).concat(o.slice(0,35)))
 d.writeln(o.slice(21,36).concat(o.slice(0,23)))
 d.writeln(o.slice( 6,36).concat(o.slice(0, 8)))
 d.writeln(o.slice(21,36).concat(o.slice(0,23)))
 d.writeln(o.slice( 6,36).concat(o.slice(0, 8))) }

function eadgbe() { var d=document
 d.writeln(o.slice(12,36).concat(o.slice(0,14)))
 d.writeln(o.slice(33,36).concat(o.slice(0,35)))
 d.writeln(o.slice(21,36).concat(o.slice(0,23)))
 d.writeln(o.slice( 6,36).concat(o.slice(0, 8)))
 d.writeln(o.slice(27,36).concat(o.slice(0,29)))
 d.writeln(o.slice(12,36).concat(o.slice(0,14))) }

function eadgcf() { var d=document
 d.writeln(o.slice(15,36).concat(o.slice(0,17)))
 d.writeln(o.slice( 0,36).concat(o.slice(0, 2)))
 d.writeln(o.slice(21,36).concat(o.slice(0,23)))
 d.writeln(o.slice( 6,36).concat(o.slice(0, 8)))
 d.writeln(o.slice(27,36).concat(o.slice(0,29)))
 d.writeln(o.slice(12,36).concat(o.slice(0,14))) }

function fkbjdn() { var d=document
 d.writeln(o.slice( 6,36).concat(o.slice(0, 8)))
 d.writeln(o.slice(30,36).concat(o.slice(0,32)))
 d.writeln(o.slice(18,36).concat(o.slice(0,20)))
 d.writeln(o.slice( 6,36).concat(o.slice(0, 8)))
 d.writeln(o.slice(30,36).concat(o.slice(0,32)))
 d.writeln(o.slice(18,36).concat(o.slice(0,20))) }

function guqin() { var d=document
 d.writeln(o.slice(21,36).concat(o.slice(0,23)))
 d.writeln(o.slice(27,36).concat(o.slice(0,29)))
 d.writeln(o.slice( 0,36).concat(o.slice(0, 2)))
 d.writeln(o.slice( 6,36).concat(o.slice(0, 8)))
 d.writeln(o.slice(12,36).concat(o.slice(0,14)))
 d.writeln(o.slice(21,36).concat(o.slice(0,23)))
 d.writeln(o.slice(27,36).concat(o.slice(0,29))) }

function serialism() {
 var nt = new Date()
 var sr = document.getElementById("qe")
 sr.innerHTML=nt.getTime() }
