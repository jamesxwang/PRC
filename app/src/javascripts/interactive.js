var $ = require('jquery');
var $ = require('jquery');

module.exports = {
    init: function() {
        var self = this;
        var angle = -25;
        self.setRotate(angle);

        new AlloyFinger('.rotate', {
            rotate: function (evt) {
                angle += Math.round(evt.angle);
                self.setRotate(angle);
            }
        });
    },
    setRotate(angle) {
        $('.rotate').css('transform','rotate('+angle+'deg)');
        $('.rotate').css('-moz-transform','transform','rotate('+angle+'deg)');
        $('.rotate').css('-webkit-transform','transform','rotate('+angle+'deg)');
        if (angle>=(-3) && angle<=3) {
            this.openDoor();
        }
    },
    openDoor() {
        //TODO: add door animation


        setTimeout(() => {
            this.gotoMainPage();
        }, 1);
    },
    gotoMainPage() {
        $('.interactive').hide();
        $('.main').show();
    }
}