/* Copyright 2014-2015 Reid Netterville III */

"use strict";

  var uC = ['\u25A0','\u25A1']

  var septEnium = {
      z_i0:[uC[1],uC[1],uC[1],uC[1],uC[1],uC[1],uC[1],uC[1],uC[1],uC[1],uC[1],uC[1]],
      z_j2:[uC[0],uC[1],uC[0],uC[1],uC[0],uC[1],uC[0],uC[0],uC[0],uC[1],uC[1],uC[0]],
      z_j3:[uC[0],uC[1],uC[0],uC[1],uC[0],uC[1],uC[0],uC[0],uC[1],uC[0],uC[0],uC[1]],
      z_j5:[uC[0],uC[0],uC[1],uC[1],uC[0],uC[1],uC[0],uC[0],uC[1],uC[0],uC[1],uC[0]],
      z_j6:[uC[0],uC[1],uC[0],uC[0],uC[1],uC[1],uC[0],uC[0],uC[1],uC[0],uC[1],uC[0]],
      z_k1:[uC[0],uC[1],uC[0],uC[1],uC[0],uC[1],uC[0],uC[1],uC[0],uC[0],uC[1],uC[0]],
      z_k2:[uC[0],uC[1],uC[0],uC[1],uC[0],uC[1],uC[0],uC[0],uC[1],uC[1],uC[0],uC[0]],
      z_k5:[uC[0],uC[1],uC[1],uC[0],uC[0],uC[1],uC[0],uC[0],uC[1],uC[0],uC[1],uC[0]],
      z_k6:[uC[0],uC[1],uC[0],uC[1],uC[1],uC[0],uC[0],uC[0],uC[1],uC[0],uC[1],uC[0]],
      z_n0:[uC[0],uC[1],uC[0],uC[1],uC[0],uC[1],uC[0],uC[0],uC[1],uC[0],uC[1],uC[0]],
     z_j17:[uC[0],uC[1],uC[0],uC[1],uC[0],uC[0],uC[0],uC[1],uC[1],uC[0],uC[1],uC[0]],
     z_j23:[uC[0],uC[1],uC[0],uC[1],uC[0],uC[1],uC[0],uC[0],uC[0],uC[1],uC[0],uC[1]],
     z_j25:[uC[0],uC[0],uC[1],uC[1],uC[0],uC[1],uC[0],uC[0],uC[0],uC[1],uC[1],uC[0]],
     z_j26:[uC[0],uC[1],uC[0],uC[0],uC[1],uC[1],uC[0],uC[0],uC[0],uC[1],uC[1],uC[0]],
     z_j36:[uC[0],uC[1],uC[0],uC[0],uC[1],uC[1],uC[0],uC[0],uC[1],uC[0],uC[0],uC[1]],
     z_j56:[uC[0],uC[0],uC[1],uC[0],uC[1],uC[1],uC[0],uC[0],uC[1],uC[0],uC[1],uC[0]],
     z_k12:[uC[0],uC[1],uC[0],uC[1],uC[0],uC[1],uC[0],uC[1],uC[0],uC[1],uC[0],uC[0]],
     z_k15:[uC[0],uC[1],uC[1],uC[0],uC[0],uC[1],uC[0],uC[1],uC[0],uC[0],uC[1],uC[0]],
     z_k25:[uC[0],uC[1],uC[1],uC[0],uC[0],uC[1],uC[0],uC[0],uC[1],uC[1],uC[0],uC[0]],
     z_k26:[uC[0],uC[1],uC[0],uC[1],uC[1],uC[0],uC[0],uC[0],uC[1],uC[1],uC[0],uC[0]],
     z_k34:[uC[0],uC[0],uC[0],uC[1],uC[0],uC[1],uC[0],uC[0],uC[1],uC[0],uC[1],uC[1]],
     z_k56:[uC[0],uC[1],uC[1],uC[0],uC[1],uC[0],uC[0],uC[0],uC[1],uC[0],uC[1],uC[0]],
    z_j236:[uC[0],uC[1],uC[0],uC[0],uC[1],uC[1],uC[0],uC[0],uC[0],uC[1],uC[0],uC[1]],
    z_j256:[uC[0],uC[0],uC[1],uC[0],uC[1],uC[1],uC[0],uC[0],uC[0],uC[1],uC[1],uC[0]],
    z_j2k5:[uC[0],uC[1],uC[1],uC[0],uC[0],uC[1],uC[0],uC[0],uC[0],uC[1],uC[1],uC[0]],
    z_j2k6:[uC[0],uC[1],uC[0],uC[1],uC[1],uC[0],uC[0],uC[0],uC[0],uC[1],uC[1],uC[0]],
    z_j2y3:[uC[0],uC[1],uC[0],uC[1],uC[0],uC[1],uC[0],uC[0],uC[0],uC[0],uC[1],uC[1]],
    z_j3k5:[uC[0],uC[1],uC[1],uC[0],uC[0],uC[1],uC[0],uC[0],uC[1],uC[0],uC[0],uC[1]],
    z_j3k6:[uC[0],uC[1],uC[0],uC[1],uC[1],uC[0],uC[0],uC[0],uC[1],uC[0],uC[0],uC[1]],
    z_j5y6:[uC[0],uC[0],uC[0],uC[1],uC[1],uC[1],uC[0],uC[0],uC[1],uC[0],uC[1],uC[0]],
    z_k125:[uC[0],uC[1],uC[1],uC[0],uC[0],uC[1],uC[0],uC[1],uC[0],uC[1],uC[0],uC[0]],
    z_k1j5:[uC[0],uC[0],uC[1],uC[1],uC[0],uC[1],uC[0],uC[1],uC[0],uC[0],uC[1],uC[0]],
    z_k1j6:[uC[0],uC[1],uC[0],uC[0],uC[1],uC[1],uC[0],uC[1],uC[0],uC[0],uC[1],uC[0]],
    z_k256:[uC[0],uC[1],uC[1],uC[0],uC[1],uC[0],uC[0],uC[0],uC[1],uC[1],uC[0],uC[0]],
    z_k2j5:[uC[0],uC[0],uC[1],uC[1],uC[0],uC[1],uC[0],uC[0],uC[1],uC[1],uC[0],uC[0]],
    z_k2j6:[uC[0],uC[1],uC[0],uC[0],uC[1],uC[1],uC[0],uC[0],uC[1],uC[1],uC[0],uC[0]],
    z_k2x1:[uC[0],uC[1],uC[0],uC[1],uC[0],uC[1],uC[0],uC[1],uC[1],uC[0],uC[0],uC[0]],
    z_k6x5:[uC[0],uC[1],uC[1],uC[1],uC[0],uC[0],uC[0],uC[0],uC[1],uC[0],uC[1],uC[0]],
    z_n167:[uC[0],uC[0],uC[1],uC[0],uC[0],uC[1],uC[0],uC[0],uC[1],uC[1],uC[0],uC[1]],
    z_n345:[uC[0],uC[1],uC[0],uC[0],uC[1],uC[0],uC[0],uC[1],uC[0],uC[1],uC[1],uC[0]],
    z_n5y2:[uC[1],uC[1],uC[0],uC[0],uC[1],uC[0],uC[0],uC[0],uC[1],uC[1],uC[0],uC[0]],
    z_n6x2:[uC[0],uC[0],uC[1],uC[0],uC[0],uC[1],uC[1],uC[0],uC[0],uC[1],uC[1],uC[0]],
   z_j17k2:[uC[0],uC[1],uC[0],uC[1],uC[0],uC[0],uC[0],uC[1],uC[1],uC[1],uC[0],uC[0]],
   z_j17y2:[uC[0],uC[1],uC[0],uC[1],uC[0],uC[0],uC[0],uC[0],uC[1],uC[1],uC[1],uC[0]],
   z_j23k6:[uC[0],uC[1],uC[0],uC[1],uC[1],uC[0],uC[0],uC[0],uC[0],uC[1],uC[0],uC[1]],
   z_j25y6:[uC[0],uC[0],uC[0],uC[1],uC[1],uC[1],uC[0],uC[0],uC[0],uC[1],uC[1],uC[0]],
   z_j26y3:[uC[0],uC[1],uC[0],uC[0],uC[1],uC[1],uC[0],uC[0],uC[0],uC[0],uC[1],uC[1]],
   z_j2k34:[uC[0],uC[0],uC[0],uC[1],uC[0],uC[1],uC[0],uC[0],uC[0],uC[1],uC[1],uC[1]],
   z_j2k56:[uC[0],uC[1],uC[1],uC[0],uC[1],uC[0],uC[0],uC[0],uC[0],uC[1],uC[1],uC[0]],
   z_j34k6:[uC[1],uC[1],uC[0],uC[1],uC[1],uC[0],uC[0],uC[0],uC[1],uC[0],uC[0],uC[0]],
   z_j56y7:[uC[0],uC[0],uC[1],uC[0],uC[0],uC[1],uC[1],uC[0],uC[1],uC[0],uC[1],uC[0]],
   z_k12j5:[uC[0],uC[0],uC[1],uC[1],uC[0],uC[1],uC[0],uC[1],uC[0],uC[1],uC[0],uC[0]],
   z_k17j5:[uC[0],uC[0],uC[1],uC[1],uC[0],uC[1],uC[1],uC[0],uC[0],uC[0],uC[1],uC[0]],
   z_k25x1:[uC[0],uC[1],uC[1],uC[0],uC[0],uC[1],uC[0],uC[1],uC[1],uC[0],uC[0],uC[0]],
   z_k26x5:[uC[0],uC[1],uC[1],uC[1],uC[0],uC[0],uC[0],uC[0],uC[1],uC[1],uC[0],uC[0]],
   z_k2j56:[uC[0],uC[0],uC[1],uC[0],uC[1],uC[1],uC[0],uC[0],uC[1],uC[1],uC[0],uC[0]],
   z_k34x2:[uC[0],uC[0],uC[0],uC[1],uC[0],uC[1],uC[0],uC[0],uC[1],uC[1],uC[1],uC[0]],
   z_k56x4:[uC[1],uC[1],uC[0],uC[0],uC[1],uC[0],uC[0],uC[0],uC[1],uC[0],uC[1],uC[0]],
   z_n25x6:[uC[0],uC[0],uC[0],uC[1],uC[1],uC[1],uC[0],uC[0],uC[0],uC[0],uC[1],uC[1]],
   z_n26y5:[uC[0],uC[1],uC[1],uC[1],uC[0],uC[0],uC[0],uC[1],uC[1],uC[0],uC[0],uC[0]],
   z_n45y2:[uC[0],uC[1],uC[0],uC[0],uC[1],uC[0],uC[0],uC[0],uC[1],uC[1],uC[0],uC[1]],
   z_n67x2:[uC[0],uC[0],uC[1],uC[0],uC[0],uC[1],uC[0],uC[1],uC[0],uC[1],uC[1],uC[0]],
  z_j136y7:[uC[0],uC[1],uC[0],uC[0],uC[0],uC[1],uC[0],uC[1],uC[1],uC[0],uC[0],uC[1]],
  z_j167y2:[uC[0],uC[1],uC[0],uC[0],uC[1],uC[0],uC[0],uC[0],uC[1],uC[1],uC[1],uC[0]],
  z_j246y3:[uC[1],uC[1],uC[0],uC[0],uC[1],uC[1],uC[0],uC[0],uC[0],uC[0],uC[1],uC[0]],
  z_j26y34:[uC[1],uC[1],uC[0],uC[0],uC[1],uC[1],uC[0],uC[0],uC[0],uC[0],uC[0],uC[1]],
  z_j2k6x5:[uC[0],uC[1],uC[1],uC[1],uC[0],uC[0],uC[0],uC[0],uC[0],uC[1],uC[1],uC[0]],
  z_j2k6y3:[uC[0],uC[1],uC[0],uC[1],uC[1],uC[0],uC[0],uC[0],uC[0],uC[0],uC[1],uC[1]],
  z_j346y5:[uC[0],uC[1],uC[1],uC[0],uC[1],uC[1],uC[0],uC[0],uC[1],uC[0],uC[0],uC[0]],
  z_j3k5x4:[uC[1],uC[1],uC[0],uC[0],uC[0],uC[1],uC[0],uC[0],uC[1],uC[0],uC[0],uC[1]],
  z_k135x4:[uC[0],uC[1],uC[0],uC[0],uC[0],uC[1],uC[0],uC[1],uC[0],uC[0],uC[1],uC[1]],
  z_k157x6:[uC[0],uC[1],uC[1],uC[0],uC[1],uC[1],uC[0],uC[0],uC[0],uC[0],uC[1],uC[0]],
  z_k1j6y7:[uC[0],uC[1],uC[0],uC[0],uC[0],uC[1],uC[1],uC[1],uC[0],uC[0],uC[1],uC[0]],
  z_k257x1:[uC[0],uC[1],uC[1],uC[0],uC[0],uC[1],uC[1],uC[0],uC[1],uC[0],uC[0],uC[0]],
  z_k25x17:[uC[0],uC[1],uC[1],uC[0],uC[0],uC[1],uC[1],uC[1],uC[0],uC[0],uC[0],uC[0]],
  z_k2j5x1:[uC[0],uC[0],uC[1],uC[1],uC[0],uC[1],uC[0],uC[1],uC[1],uC[0],uC[0],uC[0]],
  z_k2j5y6:[uC[0],uC[0],uC[0],uC[1],uC[1],uC[1],uC[0],uC[0],uC[1],uC[1],uC[0],uC[0]],
  z_k345x2:[uC[0],uC[0],uC[1],uC[0],uC[0],uC[1],uC[0],uC[0],uC[1],uC[1],uC[1],uC[0]],
  z_n167x4:[uC[0],uC[1],uC[0],uC[0],uC[0],uC[1],uC[0],uC[0],uC[1],uC[1],uC[0],uC[1]],
  z_n345y7:[uC[0],uC[1],uC[0],uC[0],uC[0],uC[1],uC[0],uC[1],uC[0],uC[1],uC[1],uC[0]],
 z_j2k56x4:[uC[1],uC[1],uC[0],uC[0],uC[1],uC[0],uC[0],uC[0],uC[0],uC[1],uC[1],uC[0]],
 z_j3k56x4:[uC[1],uC[1],uC[0],uC[0],uC[1],uC[0],uC[0],uC[0],uC[1],uC[0],uC[0],uC[1]],
 z_k1j56y7:[uC[0],uC[0],uC[1],uC[0],uC[0],uC[1],uC[1],uC[1],uC[0],uC[0],uC[1],uC[0]],
 z_k2j56y7:[uC[0],uC[0],uC[1],uC[0],uC[0],uC[1],uC[1],uC[0],uC[1],uC[1],uC[0],uC[0]]}

