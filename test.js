function moveitmoveit() {
    var eff = document.getElementById("hiddenone");
    eff.addEventListener("load",function(){
       var conter= eff.contentWindow.document.body.innerHTML.match('^[^<br]*');
       var stringy = conter.join();
       alert(stringy);
       alert("[0] " + stringy[0]);
       var arr = stringy.split(',');
       alert(arr[0]);
   });
}
moveitmoveit();
