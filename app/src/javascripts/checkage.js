var $ = require('jquery');
var main_page = require('./main_page');

module.exports = {
    init: function () {
        $('.checkage .yes').on('click', function () {
            $('.checkage').hide();
        });
        $('.checkage .no').on('click', function () {
            $('.checkage').hide();
            main_page.showEndPage();
        });
    }
}