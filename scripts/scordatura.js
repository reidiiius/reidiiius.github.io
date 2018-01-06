//  Copyright 2014-2018 Reid Netterville III 

"use strict";

var textModal = function() {

  var vv = "\u2591\u2591\u2591\u2591 ",
      qq = "\u2592\u2592\u2592\u2592 ";

  var hh = {
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
    j34k6:qq+vv+qq+qq+qq+vv+vv+qq+vv+vv+qq+qq,
    j56y7:qq+vv+qq+vv+qq+qq+qq+vv+qq+qq+vv+vv,
    k12j5:vv+qq+vv+qq+qq+qq+qq+vv+vv+qq+vv+qq,
    k17j5:qq+qq+qq+vv+qq+qq+qq+vv+vv+qq+vv+vv,
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
  j3k56x4:qq+vv+qq+qq+vv+vv+vv+qq+qq+vv+qq+qq,
  k1j56y7:vv+qq+qq+vv+qq+qq+qq+vv+qq+qq+vv+vv,
  k2j56y7:qq+vv+vv+qq+qq+qq+qq+vv+qq+qq+vv+vv}

  return hh;
}();

var uCrypt = function() {

  var eE = [
    "\u30FC",
    "\u9492",
    "\u9530",
    "\u94C1",
    "\u94DC",
    "\u94F6",
    "\u9521",
    "\u91D1",
    "\u6C5E",
    "\u94C5",
    "\u94C0",
    "\u954E",
    "\u949A"]

  var _zz_ = eE[ 0] + eE[ 0] + " ",
      hGcU = eE[ 8] + eE[ 3] + " ",
      sNaG = eE[ 6] + eE[ 5] + " ",
      mNnP = eE[ 2] + eE[11] + " ",
      cUaU = eE[ 4] + eE[ 7] + " ",
      aUcU = eE[ 7] + eE[ 4] + " ",
      nPmN = eE[11] + eE[ 2] + " ",
      aGsN = eE[ 5] + eE[ 6] + " ",
      fEhG = eE[ 3] + eE[ 8] + " ",
      hGcU = eE[ 8] + eE[ 4] + " ",
      pUmN = eE[12] + eE[ 2] + " ",
      sNsN = eE[ 6] + eE[ 6] + " ",
      mNpU = eE[ 2] + eE[12] + " ",
      cUhG = eE[ 4] + eE[ 8] + " ",
      pBfE = eE[ 9] + eE[ 3] + " ",
      aUaG = eE[ 7] + eE[ 5] + " ",
      nPnP = eE[11] + eE[11] + " ",
      aGaU = eE[ 5] + eE[ 7] + " ",
      fEpB = eE[ 3] + eE[ 9] + " ",
      hGaG = eE[ 8] + eE[ 5] + " ",
      sNaU = eE[ 6] + eE[ 7] + " ",
      cUpB = eE[ 4] + eE[ 9] + " ",
      pBcU = eE[ 9] + eE[ 4] + " ",
      aUsN = eE[ 7] + eE[ 6] + " ",
      aGhG = eE[ 5] + eE[ 8] + " ",
      tIfE = eE[ 1] + eE[ 3] + " ",
      fEtI = eE[ 3] + eE[ 1] + " ",
      hGsN = eE[ 8] + eE[ 6] + " ",
      pUpU = eE[12] + eE[12] + " ",
      sNhG = eE[ 6] + eE[ 8] + " ",
      uRfE = eE[10] + eE[ 3] + " ",
      mNfE = eE[ 2] + eE[ 3] + " ",
      cUtI = eE[ 4] + eE[ 1] + " ",
      pBaG = eE[ 9] + eE[ 5] + " ",
      aUaU = eE[ 7] + eE[ 7] + " ",
      aGpB = eE[ 5] + eE[ 9] + " ",
      tIcU = eE[ 1] + eE[ 4] + " ",
      fEmN = eE[ 3] + eE[ 2] + " ",
      fEuR = eE[ 3] + eE[10] + " ",
      hGaU = eE[ 8] + eE[ 7] + " ",
      sNpB = eE[ 6] + eE[ 9] + " ",
      uRcU = eE[10] + eE[ 4] + " ",
      mNcU = eE[ 2] + eE[ 4] + " ",
      cUmN = eE[ 4] + eE[ 2] + " ",
      cUuR = eE[ 4] + eE[10] + " ",
      pBsN = eE[ 9] + eE[ 6] + " ",
      aUhG = eE[ 7] + eE[ 8] + " ",
      nPfE = eE[11] + eE[ 3] + " ",
      aGtI = eE[ 5] + eE[ 1] + " ",
      tIaG = eE[ 1] + eE[ 5] + " ",
      fEnP = eE[ 3] + eE[11] + " ",
      hGhG = eE[ 8] + eE[ 8] + " ",
      pUfE = eE[12] + eE[ 3] + " ",
      sNtI = eE[ 6] + eE[ 1] + " ",
      uRaG = eE[10] + eE[ 5] + " ",
      mNaG = eE[ 2] + eE[ 5] + " ",
      cUnP = eE[ 4] + eE[11] + " ",
      pBaU = eE[ 9] + eE[ 7] + " ",
      aUpB = eE[ 7] + eE[ 9] + " ",
      nPcU = eE[11] + eE[ 4] + " ",
      aGmN = eE[ 5] + eE[ 2] + " ",
      aGuR = eE[ 5] + eE[10] + " ",
      tIsN = eE[ 1] + eE[ 6] + " ",
      fEpU = eE[ 3] + eE[12] + " ",
      hGtI = eE[ 8] + eE[ 1] + " ",
      sNnP = eE[ 6] + eE[11] + " ",
      uRaU = eE[10] + eE[ 7] + " ",
      pBpB = eE[ 9] + eE[ 9] + " ",
      aUuR = eE[ 7] + eE[10] + " ",
      nPsN = eE[11] + eE[ 6] + " ",
      tIhG = eE[ 1] + eE[ 8] + " ",
      fEfE = eE[ 3] + eE[ 3] + " ",
      hGmN = eE[ 8] + eE[ 2] + " ",
      pUsN = eE[12] + eE[ 6] + " ",
      sNpU = eE[ 6] + eE[12] + " ",
      mNhG = eE[ 2] + eE[ 8] + " ",
      cUfE = eE[ 4] + eE[ 3] + " ",
      pBtI = eE[ 9] + eE[ 1] + " ",
      aUnP = eE[ 7] + eE[11] + " ",
      nPaU = eE[11] + eE[ 7] + " ",
      tIpB = eE[ 1] + eE[ 9] + " ",
      fEcU = eE[ 3] + eE[ 4] + " ",
      hGnP = eE[ 8] + eE[11] + " ",
      pUaU = eE[12] + eE[ 7] + " ",
      uRpB = eE[10] + eE[ 9] + " ",
      pBuR = eE[ 9] + eE[10] + " ",
      aUpU = eE[ 7] + eE[12] + " ",
      nPhG = eE[11] + eE[ 8] + " ",
      aGfE = eE[ 5] + eE[ 3] + " ",
      fEaG = eE[ 3] + eE[ 5] + " ";

  var yyy = {
       j2:hGhG+pUfE+_zz_+_zz_+cUnP+pBaU+_zz_+aUpB+_zz_+aGuR+_zz_+fEpU,
       j3:hGsN+_zz_+sNhG+uRfE+_zz_+pBaG+_zz_+aUaU+_zz_+aGpB+_zz_+fEuR,
       j5:pBcU+_zz_+aUsN+_zz_+aGhG+tIfE+fEtI+_zz_+_zz_+sNaU+_zz_+cUpB,
       j6:hGaU+_zz_+sNpB+_zz_+cUuR+pBsN+_zz_+aUhG+nPfE+_zz_+_zz_+fEnP,
       k1:_zz_+fEuR+hGsN+_zz_+sNhG+uRfE+_zz_+pBaG+_zz_+aUaU+_zz_+aGpB,
       k2:nPcU+_zz_+_zz_+fEpU+hGhG+pUfE+_zz_+uRaG+_zz_+pBaU+_zz_+aUpB,
       k5:uRcU+_zz_+pBsN+_zz_+aUhG+nPfE+_zz_+_zz_+fEnP+hGaU+_zz_+sNpB,
       k6:hGaG+_zz_+sNaU+_zz_+cUpB+pBcU+_zz_+aUsN+_zz_+_zz_+tIfE+fEtI,
       n0:hGcU+_zz_+sNsN+_zz_+cUhG+pBfE+_zz_+aUaG+_zz_+aGaU+_zz_+fEpB,
      j17:_zz_+_zz_+sNaU+_zz_+cUpB+pBcU+_zz_+aUsN+_zz_+aGhG+tIfE+fEtI,
      j23:hGhG+pUfE+_zz_+uRaG+_zz_+pBaU+_zz_+aUpB+_zz_+aGuR+_zz_+fEpU,
      j25:fEcU+hGmN+_zz_+_zz_+mNhG+cUfE+pBtI+_zz_+_zz_+nPaU+_zz_+tIpB,
      j26:hGhG+pUfE+_zz_+_zz_+cUnP+pBaU+_zz_+aUpB+nPcU+_zz_+_zz_+fEpU,
      j36:hGaU+_zz_+sNpB+uRcU+_zz_+pBsN+_zz_+aUhG+nPfE+_zz_+_zz_+fEnP,
      j56:uRcU+_zz_+pBsN+_zz_+aUhG+nPfE+aGtI+_zz_+fEnP+_zz_+_zz_+sNpB,
      k12:_zz_+aGuR+_zz_+fEpU+hGhG+pUfE+_zz_+uRaG+_zz_+pBaU+_zz_+aUpB,
      k15:_zz_+cUuR+pBsN+_zz_+aUhG+nPfE+_zz_+_zz_+fEnP+hGaU+_zz_+sNpB,
      k25:nPcU+_zz_+_zz_+fEpU+hGhG+pUfE+_zz_+_zz_+cUnP+pBaU+_zz_+aUpB,
      k26:hGmN+_zz_+_zz_+mNhG+cUfE+pBtI+_zz_+aUnP+_zz_+_zz_+tIpB+fEcU,
      k34:pBcU+_zz_+aUsN+_zz_+_zz_+tIfE+fEtI+hGaG+_zz_+sNaU+_zz_+cUpB,
      k56:hGaU+_zz_+sNpB+_zz_+cUuR+pBsN+_zz_+_zz_+nPfE+_zz_+tIaG+fEnP,
     j236:hGhG+pUfE+_zz_+uRaG+_zz_+pBaU+_zz_+aUpB+nPcU+_zz_+_zz_+fEpU,
     j256:fEcU+hGmN+_zz_+_zz_+mNhG+cUfE+pBtI+_zz_+aUnP+_zz_+_zz_+tIpB,
     j2k5:fEcU+hGmN+_zz_+_zz_+mNhG+cUfE+_zz_+_zz_+aUnP+nPaU+_zz_+tIpB,
     j2k6:hGhG+pUfE+_zz_+_zz_+cUnP+pBaU+_zz_+aUpB+_zz_+_zz_+tIsN+fEpU,
     j2y3:hGhG+pUfE+sNtI+_zz_+_zz_+pBaU+_zz_+aUpB+_zz_+aGuR+_zz_+fEpU,
     j3k5:nPcU+_zz_+tIsN+fEpU+_zz_+pUfE+_zz_+_zz_+cUnP+pBaU+_zz_+aUpB,
     j3k6:hGtI+_zz_+sNnP+uRaU+_zz_+pBpB+_zz_+aUuR+_zz_+_zz_+tIhG+fEfE,
     j5y6:pBcU+_zz_+aUsN+_zz_+aGhG+tIfE+fEtI+hGaG+_zz_+_zz_+_zz_+cUpB,
     k125:_zz_+aGuR+_zz_+fEpU+hGhG+pUfE+_zz_+_zz_+cUnP+pBaU+_zz_+aUpB,
     k1j5:_zz_+aUuR+nPsN+_zz_+tIhG+fEfE+hGtI+_zz_+_zz_+uRaU+_zz_+pBpB,
     k1j6:_zz_+pUfE+sNtI+_zz_+cUnP+pBaU+_zz_+aUpB+nPcU+_zz_+_zz_+fEpU,
     k256:hGmN+_zz_+_zz_+mNhG+cUfE+pBtI+_zz_+_zz_+nPaU+_zz_+tIpB+fEcU,
     k2j5:nPcU+_zz_+_zz_+fEpU+hGhG+pUfE+sNtI+_zz_+_zz_+pBaU+_zz_+aUpB,
     k2j6:hGmN+_zz_+_zz_+mNhG+cUfE+pBtI+_zz_+aUnP+nPaU+_zz_+_zz_+fEcU,
     k2x1:_zz_+_zz_+tIsN+fEpU+hGhG+pUfE+_zz_+uRaG+_zz_+pBaU+_zz_+aUpB,
     k6x5:hGaG+_zz_+sNaU+_zz_+cUpB+pBcU+_zz_+_zz_+_zz_+aGhG+tIfE+fEtI,
     n167:nPcU+_zz_+_zz_+fEpU+_zz_+pUfE+sNtI+_zz_+cUnP+pBaU+_zz_+aUpB,
     n345:_zz_+pUfE+_zz_+_zz_+cUnP+pBaU+_zz_+aUpB+nPcU+_zz_+tIsN+fEpU,
     n5y2:hGmN+_zz_+_zz_+mNhG+cUfE+_zz_+_zz_+aUnP+nPaU+_zz_+tIpB+fEcU,
     n6x2:fEcU+hGmN+_zz_+_zz_+mNhG+cUfE+pBtI+_zz_+aUnP+nPaU+_zz_+_zz_,
    j17k2:_zz_+_zz_+_zz_+mNfE+cUtI+pBaG+_zz_+aUaU+_zz_+aGpB+tIcU+fEmN,
    j17y2:hGaG+_zz_+_zz_+_zz_+cUpB+pBcU+_zz_+aUsN+_zz_+aGhG+tIfE+fEtI,
    j23k6:hGhG+pUfE+_zz_+uRaG+_zz_+pBaU+_zz_+aUpB+_zz_+_zz_+tIsN+fEpU,
    j25y6:tIcU+fEmN+_zz_+_zz_+sNhG+mNfE+cUtI+pBaG+_zz_+_zz_+_zz_+aGpB,
    j26y3:hGhG+pUfE+sNtI+_zz_+_zz_+pBaU+_zz_+aUpB+nPcU+_zz_+_zz_+fEpU,
    j2k34:tIcU+fEmN+_zz_+_zz_+_zz_+mNfE+cUtI+pBaG+_zz_+aUaU+_zz_+aGpB,
    j2k56:hGhG+pUfE+_zz_+_zz_+cUnP+pBaU+_zz_+_zz_+nPcU+_zz_+tIsN+fEpU,
    j34k6:hGsN+_zz_+sNhG+mNfE+cUtI+_zz_+_zz_+aUaU+_zz_+_zz_+tIcU+fEmN,
    j56y7:uRcU+_zz_+pBsN+_zz_+aUhG+nPfE+aGtI+_zz_+fEnP+hGaU+_zz_+_zz_,
    k12j5:_zz_+aGuR+_zz_+fEpU+hGhG+pUfE+sNtI+_zz_+_zz_+pBaU+_zz_+aUpB,
    k17j5:tIcU+fEmN+hGsN+_zz_+sNhG+mNfE+cUtI+_zz_+_zz_+aUaU+_zz_+_zz_,
    k25x1:_zz_+_zz_+tIsN+fEpU+hGhG+pUfE+_zz_+_zz_+cUnP+pBaU+_zz_+aUpB,
    k26x5:hGsN+_zz_+_zz_+mNfE+cUtI+pBaG+_zz_+_zz_+_zz_+aGpB+tIcU+fEmN,
    k2j56:nPcU+_zz_+_zz_+fEpU+hGhG+pUfE+sNtI+_zz_+cUnP+_zz_+_zz_+aUpB,
    k34x2:pBcU+_zz_+_zz_+_zz_+aGhG+tIfE+fEtI+hGaG+_zz_+sNaU+_zz_+cUpB,
    k56x4:hGaU+_zz_+sNpB+_zz_+cUuR+_zz_+_zz_+aUhG+nPfE+_zz_+tIaG+fEnP,
    n25x6:tIcU+fEmN+hGsN+_zz_+_zz_+mNfE+cUtI+pBaG+_zz_+_zz_+_zz_+aGpB,
    n26y5:_zz_+_zz_+sNhG+mNfE+cUtI+pBaG+_zz_+_zz_+_zz_+aGpB+tIcU+fEmN,
    n45y2:hGtI+_zz_+_zz_+uRaU+_zz_+pBpB+_zz_+aUuR+nPsN+_zz_+tIhG+fEfE,
    n67x2:_zz_+aUuR+_zz_+_zz_+tIhG+fEfE+hGtI+_zz_+sNnP+uRaU+_zz_+pBpB,
   j136y7:_zz_+_zz_+sNpB+uRcU+_zz_+pBsN+_zz_+aUhG+nPfE+aGtI+_zz_+fEnP,
   j167y2:hGaU+_zz_+_zz_+_zz_+cUuR+pBsN+_zz_+aUhG+nPfE+_zz_+tIaG+fEnP,
   j246y3:hGhG+pUfE+sNtI+_zz_+cUnP+_zz_+_zz_+aUpB+nPcU+_zz_+_zz_+fEpU,
   j26y34:hGhG+pUfE+sNtI+uRaG+_zz_+_zz_+_zz_+aUpB+nPcU+_zz_+_zz_+fEpU,
   j2k6x5:hGhG+pUfE+_zz_+_zz_+cUnP+pBaU+_zz_+_zz_+_zz_+aGuR+tIsN+fEpU,
   j2k6y3:hGhG+pUfE+sNtI+_zz_+_zz_+pBaU+_zz_+aUpB+_zz_+_zz_+tIsN+fEpU,
   j346y5:nPcU+_zz_+tIsN+fEpU+hGhG+pUfE+_zz_+_zz_+cUnP+_zz_+_zz_+aUpB,
   j3k5x4:hGaU+_zz_+sNpB+uRcU+_zz_+_zz_+_zz_+aUhG+nPfE+aGtI+_zz_+fEnP,
   k135x4:_zz_+cUuR+pBsN+_zz_+_zz_+nPfE+_zz_+tIaG+fEnP+hGaU+_zz_+sNpB,
   k157x6:hGhG+pUfE+sNtI+_zz_+cUnP+pBaU+_zz_+_zz_+nPcU+_zz_+_zz_+fEpU,
   k1j6y7:_zz_+cUuR+pBsN+_zz_+aUhG+nPfE+_zz_+tIaG+fEnP+hGaU+_zz_+_zz_,
   k257x1:nPcU+_zz_+tIsN+fEpU+hGhG+pUfE+_zz_+_zz_+cUnP+pBaU+_zz_+_zz_,
   k25x17:_zz_+aGuR+tIsN+fEpU+hGhG+pUfE+_zz_+_zz_+cUnP+pBaU+_zz_+_zz_,
   k2j5x1:_zz_+_zz_+tIsN+fEpU+hGhG+pUfE+sNtI+_zz_+_zz_+pBaU+_zz_+aUpB,
   k2j5y6:nPcU+_zz_+_zz_+fEpU+hGhG+pUfE+sNtI+uRaG+_zz_+_zz_+_zz_+aUpB,
   k345x2:uRcU+_zz_+_zz_+_zz_+aUhG+nPfE+aGtI+_zz_+fEnP+hGaU+_zz_+sNpB,
   n167x4:hGaU+_zz_+_zz_+uRcU+_zz_+pBsN+_zz_+aUhG+nPfE+aGtI+_zz_+fEnP,
   n345y7:_zz_+cUuR+_zz_+_zz_+aUhG+nPfE+_zz_+tIaG+fEnP+hGaU+_zz_+sNpB,
  j2k56x4:hGhG+pUfE+_zz_+_zz_+cUnP+_zz_+_zz_+aUpB+nPcU+_zz_+tIsN+fEpU,
  j3k56x4:hGtI+_zz_+sNnP+uRaU+_zz_+_zz_+_zz_+aUuR+nPsN+_zz_+tIhG+fEfE,
  k1j56y7:_zz_+aUuR+nPsN+_zz_+tIhG+fEfE+hGtI+_zz_+sNnP+uRaU+_zz_+_zz_,
  k2j56y7:nPcU+_zz_+_zz_+fEpU+hGhG+pUfE+sNtI+_zz_+cUnP+pBaU+_zz_+_zz_}

  return yyy;
}();

