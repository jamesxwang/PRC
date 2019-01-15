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
    },
    pageOneAnimation(animationEnd) {
        var self = this;
        $('.xue .page1 .text1').one(animationEnd, function() {
            setTimeout(() => {
                $('.xue .page1 .pie').css('display','block');
            }, 200);
        });
        $('.xue .page1 .pie').one(animationEnd, function() {
            setTimeout(() => {
                $('.xue .page1 .grid .blank1').css('display','block');
                $('.xue .page1 .grid .blank2').css('display','block');
                $('.xue .page1 .grid .blank3').css('display','block');
                $('.xue .page1 .description1').css('display','block');
            }, 200);
        });
        $('.xue .page1 .description1').one(animationEnd, function() {
            setTimeout(() => {
                $('.xue .page1 .grid .blank1').css('display','none');
                $('.xue .page1 .grid .blank2').css('display','block');
                $('.xue .page1 .grid .blank3').css('display','block');
                $('.xue .page1 .description2').css('display','block');
            }, 200);
        });
        $('.xue .page1 .description2').one(animationEnd, function() {
            setTimeout(() => {
                $('.xue .page1 .grid .blank1').css('display','block');
                $('.xue .page1 .grid .blank2').css('display','none');
                $('.xue .page1 .grid .blank3').css('display','none');
                $('.xue .page1 .description3').css('display','block');
            }, 200);
        });
        $('.xue .page1 .description3').one(animationEnd, function() {
            setTimeout(() => {
                self.showHand();
                self.onClickTeacher();
            }, 200);
        });
    },
    pageTwoAnimation(animationEnd) {
        var self = this;
        $('.xue .page2 .text1').one(animationEnd, function() {
            setTimeout(() => {
                $('.xue .page2 .content1').css('display','block');
            }, 200);
        });
        $('.xue .page2 .content1').one(animationEnd, function() {
            setTimeout(() => {
                $('.xue .page2 .content2').css('display','block');
            }, 200);
        });
        $('.xue .page2 .content2').one(animationEnd, function() {
            setTimeout(() => {
                $('.xue .page2 .content4').css('display','block');
            }, 200);
        });
        $('.xue .page2 .content4').one(animationEnd, function() {
            setTimeout(() => {
                $('.xue .page2 .content3').css('display','block');
            }, 200);
        });
        $('.xue .page2 .content3').one(animationEnd, function() {
            setTimeout(() => {
                $('.xue .page2 .text2').css('display','block');
            }, 200);
        });
        $('.xue .page2 .text2').one(animationEnd, function() {
            setTimeout(() => {
                self.showHand();
                self.onClickTeacher();
            }, 200);
        });
    },
    pageThreeAnimation(animationEnd) {
        var self = this;
        $('.xue .page3 .text1').one(animationEnd, function() {
            setTimeout(() => {
                $('.xue .page3 .question').css('display','block');
            }, 200);
        });
        $('.xue .page3 .question').one(animationEnd, function() {
            setTimeout(() => {
                $('.xue .page3 .bullet1').css('display','block');
            }, 200);
        });
        $('.xue .page3 .bullet1').one(animationEnd, function() {
            setTimeout(() => {
                $('.xue .page3 .bullet2').css('display','block');
            }, 200);
        });
        $('.xue .page3 .bullet2').one(animationEnd, function() {
            setTimeout(() => {
                $('.xue .page3 .bullet3').css('display','block');
            }, 200);
        });
        $('.xue .page3 .bullet3').one(animationEnd, function() {
            setTimeout(() => {
                $('.xue .page3 .no').css('display','block');
            }, 200);
        });
        $('.xue .page3 .no').one(animationEnd, function() {
            setTimeout(() => {
                self.showHand();
                self.onClickTeacher();
            }, 200);
        });
    },
    pageFourAnimation(animationEnd) {
        var self = this;
        $('.xue .page4 .content1 .title').one(animationEnd, function() {
            setTimeout(() => {
                $('.xue .page4 .content1 .bullet1').css('display','block');
            }, 200);
        });
        $('.xue .page4 .content1 .bullet1').one(animationEnd, function() {
            setTimeout(() => {
                $('.xue .page4 .content1 .bullet2').css('display','block');
            }, 200);
        });
        $('.xue .page4 .content1 .bullet2').one(animationEnd, function() {
            setTimeout(() => {
                $('.xue .page4 .content2 .title').css('display','block');
            }, 200);
        });
        $('.xue .page4 .content2 .title').one(animationEnd, function() {
            setTimeout(() => {
                $('.xue .page4 .content2 .bullet1').css('display','block');
            }, 200);
        });
        $('.xue .page4 .content2 .bullet1').one(animationEnd, function() {
            setTimeout(() => {
                $('.xue .page4 .content2 .bullet2').css('display','block');
            }, 200);
        });
        $('.xue .page4 .content2 .bullet2').one(animationEnd, function() {
            setTimeout(() => {
                $('.xue .page4 .content2 .bullet3').css('display','block');
            }, 200);
        });
        $('.xue .page4 .content2 .bullet3').one(animationEnd, function() {
            setTimeout(() => {
                $('.xue .page4 .content2 .bullet4').css('display','block');
            }, 200);
        });
        $('.xue .page4 .content2 .bullet4').one(animationEnd, function() {
            setTimeout(() => {
                $('.xue .page4 .text').css('display','block');
            }, 200);
        });
        $('.xue .page4 .text').one(animationEnd, function() {
            setTimeout(() => {
                self.showHand();
                self.onClickTeacher();
            }, 200);
        });
    },
    pageFiveAnimation(animationEnd) {
        var self = this;
        $('.xue .page5 .continue').one(animationEnd, function() {
            setTimeout(() => {
                $('.xue .page5 .go').css('display','block');
            }, 200);
        });
        $('.xue .page5 .go').on('click', function() {
            $('.xue').hide();
            self.reset();
            $('.main').show();
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
        });
    },
    showHand() {
        $('.xue .hand').css('display','block');
    },
    onClickTeacher() {
        $('.xue .teacher').one('click', function() {
            var click_sound = document.getElementById("click_sound");
            click_sound.play();
            $('.xue .teacher').removeClass('teacherUnclick');
            $('.xue .teacher').addClass('teacherClick');
            $('.xue .hand').css('display','none');
            $('.xue .page1').addClass('done');
            setTimeout(() => {
                
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

                        $('.xue .page1 .text1').addClass('fadeOut');
                        $('.xue .page1 .pie').addClass('fadeOut');
                        $('.xue .page1 .grid').addClass('animated fadeOut');
                        setTimeout(() => {
                            $('.xue .page2').show();
                            $('.xue .page2 .text1').css('display','block');
                        }, 1000);
                        break;
                    }
                    case 3:
                    {
                        $('.xue .page3').addClass('done');

                        $('.xue .page2 .text1').removeClass('flash');
                        $('.xue .page2 .text2').removeClass('fadeIn');

                        $('.xue .page2 .text1').addClass('fadeOut');
                        $('.xue .page2 .content_wrapper').addClass('animated fadeOut');
                        $('.xue .page2 .text2').addClass('fadeOut');
                        setTimeout(() => {
                            $('.xue .page3').show();
                            $('.xue .page3 .text1').css('display','block');
                        }, 1000);
                        break;
                    }
                    case 4:
                    {
                        $('.xue .page4').addClass('done');

                        $('.xue .page3 .question').removeClass('flash');
                        $('.xue .page3 .no').removeClass('flash');

                        $('.xue .page3 .question').addClass('fadeOut');
                        $('.xue .page3 .grid').addClass('animated fadeOut');
                        $('.xue .page3 .no').addClass('fadeOut');
                        setTimeout(() => {
                            $('.xue .page4').show();
                            $('.xue .page4 .content1 .title').css('display','block');
                        }, 1000);
                        break;
                    }
                    case 5:
                    {
                        $('.xue .page5').addClass('done'); 
                        $('.xue .page3 .text1').removeClass('flash');

                        $('.xue .page3 .text1').addClass('fadeOut');
                        $('.xue .page4 .grid').addClass('animated fadeOut');

                        setTimeout(() => {
                            $('.xue .page5').show();
                            $('.xue .page5 .continue').css('display','block');
                        }, 1000);
                        break;
                    }
                    default:
                        break;
                }
                $('.xue .teacher').removeClass('teacherClick');
                $('.xue .teacher').addClass('teacherUnclick');
            }, 1000);
        });
    },
    removeClass(pageNum, el, clas) {
        $('.xue .page'+pageNum+' .'+el).removeClass(clas);
    },
    hideElement(pageNum, list) {
        for (el of list) {
            $('.xue .page' + pageNum + ' .' + el).css('display','none');
        }
    },
    reset() {
        // page1
        this.removeClass(1,'text1','fadeOut');
        // $('.xue .page1 .text1').removeClass('fadeOut');
        $('.xue .page1 .pie').removeClass('fadeOut');
        $('.xue .page1 .grid').removeClass('animated fadeOut');
        $('.xue .page1 .text1').addClass('flash');
        $('.xue .page1 .pie').addClass('flash');
        this.hideElement(1,['pie','grid div','text1']);
        // page2
        $('.xue .page2 .text1').removeClass('fadeOut');
        $('.xue .page2 .text2').removeClass('fadeOut');
        $('.xue .page2 .content_wrapper').removeClass('animated fadeOut');
        $('.xue .page2 .text1').addClass('flash');
        $('.xue .page2 .text2').addClass('fadeIn');
        this.hideElement(2,['text1','content_wrapper div','text2']);

        // page3
        $('.xue .page3 .text1').removeClass('fadeOut');
        $('.xue .page3 .question').removeClass('fadeOut');
        $('.xue .page3 .grid').removeClass('animated fadeOut');
        $('.xue .page3 .no').removeClass('fadeOut');
        $('.xue .page3 .text1').addClass('flash');
        $('.xue .page3 .question').addClass('flash');
        $('.xue .page3 .no').addClass('flash');
        this.hideElement(3,['text1','question','grid div','no']);

        // page4
        $('.xue .page4 .grid').removeClass('animated fadeOut');
        this.hideElement(4,['grid .content1 div','grid .content2 div','text']);

        // page5
        this.hideElement(5,['continue','go']);

        $('.xue span').removeClass('done');
        $('.xue span').css('display','none');
    }
}