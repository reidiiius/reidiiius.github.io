// Copyright 2013-2016 Reid Netterville III

"use strict";

var beadgcf = {
  "n0_F"     :" PbFe ____ AuAg ____ AgAu ____ FePb HgCu ____ SnSn ____ CuHg ",
  "n0_C"     :" HgCu ____ SnSn ____ CuHg PbFe ____ AuAg ____ AgAu ____ FePb ",
  "n0_G"     :" AuAg ____ AgAu ____ FePb HgCu ____ SnSn ____ CuHg PbFe ____ ",
  "n0_D"     :" SnSn ____ CuHg PbFe ____ AuAg ____ AgAu ____ FePb HgCu ____ ",
  "n0_A"     :" AgAu ____ FePb HgCu ____ SnSn ____ CuHg PbFe ____ AuAg ____ ",
  "n0_E"     :" CuHg PbFe ____ AuAg ____ AgAu ____ FePb HgCu ____ SnSn ____ ",
  "n0_B"     :" FePb HgCu ____ SnSn ____ CuHg PbFe ____ AuAg ____ AgAu ____ ",

  "k6_F"     :" PbCu ____ AuSn ____ ____ TiFe FeTi HgAg ____ SnAu ____ CuPb ",
  "k6_C"     :" HgAg ____ SnAu ____ CuPb PbCu ____ AuSn ____ ____ TiFe FeTi ",
  "k6_G"     :" AuSn ____ ____ TiFe FeTi HgAg ____ SnAu ____ CuPb PbCu ____ ",
  "k6_D"     :" SnAu ____ CuPb PbCu ____ AuSn ____ ____ TiFe FeTi HgAg ____ ",
  "k6_A"     :" ____ TiFe FeTi HgAg ____ SnAu ____ CuPb PbCu ____ AuSn ____ ",
  "k6_E"     :" CuPb PbCu ____ AuSn ____ ____ TiFe FeTi HgAg ____ SnAu ____ ",
  "k6_B"     :" FeTi HgAg ____ SnAu ____ CuPb PbCu ____ AuSn ____ ____ TiFe ",

  "j17_F"    :" PbCu ____ AuSn ____ AgHg TiFe FeTi ____ ____ SnAu ____ CuPb ",
  "j17_C"    :" ____ ____ SnAu ____ CuPb PbCu ____ AuSn ____ AgHg TiFe FeTi ",
  "j17_G"    :" AuSn ____ AgHg TiFe FeTi ____ ____ SnAu ____ CuPb PbCu ____ ",
  "j17_D"    :" SnAu ____ CuPb PbCu ____ AuSn ____ AgHg TiFe FeTi ____ ____ ",
  "j17_A"    :" AgHg TiFe FeTi ____ ____ SnAu ____ CuPb PbCu ____ AuSn ____ ",
  "j17_E"    :" CuPb PbCu ____ AuSn ____ AgHg TiFe FeTi ____ ____ SnAu ____ ",
  "j17_B"    :" FeTi ____ ____ SnAu ____ CuPb PbCu ____ AuSn ____ AgHg TiFe ",

  "k6x5_F"   :" PbCu ____ ____ ____ AgHg TiFe FeTi HgAg ____ SnAu ____ CuPb ",
  "k6x5_C"   :" HgAg ____ SnAu ____ CuPb PbCu ____ ____ ____ AgHg TiFe FeTi ",
  "k6x5_G"   :" ____ ____ AgHg TiFe FeTi HgAg ____ SnAu ____ CuPb PbCu ____ ",
  "k6x5_D"   :" SnAu ____ CuPb PbCu ____ ____ ____ AgHg TiFe FeTi HgAg ____ ",
  "k6x5_A"   :" AgHg TiFe FeTi HgAg ____ SnAu ____ CuPb PbCu ____ ____ ____ ",
  "k6x5_E"   :" CuPb PbCu ____ ____ ____ AgHg TiFe FeTi HgAg ____ SnAu ____ ",
  "k6x5_B"   :" FeTi HgAg ____ SnAu ____ CuPb PbCu ____ ____ ____ AgHg TiFe ",

  "j17y2_F"  :" PbCu ____ AuSn ____ AgHg TiFe FeTi HgAg ____ ____ ____ CuPb ",
  "j17y2_C"  :" HgAg ____ ____ ____ CuPb PbCu ____ AuSn ____ AgHg TiFe FeTi ",
  "j17y2_G"  :" AuSn ____ AgHg TiFe FeTi HgAg ____ ____ ____ CuPb PbCu ____ ",
  "j17y2_D"  :" ____ ____ CuPb PbCu ____ AuSn ____ AgHg TiFe FeTi HgAg ____ ",
  "j17y2_A"  :" AgHg TiFe FeTi HgAg ____ ____ ____ CuPb PbCu ____ AuSn ____ ",
  "j17y2_E"  :" CuPb PbCu ____ AuSn ____ AgHg TiFe FeTi HgAg ____ ____ ____ ",
  "j17y2_B"  :" FeTi HgAg ____ ____ ____ CuPb PbCu ____ AuSn ____ AgHg TiFe ",

  "j3_F"     :" PbAg ____ AuAu ____ AgPb ____ FeUr HgSn ____ SnHg UrFe ____ ",
  "j3_C"     :" HgSn ____ SnHg UrFe ____ PbAg ____ AuAu ____ AgPb ____ FeUr ",
  "j3_G"     :" AuAu ____ AgPb ____ FeUr HgSn ____ SnHg UrFe ____ PbAg ____ ",
  "j3_D"     :" SnHg UrFe ____ PbAg ____ AuAu ____ AgPb ____ FeUr HgSn ____ ",
  "j3_A"     :" AgPb ____ FeUr HgSn ____ SnHg UrFe ____ PbAg ____ AuAu ____ ",
  "j3_E"     :" ____ PbAg ____ AuAu ____ AgPb ____ FeUr HgSn ____ SnHg UrFe ",
  "j3_B"     :" FeUr HgSn ____ SnHg UrFe ____ PbAg ____ AuAu ____ AgPb ____ ",

  "j34k6_F"  :" ____ ____ AuAu ____ ____ TiCu FeMn HgSn ____ SnHg MnFe CuTi ",
  "j34k6_C"  :" HgSn ____ SnHg MnFe CuTi ____ ____ AuAu ____ ____ TiCu FeMn ",
  "j34k6_G"  :" AuAu ____ ____ TiCu FeMn HgSn ____ SnHg MnFe CuTi ____ ____ ",
  "j34k6_D"  :" SnHg MnFe CuTi ____ ____ AuAu ____ ____ TiCu FeMn HgSn ____ ",
  "j34k6_A"  :" ____ TiCu FeMn HgSn ____ SnHg MnFe CuTi ____ ____ AuAu ____ ",
  "j34k6_E"  :" CuTi ____ ____ AuAu ____ ____ TiCu FeMn HgSn ____ SnHg MnFe ",
  "j34k6_B"  :" FeMn HgSn ____ SnHg MnFe CuTi ____ ____ AuAu ____ ____ TiCu ",

  "j17k2_F"  :" PbAg ____ AuAu ____ AgPb TiCu FeMn ____ ____ ____ MnFe CuTi ",
  "j17k2_C"  :" ____ ____ ____ MnFe CuTi PbAg ____ AuAu ____ AgPb TiCu FeMn ",
  "j17k2_G"  :" AuAu ____ AgPb TiCu FeMn ____ ____ ____ MnFe CuTi PbAg ____ ",
  "j17k2_D"  :" ____ MnFe CuTi PbAg ____ AuAu ____ AgPb TiCu FeMn ____ ____ ",
  "j17k2_A"  :" AgPb TiCu FeMn ____ ____ ____ MnFe CuTi PbAg ____ AuAu ____ ",
  "j17k2_E"  :" CuTi PbAg ____ AuAu ____ AgPb TiCu FeMn ____ ____ ____ MnFe ",
  "j17k2_B"  :" FeMn ____ ____ ____ MnFe CuTi PbAg ____ AuAu ____ AgPb TiCu ",

  "n26y5_F"  :" PbAg ____ ____ ____ AgPb TiCu FeMn ____ ____ SnHg MnFe CuTi ",
  "n26y5_C"  :" ____ ____ SnHg MnFe CuTi PbAg ____ ____ ____ AgPb TiCu FeMn ",
  "n26y5_G"  :" ____ ____ AgPb TiCu FeMn ____ ____ SnHg MnFe CuTi PbAg ____ ",
  "n26y5_D"  :" SnHg MnFe CuTi PbAg ____ ____ ____ AgPb TiCu FeMn ____ ____ ",
  "n26y5_A"  :" AgPb TiCu FeMn ____ ____ SnHg MnFe CuTi PbAg ____ ____ ____ ",
  "n26y5_E"  :" CuTi PbAg ____ ____ ____ AgPb TiCu FeMn ____ ____ SnHg MnFe ",
  "n26y5_B"  :" FeMn ____ ____ SnHg MnFe CuTi PbAg ____ ____ ____ AgPb TiCu ",

  "k26x5_F"  :" PbAg ____ ____ ____ AgPb TiCu FeMn HgSn ____ ____ MnFe CuTi ",
  "k26x5_C"  :" HgSn ____ ____ MnFe CuTi PbAg ____ ____ ____ AgPb TiCu FeMn ",
  "k26x5_G"  :" ____ ____ AgPb TiCu FeMn HgSn ____ ____ MnFe CuTi PbAg ____ ",
  "k26x5_D"  :" ____ MnFe CuTi PbAg ____ ____ ____ AgPb TiCu FeMn HgSn ____ ",
  "k26x5_A"  :" AgPb TiCu FeMn HgSn ____ ____ MnFe CuTi PbAg ____ ____ ____ ",
  "k26x5_E"  :" CuTi PbAg ____ ____ ____ AgPb TiCu FeMn HgSn ____ ____ MnFe ",
  "k26x5_B"  :" FeMn HgSn ____ ____ MnFe CuTi PbAg ____ ____ ____ AgPb TiCu ",

  "j6_F"     :" PbSn ____ AuHg NpFe ____ ____ FeNp HgAu ____ SnPb ____ CuUr ",
  "j6_C"     :" HgAu ____ SnPb ____ CuUr PbSn ____ AuHg NpFe ____ ____ FeNp ",
  "j6_G"     :" AuHg NpFe ____ ____ FeNp HgAu ____ SnPb ____ CuUr PbSn ____ ",
  "j6_D"     :" SnPb ____ CuUr PbSn ____ AuHg NpFe ____ ____ FeNp HgAu ____ ",
  "j6_A"     :" ____ ____ FeNp HgAu ____ SnPb ____ CuUr PbSn ____ AuHg NpFe ",
  "j6_E"     :" CuUr PbSn ____ AuHg NpFe ____ ____ FeNp HgAu ____ SnPb ____ ",
  "j6_B"     :" FeNp HgAu ____ SnPb ____ CuUr PbSn ____ AuHg NpFe ____ ____ ",

  "j36_F"    :" PbSn ____ AuHg NpFe ____ ____ FeNp HgAu ____ SnPb UrCu ____ ",
  "j36_C"    :" HgAu ____ SnPb UrCu ____ PbSn ____ AuHg NpFe ____ ____ FeNp ",
  "j36_G"    :" AuHg NpFe ____ ____ FeNp HgAu ____ SnPb UrCu ____ PbSn ____ ",
  "j36_D"    :" SnPb UrCu ____ PbSn ____ AuHg NpFe ____ ____ FeNp HgAu ____ ",
  "j36_A"    :" ____ ____ FeNp HgAu ____ SnPb UrCu ____ PbSn ____ AuHg NpFe ",
  "j36_E"    :" ____ PbSn ____ AuHg NpFe ____ ____ FeNp HgAu ____ SnPb UrCu ",
  "j36_B"    :" FeNp HgAu ____ SnPb UrCu ____ PbSn ____ AuHg NpFe ____ ____ ",

  "k56_F"    :" PbSn ____ ____ NpFe ____ TiAg FeNp HgAu ____ SnPb ____ CuUr ",
  "k56_C"    :" HgAu ____ SnPb ____ CuUr PbSn ____ ____ NpFe ____ TiAg FeNp ",
  "k56_G"    :" ____ NpFe ____ TiAg FeNp HgAu ____ SnPb ____ CuUr PbSn ____ ",
  "k56_D"    :" SnPb ____ CuUr PbSn ____ ____ NpFe ____ TiAg FeNp HgAu ____ ",
  "k56_A"    :" ____ TiAg FeNp HgAu ____ SnPb ____ CuUr PbSn ____ ____ NpFe ",
  "k56_E"    :" CuUr PbSn ____ ____ NpFe ____ TiAg FeNp HgAu ____ SnPb ____ ",
  "k56_B"    :" FeNp HgAu ____ SnPb ____ CuUr PbSn ____ ____ NpFe ____ TiAg ",

  "j136y7_F" :" PbSn ____ AuHg NpFe AgTi ____ FeNp ____ ____ SnPb UrCu ____ ",
  "j136y7_C" :" ____ ____ SnPb UrCu ____ PbSn ____ AuHg NpFe AgTi ____ FeNp ",
  "j136y7_G" :" AuHg NpFe AgTi ____ FeNp ____ ____ SnPb UrCu ____ PbSn ____ ",
  "j136y7_D" :" SnPb UrCu ____ PbSn ____ AuHg NpFe AgTi ____ FeNp ____ ____ ",
  "j136y7_A" :" AgTi ____ FeNp ____ ____ SnPb UrCu ____ PbSn ____ AuHg NpFe ",
  "j136y7_E" :" ____ PbSn ____ AuHg NpFe AgTi ____ FeNp ____ ____ SnPb UrCu ",
  "j136y7_B" :" FeNp ____ ____ SnPb UrCu ____ PbSn ____ AuHg NpFe AgTi ____ ",

  "k56x4_F"  :" ____ ____ AuHg NpFe ____ TiAg FeNp HgAu ____ SnPb ____ CuUr ",
  "k56x4_C"  :" HgAu ____ SnPb ____ CuUr ____ ____ AuHg NpFe ____ TiAg FeNp ",
  "k56x4_G"  :" AuHg NpFe ____ TiAg FeNp HgAu ____ SnPb ____ CuUr ____ ____ ",
  "k56x4_D"  :" SnPb ____ CuUr ____ ____ AuHg NpFe ____ TiAg FeNp HgAu ____ ",
  "k56x4_A"  :" ____ TiAg FeNp HgAu ____ SnPb ____ CuUr ____ ____ AuHg NpFe ",
  "k56x4_E"  :" CuUr ____ ____ AuHg NpFe ____ TiAg FeNp HgAu ____ SnPb ____ ",
  "k56x4_B"  :" FeNp HgAu ____ SnPb ____ CuUr ____ ____ AuHg NpFe ____ TiAg ",

  "n167x4_F" :" PbSn ____ AuHg NpFe AgTi ____ FeNp HgAu ____ ____ UrCu ____ ",
  "n167x4_C" :" HgAu ____ ____ UrCu ____ PbSn ____ AuHg NpFe AgTi ____ FeNp ",
  "n167x4_G" :" AuHg NpFe AgTi ____ FeNp HgAu ____ ____ UrCu ____ PbSn ____ ",
  "n167x4_D" :" ____ UrCu ____ PbSn ____ AuHg NpFe AgTi ____ FeNp HgAu ____ ",
  "n167x4_A" :" AgTi ____ FeNp HgAu ____ ____ UrCu ____ PbSn ____ AuHg NpFe ",
  "n167x4_E" :" ____ PbSn ____ AuHg NpFe AgTi ____ FeNp HgAu ____ ____ UrCu ",
  "n167x4_B" :" FeNp HgAu ____ ____ UrCu ____ PbSn ____ AuHg NpFe AgTi ____ ",

  "j3k5x4_F" :" ____ ____ AuHg NpFe AgTi ____ FeNp HgAu ____ SnPb UrCu ____ ",
  "j3k5x4_C" :" HgAu ____ SnPb UrCu ____ ____ ____ AuHg NpFe AgTi ____ FeNp ",
  "j3k5x4_G" :" AuHg NpFe AgTi ____ FeNp HgAu ____ SnPb UrCu ____ ____ ____ ",
  "j3k5x4_D" :" SnPb UrCu ____ ____ ____ AuHg NpFe AgTi ____ FeNp HgAu ____ ",
  "j3k5x4_A" :" AgTi ____ FeNp HgAu ____ SnPb UrCu ____ ____ ____ AuHg NpFe ",
  "j3k5x4_E" :" ____ ____ ____ AuHg NpFe AgTi ____ FeNp HgAu ____ SnPb UrCu ",
  "j3k5x4_B" :" FeNp HgAu ____ SnPb UrCu ____ ____ ____ AuHg NpFe AgTi ____ ",

  "j167y2_F" :" PbSn ____ AuHg NpFe ____ TiAg FeNp HgAu ____ ____ ____ CuUr ",
  "j167y2_C" :" HgAu ____ ____ ____ CuUr PbSn ____ AuHg NpFe ____ TiAg FeNp ",
  "j167y2_G" :" AuHg NpFe ____ TiAg FeNp HgAu ____ ____ ____ CuUr PbSn ____ ",
  "j167y2_D" :" ____ ____ CuUr PbSn ____ AuHg NpFe ____ TiAg FeNp HgAu ____ ",
  "j167y2_A" :" ____ TiAg FeNp HgAu ____ ____ ____ CuUr PbSn ____ AuHg NpFe ",
  "j167y2_E" :" CuUr PbSn ____ AuHg NpFe ____ TiAg FeNp HgAu ____ ____ ____ ",
  "j167y2_B" :" FeNp HgAu ____ ____ ____ CuUr PbSn ____ AuHg NpFe ____ TiAg ",

  "j2k56x4_F":" ____ ____ AuPb NpCu ____ TiSn FePu HgHg PuFe ____ ____ CuNp ",
  "j2k56x4_C":" HgHg PuFe ____ ____ CuNp ____ ____ AuPb NpCu ____ TiSn FePu ",
  "j2k56x4_G":" AuPb NpCu ____ TiSn FePu HgHg PuFe ____ ____ CuNp ____ ____ ",
  "j2k56x4_D":" ____ ____ CuNp ____ ____ AuPb NpCu ____ TiSn FePu HgHg PuFe ",
  "j2k56x4_A":" ____ TiSn FePu HgHg PuFe ____ ____ CuNp ____ ____ AuPb NpCu ",
  "j2k56x4_E":" CuNp ____ ____ AuPb NpCu ____ TiSn FePu HgHg PuFe ____ ____ ",
  "j2k56x4_B":" FePu HgHg PuFe ____ ____ CuNp ____ ____ AuPb NpCu ____ TiSn ",

  "k157x6_F" :" PbAu ____ ____ NpCu ____ ____ FePu HgHg PuFe SnTi ____ CuNp ",
  "k157x6_C" :" HgHg PuFe SnTi ____ CuNp PbAu ____ ____ NpCu ____ ____ FePu ",
  "k157x6_G" :" ____ NpCu ____ ____ FePu HgHg PuFe SnTi ____ CuNp PbAu ____ ",
  "k157x6_D" :" SnTi ____ CuNp PbAu ____ ____ NpCu ____ ____ FePu HgHg PuFe ",
  "k157x6_A" :" ____ ____ FePu HgHg PuFe SnTi ____ CuNp PbAu ____ ____ NpCu ",
  "k157x6_E" :" CuNp PbAu ____ ____ NpCu ____ ____ FePu HgHg PuFe SnTi ____ ",
  "k157x6_B" :" FePu HgHg PuFe SnTi ____ CuNp PbAu ____ ____ NpCu ____ ____ ",

  "k1j6_F"   :" PbAu ____ AuPb NpCu ____ ____ FePu ____ PuFe SnTi ____ CuNp ",
  "k1j6_C"   :" ____ PuFe SnTi ____ CuNp PbAu ____ AuPb NpCu ____ ____ FePu ",
  "k1j6_G"   :" AuPb NpCu ____ ____ FePu ____ PuFe SnTi ____ CuNp PbAu ____ ",
  "k1j6_D"   :" SnTi ____ CuNp PbAu ____ AuPb NpCu ____ ____ FePu ____ PuFe ",
  "k1j6_A"   :" ____ ____ FePu ____ PuFe SnTi ____ CuNp PbAu ____ AuPb NpCu ",
  "k1j6_E"   :" CuNp PbAu ____ AuPb NpCu ____ ____ FePu ____ PuFe SnTi ____ ",
  "k1j6_B"   :" FePu ____ PuFe SnTi ____ CuNp PbAu ____ AuPb NpCu ____ ____ ",

  "n345_F"   :" PbAu ____ AuPb NpCu ____ TiSn FePu ____ PuFe ____ ____ CuNp ",
  "n345_C"   :" ____ PuFe ____ ____ CuNp PbAu ____ AuPb NpCu ____ TiSn FePu ",
  "n345_G"   :" AuPb NpCu ____ TiSn FePu ____ PuFe ____ ____ CuNp PbAu ____ ",
  "n345_D"   :" ____ ____ CuNp PbAu ____ AuPb NpCu ____ TiSn FePu ____ PuFe ",
  "n345_A"   :" ____ TiSn FePu ____ PuFe ____ ____ CuNp PbAu ____ AuPb NpCu ",
  "n345_E"   :" CuNp PbAu ____ AuPb NpCu ____ TiSn FePu ____ PuFe ____ ____ ",
  "n345_B"   :" FePu ____ PuFe ____ ____ CuNp PbAu ____ AuPb NpCu ____ TiSn ",

  "j2_F"     :" PbAu ____ AuPb ____ AgUr ____ FePu HgHg PuFe ____ ____ CuNp ",
  "j2_C"     :" HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ____ AgUr ____ FePu ",
  "j2_G"     :" AuPb ____ AgUr ____ FePu HgHg PuFe ____ ____ CuNp PbAu ____ ",
  "j2_D"     :" ____ ____ CuNp PbAu ____ AuPb ____ AgUr ____ FePu HgHg PuFe ",
  "j2_A"     :" AgUr ____ FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ____ ",
  "j2_E"     :" CuNp PbAu ____ AuPb ____ AgUr ____ FePu HgHg PuFe ____ ____ ",
  "j2_B"     :" FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ____ AgUr ____ ",

  "j26_F"    :" PbAu ____ AuPb NpCu ____ ____ FePu HgHg PuFe ____ ____ CuNp ",
  "j26_C"    :" HgHg PuFe ____ ____ CuNp PbAu ____ AuPb NpCu ____ ____ FePu ",
  "j26_G"    :" AuPb NpCu ____ ____ FePu HgHg PuFe ____ ____ CuNp PbAu ____ ",
  "j26_D"    :" ____ ____ CuNp PbAu ____ AuPb NpCu ____ ____ FePu HgHg PuFe ",
  "j26_A"    :" ____ ____ FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb NpCu ",
  "j26_E"    :" CuNp PbAu ____ AuPb NpCu ____ ____ FePu HgHg PuFe ____ ____ ",
  "j26_B"    :" FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb NpCu ____ ____ ",

  "j236_F"   :" PbAu ____ AuPb NpCu ____ ____ FePb HgHg PuFe ____ UrAg ____ ",
  "j236_C"   :" HgHg PuFe ____ UrAg ____ PbAu ____ AuPb NpCu ____ ____ FePu ",
  "j236_G"   :" AuPb NpCu ____ ____ FePu HgHg PuFe ____ UrAg ____ PbAu ____ ",
  "j236_D"   :" ____ UrAg ____ PbAu ____ AuPb NpCu ____ ____ FePu HgHg PuFe ",
  "j236_A"   :" ____ ____ FePu HgHg PuFe ____ UrAg ____ PbAu ____ AuPb NpCu ",
  "j236_E"   :" ____ PbAu ____ AuPb NpCu ____ ____ FePu HgHg PuFe ____ UrAg ",
  "j236_B"   :" FePu HgHg PuFe ____ UrAg ____ PbAu ____ AuPb NpCu ____ ____ ",

  "j23_F"    :" PbAu ____ AuPb ____ AgUr ____ FePu HgHg PuFe ____ UrAg ____ ",
  "j23_C"    :" HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ____ AgUr ____ FePu ",
  "j23_G"    :" AuPb ____ AgUr ____ FePu HgHg PuFe ____ UrAg ____ PbAu ____ ",
  "j23_D"    :" ____ UrAg ____ PbAu ____ AuPb ____ AgUr ____ FePu HgHg PuFe ",
  "j23_A"    :" AgUr ____ FePu HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ____ ",
  "j23_E"    :" ____ PbAu ____ AuPb ____ AgUr ____ FePu HgHg PuFe ____ UrAg ",
  "j23_B"    :" FePu HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ____ AgUr ____ ",

  "j23k6_F"  :" PbAu ____ AuPb ____ ____ TiSn FePu HgHg PuFe ____ UrAg ____ ",
  "j23k6_C"  :" HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ____ ____ TiSn FePu ",
  "j23k6_G"  :" AuPb ____ ____ TiSn FePu HgHg PuFe ____ UrAg ____ PbAu ____ ",
  "j23k6_D"  :" ____ UrAg ____ PbAu ____ AuPb ____ ____ TiSn FePu HgHg PuFe ",
  "j23k6_A"  :" ____ TiSn FePu HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ____ ",
  "j23k6_E"  :" ____ PbAu ____ AuPb ____ ____ TiSn FePu HgHg PuFe ____ UrAg ",
  "j23k6_B"  :" FePu HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ____ ____ TiSn ",

  "j2y3_F"   :" PbAu ____ AuPb ____ AgUr ____ FePu HgHg PuFe SnTi ____ ____ ",
  "j2y3_C"   :" HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ____ AgUr ____ FePu ",
  "j2y3_G"   :" AuPb ____ AgUr ____ FePu HgHg PuFe SnTi ____ ____ PbAu ____ ",
  "j2y3_D"   :" SnTi ____ ____ PbAu ____ AuPb ____ AgUr ____ FePu HgHg PuFe ",
  "j2y3_A"   :" AgUr ____ FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ____ ",
  "j2y3_E"   :" ____ PbAu ____ AuPb ____ AgUr ____ FePu HgHg PuFe SnTi ____ ",
  "j2y3_B"   :" FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ____ AgUr ____ ",

  "j2k6_F"   :" PbAu ____ AuPb ____ ____ TiSn FePu HgHg PuFe ____ ____ CuNp ",
  "j2k6_C"   :" HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ____ ____ TiSn FePu ",
  "j2k6_G"   :" AuPb ____ ____ TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ ",
  "j2k6_D"   :" ____ ____ CuNp PbAu ____ AuPb ____ ____ TiSn FePu HgHg PuFe ",
  "j2k6_A"   :" ____ TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ____ ",
  "j2k6_E"   :" CuNp PbAu ____ AuPb ____ ____ TiSn FePu HgHg PuFe ____ ____ ",
  "j2k6_B"   :" FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ____ ____ TiSn ",

  "j26y3_F"  :" PbAu ____ AuPb NpCu ____ ____ FePu HgHg PuFe SnTi ____ ____ ",
  "j26y3_C"  :" HgHg PuFe SnTi ____ ____ PbAu ____ AuPb NpCu ____ ____ FePu ",
  "j26y3_G"  :" AuPb NpCu ____ ____ FePu HgHg PuFe SnTi ____ ____ PbAu ____ ",
  "j26y3_D"  :" SnTi ____ ____ PbAu ____ AuPb NpCu ____ ____ FePu HgHg PuFe ",
  "j26y3_A"  :" ____ ____ FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb NpCu ",
  "j26y3_E"  :" ____ PbAu ____ AuPb NpCu ____ ____ FePu HgHg PuFe SnTi ____ ",
  "j26y3_B"  :" FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb NpCu ____ ____ ",

  "j2k56_F"  :" PbAu ____ ____ NpCu ____ TiSn FePu HgHg PuFe ____ ____ CuNp ",
  "j2k56_C"  :" HgHg PuFe ____ ____ CuNp PbAu ____ ____ NpCu ____ TiSn FePu ",
  "j2k56_G"  :" ____ NpCu ____ TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ ",
  "j2k56_D"  :" ____ ____ CuNp PbAu ____ ____ NpCu ____ TiSn FePu HgHg PuFe ",
  "j2k56_A"  :" ____ TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ ____ NpCu ",
  "j2k56_E"  :" CuNp PbAu ____ ____ NpCu ____ TiSn FePu HgHg PuFe ____ ____ ",
  "j2k56_B"  :" FePu HgHg PuFe ____ ____ CuNp PbAu ____ ____ NpCu ____ TiSn ",

  "j246y3_F" :" ____ ____ AuPb NpCu ____ ____ FePu HgHg PuFe SnTi ____ CuNp ",
  "j246y3_C" :" HgHg PuFe SnTi ____ CuNp ____ ____ AuPb NpCu ____ ____ FePu ",
  "j246y3_G" :" AuPb NpCu ____ ____ FePu HgHg PuFe SnTi ____ CuNp ____ ____ ",
  "j246y3_D" :" SnTi ____ CuNp ____ ____ AuPb NpCu ____ ____ FePu HgHg PuFe ",
  "j246y3_A" :" ____ ____ FePu HgHg PuFe SnTi ____ CuNp ____ ____ AuPb NpCu ",
  "j246y3_E" :" CuNp ____ ____ AuPb NpCu ____ ____ FePu HgHg PuFe SnTi ____ ",
  "j246y3_B" :" FePu HgHg PuFe SnTi ____ CuNp ____ ____ AuPb NpCu ____ ____ ",

  "j26y34_F" :" ____ ____ AuPb NpCu ____ ____ FePu HgHg PuFe SnTi UrAg ____ ",
  "j26y34_C" :" HgHg PuFe SnTi UrAg ____ ____ ____ AuPb NpCu ____ ____ FePu ",
  "j26y34_G" :" AuPb NpCu ____ ____ FePu HgHg PuFe SnTi UrAg ____ ____ ____ ",
  "j26y34_D" :" SnTi UrAg ____ ____ ____ AuPb NpCu ____ ____ FePu HgHg PuFe ",
  "j26y34_A" :" ____ ____ FePu HgHg PuFe SnTi UrAg ____ ____ ____ AuPb NpCu ",
  "j26y34_E" :" ____ ____ ____ AuPb NpCu ____ ____ FePu HgHg PuFe SnTi UrAg ",
  "j26y34_B" :" FePu HgHg PuFe SnTi UrAg ____ ____ ____ AuPb NpCu ____ ____ ",

  "j2k6x5_F" :" PbAu ____ ____ ____ AgUr TiSn FePu HgHg PuFe ____ ____ CuNp ",
  "j2k6x5_C" :" HgHg PuFe ____ ____ CuNp PbAu ____ ____ ____ AgUr TiSn FePu ",
  "j2k6x5_G" :" ____ ____ AgUr TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ ",
  "j2k6x5_D" :" ____ ____ CuNp PbAu ____ ____ ____ AgUr TiSn FePu HgHg PuFe ",
  "j2k6x5_A" :" AgUr TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ ____ ____ ",
  "j2k6x5_E" :" CuNp PbAu ____ ____ ____ AgUr TiSn FePu HgHg PuFe ____ ____ ",
  "j2k6x5_B" :" FePu HgHg PuFe ____ ____ CuNp PbAu ____ ____ ____ AgUr TiSn ",

  "j2k6y3_F" :" PbAu ____ AuPb ____ ____ TiSn FePu HgHg PuFe SnTi ____ ____ ",
  "j2k6y3_C" :" HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ____ ____ TiSn FePu ",
  "j2k6y3_G" :" AuPb ____ ____ TiSn FePu HgHg PuFe SnTi ____ ____ PbAu ____ ",
  "j2k6y3_D" :" SnTi ____ ____ PbAu ____ AuPb ____ ____ TiSn FePu HgHg PuFe ",
  "j2k6y3_A" :" ____ TiSn FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ____ ",
  "j2k6y3_E" :" ____ PbAu ____ AuPb ____ ____ TiSn FePu HgHg PuFe SnTi ____ ",
  "j2k6y3_B" :" FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ____ ____ TiSn ",

  "j3k6_F"   :" PbPb ____ AuUr ____ ____ TiHg FeFe HgTi ____ SnNp UrAu ____ ",
  "j3k6_C"   :" HgTi ____ SnNp UrAu ____ PbPb ____ AuUr ____ ____ TiHg FeFe ",
  "j3k6_G"   :" AuUr ____ ____ TiHg FeFe HgTi ____ SnNp UrAu ____ PbPb ____ ",
  "j3k6_D"   :" SnNp UrAu ____ PbPb ____ AuUr ____ ____ TiHg FeFe HgTi ____ ",
  "j3k6_A"   :" ____ TiHg FeFe HgTi ____ SnNp UrAu ____ PbPb ____ AuUr ____ ",
  "j3k6_E"   :" ____ PbPb ____ AuUr ____ ____ TiHg FeFe HgTi ____ SnNp UrAu ",
  "j3k6_B"   :" FeFe HgTi ____ SnNp UrAu ____ PbPb ____ AuUr ____ ____ TiHg ",

  "n45y2_F"  :" PbPb ____ AuUr NpSn ____ TiHg FeFe HgTi ____ ____ UrAu ____ ",
  "n45y2_C"  :" HgTi ____ ____ UrAu ____ PbPb ____ AuUr NpSn ____ TiHg FeFe ",
  "n45y2_G"  :" AuUr NpSn ____ TiHg FeFe HgTi ____ ____ UrAu ____ PbPb ____ ",
  "n45y2_D"  :" ____ UrAu ____ PbPb ____ AuUr NpSn ____ TiHg FeFe HgTi ____ ",
  "n45y2_A"  :" ____ TiHg FeFe HgTi ____ ____ UrAu ____ PbPb ____ AuUr NpSn ",
  "n45y2_E"  :" ____ PbPb ____ AuUr NpSn ____ TiHg FeFe HgTi ____ ____ UrAu ",
  "n45y2_B"  :" FeFe HgTi ____ ____ UrAu ____ PbPb ____ AuUr NpSn ____ TiHg ",

"j3k56x4_F"  :" ____ ____ AuUr NpSn ____ TiHg FeFe HgTi ____ SnNp UrAu ____ ",
"j3k56x4_C"  :" HgTi ____ SnNp UrAu ____ ____ ____ AuUr NpSn ____ TiHg FeFe ",
"j3k56x4_G"  :" AuUr NpSn ____ TiHg FeFe HgTi ____ SnNp UrAu ____ ____ ____ ",
"j3k56x4_D"  :" SnNp UrAu ____ ____ ____ AuUr NpSn ____ TiHg FeFe HgTi ____ ",
"j3k56x4_A"  :" ____ TiHg FeFe HgTi ____ SnNp UrAu ____ ____ ____ AuUr NpSn ",
"j3k56x4_E"  :" ____ ____ ____ AuUr NpSn ____ TiHg FeFe HgTi ____ SnNp UrAu ",
"j3k56x4_B"  :" FeFe HgTi ____ SnNp UrAu ____ ____ ____ AuUr NpSn ____ TiHg ",

  "k2j6_F"   :" PbTi ____ AuNp NpAu ____ ____ FeCu HgMn ____ ____ MnHg CuFe ",
  "k2j6_C"   :" HgMn ____ ____ MnHg CuFe PbTi ____ AuNp NpAu ____ ____ FeCu ",
  "k2j6_G"   :" AuNp NpAu ____ ____ FeCu HgMn ____ ____ MnHg CuFe PbTi ____ ",
  "k2j6_D"   :" ____ MnHg CuFe PbTi ____ AuNp NpAu ____ ____ FeCu HgMn ____ ",
  "k2j6_A"   :" ____ ____ FeCu HgMn ____ ____ MnHg CuFe PbTi ____ AuNp NpAu ",
  "k2j6_E"   :" CuFe PbTi ____ AuNp NpAu ____ ____ FeCu HgMn ____ ____ MnHg ",
  "k2j6_B"   :" FeCu HgMn ____ ____ MnHg CuFe PbTi ____ AuNp NpAu ____ ____ ",

  "n5y2_F"   :" ____ ____ AuNp NpAu ____ TiPb FeCu HgMn ____ ____ MnHg CuFe ",
  "n5y2_C"   :" HgMn ____ ____ MnHg CuFe ____ ____ AuNp NpAu ____ TiPb FeCu ",
  "n5y2_G"   :" AuNp NpAu ____ TiPb FeCu HgMn ____ ____ MnHg CuFe ____ ____ ",
  "n5y2_D"   :" ____ MnHg CuFe ____ ____ AuNp NpAu ____ TiPb FeCu HgMn ____ ",
  "n5y2_A"   :" ____ TiPb FeCu HgMn ____ ____ MnHg CuFe ____ ____ AuNp NpAu ",
  "n5y2_E"   :" CuFe ____ ____ AuNp NpAu ____ TiPb FeCu HgMn ____ ____ MnHg ",
  "n5y2_B"   :" FeCu HgMn ____ ____ MnHg CuFe ____ ____ AuNp NpAu ____ TiPb ",

  "k26_F"    :" PbTi ____ AuNp ____ ____ TiPb FeCu HgMn ____ ____ MnHg CuFe ",
  "k26_C"    :" HgMn ____ ____ MnHg CuFe PbTi ____ AuNp ____ ____ TiPb FeCu ",
  "k26_G"    :" AuNp ____ ____ TiPb FeCu HgMn ____ ____ MnHg CuFe PbTi ____ ",
  "k26_D"    :" ____ MnHg CuFe PbTi ____ AuNp ____ ____ TiPb FeCu HgMn ____ ",
  "k26_A"    :" ____ TiPb FeCu HgMn ____ ____ MnHg CuFe PbTi ____ AuNp ____ ",
  "k26_E"    :" CuFe PbTi ____ AuNp ____ ____ TiPb FeCu HgMn ____ ____ MnHg ",
  "k26_B"    :" FeCu HgMn ____ ____ MnHg CuFe PbTi ____ AuNp ____ ____ TiPb ",

  "k256_F"   :" PbTi ____ ____ NpAu ____ TiPb FeCu HgMn ____ ____ MnHg CuFe ",
  "k256_C"   :" HgMn ____ ____ MnHg CuFe PbTi ____ ____ NpAu ____ TiPb FeCu ",
  "k256_G"   :" ____ NpAu ____ TiPb FeCu HgMn ____ ____ MnHg CuFe PbTi ____ ",
  "k256_D"   :" ____ MnHg CuFe PbTi ____ ____ NpAu ____ TiPb FeCu HgMn ____ ",
  "k256_A"   :" ____ TiPb FeCu HgMn ____ ____ MnHg CuFe PbTi ____ ____ NpAu ",
  "k256_E"   :" CuFe PbTi ____ ____ NpAu ____ TiPb FeCu HgMn ____ ____ MnHg ",
  "k256_B"   :" FeCu HgMn ____ ____ MnHg CuFe PbTi ____ ____ NpAu ____ TiPb ",

  "j5_F"     :" TiFe FeTi ____ ____ SnAu ____ CuPb PbCu ____ AuSn ____ AgHg ",
  "j5_C"     :" PbCu ____ AuSn ____ AgHg TiFe FeTi ____ ____ SnAu ____ CuPb ",
  "j5_G"     :" ____ ____ SnAu ____ CuPb PbCu ____ AuSn ____ AgHg TiFe FeTi ",
  "j5_D"     :" AuSn ____ AgHg TiFe FeTi ____ ____ SnAu ____ CuPb PbCu ____ ",
  "j5_A"     :" SnAu ____ CuPb PbCu ____ AuSn ____ AgHg TiFe FeTi ____ ____ ",
  "j5_E"     :" AgHg TiFe FeTi ____ ____ SnAu ____ CuPb PbCu ____ AuSn ____ ",
  "j5_B"     :" CuPb PbCu ____ AuSn ____ AgHg TiFe FeTi ____ ____ SnAu ____ ",

  "k34_F"    :" TiFe FeTi HgAg ____ SnAu ____ CuPb PbCu ____ AuSn ____ ____ ",
  "k34_C"    :" PbCu ____ AuSn ____ ____ TiFe FeTi HgAg ____ SnAu ____ CuPb ",
  "k34_G"    :" HgAg ____ SnAu ____ CuPb PbCu ____ AuSn ____ ____ TiFe FeTi ",
  "k34_D"    :" AuSn ____ ____ TiFe FeTi HgAg ____ SnAu ____ CuPb PbCu ____ ",
  "k34_A"    :" SnAu ____ CuPb PbCu ____ AuSn ____ ____ TiFe FeTi HgAg ____ ",
  "k34_E"    :" ____ TiFe FeTi HgAg ____ SnAu ____ CuPb PbCu ____ AuSn ____ ",
  "k34_B"    :" CuPb PbCu ____ AuSn ____ ____ TiFe FeTi HgAg ____ SnAu ____ ",

  "j5y6_F"   :" TiFe FeTi HgAg ____ ____ ____ CuPb PbCu ____ AuSn ____ AgHg ",
  "j5y6_C"   :" PbCu ____ AuSn ____ AgHg TiFe FeTi HgAg ____ ____ ____ CuPb ",
  "j5y6_G"   :" HgAg ____ ____ ____ CuPb PbCu ____ AuSn ____ AgHg TiFe FeTi ",
  "j5y6_D"   :" AuSn ____ AgHg TiFe FeTi HgAg ____ ____ ____ CuPb PbCu ____ ",
  "j5y6_A"   :" ____ ____ CuPb PbCu ____ AuSn ____ AgHg TiFe FeTi HgAg ____ ",
  "j5y6_E"   :" AgHg TiFe FeTi HgAg ____ ____ ____ CuPb PbCu ____ AuSn ____ ",
  "j5y6_B"   :" CuPb PbCu ____ AuSn ____ AgHg TiFe FeTi HgAg ____ ____ ____ ",

  "k34x2_F"  :" TiFe FeTi HgAg ____ SnAu ____ CuPb PbCu ____ ____ ____ AgHg ",
  "k34x2_C"  :" PbCu ____ ____ ____ AgHg TiFe FeTi HgAg ____ SnAu ____ CuPb ",
  "k34x2_G"  :" HgAg ____ SnAu ____ CuPb PbCu ____ ____ ____ AgHg TiFe FeTi ",
  "k34x2_D"  :" ____ ____ AgHg TiFe FeTi HgAg ____ SnAu ____ CuPb PbCu ____ ",
  "k34x2_A"  :" SnAu ____ CuPb PbCu ____ ____ ____ AgHg TiFe FeTi HgAg ____ ",
  "k34x2_E"  :" AgHg TiFe FeTi HgAg ____ SnAu ____ CuPb PbCu ____ ____ ____ ",
  "k34x2_B"  :" CuPb PbCu ____ ____ ____ AgHg TiFe FeTi HgAg ____ SnAu ____ ",

  "k1_F"     :" UrFe ____ PbAg ____ AuAu ____ AgPb ____ FeUr HgSn ____ SnHg ",
  "k1_C"     :" ____ FeUr HgSn ____ SnHg UrFe ____ PbAg ____ AuAu ____ AgPb ",
  "k1_G"     :" PbAg ____ AuAu ____ AgPb ____ FeUr HgSn ____ SnHg UrFe ____ ",
  "k1_D"     :" HgSn ____ SnHg UrFe ____ PbAg ____ AuAu ____ AgPb ____ FeUr ",
  "k1_A"     :" AuAu ____ AgPb ____ FeUr HgSn ____ SnHg UrFe ____ PbAg ____ ",
  "k1_E"     :" SnHg UrFe ____ PbAg ____ AuAu ____ AgPb ____ FeUr HgSn ____ ",
  "k1_B"     :" AgPb ____ FeUr HgSn ____ SnHg UrFe ____ PbAg ____ AuAu ____ ",

  "k17j5_F"  :" MnFe CuTi ____ ____ AuAu ____ ____ TiCu FeMn HgSn ____ SnHg ",
  "k17j5_C"  :" TiCu FeMn HgSn ____ SnHg MnFe CuTi ____ ____ AuAu ____ ____ ",
  "k17j5_G"  :" ____ ____ AuAu ____ ____ TiCu FeMn HgSn ____ SnHg MnFe CuTi ",
  "k17j5_D"  :" HgSn ____ SnHg MnFe CuTi ____ ____ AuAu ____ ____ TiCu FeMn ",
  "k17j5_A"  :" AuAu ____ ____ TiCu FeMn HgSn ____ SnHg MnFe CuTi ____ ____ ",
  "k17j5_E"  :" SnHg MnFe CuTi ____ ____ AuAu ____ ____ TiCu FeMn HgSn ____ ",
  "k17j5_B"  :" ____ TiCu FeMn HgSn ____ SnHg MnFe CuTi ____ ____ AuAu ____ ",

  "j2k34_F"  :" MnFe CuTi PbAg ____ AuAu ____ AgPb TiCu FeMn ____ ____ ____ ",
  "j2k34_C"  :" TiCu FeMn ____ ____ ____ MnFe CuTi PbAg ____ AuAu ____ AgPb ",
  "j2k34_G"  :" PbAg ____ AuAu ____ AgPb TiCu FeMn ____ ____ ____ MnFe CuTi ",
  "j2k34_D"  :" ____ ____ ____ MnFe CuTi PbAg ____ AuAu ____ AgPb TiCu FeMn ",
  "j2k34_A"  :" AuAu ____ AgPb TiCu FeMn ____ ____ ____ MnFe CuTi PbAg ____ ",
  "j2k34_E"  :" ____ MnFe CuTi PbAg ____ AuAu ____ AgPb TiCu FeMn ____ ____ ",
  "j2k34_B"  :" AgPb TiCu FeMn ____ ____ ____ MnFe CuTi PbAg ____ AuAu ____ ",

  "n25x6_F"  :" MnFe CuTi PbAg ____ ____ ____ AgPb TiCu FeMn HgSn ____ ____ ",
  "n25x6_C"  :" TiCu FeMn HgSn ____ ____ MnFe CuTi PbAg ____ ____ ____ AgPb ",
  "n25x6_G"  :" PbAg ____ ____ ____ AgPb TiCu FeMn HgSn ____ ____ MnFe CuTi ",
  "n25x6_D"  :" HgSn ____ ____ MnFe CuTi PbAg ____ ____ ____ AgPb TiCu FeMn ",
  "n25x6_A"  :" ____ ____ AgPb TiCu FeMn HgSn ____ ____ MnFe CuTi PbAg ____ ",
  "n25x6_E"  :" ____ MnFe CuTi PbAg ____ ____ ____ AgPb TiCu FeMn HgSn ____ ",
  "n25x6_B"  :" AgPb TiCu FeMn HgSn ____ ____ MnFe CuTi PbAg ____ ____ ____ ",

  "j25y6_F"  :" MnFe CuTi PbAg ____ ____ ____ AgPb TiCu FeMn ____ ____ SnHg ",
  "j25y6_C"  :" TiCu FeMn ____ ____ SnHg MnFe CuTi PbAg ____ ____ ____ AgPb ",
  "j25y6_G"  :" PbAg ____ ____ ____ AgPb TiCu FeMn ____ ____ SnHg MnFe CuTi ",
  "j25y6_D"  :" ____ ____ SnHg MnFe CuTi PbAg ____ ____ ____ AgPb TiCu FeMn ",
  "j25y6_A"  :" ____ ____ AgPb TiCu FeMn ____ ____ SnHg MnFe CuTi PbAg ____ ",
  "j25y6_E"  :" SnHg MnFe CuTi PbAg ____ ____ ____ AgPb TiCu FeMn ____ ____ ",
  "j25y6_B"  :" AgPb TiCu FeMn ____ ____ SnHg MnFe CuTi PbAg ____ ____ ____ ",

  "k5_F"     :" NpFe ____ ____ FeNp HgAu ____ SnPb UrCu ____ PbSn ____ AuHg ",
  "k5_C"     :" UrCu ____ PbSn ____ AuHg NpFe ____ ____ FeNp HgAu ____ SnPb ",
  "k5_G"     :" ____ FeNp HgAu ____ SnPb UrCu ____ PbSn ____ AuHg NpFe ____ ",
  "k5_D"     :" PbSn ____ AuHg NpFe ____ ____ FeNp HgAu ____ SnPb UrCu ____ ",
  "k5_A"     :" HgAu ____ SnPb UrCu ____ PbSn ____ AuHg NpFe ____ ____ FeNp ",
  "k5_E"     :" AuHg NpFe ____ ____ FeNp HgAu ____ SnPb UrCu ____ PbSn ____ ",
  "k5_B"     :" SnPb UrCu ____ PbSn ____ AuHg NpFe ____ ____ FeNp HgAu ____ ",

  "k15_F"    :" NpFe ____ ____ FeNp HgAu ____ SnPb ____ CuUr PbSn ____ AuHg ",
  "k15_C"    :" ____ CuUr PbSn ____ AuHg NpFe ____ ____ FeNp HgAu ____ SnPb ",
  "k15_G"    :" ____ FeNp HgAu ____ SnPb ____ CuUr PbSn ____ AuHg NpFe ____ ",
  "k15_D"    :" PbSn ____ AuHg NpFe ____ ____ FeNp HgAu ____ SnPb ____ CuUr ",
  "k15_A"    :" HgAu ____ SnPb ____ CuUr PbSn ____ AuHg NpFe ____ ____ FeNp ",
  "k15_E"    :" AuHg NpFe ____ ____ FeNp HgAu ____ SnPb ____ CuUr PbSn ____ ",
  "k15_B"    :" SnPb ____ CuUr PbSn ____ AuHg NpFe ____ ____ FeNp HgAu ____ ",

  "j56_F"    :" NpFe AgTi ____ FeNp ____ ____ SnPb UrCu ____ PbSn ____ AuHg ",
  "j56_C"    :" UrCu ____ PbSn ____ AuHg NpFe AgTi ____ FeNp ____ ____ SnPb ",
  "j56_G"    :" ____ FeNp ____ ____ SnPb UrCu ____ PbSn ____ AuHg NpFe AgTi ",
  "j56_D"    :" PbSn ____ AuHg NpFe AgTi ____ FeNp ____ ____ SnPb UrCu ____ ",
  "j56_A"    :" ____ ____ SnPb UrCu ____ PbSn ____ AuHg NpFe AgTi ____ FeNp ",
  "j56_E"    :" AuHg NpFe AgTi ____ FeNp ____ ____ SnPb UrCu ____ PbSn ____ ",
  "j56_B"    :" SnPb UrCu ____ PbSn ____ AuHg NpFe AgTi ____ FeNp ____ ____ ",

  "k135x4_F" :" NpFe ____ TiAg FeNp HgAu ____ SnPb ____ CuUr PbSn ____ ____ ",
  "k135x4_C" :" ____ CuUr PbSn ____ ____ NpFe ____ TiAg FeNp HgAu ____ SnPb ",
  "k135x4_G" :" TiAg FeNp HgAu ____ SnPb ____ CuUr PbSn ____ ____ NpFe ____ ",
  "k135x4_D" :" PbSn ____ ____ NpFe ____ TiAg FeNp HgAu ____ SnPb ____ CuUr ",
  "k135x4_A" :" HgAu ____ SnPb ____ CuUr PbSn ____ ____ NpFe ____ TiAg FeNp ",
  "k135x4_E" :" ____ NpFe ____ TiAg FeNp HgAu ____ SnPb ____ CuUr PbSn ____ ",
  "k135x4_B" :" SnPb ____ CuUr PbSn ____ ____ NpFe ____ TiAg FeNp HgAu ____ ",

  "j56y7_F"  :" NpFe AgTi ____ FeNp HgAu ____ ____ UrCu ____ PbSn ____ AuHg ",
  "j56y7_C"  :" UrCu ____ PbSn ____ AuHg NpFe AgTi ____ FeNp HgAu ____ ____ ",
  "j56y7_G"  :" ____ FeNp HgAu ____ ____ UrCu ____ PbSn ____ AuHg NpFe AgTi ",
  "j56y7_D"  :" PbSn ____ AuHg NpFe AgTi ____ FeNp HgAu ____ ____ UrCu ____ ",
  "j56y7_A"  :" HgAu ____ ____ UrCu ____ PbSn ____ AuHg NpFe AgTi ____ FeNp ",
  "j56y7_E"  :" AuHg NpFe AgTi ____ FeNp HgAu ____ ____ UrCu ____ PbSn ____ ",
  "j56y7_B"  :" ____ UrCu ____ PbSn ____ AuHg NpFe AgTi ____ FeNp HgAu ____ ",

  "n345y7_F" :" NpFe ____ TiAg FeNp HgAu ____ SnPb ____ CuUr ____ ____ AuHg ",
  "n345y7_C" :" ____ CuUr ____ ____ AuHg NpFe ____ TiAg FeNp HgAu ____ SnPb ",
  "n345y7_G" :" TiAg FeNp HgAu ____ SnPb ____ CuUr ____ ____ AuHg NpFe ____ ",
  "n345y7_D" :" ____ ____ AuHg NpFe ____ TiAg FeNp HgAu ____ SnPb ____ CuUr ",
  "n345y7_A" :" HgAu ____ SnPb ____ CuUr ____ ____ AuHg NpFe ____ TiAg FeNp ",
  "n345y7_E" :" AuHg NpFe ____ TiAg FeNp HgAu ____ SnPb ____ CuUr ____ ____ ",
  "n345y7_B" :" SnPb ____ CuUr ____ ____ AuHg NpFe ____ TiAg FeNp HgAu ____ ",

  "k1j6y7_F" :" NpFe ____ TiAg FeNp HgAu ____ ____ ____ CuUr PbSn ____ AuHg ",
  "k1j6y7_C" :" ____ CuUr PbSn ____ AuHg NpFe ____ TiAg FeNp HgAu ____ ____ ",
  "k1j6y7_G" :" TiAg FeNp HgAu ____ ____ ____ CuUr PbSn ____ AuHg NpFe ____ ",
  "k1j6y7_D" :" PbSn ____ AuHg NpFe ____ TiAg FeNp HgAu ____ ____ ____ CuUr ",
  "k1j6y7_A" :" HgAu ____ ____ ____ CuUr PbSn ____ AuHg NpFe ____ TiAg FeNp ",
  "k1j6y7_E" :" AuHg NpFe ____ TiAg FeNp HgAu ____ ____ ____ CuUr PbSn ____ ",
  "k1j6y7_B" :" ____ ____ CuUr PbSn ____ AuHg NpFe ____ TiAg FeNp HgAu ____ ",

  "k345x2_F" :" NpFe AgTi ____ FeNp HgAu ____ SnPb UrCu ____ ____ ____ AuHg ",
  "k345x2_C" :" UrCu ____ ____ ____ AuHg NpFe AgTi ____ FeNp HgAu ____ SnPb ",
  "k345x2_G" :" ____ FeNp HgAu ____ SnPb UrCu ____ ____ ____ AuHg NpFe AgTi ",
  "k345x2_D" :" ____ ____ AuHg NpFe AgTi ____ FeNp HgAu ____ SnPb UrCu ____ ",
  "k345x2_A" :" HgAu ____ SnPb UrCu ____ ____ ____ AuHg NpFe AgTi ____ FeNp ",
  "k345x2_E" :" AuHg NpFe AgTi ____ FeNp HgAu ____ SnPb UrCu ____ ____ ____ ",
  "k345x2_B" :" SnPb UrCu ____ ____ ____ AuHg NpFe AgTi ____ FeNp HgAu ____ ",

  "k2j56y7_F":" PuFe SnTi ____ CuNp PbAu ____ ____ NpCu ____ ____ FePu HgHg ",
  "k2j56y7_C":" NpCu ____ ____ FePu HgHg PuFe SnTi ____ CuNp PbAu ____ ____ ",
  "k2j56y7_G":" ____ CuNp PbAu ____ ____ NpCu ____ ____ FePu HgHg PuFe SnTi ",
  "k2j56y7_D":" ____ FePu HgHg PuFe SnTi ____ CuNp PbAu ____ ____ NpCu ____ ",
  "k2j56y7_A":" PbAu ____ ____ NpCu ____ ____ FePu HgHg PuFe SnTi ____ CuNp ",
  "k2j56y7_E":" HgHg PuFe SnTi ____ CuNp PbAu ____ ____ NpCu ____ ____ FePu ",
  "k2j56y7_B":" ____ NpCu ____ ____ FePu HgHg PuFe SnTi ____ CuNp PbAu ____ ",

  "j346y5_F" :" PuFe ____ ____ CuNp ____ ____ AuPb NpCu ____ TiSn FePu HgHg ",
  "j346y5_C" :" NpCu ____ TiSn FePu HgHg PuFe ____ ____ CuNp ____ ____ AuPb ",
  "j346y5_G" :" ____ CuNp ____ ____ AuPb NpCu ____ TiSn FePu HgHg PuFe ____ ",
  "j346y5_D" :" TiSn FePu HgHg PuFe ____ ____ CuNp ____ ____ AuPb NpCu ____ ",
  "j346y5_A" :" ____ ____ AuPb NpCu ____ TiSn FePu HgHg PuFe ____ ____ CuNp ",
  "j346y5_E" :" HgHg PuFe ____ ____ CuNp ____ ____ AuPb NpCu ____ TiSn FePu ",
  "j346y5_B" :" AuPb NpCu ____ TiSn FePu HgHg PuFe ____ ____ CuNp ____ ____ ",

  "j3k5_F"   :" PuFe ____ ____ CuNp PbAu ____ AuPb NpCu ____ TiSn FePu ____ ",
  "j3k5_C"   :" NpCu ____ TiSn FePu ____ PuFe ____ ____ CuNp PbAu ____ AuPb ",
  "j3k5_G"   :" ____ CuNp PbAu ____ AuPb NpCu ____ TiSn FePu ____ PuFe ____ ",
  "j3k5_D"   :" TiSn FePu ____ PuFe ____ ____ CuNp PbAu ____ AuPb NpCu ____ ",
  "j3k5_A"   :" PbAu ____ AuPb NpCu ____ TiSn FePu ____ PuFe ____ ____ CuNp ",
  "j3k5_E"   :" ____ PuFe ____ ____ CuNp PbAu ____ AuPb NpCu ____ TiSn FePu ",
  "j3k5_B"   :" AuPb NpCu ____ TiSn FePu ____ PuFe ____ ____ CuNp PbAu ____ ",

  "n167_F"   :" PuFe SnTi ____ CuNp PbAu ____ AuPb NpCu ____ ____ FePu ____ ",
  "n167_C"   :" NpCu ____ ____ FePu ____ PuFe SnTi ____ CuNp PbAu ____ AuPb ",
  "n167_G"   :" ____ CuNp PbAu ____ AuPb NpCu ____ ____ FePu ____ PuFe SnTi ",
  "n167_D"   :" ____ FePu ____ PuFe SnTi ____ CuNp PbAu ____ AuPb NpCu ____ ",
  "n167_A"   :" PbAu ____ AuPb NpCu ____ ____ FePu ____ PuFe SnTi ____ CuNp ",
  "n167_E"   :" ____ PuFe SnTi ____ CuNp PbAu ____ AuPb NpCu ____ ____ FePu ",
  "n167_B"   :" AuPb NpCu ____ ____ FePu ____ PuFe SnTi ____ CuNp PbAu ____ ",

  "k2_F"     :" PuFe ____ UrAg ____ PbAu ____ AuPb NpCu ____ ____ FePb HgHg ",
  "k2_C"     :" NpCu ____ ____ FePu HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ",
  "k2_G"     :" UrAg ____ PbAu ____ AuPb NpCu ____ ____ FePu HgHg PuFe ____ ",
  "k2_D"     :" ____ FePu HgHg PuFe ____ UrAg ____ PbAu ____ AuPb NpCu ____ ",
  "k2_A"     :" PbAu ____ AuPb NpCu ____ ____ FePu HgHg PuFe ____ UrAg ____ ",
  "k2_E"     :" HgHg PuFe ____ UrAg ____ PbAu ____ AuPb NpCu ____ ____ FePu ",
  "k2_B"     :" AuPb NpCu ____ ____ FePu HgHg PuFe ____ UrAg ____ PbAu ____ ",

  "k125_F"   :" PuFe ____ ____ CuNp PbAu ____ AuPb ____ AgUr ____ FePu HgHg ",
  "k125_C"   :" ____ AgUr ____ FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ",
  "k125_G"   :" ____ CuNp PbAu ____ AuPb ____ AgUr ____ FePu HgHg PuFe ____ ",
  "k125_D"   :" ____ FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ____ AgUr ",
  "k125_A"   :" PbAu ____ AuPb ____ AgUr ____ FePu HgHg PuFe ____ ____ CuNp ",
  "k125_E"   :" HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ____ AgUr ____ FePu ",
  "k125_B"   :" AuPb ____ AgUr ____ FePu HgHg PuFe ____ ____ CuNp PbAu ____ ",

  "k25_F"    :" PuFe ____ ____ CuNp PbAu ____ AuPb NpCu ____ ____ FePb HgHg ",
  "k25_C"    :" NpCu ____ ____ FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ",
  "k25_G"    :" ____ CuNp PbAu ____ AuPb NpCu ____ ____ FePu HgHg PuFe ____ ",
  "k25_D"    :" ____ FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb NpCu ____ ",
  "k25_A"    :" PbAu ____ AuPb NpCu ____ ____ FePu HgHg PuFe ____ ____ CuNp ",
  "k25_E"    :" HgHg PuFe ____ ____ CuNp PbAu ____ AuPb NpCu ____ ____ FePu ",
  "k25_B"    :" AuPb NpCu ____ ____ FePu HgHg PuFe ____ ____ CuNp PbAu ____ ",

  "k12_F"    :" PuFe ____ UrAg ____ PbAu ____ AuPb ____ AgUr ____ FePu HgHg ",
  "k12_C"    :" ____ AgUr ____ FePu HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ",
  "k12_G"    :" UrAg ____ PbAu ____ AuPb ____ AgUr ____ FePu HgHg PuFe ____ ",
  "k12_D"    :" ____ FePu HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ____ AgUr ",
  "k12_A"    :" PbAu ____ AuPb ____ AgUr ____ FePu HgHg PuFe ____ UrAg ____ ",
  "k12_E"    :" HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ____ AgUr ____ FePu ",
  "k12_B"    :" AuPb ____ AgUr ____ FePu HgHg PuFe ____ UrAg ____ PbAu ____ ",

  "k12j5_F"  :" PuFe SnTi ____ ____ PbAu ____ AuPb ____ AgUr ____ FePu HgHg ",
  "k12j5_C"  :" ____ AgUr ____ FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ",
  "k12j5_G"  :" ____ ____ PbAu ____ AuPb ____ AgUr ____ FePu HgHg PuFe SnTi ",
  "k12j5_D"  :" ____ FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ____ AgUr ",
  "k12j5_A"  :" PbAu ____ AuPb ____ AgUr ____ FePu HgHg PuFe SnTi ____ ____ ",
  "k12j5_E"  :" HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ____ AgUr ____ FePu ",
  "k12j5_B"  :" AuPb ____ AgUr ____ FePu HgHg PuFe SnTi ____ ____ PbAu ____ ",

  "k2x1_F"   :" PuFe ____ UrAg ____ PbAu ____ AuPb ____ ____ TiSn FePu HgHg ",
  "k2x1_C"   :" ____ ____ TiSn FePu HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ",
  "k2x1_G"   :" UrAg ____ PbAu ____ AuPb ____ ____ TiSn FePu HgHg PuFe ____ ",
  "k2x1_D"   :" TiSn FePu HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ____ ____ ",
  "k2x1_A"   :" PbAu ____ AuPb ____ ____ TiSn FePu HgHg PuFe ____ UrAg ____ ",
  "k2x1_E"   :" HgHg PuFe ____ UrAg ____ PbAu ____ AuPb ____ ____ TiSn FePu ",
  "k2x1_B"   :" AuPb ____ ____ TiSn FePu HgHg PuFe ____ UrAg ____ PbAu ____ ",

  "k2j5_F"   :" PuFe SnTi ____ ____ PbAu ____ AuPb NpCu ____ ____ FePu HgHg ",
  "k2j5_C"   :" NpCu ____ ____ FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ",
  "k2j5_G"   :" ____ ____ PbAu ____ AuPb NpCu ____ ____ FePu HgHg PuFe SnTi ",
  "k2j5_D"   :" ____ FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb NpCu ____ ",
  "k2j5_A"   :" PbAu ____ AuPb NpCu ____ ____ FePu HgHg PuFe SnTi ____ ____ ",
  "k2j5_E"   :" HgHg PuFe SnTi ____ ____ PbAu ____ AuPb NpCu ____ ____ FePu ",
  "k2j5_B"   :" AuPb NpCu ____ ____ FePu HgHg PuFe SnTi ____ ____ PbAu ____ ",

  "k25x1_F"  :" PuFe ____ ____ CuNp PbAu ____ AuPb ____ ____ TiSn FePu HgHg ",
  "k25x1_C"  :" ____ ____ TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ",
  "k25x1_G"  :" ____ CuNp PbAu ____ AuPb ____ ____ TiSn FePu HgHg PuFe ____ ",
  "k25x1_D"  :" TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ____ ____ ",
  "k25x1_A"  :" PbAu ____ AuPb ____ ____ TiSn FePu HgHg PuFe ____ ____ CuNp ",
  "k25x1_E"  :" HgHg PuFe ____ ____ CuNp PbAu ____ AuPb ____ ____ TiSn FePu ",
  "k25x1_B"  :" AuPb ____ ____ TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ ",

  "k2j56_F"  :" PuFe SnTi ____ CuNp ____ ____ AuPb NpCu ____ ____ FePu HgHg ",
  "k2j56_C"  :" NpCu ____ ____ FePu HgHg PuFe SnTi ____ CuNp ____ ____ AuPb ",
  "k2j56_G"  :" ____ CuNp ____ ____ AuPb NpCu ____ ____ FePu HgHg PuFe SnTi ",
  "k2j56_D"  :" ____ FePu HgHg PuFe SnTi ____ CuNp ____ ____ AuPb NpCu ____ ",
  "k2j56_A"  :" ____ ____ AuPb NpCu ____ ____ FePu HgHg PuFe SnTi ____ CuNp ",
  "k2j56_E"  :" HgHg PuFe SnTi ____ CuNp ____ ____ AuPb NpCu ____ ____ FePu ",
  "k2j56_B"  :" AuPb NpCu ____ ____ FePu HgHg PuFe SnTi ____ CuNp ____ ____ ",

  "k257x1_F" :" PuFe ____ ____ CuNp PbAu ____ ____ NpCu ____ TiSn FePu HgHg ",
  "k257x1_C" :" NpCu ____ TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ ____ ",
  "k257x1_G" :" ____ CuNp PbAu ____ ____ NpCu ____ TiSn FePu HgHg PuFe ____ ",
  "k257x1_D" :" TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ ____ NpCu ____ ",
  "k257x1_A" :" PbAu ____ ____ NpCu ____ TiSn FePu HgHg PuFe ____ ____ CuNp ",
  "k257x1_E" :" HgHg PuFe ____ ____ CuNp PbAu ____ ____ NpCu ____ TiSn FePu ",
  "k257x1_B" :" ____ NpCu ____ TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ ",

  "k2j5y6_F" :" PuFe SnTi UrAg ____ ____ ____ AuPb NpCu ____ ____ FePu HgHg ",
  "k2j5y6_C" :" NpCu ____ ____ FePu HgHg PuFe SnTi UrAg ____ ____ ____ AuPb ",
  "k2j5y6_G" :" UrAg ____ ____ ____ AuPb NpCu ____ ____ FePu HgHg PuFe SnTi ",
  "k2j5y6_D" :" ____ FePu HgHg PuFe SnTi UrAg ____ ____ ____ AuPb NpCu ____ ",
  "k2j5y6_A" :" ____ ____ AuPb NpCu ____ ____ FePu HgHg PuFe SnTi UrAg ____ ",
  "k2j5y6_E" :" HgHg PuFe SnTi UrAg ____ ____ ____ AuPb NpCu ____ ____ FePu ",
  "k2j5y6_B" :" AuPb NpCu ____ ____ FePu HgHg PuFe SnTi UrAg ____ ____ ____ ",

  "k25x17_F" :" PuFe ____ ____ CuNp PbAu ____ ____ ____ AgUr TiSn FePu HgHg ",
  "k25x17_C" :" ____ AgUr TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ ____ ",
  "k25x17_G" :" ____ CuNp PbAu ____ ____ ____ AgUr TiSn FePu HgHg PuFe ____ ",
  "k25x17_D" :" TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ ____ ____ AgUr ",
  "k25x17_A" :" PbAu ____ ____ ____ AgUr TiSn FePu HgHg PuFe ____ ____ CuNp ",
  "k25x17_E" :" HgHg PuFe ____ ____ CuNp PbAu ____ ____ ____ AgUr TiSn FePu ",
  "k25x17_B" :" ____ ____ AgUr TiSn FePu HgHg PuFe ____ ____ CuNp PbAu ____ ",

  "k2j5x1_F" :" PuFe SnTi ____ ____ PbAu ____ AuPb ____ ____ TiSn FePu HgHg ",
  "k2j5x1_C" :" ____ ____ TiSn FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ",
  "k2j5x1_G" :" ____ ____ PbAu ____ AuPb ____ ____ TiSn FePu HgHg PuFe SnTi ",
  "k2j5x1_D" :" TiSn FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ____ ____ ",
  "k2j5x1_A" :" PbAu ____ AuPb ____ ____ TiSn FePu HgHg PuFe SnTi ____ ____ ",
  "k2j5x1_E" :" HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ____ ____ TiSn FePu ",
  "k2j5x1_B" :" AuPb ____ ____ TiSn FePu HgHg PuFe SnTi ____ ____ PbAu ____ ",

  "k1j5_F"   :" FeFe HgTi ____ ____ UrAu ____ PbPb ____ AuUr NpSn ____ TiHg ",
  "k1j5_C"   :" ____ AuUr NpSn ____ TiHg FeFe HgTi ____ ____ UrAu ____ PbPb ",
  "k1j5_G"   :" ____ ____ UrAu ____ PbPb ____ AuUr NpSn ____ TiHg FeFe HgTi ",
  "k1j5_D"   :" NpSn ____ TiHg FeFe HgTi ____ ____ UrAu ____ PbPb ____ AuUr ",
  "k1j5_A"   :" UrAu ____ PbPb ____ AuUr NpSn ____ TiHg FeFe HgTi ____ ____ ",
  "k1j5_E"   :" TiHg FeFe HgTi ____ ____ UrAu ____ PbPb ____ AuUr NpSn ____ ",
  "k1j5_B"   :" PbPb ____ AuUr NpSn ____ TiHg FeFe HgTi ____ ____ UrAu ____ ",

  "n67x2_F"  :" FeFe HgTi ____ SnNp UrAu ____ PbPb ____ AuUr ____ ____ TiHg ",
  "n67x2_C"  :" ____ AuUr ____ ____ TiHg FeFe HgTi ____ SnNp UrAu ____ PbPb ",
  "n67x2_G"  :" ____ SnNp UrAu ____ PbPb ____ AuUr ____ ____ TiHg FeFe HgTi ",
  "n67x2_D"  :" ____ ____ TiHg FeFe HgTi ____ SnNp UrAu ____ PbPb ____ AuUr ",
  "n67x2_A"  :" UrAu ____ PbPb ____ AuUr ____ ____ TiHg FeFe HgTi ____ SnNp ",
  "n67x2_E"  :" TiHg FeFe HgTi ____ SnNp UrAu ____ PbPb ____ AuUr ____ ____ ",
  "n67x2_B"  :" PbPb ____ AuUr ____ ____ TiHg FeFe HgTi ____ SnNp UrAu ____ ",

"k1j56y7_F"  :" FeFe HgTi ____ SnNp UrAu ____ ____ ____ AuUr NpSn ____ TiHg ",
"k1j56y7_C"  :" ____ AuUr NpSn ____ TiHg FeFe HgTi ____ SnNp UrAu ____ ____ ",
"k1j56y7_G"  :" ____ SnNp UrAu ____ ____ ____ AuUr NpSn ____ TiHg FeFe HgTi ",
"k1j56y7_D"  :" NpSn ____ TiHg FeFe HgTi ____ SnNp UrAu ____ ____ ____ AuUr ",
"k1j56y7_A"  :" UrAu ____ ____ ____ AuUr NpSn ____ TiHg FeFe HgTi ____ SnNp ",
"k1j56y7_E"  :" TiHg FeFe HgTi ____ SnNp UrAu ____ ____ ____ AuUr NpSn ____ ",
"k1j56y7_B"  :" ____ ____ AuUr NpSn ____ TiHg FeFe HgTi ____ SnNp UrAu ____ ",

  "j2k5_F"   :" CuFe ____ ____ AuNp NpAu ____ TiPb FeCu HgMn ____ ____ MnHg ",
  "j2k5_C"   :" FeCu HgMn ____ ____ MnHg CuFe ____ ____ AuNp NpAu ____ TiPb ",
  "j2k5_G"   :" ____ AuNp NpAu ____ TiPb FeCu HgMn ____ ____ MnHg CuFe ____ ",
  "j2k5_D"   :" ____ ____ MnHg CuFe ____ ____ AuNp NpAu ____ TiPb FeCu HgMn ",
  "j2k5_A"   :" NpAu ____ TiPb FeCu HgMn ____ ____ MnHg CuFe ____ ____ AuNp ",
  "j2k5_E"   :" MnHg CuFe ____ ____ AuNp NpAu ____ TiPb FeCu HgMn ____ ____ ",
  "j2k5_B"   :" TiPb FeCu HgMn ____ ____ MnHg CuFe ____ ____ AuNp NpAu ____ ",

  "n6x2_F"   :" CuFe PbTi ____ AuNp NpAu ____ ____ FeCu HgMn ____ ____ MnHg ",
  "n6x2_C"   :" FeCu HgMn ____ ____ MnHg CuFe PbTi ____ AuNp NpAu ____ ____ ",
  "n6x2_G"   :" ____ AuNp NpAu ____ ____ FeCu HgMn ____ ____ MnHg CuFe PbTi ",
  "n6x2_D"   :" ____ ____ MnHg CuFe PbTi ____ AuNp NpAu ____ ____ FeCu HgMn ",
  "n6x2_A"   :" NpAu ____ ____ FeCu HgMn ____ ____ MnHg CuFe PbTi ____ AuNp ",
  "n6x2_E"   :" MnHg CuFe PbTi ____ AuNp NpAu ____ ____ FeCu HgMn ____ ____ ",
  "n6x2_B"   :" ____ FeCu HgMn ____ ____ MnHg CuFe PbTi ____ AuNp NpAu ____ ",

  "j25_F"    :" CuFe PbTi ____ ____ NpAu ____ TiPb FeCu HgMn ____ ____ MnHg ",
  "j25_C"    :" FeCu HgMn ____ ____ MnHg CuFe PbTi ____ ____ NpAu ____ TiPb ",
  "j25_G"    :" ____ ____ NpAu ____ TiPb FeCu HgMn ____ ____ MnHg CuFe PbTi ",
  "j25_D"    :" ____ ____ MnHg CuFe PbTi ____ ____ NpAu ____ TiPb FeCu HgMn ",
  "j25_A"    :" NpAu ____ TiPb FeCu HgMn ____ ____ MnHg CuFe PbTi ____ ____ ",
  "j25_E"    :" MnHg CuFe PbTi ____ ____ NpAu ____ TiPb FeCu HgMn ____ ____ ",
  "j25_B"    :" TiPb FeCu HgMn ____ ____ MnHg CuFe PbTi ____ ____ NpAu ____ ",

  "j256_F"   :" CuFe PbTi ____ AuNp ____ ____ TiPb FeCu HgMn ____ ____ MnHg ",
  "j256_C"   :" FeCu HgMn ____ ____ MnHg CuFe PbTi ____ AuNp ____ ____ TiPb ",
  "j256_G"   :" ____ AuNp ____ ____ TiPb FeCu HgMn ____ ____ MnHg CuFe PbTi ",
  "j256_D"   :" ____ ____ MnHg CuFe PbTi ____ AuNp ____ ____ TiPb FeCu HgMn ",
  "j256_A"   :" ____ ____ TiPb FeCu HgMn ____ ____ MnHg CuFe PbTi ____ AuNp ",
  "j256_E"   :" MnHg CuFe PbTi ____ AuNp ____ ____ TiPb FeCu HgMn ____ ____ ",
  "j256_B"   :" TiPb FeCu HgMn ____ ____ MnHg CuFe PbTi ____ AuNp ____ ____ "
};