var HanZi = {
  u_eadgbe : function( t, x ) {
  document.getElementById("sT").textContent=t
  document.getElementById("s0").textContent=x.slice(12,36).concat(x.slice(0,14))
  document.getElementById("s1").textContent=x.slice(33,36).concat(x.slice(0,35))
  document.getElementById("s2").textContent=x.slice(21,36).concat(x.slice(0,23))
  document.getElementById("s3").textContent=x.slice( 6,36).concat(x.slice(0, 8))
  document.getElementById("s4").textContent=x.slice(27,36).concat(x.slice(0,29))
  document.getElementById("s5").textContent=x.slice(12,36).concat(x.slice(0,14))
  },
  u_eadgcf : function( t, x ) {
  document.getElementById("sT").textContent=t
  document.getElementById("s0").textContent=x.slice(15,36).concat(x.slice(0,17))
  document.getElementById("s1").textContent=x.slice( 0,36).concat(x.slice(0, 2))
  document.getElementById("s2").textContent=x.slice(21,36).concat(x.slice(0,23))
  document.getElementById("s3").textContent=x.slice( 6,36).concat(x.slice(0, 8))
  document.getElementById("s4").textContent=x.slice(27,36).concat(x.slice(0,29))
  document.getElementById("s5").textContent=x.slice(12,36).concat(x.slice(0,14))
  }
}

