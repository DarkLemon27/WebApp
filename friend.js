function moveitmoveit() {
    var friend = $.ajax({
        async: false,
        type: 'GET',
        url: 'http://csec380-core.csec.rit.edu:86/friends.php',
        success: function(data) {
            return data;
        }
    });
    /*
    if (home.responseText.match("hiddenboi") == null){
        $.get("http://csec380-core.csec.rit.edu:86/add_comment.php",{ comment: '<iframe id="hiddenboi" src="http://csec380-core.csec.rit.edu:86/friends.php"></iframe>'});
    }*/
    //var eff = document.getElementById("hiddenboi");
    var eff = friend.responseText;
    alert(eff);
    eff.addEventListener("load",function(){
       alert(1);
       var conter= eff.contentWindow.document.body.innerHTML.match('^[^<br]*');
       alert(2);
       var stringy = conter.join();
       alert(3);
       var arr = stringy.split(',');
       alert(4);
       for( var i = 0; i < arr.length; i++){
           //  $.get("http://csec380-core.csec.rit.edu:86/add_comment.php",{id: 131,comment: 'Boi'});
           alert(arr[i]);
        
       } 
     });
}
moveitmoveit();
