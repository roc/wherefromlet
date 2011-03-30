javascript:(function(){
    if(document.getElementById("_remover_"))return;
    var r = document.referrer, div = document.createElement('div'), fEl = document.body.childNodes[0];
    
    div.style.cssText ='z-index:1000;position:fixed;top:4px;right:4px;background:orange;color:white;display:block;width:300px;padding:10px;font-family:sans-serif;opacity:.8;filter:alpha(opacity=80);-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)"';
    
    
    div.innerHTML = '<a href="#" id="_remover_" style="float:right;padding:2px 6px;background:red;color:white;text-decoration:none;border-radius:10px;margin:-15px">x</a><strong>Referrer: <a href="'+r+'">'+r+'</a></strong>';
    
    document.body.insertBefore(div,fEl);
    
    var remover = document.getElementById("_remover_");
    
    remover.onclick = function(){
        div.parentNode.removeChild(div);
    };

})();