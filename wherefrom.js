javascript:(function(){
    var r = document.referrer, div = document.createElement('div'), fEl = document.body.childNodes[0];
    div.style.cssText ='position:fixed;top:4px;right:4px;background:hotPink;color:white;display:block;width:300px;padding:10px;font-family:sans-serif;opacity:.8;filter:alpha(opacity=80);-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)"';
    
    div.innerHTML = '<strong>Referrer: <a href="'+r+'">'+r+'</a></strong>';
    
    document.body.insertBefore(div,fEl);

})();