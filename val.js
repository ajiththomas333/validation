$(document).ready(function()
    {
     $("#sign").validate()

    $("#sign").validate({
        rules:
        {
        fname:{
            required:true,
            minlength:4


        }
         })
    
     })
        