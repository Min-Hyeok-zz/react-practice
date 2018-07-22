import $ from 'jquery'

function menuToggle(){
    $("#aside").toggleClass('active')
    $(".modal").stop().fadeToggle(500)
}

function joinPopup(){
    $(".join").stop().fadeToggle(500)
}

$(document)
.on("click",".menu-toggle,.modal",menuToggle)
.on("click",".join-btn,.join > .close",joinPopup)