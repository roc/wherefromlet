javascript:(function(){
	var r = document.referrer, div = document.createElement('div'), fEl = document.body.firstChild;
	div.style.position = "fixed";
	div.style.top = "4px";
	div.style.right = "4px";
	div.style.background = "hotPink";
	div.style.color = "white";
	div.style.display = "block";
	div.style.width = '300px';
	div.style.padding = '10px';
	div.style.opacity = '0.8';
	div.innerHTML = '<strong>Referrer: <a href="'+r+'">'+r+'</a></strong><a id="_closer" href="#" style="clear:both;">x</a>';
	
	document.body.insertBefore(div,document.body.childNodes[0]);
	
	var _closer = document.getElementById("_closer");

	_closer.click = function(){
		console.log('clicked');
		div.parentNode.removeChild(div);
	}
	
})();

	//info = '<div style="position:static;top:4px;right:4px;border:2px solid #efefef;background:#F70FDC;opacity:0.8;filter: alpha(opacity=80);color:white;font:13px sans serif;padding:10px"><strong>Referrer: <a href="'+r+'">'+r+'</a></strong></div>';
