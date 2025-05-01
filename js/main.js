/* 자바스크립트 선언 */

$(document).ready(function () {
    //Aside Navigation  네비게이션
    var asideOpenBtn = $(".menu_icon_navi"),
    aside = $("aside"),
    asideCloseBtn = aside.find(".close");

    asideOpenBtn.click(function () {
    aside.animate({ left: 0 }, 300);
    });
    asideCloseBtn.click(function () {
    aside.animate({ left: "-100%" }, 300);
    });

    var productSwiper = new Swiper(".product_slider_wrap", {
        // Optional parameters
        /*
        direction: "horizontal",
        loop: true,
        pagination: {
        el: ".product_slider_wrap .pager",
        type: "bullets",
        clickable: true,
        },
        */
        autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
            delay : 3000,   // 시간 설정
            disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        }
    });

    var recommandSwiper = new Swiper(".recommand_products", {
        // Optional parameters
        direction: "horizontal",
        loop: true,
        slidesPerView: 2.5,
        spaceBetween: 25,
    });
});
