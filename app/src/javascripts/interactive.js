var $ = require('jquery');
var general = require('./general.js');

module.exports = {
    init: function() {
        var self = this;
        var angle = -25;
        self.setRotate(angle);
        self.initTouchEvents(angle);
        /****************************
         *       for develop        *
         ****************************/ 
        // self.gotoMainPage();

        // $('.interactive').hide();
        // $('.shang').show();
        // $('.page1').hide();
        // $('.page2').show();
        /****************************/ 
    },
    initTouchEvents: function(angle) {
        var self = this;
        var startX,startY,moveX,moveY,endX,endY = 0;
        document.body.addEventListener('touchmove', function (e) {
            e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
        }, {passive: false}); //passive 参数不能省略，用来兼容ios和android

        $('.arrow_blue').on('touchstart',function(e) {
            e.preventDefault();
            startX = e.touches[0].pageX;
            startY = e.touches[0].pageY;
        });
        $('.arrow_blue').on('touchmove',function(e) {
            e.preventDefault();
            moveX = e.touches[0].pageX;
            moveY = e.touches[0].pageY;
            var result = self.GetSlideDirection(startX,startY,moveX,moveY)
            var direction = result[0];
            var percent = (Math.abs(result[1])/(document.body.clientWidth/20));
            if (direction == 4)
                angle += (percent * 25)/100;
            else if (direction == 3)
                angle -= (percent * 25)/100;
            if (angle>=-25)
                self.setRotate(angle);
        });
        $('.arrow_pink').on('touchstart',function(e) {
            e.preventDefault();
            startX = e.touches[0].pageX;
            startY = e.touches[0].pageY;
        });
        $('.arrow_pink').on('touchmove',function(e) {
            e.preventDefault();
            moveX = e.touches[0].pageX;
            moveY = e.touches[0].pageY;
            var result = self.GetSlideDirection(startX,startY,moveX,moveY)
            var direction = result[0];
            var percent = (Math.abs(result[1])/(document.body.clientWidth/20));
            if (direction == 4)
                angle -= (percent * 25)/100;
            else if (direction == 3)
                angle += (percent * 25)/100;
            if (angle>=-25)
                self.setRotate(angle);
        });
        $('.rotate').on('touchstart',function(e) {
            e.preventDefault();
            startX = e.touches[0].pageX;
            startY = e.touches[0].pageY;
        });
        $('.rotate').on('touchmove',function(e) {
            e.preventDefault();
            moveX = e.touches[0].pageX;
            moveY = e.touches[0].pageY;
            var result = self.GetSlideDirection(startX,startY,moveX,moveY)
            var direction = result[0];
            var percent = (Math.abs(result[1])/(document.body.clientWidth/4));
            if (direction == 4)
                angle -= (percent * 25)/100;
            else if (direction == 3)
                angle += (percent * 25)/100;
            if (angle>=-25)
                self.setRotate(angle);
        });
    },
    GetSlideDirection:function (startX, startY, endX, endY) {
        var self = this;
        var dy = startY - endY;
        var dx = endX - startX;
        var result = 0;
        if(Math.abs(dx) < 2 && Math.abs(dy) < 2)
            return result;
        var angle = self.GetSlideAngle(dx, dy);
        if(angle >= -45 && angle < 45)
            result = 4;
        else if (angle >= 45 && angle < 135)
            result = 1;
        else if (angle >= -135 && angle < -45)
            result = 2;
        else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135))
            result = 3;
        return [result,dx];
    },
    GetSlideAngle:function (dx, dy) {
        return Math.atan2(dy, dx) * 180 / Math.PI;
    },
    setRotate: function(angle) {
        $('.rotate').css('transform','rotate('+angle+'deg)');
        $('.rotate').css('-moz-transform','transform','rotate('+angle+'deg)');
        $('.rotate').css('-webkit-transform','transform','rotate('+angle+'deg)');
        if (angle>=0) {
            $('.rotate').css('transform','rotate(0deg)');
            $('.rotate').css('-moz-transform','transform','rotate(0deg)');
            $('.rotate').css('-webkit-transform','transform','rotate(0deg)');
            this.openDoor();
        }
    },
    openDoor: function() {
        var self = this;
        var animationEnd = general.initAnimationEnd();
        general.playDoorSound();
        $('.rotateBox').addClass('animated fadeOut');
        $('.left_door').addClass('slideOutLeft');
        $('.right_door').addClass('slideOutRight');
        setTimeout(function() {
            self.gotoMainPage();
            general.showTada(animationEnd);
        }, 2500);
    },
    gotoMainPage: function() {
        $('.interactive').hide();
        $('.main').show();
    }
}
