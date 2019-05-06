(function () {

    // load dependencies
    var checkage = require('./checkage.js');
    var interactive = require('./interactive.js');
    var main_page = require('./main_page.js');
    var general = require('./general.js');

    $(document).ready(function () {
        /***********************************************
         *                   Loader                    *
         ***********************************************/
        var loader = new PxLoader();
        var bgMusic = $('audio').get(0);
        var $btnMusic = $('#btn-music');

        // Images
        // var BASE_IMAGE_PATH = '/dist/images/';
        // var BASE_AUDIO_PATH = '/dist/audios/';
        var BASE_IMAGE_PATH = '/images/';
        var BASE_AUDIO_PATH = '/audios/';
        var fileList = [
            'le_huo_light.png',
            'loading_man1.png',
            'loading_man2.png',
            'music.png',
            'interactive_arrow1.png',
            'interactive_arrow2.png',
            'interactive_background.png',
            'interactive_background2.png',
            'interactive_big_logo.png',
            'interactive_door.png',
            'interactive_end_neon.png',
            'interactive_hint1.png',
            'interactive_hint2.png',
            'interactive_neon.png',
            'interactive_no.png',
            'interactive_text.png',
            'interactive_text1.png',
            'interactive_yes.png',
            'le_huo_athlete_click1.png',
            'le_huo_athlete_click2.png',
            'le_huo_athlete_unclick1.png',
            'le_huo_athlete_unclick2.png',
            'le_huo_continue.png',
            'le_huo_go.png',
            'le_huo_hand.png',
            'le_huo_header1.png',
            'le_huo_image1.png',
            'le_huo_image2.png',
            'le_huo_image3.png',
            'le_huo_image4.png',
            'le_huo_image5.png',
            'le_huo_image6.png',
            'le_huo_image7.png',
            'le_huo_image8.png',
            'le_huo_image9.png',
            'le_huo_logo.png',
            'le_huo_pyramid.png',
            'le_huo_text_bold1.png',
            'le_huo_text_bold2.png',
            'le_huo_text_bold3.png',
            'le_huo_text_bold4.png',
            'le_huo_text_bold5.png',
            'le_huo_text_branch1.png',
            'le_huo_text_branch2.png',
            'le_huo_text_branch3.png',
            'le_huo_text_branch4.png',
            'le_huo_text_branch5.png',
            'le_huo_type1.png',
            'le_huo_type2.png',
            'le_huo_type3.png',
            'le_shang_arrow1.png',
            'le_shang_bullet1.png',
            'le_shang_bullet2.png',
            'le_shang_bullet3.png',
            'le_shang_circle1.png',
            'le_shang_circle2.png',
            'le_shang_circle3.png',
            'le_shang_coin_bar1.png',
            'le_shang_coin_bar2.png',
            'le_shang_coin_bar3.png',
            'le_shang_coin_bar4.png',
            'le_shang_coin_bar5.png',
            'le_shang_content.png',
            'le_shang_continue.png',
            'le_shang_girl_click1.png',
            'le_shang_girl_click2.png',
            'le_shang_girl_click3.png',
            'le_shang_girl_unclick1.png',
            'le_shang_girl_unclick2.png',
            'le_shang_go.png',
            'le_shang_hand.png',
            'le_shang_header.png',
            'le_shang_no.png',
            'le_shang_pig.png',
            'le_shang_popup1.png',
            'le_shang_popup2.png',
            'le_shang_popup3.png',
            'le_shang_popup4.png',
            'le_shang_popup5.png',
            'le_shang_popup6.png',
            'le_shang_popup7.png',
            'le_shang_popup8.png',
            'le_shang_popup9.png',
            'le_shang_question.png',
            'le_shang_text1.png',
            'le_shang_text2.png',
            'le_shang_text3.png',
            'le_shang_text4.png',
            'le_shang_text5.png',
            'le_shang_text6.png',
            'le_shang_text7.png',
            'le_shang_text8.png',
            'le_shang_text9.png',
            'le_xiang_big_logo.png',
            'le_xiang_bubble1.png',
            'le_xiang_clown_click1.png',
            'le_xiang_clown_click2.png',
            'le_xiang_clown_click3.png',
            'le_xiang_clown_click4.png',
            'le_xiang_clown_unclick1.png',
            'le_xiang_clown_unclick2.png',
            'le_xiang_continue.png',
            'le_xiang_go.png',            
            'le_xiang_popup1.png',
            'le_xiang_popup2.png',
            'le_xiang_popup3.png',
            'le_xiang_popup4.png',
            'le_xiang_popup5.png',
            'le_xiang_popup6.png',
            'le_xiang_popup7.png',
            'le_xiang_popup8.png',
            'le_xiang_popup9.png',
            'le_xiang_popup10.png',
            'le_xiang_popup11.png',
            'le_xiang_popup12.png',
            'le_xiang_popup13.png',
            'le_xiang_popup14.png',
            'le_xiang_popup15.png',
            'le_xiang_popup16.png',
            'le_xiang_popup17.png',
            'le_xiang_popup18.png',
            'le_xiang_popup19.png',
            'le_xiang_popup20.png',
            'le_xiang_popup21.png',
            'le_xiang_scene.png',
            'le_xue_content1.png',
            'le_xue_content2.png',
            'le_xue_content3.png',
            'le_xue_content4.png',
            'le_xue_continue.png',
            'le_xue_description1.png',
            'le_xue_description2.png',
            'le_xue_description3.png',
            'le_xue_go.png',
            'le_xue_header.png',
            'le_xue_pie.png',
            'le_xue_scene.png',
            'le_xue_teacher_click1.png',
            'le_xue_teacher_click2.png',
            'le_xue_teacher_unclick1.png',
            'le_xue_teacher_unclick2.png',
            'le_xue_text1.png',
            'le_xue_text2.png',
            'le_xue_text3.png',
            'le_xue_text4.png',
            'le_xue_text5.png',
            'le_xue_text6.png',
            'le_xue_text7.png',
            'le_xue_text8.png',
            'le_xue_text9.png',
            'le_xue_text10.png',
            'le_xue_text11.png',
            'logo.png',
            'logo2.png',
            'main_page_background.png',
            'main_page_end.png',
            'main_page_hand.png',
            'main_page_huo.png',
            'main_page_logo1.png',
            'main_page_logo2.png',
            'main_page_shang.png',
            'main_page_xiang.png',
            'main_page_xue.png'
        ];
        for(var i = 0; i < fileList.length; i++){
            var pxImage = new PxLoaderImage(BASE_IMAGE_PATH + fileList[i]);
            pxImage.imageNumber = i + 1;
            loader.add(pxImage);
        }
        var autoPlayAudio = function() {
            wx.config({
                debug: false,
                appId: '',
                timestamp: 1,
                nonceStr: '',
                signature: '',
                jsApiList: []
            });
            wx.ready(function() {
                bgMusic.volume = 0.3;
                bgMusic.play();
            });
        }
        loader.addCompletionListener(function(){
            console.log("预加载图片："+fileList.length+"张");
            // autoplay
            $btnMusic.show();
            if (!$btnMusic.hasClass('paused') && bgMusic.paused)
                bgMusic.play();
            autoPlayAudio();
            $btnMusic.addClass('ready');
            $btnMusic.click(function() {
                if (bgMusic.paused) {
                    bgMusic.volume = 0.3;
                    bgMusic.play();
                    $(this).removeClass('paused');
                } else {
                    bgMusic.pause();
                    $(this).addClass('paused');
                }
            });
            // init
            checkage.init();
            interactive.init();
            main_page.init();

            // carousel
            var mySwiper = new Swiper('.carousel .swiper-container',{
                centeredSlides: true,
                slidesPerView: 3,
                loop: true,
                watchActiveIndex: true,
                observer: true,
                observeParents: true,
                onTransitionEnd: function (swiper) {
                    general.handleCarousel(swiper);
                },
            });

            $(".loading-overlay").slideUp();
        });
        loader.addProgressListener(function(e){
            var percent = Math.round( (e.completedCount / e.totalCount) * 100);
            $(".loadingProgress2").css({"width":percent+"%"});
            $(".progressNumb").html(percent + "%");
        });

        // Sound
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
            loader.addSound('bg_music', BASE_AUDIO_PATH + 'background.mp3');
            loader.addSound('door_sound', BASE_AUDIO_PATH + 'door.mp3');
            loader.addSound('click_sound', BASE_AUDIO_PATH + 'click.mp3');
            
            loader.start();
        });
        /***********************************************/
    });
})();
