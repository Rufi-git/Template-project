"use strict";

$(document).on("click",".list-group-item",function(){
    $(this).addClass("active").siblings().removeClass("active");
})