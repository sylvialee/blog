//turnpage.js

var w = $(window).width();
var h = $(window).height();
$("#flipBook").turn({
	width: w,
	height: h,
	acceleration:true,
	elevation:100,
	gradients:true,
	display:"single",
	autoCenter:true,
	when: {
		turned:function(e, page){
			$("#flipBook .sectionTurn").removeClass("active");
			$("#flipBook .p" + page).addClass("active");
		}
	}
});



//分享到朋友圈，调用接口
wx.config({
    debug: false,
    appId: wxconfig.appId,
    timestamp: wxconfig.timestamp,
    nonceStr: wxconfig.nonceStr,
    signature: wxconfig.signature,
    jsApiList:[
        'onMenuShareTimeline',
		'onMenuShareAppMessage',
    ]
});

wx.ready(function(){
	var url = window.location.href;//分享链接
	var title = "青春纪念册";//分享标题
	var desc = "分享描述";//分享描述
	var imgUrl = '图片链接'; // 分享图标

	//分享到朋友圈
	wx.onMenuShareTimeline({
	    title: title, // 分享标题【快小递】看广告挣红包~每周一期，本期红包金额XX元
	    link: url, // 分享链接
	    imgUrl: imgUrl, // 分享图标
	    success: function () { 
	        // 用户确认分享后执行的回调函数
	    },
	    cancel: function () { 
	        // 用户取消分享后执行的回调函数
	    }
	});

	//分享给微信好友
	wx.onMenuShareAppMessage({
	    title: title, // 分享标题
	    desc: desc, // 分享描述
	    link: url, // 分享链接
	    imgUrl: imgUrl, // 分享图标
	    type: '', // 分享类型,music、video或link，不填默认为link
	    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
	    success: function () { 
	        // 用户确认分享后执行的回调函数
	    },
	    cancel: function () { 
	        // 用户取消分享后执行的回调函数
	    }
	});
});