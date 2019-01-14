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
        $('.huo .page1 .boldText .text5').one(animationEnd, function() {
            setTimeout(() => {
                self.showHand();
                self.onClickAthlete();
            }, 200);
        });
    },
    pageTwoAnimation(animationEnd) {
        var self = this;
        $('.shang .page2 .popup1').one(animationEnd, function() {
            setTimeout(() => {
                $('.shang .page2 .texts').css('display','block');
            }, 200);
        });
        $('.shang .page2 .texts').one(animationEnd, function() {
            setTimeout(() => {
                // TODO: extend branches
                // $('.shang .page2 .branches').css('display','block');
            }, 200);
        });
    },
    pageThreeAnimation(animationEnd) {
        var self = this;

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
                        $('.huo .page1 .branchBox').css('display','block');
                        break;
                    }
                    case 3:
                    {
                        $('.huo .page1 .popup1').removeClass('flash');
                        $('.huo .page1 .pyramid').removeClass('fadeInDown');
                        $('.huo .page1 .boldText').removeClass('fadeInDown');
                        $('.huo .page1 .branchBox').removeClass('fadeInDown');
                        $('.huo .page1 .popup1').addClass('bounceOutLeft');
                        $('.huo .page1 .pyramid').addClass('bounceOutLeft');
                        $('.huo .page1 .boldText').addClass('bounceOutLeft');
                        $('.huo .page1 .branchBox').addClass('bounceOutLeft');
                        $('.huo .page2 .popup1').css('display','block');
                        break;
                    }
                    case 4:
                    {
                        break;
                    }
                    default:
                        break;
                }
                $('.huo .athlete').removeClass('athleteClick');
                $('.huo .athlete').addClass('athleteUnclick');
            }, 1500);
        });
    }
}