function fingerBoard(s1, s2, s3, s4, s5, s6, s7) {
  document.getElementById("str_01").textContent = s1;
  document.getElementById("str_02").textContent = s2;
  document.getElementById("str_03").textContent = s3;
  document.getElementById("str_04").textContent = s4;
  document.getElementById("str_05").textContent = s5;
  document.getElementById("str_06").textContent = s6;
  document.getElementById("str_07").textContent = s7;
}

function gtr4ths_n0() {
  var x = beadgcf;
  fingerBoard(x.n0_F,
              x.n0_C,
              x.n0_G,
              x.n0_D,
              x.n0_A,
              x.n0_E,
              x.n0_B);
}

function gtr4ths_k6() {
  var x = beadgcf;
  fingerBoard(x.k6_F,
              x.k6_C,
              x.k6_G,
              x.k6_D,
              x.k6_A,
              x.k6_E,
              x.k6_B);
}

function gtr4ths_j17() {
  var x = beadgcf;
  fingerBoard(x.j17_F,
              x.j17_C,
              x.j17_G,
              x.j17_D,
              x.j17_A,
              x.j17_E,
              x.j17_B);
}

function gtr4ths_k6x5() {
  var x = beadgcf;
  fingerBoard(x.k6x5_F,
              x.k6x5_C,
              x.k6x5_G,
              x.k6x5_D,
              x.k6x5_A,
              x.k6x5_E,
              x.k6x5_B);
}

