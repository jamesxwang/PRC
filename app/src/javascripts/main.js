(function () {
    'use strict';

    var BASE_PATH = 'http://localhost:3000/';
    // load dependencies
    var animationControl = require('./animation-control.js');
    var interactive = require('./interactive.js');
    var main_page = require('./main_page.js');
    var le_shang = require('./le_shang.js');
    var le_xiang = require('./le_xiang.js');
    var le_huo = require('./le_huo.js');
    var le_xue = require('./le_xue.js');

    var loader = new PxLoader(),
    fileList = [
        'images/favicon.png',
        'images/github-1.png',
        'images/github-2.png',
        'images/github-3.png',
        'images/loading.svg',
        'images/interactive_hint1.png',
        'images/interactive_hint2.png',
        'images/interactive_arrow1.png',
        'images/interactive_arrow2.png',
        'images/interactive_big_logo.png',
        'images/interactive_door.png',
        'images/interactive_neon.png',
        'images/logo.png',
        'images/music.png',
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
        console.log(percent);
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
        var $upArrow = $('.up-arrow');

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

        // init Swiper
        new Swiper('.swiper-container', {
            mousewheelControl: true,
            effect: 'coverflow',    // slide, fade, coverflow or flip
            speed: 400,
            direction: 'vertical',
            fade: {
                crossFade: false
            },
            coverflow: {
                rotate: 100,
                stretch: 0,
                depth: 300,
                modifier: 1,
                slideShadows: false     // do disable shadows for better performance
            },
            flip: {
                limitRotation: true,
                slideShadows: false     // do disable shadows for better performance
            },
            onInit: function (swiper) {
                interactive.init();
                main_page.init();
                animationControl.initAnimationItems();  // get items ready for animations
                animationControl.playAnimation(swiper); // play animations of the first slide
            },
            onTransitionStart: function (swiper) {     // on the last slide, hide .btn-swipe
                if (swiper.activeIndex === swiper.slides.length - 1) {
                    $upArrow.hide();
                } else {
                    $upArrow.show();
                }
            },
            onTransitionEnd: function (swiper) {       // play animations of the current slide
                animationControl.playAnimation(swiper);
            },
            onTouchStart: function (swiper, event) {    // mobile devices don't allow audios to play automatically, it has to be triggered by a user event(click / touch).
                if (!$btnMusic.hasClass('paused') && bgMusic.paused) {
                    bgMusic.play();
                }
            }
        });

    });
})();
