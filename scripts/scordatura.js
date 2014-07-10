/*  Copyright 2014 Reid Netterville III  */

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

var q4t = function( t, x ) {
document.getElementById("sT").innerHTML=t
document.getElementById("s0").innerHTML=x.slice(25,61).concat(x.slice(0,25))
document.getElementById("s1").innerHTML=x.slice( 0,61).concat(x.slice(0, 0))
document.getElementById("s2").innerHTML=x.slice(35,61).concat(x.slice(0,35))
document.getElementById("s3").innerHTML=x.slice(10,61).concat(x.slice(0,10))
document.getElementById("s4").innerHTML=x.slice(45,61).concat(x.slice(0,45))
document.getElementById("s5").innerHTML=x.slice(20,62).concat(x.slice(0,20))
}

function sGj(o){document.writeln(o.slice(30,60).concat(o.slice(0,30))) }
function sDj(o){document.writeln(o.slice(5, 60).concat(o.slice(0, 5))) }
function sAj(o){document.writeln(o.slice(40,60).concat(o.slice(0,40))) }
function sEj(o){document.writeln(o.slice(15,60).concat(o.slice(0,15))) }
function sBj(o){document.writeln(o.slice(50,60).concat(o.slice(0,50))) }
function sFn(o){document.writeln(o.slice(25,60).concat(o.slice(0,25))) }
function sCn(o){document.writeln(o.slice(0, 60).concat(o.slice(0, 0))) }
function sGn(o){document.writeln(o.slice(35,60).concat(o.slice(0,35))) }
function sDn(o){document.writeln(o.slice(10,60).concat(o.slice(0,10))) }
function sAn(o){document.writeln(o.slice(45,60).concat(o.slice(0,45))) }
function sEn(o){document.writeln(o.slice(20,60).concat(o.slice(0,20))) }
function sBn(o){document.writeln(o.slice(55,60).concat(o.slice(0,55))) }
function sfk(o){document.writeln(o.slice(30,60).concat(o.slice(0,30))) }
function sCk(o){document.writeln(o.slice(5, 60).concat(o.slice(0, 5))) }
function sGk(o){document.writeln(o.slice(40,60).concat(o.slice(0,40))) }
function sDk(o){document.writeln(o.slice(15,60).concat(o.slice(0,15))) }
function sAk(o){document.writeln(o.slice(50,60).concat(o.slice(0,50))) }

function tk4(o) { return (o.slice(30,60).concat(o.slice(0,30))) }
function tn7(o) { return (o.slice(5, 60).concat(o.slice(0, 5))) }
function tn3(o) { return (o.slice(40,60).concat(o.slice(0,40))) }
function tn6(o) { return (o.slice(15,60).concat(o.slice(0,15))) }
function tn2(o) { return (o.slice(50,60).concat(o.slice(0,50))) }
function tn5(o) { return (o.slice(25,60).concat(o.slice(0,25))) }
function tn1(o) { return (o.slice(0, 60).concat(o.slice(0, 0))) }
function tn4(o) { return (o.slice(35,60).concat(o.slice(0,35))) }
function tj7(o) { return (o.slice(10,60).concat(o.slice(0,10))) }
function tj3(o) { return (o.slice(45,60).concat(o.slice(0,45))) }
function tj6(o) { return (o.slice(20,60).concat(o.slice(0,20))) }
function tj2(o) { return (o.slice(55,60).concat(o.slice(0,55))) }
function tj5(o) { return (o.slice(30,60).concat(o.slice(0,30))) }

var trans_ = tn1  // transposition