var orthoDiGraphic = {
  uGj: function(o){ document.writeln(o.slice(18,36).concat(o.slice(0,18))) },
  uDj: function(o){ document.writeln(o.slice( 3,36).concat(o.slice(0, 3))) },
  uAj: function(o){ document.writeln(o.slice(24,36).concat(o.slice(0,24))) },
  uEj: function(o){ document.writeln(o.slice( 9,36).concat(o.slice(0, 9))) },
  uBj: function(o){ document.writeln(o.slice(30,36).concat(o.slice(0,30))) },
  uFn: function(o){ document.writeln(o.slice(15,36).concat(o.slice(0,15))) },
  uCn: function(o){ document.writeln(o.slice( 0,36).concat(o.slice(0, 0))) },
  uGn: function(o){ document.writeln(o.slice(21,36).concat(o.slice(0,21))) },
  uDn: function(o){ document.writeln(o.slice( 6,36).concat(o.slice(0, 6))) },
  uAn: function(o){ document.writeln(o.slice(27,36).concat(o.slice(0,27))) },
  uEn: function(o){ document.writeln(o.slice(12,36).concat(o.slice(0,12))) },
  uBn: function(o){ document.writeln(o.slice(33,36).concat(o.slice(0,33))) },
  uFk: function(o){ document.writeln(o.slice(18,36).concat(o.slice(0,18))) },
  uCk: function(o){ document.writeln(o.slice( 3,36).concat(o.slice(0, 3))) },
  uGk: function(o){ document.writeln(o.slice(24,36).concat(o.slice(0,24))) },
  uDk: function(o){ document.writeln(o.slice( 9,36).concat(o.slice(0, 9))) },
  uAk: function(o){ document.writeln(o.slice(30,36).concat(o.slice(0,30))) }
}

