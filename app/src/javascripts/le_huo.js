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
    },
    pageOneAnimation(animationEnd) {
        var self = this;
        $('.huo .page1 .popup1').one(animationEnd, function() {
            setTimeout(() => {
                $('.huo .page1 .pyramid').css('display','block');
            }, 200);
        });
        $('.huo .page1 .pyramid').one(animationEnd, function() {
            setTimeout(() => {
                $('.huo .page1 .boldText').css('display','block');
            }, 200);
        });
        $('.huo .page1 .boldText').one(animationEnd, function() {
            setTimeout(() => {
                self.showHand();
                self.onClickAthlete();
            }, 200);
        });
        
    },
    pageTwoAnimation(animationEnd) {
        var self = this;
        $('.huo .page1 .boldText .text5').one(animationEnd, function() {
            setTimeout(() => {
                self.showHand();
                self.onClickAthlete();
            }, 200);
        });
    },
    pageThreeAnimation(animationEnd) {
        var self = this;
        $('.huo .page3 .popup1').one(animationEnd, function() {
            setTimeout(() => {
                $('.huo .page3 .carousel').css('display','block');
            }, 200);
        });
        $('.huo .page3 .carousel').one(animationEnd, function() {
            setTimeout(() => {
                self.showHand();
                self.onClickAthlete();
            }, 200);
        });
    },
    pageFourAnimation(animationEnd) {
        var self = this;
        $('.huo .page4 .continue').one(animationEnd, function() {
            setTimeout(() => {
                $('.huo .page4 .go').css('display','block');
            }, 200);
        });
        $('.huo .page4 .go').on('click', function() {
            $('.huo').hide();
            self.reset();
            $('.main').show();
        });
    },
    showHand() {
        $('.huo .hand').css('display','block');
    },
    onClickAthlete() {
        $('.huo .athlete').one('click', function() {
            var click_sound = document.getElementById("click_sound");
            click_sound.play();
            $('.huo .athlete').removeClass('athleteUnclick');
            $('.huo .athlete').addClass('athleteClick');
            $('.huo .hand').css('display','none');
            $('.huo .page1').addClass('done');
            setTimeout(() => {
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
                        setTimeout(() => {
                            $('.huo .page2').show();
                            $('.huo .page2 .branchBox').css('display','block');
                        }, 0);
                        break;
                    }
                    case 3:
                    {
                        $('.huo .page1 .popup1').removeClass('flash');
                        $('.huo .page1 .pyramid').removeClass('fadeInDown');
                        $('.huo .page1 .boldText').removeClass('fadeIn');
                        $('.huo .page2 .branchBox').removeClass('fadeInRight');
                        $('.huo .page1 .popup1').addClass('bounceOutLeft');
                        $('.huo .page1 .pyramid').addClass('bounceOutLeft');
                        $('.huo .page1 .boldText').addClass('animated bounceOutLeft');
                        $('.huo .page2 .branchBox').addClass('animated bounceOutLeft');
                        $('.huo .page3').addClass('done');
                        setTimeout(() => {
                            $('.huo .page3').show();
                            $('.huo .page3 .popup1').css('display','block');
                        }, 1000);
                        break;
                    }
                    case 4:
                    {
                        $('.huo .page3 .popup1').removeClass('flash');
                        $('.huo .page3 .carousel').removeClass('zoomIn');
                        $('.huo .page3 .popup1').addClass('bounceOutLeft');
                        $('.huo .page3 .carousel').addClass('bounceOutLeft');
                        
                        $('.huo .page4').addClass('done');
                        setTimeout(() => {
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
    reset() {

    }
}