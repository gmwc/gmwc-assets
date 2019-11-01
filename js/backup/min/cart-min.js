var CartClass=function(){this.debug=function(t,a){var e=window.location.toString().toLowerCase();return e.indexOf("debugcart")>-1?(void 0!=t&&(void 0!=a?console.debug("cart: "+t,a):console.debug("cart: "+t)),!0):void 0},this.error=function(t,a){var e=window.location.toString().toLowerCase();return e.indexOf("debugcart")>-1?(void 0!=t&&(void 0!=a?console.error("cart: "+t,a):console.error("cart: "+t)),!0):void 0},this.init=function(){this.debug("init",this)},this.refreshCart=function(){this.debug("refreshCart",null),$("#cart_summary_container").load("/api/output/gm_cart_summary?_output=html&_template=kmYiDpAJxUadMzYGZS2Iyg",function(){document.cart.debug("refreshCart : finished loading summary",null),$("#cart_summary_widget")&&$("#cart_summary_widget").html().length>0&&(document.cart.debug("refreshCart : cart found, loading small cart",null),$("#cart_contents").load("/api/content/7GG5G44ssk62ySaoYqMPTQ",function(){document.cart.showSmallCart(".navbar-cart"),document.cart.quickCart(".quick-cart",7e3,!0),$('[data-toggle~="showQuickCart"]').hover(function(){document.cart.quickCart(".quick-cart",0,!1)})})),$("#cart_summary_container").show()})},this.qCTimer=null,this.qCCounter=function(t){this.debug("qCCounter",t),$(t).hasClass("bounceIn")?$(t).removeClass("bounceIn").addClass("bounceIn"):$(t).addClass("bounceIn")},this.showSmallCart=function(t){this.debug("showSmallCart",t),$(t).is(":visible")&&($(".navbar-top").addClass("navbar-with-small-cart"),this.qCCounter("#cartCounter"))},this.qCAlignment=function(t){var a=$(t),e=$(window).width(),r=a.parents(".navbar-cart").find(".list-group-item-brand").width(),s=a.parents(".navbar-cart").find(".list-group-item-brand").offset().left,n=e-(r+s);return a.css("right",n+"px"),n},this.quickCart=function(t,a,e){this.debug("quickCart",a);var r="fadeInDown",s="fadeOutUp",n=this.qCAlignment(t);$(window).resize(function(t){n=this.qCAlignment(t)});var i=$(t),o=function(t){this.qCTimer=window.setTimeout(function(){i.removeClass(r).addClass(s)},t)};e===!0&&clearTimeout(this.qCTimer),a&&a>0?i.hasClass(r)?o(a):(i.hasClass(s)||i.hasClass("hidden"))&&(clearTimeout(this.qCTimer),i.removeClass(s).removeClass("hidden").addClass(r),e===!0&&clearTimeout(this.qCTimer),o(a)):i.removeClass(s).removeClass("hidden").addClass(r)},this.addItemByForm=function(t){return this.debug("addItemByForm",t),0==$(t).length?(this.error("addItemByForm : unable to find formID",t),alert("Internal error, unable to add item to cart"),!1):($.ajax({url:"/api/output/gm_cart_addItem",type:"post",data:$(t).serialize(),dataType:"json"}).done(function(t){document.cart.debug("addItemByForm done",t);var a=!0,e;t&&Array.isArray(t)?t[0].Successful&&"true"==t[0].Successful.toLowerCase()?document.cart.refreshCart():t[0].Message&&(e=t[0].Message,a=!1):(this.error("addItemByForm invalid result",t),a=!1,t.Message?e=t.Message:t.Messages&&(e=t.Messages)),a||(e||(e="We were unable to add this item to you cart. Please try again"),alert(e))}),!1)}};document.cart=new CartClass;