$(".btn-paso-1").click(function(){
    $(".btn-paso-1").addClass("paso-bg-active"),
    $(".btn-paso-1").removeClass("paso-bg-check"),
    $(".btn-paso-2").removeClass("paso-bg-active"),
    $(".paso-2").addClass("hide"),
    $(".paso-2").removeClass("show"),
    $(".paso-1").addClass("show"),
    $(".paso-1").removeClass("hide"),
    $(".img-paso").removeClass("show"),
    $(".img-paso").addClass("hide")
});

$(".go-to-paso-2").click(function(){
    
    console.log( $("input#acepto").val())

    if( $("input#name").val().length != 0  && $("input#last").val().length != 0 && $("input#email").val().length != 0 && $("input#phone").val().length != 0 && $('input#acepto').is(":checked") ) {
        $(".btn-paso-2").addClass("paso-bg-active"),
        $(".btn-paso-1").removeClass("paso-bg-active"),
        $(".btn-paso-1").addClass("paso-bg-check"),
        $(".paso-1").addClass("hide"),
        $(".paso-1").removeClass("show"),
        $(".paso-2").addClass("show"),
        $(".paso-2").removeClass("hide"),
        $(".img-paso").removeClass("hide"),
        $(".img-paso").addClass("show")
    } else { 
        alert ("Completa los campos, por favor")
        }

}); 

function closeFnc(s){document.getElementById(s).classList.remove("target"), $('body').css('overflow','auto')}
function openPop(s){document.getElementById(s).classList.add("target"); $('body').css('overflow','hidden')}