function hearth(z) {

  var mx = [
  z.slice( 0,12).concat(z.slice( 0, 1)),
  z.slice( 7,12).concat(z.slice( 0, 8)),
  z.slice( 2,12).concat(z.slice( 0, 3)),
  z.slice( 9,12).concat(z.slice( 0,10)),
  z.slice( 4,12).concat(z.slice( 0, 5)),
  z.slice(11,12).concat(z.slice( 0,12)),
  z.slice( 6,12).concat(z.slice( 0, 7))]

  var dmt=document
  dmt.getElementById("a006").textContent = mx[6].slice(0,1)
  dmt.getElementById("a005").textContent = mx[5].slice(0,1)
  dmt.getElementById("a004").textContent = mx[4].slice(0,1)
  dmt.getElementById("a003").textContent = mx[3].slice(0,1)
  dmt.getElementById("a002").textContent = mx[2].slice(0,1)
  dmt.getElementById("a001").textContent = mx[1].slice(0,1)
  dmt.getElementById("a000").textContent = mx[0].slice(0,1)

  dmt.getElementById("a016").textContent = mx[6].slice(1,2)
  dmt.getElementById("a015").textContent = mx[5].slice(1,2)
  dmt.getElementById("a014").textContent = mx[4].slice(1,2)
  dmt.getElementById("a013").textContent = mx[3].slice(1,2)
  dmt.getElementById("a012").textContent = mx[2].slice(1,2)
  dmt.getElementById("a011").textContent = mx[1].slice(1,2)
  dmt.getElementById("a010").textContent = mx[0].slice(1,2)

  dmt.getElementById("a026").textContent = mx[6].slice(2,3)
  dmt.getElementById("a025").textContent = mx[5].slice(2,3)
  dmt.getElementById("a024").textContent = mx[4].slice(2,3)
  dmt.getElementById("a023").textContent = mx[3].slice(2,3)
  dmt.getElementById("a022").textContent = mx[2].slice(2,3)
  dmt.getElementById("a021").textContent = mx[1].slice(2,3)
  dmt.getElementById("a020").textContent = mx[0].slice(2,3)

  dmt.getElementById("a036").textContent = mx[6].slice(3,4)
  dmt.getElementById("a035").textContent = mx[5].slice(3,4)
  dmt.getElementById("a034").textContent = mx[4].slice(3,4)
  dmt.getElementById("a033").textContent = mx[3].slice(3,4)
  dmt.getElementById("a032").textContent = mx[2].slice(3,4)
  dmt.getElementById("a031").textContent = mx[1].slice(3,4)
  dmt.getElementById("a030").textContent = mx[0].slice(3,4)

  dmt.getElementById("a046").textContent = mx[6].slice(4,5)
  dmt.getElementById("a045").textContent = mx[5].slice(4,5)
  dmt.getElementById("a044").textContent = mx[4].slice(4,5)
  dmt.getElementById("a043").textContent = mx[3].slice(4,5)
  dmt.getElementById("a042").textContent = mx[2].slice(4,5)
  dmt.getElementById("a041").textContent = mx[1].slice(4,5)
  dmt.getElementById("a040").textContent = mx[0].slice(4,5)

  dmt.getElementById("a056").textContent = mx[6].slice(5,6)
  dmt.getElementById("a055").textContent = mx[5].slice(5,6)
  dmt.getElementById("a054").textContent = mx[4].slice(5,6)
  dmt.getElementById("a053").textContent = mx[3].slice(5,6)
  dmt.getElementById("a052").textContent = mx[2].slice(5,6)
  dmt.getElementById("a051").textContent = mx[1].slice(5,6)
  dmt.getElementById("a050").textContent = mx[0].slice(5,6)

  dmt.getElementById("a066").textContent = mx[6].slice(6,7)
  dmt.getElementById("a065").textContent = mx[5].slice(6,7)
  dmt.getElementById("a064").textContent = mx[4].slice(6,7)
  dmt.getElementById("a063").textContent = mx[3].slice(6,7)
  dmt.getElementById("a062").textContent = mx[2].slice(6,7)
  dmt.getElementById("a061").textContent = mx[1].slice(6,7)
  dmt.getElementById("a060").textContent = mx[0].slice(6,7)

  dmt.getElementById("a076").textContent = mx[6].slice(7,8)
  dmt.getElementById("a075").textContent = mx[5].slice(7,8)
  dmt.getElementById("a074").textContent = mx[4].slice(7,8)
  dmt.getElementById("a073").textContent = mx[3].slice(7,8)
  dmt.getElementById("a072").textContent = mx[2].slice(7,8)
  dmt.getElementById("a071").textContent = mx[1].slice(7,8)
  dmt.getElementById("a070").textContent = mx[0].slice(7,8)

  dmt.getElementById("a086").textContent = mx[6].slice(8,9)
  dmt.getElementById("a085").textContent = mx[5].slice(8,9)
  dmt.getElementById("a084").textContent = mx[4].slice(8,9)
  dmt.getElementById("a083").textContent = mx[3].slice(8,9)
  dmt.getElementById("a082").textContent = mx[2].slice(8,9)
  dmt.getElementById("a081").textContent = mx[1].slice(8,9)
  dmt.getElementById("a080").textContent = mx[0].slice(8,9)

  dmt.getElementById("a096").textContent = mx[6].slice(9,10)
  dmt.getElementById("a095").textContent = mx[5].slice(9,10)
  dmt.getElementById("a094").textContent = mx[4].slice(9,10)
  dmt.getElementById("a093").textContent = mx[3].slice(9,10)
  dmt.getElementById("a092").textContent = mx[2].slice(9,10)
  dmt.getElementById("a091").textContent = mx[1].slice(9,10)
  dmt.getElementById("a090").textContent = mx[0].slice(9,10)

  dmt.getElementById("a106").textContent = mx[6].slice(10,11)
  dmt.getElementById("a105").textContent = mx[5].slice(10,11)
  dmt.getElementById("a104").textContent = mx[4].slice(10,11)
  dmt.getElementById("a103").textContent = mx[3].slice(10,11)
  dmt.getElementById("a102").textContent = mx[2].slice(10,11)
  dmt.getElementById("a101").textContent = mx[1].slice(10,11)
  dmt.getElementById("a100").textContent = mx[0].slice(10,11)

  dmt.getElementById("a116").textContent = mx[6].slice(11,12)
  dmt.getElementById("a115").textContent = mx[5].slice(11,12)
  dmt.getElementById("a114").textContent = mx[4].slice(11,12)
  dmt.getElementById("a113").textContent = mx[3].slice(11,12)
  dmt.getElementById("a112").textContent = mx[2].slice(11,12)
  dmt.getElementById("a111").textContent = mx[1].slice(11,12)
  dmt.getElementById("a110").textContent = mx[0].slice(11,12)

  dmt.getElementById("a126").textContent = mx[6].slice(12,13)
  dmt.getElementById("a125").textContent = mx[5].slice(12,13)
  dmt.getElementById("a124").textContent = mx[4].slice(12,13)
  dmt.getElementById("a123").textContent = mx[3].slice(12,13)
  dmt.getElementById("a122").textContent = mx[2].slice(12,13)
  dmt.getElementById("a121").textContent = mx[1].slice(12,13)
  dmt.getElementById("a120").textContent = mx[0].slice(12,13)
}

