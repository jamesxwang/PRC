var $ = require('jquery');
var general = require('./general.js');

module.exports = {
    init: function() {
        var self = this;

        self.initAnimation();
    },
    initAnimation: function() {
        var self = this;
        var animationEnd = general.initAnimationEnd();

        self.pageOneAnimation(animationEnd);
        self.pageTwoAnimation(animationEnd);
        self.pageThreeAnimation(animationEnd);
        self.pageFourAnimation(animationEnd);
        self.pageFiveAnimation(animationEnd);
        self.pageSixAnimation(animationEnd);
    },
    pageOneAnimation: function(animationEnd) {
        var self = this;
        $('.shang .page1 .popup1').one(animationEnd, function() {
            $('.shang .page1 .circle_1').css('display','block');
        });
        $('.shang .page1 .circle_1').one(animationEnd, function() {
            $('.shang .page1 .circle_2').css('display','block');
        });
        $('.shang .page1 .circle_2').one(animationEnd, function() {
            $('.shang .page1 .circle_3').css('display','block');
        });
        $('.shang .page1 .circle_3').one(animationEnd, function() {
            $('.shang .page1 .popup2').css('display','block');
        });
        $('.shang .page1 .popup2').one(animationEnd, function() {
            self.showHand();
            self.onClickCoins();
        });
    },
    pageTwoAnimation: function(animationEnd) {
        var self = this;
        $('.shang .page2 .popup1').one(animationEnd, function() {
            $('.shang .page2 .text').css('display','block');
        });
        $('.shang .page2 .text').one(animationEnd, function() {
            $('.shang .page2 .bar1').css('display','block');
        });
        $('.shang .page2 .bar1').one(animationEnd, function() {
            $('.shang .page2 .bar2').css('display','block');
        });
        $('.shang .page2 .bar2').one(animationEnd, function() {
            $('.shang .page2 .bar3').css('display','block');                
        });
        $('.shang .page2 .bar3').one(animationEnd, function() {
            $('.shang .page2 .bar4').css('display','block');
        });
        $('.shang .page2 .bar4').one(animationEnd, function() {
            $('.shang .page2 .bar5').css('display','block');
        });
        $('.shang .page2 .bar5').one(animationEnd, function() {
            $('.shang .page2 .arrow').css('display','block');
        });
        $('.shang .page2 .arrow').one(animationEnd, function() {
            setTimeout(function() {
                self.showHand();
                self.onClickCoins();
            }, 200);
        });
    },
    pageThreeAnimation: function(animationEnd) {
        var self = this;
        $('.shang .page3 .popup1').one(animationEnd, function() {
            $('.shang .page3 .question').css('display','block');
        });
        $('.shang .page3 .question').one(animationEnd, function() {
            $('.shang .page3 .bullet1').css('display','block');
        });
        $('.shang .page3 .bullet1').one(animationEnd, function() {
            $('.shang .page3 .bullet2').css('display','block');
        });
        $('.shang .page3 .bullet2').one(animationEnd, function() {
            $('.shang .page3 .bullet3').css('display','block');
        });
        $('.shang .page3 .bullet3').one(animationEnd, function() {
            $('.shang .page3 .no').css('display','block');
        });
        $('.shang .page3 .no').one(animationEnd, function() {
            setTimeout(function() {
                self.showHand();
                self.onClickCoins();
            }, 200);
        });
    },
    pageFourAnimation: function(animationEnd) {
        var self = this;
        $('.shang .page4 .text1').one(animationEnd, function() {
            $('.shang .page4 .text2').css('display','block');
        });
        $('.shang .page4 .text2').one(animationEnd, function() {
            $('.shang .page4 .chance').css('display','block');
        });
        $('.shang .page4 .chance').one(animationEnd, function() {
            self.showHand();
            self.onClickCoins();
        });
    },
    pageFiveAnimation: function(animationEnd) {
        var self = this;
        $('.shang .page5 .popup1').one(animationEnd, function() {
            $('.shang .page5 .pig').css('display','block');
        });
        $('.shang .page5 .pig').one(animationEnd, function() {
            self.showHand();
            self.onClickCoins();
        });
    },
    pageSixAnimation: function(animationEnd) {
        var self = this;
        $('.shang .page6 .continue').one(animationEnd, function() {
            $('.shang .page6 .go').css('display','block');
        });
        $('.shang .page6 .go').on('click', function() {
            $('.shang').hide();
            self.reset();
            $('.main').show();
            general.showTada(animationEnd);
        });
    },
    showHand: function() {
        $('.shang .hand').css('display','block');
    },
    onClickCoins: function() {
        $('.shang .girl').one('click', function() {
            general.playClickSound();
            $('.shang .girl').removeClass('girlUnclick');
            $('.shang .girl').addClass('girlClick');
            $('.shang .hand').css('display','none');
            $('.shang .page1').addClass('done');

            setTimeout(function() {
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
                        $('.shang .page1 .popup1').removeClass('flash');
                        $('.shang .page1 .popup2').removeClass('flash');

                        $('.shang .page1 .popup1').addClass('bounceOutLeft');
                        $('.shang .page1 .circleBox').addClass('animated bounceOutLeft');
                        $('.shang .page1 .popup2').addClass('bounceOutLeft');
                        
                        $('.shang .page2').addClass('done');
                        setTimeout(function() {
                            $('.shang .page2').show();
                            $('.shang .page2 .popup1').css('display','block');
                        }, 1000);
                        break;
                    }
                    case 3:
                    {
                        $('.shang .page2 .popup1').removeClass('flash');
                        $('.shang .page2 .text').removeClass('bounceIn');
                        $('.shang .page2 .arrow').removeClass('slideInLeft');

                        $('.shang .page2 .popup1').addClass('bounceOutLeft');
                        $('.shang .page2 .text').addClass('bounceOutLeft');
                        $('.shang .page2 .arrow').addClass('bounceOutLeft');
                        $('.shang .page2 .coinBar').addClass('animated bounceOutLeft');

                        $('.shang .page3').addClass('done');
                        setTimeout(function() {
                            $('.shang .page3').show();
                            $('.shang .page3 .popup1').css('display','block');
                        }, 1000);
                        break;
                    }
                    case 4:
                    {
                        $('.shang .page3 .question').removeClass('flash');
                        $('.shang .page3 .no').removeClass('flash');

                        $('.shang .page3 .question').addClass('bounceOutLeft');
                        $('.shang .page3 .grid').addClass('animated bounceOutLeft');
                        $('.shang .page3 .no').addClass('bounceOutLeft');

                        $('.shang .page4').addClass('done');
                        setTimeout(function() {
                            $('.shang .page4').show();
                            $('.shang .page4 .text1').css('display','block');
                        }, 1000);
                        break;
                    }
                    case 5:
                    {
                        $('.shang .page3 .popup1').removeClass('flash');
                        $('.shang .page4 .text1').removeClass('fadeIn');
                        $('.shang .page4 .text2').removeClass('fadeIn');
                        $('.shang .page4 .chance').removeClass('zoomIn');

                        $('.shang .page3 .popup1').addClass('bounceOutLeft');
                        $('.shang .page4 .text1').addClass('bounceOutLeft');
                        $('.shang .page4 .text2').addClass('bounceOutLeft');
                        $('.shang .page4 .chance').addClass('bounceOutLeft');

                        $('.shang .page5').addClass('done');
                        setTimeout(function() {
                            $('.shang .page5').show();
                            $('.shang .page5 .popup1').css('display','block');
                        }, 1000);
                        break;
                    }
                    case 6:
                    {
                        $('.shang .page6').addClass('done');
                        $('.shang .page5 .pig').removeClass('fadeIn');

                            $('.shang .page5 .popup1').addClass('bounceOutLeft');
                            $('.shang .page5 .pig').addClass('bounceOutLeft');

                        setTimeout(function() {
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
    reset: function() {
        // page1
        $('.shang .page1 .popup1').removeClass('bounceOutLeft');
        $('.shang .page1 .circleBox').removeClass('animated bounceOutLeft');
        $('.shang .page1 .popup2').removeClass('bounceOutLeft');
        $('.shang .page1 .popup1').addClass('flash');
        $('.shang .page1 .popup2').addClass('flash');
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
        $('.shang .page2 .popup1').addClass('flash');
        $('.shang .page2 .text').addClass('bounceIn');
        $('.shang .page2 .arrow').addClass('slideInLeft');
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
        $('.shang .page3 .question').removeClass('bounceOutLeft');
        $('.shang .page3 .grid').removeClass('animated bounceOutLeft');
        $('.shang .page3 .no').removeClass('bounceOutLeft');
        $('.shang .page3 .popup1').addClass('flash');
        $('.shang .page3 .question').addClass('flash');
        $('.shang .page3 .no').addClass('flash');
        $('.shang .page3 .popup1').css('display','none');
        $('.shang .page3 .question').css('display','none');
        $('.shang .page3 .bullet1').css('display','none');
        $('.shang .page3 .bullet2').css('display','none');
        $('.shang .page3 .bullet3').css('display','none');
        $('.shang .page3 .no').css('display','none');

        // page4
        $('.shang .page4 .text1').removeClass('bounceOutLeft');
        $('.shang .page4 .text2').removeClass('bounceOutLeft');
        $('.shang .page4 .chance').removeClass('bounceOutLeft');
        $('.shang .page4 .text1').addClass('fadeIn');
        $('.shang .page4 .text2').addClass('fadeIn');
        $('.shang .page4 .chance').addClass('zoomIn');
        $('.shang .page4 .text1').css('display','none');
        $('.shang .page4 .text2').css('display','none');
        $('.shang .page4 .chance').css('display','none');

        // page5
        $('.shang .page5 .popup1').removeClass('bounceOutLeft');
        $('.shang .page5 .pig').removeClass('bounceOutLeft');
        $('.shang .page5 .popup1').addClass('flash');
        $('.shang .page5 .pig').addClass('fadeIn');
        $('.shang .page5 .popup1').css('display','none');
        $('.shang .page5 .pig').css('display','none');

        // page6
        $('.shang .page6 .continue').css('display','none');
        $('.shang .page6 .go').css('display','none');

        $('.shang span').removeClass('done');
        $('.shang span').css('display','none');

    }
}