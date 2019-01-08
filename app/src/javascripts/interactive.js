var $ = require('jquery');

module.exports = {
    init: function() {
        // click 改为旋转开启，如果酒杯对齐则进入首页
        $('.turntable').on('click', function() {

            // 有滑动效果
            $('.interactive').slideUp();
            $('.interactive').css('display','block');
            $('.main').css('display','block');

            // 无滑动效果
            // $('.interactive').hide();
            // $('.main').show();
        });
    }
}