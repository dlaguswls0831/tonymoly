$(function(){
    var artG = $('.section>.artGroup');
    var bar = $('.nav>li');
    var wd = $(window).width();
    var mv = 0;

    if(wd > 1024){
        mv = 25;
        $('.iconRight').click(right);
        $('.iconLeft').click(left);
    }else if(wd > 420 && wd <= 1024){
        mv = 50;
        artG.swipeleft(right);
        artG.swiperight(left);
    }else{
        mv = 100;
        artG.swipeleft(right);
        artG.swiperight(left);
    }

    // cnt02 슬라이드 초기세팅
    artG.find('.image:last').prependTo(artG);
    artG.css('margin-left',-mv+'%');

    function left(){
        artG.stop().animate({
            marginLeft : 0
        },400,function(){
            artG.find('.image:last').prependTo(artG);
            artG.css('margin-left',-mv+'%');
        });
    };
    function right(){
        artG.stop().animate({
            marginLeft : 2*-mv+'%'
        },400,function(){
            artG.find('.image:first').appendTo(artG);
            artG.css('margin-left',-mv+'%');
        });
    };

    bar.last().mouseover(function(){
        $('.barMenu').css('opacity','1');
    });
    $('.barMenu').mouseleave(function(){
        $(this).css('opacity','0');
    });
});