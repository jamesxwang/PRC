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
        $('.end').on('click', function() {
            self.showEndPage();
        })
    },
    showEndPage() {
        $('.interactive .rotateBox').hide();
        $('.interactive .container .neon').hide();
        $('.interactive').removeClass('scaleOut');
        $('.interactive .doorBox .left_door').removeClass('slideOutLeft');
        $('.interactive .doorBox .right_door').removeClass('slideOutRight');
        $('.interactive').addClass('scaleIn');
        $('.interactive').show();
        this.closeDoor();
    },
    closeDoor() {
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
        $('.interactive .doorBox .left_door').addClass('slideInLeft faster');
        $('.interactive .doorBox .right_door').addClass('slideInRight faster');
        $('.interactive .doorBox .left_door').one(animationEnd, function() {
            setTimeout(() => {
                $('.endNeon').css('display','block');
            }, 200);
        });
        $('.endNeon').one(animationEnd, function() {
            setTimeout(() => {
                $('.endText').css('display','block');
            }, 200);
        });
    }
}