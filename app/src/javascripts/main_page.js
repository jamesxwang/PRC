var $ = require('jquery');

module.exports = {
    init: function() {
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
        setTimeout(() => {
            $('.theme .leShang').addClass('tada');
        }, 1000);
        $('.theme .leShang').one(animationEnd, function() {
            $('.theme .leXiang').addClass('tada');
        });
        $('.theme .leXiang').one(animationEnd, function() {
            $('.theme .leXue').addClass('tada');
        });
        $('.theme .leXue').one(animationEnd, function() {
            $('.theme .leHuo').addClass('tada');
        });
        $('.leShang').on('click', function() {
            $('.page1').removeClass('done');
            $('.page2').removeClass('done');
            $('.page3').removeClass('done');
            $('.page4').removeClass('done');
            $('.page5').removeClass('done');
            $('.page6').removeClass('done');

            $('.main').hide();
            $('.xiang').hide();
            $('.huo').hide();
            $('.xue').hide();

            $('.shang').show();
        });
        $('.leXiang').on('click', function() {
            $('.main').hide();
            $('.shang').hide();
            $('.huo').hide();
            $('.xue').hide();

            $('.xiang').show();
        });
        $('.leHuo').on('click', function() {
            $('.main').hide();
            $('.shang').hide();
            $('.xiang').hide();
            $('.xue').hide();

            $('.huo').show();
        });
        $('.leXue').on('click', function() {
            $('.main').hide();
            $('.shang').hide();
            $('.xiang').hide();
            $('.huo').hide();

            $('.xue').show();
        });
    }
}