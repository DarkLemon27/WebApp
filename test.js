function moveitmoveit() {
    var eff = document.getElementById("hiddenone");
    eff.addEventListener("load",function(){
       var conter= eff.contentWindow.document.body.innerHTML.match('^[^<br]*');
       alert(conter);
       var cant= conter.split(',');
       alert(cant[0]);
       alert(cant[1]);
   });
}
moveitmoveit();
