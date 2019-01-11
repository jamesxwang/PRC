(function () {
    'use strict';

    // load dependencies
    var interactive = require('./interactive.js');
    var main_page = require('./main_page.js');
    var le_shang = require('./le_shang.js');
    var le_xiang = require('./le_xiang.js');
    var le_huo = require('./le_huo.js');
    var le_xue = require('./le_xue.js');

    /***********************************************
     *                   Loader                    *
     ***********************************************/
    var loader = new PxLoader();

    // Images
    var BASE_PATH = '/images/';
    var fileList = [
        'loading_light.png',
        'loading_man.png',
        'loading_progress1.png',
        'loading_progress2.png',
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
        'main_page_hand.png',
        'main_page_logo1.png',
        'main_page_logo2.png',
        'main_page_shang.png',
        'main_page_xiang.png',
        'main_page_huo.png',
        'main_page_xue.png',
        'le_shang_circle1.png',
        'le_shang_circle2.png',
        'le_shang_circle3.png',
        'le_shang_coins.png',
        'le_shang_girl.png',
        'le_shang_hand.png',
        'le_shang_header.png',
        'le_shang_popup1.png',
        'le_shang_popup2.png',
        'le_shang_single_coin.png',
        'le_xiang_big_logo.png',
        'le_xiang_popup1.png',
        'le_xiang_popup2.png',
        'le_xiang_popup3.png',
        'le_xiang_popup4.png',
        'le_xiang_scene.png',
        'le_xue_header.png',
        'le_xue_desk.png',
        'le_xue_scene.png',
        'le_xue_teacher.png',
        'le_xue_text1.png',
        'le_xue_description1.png',
        'le_xue_description2.png',
        'le_xue_description3.png',
        'le_xue_pie.png',
        // 'le_xue_.png',
        // 'le_xue_.png',
        // 'le_xue_.png',
        // 'le_xue_.png',
        // 'le_xue_.png',

    ];
    for(var i = 0; i < fileList.length; i++){
        var pxImage = new PxLoaderImage(BASE_PATH + fileList[i]);
        pxImage.imageNumber = i + 1;
        loader.add(pxImage);
    }
    loader.addCompletionListener(function(){
        console.log("预加载图片："+fileList.length+"张");
        $(".loading-overlay").slideUp();
    });
    loader.addProgressListener(function(e){
        var bgMusic = $('audio').get(0);
        $btnMusic.addClass('ready');
        $btnMusic.click(function() {
            if (bgMusic.paused) {
                bgMusic.play();
                $(this).removeClass('paused');
            } else {
                bgMusic.pause();
                $(this).addClass('paused');
            }
        });
        var percent = Math.round( (e.completedCount / e.totalCount) * 100);
        $(".loadingProgress2").css({"width":percent+"%"});
        $(".progressNumb").html(percent + "%");
    });

    // Sound
    var $btnMusic = $('#btn-music');
    var bgMusic = $('audio').get(0);
    soundManager.url = 'soundManager2/';
    soundManager.flashVersion = 9;
    soundManager.useHighPerformance = true;
    soundManager.flashLoadTimeout = 500;
    soundManager.audioFormats.mp3.required = false;
    soundManager.ontimeout(function(status) { 
        soundManager.useHTML5Audio = true; 
        soundManager.preferFlash = false; 
        soundManager.reboot(); 
    });
    soundManager.onready(function() {
        loader.addSound('bg_music','/audios/background.mp3');
        $btnMusic.show();
        if (!$btnMusic.hasClass('paused') && bgMusic.paused)
            bgMusic.play();
        loader.start();
    });
    /***********************************************/

    $(document).ready(function () {
        // init
        interactive.init();
        main_page.init();
        le_shang.init();
        le_xiang.init();
        le_xue.init();
    });

})();
