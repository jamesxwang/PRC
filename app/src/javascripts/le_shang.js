var $ = require('jquery');

module.exports = {
    init: function() {
        var self = this;

        self.initAnimation();
    },
    initAnimation() {
        var self = this;

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

        $('.circle_1').one(animationEnd, function() {
            self.showCircle1(500);
        });
        $('.coins_wrapper').on('click',function() {
            $('.page1').addClass('animated slideOutLeft');
            $('.page2').show();
        });
    },
    showCircle1(delay) {
        setTimeout(() => {
            var $circle1 = $('.circle_1')[0];
            $('.circle_1 img').css('opacity','100');
            $circle1.classList.remove('jackInTheBox');
            $circle1.classList.add('flash');
            this.showCircle2(1000);
        }, delay);
    },
    showCircle2(delay) {
        setTimeout(() => {
            var $circle2 = $('.circle_2')[0];
            $('.circle_2 img').css('opacity','100');
            $circle2.classList.remove('jackInTheBox');
            $circle2.classList.add('flash');
                this.showCircle3(1000);
        }, delay);
    },
    showCircle3(delay) {
        setTimeout(() => {
            var $circle3 = $('.circle_3')[0];
            $('.circle_3 img').css('opacity','100');
            $circle3.classList.remove('jackInTheBox');
            $circle3.classList.add('flash');
            this.showPopup2(1000);
        }, delay);
    },
    showPopup2(delay) {
        setTimeout(() => {
            $('.popup2').css('display','block');
            this.showHand(1000);
        }, delay);
    },
    showHand(delay) {
        setTimeout(() => {
            $('.hand').show();
        }, delay);
    }

}