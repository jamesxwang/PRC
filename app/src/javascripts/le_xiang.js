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
        self.pageThreeAnimation(animationEnd);
        self.pageFourAnimation(animationEnd);
        self.pageFiveAnimation(animationEnd);
        self.pageSixAnimation(animationEnd);

    },
    pageOneAnimation(animationEnd) {
        var self = this;
        $('.xiang .page1 .popup1').one(animationEnd, function() {
            setTimeout(() => {
                $('.xiang .page1 .popup2').css('display','block');
            }, 500);
        });
        $('.xiang .page1 .popup2').one(animationEnd, function() {
            setTimeout(() => {
                $('.xiang .page1 .popup3').css('display','block');
            }, 200);
        });
        $('.xiang .page1 .popup3').one(animationEnd, function() {
            setTimeout(() => {
                $('.xiang .page1 .popup4').css('display','block');
            }, 200);
        });
        $('.xiang .page1 .popup4').one(animationEnd, function() {
            setTimeout(() => {
                self.showHand();
                self.onClickClown();
            }, 200);
        });
    },
    pageTwoAnimation(animationEnd) {
        var self = this;
        $('.xiang .page2 .popup1').one(animationEnd, function() {
            setTimeout(() => {
                $('.xiang .page2 .popup2').css('display','block');
            }, 200);
        });
        $('.xiang .page2 .popup2').one(animationEnd, function() {
            setTimeout(() => {
                $('.xiang .page2 .popup3').css('display','block');
            }, 200);
        });
        $('.xiang .page2 .popup3').one(animationEnd, function() {
            setTimeout(() => {
                self.showHand();
                self.onClickClown();
            }, 200);
        });
    },
    pageThreeAnimation(animationEnd) {
        var self = this;
        $('.xiang .page3 .popup1').one(animationEnd, function() {
            setTimeout(() => {
                $('.xiang .page3 .popup2').css('display','block');
            }, 200);
        });
        $('.xiang .page3 .popup2').one(animationEnd, function() {
            setTimeout(() => {
                $('.xiang .page3 .popup3').css('display','block');
            }, 200);
        });
        $('.xiang .page3 .popup3').one(animationEnd, function() {
            setTimeout(() => {
                $('.xiang .page3 .popup4').css('display','block');
            }, 200);
        });
        $('.xiang .page3 .popup4').one(animationEnd, function() {
            setTimeout(() => {
                self.showHand();
                self.onClickClown();
            }, 200);
        });
    },
    pageFourAnimation(animationEnd) {
        var self = this;
        $('.xiang .page4 .popup1').one(animationEnd, function() {
            setTimeout(() => {
                $('.xiang .page4 .popup2').css('display','block');
            }, 200);
        });
        $('.xiang .page4 .popup2').one(animationEnd, function() {
            setTimeout(() => {
                self.showHand();
                self.onClickClown();
            }, 200);
        });
    },
    pageFiveAnimation(animationEnd) {
        var self = this;
        $('.xiang .page5 .popup1').one(animationEnd, function() {
            setTimeout(() => {
                $('.xiang .page5 .popup2').css('display','block');
            }, 200);
        });
        $('.xiang .page5 .popup2').one(animationEnd, function() {
            setTimeout(() => {
                $('.xiang .page5 .popup3').css('display','block');
            }, 200);
        });
        $('.xiang .page5 .popup3').one(animationEnd, function() {
            setTimeout(() => {
                $('.xiang .page5 .popup4').css('display','block');
            }, 200);
        });
        $('.xiang .page5 .popup4').one(animationEnd, function() {
            setTimeout(() => {
                $('.xiang .page5 .popup5').css('display','block');
            }, 200);
        });
        $('.xiang .page5 .popup5').one(animationEnd, function() {
            setTimeout(() => {
                self.showHand();
                self.onClickClown();
            }, 200);
        });
    },
    pageSixAnimation(animationEnd) {
        var self = this;
        $('.xiang .page6 .continue').one(animationEnd, function() {
            setTimeout(() => {
                $('.xiang .page6 .go').css('display','block');
            }, 200);
        });
        $('.xiang .page6 .go').on('click', function() {
            $('.xiang').hide();
            $('.main').show();
        });
    },
    showHand() {
        $('.xiang .hand').css('display','block');
    },
    onClickClown() {
        $('.xiang .clown').one('click', function() {
            $('.xiang .hand').css('display','none');
            $('.xiang .page1').addClass('done');
            var pageNum = 1;
            for (var i = 1; i <= 6; ++i) {
                var classList = $('.xiang .page'+i)[0].classList;
                if (classList.contains('done')) {
                    pageNum = i+1;
                }
            }
            switch (pageNum)
            {
                case 2:
                {
                    $('.xiang .page2').addClass('done');

                    $('.xiang .page1 .popup1').removeClass('flash');
                    $('.xiang .page1 .popup2').removeClass('slideInRight');
                    $('.xiang .page1 .popup3').removeClass('slideInLeft');
                    $('.xiang .page1 .popup4').removeClass('slideInRight');

                    $('.xiang .page1 .popup1').addClass('bounceOutLeft');
                    $('.xiang .page1 .grid').addClass('animated bounceOutLeft');
                    setTimeout(() => {
                        $('.xiang .page2').show();
                        $('.xiang .page2 .popup1').css('display','block');
                        if (!$('.xiang .page2 .popup1')[0].classList.contains('flash'))
                            $('.xiang .page2 .popup1').addClass('flash');
                    }, 1000);
                    break;
                }
                case 3:
                {
                    $('.xiang .page3').addClass('done');

                    $('.xiang .page2 .popup1').removeClass('flash');
                   
                    $('.xiang .page2 .popup1').addClass('bounceOutLeft');
                    $('.xiang .page2 .grid').addClass('animated bounceOutLeft');
                    setTimeout(() => {
                        $('.xiang .page3').show();
                        $('.xiang .page3 .popup1').css('display','block');
                        if (!$('.xiang .page3 .popup1')[0].classList.contains('flash'))
                            $('.xiang .page3 .popup1').addClass('flash');
                    }, 1000);
                    break;
                }
                case 4:
                {
                    $('.xiang .page4').addClass('done');
                    $('.xiang .page3 .popup1').removeClass('flash');

                    $('.xiang .page3 .popup1').addClass('bounceOutLeft');
                    $('.xiang .page3 .grid').addClass('animated bounceOutLeft');
                    setTimeout(() => {
                        $('.xiang .page4').show();
                        $('.xiang .page4 .popup1').css('display','block');
                        if (!$('.xiang .page4 .popup1')[0].classList.contains('flash'))
                            $('.xiang .page4 .popup1').addClass('flash');
                    }, 1000);
                    break;
                }
                case 5:
                {
                    $('.xiang .page5').addClass('done');
                    $('.xiang .page4 .popup1').removeClass('flash');
                    $('.xiang .page4 .popup2').removeClass('slideInRight');
                    
                    $('.xiang .page4 .popup1').addClass('bounceOutLeft');
                    $('.xiang .page4 .popup2').addClass('bounceOutLeft');
                    setTimeout(() => {
                        $('.xiang .page5').show();
                        $('.xiang .page5 .popup1').css('display','block');
                        if (!$('.xiang .page5 .popup1')[0].classList.contains('flash'))
                            $('.xiang .page5 .popup1').addClass('flash');
                    }, 1000);
                    break;
                }
                case 6:
                {
                    $('.xiang .page6').addClass('done');
                    $('.xiang .page5 .popup1').removeClass('slideInRight');

                    $('.xiang .page5 .popup1').addClass('bounceOutLeft');
                    $('.xiang .grid').addClass('animated bounceOutLeft');
                    setTimeout(() => {
                        $('.xiang .page6').show();
                        $('.xiang .page6 .continue').css('display','block');
                        // if (!$('.xiang .page5 .popup1')[0].classList.contains('flash'))
                            // $('.xiang .page6 .continue').addClass('flash');
                    }, 1000);
                    break;
                }
            }
            //GOTO next page
            $('.popup1').removeClass('flash');
            $('.popup2').removeClass('flash');
            $('.popup3').removeClass('flash');
            $('.popup4').removeClass('flash');

        });
    }
}