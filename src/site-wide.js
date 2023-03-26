// Open external links in new tab (or window, based on browser preferences)
// window.addEventListener("DOMContentLoaded", function externalLinks() {
//   var anchors = document.getElementsByTagName("a");
//   for (var i = 0; i < anchors.length; i++) {
//     if (anchors[i].hostname !== window.location.hostname) {
//       anchors[i].setAttribute("target", "_blank");
//       anchors[i].setAttribute("rel", "noopener");
//     }
//   }
// });

function externalLinks() {
  for (var c = document.getElementsByTagName("a"), a = 0; a < c.length; a++) {
    var b = c[a];
    b.getAttribute("href") && b.hostname !== location.hostname && (b.target = "_blank")
  }
}
;
externalLinks();