function gtr4ths_j17y2() {
  var x = beadgcf;
  fingerBoard(x.j17y2_F,
              x.j17y2_C,
              x.j17y2_G,
              x.j17y2_D,
              x.j17y2_A,
              x.j17y2_E,
              x.j17y2_B);
}

function gtr4ths_j3() {
  var x = beadgcf;
  fingerBoard(x.j3_F,
              x.j3_C,
              x.j3_G,
              x.j3_D,
              x.j3_A,
              x.j3_E,
              x.j3_B);
}

function gtr4ths_j34k6() {
  var x = beadgcf;
  fingerBoard(x.j34k6_F,
              x.j34k6_C,
              x.j34k6_G,
              x.j34k6_D,
              x.j34k6_A,
              x.j34k6_E,
              x.j34k6_B);
}

function gtr4ths_j17k2() {
  var x = beadgcf;
  fingerBoard(x.j17k2_F,
              x.j17k2_C,
              x.j17k2_G,
              x.j17k2_D,
              x.j17k2_A,
              x.j17k2_E,
              x.j17k2_B);
}

function gtr4ths_n26y5() {
  var x = beadgcf;
  fingerBoard(x.n26y5_F,
              x.n26y5_C,
              x.n26y5_G,
              x.n26y5_D,
              x.n26y5_A,
              x.n26y5_E,
              x.n26y5_B);
}

