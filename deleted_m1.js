var uri = window.location.toString();
if (uri.indexOf(&quot;%3D&quot;,&quot;%3D&quot;) &gt; 0) {
var clean_uri = uri.substring(0, uri.indexOf(&quot;%3D&quot;));
window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf(&quot;%3D%3D&quot;,&quot;%3D%3D&quot;) &gt; 0) {
var clean_uri = uri.substring(0, uri.indexOf(&quot;%3D%3D&quot;));
window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf(&quot;&amp;m=1&quot;,&quot;&amp;m=1&quot;) &gt; 0) {
var clean_uri = uri.substring(0, uri.indexOf(&quot;&amp;m=1&quot;));
window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf(&quot;?m=1&quot;,&quot;?m=1&quot;) &gt; 0) {
var clean_uri = uri.substring(0, uri.indexOf(&quot;?m=1&quot;));
window.history.replaceState({}, document.title, clean_uri);
}