function j136y7()  { q4t("j136y7",  trans_(clave.j136y7))  }
function j167y2()  { q4t("j167y2",  trans_(clave.j167y2))  }
function j17k2()   { q4t("j17k2",   trans_(clave.j17k2))   }
function j17()     { q4t("j17",     trans_(clave.j17))     }
function j17y2()   { q4t("j17y2",   trans_(clave.j17y2))   }
function j236()    { q4t("j236",    trans_(clave.j236))    }
function j23k6()   { q4t("j23k6",   trans_(clave.j23k6))   }
function j23()     { q4t("j23",     trans_(clave.j23))     }
function j246y3()  { q4t("j246y3",  trans_(clave.j246y3))  }
function j256()    { q4t("j256",    trans_(clave.j256))    }
function j25()     { q4t("j25",     trans_(clave.j25))     }
function j25y6()   { q4t("j25y6",   trans_(clave.j25y6))   }
function j26()     { q4t("j26",     trans_(clave.j26))     }
function j26y34()  { q4t("j26y34",  trans_(clave.j26y34))  }
function j26y3()   { q4t("j26y3",   trans_(clave.j26y3))   }
function j2k34()   { q4t("j2k34",   trans_(clave.j2k34))   }
function j2k56()   { q4t("j2k56",   trans_(clave.j2k56))   }
function j2k56x4() { q4t("j2k56x4", trans_(clave.j2k56x4)) }
function j2k5()    { q4t("j2k5",    trans_(clave.j2k5))    }
function j2k6()    { q4t("j2k6",    trans_(clave.j2k6))    }
function j2k6x5()  { q4t("j2k6x5",  trans_(clave.j2k6x5))  }
function j2k6y3()  { q4t("j2k6y3",  trans_(clave.j2k6y3))  }
function j2()      { q4t("j2",      trans_(clave.j2))      }
function j2y3()    { q4t("j2y3",    trans_(clave.j2y3))    }
function j346y5()  { q4t("j346y5",  trans_(clave.j346y5))  }
function j36()     { q4t("j36",     trans_(clave.j36))     }
function j3k5()    { q4t("j3k5",    trans_(clave.j3k5))    }
function j3k5x4()  { q4t("j3k5x4",  trans_(clave.j3k5x4))  }
function j3k6()    { q4t("j3k6",    trans_(clave.j3k6))    }
function j3()      { q4t("j3",      trans_(clave.j3))      }
function j56()     { q4t("j56",     trans_(clave.j56))     }
function j56y7()   { q4t("j56y7",   trans_(clave.j56y7))   }
function j5()      { q4t("j5",      trans_(clave.j5))      }
function j5y6()    { q4t("j5y6",    trans_(clave.j5y6))    }
function j6()      { q4t("j6",      trans_(clave.j6))      }
function k125()    { q4t("k125",    trans_(clave.k125))    }
function k12j5()   { q4t("k12j5",   trans_(clave.k12j5))   }
function k12()     { q4t("k12",     trans_(clave.k12))     }
function k135x4()  { q4t("k135x4",  trans_(clave.k135x4))  }
function k157x6()  { q4t("k157x6",  trans_(clave.k157x6))  }
function k15()     { q4t("k15",     trans_(clave.k15))     }
function k1j5()    { q4t("k1j5",    trans_(clave.k1j5))    }
function k1j6()    { q4t("k1j6",    trans_(clave.k1j6))    }
function k1j6y7()  { q4t("k1j6y7",  trans_(clave.k1j6y7))  }
function k1()      { q4t("k1",      trans_(clave.k1))      }
function k256()    { q4t("k256",    trans_(clave.k256))    }
function k257x1()  { q4t("k257x1",  trans_(clave.k257x1))  }
function k25()     { q4t("k25",     trans_(clave.k25))     }
function k25x17()  { q4t("k25x17",  trans_(clave.k25x17))  }
function k25x1()   { q4t("k25x1",   trans_(clave.k25x1))   }
function k26()     { q4t("k26",     trans_(clave.k26))     }
function k26x5()   { q4t("k26x5",   trans_(clave.k26x5))   }
function k2j56()   { q4t("k2j56",   trans_(clave.k2j56))   }
function k2j56y7() { q4t("k2j56y7", trans_(clave.k2j56y7)) }
function k2j5()    { q4t("k2j5",    trans_(clave.k2j5))    }
function k2j5x1()  { q4t("k2j5x1",  trans_(clave.k2j5x1))  }
function k2j5y6()  { q4t("k2j5y6",  trans_(clave.k2j5y6))  }
function k2j6()    { q4t("k2j6",    trans_(clave.k2j6))    }
function k2()      { q4t("k2",      trans_(clave.k2))      }
function k2x1()    { q4t("k2x1",    trans_(clave.k2x1))    }
function k345x2()  { q4t("k345x2",  trans_(clave.k345x2))  }
function k34()     { q4t("k34",     trans_(clave.k34))     }
function k34x2()   { q4t("k34x2",   trans_(clave.k34x2))   }
function k56()     { q4t("k56",     trans_(clave.k56))     }
function k56x4()   { q4t("k56x4",   trans_(clave.k56x4))   }
function k5()      { q4t("k5",      trans_(clave.k5))      }
function k6()      { q4t("k6",      trans_(clave.k6))      }
function k6x5()    { q4t("k6x5",    trans_(clave.k6x5))    }
function n0()      { q4t("n0",      trans_(clave.n0))      }
function n167()    { q4t("n167",    trans_(clave.n167))    }
function n167x4()  { q4t("n167x4",  trans_(clave.n167x4))  }
function n25x6()   { q4t("n25x6",   trans_(clave.n25x6))   }
function n26y5()   { q4t("n26y5",   trans_(clave.n26y5))   }
function n345()    { q4t("n345",    trans_(clave.n345))    }
function n345y7()  { q4t("n345y7",  trans_(clave.n345y7))  }
function n45y2()   { q4t("n45y2",   trans_(clave.n45y2))   }
function n5y2()    { q4t("n5y2",    trans_(clave.n5y2))    }
function n67x2()   { q4t("n67x2",   trans_(clave.n67x2))   }
function n6x2()    { q4t("n6x2",    trans_(clave.n6x2))    }

function srl() {document.write(new Date().getTime()) }

