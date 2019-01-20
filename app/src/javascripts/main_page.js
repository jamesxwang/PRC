var $ = require('jquery');
var le_shang = require('./le_shang.js');
var le_shang = require('./le_shang.js');
var le_xiang = require('./le_xiang.js');
var le_huo = require('./le_huo.js');
var le_xue = require('./le_xue.js');
var general = require('./general.js');

module.exports = {
    init: function() {
        var self = this;
        var animationEnd = general.initAnimationEnd();
        $('.leShang').on('click', function() {
            self.hideAllTheme();
            $('.shang').show();
            $('.shang .page1').css('display','block');
            $('.shang .page1 .popup1').css('display','block');
            le_shang.init();
        });
        $('.leXiang').on('click', function() {
            self.hideAllTheme();
            $('.xiang .page1').css('display','block');
            $('.xiang .page1 .popup1').css('display','block');
            $('.xiang').show();
            le_xiang.init();

        });
        $('.leHuo').on('click', function() {
            self.hideAllTheme();
            $('.huo .page1').css('display','block');
            $('.huo .page1 .popup1').css('display','block');
            $('.huo').show();
            le_huo.init();
        });
        $('.leXue').on('click', function() {
            self.hideAllTheme();
            $('.xue .page1').css('display','block');
            $('.xue .page1 .text1').css('display','block');
            $('.xue').show();
            le_xue.init();
        });
        $('.end').on('click', function() {
            self.showEndPage();
        })
    },
    showEndPage() {
        $('.interactive .rotateBox').hide();
        $('.interactive .container .neon').hide();
        $('.interactive .doorBox .left_door').removeClass('slideOutLeft');
        $('.interactive .doorBox .right_door').removeClass('slideOutRight');
        $('.interactive').show();
        this.closeDoor();
    },
    closeDoor() {
        var self = this;
        var animationEnd = general.initAnimationEnd();

        $('.interactive .doorBox .left_door').addClass('slideInLeft closeDoorAnimationDuration');
        $('.interactive .doorBox .right_door').addClass('slideInRight closeDoorAnimationDuration');
        $('.interactive .doorBox .left_door').one(animationEnd, function() {
            setTimeout(() => {
                $('.endNeon').css('display','block');
            }, 200);
        });
        $('.endNeon').one(animationEnd, function() {
            setTimeout(() => {
                $('.endText').css('display','block');
            }, 200);
        });
    },
    hideAllTheme() {
        $('.main').hide();
        $('.shang').hide();
        $('.xiang').hide();
        $('.huo').hide();
        $('.xue').hide();
        $('.theme .leShang').removeClass('tada');
        $('.theme .leXiang').removeClass('tada');
        $('.theme .leXue').removeClass('tada');
        $('.theme .leHuo').removeClass('tada');
    }
}