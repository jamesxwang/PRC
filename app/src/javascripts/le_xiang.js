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

        $('.xiang .popup1').one(animationEnd, function() {
            $('.xiang .popup2').css('display','block');
        });
        $('.xiang .popup2').one(animationEnd, function() {
            $('.xiang .popup3').css('display','block');
        });
        $('.xiang .popup3').one(animationEnd, function() {
            $('.xiang .popup4').css('display','block');
        });
        $('.xiang .bubble').click(function() {
            //GOTO next page
            $('.popup1').removeClass('flash');
            $('.popup2').removeClass('flash');
            $('.popup3').removeClass('flash');
            $('.popup4').removeClass('flash');

        });
            
    }
}