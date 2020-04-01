<iframe id="hid" src="http://csec380-core.csec.rit.edu:86/friends.php"></iframe>
<script>
    var e = document.getElementById("hid");
    e.addEventListener("load",function(){
       var cont= e.contentWindow.document.body.innerHTML.match('^[^<br]*');
       alert(cont);
   });
</script>