function gtr4ths_k26x5() {
  var x = beadgcf;
  fingerBoard(x.k26x5_F,
              x.k26x5_C,
              x.k26x5_G,
              x.k26x5_D,
              x.k26x5_A,
              x.k26x5_E,
              x.k26x5_B);
}

function gtr4ths_j6() {
  var x = beadgcf;
  fingerBoard(x.j6_F,
              x.j6_C,
              x.j6_G,
              x.j6_D,
              x.j6_A,
              x.j6_E,
              x.j6_B);
}

function gtr4ths_j36() {
  var x = beadgcf;
  fingerBoard(x.j36_F,
              x.j36_C,
              x.j36_G,
              x.j36_D,
              x.j36_A,
              x.j36_E,
              x.j36_B);
}

function gtr4ths_k56() {
  var x = beadgcf;
  fingerBoard(x.k56_F,
              x.k56_C,
              x.k56_G,
              x.k56_D,
              x.k56_A,
              x.k56_E,
              x.k56_B);
}

function gtr4ths_j136y7() {
  var x = beadgcf;
  fingerBoard(x.j136y7_F,
              x.j136y7_C,
              x.j136y7_G,
              x.j136y7_D,
              x.j136y7_A,
              x.j136y7_E,
              x.j136y7_B);
}

