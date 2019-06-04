function insertAfter(addition, konten) {
var parent = konten.parentNode;
if (parent.lastChild == konten) {
    parent.appendChild(addition);
} else {
    parent.insertBefore(addition, konten.nextSibling);
}
}
function insertAbove(addition, konten) {
var parent = konten.parentNode;
parent.insertBefore(addition, konten);
}
function insertBellow(addition) {
var parent = konten;
parent.appendChild(addition);
}
var iklan1 = document.getElementById(&quot;kode-iklan-tengah1&quot;);
var iklan2 = document.getElementById(&quot;kode-iklan-tengah2&quot;);
var iklanAtas = document.getElementById(&quot;kode-iklan-atas&quot;);
var iklanBawah = document.getElementById(&quot;kode-iklan-bawah&quot;);
var bacaJuga = document.getElementById(&quot;post-lainnya&quot;);
var konten = document.getElementById(&quot;body-post-it&quot;);
var lokasi = konten.getElementsByTagName(&quot;br&quot;);
if (lokasi.length &gt; 0) {
insertAbove(iklanAtas,konten); 
insertBellow(iklanBawah);
} 
if (lokasi.length &gt; 2) {
insertAfter(iklan1,lokasi[2]);
} 
else {
iklan1.innerHTML = &quot;&quot;;
}
if (lokasi.length &gt; 10) {
insertAfter(iklan2,lokasi[10]);
} 
else {
iklan2.innerHTML = &quot;&quot;;
}
if (lokasi.length &gt; 4) {
insertAfter(bacaJuga,lokasi[4]);
} 
else {
bacaJuga.innerHTML = &quot;&quot;;
}
