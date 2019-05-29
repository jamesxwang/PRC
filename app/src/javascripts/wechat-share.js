module.exports = {
    init: function() {
        var baseUrl = "http://pernod-ricard-china.quantify.top/prc-public/";
        var wxData = {
            "imgUrl" : baseUrl + 'images/share.jpg',
            "link"   : baseUrl,
            "title"  : '乐生活 只为你',
            "desc"   : '保乐力加中国整体薪酬'
        };
        wx.config({
            debug: false,
            appId: signPackage.appId,
            timestamp: parseInt(signPackage.timestamp),
            nonceStr: signPackage.nonceStr,
            signature: signPackage.signature,
            jsApiList: [
                "onMenuShareTimeline", 
                "onMenuShareAppMessage", 
            ]
        });
        wx.ready(function () {
            wx.onMenuShareTimeline({
                title: wxData.title,
                link: wxData.link,
                imgUrl: wxData.imgUrl,
                success: function () {
                }
            });
            wx.onMenuShareAppMessage({
                title: wxData.title,
                desc: wxData.desc,
                link: wxData.link,
                imgUrl: wxData.imgUrl,
                type: 'link',
                dataUrl: '',
                success: function () {
                }
            });
        });
    },
    autoplay: function() {
        var bgMusic = $('audio').get(0);
        wx.ready(function () {
            bgMusic.volume = 0.7;
            bgMusic.play();
        });
    }
}