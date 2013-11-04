// JavaScript Document
$(document).ready(function(e) {
    var url=window.location.href,hostname=window.location.hostname,startIndex=url.indexOf(hostname),username;
	var arr=url.substr(startIndex+hostname.length).split("/");
	var reg=/./gi;
	if(reg.test(arr[arr.length-1]) || arr[arr.length-1]==""){
		username=arr[arr.length-2];
		}
	else{
		username=arr[arr.length-1];
		}
		
	weibo_sh();	
});
//分享功能代码
	function weibo_sh(){
		var title=document.title,picture="http://192.168.10.22/working/php/webui/yunmingpian/yun_files/images/logo.png";
		var con="我正在使用信诺集团的云名片，你也来体验一下吧!";
		//新浪微博
var sina_m="http://v.t.sina.com.cn/share/share.php?url="+encodeURIComponent(location.href)+"&appkey=111111111&title="+encodeURIComponent(con)+"&searchPic=true"+"&pic="+encodeURIComponent(picture);
		$("#sina_wb a").attr("href",sina_m);
		//腾讯微博
		var tt_n_m="http://share.v.t.qq.com/index.php?c=share&a=index&title="+encodeURI(con)+"&url="+encodeURI(location.href)+"&pic="+picture;
		$("#tt_wb a").attr("href",tt_n_m);
	}