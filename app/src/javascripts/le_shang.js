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
        $('.shang .page1 .popup1').one(animationEnd, function() {
            setTimeout(() => {
                $('.shang .page1 .circle_1').css('display','block');
            }, 200);
        });
        $('.shang .page1 .circle_1').one(animationEnd, function() {
            setTimeout(() => {
                $('.shang .page1 .circle_2').css('display','block');
            }, 200);
        });
        $('.shang .page1 .circle_2').one(animationEnd, function() {
            setTimeout(() => {
                $('.shang .page1 .circle_3').css('display','block');
            }, 200);
        });
        $('.shang .page1 .circle_3').one(animationEnd, function() {
            setTimeout(() => {
                $('.shang .page1 .popup2').css('display','block');
            }, 200);
        });
        $('.shang .page1 .popup2').one(animationEnd, function() {
            setTimeout(() => {
                self.showHand();
                self.onClickCoins();
            }, 200);
        });
    },
    pageTwoAnimation(animationEnd) {
        var self = this;
        $('.shang .page2 .popup1').one(animationEnd, function() {
            setTimeout(() => {
                $('.shang .page2 .text').css('display','block');
            }, 200);
        });
        $('.shang .page2 .text').one(animationEnd, function() {
            setTimeout(() => {
                $('.shang .page2 .bar1').css('display','block');
            }, 200);
        });
        $('.shang .page2 .bar1').one(animationEnd, function() {
            setTimeout(() => {
                $('.shang .page2 .bar2').css('display','block');
            }, 100);
        });
        $('.shang .page2 .bar2').one(animationEnd, function() {
            setTimeout(() => {
                $('.shang .page2 .bar3').css('display','block');                
            }, 100);
        });
        $('.shang .page2 .bar3').one(animationEnd, function() {
            setTimeout(() => {
                $('.shang .page2 .bar4').css('display','block');
            }, 100);
        });
        $('.shang .page2 .bar4').one(animationEnd, function() {
            setTimeout(() => {
                $('.shang .page2 .bar5').css('display','block');
            }, 100);
        });
        $('.shang .page2 .bar5').one(animationEnd, function() {
            setTimeout(() => {
                $('.shang .page2 .arrow').css('display','block');
            }, 200);
        });
        $('.shang .page2 .arrow').one(animationEnd, function() {
            setTimeout(() => {
                self.showHand();
                self.onClickCoins();
            }, 200);
        });
    },
    pageThreeAnimation(animationEnd) {
        var self = this;
        $('.shang .page3 .popup1').one(animationEnd, function() {
            setTimeout(() => {
                $('.shang .page3 .text1').addClass('fadeInDown');
                $('.shang .page3 .text2').addClass('fadeInDown');

                $('.shang .page3 .text1').css('display','block');
                $('.shang .page3 .text2').css('display','block');

            }, 200);
        });
        $('.shang .page3 .text2').one(animationEnd, function() {
            setTimeout(() => {
                $('.shang .page3 .popup2').css('display','block');
            }, 200);
        });
        $('.shang .page3 .popup2').one(animationEnd, function() {
            setTimeout(() => {
                $('.shang .page3 .popup3').css('display','block');
            }, 200);
        });
        $('.shang .page3 .popup3').one(animationEnd, function() {
            setTimeout(() => {
                $('.shang .page3 .popup4').css('display','block');
            }, 200);
        });
        $('.shang .page3 .popup4').one(animationEnd, function() {
            setTimeout(() => {
                $('.shang .page3 .text3').css('display','block');
            }, 200);
        });
        $('.shang .page3 .text3').one(animationEnd, function() {
            setTimeout(() => {
                self.showHand();
                self.onClickCoins();
            }, 200);
        });
    },
    pageFourAnimation(animationEnd) {
        var self = this;
        $('.shang .page4 .popup1').one(animationEnd, function() {
            setTimeout(() => {
                $('.shang .page4 .pig').css('display','block');
            }, 200);
        });
        $('.shang .page4 .pig').one(animationEnd, function() {
            setTimeout(() => {
                self.showHand();
                self.onClickCoins();
            }, 200);
        });
    },
    pageFiveAnimation(animationEnd) {
        var self = this;
        $('.shang .page5 .content').one(animationEnd, function() {
            setTimeout(() => {
                self.showHand();
                self.onClickCoins();
            }, 200);
        });
    },
    pageSixAnimation(animationEnd) {
        var self = this;
        $('.shang .page6 .continue').one(animationEnd, function() {
            setTimeout(() => {
                $('.shang .page6 .go').css('display','block');
            }, 200);
        });
        $('.shang .page6 .go').on('click', function() {
            $('.shang').hide();
            self.reset();
            $('.main').show();
        });
    },
    showHand() {
        $('.shang .hand').css('display','block');
    },
    onClickCoins() {
        $('.shang .girl').one('click', function() {
            var click_sound = document.getElementById("click_sound");
            click_sound.play();
            $('.shang .girl').removeClass('girlUnclick');
            $('.shang .girl').addClass('girlClick');
            $('.shang .hand').css('display','none');
            $('.shang .page1').addClass('done');

            setTimeout(() => {
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
                        $('.shang .page1 .popup1').removeClass('fadeIn');
                        $('.shang .page1 .popup2').removeClass('fadeIn');

                        $('.shang .page1 .popup1').addClass('bounceOutLeft');
                        $('.shang .page1 .circleBox').addClass('animated bounceOutLeft');
                        $('.shang .page1 .popup2').addClass('bounceOutLeft');
                        
                        $('.shang .page2').addClass('done');
                        setTimeout(() => {
                            $('.shang .page2').show();
                            $('.shang .page2 .branchBox').css('display','block');
                        }, 1000);
                        break;
                    }
                    case 3:
                    {
                        $('.shang .page2 .popup1').removeClass('fadeIn');
                        $('.shang .page2 .text').removeClass('bounceIn');
                        $('.shang .page2 .arrow').removeClass('bounceIn');

                        $('.shang .page2 .popup1').addClass('bounceOutLeft');
                        $('.shang .page2 .text').addClass('bounceOutLeft');
                        $('.shang .page2 .arrow').addClass('bounceOutLeft');
                        $('.shang .page2 .coinBar').addClass('animated bounceOutLeft');

                        $('.shang .page3').addClass('done');
                        setTimeout(() => {
                            $('.shang .page3').show();
                            $('.shang .page3 .popup1').css('display','block');
                        }, 1000);
                        break;
                    }
                    case 4:
                    {
                        $('.shang .page3 .popup1').removeClass('fadeIn');
                        $('.shang .page3 .text1').removeClass('fadeInDown faster');
                        $('.shang .page3 .text2').removeClass('fadeInDown faster');
                        $('.shang .page3 .popup2').removeClass('fadeInRightBig');
                        $('.shang .page3 .popup3').removeClass('fadeInLeftBig');
                        $('.shang .page3 .popup4').removeClass('fadeInRightBig');
                        $('.shang .page3 .text3').removeClass('fadeIn');

                        $('.shang .page3 .popup1').addClass('bounceOutLeft');
                        $('.shang .page3 .text1').addClass('bounceOutLeft');
                        $('.shang .page3 .text2').addClass('bounceOutLeft');
                        $('.shang .page3 .popup2').addClass('bounceOutLeft');
                        $('.shang .page3 .popup3').addClass('bounceOutLeft');
                        $('.shang .page3 .popup4').addClass('bounceOutLeft');
                        $('.shang .page3 .text3').addClass('bounceOutLeft');

                        $('.shang .page4').addClass('done');
                        setTimeout(() => {
                            $('.shang .page4').show();
                            $('.shang .page4 .continue').css('display','block');
                        }, 1000);
                        break;
                    }
                    case 5:
                    {
                        $('.shang .page5').addClass('done');   
                        $('.shang .page4 .pig').removeClass('fadeIn');

                        $('.shang .page4 .pig').addClass('bounceOutLeft');
                        setTimeout(() => {
                            $('.shang .page5').show();
                            $('.shang .page5 .content').css('display','block');
                        }, 1000);
                        break;
                    }
                    case 6:
                    {
                        $('.shang .page6').addClass('done');
                        $('.shang .page4 .popup1').removeClass('fadeIn');
                        $('.shang .page5 .content').removeClass('fadeIn');

                        $('.shang .page4 .popup1').addClass('bounceOutLeft');
                        $('.shang .page5 .content').addClass('bounceOutLeft');
                        setTimeout(() => {
                            $('.shang .page6').show();
                            $('.shang .page6 .continue').css('display','block');
                        }, 1000);
                        break;
                    }
                    default:
                        break;
                }
                $('.shang .girl').removeClass('girlClick');
                $('.shang .girl').addClass('girlUnclick');
            }, 1500);
        });
    },
    reset() {
        // page1
        $('.shang .page1 .popup1').removeClass('bounceOutLeft');
        $('.shang .page1 .circleBox').removeClass('animated bounceOutLeft');
        $('.shang .page1 .popup2').removeClass('bounceOutLeft');
        $('.shang .page1 .popup1').addClass('fadeIn');
        $('.shang .page1 .popup2').addClass('fadeIn');
        $('.shang .page1 .circle_1').css('display','none');
        $('.shang .page1 .circle_2').css('display','none');
        $('.shang .page1 .circle_3').css('display','none');
        $('.shang .page1 .popup1').css('display','none');
        $('.shang .page1 .popup2').css('display','none');

        // page2
        $('.shang .page2 .popup1').removeClass('bounceOutLeft');
        $('.shang .page2 .text').removeClass('bounceOutLeft');
        $('.shang .page2 .arrow').removeClass('bounceOutLeft');
        $('.shang .page2 .coinBar').removeClass('animated bounceOutLeft');
        $('.shang .page2 .popup1').addClass('fadeIn');
        $('.shang .page2 .text').addClass('bounceIn');
        $('.shang .page2 .arrow').addClass('bounceIn');
        $('.shang .page2 .popup1').css('display','none');
        $('.shang .page2 .text').css('display','none');
        $('.shang .page2 .arrow').css('display','none');
        $('.shang .page2 .bar1').css('display','none');
        $('.shang .page2 .bar2').css('display','none');
        $('.shang .page2 .bar3').css('display','none');
        $('.shang .page2 .bar4').css('display','none');
        $('.shang .page2 .bar5').css('display','none');

        // page3
        $('.shang .page3 .popup1').removeClass('bounceOutLeft');
        $('.shang .page3 .text1').removeClass('bounceOutLeft');
        $('.shang .page3 .text2').removeClass('bounceOutLeft');
        $('.shang .page3 .popup2').removeClass('bounceOutLeft');
        $('.shang .page3 .popup3').removeClass('bounceOutLeft');
        $('.shang .page3 .popup4').removeClass('bounceOutLeft');
        $('.shang .page3 .text3').removeClass('bounceOutLeft');
        $('.shang .page3 .popup1').addClass('fadeIn');
        $('.shang .page3 .text1').addClass('fadeInDown faster');
        $('.shang .page3 .text2').addClass('fadeInDown faster');
        $('.shang .page3 .popup2').addClass('fadeInRightBig');
        $('.shang .page3 .popup3').addClass('fadeInLeftBig');
        $('.shang .page3 .popup4').addClass('fadeInRightBig');
        $('.shang .page3 .text3').addClass('fadeIn');
        $('.shang .page3 .popup1').css('display','none');
        $('.shang .page3 .text1').css('display','none');
        $('.shang .page3 .text2').css('display','none');
        $('.shang .page3 .popup2').css('display','none');
        $('.shang .page3 .popup3').css('display','none');
        $('.shang .page3 .popup4').css('display','none');
        $('.shang .page3 .text3').css('display','none');

        // page4
        $('.shang .page4 .popup1').removeClass('bounceOutLeft');
        $('.shang .page4 .pig').removeClass('bounceOutLeft');
        $('.shang .page4 .popup1').addClass('fadeIn');
        $('.shang .page4 .pig').addClass('fadeIn');
        $('.shang .page4 .popup1').css('display','none');
        $('.shang .page4 .pig').css('display','none');

        // page5
        $('.shang .page5 .content').removeClass('bounceOutLeft');
        $('.shang .page5 .content').addClass('fadeIn');
        $('.shang .page5 .content').css('display','none');

        // page6
        $('.shang .page5 .continue').css('display','none');
        $('.shang .page5 .go').css('display','none');

        $('.shang span').removeClass('done');
        $('.shang span').css('display','none');

    }
}