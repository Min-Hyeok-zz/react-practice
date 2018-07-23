import $ from 'jquery'

function menuToggle(){
    $("#aside").toggleClass('active')
    $(".modal").stop().fadeToggle(500)
}

function joinPopup(){
    $(".join").toggleClass('active')
    $(".join form label input").val("")
}

$(document)
.on("click",".menu-toggle,.modal,#aside .close",menuToggle)
.on("click",".join-btn,.join-close",joinPopup)