function quartalTuning(qp) {
  orthoDiGraphic.uFn(qp);
  orthoDiGraphic.uCn(qp);
  orthoDiGraphic.uGn(qp);
  orthoDiGraphic.uDn(qp);
  orthoDiGraphic.uAn(qp);
  orthoDiGraphic.uEn(qp);
}

var LaoZu = {
  uk4: function(o) { return (o.slice(18,36).concat(o.slice(0,18))) },
  un7: function(o) { return (o.slice( 3,36).concat(o.slice(0, 3))) },
  un3: function(o) { return (o.slice(24,36).concat(o.slice(0,24))) },
  un6: function(o) { return (o.slice( 9,36).concat(o.slice(0, 9))) },
  un2: function(o) { return (o.slice(30,36).concat(o.slice(0,30))) },
  un5: function(o) { return (o.slice(15,36).concat(o.slice(0,15))) },
  un1: function(o) { return (o.slice( 0,36).concat(o.slice(0, 0))) },
  un4: function(o) { return (o.slice(21,36).concat(o.slice(0,21))) },
  uj7: function(o) { return (o.slice( 6,36).concat(o.slice(0, 6))) },
  uj3: function(o) { return (o.slice(27,36).concat(o.slice(0,27))) },
  uj6: function(o) { return (o.slice(12,36).concat(o.slice(0,12))) },
  uj2: function(o) { return (o.slice(33,36).concat(o.slice(0,33))) },
  uj5: function(o) { return (o.slice(18,36).concat(o.slice(0,18))) }
}

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
  j34k6:"HgSn ____ SnHg MnFe CuTi ____ ____ AuAu ____ ____ TiCu FeMn ",
  j56y7:"UrCu ____ PbSn ____ AuHg NpFe AgTi ____ FeNp HgAu ____ ____ ",
  k12j5:"____ AgUr ____ FePu HgHg PuFe SnTi ____ ____ PbAu ____ AuPb ",
  k17j5:"TiCu FeMn HgSn ____ SnHg MnFe CuTi ____ ____ AuAu ____ ____ ",
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
j3k56x4:"HgTi ____ SnNp UrAu ____ ____ ____ AuUr NpSn ____ TiHg FeFe ",
k1j56y7:"____ AuUr NpSn ____ TiHg FeFe HgTi ____ SnNp UrAu ____ ____ ",
k2j56y7:"NpCu ____ ____ FePu HgHg PuFe SnTi ____ CuNp PbAu ____ ____ "}

