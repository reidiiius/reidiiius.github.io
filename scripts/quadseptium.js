/* Copyright 2014 Reid Netterville III */

  var uc = ['\u25A1','\u25A0']

  var z_i0 = [uc[1],uc[1],uc[1],uc[1],uc[1],uc[1],uc[1],uc[1],uc[1],uc[1],uc[1],uc[1]],
      z_j2 = [uc[0],uc[1],uc[0],uc[1],uc[0],uc[1],uc[0],uc[0],uc[0],uc[1],uc[1],uc[0]],
      z_j3 = [uc[0],uc[1],uc[0],uc[1],uc[0],uc[1],uc[0],uc[0],uc[1],uc[0],uc[0],uc[1]],
      z_j5 = [uc[0],uc[0],uc[1],uc[1],uc[0],uc[1],uc[0],uc[0],uc[1],uc[0],uc[1],uc[0]],
      z_j6 = [uc[0],uc[1],uc[0],uc[0],uc[1],uc[1],uc[0],uc[0],uc[1],uc[0],uc[1],uc[0]],
      z_k1 = [uc[0],uc[1],uc[0],uc[1],uc[0],uc[1],uc[0],uc[1],uc[0],uc[0],uc[1],uc[0]],
      z_k2 = [uc[0],uc[1],uc[0],uc[1],uc[0],uc[1],uc[0],uc[0],uc[1],uc[1],uc[0],uc[0]],
      z_k5 = [uc[0],uc[1],uc[1],uc[0],uc[0],uc[1],uc[0],uc[0],uc[1],uc[0],uc[1],uc[0]],
      z_k6 = [uc[0],uc[1],uc[0],uc[1],uc[1],uc[0],uc[0],uc[0],uc[1],uc[0],uc[1],uc[0]],
      z_n0 = [uc[0],uc[1],uc[0],uc[1],uc[0],uc[1],uc[0],uc[0],uc[1],uc[0],uc[1],uc[0]],
     z_j17 = [uc[0],uc[1],uc[0],uc[1],uc[0],uc[0],uc[0],uc[1],uc[1],uc[0],uc[1],uc[0]],
     z_j23 = [uc[0],uc[1],uc[0],uc[1],uc[0],uc[1],uc[0],uc[0],uc[0],uc[1],uc[0],uc[1]],
     z_j25 = [uc[0],uc[0],uc[1],uc[1],uc[0],uc[1],uc[0],uc[0],uc[0],uc[1],uc[1],uc[0]],
     z_j26 = [uc[0],uc[1],uc[0],uc[0],uc[1],uc[1],uc[0],uc[0],uc[0],uc[1],uc[1],uc[0]],
     z_j36 = [uc[0],uc[1],uc[0],uc[0],uc[1],uc[1],uc[0],uc[0],uc[1],uc[0],uc[0],uc[1]],
     z_j56 = [uc[0],uc[0],uc[1],uc[0],uc[1],uc[1],uc[0],uc[0],uc[1],uc[0],uc[1],uc[0]],
     z_k12 = [uc[0],uc[1],uc[0],uc[1],uc[0],uc[1],uc[0],uc[1],uc[0],uc[1],uc[0],uc[0]],
     z_k15 = [uc[0],uc[1],uc[1],uc[0],uc[0],uc[1],uc[0],uc[1],uc[0],uc[0],uc[1],uc[0]],
     z_k25 = [uc[0],uc[1],uc[1],uc[0],uc[0],uc[1],uc[0],uc[0],uc[1],uc[1],uc[0],uc[0]],
     z_k26 = [uc[0],uc[1],uc[0],uc[1],uc[1],uc[0],uc[0],uc[0],uc[1],uc[1],uc[0],uc[0]],
     z_k34 = [uc[0],uc[0],uc[0],uc[1],uc[0],uc[1],uc[0],uc[0],uc[1],uc[0],uc[1],uc[1]],
     z_k56 = [uc[0],uc[1],uc[1],uc[0],uc[1],uc[0],uc[0],uc[0],uc[1],uc[0],uc[1],uc[0]],
    z_j236 = [uc[0],uc[1],uc[0],uc[0],uc[1],uc[1],uc[0],uc[0],uc[0],uc[1],uc[0],uc[1]],
    z_j256 = [uc[0],uc[0],uc[1],uc[0],uc[1],uc[1],uc[0],uc[0],uc[0],uc[1],uc[1],uc[0]],
    z_j2k5 = [uc[0],uc[1],uc[1],uc[0],uc[0],uc[1],uc[0],uc[0],uc[0],uc[1],uc[1],uc[0]],
    z_j2k6 = [uc[0],uc[1],uc[0],uc[1],uc[1],uc[0],uc[0],uc[0],uc[0],uc[1],uc[1],uc[0]],
    z_j2y3 = [uc[0],uc[1],uc[0],uc[1],uc[0],uc[1],uc[0],uc[0],uc[0],uc[0],uc[1],uc[1]],
    z_j3k5 = [uc[0],uc[1],uc[1],uc[0],uc[0],uc[1],uc[0],uc[0],uc[1],uc[0],uc[0],uc[1]],
    z_j3k6 = [uc[0],uc[1],uc[0],uc[1],uc[1],uc[0],uc[0],uc[0],uc[1],uc[0],uc[0],uc[1]],
    z_j5y6 = [uc[0],uc[0],uc[0],uc[1],uc[1],uc[1],uc[0],uc[0],uc[1],uc[0],uc[1],uc[0]],
    z_k125 = [uc[0],uc[1],uc[1],uc[0],uc[0],uc[1],uc[0],uc[1],uc[0],uc[1],uc[0],uc[0]],
    z_k1j5 = [uc[0],uc[0],uc[1],uc[1],uc[0],uc[1],uc[0],uc[1],uc[0],uc[0],uc[1],uc[0]],
    z_k1j6 = [uc[0],uc[1],uc[0],uc[0],uc[1],uc[1],uc[0],uc[1],uc[0],uc[0],uc[1],uc[0]],
    z_k256 = [uc[0],uc[1],uc[1],uc[0],uc[1],uc[0],uc[0],uc[0],uc[1],uc[1],uc[0],uc[0]],
    z_k2j5 = [uc[0],uc[0],uc[1],uc[1],uc[0],uc[1],uc[0],uc[0],uc[1],uc[1],uc[0],uc[0]],
    z_k2j6 = [uc[0],uc[1],uc[0],uc[0],uc[1],uc[1],uc[0],uc[0],uc[1],uc[1],uc[0],uc[0]],
    z_k2x1 = [uc[0],uc[1],uc[0],uc[1],uc[0],uc[1],uc[0],uc[1],uc[1],uc[0],uc[0],uc[0]],
    z_k6x5 = [uc[0],uc[1],uc[1],uc[1],uc[0],uc[0],uc[0],uc[0],uc[1],uc[0],uc[1],uc[0]],
    z_n167 = [uc[0],uc[0],uc[1],uc[0],uc[0],uc[1],uc[0],uc[0],uc[1],uc[1],uc[0],uc[1]],
    z_n345 = [uc[0],uc[1],uc[0],uc[0],uc[1],uc[0],uc[0],uc[1],uc[0],uc[1],uc[1],uc[0]],
    z_n5y2 = [uc[1],uc[1],uc[0],uc[0],uc[1],uc[0],uc[0],uc[0],uc[1],uc[1],uc[0],uc[0]],
    z_n6x2 = [uc[0],uc[0],uc[1],uc[0],uc[0],uc[1],uc[1],uc[0],uc[0],uc[1],uc[1],uc[0]],
   z_j17k2 = [uc[0],uc[1],uc[0],uc[1],uc[0],uc[0],uc[0],uc[1],uc[1],uc[1],uc[0],uc[0]],
   z_j17y2 = [uc[0],uc[1],uc[0],uc[1],uc[0],uc[0],uc[0],uc[0],uc[1],uc[1],uc[1],uc[0]],
   z_j23k6 = [uc[0],uc[1],uc[0],uc[1],uc[1],uc[0],uc[0],uc[0],uc[0],uc[1],uc[0],uc[1]],
   z_j25y6 = [uc[0],uc[0],uc[0],uc[1],uc[1],uc[1],uc[0],uc[0],uc[0],uc[1],uc[1],uc[0]],
   z_j26y3 = [uc[0],uc[1],uc[0],uc[0],uc[1],uc[1],uc[0],uc[0],uc[0],uc[0],uc[1],uc[1]],
   z_j2k34 = [uc[0],uc[0],uc[0],uc[1],uc[0],uc[1],uc[0],uc[0],uc[0],uc[1],uc[1],uc[1]],
   z_j2k56 = [uc[0],uc[1],uc[1],uc[0],uc[1],uc[0],uc[0],uc[0],uc[0],uc[1],uc[1],uc[0]],
   z_j56y7 = [uc[0],uc[0],uc[1],uc[0],uc[0],uc[1],uc[1],uc[0],uc[1],uc[0],uc[1],uc[0]],
   z_k12j5 = [uc[0],uc[0],uc[1],uc[1],uc[0],uc[1],uc[0],uc[1],uc[0],uc[1],uc[0],uc[0]],
   z_k25x1 = [uc[0],uc[1],uc[1],uc[0],uc[0],uc[1],uc[0],uc[1],uc[1],uc[0],uc[0],uc[0]],
   z_k26x5 = [uc[0],uc[1],uc[1],uc[1],uc[0],uc[0],uc[0],uc[0],uc[1],uc[1],uc[0],uc[0]],
   z_k2j56 = [uc[0],uc[0],uc[1],uc[0],uc[1],uc[1],uc[0],uc[0],uc[1],uc[1],uc[0],uc[0]],
   z_k34x2 = [uc[0],uc[0],uc[0],uc[1],uc[0],uc[1],uc[0],uc[0],uc[1],uc[1],uc[1],uc[0]],
   z_k56x4 = [uc[1],uc[1],uc[0],uc[0],uc[1],uc[0],uc[0],uc[0],uc[1],uc[0],uc[1],uc[0]],
   z_n25x6 = [uc[0],uc[0],uc[0],uc[1],uc[1],uc[1],uc[0],uc[0],uc[0],uc[0],uc[1],uc[1]],
   z_n26y5 = [uc[0],uc[1],uc[1],uc[1],uc[0],uc[0],uc[0],uc[1],uc[1],uc[0],uc[0],uc[0]],
   z_n45y2 = [uc[0],uc[1],uc[0],uc[0],uc[1],uc[0],uc[0],uc[0],uc[1],uc[1],uc[0],uc[1]],
   z_n67x2 = [uc[0],uc[0],uc[1],uc[0],uc[0],uc[1],uc[0],uc[1],uc[0],uc[1],uc[1],uc[0]],
  z_j136y7 = [uc[0],uc[1],uc[0],uc[0],uc[0],uc[1],uc[0],uc[1],uc[1],uc[0],uc[0],uc[1]],
  z_j167y2 = [uc[0],uc[1],uc[0],uc[0],uc[1],uc[0],uc[0],uc[0],uc[1],uc[1],uc[1],uc[0]],
  z_j246y3 = [uc[1],uc[1],uc[0],uc[0],uc[1],uc[1],uc[0],uc[0],uc[0],uc[0],uc[1],uc[0]],
  z_j26y34 = [uc[1],uc[1],uc[0],uc[0],uc[1],uc[1],uc[0],uc[0],uc[0],uc[0],uc[0],uc[1]],
  z_j2k6x5 = [uc[0],uc[1],uc[1],uc[1],uc[0],uc[0],uc[0],uc[0],uc[0],uc[1],uc[1],uc[0]],
  z_j2k6y3 = [uc[0],uc[1],uc[0],uc[1],uc[1],uc[0],uc[0],uc[0],uc[0],uc[0],uc[1],uc[1]],
  z_j346y5 = [uc[0],uc[1],uc[1],uc[0],uc[1],uc[1],uc[0],uc[0],uc[1],uc[0],uc[0],uc[0]],
  z_j3k5x4 = [uc[1],uc[1],uc[0],uc[0],uc[0],uc[1],uc[0],uc[0],uc[1],uc[0],uc[0],uc[1]],
  z_k135x4 = [uc[0],uc[1],uc[0],uc[0],uc[0],uc[1],uc[0],uc[1],uc[0],uc[0],uc[1],uc[1]],
  z_k157x6 = [uc[0],uc[1],uc[1],uc[0],uc[1],uc[1],uc[0],uc[0],uc[0],uc[0],uc[1],uc[0]],
  z_k1j6y7 = [uc[0],uc[1],uc[0],uc[0],uc[0],uc[1],uc[1],uc[1],uc[0],uc[0],uc[1],uc[0]],
  z_k257x1 = [uc[0],uc[1],uc[1],uc[0],uc[0],uc[1],uc[1],uc[0],uc[1],uc[0],uc[0],uc[0]],
  z_k25x17 = [uc[0],uc[1],uc[1],uc[0],uc[0],uc[1],uc[1],uc[1],uc[0],uc[0],uc[0],uc[0]],
  z_k2j5x1 = [uc[0],uc[0],uc[1],uc[1],uc[0],uc[1],uc[0],uc[1],uc[1],uc[0],uc[0],uc[0]],
  z_k2j5y6 = [uc[0],uc[0],uc[0],uc[1],uc[1],uc[1],uc[0],uc[0],uc[1],uc[1],uc[0],uc[0]],
  z_k345x2 = [uc[0],uc[0],uc[1],uc[0],uc[0],uc[1],uc[0],uc[0],uc[1],uc[1],uc[1],uc[0]],
  z_n167x4 = [uc[0],uc[1],uc[0],uc[0],uc[0],uc[1],uc[0],uc[0],uc[1],uc[1],uc[0],uc[1]],
  z_n345y7 = [uc[0],uc[1],uc[0],uc[0],uc[0],uc[1],uc[0],uc[1],uc[0],uc[1],uc[1],uc[0]],
 z_j2k56x4 = [uc[1],uc[1],uc[0],uc[0],uc[1],uc[0],uc[0],uc[0],uc[0],uc[1],uc[1],uc[0]],
 z_k2j56y7 = [uc[0],uc[0],uc[1],uc[0],uc[0],uc[1],uc[1],uc[0],uc[1],uc[1],uc[0],uc[0]]

