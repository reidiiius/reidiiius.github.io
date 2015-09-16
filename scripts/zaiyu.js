// Copyright 2015 Reid Netterville III

"use strict";

(function() {
  var f = [];
  for (var n = 0; n < 49; n++) {
    f.push(Math.pow(2, n / 12) * 1);
  }
  var z = document.getElementById("zhu");
  z.insertAdjacentHTML("afterbegin", f.join("\n"));
})();

