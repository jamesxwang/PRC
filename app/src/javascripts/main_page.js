var $ = require('jquery');

module.exports = {
    init: function() {
        $('.leShang').on('click', function() {
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