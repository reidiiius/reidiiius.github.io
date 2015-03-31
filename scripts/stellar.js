/* Copyright 2015 Reid Netterville III */

function celestial(resId) {
  var xhrq = new XMLHttpRequest();
  xhrq.open("get", resId, false); xhrq.send();
  document.getElementById("view").innerHTML = xhrq.responseText;
}

function castorPollux()  { celestial("/beadgcf/reliquary/agate.txt")      }
function alpherg()       { celestial("/beadgcf/reliquary/amethyst.txt")   }
function antares()       { celestial("/beadgcf/reliquary/beryl.txt")      }
function hamal()         { celestial("/beadgcf/reliquary/bloodstone.txt") }
function spica()         { celestial("/beadgcf/reliquary/carnelian.txt")  }
function acubens()       { celestial("/beadgcf/reliquary/emerald.txt")    }
function sadalmelik()    { celestial("/beadgcf/reliquary/garnet.txt")     }
function regulus()       { celestial("/beadgcf/reliquary/onyx.txt")       }
function zubenelgenubi() { celestial("/beadgcf/reliquary/peridot.txt")    }
function algedi()        { celestial("/beadgcf/reliquary/ruby.txt")       }
function aldebaran()     { celestial("/beadgcf/reliquary/sapphire.txt")   }
function rukbat()        { celestial("/beadgcf/reliquary/topaz.txt")      }