function gtr4ths_k56x4() {
  var x = beadgcf;
  fingerBoard(x.k56x4_F,
              x.k56x4_C,
              x.k56x4_G,
              x.k56x4_D,
              x.k56x4_A,
              x.k56x4_E,
              x.k56x4_B);
}

function gtr4ths_n167x4() {
  var x = beadgcf;
  fingerBoard(x.n167x4_F,
              x.n167x4_C,
              x.n167x4_G,
              x.n167x4_D,
              x.n167x4_A,
              x.n167x4_E,
              x.n167x4_B);
}

function gtr4ths_j3k5x4() {
  var x = beadgcf;
  fingerBoard(x.j3k5x4_F,
              x.j3k5x4_C,
              x.j3k5x4_G,
              x.j3k5x4_D,
              x.j3k5x4_A,
              x.j3k5x4_E,
              x.j3k5x4_B);
}

function gtr4ths_j167y2() {
  var x = beadgcf;
  fingerBoard(x.j167y2_F,
              x.j167y2_C,
              x.j167y2_G,
              x.j167y2_D,
              x.j167y2_A,
              x.j167y2_E,
              x.j167y2_B);
}

function gtr4ths_j2k56x4() {
  var x = beadgcf;
  fingerBoard(x.j2k56x4_F,
              x.j2k56x4_C,
              x.j2k56x4_G,
              x.j2k56x4_D,
              x.j2k56x4_A,
              x.j2k56x4_E,
              x.j2k56x4_B);
}