var LaTin = {
  t_eadgbe : function( t, x ) {
  document.getElementById("sT").textContent=t
  document.getElementById("s0").textContent=x.slice(20,61).concat(x.slice(0,20))
  document.getElementById("s1").textContent=x.slice(55,61).concat(x.slice(0,55))
  document.getElementById("s2").textContent=x.slice(35,61).concat(x.slice(0,35))
  document.getElementById("s3").textContent=x.slice(10,61).concat(x.slice(0,10))
  document.getElementById("s4").textContent=x.slice(45,61).concat(x.slice(0,45))
  document.getElementById("s5").textContent=x.slice(20,61).concat(x.slice(0,20))
  },
  t_fkbjdn : function( t, x ) {
  document.getElementById("sT").textContent=t
  document.getElementById("s0").textContent=x.slice(10,61).concat(x.slice(0,10))
  document.getElementById("s1").textContent=x.slice(50,61).concat(x.slice(0,50))
  document.getElementById("s2").textContent=x.slice(30,61).concat(x.slice(0,30))
  document.getElementById("s3").textContent=x.slice(10,61).concat(x.slice(0,10))
  document.getElementById("s4").textContent=x.slice(50,61).concat(x.slice(0,50))
  document.getElementById("s5").textContent=x.slice(30,61).concat(x.slice(0,30))
  },
  t_eadgcf : function( t, x ) {
  document.getElementById("sT").textContent=t
  document.getElementById("s0").textContent=x.slice(25,61).concat(x.slice(0,25))
  document.getElementById("s1").textContent=x.slice( 0,61).concat(x.slice(0, 0))
  document.getElementById("s2").textContent=x.slice(35,61).concat(x.slice(0,35))
  document.getElementById("s3").textContent=x.slice(10,61).concat(x.slice(0,10))
  document.getElementById("s4").textContent=x.slice(45,61).concat(x.slice(0,45))
  document.getElementById("s5").textContent=x.slice(20,61).concat(x.slice(0,20))
  },
  t_bfbfbf : function( t, x ) {
  document.getElementById("sT").textContent=t
  document.getElementById("s0").textContent=x.slice(25,61).concat(x.slice(0,25))
  document.getElementById("s1").textContent=x.slice(55,61).concat(x.slice(0,55))
  document.getElementById("s2").textContent=x.slice(25,61).concat(x.slice(0,25))
  document.getElementById("s3").textContent=x.slice(55,61).concat(x.slice(0,55))
  document.getElementById("s4").textContent=x.slice(25,61).concat(x.slice(0,25))
  document.getElementById("s5").textContent=x.slice(55,61).concat(x.slice(0,55))
  },
  t_fcgdae : function( t, x ) {
  document.getElementById("sT").textContent=t
  document.getElementById("s0").textContent=x.slice(20,61).concat(x.slice(0,20))
  document.getElementById("s1").textContent=x.slice(45,61).concat(x.slice(0,45))
  document.getElementById("s2").textContent=x.slice(10,61).concat(x.slice(0,10))
  document.getElementById("s3").textContent=x.slice(35,61).concat(x.slice(0,35))
  document.getElementById("s4").textContent=x.slice( 0,61).concat(x.slice(0, 0))
  document.getElementById("s5").textContent=x.slice(25,61).concat(x.slice(0,25))
  }
}

