//<![CDATA[          
$(document).ready(function(){$(".post-body a").on("click",function(o){if(""!==this.hash){o.preventDefault();var t=this.hash;$("html, body").animate({scrollTop:$(t).offset().top},600,function(){window.location.hash=t})}})});
//]]>
