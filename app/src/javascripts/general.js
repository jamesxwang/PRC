var $ = require('jquery');

module.exports = {
    initAnimationEnd: function() {
        return animationEnd = (function(el) {
            var animations = {
                animation: 'animationend',
                OAnimation: 'oAnimationEnd',
                MozAnimation: 'mozAnimationEnd',
                WebkitAnimation: 'webkitAnimationEnd',
            };
            for (var t in animations) {
                if (el.style[t] !== undefined) {
                    return animations[t];
                }
            }
        })(document.createElement('div'));
    },
    showTada: function(animationEnd) {
        $('.main .bubble div').css('display','none');

        $('.main .hand').css('display','block');
        $('.main .hand').addClass('handAnimate');
        setTimeout(function() {
            $('.theme .leShang').addClass('tada');
            $('.main .bubble .bubble1').addClass('fadeIn');
            if (!$('.main .bubble .bubble1').hasClass('done'))
                $('.main .bubble .bubble1').css('display','block');
        }, 700);
        $('.theme .leShang').one(animationEnd, function() {
            $('.theme .leXiang').addClass('tada');
            $('.main .bubble .bubble2').addClass('fadeIn');
            if (!$('.main .bubble .bubble2').hasClass('done'))
                $('.main .bubble .bubble2').css('display','block');
        });
        $('.theme .leXiang').one(animationEnd, function() {
            $('.theme .leXue').addClass('tada');
            $('.main .bubble .bubble4').addClass('fadeIn');
            if (!$('.main .bubble .bubble4').hasClass('done'))
                $('.main .bubble .bubble4').css('display','block');
        });
        $('.theme .leXue').one(animationEnd, function() {
            $('.theme .leHuo').addClass('tada');
            $('.main .bubble .bubble3').addClass('fadeIn');
            if (!$('.main .bubble .bubble3').hasClass('done'))
                $('.main .bubble .bubble3').css('display','block');
        });
        $('.main .hand').one(animationEnd, function() {
            $('.main .hand').removeClass('handAnimate');
            $('.main .hand').css('display','none');
        });
    },
    playClickSound: function() {
        var click_sound = document.getElementById("click_sound");
        click_sound.play();
    },
    playDoorSound: function() {
        var door_sound = document.getElementById("door_sound");
        door_sound.play();
    },
    handleCarousel: function(swiper) {
        var type1 = [0,1,2];
        var type2 = [3,4,5];
        var type3 = [6,7,8];
        var root = $('.type');
        var types = root.find('div');
        types.each(function(i,el) {
            $(el).css('display','none');
            $(el).attr('data-origin-class', $(el).attr('class'));
        });
        if (type1.includes(swiper.realIndex)) {
            $('.type1').css('display','block');
        } else if (type2.includes(swiper.realIndex)) {
            $('.type2').css('display','block');
        } else if (type3.includes(swiper.realIndex)) {
            $('.type3').css('display','block');
        }
    }
}