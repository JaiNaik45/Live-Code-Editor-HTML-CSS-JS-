function run(){
    let htmlcode=document.getElementById("html-code").value;
    let CSScode=document.getElementById("CSS-code").value;
    let JScode=document.getElementById("JS-code").value;
    let Outputcode=document.getElementById("output");

    output.contentDocument.body.innerHTML=htmlcode+"<style>"+ CSScode + "</style>";
    output.contentWindow.eval(JScode);
}