function gtr4ths_k157x6() {
  var x = beadgcf;
  fingerBoard(x.k157x6_F,
              x.k157x6_C,
              x.k157x6_G,
              x.k157x6_D,
              x.k157x6_A,
              x.k157x6_E,
              x.k157x6_B);
}

function gtr4ths_k1j6() {
  var x = beadgcf;
  fingerBoard(x.k1j6_F,
              x.k1j6_C,
              x.k1j6_G,
              x.k1j6_D,
              x.k1j6_A,
              x.k1j6_E,
              x.k1j6_B);
}

function gtr4ths_n345() {
  var x = beadgcf;
  fingerBoard(x.n345_F,
              x.n345_C,
              x.n345_G,
              x.n345_D,
              x.n345_A,
              x.n345_E,
              x.n345_B);
}

function gtr4ths_j2() {
  var x = beadgcf;
  fingerBoard(x.j2_F,
              x.j2_C,
              x.j2_G,
              x.j2_D,
              x.j2_A,
              x.j2_E,
              x.j2_B);
}

function gtr4ths_j26() {
  var x = beadgcf;
  fingerBoard(x.j26_F,
              x.j26_C,
              x.j26_G,
              x.j26_D,
              x.j26_A,
              x.j26_E,
              x.j26_B);
}

function gtr4ths_j236() {
  var x = beadgcf;
  fingerBoard(x.j236_F,
              x.j236_C,
              x.j236_G,
              x.j236_D,
              x.j236_A,
              x.j236_E,
              x.j236_B);
}

function gtr4ths_j23() {
  var x = beadgcf;
  fingerBoard(x.j23_F,
              x.j23_C,
              x.j23_G,
              x.j23_D,
              x.j23_A,
              x.j23_E,
              x.j23_B);
}

function gtr4ths_j23k6() {
  var x = beadgcf;
  fingerBoard(x.j23k6_F,
              x.j23k6_C,
              x.j23k6_G,
              x.j23k6_D,
              x.j23k6_A,
              x.j23k6_E,
              x.j23k6_B);
}

function gtr4ths_j2y3() {
  var x = beadgcf;
  fingerBoard(x.j2y3_F,
              x.j2y3_C,
              x.j2y3_G,
              x.j2y3_D,
              x.j2y3_A,
              x.j2y3_E,
              x.j2y3_B);
}

function gtr4ths_j2k6() {
  var x = beadgcf;
  fingerBoard(x.j2k6_F,
              x.j2k6_C,
              x.j2k6_G,
              x.j2k6_D,
              x.j2k6_A,
              x.j2k6_E,
              x.j2k6_B);
}

function gtr4ths_j26y3() {
  var x = beadgcf;
  fingerBoard(x.j26y3_F,
              x.j26y3_C,
              x.j26y3_G,
              x.j26y3_D,
              x.j26y3_A,
              x.j26y3_E,
              x.j26y3_B);
}

function gtr4ths_j2k56() {
  var x = beadgcf;
  fingerBoard(x.j2k56_F,
              x.j2k56_C,
              x.j2k56_G,
              x.j2k56_D,
              x.j2k56_A,
              x.j2k56_E,
              x.j2k56_B);
}

function gtr4ths_j246y3() {
  var x = beadgcf;
  fingerBoard(x.j246y3_F,
              x.j246y3_C,
              x.j246y3_G,
              x.j246y3_D,
              x.j246y3_A,
              x.j246y3_E,
              x.j246y3_B);
}

function gtr4ths_j26y34() {
  var x = beadgcf;
  fingerBoard(x.j26y34_F,
              x.j26y34_C,
              x.j26y34_G,
              x.j26y34_D,
              x.j26y34_A,
              x.j26y34_E,
              x.j26y34_B);
}

function gtr4ths_j2k6x5() {
  var x = beadgcf;
  fingerBoard(x.j2k6x5_F,
              x.j2k6x5_C,
              x.j2k6x5_G,
              x.j2k6x5_D,
              x.j2k6x5_A,
              x.j2k6x5_E,
              x.j2k6x5_B);
}

function gtr4ths_j2k6y3() {
  var x = beadgcf;
  fingerBoard(x.j2k6y3_F,
              x.j2k6y3_C,
              x.j2k6y3_G,
              x.j2k6y3_D,
              x.j2k6y3_A,
              x.j2k6y3_E,
              x.j2k6y3_B);
}

function gtr4ths_j3k6() {
  var x = beadgcf;
  fingerBoard(x.j3k6_F,
              x.j3k6_C,
              x.j3k6_G,
              x.j3k6_D,
              x.j3k6_A,
              x.j3k6_E,
              x.j3k6_B);
}

function gtr4ths_n45y2() {
  var x = beadgcf;
  fingerBoard(x.n45y2_F,
              x.n45y2_C,
              x.n45y2_G,
              x.n45y2_D,
              x.n45y2_A,
              x.n45y2_E,
              x.n45y2_B);
}

function gtr4ths_j3k56x4() {
  var x = beadgcf;
  fingerBoard(x.j3k56x4_F,
              x.j3k56x4_C,
              x.j3k56x4_G,
              x.j3k56x4_D,
              x.j3k56x4_A,
              x.j3k56x4_E,
              x.j3k56x4_B);
}

function gtr4ths_k2j6() {
  var x = beadgcf;
  fingerBoard(x.k2j6_F,
              x.k2j6_C,
              x.k2j6_G,
              x.k2j6_D,
              x.k2j6_A,
              x.k2j6_E,
              x.k2j6_B);
}

function gtr4ths_n5y2() {
  var x = beadgcf;
  fingerBoard(x.n5y2_F,
              x.n5y2_C,
              x.n5y2_G,
              x.n5y2_D,
              x.n5y2_A,
              x.n5y2_E,
              x.n5y2_B);
}

function gtr4ths_k26() {
  var x = beadgcf;
  fingerBoard(x.k26_F,
              x.k26_C,
              x.k26_G,
              x.k26_D,
              x.k26_A,
              x.k26_E,
              x.k26_B);
}

function gtr4ths_k256() {
  var x = beadgcf;
  fingerBoard(x.k256_F,
              x.k256_C,
              x.k256_G,
              x.k256_D,
              x.k256_A,
              x.k256_E,
              x.k256_B);
}

function gtr4ths_j5() {
  var x = beadgcf;
  fingerBoard(x.j5_F,
              x.j5_C,
              x.j5_G,
              x.j5_D,
              x.j5_A,
              x.j5_E,
              x.j5_B);
}

function gtr4ths_k34() {
  var x = beadgcf;
  fingerBoard(x.k34_F,
              x.k34_C,
              x.k34_G,
              x.k34_D,
              x.k34_A,
              x.k34_E,
              x.k34_B);
}

function gtr4ths_j5y6() {
  var x = beadgcf;
  fingerBoard(x.j5y6_F,
              x.j5y6_C,
              x.j5y6_G,
              x.j5y6_D,
              x.j5y6_A,
              x.j5y6_E,
              x.j5y6_B);
}

function gtr4ths_k34x2() {
  var x = beadgcf;
  fingerBoard(x.k34x2_F,
              x.k34x2_C,
              x.k34x2_G,
              x.k34x2_D,
              x.k34x2_A,
              x.k34x2_E,
              x.k34x2_B);
}

function gtr4ths_k1() {
  var x = beadgcf;
  fingerBoard(x.k1_F,
              x.k1_C,
              x.k1_G,
              x.k1_D,
              x.k1_A,
              x.k1_E,
              x.k1_B);
}

function gtr4ths_k17j5() {
  var x = beadgcf;
  fingerBoard(x.k17j5_F,
              x.k17j5_C,
              x.k17j5_G,
              x.k17j5_D,
              x.k17j5_A,
              x.k17j5_E,
              x.k17j5_B);
}

function gtr4ths_j2k34() {
  var x = beadgcf;
  fingerBoard(x.j2k34_F,
              x.j2k34_C,
              x.j2k34_G,
              x.j2k34_D,
              x.j2k34_A,
              x.j2k34_E,
              x.j2k34_B);
}

function gtr4ths_n25x6() {
  var x = beadgcf;
  fingerBoard(x.n25x6_F,
              x.n25x6_C,
              x.n25x6_G,
              x.n25x6_D,
              x.n25x6_A,
              x.n25x6_E,
              x.n25x6_B);
}

function gtr4ths_j25y6() {
  var x = beadgcf;
  fingerBoard(x.j25y6_F,
              x.j25y6_C,
              x.j25y6_G,
              x.j25y6_D,
              x.j25y6_A,
              x.j25y6_E,
              x.j25y6_B);
}

function gtr4ths_k5() {
  var x = beadgcf;
  fingerBoard(x.k5_F,
              x.k5_C,
              x.k5_G,
              x.k5_D,
              x.k5_A,
              x.k5_E,
              x.k5_B);
}

