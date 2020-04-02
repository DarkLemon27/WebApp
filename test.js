function moveitmoveit() {
    var eff = document.getElementById("hiddenone");
    eff.addEventListener("load",function(){
       var conter= eff.contentWindow.document.body.innerHTML.match('^[^<br]*');
       alert(conter);
       alert(conter[0]);
       alert(conter[1]);
   });
}
moveitmoveit();
