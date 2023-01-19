'use strict';


// ハンバーガーメニュー
$(function () {
    $(".menu-btn").on("click", function () {
        $(".menu-btn").toggleClass("is-active");
        $(".menu").toggleClass("is-active");
    });
});


// スクロールメニューバー
$(function(){
    window.addEventListener('scroll',function(){
        const topBtn = document.getElementById('top_pc');
        const scroll = window.pageYOffset;
        if (scroll > 600) {
            topBtn.style.opacity = 1;
        } else topBtn.style.opacity = 0;
    });
});


// ロゴ浮かび上がり
function load_effect() {
    var element = document.getElementsByClassName('load-fade');
    if(!element) return;
    for(var i = 0; i < element.length; i++) { 
    element[i].classList.add('is-show');
    } 
}
setTimeout(load_effect, 600);


// TOPボタン
$(function(){
    const pagetop = $('.pagetop');
    pagetop.click(function(){
    $('body,html').animate({scrollTop: 0 },1000);
        return false;
    });
});


// TOP押下後のロゴ変化
$(function(){
    $('.pagetop').on('click',function(){;
        $(rogo_after).addClass('rogo_after_name');
    });
});