function gtr4ths_k15() {
  var x = beadgcf;
  fingerBoard(x.k15_F,
              x.k15_C,
              x.k15_G,
              x.k15_D,
              x.k15_A,
              x.k15_E,
              x.k15_B);
}

function gtr4ths_j56() {
  var x = beadgcf;
  fingerBoard(x.j56_F,
              x.j56_C,
              x.j56_G,
              x.j56_D,
              x.j56_A,
              x.j56_E,
              x.j56_B);
}

function gtr4ths_k135x4() {
  var x = beadgcf;
  fingerBoard(x.k135x4_F,
              x.k135x4_C,
              x.k135x4_G,
              x.k135x4_D,
              x.k135x4_A,
              x.k135x4_E,
              x.k135x4_B);
}

function gtr4ths_j56y7() {
  var x = beadgcf;
  fingerBoard(x.j56y7_F,
              x.j56y7_C,
              x.j56y7_G,
              x.j56y7_D,
              x.j56y7_A,
              x.j56y7_E,
              x.j56y7_B);
}

function gtr4ths_n345y7() {
  var x = beadgcf;
  fingerBoard(x.n345y7_F,
              x.n345y7_C,
              x.n345y7_G,
              x.n345y7_D,
              x.n345y7_A,
              x.n345y7_E,
              x.n345y7_B);
}

function gtr4ths_k1j6y7() {
  var x = beadgcf;
  fingerBoard(x.k1j6y7_F,
              x.k1j6y7_C,
              x.k1j6y7_G,
              x.k1j6y7_D,
              x.k1j6y7_A,
              x.k1j6y7_E,
              x.k1j6y7_B);
}

function gtr4ths_k345x2() {
  var x = beadgcf;
  fingerBoard(x.k345x2_F,
              x.k345x2_C,
              x.k345x2_G,
              x.k345x2_D,
              x.k345x2_A,
              x.k345x2_E,
              x.k345x2_B);
}

function gtr4ths_k2j56y7() {
  var x = beadgcf;
  fingerBoard(x.k2j56y7_F,
              x.k2j56y7_C,
              x.k2j56y7_G,
              x.k2j56y7_D,
              x.k2j56y7_A,
              x.k2j56y7_E,
              x.k2j56y7_B);
}

function gtr4ths_j346y5() {
  var x = beadgcf;
  fingerBoard(x.j346y5_F,
              x.j346y5_C,
              x.j346y5_G,
              x.j346y5_D,
              x.j346y5_A,
              x.j346y5_E,
              x.j346y5_B);
}

function gtr4ths_j3k5() {
  var x = beadgcf;
  fingerBoard(x.j3k5_F,
              x.j3k5_C,
              x.j3k5_G,
              x.j3k5_D,
              x.j3k5_A,
              x.j3k5_E,
              x.j3k5_B);
}

function gtr4ths_n167() {
  var x = beadgcf;
  fingerBoard(x.n167_F,
              x.n167_C,
              x.n167_G,
              x.n167_D,
              x.n167_A,
              x.n167_E,
              x.n167_B);
}

function gtr4ths_k2() {
  var x = beadgcf;
  fingerBoard(x.k2_F,
              x.k2_C,
              x.k2_G,
              x.k2_D,
              x.k2_A,
              x.k2_E,
              x.k2_B);
}

function gtr4ths_k125() {
  var x = beadgcf;
  fingerBoard(x.k125_F,
              x.k125_C,
              x.k125_G,
              x.k125_D,
              x.k125_A,
              x.k125_E,
              x.k125_B);
}

function gtr4ths_k25() {
  var x = beadgcf;
  fingerBoard(x.k25_F,
              x.k25_C,
              x.k25_G,
              x.k25_D,
              x.k25_A,
              x.k25_E,
              x.k25_B);
}

function gtr4ths_k12() {
  var x = beadgcf;
  fingerBoard(x.k12_F,
              x.k12_C,
              x.k12_G,
              x.k12_D,
              x.k12_A,
              x.k12_E,
              x.k12_B);
}

function gtr4ths_k12j5() {
  var x = beadgcf;
  fingerBoard(x.k12j5_F,
              x.k12j5_C,
              x.k12j5_G,
              x.k12j5_D,
              x.k12j5_A,
              x.k12j5_E,
              x.k12j5_B);
}

function gtr4ths_k2x1() {
  var x = beadgcf;
  fingerBoard(x.k2x1_F,
              x.k2x1_C,
              x.k2x1_G,
              x.k2x1_D,
              x.k2x1_A,
              x.k2x1_E,
              x.k2x1_B);
}

function gtr4ths_k2j5() {
  var x = beadgcf;
  fingerBoard(x.k2j5_F,
              x.k2j5_C,
              x.k2j5_G,
              x.k2j5_D,
              x.k2j5_A,
              x.k2j5_E,
              x.k2j5_B);
}

function gtr4ths_k25x1() {
  var x = beadgcf;
  fingerBoard(x.k25x1_F,
              x.k25x1_C,
              x.k25x1_G,
              x.k25x1_D,
              x.k25x1_A,
              x.k25x1_E,
              x.k25x1_B);
}

function gtr4ths_k2j56() {
  var x = beadgcf;
  fingerBoard(x.k2j56_F,
              x.k2j56_C,
              x.k2j56_G,
              x.k2j56_D,
              x.k2j56_A,
              x.k2j56_E,
              x.k2j56_B);
}

function gtr4ths_k257x1() {
  var x = beadgcf;
  fingerBoard(x.k257x1_F,
              x.k257x1_C,
              x.k257x1_G,
              x.k257x1_D,
              x.k257x1_A,
              x.k257x1_E,
              x.k257x1_B);
}

function gtr4ths_k2j5y6() {
  var x = beadgcf;
  fingerBoard(x.k2j5y6_F,
              x.k2j5y6_C,
              x.k2j5y6_G,
              x.k2j5y6_D,
              x.k2j5y6_A,
              x.k2j5y6_E,
              x.k2j5y6_B);
}

function gtr4ths_k25x17() {
  var x = beadgcf;
  fingerBoard(x.k25x17_F,
              x.k25x17_C,
              x.k25x17_G,
              x.k25x17_D,
              x.k25x17_A,
              x.k25x17_E,
              x.k25x17_B);
}

function gtr4ths_k2j5x1() {
  var x = beadgcf;
  fingerBoard(x.k2j5x1_F,
              x.k2j5x1_C,
              x.k2j5x1_G,
              x.k2j5x1_D,
              x.k2j5x1_A,
              x.k2j5x1_E,
              x.k2j5x1_B);
}

function gtr4ths_k1j5() {
  var x = beadgcf;
  fingerBoard(x.k1j5_F,
              x.k1j5_C,
              x.k1j5_G,
              x.k1j5_D,
              x.k1j5_A,
              x.k1j5_E,
              x.k1j5_B);
}

function gtr4ths_n67x2() {
  var x = beadgcf;
  fingerBoard(x.n67x2_F,
              x.n67x2_C,
              x.n67x2_G,
              x.n67x2_D,
              x.n67x2_A,
              x.n67x2_E,
              x.n67x2_B);
}

function gtr4ths_k1j56y7() {
  var x = beadgcf;
  fingerBoard(x.k1j56y7_F,
              x.k1j56y7_C,
              x.k1j56y7_G,
              x.k1j56y7_D,
              x.k1j56y7_A,
              x.k1j56y7_E,
              x.k1j56y7_B);
}

function gtr4ths_j2k5() {
  var x = beadgcf;
  fingerBoard(x.j2k5_F,
              x.j2k5_C,
              x.j2k5_G,
              x.j2k5_D,
              x.j2k5_A,
              x.j2k5_E,
              x.j2k5_B);
}

function gtr4ths_n6x2() {
  var x = beadgcf;
  fingerBoard(x.n6x2_F,
              x.n6x2_C,
              x.n6x2_G,
              x.n6x2_D,
              x.n6x2_A,
              x.n6x2_E,
              x.n6x2_B);
}

function gtr4ths_j25() {
  var x = beadgcf;
  fingerBoard(x.j25_F,
              x.j25_C,
              x.j25_G,
              x.j25_D,
              x.j25_A,
              x.j25_E,
              x.j25_B);
}

function gtr4ths_j256() {
  var x = beadgcf;
  fingerBoard(x.j256_F,
              x.j256_C,
              x.j256_G,
              x.j256_D,
              x.j256_A,
              x.j256_E,
              x.j256_B);
}

// standard tuning 

function gtrSTD_n0() {
  var x = beadgcf;
  fingerBoard(x.n0_E,
              x.n0_B,
              x.n0_G,
              x.n0_D,
              x.n0_A,
              x.n0_E,
              x.n0_C);
}

function gtrSTD_k6() {
  var x = beadgcf;
  fingerBoard(x.k6_E,
              x.k6_B,
              x.k6_G,
              x.k6_D,
              x.k6_A,
              x.k6_E,
              x.k6_C);
}

function gtrSTD_j17() {
  var x = beadgcf;
  fingerBoard(x.j17_E,
              x.j17_B,
              x.j17_G,
              x.j17_D,
              x.j17_A,
              x.j17_E,
              x.j17_C);
}

function gtrSTD_k6x5() {
  var x = beadgcf;
  fingerBoard(x.k6x5_E,
              x.k6x5_B,
              x.k6x5_G,
              x.k6x5_D,
              x.k6x5_A,
              x.k6x5_E,
              x.k6x5_C);
}

function gtrSTD_j17y2() {
  var x = beadgcf;
  fingerBoard(x.j17y2_E,
              x.j17y2_B,
              x.j17y2_G,
              x.j17y2_D,
              x.j17y2_A,
              x.j17y2_E,
              x.j17y2_C);
}

function gtrSTD_j3() {
  var x = beadgcf;
  fingerBoard(x.j3_E,
              x.j3_B,
              x.j3_G,
              x.j3_D,
              x.j3_A,
              x.j3_E,
              x.j3_C);
}

function gtrSTD_j34k6() {
  var x = beadgcf;
  fingerBoard(x.j34k6_E,
              x.j34k6_B,
              x.j34k6_G,
              x.j34k6_D,
              x.j34k6_A,
              x.j34k6_E,
              x.j34k6_C);
}

function gtrSTD_j17k2() {
  var x = beadgcf;
  fingerBoard(x.j17k2_E,
              x.j17k2_B,
              x.j17k2_G,
              x.j17k2_D,
              x.j17k2_A,
              x.j17k2_E,
              x.j17k2_C);
}

function gtrSTD_n26y5() {
  var x = beadgcf;
  fingerBoard(x.n26y5_E,
              x.n26y5_B,
              x.n26y5_G,
              x.n26y5_D,
              x.n26y5_A,
              x.n26y5_E,
              x.n26y5_C);
}

function gtrSTD_k26x5() {
  var x = beadgcf;
  fingerBoard(x.k26x5_E,
              x.k26x5_B,
              x.k26x5_G,
              x.k26x5_D,
              x.k26x5_A,
              x.k26x5_E,
              x.k26x5_C);
}

function gtrSTD_j6() {
  var x = beadgcf;
  fingerBoard(x.j6_E,
              x.j6_B,
              x.j6_G,
              x.j6_D,
              x.j6_A,
              x.j6_E,
              x.j6_C);
}

function gtrSTD_j36() {
  var x = beadgcf;
  fingerBoard(x.j36_E,
              x.j36_B,
              x.j36_G,
              x.j36_D,
              x.j36_A,
              x.j36_E,
              x.j36_C);
}

function gtrSTD_k56() {
  var x = beadgcf;
  fingerBoard(x.k56_E,
              x.k56_B,
              x.k56_G,
              x.k56_D,
              x.k56_A,
              x.k56_E,
              x.k56_C);
}

function gtrSTD_j136y7() {
  var x = beadgcf;
  fingerBoard(x.j136y7_E,
              x.j136y7_B,
              x.j136y7_G,
              x.j136y7_D,
              x.j136y7_A,
              x.j136y7_E,
              x.j136y7_C);
}

function gtrSTD_k56x4() {
  var x = beadgcf;
  fingerBoard(x.k56x4_E,
              x.k56x4_B,
              x.k56x4_G,
              x.k56x4_D,
              x.k56x4_A,
              x.k56x4_E,
              x.k56x4_C);
}

function gtrSTD_n167x4() {
  var x = beadgcf;
  fingerBoard(x.n167x4_E,
              x.n167x4_B,
              x.n167x4_G,
              x.n167x4_D,
              x.n167x4_A,
              x.n167x4_E,
              x.n167x4_C);
}

function gtrSTD_j3k5x4() {
  var x = beadgcf;
  fingerBoard(x.j3k5x4_E,
              x.j3k5x4_B,
              x.j3k5x4_G,
              x.j3k5x4_D,
              x.j3k5x4_A,
              x.j3k5x4_E,
              x.j3k5x4_C);
}

function gtrSTD_j167y2() {
  var x = beadgcf;
  fingerBoard(x.j167y2_E,
              x.j167y2_B,
              x.j167y2_G,
              x.j167y2_D,
              x.j167y2_A,
              x.j167y2_E,
              x.j167y2_C);
}

function gtrSTD_j2k56x4() {
  var x = beadgcf;
  fingerBoard(x.j2k56x4_E,
              x.j2k56x4_B,
              x.j2k56x4_G,
              x.j2k56x4_D,
              x.j2k56x4_A,
              x.j2k56x4_E,
              x.j2k56x4_C);
}

function gtrSTD_k157x6() {
  var x = beadgcf;
  fingerBoard(x.k157x6_E,
              x.k157x6_B,
              x.k157x6_G,
              x.k157x6_D,
              x.k157x6_A,
              x.k157x6_E,
              x.k157x6_C);
}

function gtrSTD_k1j6() {
  var x = beadgcf;
  fingerBoard(x.k1j6_E,
              x.k1j6_B,
              x.k1j6_G,
              x.k1j6_D,
              x.k1j6_A,
              x.k1j6_E,
              x.k1j6_C);
}

function gtrSTD_n345() {
  var x = beadgcf;
  fingerBoard(x.n345_E,
              x.n345_B,
              x.n345_G,
              x.n345_D,
              x.n345_A,
              x.n345_E,
              x.n345_C);
}

function gtrSTD_j2() {
  var x = beadgcf;
  fingerBoard(x.j2_E,
              x.j2_B,
              x.j2_G,
              x.j2_D,
              x.j2_A,
              x.j2_E,
              x.j2_C);
}

function gtrSTD_j26() {
  var x = beadgcf;
  fingerBoard(x.j26_E,
              x.j26_B,
              x.j26_G,
              x.j26_D,
              x.j26_A,
              x.j26_E,
              x.j26_C);
}

function gtrSTD_j236() {
  var x = beadgcf;
  fingerBoard(x.j236_E,
              x.j236_B,
              x.j236_G,
              x.j236_D,
              x.j236_A,
              x.j236_E,
              x.j236_C);
}

function gtrSTD_j23() {
  var x = beadgcf;
  fingerBoard(x.j23_E,
              x.j23_B,
              x.j23_G,
              x.j23_D,
              x.j23_A,
              x.j23_E,
              x.j23_C);
}

