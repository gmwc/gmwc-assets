function css_browser_selector(e){var i=e.toLowerCase(),r=function(e){return i.indexOf(e)>-1},t="gecko",o="webkit",a="safari",n="chrome",s="opera",d="mobile",c=0,l=window.devicePixelRatio?(window.devicePixelRatio+"").replace(".","_"):"1",p=[!/opera|webtv/.test(i)&&/msie\s(\d+)/.test(i)&&(c=1*RegExp.$1)?"ie ie"+c+(6==c||7==c?" ie67 ie678 ie6789":8==c?" ie678 ie6789":9==c?" ie6789 ie9m":c>9?" ie9m":""):/edge\/(\d+)\.(\d+)/.test(i)&&(c=[RegExp.$1,RegExp.$2])?"ie ie"+c[0]+" ie"+c[0]+"_"+c[1]+" ie9m edge":/trident\/\d+.*?;\s*rv:(\d+)\.(\d+)\)/.test(i)&&(c=[RegExp.$1,RegExp.$2])?"ie ie"+c[0]+" ie"+c[0]+"_"+c[1]+" ie9m":/firefox\/(\d+)\.(\d+)/.test(i)&&(re=RegExp)?t+" ff ff"+re.$1+" ff"+re.$1+"_"+re.$2:r("gecko/")?t:r(s)?s+(/version\/(\d+)/.test(i)?" "+s+RegExp.$1:/opera(\s|\/)(\d+)/.test(i)?" "+s+RegExp.$2:""):r("konqueror")?"konqueror":r("blackberry")?d+" blackberry":r(n)||r("crios")?o+" "+n:r("iron")?o+" iron":!r("cpu os")&&r("applewebkit/")?o+" "+a:r("mozilla/")?t:"",r("android")?d+" android":"",r("tablet")?"tablet":"",r("j2me")?d+" j2me":r("ipad; u; cpu os")?d+" chrome android tablet":r("ipad;u;cpu os")?d+" chromedef android tablet":r("iphone")?d+" ios iphone":r("ipod")?d+" ios ipod":r("ipad")?d+" ios ipad tablet":r("mac")?"mac":r("darwin")?"mac":r("webtv")?"webtv":r("win")?"win"+(r("windows nt 6.0")?" vista":""):r("freebsd")?"freebsd":r("x11")||r("linux")?"linux":"","1"!=l?" retina ratio"+l:"","js portrait"].join(" ");return window.jQuery&&!window.jQuery.browser&&(window.jQuery.browser=c?{msie:1,version:c}:{}),p}!function(e,i){var r=css_browser_selector(navigator.userAgent),t=e.documentElement;t.className+=" "+r;var o=r.replace(/^\s*|\s*$/g,"").split(/ +/);i.CSSBS=1;for(var a=0;a<o.length;a++)i["CSSBS_"+o[a]]=1;var n=function(i){return e.documentElement[i]||e.body[i]};i.jQuery&&!function(e){function r(){if(0==m){try{var e=n("clientWidth"),i=n("clientHeight");if(e>i?u.removeClass(a).addClass(s):u.removeClass(s).addClass(a),e==b)return;b=e}catch(r){}m=setTimeout(o,100)}}function o(){try{u.removeClass(w),u.addClass(360>=b?d:640>=b?c:768>=b?l:1024>=b?p:"pc")}catch(e){}m=0}var a="portrait",s="landscape",d="smartnarrow",c="smartwide",l="tabletnarrow",p="tabletwide",w=d+" "+c+" "+l+" "+p+" pc",u=e(t),m=0,b=0;i.CSSBS_ie?setInterval(r,1e3):e(i).on("resize orientationchange",r).trigger("resize"),e(i).load(r)}(i.jQuery)}(document,window);