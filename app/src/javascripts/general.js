var $ = require('jquery');

module.exports = {
    initAnimationEnd() {
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
    showTada(animationEnd) {
        $('.main .bubble div').css('display','none');

        $('.main .hand').css('display','block');
        $('.main .hand').addClass('handAnimate');
        setTimeout(() => {
            $('.theme .leShang').addClass('tada');
            $('.main .bubble .bubble1').addClass('fadeIn');
            $('.main .bubble .bubble1').css('display','block');
        }, 700);
        $('.theme .leShang').one(animationEnd, function() {
            $('.theme .leXiang').addClass('tada');
            $('.main .bubble .bubble2').addClass('fadeIn');
            $('.main .bubble .bubble2').css('display','block');
        });
        $('.theme .leXiang').one(animationEnd, function() {
            $('.theme .leXue').addClass('tada');
            $('.main .bubble .bubble4').addClass('fadeIn');
            $('.main .bubble .bubble4').css('display','block');
        });
        $('.theme .leXue').one(animationEnd, function() {
            $('.theme .leHuo').addClass('tada');
            $('.main .bubble .bubble3').addClass('fadeIn');
            $('.main .bubble .bubble3').css('display','block');
        });
        $('.main .hand').one(animationEnd, function() {
            $('.main .hand').removeClass('handAnimate');
            $('.main .hand').css('display','none');
        });
    },
    playClickSound() {
        var click_sound = document.getElementById("click_sound");
        click_sound.play();
    },
    playDoorSound() {
        var door_sound = document.getElementById("door_sound");
        door_sound.play();
    }
}