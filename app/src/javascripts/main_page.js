var $ = require('jquery');

module.exports = {
    init: function() {
        $('.leShang').on('click', function() {
            $('.page1').removeClass('done');
            $('.page2').removeClass('done');
            $('.page3').removeClass('done');
            $('.page4').removeClass('done');
            $('.page5').removeClass('done');
            $('.page6').removeClass('done');

            $('.main').hide();
            $('.xiang').hide();
            $('.huo').hide();
            $('.xue').hide();

            $('.shang').show();
        });
        $('.leXiang').on('click', function() {
            $('.main').hide();
            $('.shang').hide();
            $('.huo').hide();
            $('.xue').hide();

            $('.xiang').show();
        });
        $('.leHuo').on('click', function() {
            $('.main').hide();
            $('.shang').hide();
            $('.xiang').hide();
            $('.xue').hide();

            $('.huo').show();
        });
        $('.leXue').on('click', function() {
            $('.main').hide();
            $('.shang').hide();
            $('.xiang').hide();
            $('.huo').hide();

            $('.xue').show();
        });
    }
}