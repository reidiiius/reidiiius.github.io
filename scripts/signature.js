/*  Copyright 2014-2018 Reid Netterville III  */

"use strict";

var GemStone = new Object();

 GemStone.n0 = {  // 1392405136828
 fn:"PbFe ____ AuAg ____ AgAu ____ FePb HgCu ____ SnSn ____ CuHg ",
 cn:"HgCu ____ SnSn ____ CuHg PbFe ____ AuAg ____ AgAu ____ FePb ",
 gn:"AuAg ____ AgAu ____ FePb HgCu ____ SnSn ____ CuHg PbFe ____ ",
 dn:"SnSn ____ CuHg PbFe ____ AuAg ____ AgAu ____ FePb HgCu ____ ",
 an:"AgAu ____ FePb HgCu ____ SnSn ____ CuHg PbFe ____ AuAg ____ ",
 en:"CuHg PbFe ____ AuAg ____ AgAu ____ FePb HgCu ____ SnSn ____ ",
 bn:"FePb HgCu ____ SnSn ____ CuHg PbFe ____ AuAg ____ AgAu ____ "}

 GemStone.k6 = {  // 1392405236125
 fn:"PbCu ____ AuSn ____ ____ TiFe FeTi HgAg ____ SnAu ____ CuPb ",
 cn:"HgAg ____ SnAu ____ CuPb PbCu ____ AuSn ____ ____ TiFe FeTi ",
 gn:"AuSn ____ ____ TiFe FeTi HgAg ____ SnAu ____ CuPb PbCu ____ ",
 dn:"SnAu ____ CuPb PbCu ____ AuSn ____ ____ TiFe FeTi HgAg ____ ",
 an:"____ TiFe FeTi HgAg ____ SnAu ____ CuPb PbCu ____ AuSn ____ ",
 en:"CuPb PbCu ____ AuSn ____ ____ TiFe FeTi HgAg ____ SnAu ____ ",
 bn:"FeTi HgAg ____ SnAu ____ CuPb PbCu ____ AuSn ____ ____ TiFe "}

 GemStone.j17 = {  // 1392405282968
 fn:"PbCu ____ AuSn ____ AgHg TiFe FeTi ____ ____ SnAu ____ CuPb ",
 cn:"____ ____ SnAu ____ CuPb PbCu ____ AuSn ____ AgHg TiFe FeTi ",
 gn:"AuSn ____ AgHg TiFe FeTi ____ ____ SnAu ____ CuPb PbCu ____ ",
 dn:"SnAu ____ CuPb PbCu ____ AuSn ____ AgHg TiFe FeTi ____ ____ ",
 an:"AgHg TiFe FeTi ____ ____ SnAu ____ CuPb PbCu ____ AuSn ____ ",
 en:"CuPb PbCu ____ AuSn ____ AgHg TiFe FeTi ____ ____ SnAu ____ ",
 bn:"FeTi ____ ____ SnAu ____ CuPb PbCu ____ AuSn ____ AgHg TiFe "}

 GemStone.k6x5 = {  // 1392405397593
 fn:"PbCu ____ ____ ____ AgHg TiFe FeTi HgAg ____ SnAu ____ CuPb ",
 cn:"HgAg ____ SnAu ____ CuPb PbCu ____ ____ ____ AgHg TiFe FeTi ",
 gn:"____ ____ AgHg TiFe FeTi HgAg ____ SnAu ____ CuPb PbCu ____ ",
 dn:"SnAu ____ CuPb PbCu ____ ____ ____ AgHg TiFe FeTi HgAg ____ ",
 an:"AgHg TiFe FeTi HgAg ____ SnAu ____ CuPb PbCu ____ ____ ____ ",
 en:"CuPb PbCu ____ ____ ____ AgHg TiFe FeTi HgAg ____ SnAu ____ ",
 bn:"FeTi HgAg ____ SnAu ____ CuPb PbCu ____ ____ ____ AgHg TiFe "}

 GemStone.j17y2 = {  // 1392405447156
 fn:"PbCu ____ AuSn ____ AgHg TiFe FeTi HgAg ____ ____ ____ CuPb ",
 cn:"HgAg ____ ____ ____ CuPb PbCu ____ AuSn ____ AgHg TiFe FeTi ",
 gn:"AuSn ____ AgHg TiFe FeTi HgAg ____ ____ ____ CuPb PbCu ____ ",
 dn:"____ ____ CuPb PbCu ____ AuSn ____ AgHg TiFe FeTi HgAg ____ ",
 an:"AgHg TiFe FeTi HgAg ____ ____ ____ CuPb PbCu ____ AuSn ____ ",
 en:"CuPb PbCu ____ AuSn ____ AgHg TiFe FeTi HgAg ____ ____ ____ ",
 bn:"FeTi HgAg ____ ____ ____ CuPb PbCu ____ AuSn ____ AgHg TiFe "}

 GemStone.j3 = {  // 1392405511484
 fn:"PbAg ____ AuAu ____ AgPb ____ FeUr HgSn ____ SnHg UrFe ____ ",
 cn:"HgSn ____ SnHg UrFe ____ PbAg ____ AuAu ____ AgPb ____ FeUr ",
 gn:"AuAu ____ AgPb ____ FeUr HgSn ____ SnHg UrFe ____ PbAg ____ ",
 dn:"SnHg UrFe ____ PbAg ____ AuAu ____ AgPb ____ FeUr HgSn ____ ",
 an:"AgPb ____ FeUr HgSn ____ SnHg UrFe ____ PbAg ____ AuAu ____ ",
 en:"____ PbAg ____ AuAu ____ AgPb ____ FeUr HgSn ____ SnHg UrFe ",
 bn:"FeUr HgSn ____ SnHg UrFe ____ PbAg ____ AuAu ____ AgPb ____ "}

 GemStone.j34k6 = {  // 1423265032293
 fn:"____ ____ AuAu ____ ____ TiCu FeMn HgSn ____ SnHg MnFe CuTi ",
 cn:"HgSn ____ SnHg MnFe CuTi ____ ____ AuAu ____ ____ TiCu FeMn ",
 gn:"AuAu ____ ____ TiCu FeMn HgSn ____ SnHg MnFe CuTi ____ ____ ",
 dn:"SnHg MnFe CuTi ____ ____ AuAu ____ ____ TiCu FeMn HgSn ____ ",
 an:"____ TiCu FeMn HgSn ____ SnHg MnFe CuTi ____ ____ AuAu ____ ",
 en:"CuTi ____ ____ AuAu ____ ____ TiCu FeMn HgSn ____ SnHg MnFe ",
 bn:"FeMn HgSn ____ SnHg MnFe CuTi ____ ____ AuAu ____ ____ TiCu "}

 GemStone.j17k2 = {  // 1392405588312
 fn:"PbAg ____ AuAu ____ AgPb TiCu FeMn ____ ____ ____ MnFe CuTi ",
 cn:"____ ____ ____ MnFe CuTi PbAg ____ AuAu ____ AgPb TiCu FeMn ",
 gn:"AuAu ____ AgPb TiCu FeMn ____ ____ ____ MnFe CuTi PbAg ____ ",
 dn:"____ MnFe CuTi PbAg ____ AuAu ____ AgPb TiCu FeMn ____ ____ ",
 an:"AgPb TiCu FeMn ____ ____ ____ MnFe CuTi PbAg ____ AuAu ____ ",
 en:"CuTi PbAg ____ AuAu ____ AgPb TiCu FeMn ____ ____ ____ MnFe ",
 bn:"FeMn ____ ____ ____ MnFe CuTi PbAg ____ AuAu ____ AgPb TiCu "}

 GemStone.n26y5 = {  // 1392405676046
 fn:"PbAg ____ ____ ____ AgPb TiCu FeMn ____ ____ SnHg MnFe CuTi ",
 cn:"____ ____ SnHg MnFe CuTi PbAg ____ ____ ____ AgPb TiCu FeMn ",
 gn:"____ ____ AgPb TiCu FeMn ____ ____ SnHg MnFe CuTi PbAg ____ ",
 dn:"SnHg MnFe CuTi PbAg ____ ____ ____ AgPb TiCu FeMn ____ ____ ",
 an:"AgPb TiCu FeMn ____ ____ SnHg MnFe CuTi PbAg ____ ____ ____ ",
 en:"CuTi PbAg ____ ____ ____ AgPb TiCu FeMn ____ ____ SnHg MnFe ",
 bn:"FeMn ____ ____ SnHg MnFe CuTi PbAg ____ ____ ____ AgPb TiCu "}

 GemStone.k26x5 = {  // 1392406252437
 fn:"PbAg ____ ____ ____ AgPb TiCu FeMn HgSn ____ ____ MnFe CuTi ",
 cn:"HgSn ____ ____ MnFe CuTi PbAg ____ ____ ____ AgPb TiCu FeMn ",
 gn:"____ ____ AgPb TiCu FeMn HgSn ____ ____ MnFe CuTi PbAg ____ ",
 dn:"____ MnFe CuTi PbAg ____ ____ ____ AgPb TiCu FeMn HgSn ____ ",
 an:"AgPb TiCu FeMn HgSn ____ ____ MnFe CuTi PbAg ____ ____ ____ ",
 en:"CuTi PbAg ____ ____ ____ AgPb TiCu FeMn HgSn ____ ____ MnFe ",
 bn:"FeMn HgSn ____ ____ MnFe CuTi PbAg ____ ____ ____ AgPb TiCu "}

 GemStone.j6 = {  // 1392406319390
 fn:"PbSn ____ AuHg NpFe ____ ____ FeNp HgAu ____ SnPb ____ CuUr ",
 cn:"HgAu ____ SnPb ____ CuUr PbSn ____ AuHg NpFe ____ ____ FeNp ",
 gn:"AuHg NpFe ____ ____ FeNp HgAu ____ SnPb ____ CuUr PbSn ____ ",
 dn:"SnPb ____ CuUr PbSn ____ AuHg NpFe ____ ____ FeNp HgAu ____ ",
 an:"____ ____ FeNp HgAu ____ SnPb ____ CuUr PbSn ____ AuHg NpFe ",
 en:"CuUr PbSn ____ AuHg NpFe ____ ____ FeNp HgAu ____ SnPb ____ ",
 bn:"FeNp HgAu ____ SnPb ____ CuUr PbSn ____ AuHg NpFe ____ ____ "}

 GemStone.j36 = {  // 1392406428187
 fn:"PbSn ____ AuHg NpFe ____ ____ FeNp HgAu ____ SnPb UrCu ____ ",
 cn:"HgAu ____ SnPb UrCu ____ PbSn ____ AuHg NpFe ____ ____ FeNp ",
 gn:"AuHg NpFe ____ ____ FeNp HgAu ____ SnPb UrCu ____ PbSn ____ ",
 dn:"SnPb UrCu ____ PbSn ____ AuHg NpFe ____ ____ FeNp HgAu ____ ",
 an:"____ ____ FeNp HgAu ____ SnPb UrCu ____ PbSn ____ AuHg NpFe ",
 en:"____ PbSn ____ AuHg NpFe ____ ____ FeNp HgAu ____ SnPb UrCu ",
 bn:"FeNp HgAu ____ SnPb UrCu ____ PbSn ____ AuHg NpFe ____ ____ "}

 GemStone.k56 = {  // 1392406485843
 fn:"PbSn ____ ____ NpFe ____ TiAg FeNp HgAu ____ SnPb ____ CuUr ",
 cn:"HgAu ____ SnPb ____ CuUr PbSn ____ ____ NpFe ____ TiAg FeNp ",
 gn:"____ NpFe ____ TiAg FeNp HgAu ____ SnPb ____ CuUr PbSn ____ ",
 dn:"SnPb ____ CuUr PbSn ____ ____ NpFe ____ TiAg FeNp HgAu ____ ",
 an:"____ TiAg FeNp HgAu ____ SnPb ____ CuUr PbSn ____ ____ NpFe ",
 en:"CuUr PbSn ____ ____ NpFe ____ TiAg FeNp HgAu ____ SnPb ____ ",
 bn:"FeNp HgAu ____ SnPb ____ CuUr PbSn ____ ____ NpFe ____ TiAg "}

 GemStone.j136y7 = {  // 1392406561234
 fn:"PbSn ____ AuHg NpFe AgTi ____ FeNp ____ ____ SnPb UrCu ____ ",
 cn:"____ ____ SnPb UrCu ____ PbSn ____ AuHg NpFe AgTi ____ FeNp ",
 gn:"AuHg NpFe AgTi ____ FeNp ____ ____ SnPb UrCu ____ PbSn ____ ",
 dn:"SnPb UrCu ____ PbSn ____ AuHg NpFe AgTi ____ FeNp ____ ____ ",
 an:"AgTi ____ FeNp ____ ____ SnPb UrCu ____ PbSn ____ AuHg NpFe ",
 en:"____ PbSn ____ AuHg NpFe AgTi ____ FeNp ____ ____ SnPb UrCu ",
 bn:"FeNp ____ ____ SnPb UrCu ____ PbSn ____ AuHg NpFe AgTi ____ "}

 GemStone.k56x4 = {  // 1392406622843
 fn:"____ ____ AuHg NpFe ____ TiAg FeNp HgAu ____ SnPb ____ CuUr ",
 cn:"HgAu ____ SnPb ____ CuUr ____ ____ AuHg NpFe ____ TiAg FeNp ",
 gn:"AuHg NpFe ____ TiAg FeNp HgAu ____ SnPb ____ CuUr ____ ____ ",
 dn:"SnPb ____ CuUr ____ ____ AuHg NpFe ____ TiAg FeNp HgAu ____ ",
 an:"____ TiAg FeNp HgAu ____ SnPb ____ CuUr ____ ____ AuHg NpFe ",
 en:"CuUr ____ ____ AuHg NpFe ____ TiAg FeNp HgAu ____ SnPb ____ ",
 bn:"FeNp HgAu ____ SnPb ____ CuUr ____ ____ AuHg NpFe ____ TiAg "}

 GemStone.n167x4 = {  // 1392406704609
 fn:"PbSn ____ AuHg NpFe AgTi ____ FeNp HgAu ____ ____ UrCu ____ ",
 cn:"HgAu ____ ____ UrCu ____ PbSn ____ AuHg NpFe AgTi ____ FeNp ",
 gn:"AuHg NpFe AgTi ____ FeNp HgAu ____ ____ UrCu ____ PbSn ____ ",
 dn:"____ UrCu ____ PbSn ____ AuHg NpFe AgTi ____ FeNp HgAu ____ ",
 an:"AgTi ____ FeNp HgAu ____ ____ UrCu ____ PbSn ____ AuHg NpFe ",
 en:"____ PbSn ____ AuHg NpFe AgTi ____ FeNp HgAu ____ ____ UrCu ",
 bn:"FeNp HgAu ____ ____ UrCu ____ PbSn ____ AuHg NpFe AgTi ____ "}

 GemStone.j3k5x4 = {  // 1392406771718
 fn:"____ ____ AuHg NpFe AgTi ____ FeNp HgAu ____ SnPb UrCu ____ ",
 cn:"HgAu ____ SnPb UrCu ____ ____ ____ AuHg NpFe AgTi ____ FeNp ",
 gn:"AuHg NpFe AgTi ____ FeNp HgAu ____ SnPb UrCu ____ ____ ____ ",
 dn:"SnPb UrCu ____ ____ ____ AuHg NpFe AgTi ____ FeNp HgAu ____ ",
 an:"AgTi ____ FeNp HgAu ____ SnPb UrCu ____ ____ ____ AuHg NpFe ",
 en:"____ ____ ____ AuHg NpFe AgTi ____ FeNp HgAu ____ SnPb UrCu ",
 bn:"FeNp HgAu ____ SnPb UrCu ____ ____ ____ AuHg NpFe AgTi ____ "}

 GemStone.j167y2 = {  // 1392406841906
 fn:"PbSn ____ AuHg NpFe ____ TiAg FeNp HgAu ____ ____ ____ CuUr ",
 cn:"HgAu ____ ____ ____ CuUr PbSn ____ AuHg NpFe ____ TiAg FeNp ",
 gn:"AuHg NpFe ____ TiAg FeNp HgAu ____ ____ ____ CuUr PbSn ____ ",
 dn:"____ ____ CuUr PbSn ____ AuHg NpFe ____ TiAg FeNp HgAu ____ ",
 an:"____ TiAg FeNp HgAu ____ ____ ____ CuUr PbSn ____ AuHg NpFe ",
 en:"CuUr PbSn ____ AuHg NpFe ____ TiAg FeNp HgAu ____ ____ ____ ",
 bn:"FeNp HgAu ____ ____ ____ CuUr PbSn ____ AuHg NpFe ____ TiAg "}

 GemStone.j2k56x4 = {  // 1392406906515
 fn:"____ ____ AuPb NpCu ____ TiSn FePu HgHg PuFe ____ ____ CuNp ",
 cn:"HgHg PuFe ____ ____ CuNp ____ ____ AuPb NpCu ____ TiSn FePu ",
 gn:"AuPb NpCu ____ TiSn FePu HgHg PuFe ____ ____ CuNp ____ ____ ",
 dn:"____ ____ CuNp ____ ____ AuPb NpCu ____ TiSn FePu HgHg PuFe ",
 an:"____ TiSn FePu HgHg PuFe ____ ____ CuNp ____ ____ AuPb NpCu ",
 en:"CuNp ____ ____ AuPb NpCu ____ TiSn FePu HgHg PuFe ____ ____ ",
 bn:"FePu HgHg PuFe ____ ____ CuNp ____ ____ AuPb NpCu ____ TiSn "}

 GemStone.k157x6 = {  // 1392406960359
 fn:"PbAu ____ ____ NpCu ____ ____ FePu HgHg PuFe SnTi ____ CuNp ",
 cn:"HgHg PuFe SnTi ____ CuNp PbAu ____ ____ NpCu ____ ____ FePu ",
 gn:"____ NpCu ____ ____ FePu HgHg PuFe SnTi ____ CuNp PbAu ____ ",
 dn:"SnTi ____ CuNp PbAu ____ ____ NpCu ____ ____ FePu HgHg PuFe ",
 an:"____ ____ FePu HgHg PuFe SnTi ____ CuNp PbAu ____ ____ NpCu ",
 en:"CuNp PbAu ____ ____ NpCu ____ ____ FePu HgHg PuFe SnTi ____ ",
 bn:"FePu HgHg PuFe SnTi ____ CuNp PbAu ____ ____ NpCu ____ ____ "}

 GemStone.k1j6 = {  // 1392407015203
 fn:"PbAu ____ AuPb NpCu ____ ____ FePu ____ PuFe SnTi ____ CuNp ",
 cn:"____ PuFe SnTi ____ CuNp PbAu ____ AuPb NpCu ____ ____ FePu ",
 gn:"AuPb NpCu ____ ____ FePu ____ PuFe SnTi ____ CuNp PbAu ____ ",
 dn:"SnTi ____ CuNp PbAu ____ AuPb NpCu ____ ____ FePu ____ PuFe ",
 an:"____ ____ FePu ____ PuFe SnTi ____ CuNp PbAu ____ AuPb NpCu ",
 en:"CuNp PbAu ____ AuPb NpCu ____ ____ FePu ____ PuFe SnTi ____ ",
 bn:"FePu ____ PuFe SnTi ____ CuNp PbAu ____ AuPb NpCu ____ ____ "}

 GemStone.n345 = {  // 1392407054812
 fn:"PbAu ____ AuPb NpCu ____ TiSn FePu ____ PuFe ____ ____ CuNp ",
 cn:"____ PuFe ____ ____ CuNp PbAu ____ AuPb NpCu ____ TiSn FePu ",
 gn:"AuPb NpCu ____ TiSn FePu ____ PuFe ____ ____ CuNp PbAu ____ ",
 dn:"____ ____ CuNp PbAu ____ AuPb NpCu ____ TiSn FePu ____ PuFe ",
 an:"____ TiSn FePu ____ PuFe ____ ____ CuNp PbAu ____ AuPb NpCu ",
 en:"CuNp PbAu ____ AuPb NpCu ____ TiSn FePu ____ PuFe ____ ____ ",
 bn:"FePu ____ PuFe ____ ____ CuNp PbAu ____ AuPb NpCu ____ TiSn "}

 GemStone.j2 = {  // 1392407095437
 fn:"PbAu ____ AuPb ____ AgUr ____ FePu HgHg PuFe ____ ____ CuNp ",
 cn:"HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ____ AgUr ____ FePu ",
 gn:"AuPb ____ AgUr ____ FePu HgHg PuFe ____ ____ CuNp PbAu ____ ",
 dn:"____ ____ CuNp PbAu ____ AuPb ____ AgUr ____ FePu HgHg PuFe ",
 an:"AgUr ____ FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ____ ",
 en:"CuNp PbAu ____ AuPb ____ AgUr ____ FePu HgHg PuFe ____ ____ ",
 bn:"FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ____ AgUr ____ "}

 GemStone.j26 = {  // 1392407147578
 fn:"PbAu ____ AuPb NpCu ____ ____ FePu HgHg PuFe ____ ____ CuNp ",
 cn:"HgHg PuFe ____ ____ CuNp PbAu ____ AuPb NpCu ____ ____ FePu ",
 gn:"AuPb NpCu ____ ____ FePu HgHg PuFe ____ ____ CuNp PbAu ____ ",
 dn:"____ ____ CuNp PbAu ____ AuPb NpCu ____ ____ FePu HgHg PuFe ",
 an:"____ ____ FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb NpCu ",
 en:"CuNp PbAu ____ AuPb NpCu ____ ____ FePu HgHg PuFe ____ ____ ",
 bn:"FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb NpCu ____ ____ "}

 GemStone.j236 = {  // 1392407192015
 fn:"PbAu ____ AuPb NpCu ____ ____ FePb HgHg PuFe ____ UrAg ____ ",
 cn:"HgHg PuFe ____ UrAg ____ PbAu ____ AuPb NpCu ____ ____ FePu ",
 gn:"AuPb NpCu ____ ____ FePu HgHg PuFe ____ UrAg ____ PbAu ____ ",
 dn:"____ UrAg ____ PbAu ____ AuPb NpCu ____ ____ FePu HgHg PuFe ",
 an:"____ ____ FePu HgHg PuFe ____ UrAg ____ PbAu ____ AuPb NpCu ",
 en:"____ PbAu ____ AuPb NpCu ____ ____ FePu HgHg PuFe ____ UrAg ",
 bn:"FePu HgHg PuFe ____ UrAg ____ PbAu ____ AuPb NpCu ____ ____ "}

 GemStone.j23 = {  // 1392407250656
 fn:"PbAu ____ AuPb ____ AgUr ____ FePu HgHg PuFe ____ UrAg ____ ",
 cn:"HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ____ AgUr ____ FePu ",
 gn:"AuPb ____ AgUr ____ FePu HgHg PuFe ____ UrAg ____ PbAu ____ ",
 dn:"____ UrAg ____ PbAu ____ AuPb ____ AgUr ____ FePu HgHg PuFe ",
 an:"AgUr ____ FePu HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ____ ",
 en:"____ PbAu ____ AuPb ____ AgUr ____ FePu HgHg PuFe ____ UrAg ",
 bn:"FePu HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ____ AgUr ____ "}

 GemStone.j23k6 = {  // 1392407306046
 fn:"PbAu ____ AuPb ____ ____ TiSn FePu HgHg PuFe ____ UrAg ____ ",
 cn:"HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ____ ____ TiSn FePu ",
 gn:"AuPb ____ ____ TiSn FePu HgHg PuFe ____ UrAg ____ PbAu ____ ",
 dn:"____ UrAg ____ PbAu ____ AuPb ____ ____ TiSn FePu HgHg PuFe ",
 an:"____ TiSn FePu HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ____ ",
 en:"____ PbAu ____ AuPb ____ ____ TiSn FePu HgHg PuFe ____ UrAg ",
 bn:"FePu HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ____ ____ TiSn "}

 GemStone.j2y3 = {  // 1392407362437
 fn:"PbAu ____ AuPb ____ AgUr ____ FePu HgHg PuFe SnTi ____ ____ ",
 cn:"HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ____ AgUr ____ FePu ",
 gn:"AuPb ____ AgUr ____ FePu HgHg PuFe SnTi ____ ____ PbAu ____ ",
 dn:"SnTi ____ ____ PbAu ____ AuPb ____ AgUr ____ FePu HgHg PuFe ",
 an:"AgUr ____ FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ____ ",
 en:"____ PbAu ____ AuPb ____ AgUr ____ FePu HgHg PuFe SnTi ____ ",
 bn:"FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ____ AgUr ____ "}

 GemStone.j2k6 = {  // 1392407415625
 fn:"PbAu ____ AuPb ____ ____ TiSn FePu HgHg PuFe ____ ____ CuNp ",
 cn:"HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ____ ____ TiSn FePu ",
 gn:"AuPb ____ ____ TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ ",
 dn:"____ ____ CuNp PbAu ____ AuPb ____ ____ TiSn FePu HgHg PuFe ",
 an:"____ TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ____ ",
 en:"CuNp PbAu ____ AuPb ____ ____ TiSn FePu HgHg PuFe ____ ____ ",
 bn:"FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ____ ____ TiSn "}

 GemStone.j26y3 = {  // 1392407484421
 fn:"PbAu ____ AuPb NpCu ____ ____ FePu HgHg PuFe SnTi ____ ____ ",
 cn:"HgHg PuFe SnTi ____ ____ PbAu ____ AuPb NpCu ____ ____ FePu ",
 gn:"AuPb NpCu ____ ____ FePu HgHg PuFe SnTi ____ ____ PbAu ____ ",
 dn:"SnTi ____ ____ PbAu ____ AuPb NpCu ____ ____ FePu HgHg PuFe ",
 an:"____ ____ FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb NpCu ",
 en:"____ PbAu ____ AuPb NpCu ____ ____ FePu HgHg PuFe SnTi ____ ",
 bn:"FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb NpCu ____ ____ "}

 GemStone.j2k56 = {  // 1392407548671
 fn:"PbAu ____ ____ NpCu ____ TiSn FePu HgHg PuFe ____ ____ CuNp ",
 cn:"HgHg PuFe ____ ____ CuNp PbAu ____ ____ NpCu ____ TiSn FePu ",
 gn:"____ NpCu ____ TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ ",
 dn:"____ ____ CuNp PbAu ____ ____ NpCu ____ TiSn FePu HgHg PuFe ",
 an:"____ TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ ____ NpCu ",
 en:"CuNp PbAu ____ ____ NpCu ____ TiSn FePu HgHg PuFe ____ ____ ",
 bn:"FePu HgHg PuFe ____ ____ CuNp PbAu ____ ____ NpCu ____ TiSn "}

 GemStone.j246y3 = {  // 1392407617890
 fn:"____ ____ AuPb NpCu ____ ____ FePu HgHg PuFe SnTi ____ CuNp ",
 cn:"HgHg PuFe SnTi ____ CuNp ____ ____ AuPb NpCu ____ ____ FePu ",
 gn:"AuPb NpCu ____ ____ FePu HgHg PuFe SnTi ____ CuNp ____ ____ ",
 dn:"SnTi ____ CuNp ____ ____ AuPb NpCu ____ ____ FePu HgHg PuFe ",
 an:"____ ____ FePu HgHg PuFe SnTi ____ CuNp ____ ____ AuPb NpCu ",
 en:"CuNp ____ ____ AuPb NpCu ____ ____ FePu HgHg PuFe SnTi ____ ",
 bn:"FePu HgHg PuFe SnTi ____ CuNp ____ ____ AuPb NpCu ____ ____ "}

 GemStone.j26y34 = {  // 1392407675859
 fn:"____ ____ AuPb NpCu ____ ____ FePu HgHg PuFe SnTi UrAg ____ ",
 cn:"HgHg PuFe SnTi UrAg ____ ____ ____ AuPb NpCu ____ ____ FePu ",
 gn:"AuPb NpCu ____ ____ FePu HgHg PuFe SnTi UrAg ____ ____ ____ ",
 dn:"SnTi UrAg ____ ____ ____ AuPb NpCu ____ ____ FePu HgHg PuFe ",
 an:"____ ____ FePu HgHg PuFe SnTi UrAg ____ ____ ____ AuPb NpCu ",
 en:"____ ____ ____ AuPb NpCu ____ ____ FePu HgHg PuFe SnTi UrAg ",
 bn:"FePu HgHg PuFe SnTi UrAg ____ ____ ____ AuPb NpCu ____ ____ "}

 GemStone.j2k6x5 = {  // 1392407732250
 fn:"PbAu ____ ____ ____ AgUr TiSn FePu HgHg PuFe ____ ____ CuNp ",
 cn:"HgHg PuFe ____ ____ CuNp PbAu ____ ____ ____ AgUr TiSn FePu ",
 gn:"____ ____ AgUr TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ ",
 dn:"____ ____ CuNp PbAu ____ ____ ____ AgUr TiSn FePu HgHg PuFe ",
 an:"AgUr TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ ____ ____ ",
 en:"CuNp PbAu ____ ____ ____ AgUr TiSn FePu HgHg PuFe ____ ____ ",
 bn:"FePu HgHg PuFe ____ ____ CuNp PbAu ____ ____ ____ AgUr TiSn "}

 GemStone.j2k6y3 = {  // 1392407789875
 fn:"PbAu ____ AuPb ____ ____ TiSn FePu HgHg PuFe SnTi ____ ____ ",
 cn:"HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ____ ____ TiSn FePu ",
 gn:"AuPb ____ ____ TiSn FePu HgHg PuFe SnTi ____ ____ PbAu ____ ",
 dn:"SnTi ____ ____ PbAu ____ AuPb ____ ____ TiSn FePu HgHg PuFe ",
 an:"____ TiSn FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ____ ",
 en:"____ PbAu ____ AuPb ____ ____ TiSn FePu HgHg PuFe SnTi ____ ",
 bn:"FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ____ ____ TiSn "}

 GemStone.j3k6 = {  // 1392407846843
 fn:"PbPb ____ AuUr ____ ____ TiHg FeFe HgTi ____ SnNp UrAu ____ ",
 cn:"HgTi ____ SnNp UrAu ____ PbPb ____ AuUr ____ ____ TiHg FeFe ",
 gn:"AuUr ____ ____ TiHg FeFe HgTi ____ SnNp UrAu ____ PbPb ____ ",
 dn:"SnNp UrAu ____ PbPb ____ AuUr ____ ____ TiHg FeFe HgTi ____ ",
 an:"____ TiHg FeFe HgTi ____ SnNp UrAu ____ PbPb ____ AuUr ____ ",
 en:"____ PbPb ____ AuUr ____ ____ TiHg FeFe HgTi ____ SnNp UrAu ",
 bn:"FeFe HgTi ____ SnNp UrAu ____ PbPb ____ AuUr ____ ____ TiHg "}

 GemStone.n45y2 = {  // 1392407888125
 fn:"PbPb ____ AuUr NpSn ____ TiHg FeFe HgTi ____ ____ UrAu ____ ",
 cn:"HgTi ____ ____ UrAu ____ PbPb ____ AuUr NpSn ____ TiHg FeFe ",
 gn:"AuUr NpSn ____ TiHg FeFe HgTi ____ ____ UrAu ____ PbPb ____ ",
 dn:"____ UrAu ____ PbPb ____ AuUr NpSn ____ TiHg FeFe HgTi ____ ",
 an:"____ TiHg FeFe HgTi ____ ____ UrAu ____ PbPb ____ AuUr NpSn ",
 en:"____ PbPb ____ AuUr NpSn ____ TiHg FeFe HgTi ____ ____ UrAu ",
 bn:"FeFe HgTi ____ ____ UrAu ____ PbPb ____ AuUr NpSn ____ TiHg "}

 GemStone.j3k56x4 = {  // 1425171416811
 fn:"____ ____ AuUr NpSn ____ TiHg FeFe HgTi ____ SnNp UrAu ____ ",
 cn:"HgTi ____ SnNp UrAu ____ ____ ____ AuUr NpSn ____ TiHg FeFe ",
 gn:"AuUr NpSn ____ TiHg FeFe HgTi ____ SnNp UrAu ____ ____ ____ ",
 dn:"SnNp UrAu ____ ____ ____ AuUr NpSn ____ TiHg FeFe HgTi ____ ",
 an:"____ TiHg FeFe HgTi ____ SnNp UrAu ____ ____ ____ AuUr NpSn ",
 en:"____ ____ ____ AuUr NpSn ____ TiHg FeFe HgTi ____ SnNp UrAu ",
 bn:"FeFe HgTi ____ SnNp UrAu ____ ____ ____ AuUr NpSn ____ TiHg "}

 GemStone.k2j6 = {  // 1392407932687
 fn:"PbTi ____ AuNp NpAu ____ ____ FeCu HgMn ____ ____ MnHg CuFe ",
 cn:"HgMn ____ ____ MnHg CuFe PbTi ____ AuNp NpAu ____ ____ FeCu ",
 gn:"AuNp NpAu ____ ____ FeCu HgMn ____ ____ MnHg CuFe PbTi ____ ",
 dn:"____ MnHg CuFe PbTi ____ AuNp NpAu ____ ____ FeCu HgMn ____ ",
 an:"____ ____ FeCu HgMn ____ ____ MnHg CuFe PbTi ____ AuNp NpAu ",
 en:"CuFe PbTi ____ AuNp NpAu ____ ____ FeCu HgMn ____ ____ MnHg ",
 bn:"FeCu HgMn ____ ____ MnHg CuFe PbTi ____ AuNp NpAu ____ ____ "}

 GemStone.n5y2 = {  // 1392408010890
 fn:"____ ____ AuNp NpAu ____ TiPb FeCu HgMn ____ ____ MnHg CuFe ",
 cn:"HgMn ____ ____ MnHg CuFe ____ ____ AuNp NpAu ____ TiPb FeCu ",
 gn:"AuNp NpAu ____ TiPb FeCu HgMn ____ ____ MnHg CuFe ____ ____ ",
 dn:"____ MnHg CuFe ____ ____ AuNp NpAu ____ TiPb FeCu HgMn ____ ",
 an:"____ TiPb FeCu HgMn ____ ____ MnHg CuFe ____ ____ AuNp NpAu ",
 en:"CuFe ____ ____ AuNp NpAu ____ TiPb FeCu HgMn ____ ____ MnHg ",
 bn:"FeCu HgMn ____ ____ MnHg CuFe ____ ____ AuNp NpAu ____ TiPb "}

 GemStone.k26 = {  // 1392408101375
 fn:"PbTi ____ AuNp ____ ____ TiPb FeCu HgMn ____ ____ MnHg CuFe ",
 cn:"HgMn ____ ____ MnHg CuFe PbTi ____ AuNp ____ ____ TiPb FeCu ",
 gn:"AuNp ____ ____ TiPb FeCu HgMn ____ ____ MnHg CuFe PbTi ____ ",
 dn:"____ MnHg CuFe PbTi ____ AuNp ____ ____ TiPb FeCu HgMn ____ ",
 an:"____ TiPb FeCu HgMn ____ ____ MnHg CuFe PbTi ____ AuNp ____ ",
 en:"CuFe PbTi ____ AuNp ____ ____ TiPb FeCu HgMn ____ ____ MnHg ",
 bn:"FeCu HgMn ____ ____ MnHg CuFe PbTi ____ AuNp ____ ____ TiPb "}

 GemStone.k256 = {  // 1392408157515
 fn:"PbTi ____ ____ NpAu ____ TiPb FeCu HgMn ____ ____ MnHg CuFe ",
 cn:"HgMn ____ ____ MnHg CuFe PbTi ____ ____ NpAu ____ TiPb FeCu ",
 gn:"____ NpAu ____ TiPb FeCu HgMn ____ ____ MnHg CuFe PbTi ____ ",
 dn:"____ MnHg CuFe PbTi ____ ____ NpAu ____ TiPb FeCu HgMn ____ ",
 an:"____ TiPb FeCu HgMn ____ ____ MnHg CuFe PbTi ____ ____ NpAu ",
 en:"CuFe PbTi ____ ____ NpAu ____ TiPb FeCu HgMn ____ ____ MnHg ",
 bn:"FeCu HgMn ____ ____ MnHg CuFe PbTi ____ ____ NpAu ____ TiPb "}

 GemStone.j5 = {  // 1392408207484
 fn:"TiFe FeTi ____ ____ SnAu ____ CuPb PbCu ____ AuSn ____ AgHg ",
 cn:"PbCu ____ AuSn ____ AgHg TiFe FeTi ____ ____ SnAu ____ CuPb ",
 gn:"____ ____ SnAu ____ CuPb PbCu ____ AuSn ____ AgHg TiFe FeTi ",
 dn:"AuSn ____ AgHg TiFe FeTi ____ ____ SnAu ____ CuPb PbCu ____ ",
 an:"SnAu ____ CuPb PbCu ____ AuSn ____ AgHg TiFe FeTi ____ ____ ",
 en:"AgHg TiFe FeTi ____ ____ SnAu ____ CuPb PbCu ____ AuSn ____ ",
 bn:"CuPb PbCu ____ AuSn ____ AgHg TiFe FeTi ____ ____ SnAu ____ "}

 GemStone.k34 = {  // 1392408253265
 fn:"TiFe FeTi HgAg ____ SnAu ____ CuPb PbCu ____ AuSn ____ ____ ",
 cn:"PbCu ____ AuSn ____ ____ TiFe FeTi HgAg ____ SnAu ____ CuPb ",
 gn:"HgAg ____ SnAu ____ CuPb PbCu ____ AuSn ____ ____ TiFe FeTi ",
 dn:"AuSn ____ ____ TiFe FeTi HgAg ____ SnAu ____ CuPb PbCu ____ ",
 an:"SnAu ____ CuPb PbCu ____ AuSn ____ ____ TiFe FeTi HgAg ____ ",
 en:"____ TiFe FeTi HgAg ____ SnAu ____ CuPb PbCu ____ AuSn ____ ",
 bn:"CuPb PbCu ____ AuSn ____ ____ TiFe FeTi HgAg ____ SnAu ____ "}

 GemStone.j5y6 = {  // 1392408301296
 fn:"TiFe FeTi HgAg ____ ____ ____ CuPb PbCu ____ AuSn ____ AgHg ",
 cn:"PbCu ____ AuSn ____ AgHg TiFe FeTi HgAg ____ ____ ____ CuPb ",
 gn:"HgAg ____ ____ ____ CuPb PbCu ____ AuSn ____ AgHg TiFe FeTi ",
 dn:"AuSn ____ AgHg TiFe FeTi HgAg ____ ____ ____ CuPb PbCu ____ ",
 an:"____ ____ CuPb PbCu ____ AuSn ____ AgHg TiFe FeTi HgAg ____ ",
 en:"AgHg TiFe FeTi HgAg ____ ____ ____ CuPb PbCu ____ AuSn ____ ",
 bn:"CuPb PbCu ____ AuSn ____ AgHg TiFe FeTi HgAg ____ ____ ____ "}

 GemStone.k34x2 = {  // 1392408343765
 fn:"TiFe FeTi HgAg ____ SnAu ____ CuPb PbCu ____ ____ ____ AgHg ",
 cn:"PbCu ____ ____ ____ AgHg TiFe FeTi HgAg ____ SnAu ____ CuPb ",
 gn:"HgAg ____ SnAu ____ CuPb PbCu ____ ____ ____ AgHg TiFe FeTi ",
 dn:"____ ____ AgHg TiFe FeTi HgAg ____ SnAu ____ CuPb PbCu ____ ",
 an:"SnAu ____ CuPb PbCu ____ ____ ____ AgHg TiFe FeTi HgAg ____ ",
 en:"AgHg TiFe FeTi HgAg ____ SnAu ____ CuPb PbCu ____ ____ ____ ",
 bn:"CuPb PbCu ____ ____ ____ AgHg TiFe FeTi HgAg ____ SnAu ____ "}

 GemStone.k1 = {  // 1392408384328
 fn:"UrFe ____ PbAg ____ AuAu ____ AgPb ____ FeUr HgSn ____ SnHg ",
 cn:"____ FeUr HgSn ____ SnHg UrFe ____ PbAg ____ AuAu ____ AgPb ",
 gn:"PbAg ____ AuAu ____ AgPb ____ FeUr HgSn ____ SnHg UrFe ____ ",
 dn:"HgSn ____ SnHg UrFe ____ PbAg ____ AuAu ____ AgPb ____ FeUr ",
 an:"AuAu ____ AgPb ____ FeUr HgSn ____ SnHg UrFe ____ PbAg ____ ",
 en:"SnHg UrFe ____ PbAg ____ AuAu ____ AgPb ____ FeUr HgSn ____ ",
 bn:"AgPb ____ FeUr HgSn ____ SnHg UrFe ____ PbAg ____ AuAu ____ "}

 GemStone.k17j5 = {  // 1423265224394
 fn:"MnFe CuTi ____ ____ AuAu ____ ____ TiCu FeMn HgSn ____ SnHg ",
 cn:"TiCu FeMn HgSn ____ SnHg MnFe CuTi ____ ____ AuAu ____ ____ ",
 gn:"____ ____ AuAu ____ ____ TiCu FeMn HgSn ____ SnHg MnFe CuTi ",
 dn:"HgSn ____ SnHg MnFe CuTi ____ ____ AuAu ____ ____ TiCu FeMn ",
 an:"AuAu ____ ____ TiCu FeMn HgSn ____ SnHg MnFe CuTi ____ ____ ",
 en:"SnHg MnFe CuTi ____ ____ AuAu ____ ____ TiCu FeMn HgSn ____ ",
 bn:"____ TiCu FeMn HgSn ____ SnHg MnFe CuTi ____ ____ AuAu ____ "}

 GemStone.j2k34 = {  // 1392408428968
 fn:"MnFe CuTi PbAg ____ AuAu ____ AgPb TiCu FeMn ____ ____ ____ ",
 cn:"TiCu FeMn ____ ____ ____ MnFe CuTi PbAg ____ AuAu ____ AgPb ",
 gn:"PbAg ____ AuAu ____ AgPb TiCu FeMn ____ ____ ____ MnFe CuTi ",
 dn:"____ ____ ____ MnFe CuTi PbAg ____ AuAu ____ AgPb TiCu FeMn ",
 an:"AuAu ____ AgPb TiCu FeMn ____ ____ ____ MnFe CuTi PbAg ____ ",
 en:"____ MnFe CuTi PbAg ____ AuAu ____ AgPb TiCu FeMn ____ ____ ",
 bn:"AgPb TiCu FeMn ____ ____ ____ MnFe CuTi PbAg ____ AuAu ____ "}

 GemStone.n25x6 = {  // 1392408471093
 fn:"MnFe CuTi PbAg ____ ____ ____ AgPb TiCu FeMn HgSn ____ ____ ",
 cn:"TiCu FeMn HgSn ____ ____ MnFe CuTi PbAg ____ ____ ____ AgPb ",
 gn:"PbAg ____ ____ ____ AgPb TiCu FeMn HgSn ____ ____ MnFe CuTi ",
 dn:"HgSn ____ ____ MnFe CuTi PbAg ____ ____ ____ AgPb TiCu FeMn ",
 an:"____ ____ AgPb TiCu FeMn HgSn ____ ____ MnFe CuTi PbAg ____ ",
 en:"____ MnFe CuTi PbAg ____ ____ ____ AgPb TiCu FeMn HgSn ____ ",
 bn:"AgPb TiCu FeMn HgSn ____ ____ MnFe CuTi PbAg ____ ____ ____ "}

 GemStone.j25y6 = {  // 1392408505968
 fn:"MnFe CuTi PbAg ____ ____ ____ AgPb TiCu FeMn ____ ____ SnHg ",
 cn:"TiCu FeMn ____ ____ SnHg MnFe CuTi PbAg ____ ____ ____ AgPb ",
 gn:"PbAg ____ ____ ____ AgPb TiCu FeMn ____ ____ SnHg MnFe CuTi ",
 dn:"____ ____ SnHg MnFe CuTi PbAg ____ ____ ____ AgPb TiCu FeMn ",
 an:"____ ____ AgPb TiCu FeMn ____ ____ SnHg MnFe CuTi PbAg ____ ",
 en:"SnHg MnFe CuTi PbAg ____ ____ ____ AgPb TiCu FeMn ____ ____ ",
 bn:"AgPb TiCu FeMn ____ ____ SnHg MnFe CuTi PbAg ____ ____ ____ "}

 GemStone.k5 = {  // 1392408543953
 fn:"NpFe ____ ____ FeNp HgAu ____ SnPb UrCu ____ PbSn ____ AuHg ",
 cn:"UrCu ____ PbSn ____ AuHg NpFe ____ ____ FeNp HgAu ____ SnPb ",
 gn:"____ FeNp HgAu ____ SnPb UrCu ____ PbSn ____ AuHg NpFe ____ ",
 dn:"PbSn ____ AuHg NpFe ____ ____ FeNp HgAu ____ SnPb UrCu ____ ",
 an:"HgAu ____ SnPb UrCu ____ PbSn ____ AuHg NpFe ____ ____ FeNp ",
 en:"AuHg NpFe ____ ____ FeNp HgAu ____ SnPb UrCu ____ PbSn ____ ",
 bn:"SnPb UrCu ____ PbSn ____ AuHg NpFe ____ ____ FeNp HgAu ____ "}

 GemStone.k15 = {  // 1392408583125
 fn:"NpFe ____ ____ FeNp HgAu ____ SnPb ____ CuUr PbSn ____ AuHg ",
 cn:"____ CuUr PbSn ____ AuHg NpFe ____ ____ FeNp HgAu ____ SnPb ",
 gn:"____ FeNp HgAu ____ SnPb ____ CuUr PbSn ____ AuHg NpFe ____ ",
 dn:"PbSn ____ AuHg NpFe ____ ____ FeNp HgAu ____ SnPb ____ CuUr ",
 an:"HgAu ____ SnPb ____ CuUr PbSn ____ AuHg NpFe ____ ____ FeNp ",
 en:"AuHg NpFe ____ ____ FeNp HgAu ____ SnPb ____ CuUr PbSn ____ ",
 bn:"SnPb ____ CuUr PbSn ____ AuHg NpFe ____ ____ FeNp HgAu ____ "}

 GemStone.j56 = {  // 1392408633718
 fn:"NpFe AgTi ____ FeNp ____ ____ SnPb UrCu ____ PbSn ____ AuHg ",
 cn:"UrCu ____ PbSn ____ AuHg NpFe AgTi ____ FeNp ____ ____ SnPb ",
 gn:"____ FeNp ____ ____ SnPb UrCu ____ PbSn ____ AuHg NpFe AgTi ",
 dn:"PbSn ____ AuHg NpFe AgTi ____ FeNp ____ ____ SnPb UrCu ____ ",
 an:"____ ____ SnPb UrCu ____ PbSn ____ AuHg NpFe AgTi ____ FeNp ",
 en:"AuHg NpFe AgTi ____ FeNp ____ ____ SnPb UrCu ____ PbSn ____ ",
 bn:"SnPb UrCu ____ PbSn ____ AuHg NpFe AgTi ____ FeNp ____ ____ "}

 GemStone.k135x4 = {  // 1392408672468
 fn:"NpFe ____ TiAg FeNp HgAu ____ SnPb ____ CuUr PbSn ____ ____ ",
 cn:"____ CuUr PbSn ____ ____ NpFe ____ TiAg FeNp HgAu ____ SnPb ",
 gn:"TiAg FeNp HgAu ____ SnPb ____ CuUr PbSn ____ ____ NpFe ____ ",
 dn:"PbSn ____ ____ NpFe ____ TiAg FeNp HgAu ____ SnPb ____ CuUr ",
 an:"HgAu ____ SnPb ____ CuUr PbSn ____ ____ NpFe ____ TiAg FeNp ",
 en:"____ NpFe ____ TiAg FeNp HgAu ____ SnPb ____ CuUr PbSn ____ ",
 bn:"SnPb ____ CuUr PbSn ____ ____ NpFe ____ TiAg FeNp HgAu ____ "}

 GemStone.j56y7 = {  // 1392409801968
 fn:"NpFe AgTi ____ FeNp HgAu ____ ____ UrCu ____ PbSn ____ AuHg ",
 cn:"UrCu ____ PbSn ____ AuHg NpFe AgTi ____ FeNp HgAu ____ ____ ",
 gn:"____ FeNp HgAu ____ ____ UrCu ____ PbSn ____ AuHg NpFe AgTi ",
 dn:"PbSn ____ AuHg NpFe AgTi ____ FeNp HgAu ____ ____ UrCu ____ ",
 an:"HgAu ____ ____ UrCu ____ PbSn ____ AuHg NpFe AgTi ____ FeNp ",
 en:"AuHg NpFe AgTi ____ FeNp HgAu ____ ____ UrCu ____ PbSn ____ ",
 bn:"____ UrCu ____ PbSn ____ AuHg NpFe AgTi ____ FeNp HgAu ____ "}

 GemStone.n345y7 = {  // 1392409843203
 fn:"NpFe ____ TiAg FeNp HgAu ____ SnPb ____ CuUr ____ ____ AuHg ",
 cn:"____ CuUr ____ ____ AuHg NpFe ____ TiAg FeNp HgAu ____ SnPb ",
 gn:"TiAg FeNp HgAu ____ SnPb ____ CuUr ____ ____ AuHg NpFe ____ ",
 dn:"____ ____ AuHg NpFe ____ TiAg FeNp HgAu ____ SnPb ____ CuUr ",
 an:"HgAu ____ SnPb ____ CuUr ____ ____ AuHg NpFe ____ TiAg FeNp ",
 en:"AuHg NpFe ____ TiAg FeNp HgAu ____ SnPb ____ CuUr ____ ____ ",
 bn:"SnPb ____ CuUr ____ ____ AuHg NpFe ____ TiAg FeNp HgAu ____ "}

 GemStone.k1j6y7 = {  // 1392409891812
 fn:"NpFe ____ TiAg FeNp HgAu ____ ____ ____ CuUr PbSn ____ AuHg ",
 cn:"____ CuUr PbSn ____ AuHg NpFe ____ TiAg FeNp HgAu ____ ____ ",
 gn:"TiAg FeNp HgAu ____ ____ ____ CuUr PbSn ____ AuHg NpFe ____ ",
 dn:"PbSn ____ AuHg NpFe ____ TiAg FeNp HgAu ____ ____ ____ CuUr ",
 an:"HgAu ____ ____ ____ CuUr PbSn ____ AuHg NpFe ____ TiAg FeNp ",
 en:"AuHg NpFe ____ TiAg FeNp HgAu ____ ____ ____ CuUr PbSn ____ ",
 bn:"____ ____ CuUr PbSn ____ AuHg NpFe ____ TiAg FeNp HgAu ____ "}

 GemStone.k345x2 = {  // 1392409939718
 fn:"NpFe AgTi ____ FeNp HgAu ____ SnPb UrCu ____ ____ ____ AuHg ",
 cn:"UrCu ____ ____ ____ AuHg NpFe AgTi ____ FeNp HgAu ____ SnPb ",
 gn:"____ FeNp HgAu ____ SnPb UrCu ____ ____ ____ AuHg NpFe AgTi ",
 dn:"____ ____ AuHg NpFe AgTi ____ FeNp HgAu ____ SnPb UrCu ____ ",
 an:"HgAu ____ SnPb UrCu ____ ____ ____ AuHg NpFe AgTi ____ FeNp ",
 en:"AuHg NpFe AgTi ____ FeNp HgAu ____ SnPb UrCu ____ ____ ____ ",
 bn:"SnPb UrCu ____ ____ ____ AuHg NpFe AgTi ____ FeNp HgAu ____ "}

 GemStone.k2j56y7 = {  // 1392409995156
 fn:"PuFe SnTi ____ CuNp PbAu ____ ____ NpCu ____ ____ FePu HgHg ",
 cn:"NpCu ____ ____ FePu HgHg PuFe SnTi ____ CuNp PbAu ____ ____ ",
 gn:"____ CuNp PbAu ____ ____ NpCu ____ ____ FePu HgHg PuFe SnTi ",
 dn:"____ FePu HgHg PuFe SnTi ____ CuNp PbAu ____ ____ NpCu ____ ",
 an:"PbAu ____ ____ NpCu ____ ____ FePu HgHg PuFe SnTi ____ CuNp ",
 en:"HgHg PuFe SnTi ____ CuNp PbAu ____ ____ NpCu ____ ____ FePu ",
 bn:"____ NpCu ____ ____ FePu HgHg PuFe SnTi ____ CuNp PbAu ____ "}

 GemStone.j346y5 = {  // 1392410044171
 fn:"PuFe ____ ____ CuNp ____ ____ AuPb NpCu ____ TiSn FePu HgHg ",
 cn:"NpCu ____ TiSn FePu HgHg PuFe ____ ____ CuNp ____ ____ AuPb ",
 gn:"____ CuNp ____ ____ AuPb NpCu ____ TiSn FePu HgHg PuFe ____ ",
 dn:"TiSn FePu HgHg PuFe ____ ____ CuNp ____ ____ AuPb NpCu ____ ",
 an:"____ ____ AuPb NpCu ____ TiSn FePu HgHg PuFe ____ ____ CuNp ",
 en:"HgHg PuFe ____ ____ CuNp ____ ____ AuPb NpCu ____ TiSn FePu ",
 bn:"AuPb NpCu ____ TiSn FePu HgHg PuFe ____ ____ CuNp ____ ____ "}

 GemStone.j3k5 = {  // 1392410082531
 fn:"PuFe ____ ____ CuNp PbAu ____ AuPb NpCu ____ TiSn FePu ____ ",
 cn:"NpCu ____ TiSn FePu ____ PuFe ____ ____ CuNp PbAu ____ AuPb ",
 gn:"____ CuNp PbAu ____ AuPb NpCu ____ TiSn FePu ____ PuFe ____ ",
 dn:"TiSn FePu ____ PuFe ____ ____ CuNp PbAu ____ AuPb NpCu ____ ",
 an:"PbAu ____ AuPb NpCu ____ TiSn FePu ____ PuFe ____ ____ CuNp ",
 en:"____ PuFe ____ ____ CuNp PbAu ____ AuPb NpCu ____ TiSn FePu ",
 bn:"AuPb NpCu ____ TiSn FePu ____ PuFe ____ ____ CuNp PbAu ____ "}

 GemStone.n167 = {  // 1392410122046
 fn:"PuFe SnTi ____ CuNp PbAu ____ AuPb NpCu ____ ____ FePu ____ ",
 cn:"NpCu ____ ____ FePu ____ PuFe SnTi ____ CuNp PbAu ____ AuPb ",
 gn:"____ CuNp PbAu ____ AuPb NpCu ____ ____ FePu ____ PuFe SnTi ",
 dn:"____ FePu ____ PuFe SnTi ____ CuNp PbAu ____ AuPb NpCu ____ ",
 an:"PbAu ____ AuPb NpCu ____ ____ FePu ____ PuFe SnTi ____ CuNp ",
 en:"____ PuFe SnTi ____ CuNp PbAu ____ AuPb NpCu ____ ____ FePu ",
 bn:"AuPb NpCu ____ ____ FePu ____ PuFe SnTi ____ CuNp PbAu ____ "}

 GemStone.k2 = {  // 1392410161843
 fn:"PuFe ____ UrAg ____ PbAu ____ AuPb NpCu ____ ____ FePb HgHg ",
 cn:"NpCu ____ ____ FePu HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ",
 gn:"UrAg ____ PbAu ____ AuPb NpCu ____ ____ FePu HgHg PuFe ____ ",
 dn:"____ FePu HgHg PuFe ____ UrAg ____ PbAu ____ AuPb NpCu ____ ",
 an:"PbAu ____ AuPb NpCu ____ ____ FePu HgHg PuFe ____ UrAg ____ ",
 en:"HgHg PuFe ____ UrAg ____ PbAu ____ AuPb NpCu ____ ____ FePu ",
 bn:"AuPb NpCu ____ ____ FePu HgHg PuFe ____ UrAg ____ PbAu ____ "}

 GemStone.k125 = {  // 1392410200203
 fn:"PuFe ____ ____ CuNp PbAu ____ AuPb ____ AgUr ____ FePu HgHg ",
 cn:"____ AgUr ____ FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ",
 gn:"____ CuNp PbAu ____ AuPb ____ AgUr ____ FePu HgHg PuFe ____ ",
 dn:"____ FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ____ AgUr ",
 an:"PbAu ____ AuPb ____ AgUr ____ FePu HgHg PuFe ____ ____ CuNp ",
 en:"HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ____ AgUr ____ FePu ",
 bn:"AuPb ____ AgUr ____ FePu HgHg PuFe ____ ____ CuNp PbAu ____ "}

 GemStone.k25 = {  // 1392410232859
 fn:"PuFe ____ ____ CuNp PbAu ____ AuPb NpCu ____ ____ FePb HgHg ",
 cn:"NpCu ____ ____ FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ",
 gn:"____ CuNp PbAu ____ AuPb NpCu ____ ____ FePu HgHg PuFe ____ ",
 dn:"____ FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb NpCu ____ ",
 an:"PbAu ____ AuPb NpCu ____ ____ FePu HgHg PuFe ____ ____ CuNp ",
 en:"HgHg PuFe ____ ____ CuNp PbAu ____ AuPb NpCu ____ ____ FePu ",
 bn:"AuPb NpCu ____ ____ FePu HgHg PuFe ____ ____ CuNp PbAu ____ "}

 GemStone.k12 = {  // 1392410264781
 fn:"PuFe ____ UrAg ____ PbAu ____ AuPb ____ AgUr ____ FePu HgHg ",
 cn:"____ AgUr ____ FePu HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ",
 gn:"UrAg ____ PbAu ____ AuPb ____ AgUr ____ FePu HgHg PuFe ____ ",
 dn:"____ FePu HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ____ AgUr ",
 an:"PbAu ____ AuPb ____ AgUr ____ FePu HgHg PuFe ____ UrAg ____ ",
 en:"HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ____ AgUr ____ FePu ",
 bn:"AuPb ____ AgUr ____ FePu HgHg PuFe ____ UrAg ____ PbAu ____ "}

 GemStone.k12j5 = {  // 1392410307109
 fn:"PuFe SnTi ____ ____ PbAu ____ AuPb ____ AgUr ____ FePu HgHg ",
 cn:"____ AgUr ____ FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ",
 gn:"____ ____ PbAu ____ AuPb ____ AgUr ____ FePu HgHg PuFe SnTi ",
 dn:"____ FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ____ AgUr ",
 an:"PbAu ____ AuPb ____ AgUr ____ FePu HgHg PuFe SnTi ____ ____ ",
 en:"HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ____ AgUr ____ FePu ",
 bn:"AuPb ____ AgUr ____ FePu HgHg PuFe SnTi ____ ____ PbAu ____ "}

 GemStone.k2x1 = {  // 1392410342625
 fn:"PuFe ____ UrAg ____ PbAu ____ AuPb ____ ____ TiSn FePu HgHg ",
 cn:"____ ____ TiSn FePu HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ",
 gn:"UrAg ____ PbAu ____ AuPb ____ ____ TiSn FePu HgHg PuFe ____ ",
 dn:"TiSn FePu HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ____ ____ ",
 an:"PbAu ____ AuPb ____ ____ TiSn FePu HgHg PuFe ____ UrAg ____ ",
 en:"HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ____ ____ TiSn FePu ",
 bn:"AuPb ____ ____ TiSn FePu HgHg PuFe ____ UrAg ____ PbAu ____ "}

 GemStone.k2j5 = {  // 1392410377875
 fn:"PuFe SnTi ____ ____ PbAu ____ AuPb NpCu ____ ____ FePu HgHg ",
 cn:"NpCu ____ ____ FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ",
 gn:"____ ____ PbAu ____ AuPb NpCu ____ ____ FePu HgHg PuFe SnTi ",
 dn:"____ FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb NpCu ____ ",
 an:"PbAu ____ AuPb NpCu ____ ____ FePu HgHg PuFe SnTi ____ ____ ",
 en:"HgHg PuFe SnTi ____ ____ PbAu ____ AuPb NpCu ____ ____ FePu ",
 bn:"AuPb NpCu ____ ____ FePu HgHg PuFe SnTi ____ ____ PbAu ____ "}

 GemStone.k25x1 = {  // 1392410412546
 fn:"PuFe ____ ____ CuNp PbAu ____ AuPb ____ ____ TiSn FePu HgHg ",
 cn:"____ ____ TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ",
 gn:"____ CuNp PbAu ____ AuPb ____ ____ TiSn FePu HgHg PuFe ____ ",
 dn:"TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ____ ____ ",
 an:"PbAu ____ AuPb ____ ____ TiSn FePu HgHg PuFe ____ ____ CuNp ",
 en:"HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ____ ____ TiSn FePu ",
 bn:"AuPb ____ ____ TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ "}

 GemStone.k2j56 = {  // 1392410449765
 fn:"PuFe SnTi ____ CuNp ____ ____ AuPb NpCu ____ ____ FePu HgHg ",
 cn:"NpCu ____ ____ FePu HgHg PuFe SnTi ____ CuNp ____ ____ AuPb ",
 gn:"____ CuNp ____ ____ AuPb NpCu ____ ____ FePu HgHg PuFe SnTi ",
 dn:"____ FePu HgHg PuFe SnTi ____ CuNp ____ ____ AuPb NpCu ____ ",
 an:"____ ____ AuPb NpCu ____ ____ FePu HgHg PuFe SnTi ____ CuNp ",
 en:"HgHg PuFe SnTi ____ CuNp ____ ____ AuPb NpCu ____ ____ FePu ",
 bn:"AuPb NpCu ____ ____ FePu HgHg PuFe SnTi ____ CuNp ____ ____ "}

 GemStone.k257x1 = {  // 1392410485421
 fn:"PuFe ____ ____ CuNp PbAu ____ ____ NpCu ____ TiSn FePu HgHg ",
 cn:"NpCu ____ TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ ____ ",
 gn:"____ CuNp PbAu ____ ____ NpCu ____ TiSn FePu HgHg PuFe ____ ",
 dn:"TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ ____ NpCu ____ ",
 an:"PbAu ____ ____ NpCu ____ TiSn FePu HgHg PuFe ____ ____ CuNp ",
 en:"HgHg PuFe ____ ____ CuNp PbAu ____ ____ NpCu ____ TiSn FePu ",
 bn:"____ NpCu ____ TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ "}

 GemStone.k2j5y6 = {  // 1392410520937
 fn:"PuFe SnTi UrAg ____ ____ ____ AuPb NpCu ____ ____ FePu HgHg ",
 cn:"NpCu ____ ____ FePu HgHg PuFe SnTi UrAg ____ ____ ____ AuPb ",
 gn:"UrAg ____ ____ ____ AuPb NpCu ____ ____ FePu HgHg PuFe SnTi ",
 dn:"____ FePu HgHg PuFe SnTi UrAg ____ ____ ____ AuPb NpCu ____ ",
 an:"____ ____ AuPb NpCu ____ ____ FePu HgHg PuFe SnTi UrAg ____ ",
 en:"HgHg PuFe SnTi UrAg ____ ____ ____ AuPb NpCu ____ ____ FePu ",
 bn:"AuPb NpCu ____ ____ FePu HgHg PuFe SnTi UrAg ____ ____ ____ "}

 GemStone.k25x17 = {  // 1392410552343
 fn:"PuFe ____ ____ CuNp PbAu ____ ____ ____ AgUr TiSn FePu HgHg ",
 cn:"____ AgUr TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ ____ ",
 gn:"____ CuNp PbAu ____ ____ ____ AgUr TiSn FePu HgHg PuFe ____ ",
 dn:"TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ ____ ____ AgUr ",
 an:"PbAu ____ ____ ____ AgUr TiSn FePu HgHg PuFe ____ ____ CuNp ",
 en:"HgHg PuFe ____ ____ CuNp PbAu ____ ____ ____ AgUr TiSn FePu ",
 bn:"____ ____ AgUr TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ "}

 GemStone.k2j5x1 = {  // 1392410588312
 fn:"PuFe SnTi ____ ____ PbAu ____ AuPb ____ ____ TiSn FePu HgHg ",
 cn:"____ ____ TiSn FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ",
 gn:"____ ____ PbAu ____ AuPb ____ ____ TiSn FePu HgHg PuFe SnTi ",
 dn:"TiSn FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ____ ____ ",
 an:"PbAu ____ AuPb ____ ____ TiSn FePu HgHg PuFe SnTi ____ ____ ",
 en:"HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ____ ____ TiSn FePu ",
 bn:"AuPb ____ ____ TiSn FePu HgHg PuFe SnTi ____ ____ PbAu ____ "}

 GemStone.k1j5 = {  // 1392410620140
 fn:"FeFe HgTi ____ ____ UrAu ____ PbPb ____ AuUr NpSn ____ TiHg ",
 cn:"____ AuUr NpSn ____ TiHg FeFe HgTi ____ ____ UrAu ____ PbPb ",
 gn:"____ ____ UrAu ____ PbPb ____ AuUr NpSn ____ TiHg FeFe HgTi ",
 dn:"NpSn ____ TiHg FeFe HgTi ____ ____ UrAu ____ PbPb ____ AuUr ",
 an:"UrAu ____ PbPb ____ AuUr NpSn ____ TiHg FeFe HgTi ____ ____ ",
 en:"TiHg FeFe HgTi ____ ____ UrAu ____ PbPb ____ AuUr NpSn ____ ",
 bn:"PbPb ____ AuUr NpSn ____ TiHg FeFe HgTi ____ ____ UrAu ____ "}

 GemStone.n67x2 = {  // 1392410652343
 fn:"FeFe HgTi ____ SnNp UrAu ____ PbPb ____ AuUr ____ ____ TiHg ",
 cn:"____ AuUr ____ ____ TiHg FeFe HgTi ____ SnNp UrAu ____ PbPb ",
 gn:"____ SnNp UrAu ____ PbPb ____ AuUr ____ ____ TiHg FeFe HgTi ",
 dn:"____ ____ TiHg FeFe HgTi ____ SnNp UrAu ____ PbPb ____ AuUr ",
 an:"UrAu ____ PbPb ____ AuUr ____ ____ TiHg FeFe HgTi ____ SnNp ",
 en:"TiHg FeFe HgTi ____ SnNp UrAu ____ PbPb ____ AuUr ____ ____ ",
 bn:"PbPb ____ AuUr ____ ____ TiHg FeFe HgTi ____ SnNp UrAu ____ "}

 GemStone.k1j56y7 = {  // 1425171441213
 fn:"FeFe HgTi ____ SnNp UrAu ____ ____ ____ AuUr NpSn ____ TiHg ",
 cn:"____ AuUr NpSn ____ TiHg FeFe HgTi ____ SnNp UrAu ____ ____ ",
 gn:"____ SnNp UrAu ____ ____ ____ AuUr NpSn ____ TiHg FeFe HgTi ",
 dn:"NpSn ____ TiHg FeFe HgTi ____ SnNp UrAu ____ ____ ____ AuUr ",
 an:"UrAu ____ ____ ____ AuUr NpSn ____ TiHg FeFe HgTi ____ SnNp ",
 en:"TiHg FeFe HgTi ____ SnNp UrAu ____ ____ ____ AuUr NpSn ____ ",
 bn:"____ ____ AuUr NpSn ____ TiHg FeFe HgTi ____ SnNp UrAu ____ "}

 GemStone.j2k5 = {  // 1392410698484
 fn:"CuFe ____ ____ AuNp NpAu ____ TiPb FeCu HgMn ____ ____ MnHg ",
 cn:"FeCu HgMn ____ ____ MnHg CuFe ____ ____ AuNp NpAu ____ TiPb ",
 gn:"____ AuNp NpAu ____ TiPb FeCu HgMn ____ ____ MnHg CuFe ____ ",
 dn:"____ ____ MnHg CuFe ____ ____ AuNp NpAu ____ TiPb FeCu HgMn ",
 an:"NpAu ____ TiPb FeCu HgMn ____ ____ MnHg CuFe ____ ____ AuNp ",
 en:"MnHg CuFe ____ ____ AuNp NpAu ____ TiPb FeCu HgMn ____ ____ ",
 bn:"TiPb FeCu HgMn ____ ____ MnHg CuFe ____ ____ AuNp NpAu ____ "}

 GemStone.n6x2 = {  // 1392410731296
 fn:"CuFe PbTi ____ AuNp NpAu ____ ____ FeCu HgMn ____ ____ MnHg ",
 cn:"FeCu HgMn ____ ____ MnHg CuFe PbTi ____ AuNp NpAu ____ ____ ",
 gn:"____ AuNp NpAu ____ ____ FeCu HgMn ____ ____ MnHg CuFe PbTi ",
 dn:"____ ____ MnHg CuFe PbTi ____ AuNp NpAu ____ ____ FeCu HgMn ",
 an:"NpAu ____ ____ FeCu HgMn ____ ____ MnHg CuFe PbTi ____ AuNp ",
 en:"MnHg CuFe PbTi ____ AuNp NpAu ____ ____ FeCu HgMn ____ ____ ",
 bn:"____ FeCu HgMn ____ ____ MnHg CuFe PbTi ____ AuNp NpAu ____ "}

 GemStone.j25 = {  // 1392410758328
 fn:"CuFe PbTi ____ ____ NpAu ____ TiPb FeCu HgMn ____ ____ MnHg ",
 cn:"FeCu HgMn ____ ____ MnHg CuFe PbTi ____ ____ NpAu ____ TiPb ",
 gn:"____ ____ NpAu ____ TiPb FeCu HgMn ____ ____ MnHg CuFe PbTi ",
 dn:"____ ____ MnHg CuFe PbTi ____ ____ NpAu ____ TiPb FeCu HgMn ",
 an:"NpAu ____ TiPb FeCu HgMn ____ ____ MnHg CuFe PbTi ____ ____ ",
 en:"MnHg CuFe PbTi ____ ____ NpAu ____ TiPb FeCu HgMn ____ ____ ",
 bn:"TiPb FeCu HgMn ____ ____ MnHg CuFe PbTi ____ ____ NpAu ____ "}

 GemStone.j256 = {  // 1392410787578
 fn:"CuFe PbTi ____ AuNp ____ ____ TiPb FeCu HgMn ____ ____ MnHg ",
 cn:"FeCu HgMn ____ ____ MnHg CuFe PbTi ____ AuNp ____ ____ TiPb ",
 gn:"____ AuNp ____ ____ TiPb FeCu HgMn ____ ____ MnHg CuFe PbTi ",
 dn:"____ ____ MnHg CuFe PbTi ____ AuNp ____ ____ TiPb FeCu HgMn ",
 an:"____ ____ TiPb FeCu HgMn ____ ____ MnHg CuFe PbTi ____ AuNp ",
 en:"MnHg CuFe PbTi ____ AuNp ____ ____ TiPb FeCu HgMn ____ ____ ",
 bn:"TiPb FeCu HgMn ____ ____ MnHg CuFe PbTi ____ AuNp ____ ____ "}