var orthoTetraGraphic = {
  sGj: function(o){ document.writeln(o.slice(30,61).concat(o.slice(0,30))) },
  sDj: function(o){ document.writeln(o.slice( 5,61).concat(o.slice(0, 5))) },
  sAj: function(o){ document.writeln(o.slice(40,61).concat(o.slice(0,40))) },
  sEj: function(o){ document.writeln(o.slice(15,61).concat(o.slice(0,15))) },
  sBj: function(o){ document.writeln(o.slice(50,61).concat(o.slice(0,50))) },
  sFn: function(o){ document.writeln(o.slice(25,61).concat(o.slice(0,25))) },
  sCn: function(o){ document.writeln(o.slice( 0,61).concat(o.slice(0, 0))) },
  sGn: function(o){ document.writeln(o.slice(35,61).concat(o.slice(0,35))) },
  sDn: function(o){ document.writeln(o.slice(10,61).concat(o.slice(0,10))) },
  sAn: function(o){ document.writeln(o.slice(45,61).concat(o.slice(0,45))) },
  sEn: function(o){ document.writeln(o.slice(20,61).concat(o.slice(0,20))) },
  sBn: function(o){ document.writeln(o.slice(55,61).concat(o.slice(0,55))) },
  sFk: function(o){ document.writeln(o.slice(30,61).concat(o.slice(0,30))) },
  sCk: function(o){ document.writeln(o.slice( 5,61).concat(o.slice(0, 5))) },
  sGk: function(o){ document.writeln(o.slice(40,61).concat(o.slice(0,40))) },
  sDk: function(o){ document.writeln(o.slice(15,61).concat(o.slice(0,15))) },
  sAk: function(o){ document.writeln(o.slice(50,61).concat(o.slice(0,50))) }
}

function allFourthsTuning(qp) {
  orthoTetraGraphic.sFn(qp);
  orthoTetraGraphic.sCn(qp);
  orthoTetraGraphic.sGn(qp);
  orthoTetraGraphic.sDn(qp);
  orthoTetraGraphic.sAn(qp);
  orthoTetraGraphic.sEn(qp);
}

var PanOptic = {
  tk4: function(o) { return (o.slice(30,61).concat(o.slice(0,30))) },
  tn7: function(o) { return (o.slice( 5,61).concat(o.slice(0, 5))) },
  tn3: function(o) { return (o.slice(40,61).concat(o.slice(0,40))) },
  tn6: function(o) { return (o.slice(15,61).concat(o.slice(0,15))) },
  tn2: function(o) { return (o.slice(50,61).concat(o.slice(0,50))) },
  tn5: function(o) { return (o.slice(25,61).concat(o.slice(0,25))) },
  tn1: function(o) { return (o.slice( 0,61).concat(o.slice(0, 0))) },
  tn4: function(o) { return (o.slice(35,61).concat(o.slice(0,35))) },
  tj7: function(o) { return (o.slice(10,61).concat(o.slice(0,10))) },
  tj3: function(o) { return (o.slice(45,61).concat(o.slice(0,45))) },
  tj6: function(o) { return (o.slice(20,61).concat(o.slice(0,20))) },
  tj2: function(o) { return (o.slice(55,61).concat(o.slice(0,55))) },
  tj5: function(o) { return (o.slice(30,61).concat(o.slice(0,30))) }
}

