function moveitmoveit() {
    var eff = document.getElementById("hiddenone");
    eff.addEventListener("load",function(){
       var conter= eff.contentWindow.document.body.innerHTML.match('^[^<br]*');
       var stringy = conter.join();
       //alert(stringy);

       var arr = stringy.split(',');
       for( var i = 0; i < arr.length; i++){
           alert(arr[i]);
       }
       //alert(arr[0]);
   });
}
moveitmoveit();
