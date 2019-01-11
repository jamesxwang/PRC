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
        self.pageOneAnimation(animationEnd);
        self.pageTwoAnimation(animationEnd);
    },
    pageOneAnimation(animationEnd) {
        var self = this;
        $('.xue .page1 .text1').one(animationEnd, function() {
            setTimeout(() => {
                $('.xue .page1 .pie').css('display','block');
            }, 500);
        });
        $('.xue .page1 .pie').one(animationEnd, function() {
            setTimeout(() => {
                $('.xue .page1 .description1').css('display','block');
            }, 500);
        });
        $('.xue .page1 .description1').one(animationEnd, function() {
            setTimeout(() => {
                $('.xue .page1 .description2').css('display','block');
            }, 500);
        });
        $('.xue .page1 .description2').one(animationEnd, function() {
            setTimeout(() => {
                $('.xue .page1 .description3').css('display','block');
            }, 500);
        });
        $('.xue .page1 .description3').one(animationEnd, function() {
            setTimeout(() => {
                $('.xue .hand').css('display','block');
                self.onClickTeacher();
            }, 500);
        });
    },
    pageTwoAnimation(animationEnd) {

    },
    onClickTeacher() {
        $('.xue .teacher').one('click', function() {
            $('.xue .hand').css('display','none');
            $('.xue .page1').addClass('done');
            var pageNum = 1;
            for (var i = 1; i <= 5; ++i) {
                var classList = $('.xue .page'+i)[0].classList;
                if (classList.contains('done')) {
                    pageNum = i+1;
                }
            }
            switch (pageNum) 
            {
                case 2:
                {
                    $('.xue .page2').addClass('done');

                    $('.xue .page1 .text1').removeClass('flash');
                    $('.xue .page1 .pie').removeClass('flash');
                    $('.xue .page1 .description1').removeClass('fadeIn');
                    $('.xue .page1 .description2').removeClass('fadeIn');
                    $('.xue .page1 .description3').removeClass('fadeIn');

                    $('.xue .page1 .text1').addClass('fadeOut');
                    $('.xue .page1 .pie').addClass('fadeOut');
                    $('.xue .page1 .description1').addClass('fadeOut');
                    $('.xue .page1 .description2').addClass('fadeOut');
                    $('.xue .page1 .description3').addClass('fadeOut');
                    $('.xue .page2').show();
                    break;
                }
                case 3:
                {
                    $('.xue .page3').addClass('done');

                    $('.xue .page2').hide();
                    $('.xue .page3').show();
                    break;
                }
                case 4:
                {
                    $('.xue .page4').addClass('done');

                    $('.xue .page3').hide();
                    $('.xue .page4').show();
                    break;
                }
                case 5:
                {
                    $('.xue .page5').addClass('done');   

                    $('.xue .page4').hide();
                    $('.xue .page5').show();
                    break;
                }
                default:
                    break;
            }
        });
    }
}