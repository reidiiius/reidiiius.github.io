/* Copyright 2015-2016 Reid Netterville III */

"use strict";

function synChro(rsrc, elmt) {
  var xhrq = new XMLHttpRequest();
  var gebi = document.getElementById(elmt);
  xhrq.onreadystatechange = function() {
    if (xhrq.readyState === 4 && xhrq.status === 200) {
      gebi.innerHTML = xhrq.responseText;
    }
    else {
      return;
    }
  }
  xhrq.open("GET", rsrc, true);
  xhrq.send();
}

function hippoCampus(x, y) {
  var gebi = document.getElementById(x);
  var xhrq = new XMLHttpRequest();
  xhrq.open("GET", y, false);
  xhrq.send();
  gebi.insertAdjacentHTML("afterbegin", xhrq.responseText);
}