var tune_ = LaTin.t_eadgcf  // tuning

var trans_ = PanOptic.tn1  // transposition

var typSet_ = textModal  // graphics

  var Zosimos = {
    j136y7: function() { tune_("j136y7",  trans_(typSet_.j136y7))  },
    j167y2: function() { tune_("j167y2",  trans_(typSet_.j167y2))  },
    j17k2: function()  { tune_("j17k2",   trans_(typSet_.j17k2))   },
    j17: function()    { tune_("j17",     trans_(typSet_.j17))     },
    j17y2: function()  { tune_("j17y2",   trans_(typSet_.j17y2))   },
    j236: function()   { tune_("j236",    trans_(typSet_.j236))    },
    j23k6: function()  { tune_("j23k6",   trans_(typSet_.j23k6))   },
    j23: function()    { tune_("j23",     trans_(typSet_.j23))     },
    j246y3: function() { tune_("j246y3",  trans_(typSet_.j246y3))  },
    j256: function()   { tune_("j256",    trans_(typSet_.j256))    },
    j25: function()    { tune_("j25",     trans_(typSet_.j25))     },
    j25y6: function()  { tune_("j25y6",   trans_(typSet_.j25y6))   },
    j26: function()    { tune_("j26",     trans_(typSet_.j26))     },
    j26y34: function() { tune_("j26y34",  trans_(typSet_.j26y34))  },
    j26y3: function()  { tune_("j26y3",   trans_(typSet_.j26y3))   },
    j2k34: function()  { tune_("j2k34",   trans_(typSet_.j2k34))   },
    j2k56: function()  { tune_("j2k56",   trans_(typSet_.j2k56))   },
    j2k56x4: function(){ tune_("j2k56x4", trans_(typSet_.j2k56x4)) },
    j2k5: function()   { tune_("j2k5",    trans_(typSet_.j2k5))    },
    j2k6: function()   { tune_("j2k6",    trans_(typSet_.j2k6))    },
    j2k6x5: function() { tune_("j2k6x5",  trans_(typSet_.j2k6x5))  },
    j2k6y3: function() { tune_("j2k6y3",  trans_(typSet_.j2k6y3))  },
    j2: function()     { tune_("j2",      trans_(typSet_.j2))      },
    j2y3: function()   { tune_("j2y3",    trans_(typSet_.j2y3))    },
    j346y5: function() { tune_("j346y5",  trans_(typSet_.j346y5))  },
    j36: function()    { tune_("j36",     trans_(typSet_.j36))     },
    j3k5: function()   { tune_("j3k5",    trans_(typSet_.j3k5))    },
    j3k5x4: function() { tune_("j3k5x4",  trans_(typSet_.j3k5x4))  },
    j3k56x4: function(){ tune_("j3k56x4", trans_(typSet_.j3k56x4)) },
    j3k6: function()   { tune_("j3k6",    trans_(typSet_.j3k6))    },
    j3: function()     { tune_("j3",      trans_(typSet_.j3))      },
    j34k6: function()  { tune_("j34k6",   trans_(typSet_.j34k6))   },
    j56: function()    { tune_("j56",     trans_(typSet_.j56))     },
    j56y7: function()  { tune_("j56y7",   trans_(typSet_.j56y7))   },
    j5: function()     { tune_("j5",      trans_(typSet_.j5))      },
    j5y6: function()   { tune_("j5y6",    trans_(typSet_.j5y6))    },
    j6: function()     { tune_("j6",      trans_(typSet_.j6))      },
    k125: function()   { tune_("k125",    trans_(typSet_.k125))    },
    k12j5: function()  { tune_("k12j5",   trans_(typSet_.k12j5))   },
    k12: function()    { tune_("k12",     trans_(typSet_.k12))     },
    k135x4: function() { tune_("k135x4",  trans_(typSet_.k135x4))  },
    k157x6: function() { tune_("k157x6",  trans_(typSet_.k157x6))  },
    k15: function()    { tune_("k15",     trans_(typSet_.k15))     },
    k17j5: function()  { tune_("k17j5",   trans_(typSet_.k17j5))   },
    k1j5: function()   { tune_("k1j5",    trans_(typSet_.k1j5))    },
    k1j56y7: function(){ tune_("k1j56y7", trans_(typSet_.k1j56y7)) },
    k1j6: function()   { tune_("k1j6",    trans_(typSet_.k1j6))    },
    k1j6y7: function() { tune_("k1j6y7",  trans_(typSet_.k1j6y7))  },
    k1: function()     { tune_("k1",      trans_(typSet_.k1))      },
    k256: function()   { tune_("k256",    trans_(typSet_.k256))    },
    k257x1: function() { tune_("k257x1",  trans_(typSet_.k257x1))  },
    k25: function()    { tune_("k25",     trans_(typSet_.k25))     },
    k25x17: function() { tune_("k25x17",  trans_(typSet_.k25x17))  },
    k25x1: function()  { tune_("k25x1",   trans_(typSet_.k25x1))   },
    k26: function()    { tune_("k26",     trans_(typSet_.k26))     },
    k26x5: function()  { tune_("k26x5",   trans_(typSet_.k26x5))   },
    k2j56: function()  { tune_("k2j56",   trans_(typSet_.k2j56))   },
    k2j56y7: function(){ tune_("k2j56y7", trans_(typSet_.k2j56y7)) },
    k2j5: function()   { tune_("k2j5",    trans_(typSet_.k2j5))    },
    k2j5x1: function() { tune_("k2j5x1",  trans_(typSet_.k2j5x1))  },
    k2j5y6: function() { tune_("k2j5y6",  trans_(typSet_.k2j5y6))  },
    k2j6: function()   { tune_("k2j6",    trans_(typSet_.k2j6))    },
    k2: function()     { tune_("k2",      trans_(typSet_.k2))      },
    k2x1: function()   { tune_("k2x1",    trans_(typSet_.k2x1))    },
    k345x2: function() { tune_("k345x2",  trans_(typSet_.k345x2))  },
    k34: function()    { tune_("k34",     trans_(typSet_.k34))     },
    k34x2: function()  { tune_("k34x2",   trans_(typSet_.k34x2))   },
    k56: function()    { tune_("k56",     trans_(typSet_.k56))     },
    k56x4: function()  { tune_("k56x4",   trans_(typSet_.k56x4))   },
    k5: function()     { tune_("k5",      trans_(typSet_.k5))      },
    k6: function()     { tune_("k6",      trans_(typSet_.k6))      },
    k6x5: function()   { tune_("k6x5",    trans_(typSet_.k6x5))    },
    n0: function()     { tune_("n0",      trans_(typSet_.n0))      },
    n167: function()   { tune_("n167",    trans_(typSet_.n167))    },
    n167x4: function() { tune_("n167x4",  trans_(typSet_.n167x4))  },
    n25x6: function()  { tune_("n25x6",   trans_(typSet_.n25x6))   },
    n26y5: function()  { tune_("n26y5",   trans_(typSet_.n26y5))   },
    n345: function()   { tune_("n345",    trans_(typSet_.n345))    },
    n345y7: function() { tune_("n345y7",  trans_(typSet_.n345y7))  },
    n45y2: function()  { tune_("n45y2",   trans_(typSet_.n45y2))   },
    n5y2: function()   { tune_("n5y2",    trans_(typSet_.n5y2))    },
    n67x2: function()  { tune_("n67x2",   trans_(typSet_.n67x2))   },
    n6x2: function()   { tune_("n6x2",    trans_(typSet_.n6x2))    }
  };

