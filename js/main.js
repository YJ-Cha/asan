// #conWrap의 높이(세로길이) 구하기 
/*
var footerTop = $('footer').offset().top; //상단으로부터 푸터까지의 거리
var conWrapTop = $('#conWrap').offset().top; //상단으로부터 conWrap까지의 거리

var conWrapH = footerTop - conWrapTop; //ConWrap의 높이(세로길이)

$('#conWrap').css({height:conWrapH});

$(window).resize(function(){
    var footerTop = $('footer').offset().top;
    var conWrapTop = $('#conWrap').offset().top;
    var conWrapH = footerTop - conWrapTop
    $('#conWrap').css({height:conWrapH});
});
*/

var elFooter = document.querySelector('footer'); 

// #conWrap의 높이(세로길이) 구하기2 - footer position:fixed 사용x
var winH = $(window).height();
var headerH = $('header').height();
var footerH = elFooter.offsetHeight; 
//box-sizing:border-box 적용시 패딩, 보더를 제외한 값을 구함

var conWrapH = winH - (headerH + footerH);
//#conWrap의 높이는 화면 전체의 세로에서 헤더,푸터 높이를 빼준 값

$('#conWrap').css({height:conWrapH});

console.log(`현재 윈도우의 높이 ${winH} / header의 높이 ${headerH } / footer의 높이 ${footerH }`)

$(window).resize(function(){
    var winH = $(window).height();
    var conWrapH = winH - (headerH + footerH);
    $('#conWrap').css({height:conWrapH});
});

//lnb 슬라이드 메뉴
var du = 400;
var open = 0 ; //메뉴가 닫혀있을때(처음)

$('.lnbBtn').click(function(){

    if (open == 0){
        $('#lnb').animate({left:0},du,'swing');
        $('#wrap').animate({left:274},du,'swing');
        $('.cover').fadeIn(du);
        $(this).find('img').attr({'src':'images/bg_header_lnb_active.png',  'alt':'메뉴닫기'});
        open = '열림';
    } else {
        $('#lnb').animate({left:-274},du,'swing');
        $('#wrap').animate({left:0},du,'swing');
        $('.cover').fadeOut(du);
        $(this).find('img').attr({'src':'images/bg_header_lnb.png', 'alt':'메뉴열기'});
        open = 0;
    }
});