var resId,startTime;
var Utils = {};
Utils.Path="";

function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}

Utils.closeAllAudios = function() {
	var audioCtx = new AudioContext();
	audioCtx.close();
};

function passResId(pageName)
{
	resId = getURLParameter("resId");
	console.log("resId from utility:"+pageName+"?resId="+resId);
	window.location.href = pageName+"?resId="+resId;
}
function passResIdWithLevel(pageName)
{
	resId = getURLParameter("resId");
	console.log("resId from utility:"+pageName+"?resId="+resId);
	window.location.href = pageName+"&resId="+resId;
}

Utils.setPath = function(path){
  Utils.Path = path;
};

Utils.setNavPath = function(path){
  Utils.navPath = path;
};

Utils.setGamePath = function(path){
  Utils.gamePath = path;
};

$(window).load(function(event) {

	var d=new Date();
	startTime=d.getDate()+"-"+(d.getMonth()+1)+"-"+d.getFullYear()+" "+
	d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
	console.log("start time ="+startTime);
	resId = getURLParameter("resId");
	console.log(resId);
});
