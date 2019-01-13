var $ = require('jquery');
var le_shang = require('./le_shang.js');
var le_shang = require('./le_shang.js');
var le_xiang = require('./le_xiang.js');
var le_huo = require('./le_huo.js');
var le_xue = require('./le_xue.js');

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
            $('.main').hide();
            $('.xiang').hide();
            $('.huo').hide();
            $('.xue').hide();

            $('.shang').show();
            $('.shang .page1').css('display','block');
            $('.shang .page1 .popup1').css('display','block');
            le_shang.init();
        });
        $('.leXiang').on('click', function() {
            $('.main').hide();
            $('.shang').hide();
            $('.huo').hide();
            $('.xue').hide();

            $('.xiang .page1').css('display','block');
            $('.xiang .page1 .popup1').css('display','block');
            $('.xiang').show();
            le_xiang.init();

        });
        $('.leHuo').on('click', function() {
            $('.main').hide();
            $('.shang').hide();
            $('.xiang').hide();
            $('.xue').hide();

            $('.huo').show();
            le_huo.init();
        });
        $('.leXue').on('click', function() {
            $('.page1').removeClass('done');
            $('.page2').removeClass('done');
            $('.page3').removeClass('done');
            $('.page4').removeClass('done');
            $('.page5').removeClass('done');

            $('.main').hide();
            $('.shang').hide();
            $('.xiang').hide();
            $('.huo').hide();

            $('.xue').show();
            le_xue.init();
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
        // $('.interactive').addClass('scaleIn');
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