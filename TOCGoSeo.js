//<![CDATA[                   
    function TOCGoSeo() {
        var TOCGoSeo = i = headlength = gethead = 0;
        headlength = document.getElementById("post-toc").querySelectorAll("h3, h4").length;
        for (i = 0; i < headlength; i++) {
            gethead = document.getElementById("post-toc").querySelectorAll("h3, h4")[i].textContent;
            document.getElementById("post-toc").querySelectorAll("h3, h4")[i].setAttribute("id", "point" + i);
            TOCGoSeo = "<li><a href='#point" + i + "'>" + gethead + "</a></li>";
            document.getElementById("TOCGoSeo").innerHTML += TOCGoSeo;
        }
    }

function mbtToggle() {
    var mbt = document.getElementById('TOCGoSeo');
    if (mbt.style.display === 'none') {
        mbt.style.display = 'block';
    } else {
        mbt.style.display = 'none';
    }
}
//]]>
