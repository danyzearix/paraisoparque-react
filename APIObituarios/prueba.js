<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script type="text/javascript"></script>
$(document).ready(function(){
    $('.btn1').on("click", function(e) {
        $('.contenido1').slideToggle("show");
        return false;
    });
});
</script>