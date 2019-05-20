var $ = require('jquery');
// var main_page = require('./main_page');

module.exports = {
    init: function () {
        $('.checkage .yes').on('click', function () {
            $('.checkage').hide();
        });
        $('.checkage .no').on('click', function () {
            // $('.checkage').hide();
            // main_page.showEndPage();
            window.location.href = 'http://www.pernod-ricard-china.com/cn/ResponsibleDrinking.html#/Minors';
        });
    }
}