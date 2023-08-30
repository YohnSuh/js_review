// 헤더 드롭다운 메뉴
$('header span').click(function() {
    $('header .drop').stop().slideToggle();
});

$('header .drop > li').click(function() {
    let idx = $(this).index();
    $('.con .drop div').eq(idx).css({
        'display' : 'block'
    ,   'background' : $(this).text()
    });
    $('.con .drop div').eq(idx).siblings().css({
        'display' : 'none'
    });
    $('.con .acco, .con .gall').css({
        'display' : 'none'
    });
});

// 헤더 아코디언 메뉴
$('header .menu2').click(function() {
    $('.con .acco').css({
        'display' : 'block'
    });
    $('.con .drop div, .con .gall').css({
        'display' : 'none'
    });
});
$('.acco h3').click(function() {
    $(this).toggleClass('active');
    $(this).next().slideToggle();

    $(this).parent().siblings()
           .find('h3').removeClass('active');
    $(this).parent().siblings()
           .find('.content').stop().slideUp();
});

// 헤더 갤러리
$('.gall .item').click(function() {
    let img = $(this).find('.pic').html();
    let txt = $(this).find('.txt').html();
    $('.view').stop().fadeIn();
    $('figure').html(img);
    $('.view .txt').html(txt);
});
$('.closeWrap, .close').click(function() {
    $('.view').stop().fadeOut();
});
$('header .menu3').click(function() {
    $('.con .gall').css({
        'display' : 'flex'
    });
    $('.con .drop div, .con .acco').css({
        'display' : 'none'
    });
});