(function () {
    'use strict';

    var BASE_PATH = '/images/';
    // load dependencies
    var interactive = require('./interactive.js');
    var main_page = require('./main_page.js');
    var le_shang = require('./le_shang.js');
    var le_xiang = require('./le_xiang.js');
    var le_huo = require('./le_huo.js');
    var le_xue = require('./le_xue.js');

    var loader = new PxLoader(),
    fileList = [
        'loading.svg',
        'interactive_hint1.png',
        'interactive_hint2.png',
        'interactive_arrow1.png',
        'interactive_arrow2.png',
        'interactive_big_logo.png',
        'interactive_door.png',
        'interactive_neon.png',
        'logo.png',
        'logo2.png',
        'music.png',
        'hand.png',
        'main_page_logo1.png',
        'main_page_logo2.png',
        'main_page_shang.png',
        'main_page_xiang.png',
        'main_page_huo.png',
        'main_page_xue.png',
        'leshang_circle1.png',
        'leshang_circle2.png',
        'leshang_circle3.png',
        'leshang_coins.png',
        'leshang_girl.png',
        'leshang_hand.png',
        'leshang_header.png',
        'leshang_popup1.png',
        'leshang_popup2.png',
        'leshang_single_coin.png',
    ];
    // add images to imageLoader
    for(var i = 0; i < fileList.length; i++){
        var pxImage = new PxLoaderImage(BASE_PATH + fileList[i]);

        pxImage.imageNumber = i + 1;
        loader.add(pxImage);
    }
    // onLoadComplete
    loader.addCompletionListener(function(){
        console.log("预加载图片："+fileList.length+"张");
        $(".loading-overlay").slideUp();
    });

    //loading 进度监听
    loader.addProgressListener(function(e){
        var percent = Math.round( (e.completedCount / e.totalCount) * 100); //正序, 1-100
        // console.log(percent);
        $(".loadingProgress2").css({
            "width":percent+"%"
        });
        $(".progressNumb").html(percent + "%");

    });

    // hide loading animation since everything is ready
    loader.start();

    $(document).ready(function () {
        var bgMusic = $('audio').get(0);
        var $btnMusic = $('.btn-music');

        // autoplay bg music
        if (!$btnMusic.hasClass('paused') && bgMusic.paused) {
            bgMusic.play();
        }

        // background music control
        $btnMusic.click(function () {
            if (bgMusic.paused) {
                bgMusic.play();
                $(this).removeClass('paused');
            } else {
                bgMusic.pause();
                $(this).addClass('paused');
            }
        });

        // init
        interactive.init();
        main_page.init();
        le_shang.init();
    });
})();
