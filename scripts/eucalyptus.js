// Copyright 2015 Reid Netterville III

"use strict";

var LaurAsia = Object.create(NeoPanGaea.TianLong);
var GondWana = Object.create(NeoPanGaea.AmmoLite);

function antheridia(tectonic, sprout) {

var grapheme;

  if (tectonic === GondWana) {
    grapheme = NeoPanGaea.Latin;
  }
  else if (tectonic === LaurAsia) {
    grapheme = NeoPanGaea.Hanzi;
  }
  else {
    return ;
  }

var chapterSegment = document.getElementById(sprout);

  if (chapterSegment === null) {
    chapterSegment = document.getElementsByTagName("body")[0];
    chapterSegment.style.padding = "2%";
    chapterSegment.style.backgroundColor = "rgb(0, 0, 0)";
    chapterSegment.style.fontSize = (innerWidth / 500) + "em";
    chapterSegment.style.color = "rgb(128, 128, 0)";
  }

  chapterSegment.style.fontFamily = "monospace";
  chapterSegment.style.whiteSpace = "nowrap";

  for (var bough = 0;
         bough < NeoPanGaea.Specimen.length;
       bough++) {

    for (var twig = 0;
           twig < NeoPanGaea.Specimen[bough].length;
         twig++) {

      var blossom = NeoPanGaea.Specimen[bough][twig];

      var descList = document.createElement("dl");
        descList.setAttribute("id", blossom);
      chapterSegment.appendChild(descList);

      var descTitle = document.createElement("dt");
        descTitle.textContent = blossom;
      descList.appendChild(descTitle);

      var lyreTuner = [
      grapheme.fn(tectonic[blossom]),
      grapheme.cn(tectonic[blossom]),
      grapheme.gn(tectonic[blossom]),
      grapheme.dn(tectonic[blossom]),
      grapheme.an(tectonic[blossom]),
      grapheme.en(tectonic[blossom]),
      grapheme.bn(tectonic[blossom])
      ];

      for (var bud = 0;
             bud < lyreTuner.length;
           bud++) {

        var descElm = document.createElement("dd");
          descElm.textContent = lyreTuner[bud];
        descList.appendChild(descElm);

      }
    }
  }
}

