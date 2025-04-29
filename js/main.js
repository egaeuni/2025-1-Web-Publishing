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
});
