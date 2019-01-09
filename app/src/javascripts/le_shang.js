var $ = require('jquery');

module.exports = {
    init: function() {
        var self = this;

        self.initAnimation();

          
    },
    initAnimation() {
        var animationEnd = (function(el) {
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
        var $circle1 = $('.circle_1')[0];
        var $circle2 = $('.circle_2')[0];
        var $circle3 = $('.circle_3')[0];

        $('.circle_1').one(animationEnd, function() {
            setTimeout(() => {
                $('.circle_1 img').css('opacity','100');
                $circle1.classList.remove('jackInTheBox');
                $circle1.classList.add('flash');
                setTimeout(() => {
                    $('.circle_2 img').css('opacity','100');
                    $circle2.classList.remove('jackInTheBox');
                    $circle2.classList.add('flash');
                    setTimeout(() => {
                        $('.circle_3 img').css('opacity','100');
                        $circle3.classList.remove('jackInTheBox');
                        $circle3.classList.add('flash');
                        setTimeout(() => {
                            $('.popup2').css('display','block');
                        }, 2000);
                    },1000);
                },1000);
            },500);
        });
    }
}