var $ = require('jquery');
var general = require('./general.js');

module.exports = {
    init: function() {
        var self = this;

        self.initAnimation();
    },
    initAnimation() {
        var self = this;
        var animationEnd = general.initAnimationEnd();

        self.pageOneAnimation(animationEnd);
        self.pageTwoAnimation(animationEnd);
        self.pageThreeAnimation(animationEnd);
        self.pageFourAnimation(animationEnd);
        self.pageFiveAnimation(animationEnd);
    },
    pageOneAnimation(animationEnd) {
        var self = this;
        $('.xue .page1 .text1').one(animationEnd, function() {
            $('.xue .page1 .pie').css('display','block');
        });
        $('.xue .page1 .pie').one(animationEnd, function() {
            $('.xue .page1 .grid .blank1').css('display','block');
            $('.xue .page1 .grid .blank2').css('display','block');
            $('.xue .page1 .grid .blank3').css('display','block');
            $('.xue .page1 .description1').css('display','block');
        });
        $('.xue .page1 .description1').one(animationEnd, function() {
            $('.xue .page1 .grid .blank1').css('display','none');
            $('.xue .page1 .grid .blank2').css('display','block');
            $('.xue .page1 .grid .blank3').css('display','block');
            $('.xue .page1 .description2').css('display','block');
        });
        $('.xue .page1 .description2').one(animationEnd, function() {
            $('.xue .page1 .grid .blank1').css('display','block');
            $('.xue .page1 .grid .blank2').css('display','none');
            $('.xue .page1 .grid .blank3').css('display','none');
            $('.xue .page1 .description3').css('display','block');
        });
        $('.xue .page1 .description3').one(animationEnd, function() {
            self.showHand();
            self.onClickTeacher();
        });
    },
    pageTwoAnimation(animationEnd) {
        var self = this;
        $('.xue .page2 .text1').one(animationEnd, function() {
            $('.xue .page2 .content1').css('display','block');
        });
        $('.xue .page2 .content1').one(animationEnd, function() {
            $('.xue .page2 .content2').css('display','block');
        });
        $('.xue .page2 .content2').one(animationEnd, function() {
            $('.xue .page2 .content4').css('display','block');
        });
        $('.xue .page2 .content4').one(animationEnd, function() {
            $('.xue .page2 .content3').css('display','block');
        });
        $('.xue .page2 .content3').one(animationEnd, function() {
            $('.xue .page2 .text2').css('display','block');
        });
        $('.xue .page2 .text2').one(animationEnd, function() {
            self.showHand();
            self.onClickTeacher();
        });
    },
    pageThreeAnimation(animationEnd) {
        var self = this;
        $('.xue .page3 .text1').one(animationEnd, function() {
            $('.xue .page3 .text2').css('display','block');
        });
        $('.xue .page3 .text2').one(animationEnd, function() {
            $('.xue .page3 .coordinate').css('display','block');
        });
        $('.xue .page3 .coordinate').one(animationEnd, function() {
            $('.xue .page3 .coordinateScrew').css('display','block');
        });
        $('.xue .page3 .coordinateScrew').one(animationEnd, function() {
            $('.xue .page3 .coordinateScrewText').css('display','block');
        });
        $('.xue .page3 .coordinateScrewText').one(animationEnd, function() {
            self.showHand();
            self.onClickTeacher();
        });
    },
    pageFourAnimation(animationEnd) {
        var self = this;
        $('.xue .page4 .text1').one(animationEnd, function() {
            $('.xue .page4 .phone1').css('display','block');
        });
        $('.xue .page4 .phone1').one(animationEnd, function() {
            $('.xue .page4 .phone2').css('display','block');
        });
        $('.xue .page4 .phone2').one(animationEnd, function() {
            self.showHand();
            self.onClickTeacher();
        });
    },
    pageFiveAnimation(animationEnd) {
        var self = this;
        $('.xue .page5 .continue').one(animationEnd, function() {
            $('.xue .page5 .go').css('display','block');
        });
        $('.xue .page5 .go').on('click', function() {
            $('.xue').hide();
            self.reset();
            $('.main').show();
            general.showTada(animationEnd);
        });
    },
    showHand() {
        $('.xue .hand').css('display','block');
    },
    onClickTeacher() {
        $('.xue .teacher').one('click', function() {
            general.playClickSound();
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

                        $('.xue .page3 .text1').removeClass('flash');
                        $('.xue .page3 .text2').removeClass('fadeIn');
                        $('.xue .page3 .coordinate').removeClass('fadeIn');
                        $('.xue .page3 .coordinateScrew').removeClass('fadeIn');
                        $('.xue .page3 .coordinateScrewText').removeClass('fadeIn');

                        $('.xue .page3 .text1').addClass('fadeOut');
                        $('.xue .page3 .text2').addClass('fadeOut');
                        $('.xue .page3 .coordinate').addClass('fadeOut');
                        $('.xue .page3 .coordinateScrew').addClass('fadeOut');
                        $('.xue .page3 .coordinateScrewText').addClass('fadeOut');
                        setTimeout(() => {
                            $('.xue .page4').show();
                            $('.xue .page4 .text1').css('display','block');
                        }, 1000);
                        break;
                    }
                    case 5:
                    {
                        $('.xue .page5').addClass('done'); 
                        $('.xue .page4 .text1').removeClass('flash');
                        $('.xue .page4 .phone1').removeClass('fadeInDown');
                        $('.xue .page4 .phone2').removeClass('fadeInDown');

                        $('.xue .page4 .text1').addClass('fadeOut');
                        $('.xue .page4 .phone1').addClass('fadeOut');
                        $('.xue .page4 .phone2').addClass('fadeOut');
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
        $('.xue .page3 .text2').removeClass('fadeOut');
        $('.xue .page3 .coordinate').removeClass('fadeOut');
        $('.xue .page3 .coordinateScrew').removeClass('fadeOut');
        $('.xue .page3 .coordinateScrewText').removeClass('fadeOut');
        $('.xue .page3 .text1').addClass('flash');
        $('.xue .page3 .text2').addClass('fadeIn');
        $('.xue .page3 .coordinate').addClass('fadeIn');
        $('.xue .page3 .coordinateScrew').addClass('fadeIn');
        $('.xue .page3 .coordinateScrewText').addClass('fadeIn');
        this.hideElement(3,['text1','text2','coordinate','coordinateScrew','coordinateScrewText']);

        // page4
        $('.xue .page4 .text1').removeClass('fadeOut');
        $('.xue .page4 .phone1').removeClass('fadeOut');
        $('.xue .page4 .phone2').removeClass('fadeOut');
        $('.xue .page4 .text1').addClass('flash');
        $('.xue .page4 .phone1').addClass('fadeInDown');
        $('.xue .page4 .phone2').addClass('fadeInDown');
        this.hideElement(4,['text1','phone1','phone2']);

        // page5
        this.hideElement(5,['continue','go']);

        $('.xue span').removeClass('done');
        $('.xue span').css('display','none');
    }
}