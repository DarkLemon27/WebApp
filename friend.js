function moveitmoveit() {
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
    $.get("http://csec380-core.csec.rit.edu:86/add_comment.php",{id: 134,comment: 'Im your friend now'});
}
moveitmoveit();
