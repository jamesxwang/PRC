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
        $('.shang .page1 .popup1').one(animationEnd, function() {
            setTimeout(() => {
                $('.shang .page1 .circle_1').css('display','block');
            }, 500);
        });
        $('.shang .page1 .circle_1').one(animationEnd, function() {
            setTimeout(() => {
                $('.shang .page1 .circle_2').css('display','block');
            }, 500);
        });
        $('.shang .page1 .circle_2').one(animationEnd, function() {
            setTimeout(() => {
                $('.shang .page1 .circle_3').css('display','block');
            }, 500);
        });
        $('.shang .page1 .circle_3').one(animationEnd, function() {
            setTimeout(() => {
                $('.shang .page1 .popup2').css('display','block');
            }, 500);
        });
        $('.shang .page1 .popup2').one(animationEnd, function() {
            setTimeout(() => {
                $('.shang .hand').css('display','block');
                self.onClickCoins();
            }, 500);
        });
    },
    pageTwoAnimation(animationEnd) {
        var self = this;
        $('.shang .page2 .popup1').one(animationEnd, function() {
            setTimeout(() => {
                $('.shang .page2 .text').css('display','block');
            }, 500);
        });
        $('.shang .page2 .text').one(animationEnd, function() {
            setTimeout(() => {
                $('.shang .page2 .arrow').css('display','block');
            }, 500);
        });
        $('.shang .page2 .arrow').one(animationEnd, function() {
            setTimeout(() => {
                $('.shang .page2 .coinBars').css('display','block');
            }, 500);
        });
        $('.shang .page2 .coinBars').one(animationEnd, function() {
            setTimeout(() => {
                $('.shang .hand').css('display','block');
                self.onClickCoins();
            }, 500);
        });
    },
    onClickCoins() {
        $('.shang .coins_wrapper').on('click',function() {
            $('.shang .page1').addClass('done');
            var pageNum = 1;
            for (var i = 1; i <= 6; ++i) {
                var classList = $('.shang .page'+i)[0].classList;
                if (classList.contains('done')) {
                    pageNum = i+1;
                }
            }
            switch (pageNum) 
            {
                case 2:
                {
                    $('.shang .page2').addClass('done');
                    $('.shang .coins_wrapper').on('click',null);
                    $('.shang .page1 .popup1').removeClass('flash');
                    $('.shang .page1 .popup1').addClass('bounceOutLeft');
                    $('.shang .page1 .circleBox').addClass('animated bounceOutLeft');
                    $('.shang .page1 .popup2').removeClass('flash');
                    $('.shang .page1 .popup2').addClass('bounceOutLeft');
                    $('.shang .page2').show();
                    break;
                }
                case 3:
                {
                    $('.shang .page3').addClass('done');
                    $('.shang .coins_wrapper').on('click',null);

                    $('.shang .page2').hide();
                    $('.shang .page3').show();
                    break;
                }
                case 4:
                {
                    $('.shang .page4').addClass('done');
                    $('.shang .coins_wrapper').on('click',null);

                    $('.shang .page3').hide();
                    $('.shang .page4').show();
                    break;
                }
                case 5:
                {
                    $('.shang .page5').addClass('done');   
                    $('.shang .coins_wrapper').on('click',null);

                    $('.shang .page4').hide();
                    $('.shang .page5').show();
                    break;
                }
                case 6:
                {
                    $('.shang .page6').addClass('done');
                    $('.shang .coins_wrapper').on('click',null);

                    $('.shang .page5').hide();
                    $('.shang .page6').show();
                    break;
                }
                default:
                    break;
            }
        });
    },
}