function crtBss(z) {  var dmt=document
  dmt.writeln(z.slice( 0,12).concat(z.slice( 0, 1)).join(' ')),
  dmt.writeln(z.slice( 7,12).concat(z.slice( 0, 8)).join(' ')),
  dmt.writeln(z.slice( 2,12).concat(z.slice( 0, 3)).join(' ')),
  dmt.writeln(z.slice( 9,12).concat(z.slice( 0,10)).join(' ')),
  dmt.writeln(z.slice( 4,12).concat(z.slice( 0, 5)).join(' ')),
  dmt.writeln(z.slice(11,12).concat(z.slice( 0,12)).join(' ')),
  dmt.writeln(z.slice( 6,12).concat(z.slice( 0, 7)).join(' '))
}

function crtGQn(z) {  var dmt=document
  dmt.writeln(z.slice( 2,12).concat(z.slice( 0, 3)).join(' ')),
  dmt.writeln(z.slice( 4,12).concat(z.slice( 0, 5)).join(' ')),
  dmt.writeln(z.slice( 7,12).concat(z.slice( 0, 8)).join(' ')),
  dmt.writeln(z.slice( 9,12).concat(z.slice( 0,10)).join(' ')),
  dmt.writeln(z.slice(11,12).concat(z.slice( 0,12)).join(' ')),
  dmt.writeln(z.slice( 2,12).concat(z.slice( 0, 3)).join(' ')),
  dmt.writeln(z.slice( 4,12).concat(z.slice( 0, 5)).join(' '))
}