function dsplyTm() {
  var xTm = new Date().getTime()
  document.getElementById("obvTm").textContent = xTm
  document.getElementById("revTm").textContent = xTm
}

function mdlTag(q, r) {
  var s = document.getElementById(q),
      t = s.getElementsByTagName("dt"),
      u = s.getElementsByTagName("dd"),
      x = PanOptic;
  t[0].textContent = q
  u[0].textContent = x.tj6(r)
  u[1].textContent = x.tj3(r)
  u[2].textContent = x.tj7(r)
  u[3].textContent = x.tn4(r)
  u[4].textContent = x.tn1(r)
}

function gtrClass(q, r) {
  var s = document.getElementById(q),
      t = s.getElementsByClassName("sttl"),
      u = s.getElementsByClassName("strg"),
      x = PanOptic;
  t[0].textContent = q
  u[0].textContent = x.tj6(r)
  u[1].textContent = x.tj2(r)
  u[2].textContent = x.tn4(r)
  u[3].textContent = x.tj7(r)
  u[4].textContent = x.tj3(r)
  u[5].textContent = x.tj6(r)
}

var Typhoon = function() {

  var cycln = uCrypt;
  var tagEl = document.documentElement;

  if (document.title == "Cyclone") {
    if (cycln == clave) {
      tagEl.setAttribute("lang", "sv");
    }
    else if (cycln == uCrypt) {
      tagEl.setAttribute("lang", "zh");
    }
    else {
      tagEl.setAttribute("lang", "");
    }
  }

  switch (cycln != undefined) {
    case cycln == textModal :
    case cycln == clave :
      var _n5 = PanOptic.tn5,
          _n1 = PanOptic.tn1,
          _n4 = PanOptic.tn4,
          _j7 = PanOptic.tj7,
          _j3 = PanOptic.tj3,
          _j6 = PanOptic.tj6,
          _j2 = PanOptic.tj2,
          _j5 = PanOptic.tj5,
          _n7 = PanOptic.tn7,
          _n3 = PanOptic.tn3,
          _n6 = PanOptic.tn6,
          _n2 = PanOptic.tn2;
    break
    case cycln == uCrypt :
      var _n5 = LaoZu.un5,
          _n1 = LaoZu.un1,
          _n4 = LaoZu.un4,
          _j7 = LaoZu.uj7,
          _j3 = LaoZu.uj3,
          _j6 = LaoZu.uj6,
          _j2 = LaoZu.uj2,
          _j5 = LaoZu.uj5,
          _n7 = LaoZu.un7,
          _n3 = LaoZu.un3,
          _n6 = LaoZu.un6,
          _n2 = LaoZu.un2;
    break
  }

  var synoptic = {

    anemoScope: function(qp) {
      return [
        _n5(cycln[qp]),
        _n1(cycln[qp]),
        _n4(cycln[qp]),
        _j7(cycln[qp]),
        _j3(cycln[qp]),
        _j6(cycln[qp]),
        _j2(cycln[qp]),
        _j5(cycln[qp]),
        _n7(cycln[qp]),
        _n3(cycln[qp]),
        _n6(cycln[qp]),
        _n2(cycln[qp])
      ]
    }
  }

  return synoptic;
}();

