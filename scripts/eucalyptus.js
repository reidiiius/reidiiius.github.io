// Copyright 2015 Reid Netterville III

"use strict";

var LaurAsia = Object.create(NeoPanGaea.TianLong);
var GondWana = Object.create(NeoPanGaea.AmmoLite);

function sprOut(regNum, phyLum) {

var graPheme;

  if (phyLum === GondWana) {
    graPheme = NeoPanGaea.Latin;
  }
  else {
    graPheme = NeoPanGaea.Hanzi;
  }

var lyreTuner = [
 graPheme.fn(phyLum[regNum]),
 graPheme.cn(phyLum[regNum]),
 graPheme.gn(phyLum[regNum]),
 graPheme.dn(phyLum[regNum]),
 graPheme.an(phyLum[regNum]),
 graPheme.en(phyLum[regNum]),
 graPheme.bn(phyLum[regNum])
];

var chapterSegment = document.getElementById("arboretum");
  chapterSegment.style.fontFamily = "monospace";
  chapterSegment.style.whiteSpace = "nowrap";

var descList = document.createElement("dl");
  descList.setAttribute("id", regNum);
  chapterSegment.appendChild(descList);

var descTitle = document.createElement("dt");
  descTitle.textContent = regNum;
  descList.appendChild(descTitle);

  for (var wireCord in lyreTuner) {
    var descElm = document.createElement("dd");
    descElm.textContent = lyreTuner[wireCord];
    descList.appendChild(descElm);
  }
}

function antheridia(alloGraph) {
  for (var u in NeoPanGaea.Specimen) {
    for (var i in NeoPanGaea.Specimen[u]) {
      sprOut(NeoPanGaea.Specimen[u][i], alloGraph);
    }
  }
}