function crtGtr(z) {  var dmt=document
  dmt.writeln(z.slice(11,12).concat(z.slice( 0,12)).join(' ')),
  dmt.writeln(z.slice( 6,12).concat(z.slice( 0, 7)).join(' ')),
  dmt.writeln(z.slice( 2,12).concat(z.slice( 0, 3)).join(' ')),
  dmt.writeln(z.slice( 9,12).concat(z.slice( 0,10)).join(' ')),
  dmt.writeln(z.slice( 4,12).concat(z.slice( 0, 5)).join(' ')),
  dmt.writeln(z.slice(11,12).concat(z.slice( 0,12)).join(' '))
}

function crtCll(z) {  var dmt=document
  dmt.writeln(z.slice(11,12).concat(z.slice( 0,12)).join(' ')),
  dmt.writeln(z.slice( 4,12).concat(z.slice( 0, 5)).join(' ')),
  dmt.writeln(z.slice( 9,12).concat(z.slice( 0,10)).join(' ')),
  dmt.writeln(z.slice( 2,12).concat(z.slice( 0, 3)).join(' ')),
  dmt.writeln(z.slice( 7,12).concat(z.slice( 0, 8)).join(' '))
}

function xchng() {
  var z = function darkToLight(x, y) {
    var instr = document.getElementById("dgrm").innerHTML
    var graph = instr.replace(x, y)
    document.getElementById("dgrm").innerHTML = graph
  }
     z(/\u25A0/g,"\u25C6")
    z(/\u25A1/g,"\u25C7")
   z(/\u25C6/g,"\u25A1")
  z(/\u25C7/g,"\u25A0")
}