function gtrSTD_j23k6() {
  var x = beadgcf;
  fingerBoard(x.j23k6_E,
              x.j23k6_B,
              x.j23k6_G,
              x.j23k6_D,
              x.j23k6_A,
              x.j23k6_E,
              x.j23k6_C);
}

function gtrSTD_j2y3() {
  var x = beadgcf;
  fingerBoard(x.j2y3_E,
              x.j2y3_B,
              x.j2y3_G,
              x.j2y3_D,
              x.j2y3_A,
              x.j2y3_E,
              x.j2y3_C);
}

function gtrSTD_j2k6() {
  var x = beadgcf;
  fingerBoard(x.j2k6_E,
              x.j2k6_B,
              x.j2k6_G,
              x.j2k6_D,
              x.j2k6_A,
              x.j2k6_E,
              x.j2k6_C);
}

function gtrSTD_j26y3() {
  var x = beadgcf;
  fingerBoard(x.j26y3_E,
              x.j26y3_B,
              x.j26y3_G,
              x.j26y3_D,
              x.j26y3_A,
              x.j26y3_E,
              x.j26y3_C);
}

function gtrSTD_j2k56() {
  var x = beadgcf;
  fingerBoard(x.j2k56_E,
              x.j2k56_B,
              x.j2k56_G,
              x.j2k56_D,
              x.j2k56_A,
              x.j2k56_E,
              x.j2k56_C);
}

function gtrSTD_j246y3() {
  var x = beadgcf;
  fingerBoard(x.j246y3_E,
              x.j246y3_B,
              x.j246y3_G,
              x.j246y3_D,
              x.j246y3_A,
              x.j246y3_E,
              x.j246y3_C);
}

function gtrSTD_j26y34() {
  var x = beadgcf;
  fingerBoard(x.j26y34_E,
              x.j26y34_B,
              x.j26y34_G,
              x.j26y34_D,
              x.j26y34_A,
              x.j26y34_E,
              x.j26y34_C);
}

function gtrSTD_j2k6x5() {
  var x = beadgcf;
  fingerBoard(x.j2k6x5_E,
              x.j2k6x5_B,
              x.j2k6x5_G,
              x.j2k6x5_D,
              x.j2k6x5_A,
              x.j2k6x5_E,
              x.j2k6x5_C);
}

function gtrSTD_j2k6y3() {
  var x = beadgcf;
  fingerBoard(x.j2k6y3_E,
              x.j2k6y3_B,
              x.j2k6y3_G,
              x.j2k6y3_D,
              x.j2k6y3_A,
              x.j2k6y3_E,
              x.j2k6y3_C);
}

function gtrSTD_j3k6() {
  var x = beadgcf;
  fingerBoard(x.j3k6_E,
              x.j3k6_B,
              x.j3k6_G,
              x.j3k6_D,
              x.j3k6_A,
              x.j3k6_E,
              x.j3k6_C);
}

function gtrSTD_n45y2() {
  var x = beadgcf;
  fingerBoard(x.n45y2_E,
              x.n45y2_B,
              x.n45y2_G,
              x.n45y2_D,
              x.n45y2_A,
              x.n45y2_E,
              x.n45y2_C);
}

function gtrSTD_j3k56x4() {
  var x = beadgcf;
  fingerBoard(x.j3k56x4_E,
              x.j3k56x4_B,
              x.j3k56x4_G,
              x.j3k56x4_D,
              x.j3k56x4_A,
              x.j3k56x4_E,
              x.j3k56x4_C);
}

function gtrSTD_k2j6() {
  var x = beadgcf;
  fingerBoard(x.k2j6_E,
              x.k2j6_B,
              x.k2j6_G,
              x.k2j6_D,
              x.k2j6_A,
              x.k2j6_E,
              x.k2j6_C);
}

function gtrSTD_n5y2() {
  var x = beadgcf;
  fingerBoard(x.n5y2_E,
              x.n5y2_B,
              x.n5y2_G,
              x.n5y2_D,
              x.n5y2_A,
              x.n5y2_E,
              x.n5y2_C);
}

function gtrSTD_k26() {
  var x = beadgcf;
  fingerBoard(x.k26_E,
              x.k26_B,
              x.k26_G,
              x.k26_D,
              x.k26_A,
              x.k26_E,
              x.k26_C);
}

function gtrSTD_k256() {
  var x = beadgcf;
  fingerBoard(x.k256_E,
              x.k256_B,
              x.k256_G,
              x.k256_D,
              x.k256_A,
              x.k256_E,
              x.k256_C);
}

function gtrSTD_j5() {
  var x = beadgcf;
  fingerBoard(x.j5_E,
              x.j5_B,
              x.j5_G,
              x.j5_D,
              x.j5_A,
              x.j5_E,
              x.j5_C);
}

function gtrSTD_k34() {
  var x = beadgcf;
  fingerBoard(x.k34_E,
              x.k34_B,
              x.k34_G,
              x.k34_D,
              x.k34_A,
              x.k34_E,
              x.k34_C);
}

function gtrSTD_j5y6() {
  var x = beadgcf;
  fingerBoard(x.j5y6_E,
              x.j5y6_B,
              x.j5y6_G,
              x.j5y6_D,
              x.j5y6_A,
              x.j5y6_E,
              x.j5y6_C);
}

function gtrSTD_k34x2() {
  var x = beadgcf;
  fingerBoard(x.k34x2_E,
              x.k34x2_B,
              x.k34x2_G,
              x.k34x2_D,
              x.k34x2_A,
              x.k34x2_E,
              x.k34x2_C);
}

function gtrSTD_k1() {
  var x = beadgcf;
  fingerBoard(x.k1_E,
              x.k1_B,
              x.k1_G,
              x.k1_D,
              x.k1_A,
              x.k1_E,
              x.k1_C);
}

function gtrSTD_k17j5() {
  var x = beadgcf;
  fingerBoard(x.k17j5_E,
              x.k17j5_B,
              x.k17j5_G,
              x.k17j5_D,
              x.k17j5_A,
              x.k17j5_E,
              x.k17j5_C);
}

function gtrSTD_j2k34() {
  var x = beadgcf;
  fingerBoard(x.j2k34_E,
              x.j2k34_B,
              x.j2k34_G,
              x.j2k34_D,
              x.j2k34_A,
              x.j2k34_E,
              x.j2k34_C);
}

function gtrSTD_n25x6() {
  var x = beadgcf;
  fingerBoard(x.n25x6_E,
              x.n25x6_B,
              x.n25x6_G,
              x.n25x6_D,
              x.n25x6_A,
              x.n25x6_E,
              x.n25x6_C);
}

function gtrSTD_j25y6() {
  var x = beadgcf;
  fingerBoard(x.j25y6_E,
              x.j25y6_B,
              x.j25y6_G,
              x.j25y6_D,
              x.j25y6_A,
              x.j25y6_E,
              x.j25y6_C);
}

function gtrSTD_k5() {
  var x = beadgcf;
  fingerBoard(x.k5_E,
              x.k5_B,
              x.k5_G,
              x.k5_D,
              x.k5_A,
              x.k5_E,
              x.k5_C);
}

function gtrSTD_k15() {
  var x = beadgcf;
  fingerBoard(x.k15_E,
              x.k15_B,
              x.k15_G,
              x.k15_D,
              x.k15_A,
              x.k15_E,
              x.k15_C);
}

function gtrSTD_j56() {
  var x = beadgcf;
  fingerBoard(x.j56_E,
              x.j56_B,
              x.j56_G,
              x.j56_D,
              x.j56_A,
              x.j56_E,
              x.j56_C);
}

function gtrSTD_k135x4() {
  var x = beadgcf;
  fingerBoard(x.k135x4_E,
              x.k135x4_B,
              x.k135x4_G,
              x.k135x4_D,
              x.k135x4_A,
              x.k135x4_E,
              x.k135x4_C);
}

function gtrSTD_j56y7() {
  var x = beadgcf;
  fingerBoard(x.j56y7_E,
              x.j56y7_B,
              x.j56y7_G,
              x.j56y7_D,
              x.j56y7_A,
              x.j56y7_E,
              x.j56y7_C);
}

function gtrSTD_n345y7() {
  var x = beadgcf;
  fingerBoard(x.n345y7_E,
              x.n345y7_B,
              x.n345y7_G,
              x.n345y7_D,
              x.n345y7_A,
              x.n345y7_E,
              x.n345y7_C);
}

function gtrSTD_k1j6y7() {
  var x = beadgcf;
  fingerBoard(x.k1j6y7_E,
              x.k1j6y7_B,
              x.k1j6y7_G,
              x.k1j6y7_D,
              x.k1j6y7_A,
              x.k1j6y7_E,
              x.k1j6y7_C);
}

function gtrSTD_k345x2() {
  var x = beadgcf;
  fingerBoard(x.k345x2_E,
              x.k345x2_B,
              x.k345x2_G,
              x.k345x2_D,
              x.k345x2_A,
              x.k345x2_E,
              x.k345x2_C);
}

function gtrSTD_k2j56y7() {
  var x = beadgcf;
  fingerBoard(x.k2j56y7_E,
              x.k2j56y7_B,
              x.k2j56y7_G,
              x.k2j56y7_D,
              x.k2j56y7_A,
              x.k2j56y7_E,
              x.k2j56y7_C);
}

function gtrSTD_j346y5() {
  var x = beadgcf;
  fingerBoard(x.j346y5_E,
              x.j346y5_B,
              x.j346y5_G,
              x.j346y5_D,
              x.j346y5_A,
              x.j346y5_E,
              x.j346y5_C);
}

function gtrSTD_j3k5() {
  var x = beadgcf;
  fingerBoard(x.j3k5_E,
              x.j3k5_B,
              x.j3k5_G,
              x.j3k5_D,
              x.j3k5_A,
              x.j3k5_E,
              x.j3k5_C);
}

function gtrSTD_n167() {
  var x = beadgcf;
  fingerBoard(x.n167_E,
              x.n167_B,
              x.n167_G,
              x.n167_D,
              x.n167_A,
              x.n167_E,
              x.n167_C);
}

function gtrSTD_k2() {
  var x = beadgcf;
  fingerBoard(x.k2_E,
              x.k2_B,
              x.k2_G,
              x.k2_D,
              x.k2_A,
              x.k2_E,
              x.k2_C);
}

function gtrSTD_k125() {
  var x = beadgcf;
  fingerBoard(x.k125_E,
              x.k125_B,
              x.k125_G,
              x.k125_D,
              x.k125_A,
              x.k125_E,
              x.k125_C);
}

function gtrSTD_k25() {
  var x = beadgcf;
  fingerBoard(x.k25_E,
              x.k25_B,
              x.k25_G,
              x.k25_D,
              x.k25_A,
              x.k25_E,
              x.k25_C);
}

function gtrSTD_k12() {
  var x = beadgcf;
  fingerBoard(x.k12_E,
              x.k12_B,
              x.k12_G,
              x.k12_D,
              x.k12_A,
              x.k12_E,
              x.k12_C);
}

function gtrSTD_k12j5() {
  var x = beadgcf;
  fingerBoard(x.k12j5_E,
              x.k12j5_B,
              x.k12j5_G,
              x.k12j5_D,
              x.k12j5_A,
              x.k12j5_E,
              x.k12j5_C);
}

function gtrSTD_k2x1() {
  var x = beadgcf;
  fingerBoard(x.k2x1_E,
              x.k2x1_B,
              x.k2x1_G,
              x.k2x1_D,
              x.k2x1_A,
              x.k2x1_E,
              x.k2x1_C);
}

function gtrSTD_k2j5() {
  var x = beadgcf;
  fingerBoard(x.k2j5_E,
              x.k2j5_B,
              x.k2j5_G,
              x.k2j5_D,
              x.k2j5_A,
              x.k2j5_E,
              x.k2j5_C);
}

function gtrSTD_k25x1() {
  var x = beadgcf;
  fingerBoard(x.k25x1_E,
              x.k25x1_B,
              x.k25x1_G,
              x.k25x1_D,
              x.k25x1_A,
              x.k25x1_E,
              x.k25x1_C);
}

function gtrSTD_k2j56() {
  var x = beadgcf;
  fingerBoard(x.k2j56_E,
              x.k2j56_B,
              x.k2j56_G,
              x.k2j56_D,
              x.k2j56_A,
              x.k2j56_E,
              x.k2j56_C);
}

function gtrSTD_k257x1() {
  var x = beadgcf;
  fingerBoard(x.k257x1_E,
              x.k257x1_B,
              x.k257x1_G,
              x.k257x1_D,
              x.k257x1_A,
              x.k257x1_E,
              x.k257x1_C);
}

function gtrSTD_k2j5y6() {
  var x = beadgcf;
  fingerBoard(x.k2j5y6_E,
              x.k2j5y6_B,
              x.k2j5y6_G,
              x.k2j5y6_D,
              x.k2j5y6_A,
              x.k2j5y6_E,
              x.k2j5y6_C);
}

function gtrSTD_k25x17() {
  var x = beadgcf;
  fingerBoard(x.k25x17_E,
              x.k25x17_B,
              x.k25x17_G,
              x.k25x17_D,
              x.k25x17_A,
              x.k25x17_E,
              x.k25x17_C);
}

function gtrSTD_k2j5x1() {
  var x = beadgcf;
  fingerBoard(x.k2j5x1_E,
              x.k2j5x1_B,
              x.k2j5x1_G,
              x.k2j5x1_D,
              x.k2j5x1_A,
              x.k2j5x1_E,
              x.k2j5x1_C);
}

function gtrSTD_k1j5() {
  var x = beadgcf;
  fingerBoard(x.k1j5_E,
              x.k1j5_B,
              x.k1j5_G,
              x.k1j5_D,
              x.k1j5_A,
              x.k1j5_E,
              x.k1j5_C);
}

function gtrSTD_n67x2() {
  var x = beadgcf;
  fingerBoard(x.n67x2_E,
              x.n67x2_B,
              x.n67x2_G,
              x.n67x2_D,
              x.n67x2_A,
              x.n67x2_E,
              x.n67x2_C);
}

function gtrSTD_k1j56y7() {
  var x = beadgcf;
  fingerBoard(x.k1j56y7_E,
              x.k1j56y7_B,
              x.k1j56y7_G,
              x.k1j56y7_D,
              x.k1j56y7_A,
              x.k1j56y7_E,
              x.k1j56y7_C);
}

function gtrSTD_j2k5() {
  var x = beadgcf;
  fingerBoard(x.j2k5_E,
              x.j2k5_B,
              x.j2k5_G,
              x.j2k5_D,
              x.j2k5_A,
              x.j2k5_E,
              x.j2k5_C);
}

function gtrSTD_n6x2() {
  var x = beadgcf;
  fingerBoard(x.n6x2_E,
              x.n6x2_B,
              x.n6x2_G,
              x.n6x2_D,
              x.n6x2_A,
              x.n6x2_E,
              x.n6x2_C);
}

function gtrSTD_j25() {
  var x = beadgcf;
  fingerBoard(x.j25_E,
              x.j25_B,
              x.j25_G,
              x.j25_D,
              x.j25_A,
              x.j25_E,
              x.j25_C);
}

function gtrSTD_j256() {
  var x = beadgcf;
  fingerBoard(x.j256_E,
              x.j256_B,
              x.j256_G,
              x.j256_D,
              x.j256_A,
              x.j256_E,
              x.j256_C);
}