function rR(z) {

  var mx = [
  z.slice( 0,12).concat(z.slice( 0, 1)),
  z.slice( 7,12).concat(z.slice( 0, 8)),
  z.slice( 2,12).concat(z.slice( 0, 3)),
  z.slice( 9,12).concat(z.slice( 0,10)),
  z.slice( 4,12).concat(z.slice( 0, 5)),
  z.slice(11,12).concat(z.slice( 0,12)),
  z.slice( 6,12).concat(z.slice( 0, 7))]

  var dmt=document
  dmt.getElementById("a006").innerHTML = mx[6].slice(0,1)
  dmt.getElementById("a005").innerHTML = mx[5].slice(0,1)
  dmt.getElementById("a004").innerHTML = mx[4].slice(0,1)
  dmt.getElementById("a003").innerHTML = mx[3].slice(0,1)
  dmt.getElementById("a002").innerHTML = mx[2].slice(0,1)
  dmt.getElementById("a001").innerHTML = mx[1].slice(0,1)
  dmt.getElementById("a000").innerHTML = mx[0].slice(0,1)

  dmt.getElementById("a016").innerHTML = mx[6].slice(1,2)
  dmt.getElementById("a015").innerHTML = mx[5].slice(1,2)
  dmt.getElementById("a014").innerHTML = mx[4].slice(1,2)
  dmt.getElementById("a013").innerHTML = mx[3].slice(1,2)
  dmt.getElementById("a012").innerHTML = mx[2].slice(1,2)
  dmt.getElementById("a011").innerHTML = mx[1].slice(1,2)
  dmt.getElementById("a010").innerHTML = mx[0].slice(1,2)

  dmt.getElementById("a026").innerHTML = mx[6].slice(2,3)
  dmt.getElementById("a025").innerHTML = mx[5].slice(2,3)
  dmt.getElementById("a024").innerHTML = mx[4].slice(2,3)
  dmt.getElementById("a023").innerHTML = mx[3].slice(2,3)
  dmt.getElementById("a022").innerHTML = mx[2].slice(2,3)
  dmt.getElementById("a021").innerHTML = mx[1].slice(2,3)
  dmt.getElementById("a020").innerHTML = mx[0].slice(2,3)

  dmt.getElementById("a036").innerHTML = mx[6].slice(3,4)
  dmt.getElementById("a035").innerHTML = mx[5].slice(3,4)
  dmt.getElementById("a034").innerHTML = mx[4].slice(3,4)
  dmt.getElementById("a033").innerHTML = mx[3].slice(3,4)
  dmt.getElementById("a032").innerHTML = mx[2].slice(3,4)
  dmt.getElementById("a031").innerHTML = mx[1].slice(3,4)
  dmt.getElementById("a030").innerHTML = mx[0].slice(3,4)

  dmt.getElementById("a046").innerHTML = mx[6].slice(4,5)
  dmt.getElementById("a045").innerHTML = mx[5].slice(4,5)
  dmt.getElementById("a044").innerHTML = mx[4].slice(4,5)
  dmt.getElementById("a043").innerHTML = mx[3].slice(4,5)
  dmt.getElementById("a042").innerHTML = mx[2].slice(4,5)
  dmt.getElementById("a041").innerHTML = mx[1].slice(4,5)
  dmt.getElementById("a040").innerHTML = mx[0].slice(4,5)

  dmt.getElementById("a056").innerHTML = mx[6].slice(5,6)
  dmt.getElementById("a055").innerHTML = mx[5].slice(5,6)
  dmt.getElementById("a054").innerHTML = mx[4].slice(5,6)
  dmt.getElementById("a053").innerHTML = mx[3].slice(5,6)
  dmt.getElementById("a052").innerHTML = mx[2].slice(5,6)
  dmt.getElementById("a051").innerHTML = mx[1].slice(5,6)
  dmt.getElementById("a050").innerHTML = mx[0].slice(5,6)

  dmt.getElementById("a066").innerHTML = mx[6].slice(6,7)
  dmt.getElementById("a065").innerHTML = mx[5].slice(6,7)
  dmt.getElementById("a064").innerHTML = mx[4].slice(6,7)
  dmt.getElementById("a063").innerHTML = mx[3].slice(6,7)
  dmt.getElementById("a062").innerHTML = mx[2].slice(6,7)
  dmt.getElementById("a061").innerHTML = mx[1].slice(6,7)
  dmt.getElementById("a060").innerHTML = mx[0].slice(6,7)

  dmt.getElementById("a076").innerHTML = mx[6].slice(7,8)
  dmt.getElementById("a075").innerHTML = mx[5].slice(7,8)
  dmt.getElementById("a074").innerHTML = mx[4].slice(7,8)
  dmt.getElementById("a073").innerHTML = mx[3].slice(7,8)
  dmt.getElementById("a072").innerHTML = mx[2].slice(7,8)
  dmt.getElementById("a071").innerHTML = mx[1].slice(7,8)
  dmt.getElementById("a070").innerHTML = mx[0].slice(7,8)

  dmt.getElementById("a086").innerHTML = mx[6].slice(8,9)
  dmt.getElementById("a085").innerHTML = mx[5].slice(8,9)
  dmt.getElementById("a084").innerHTML = mx[4].slice(8,9)
  dmt.getElementById("a083").innerHTML = mx[3].slice(8,9)
  dmt.getElementById("a082").innerHTML = mx[2].slice(8,9)
  dmt.getElementById("a081").innerHTML = mx[1].slice(8,9)
  dmt.getElementById("a080").innerHTML = mx[0].slice(8,9)

  dmt.getElementById("a096").innerHTML = mx[6].slice(9,10)
  dmt.getElementById("a095").innerHTML = mx[5].slice(9,10)
  dmt.getElementById("a094").innerHTML = mx[4].slice(9,10)
  dmt.getElementById("a093").innerHTML = mx[3].slice(9,10)
  dmt.getElementById("a092").innerHTML = mx[2].slice(9,10)
  dmt.getElementById("a091").innerHTML = mx[1].slice(9,10)
  dmt.getElementById("a090").innerHTML = mx[0].slice(9,10)

  dmt.getElementById("a106").innerHTML = mx[6].slice(10,11)
  dmt.getElementById("a105").innerHTML = mx[5].slice(10,11)
  dmt.getElementById("a104").innerHTML = mx[4].slice(10,11)
  dmt.getElementById("a103").innerHTML = mx[3].slice(10,11)
  dmt.getElementById("a102").innerHTML = mx[2].slice(10,11)
  dmt.getElementById("a101").innerHTML = mx[1].slice(10,11)
  dmt.getElementById("a100").innerHTML = mx[0].slice(10,11)

  dmt.getElementById("a116").innerHTML = mx[6].slice(11,12)
  dmt.getElementById("a115").innerHTML = mx[5].slice(11,12)
  dmt.getElementById("a114").innerHTML = mx[4].slice(11,12)
  dmt.getElementById("a113").innerHTML = mx[3].slice(11,12)
  dmt.getElementById("a112").innerHTML = mx[2].slice(11,12)
  dmt.getElementById("a111").innerHTML = mx[1].slice(11,12)
  dmt.getElementById("a110").innerHTML = mx[0].slice(11,12)

  dmt.getElementById("a126").innerHTML = mx[6].slice(12,13)
  dmt.getElementById("a125").innerHTML = mx[5].slice(12,13)
  dmt.getElementById("a124").innerHTML = mx[4].slice(12,13)
  dmt.getElementById("a123").innerHTML = mx[3].slice(12,13)
  dmt.getElementById("a122").innerHTML = mx[2].slice(12,13)
  dmt.getElementById("a121").innerHTML = mx[1].slice(12,13)
  dmt.getElementById("a120").innerHTML = mx[0].slice(12,13)
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
  function drk_at() {
    var instr = document.getElementById("dgrm").innerHTML
    var graph = instr.replace(/\u25A0/g,"@")
    document.getElementById("dgrm").innerHTML = graph
  }
  function lit_pc() {
    var instr = document.getElementById("dgrm").innerHTML
    var graph = instr.replace(/\u25A1/g,"%")
    document.getElementById("dgrm").innerHTML = graph
  }
  function at_lit() {
    var instr = document.getElementById("dgrm").innerHTML
    var graph = instr.replace(/@/g,"\u25A1")
    document.getElementById("dgrm").innerHTML = graph
  }
  function pc_drk() {
    var instr = document.getElementById("dgrm").innerHTML
    var graph = instr.replace(/%/g,"\u25A0")
    document.getElementById("dgrm").innerHTML = graph
  }
    drk_at(); lit_pc(); at_lit(); pc_drk()
}

