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
    },
    pageOneAnimation: function(animationEnd) {
        var self = this;
        $('.huo .page1 .popup1').one(animationEnd, function() {
            $('.huo .page1 .pyramid').css('display','block');
            $('.huo .page1 .boldText').css('display','block');
        });
        $('.huo .page1 .boldText').one(animationEnd, function() {
            self.showHand();
            self.onClickAthlete();
        });
        
    },
    pageTwoAnimation: function(animationEnd) {
        var self = this;
        $('.huo .page1 .boldText .text5').one(animationEnd, function() {
            self.showHand();
            self.onClickAthlete();
        });
    },
    pageThreeAnimation: function(animationEnd) {
        var self = this;
        $('.huo .page3 .type1').one(animationEnd, function() {
            $('.huo .page3 .carousel').css('display','block');
            $('.huo .page3 .light').css('display','block');
        });
        $('.huo .page3 .carousel').one(animationEnd, function() {
            self.showHand();
            self.onClickAthlete();
        });
    },
    pageFourAnimation: function(animationEnd) {
        var self = this;
        $('.huo .page4 .continue').one(animationEnd, function() {
            $('.huo .page4 .go').css('display','block');
        });
        $('.huo .page4 .go').on('click', function() {
            $('.huo').hide();
            self.reset();
            $('.main').show();
            general.showTada(animationEnd);
        });
    },
    showHand: function() {
        $('.huo .hand').css('display','block');
    },
    onClickAthlete: function() {
        $('.huo .athlete').one('click', function() {
            general.playClickSound();
            $('.huo .athlete').removeClass('athleteUnclick');
            $('.huo .athlete').addClass('athleteClick');
            $('.huo .hand').css('display','none');
            $('.huo .page1').addClass('done');
            setTimeout(function() {
                var pageNum = 1;
                for (var i = 1; i <= 3; ++i) {
                    var classList = $('.huo .page'+i)[0].classList;
                    if (classList.contains('done')) {
                        pageNum = i+1;
                    }
                }
                switch (pageNum) 
                {
                    case 2:
                    {
                        $('.huo .page1 .boldText .text1').addClass('transformLeft');
                        $('.huo .page1 .boldText .text2').addClass('transformLeft');
                        $('.huo .page1 .boldText .text3').addClass('transformLeft');
                        $('.huo .page1 .boldText .text4').addClass('transformLeft');
                        $('.huo .page1 .boldText .text5').addClass('transformLeftLittle');
                        $('.huo .page2').addClass('done');
                        setTimeout(function() {
                            $('.huo .page2').show();
                            $('.huo .page2 .branchBox').css('display','block');
                        }, 0);
                        break;
                    }
                    case 3:
                    {
                        $('.huo .page1 .popup1').removeClass('flash');
                        $('.huo .page1 .pyramid').removeClass('fadeIn');
                        $('.huo .page1 .boldText').removeClass('fadeIn');
                        $('.huo .page2 .branchBox').removeClass('fadeIn slow');
                        $('.huo .page1 .popup1').addClass('bounceOutLeft');
                        $('.huo .page1 .pyramid').addClass('bounceOutLeft');
                        $('.huo .page1 .boldText').addClass('animated bounceOutLeft');
                        $('.huo .page2 .branchBox').addClass('animated bounceOutLeft');
                        $('.huo .page3').addClass('done');
                        setTimeout(function() {
                            $('.huo .page3').show();
                            $('.huo .header').css('display','none');
                            $('.huo .header2').css('display','block');
                            $('.huo .page3 .type1').css('display','block');
                        }, 1000);
                        break;
                    }
                    case 4:
                    {
                        $('.huo .page3 .type div').removeClass('fadeIn');
                        $('.huo .page3 .carousel').removeClass('zoomIn');
                        $('.huo .page3 .type div').addClass('bounceOutLeft');
                        $('.huo .page3 .carousel').addClass('bounceOutLeft');
                        $('.huo .page3 .light').removeClass('fadeIn');
                        $('.huo .page3 .light').addClass('fadeOut');
                        
                        $('.huo .page4').addClass('done');
                        setTimeout(function() {
                            $('.huo .page4').show();
                            $('.huo .page4').show();
                            $('.huo .page4 .continue').css('display','block');
                        }, 1000);
                        break;
                    }
                    default:
                        break;
                }
                $('.huo .athlete').removeClass('athleteClick');
                $('.huo .athlete').addClass('athleteUnclick');
            }, 1500);
        });
    },
    reset: function() {
        $('.huo .header').css('display','block');
        $('.huo .header2').css('display','none');
        // page1
        $('.huo .page1 .popup1').removeClass('bounceOutLeft');
        $('.huo .page1 .pyramid').removeClass('bounceOutLeft');
        $('.huo .page1 .boldText').removeClass('bounceOutLeft');
        $('.huo .page1 .popup1').addClass('flash');
        $('.huo .page1 .pyramid').addClass('fadeIn');
        $('.huo .page1 .boldText').addClass('fadeIn');
        $('.huo .page1 .popup1').css('display','none');
        $('.huo .page1 .pyramid').css('display','none');
        $('.huo .page1 .boldText').css('display','none');
        $('.huo .page1 .boldText .text1').removeClass('transformLeft');
        $('.huo .page1 .boldText .text2').removeClass('transformLeft');
        $('.huo .page1 .boldText .text3').removeClass('transformLeft');
        $('.huo .page1 .boldText .text4').removeClass('transformLeft');
        $('.huo .page1 .boldText .text5').removeClass('transformLeftLittle');

        // page2
        $('.huo .page2 .branchBox').removeClass('bounceOutLeft');
        $('.huo .page2 .branchBox').addClass('fadeIn slow');
        $('.huo .page2 .branchBox').css('display','none');

        // page3
        $('.huo .page3 .type div').removeClass('bounceOutLeft');
        $('.huo .page3 .light').removeClass('fadeOut bounceOutLeft');
        $('.huo .page3 .carousel').removeClass('bounceOutLeft');
        $('.huo .page3 .type div').addClass('fadeIn');
        $('.huo .page3 .light').addClass('fadeIn');
        $('.huo .page3 .carousel').addClass('zoomIn');
        $('.huo .page3 .type div').css('display','none');
        $('.huo .page3 .light').css('display','none');
        $('.huo .page3 .carousel').css('display','none');
        
        // page4
        $('.huo .page4 .continue').css('display','none');
        $('.huo .page4 .go').css('display','none');
        
        $('.huo span').removeClass('done');
        $('.huo span').css('display','none');
    }
}