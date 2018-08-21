import $ from 'jquery'

function menuToggle(){
    $("#aside").toggleClass('active')
    $(".modal").stop().fadeToggle(500)
}

$(document)
.on("click",".menu-toggle,.modal,#aside .close",menuToggle)