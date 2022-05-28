function t121_setHeight(t){var e=document.getElementById("rec"+t),o=document.getElementById("youtubeiframe"+t),i=o?o.parentNode:null,n=o?o.offsetWidth:0,a=.5625*n;o&&(o.style.height=a+"px"),i&&(i.style.height=a+"px");var r=e?e.querySelector(".t-video-lazyload"):null;if(r){var s=r.querySelector("iframe"),c=.5625*r.offsetWidth;r.style.height=c+"px",s&&(s.style.height=c+"px"),setTimeout((function(){o=document.getElementById("youtubeiframe"+t),n=o?o.offsetWidth:0,o&&(o.style.height=.5625*n+"px")}),200)}}function t142_checkSize(t){var e=document.getElementById("rec"+t);if(e){var o=e.querySelector(".t142__submit");if(o){var i=getComputedStyle(o,null),n=parseInt(i.paddingTop)||0,a=parseInt(i.paddingBottom)||0;o.clientHeight-(n+a)+5<o.scrollHeight&&o.classList.add("t142__submit-overflowed")}}}function t446_init(t){var e=$("#rec"+t),o=e.find(".t446__mobile"),i="fixed"===o.css("position")&&"block"===o.css("display");setTimeout((function(){e.find(".t-menu__link-item:not(.t-menusub__target-link):not(.tooltipstered):not(.t794__tm-link)").on("click",(function(){$(this).is(".t-menu__link-item.tooltipstered, .t-menu__link-item.t-menusub__target-link, .t-menu__link-item.t794__tm-link, .t-menu__link-item.t966__tm-link, .t-menu__link-item.t978__tm-link")||i&&o.trigger("click")})),e.find(".t-menusub__link-item").on("click",(function(){i&&o.trigger("click")}))}),500)}function t446_setLogoPadding(t){if($(window).width()>980){var e=$("#rec"+t+" .t446"),o=e.find(".t446__logowrapper"),i=e.find(".t446__leftwrapper"),n=e.find(".t446__rightwrapper");i.css("padding-right",o.width()/2+50),n.css("padding-left",o.width()/2+50)}}function t446_checkOverflow(t,e){var o=$("#rec"+t+" .t446"),i=o.find(".t446__rightwrapper"),n=i.find(".t446__rightmenuwrapper"),a=i.find(".t446__additionalwrapper"),r=i.find(".t446__burgerwrapper_overflow"),s=i.find(".t446__burgerwrapper_withoutoverflow");if(e>0)var c=e;else c=80;$(window).width()>980&&n.width()+a.width()>i.width()?(o.css("height",2*c),a.css("float","right"),r.css("display","table-cell"),s.css("display","none")):(o.height()>c&&o.css("height",c),"right"==a.css("float")&&a.css("float","none"),r.css("display","none"),s.css("display","table-cell"))}function t446_highlight(){var t=window.location.href,e=window.location.pathname;"/"==t.substr(t.length-1)&&(t=t.slice(0,-1)),"/"==e.substr(e.length-1)&&(e=e.slice(0,-1)),"/"==e.charAt(0)&&(e=e.slice(1)),""==e&&(e="/"),$(".t446__list_item a[href='"+t+"']").addClass("t-active"),$(".t446__list_item a[href='"+t+"/']").addClass("t-active"),$(".t446__list_item a[href='"+e+"']").addClass("t-active"),$(".t446__list_item a[href='/"+e+"']").addClass("t-active"),$(".t446__list_item a[href='"+e+"/']").addClass("t-active"),$(".t446__list_item a[href='/"+e+"/']").addClass("t-active")}function t446_checkAnchorLinks(t){if($(window).width()>=960){var e=$("#rec"+t+" .t446__list_item a:not(.tooltipstered)[href*='#']");e.length>0&&t446_catchScroll(e)}}function t446_catchScroll(t){var e,o,i=null,n=new Array,a=[];(t=$(t.get().reverse())).each((function(){var t=t446_getSectionByHref($(this));void 0!==t.attr("id")&&n.push(t),a[t.attr("id")]=$(this)})),t446_updateSectionsOffsets(n),n.sort((function(t,e){return e.attr("data-offset-top")-t.attr("data-offset-top")})),$(window).bind("resize",t_throttle((function(){t446_updateSectionsOffsets(n)}),200)),$(".t446").bind("displayChanged",(function(){t446_updateSectionsOffsets(n)})),setInterval((function(){t446_updateSectionsOffsets(n)}),5e3),t446_highlightNavLinks(t,n,a,i),t.click((function(){var e=t446_getSectionByHref($(this));$(this).hasClass("tooltipstered")||void 0===e.attr("id")||(t.removeClass("t-active"),$(this).addClass("t-active"),i=t446_getSectionByHref($(this)).attr("id"))})),$(window).scroll((function(){var r=(new Date).getTime();e&&r<e+100?(clearTimeout(o),o=setTimeout((function(){e=r,i=t446_highlightNavLinks(t,n,a,i)}),100-(r-e))):(e=r,i=t446_highlightNavLinks(t,n,a,i))}))}function t446_updateSectionsOffsets(t){$(t).each((function(){var t=$(this);t.attr("data-offset-top",t.offset().top)}))}function t446_getSectionByHref(t){var e=t.attr("href").replace(/\s+/g,"");return"/"==e[0]&&(e=e.substring(1)),t.is('[href*="#rec"]')?$(".r[id='"+e.substring(1)+"']"):$(".r[data-record-type='215']").has("a[name='"+e.substring(1)+"']")}function t446_highlightNavLinks(t,e,o,i){var n=$(window).scrollTop(),a=i;return 0!=e.length&&null==i&&e[e.length-1].attr("data-offset-top")>n+300?(t.removeClass("t-active"),null):($(e).each((function(r){var s=$(this),c=s.attr("data-offset-top"),d=s.attr("id"),l=o[d];if(n+300>=c||e[0].attr("id")==d&&n>=$(document).height()-$(window).height())return null!=i||l.hasClass("t-active")?null!=i&&d==i&&(a=null):(t.removeClass("t-active"),l.addClass("t-active"),a=null),!1})),a)}function t446_setPath(){}function t446_setBg(t){$(window).width()>980?$(".t446").each((function(){var t=$(this);if("yes"==t.attr("data-bgcolor-setbyscript")){var e=t.attr("data-bgcolor-rgba");t.css("background-color",e)}})):$(".t446").each((function(){var t=$(this),e=t.attr("data-bgcolor-hex");t.css("background-color",e),t.attr("data-bgcolor-setbyscript","yes")}))}function t446_appearMenu(t){$(window).width()>980&&$(".t446").each((function(){var t=$(this),e=t.attr("data-appearoffset");""!=e&&(e.indexOf("vh")>-1&&(e=Math.floor(window.innerHeight*(parseInt(e)/100))),e=parseInt(e,10),$(window).scrollTop()>=e?"hidden"==t.css("visibility")&&(t.finish(),t.css("top","-50px"),t.css("visibility","visible"),t.animate({opacity:"1",top:"0px"},200,(function(){}))):(t.stop(),t.css("visibility","hidden")))}))}function t446_changebgopacitymenu(t){$(window).width()>980&&$(".t446").each((function(){var t=$(this),e=t.attr("data-bgcolor-rgba"),o=t.attr("data-bgcolor-rgba-afterscroll"),i=t.attr("data-bgopacity"),n=t.attr("data-bgopacity-two"),a=t.attr("data-menushadow");if("100"==a)var r=a;else r="0."+a;$(window).scrollTop()>20?(t.css("background-color",o),"0"==n||" "==a?t.css("box-shadow","none"):t.css("box-shadow","0px 1px 3px rgba(0,0,0,"+r+")")):(t.css("background-color",e),"0.0"==i||" "==a?t.css("box-shadow","none"):t.css("box-shadow","0px 1px 3px rgba(0,0,0,"+r+")"))}))}function t446_createMobileMenu(t){$(window).width();var e=$("#rec"+t),o=e.find(".t446"),i=e.find(".t446__mobile");o.hasClass("t446__mobile_burgerhook")?i.find(".t446__mobile_burger").wrap('<a href="#menuopen"></a>'):i.click((function(t){o.fadeToggle(300),$(this).toggleClass("t446_opened")})),$(window).bind("resize",t_throttle((function(){$(window).width()>980&&o.fadeIn(0)}),200)),e.find(".t-menu__link-item").on("click",(function(){$(this).hasClass("t966__tm-link")||$(this).hasClass("t978__tm-link")||t446_hideMenuOnMobile($(this),e)})),e.find(".t446__logowrapper2 a").on("click",(function(){t446_hideMenuOnMobile($(this),e)}))}function t446_hideMenuOnMobile(t,e){if($(window).width()<960){var o=t.attr("href").trim(),i=e.find(".t446"),n=e.find(".t446__mobile");if(o.length&&"#"===o[0])return n.removeClass("t446_opened"),i.is(".t446__positionabsolute")||!n.is(".t446__positionfixed")?i.fadeOut(0):i.fadeOut(300),!0}}function t539_equalHeight(t,e){if(!e||0==+e)return!1;var o=document.getElementById("rec"+t);if(o){var i=o.querySelector(".t539");if(i){for(var n=o.querySelectorAll(".t539__textwrapper"),a=Array.prototype.slice.call(n),r=0,s=0;s<a.length;s++)a[s].style.height="auto";if(window.innerWidth<=480)i.style.visibility="visible";else{r=window.innerWidth<=960?2:+e;for(s=0;s<a.length;s+=r){for(var c=0,d=a.slice(s,s+r),l=0;l<d.length;l++){var u=d[l].offsetHeight;u>c&&(c=u)}for(l=0;l<d.length;l++)d[l].style.height=c+"px"}i.style.visibility="visible"}}}}function t539_setHeight(t){var e=document.getElementById("rec"+t);if(e&&e.querySelector(".t539")){var o=e.querySelectorAll(".t539__bgimg");if(o[0])for(var i=o[0].getAttribute("data-image-width"),n=100*(o[0].getAttribute("data-image-height")/i),a=0;a<o.length;a++)o[a].style.paddingBottom=n+"%"}}function t702_initPopup(t){var e=document.getElementById("rec"+t);if(e&&e.querySelector(".t702")){e.setAttribute("data-animationappear","off"),e.setAttribute("data-popup-subscribe-inited","y"),e.style.opacity=1;var o=document.body,i=e.querySelector(".t-popup"),n=i.getAttribute("data-tooltip-hook"),a=i.getAttribute("data-track-popup"),r=i.querySelector(".t-popup__close"),s=e.querySelectorAll('a[href*="#"]'),c=e.querySelector('.t-submit[href*="#"]');if(n)for(var d=document.querySelectorAll(".r"),l=0;l<d.length;l++)d[l].addEventListener("click",(function(e){var o=e.target;!!o.closest('a[href="'+n+'"]')&&o&&(e.preventDefault(),t702_showPopup(t),t702_resizePopup(t),t702__lazyLoad(),a&&Tilda.sendEventToStatistics(a,n))}));i.addEventListener("scroll",t_throttle((function(){t702__lazyLoad()}))),i.addEventListener("click",(function(t){var e=window.innerWidth-17;t.clientX>e||t.target===this&&t702_closePopup()})),r.addEventListener("click",t702_closePopup),c&&c.addEventListener("click",(function(){o.classList.contains("t-body_scroll-locked")&&o.classList.remove("t-body_scroll-locked")}));for(l=0;l<s.length;l++)s[l].addEventListener("click",(function(){var t=this.getAttribute("href");t&&"#price:"==t.substring(0,7)||(t702_closePopup(),t&&"#popup:"!=t.substring(0,7)||setTimeout((function(){o.classList.add("t-body_popupshowed")}),300))}))}}function t702_lockScroll(){var t=document.body;if(!t.classList.contains("t-body_scroll-locked")){var e=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||t.parentNode||t).scrollTop;t.classList.add("t-body_scroll-locked"),t.style.top="-"+e+"px",t.setAttribute("data-popup-scrolltop",e)}}function t702_unlockScroll(){var t=document.body;if(t.classList.contains("t-body_scroll-locked")){var e=t.getAttribute("data-popup-scrolltop");t.classList.remove("t-body_scroll-locked"),t.style.top=null,t.removeAttribute("data-popup-scrolltop"),document.documentElement.scrollTop=parseInt(e)}}function t702_showPopup(t){var e=document.getElementById("rec"+t);if(e&&e.querySelector(".t702")){var o=e.querySelector(".t-popup"),i=o.querySelector(".t-popup__container"),n=e.querySelector(".t-range"),a=document.body;o.style.display="block",n&&t702__triggerEvent(n,"popupOpened"),setTimeout((function(){i.classList.add("t-popup__container-animated"),o.classList.add("t-popup_show")}),50),a.classList.add("t-body_popupshowed"),a.classList.add("t702__body_popupshowed"),/iPhone|iPad|iPod/i.test(navigator.userAgent)&&!window.MSStream&&setTimeout((function(){t702_lockScroll()}),500),document.addEventListener("keydown",t702_escClosePopup),t702__lazyLoad()}}function t702_escClosePopup(t){"Escape"===t.key&&t702_closePopup()}function t702_closePopup(){var t=document.querySelectorAll(".t-popup");document.body.classList.remove("t-body_popupshowed"),document.body.classList.remove("t702__body_popupshowed");for(var e=0;e<t.length;e++)t[e].classList.remove("t-popup_show");/iPhone|iPad|iPod/i.test(navigator.userAgent)&&!window.MSStream&&t702_unlockScroll(),setTimeout((function(){for(var t=document.querySelectorAll(".t-popup:not(.t-popup_show)"),e=0;e<t.length;e++)t[e].style.display="none"}),300),document.removeEventListener("keydown",t702_escClosePopup)}function t702_resizePopup(t){var e=document.getElementById("rec"+t);if(e){var o=e.querySelector(".t-popup__container");if(o){var i=getComputedStyle(o,null),n=parseInt(i.paddingTop)||0,a=parseInt(i.paddingBottom)||0;o.clientHeight-(n+a)>window.innerHeight-120?o.classList.add("t-popup__container-static"):o.classList.remove("t-popup__container-static")}}}function t702_sendPopupEventToStatistics(t){var e="/tilda/popup/",o="Popup: ";"#popup:"==t.substring(0,7)&&(t=t.substring(7)),e+=t,o+=t,window.Tilda&&"function"==typeof Tilda.sendEventToStatistics?Tilda.sendEventToStatistics(e,o,"",0):(ga&&"tilda"!=window.mainTracker&&ga("send",{hitType:"pageview",page:e,title:o}),window.mainMetrika&&window[window.mainMetrika]&&window[window.mainMetrika].hit(e,{title:o,referer:window.location.href}))}function t702_onSuccess(t){t instanceof Element||(t=t[0]);var e=t.querySelector(".t-form__inputsbox"),o=getComputedStyle(e,null),i=parseInt(o.paddingTop)||0,n=parseInt(o.paddingBottom)||0,a=e.clientHeight-(i+n)+(e.getBoundingClientRect().top+window.pageYOffset),r=t.querySelector(".t-form__successbox").getBoundingClientRect().top+window.pageYOffset,s=0,c=window.innerHeight,d=document.body,l=document.documentElement,u=Math.max(d.scrollHeight,d.offsetHeight,l.clientHeight,l.scrollHeight,l.offsetHeight);s=window.innerWidth>960?r-200:r-100;var p=document.querySelector(".t-tildalabel");r>window.scrollY||u-a<c-100?(e.classList.add("t702__inputsbox_hidden"),setTimeout((function(){c>u&&p&&t702__fadeOut(p)}),300)):(t702__scroll(s),setTimeout((function(){e.classList.add("t702__inputsbox_hidden")}),400));var f=$(t).data("success-url");f&&setTimeout((function(){window.location.href=f}),500)}function t702__fadeOut(t){if("none"!==t.style.display)var e=1,o=setInterval((function(){t.style.opacity=e,(e-=.1)<=.1&&(clearInterval(o),t.style.display="none",t.style.opacity=null)}),50)}function t702__scroll(t){var e=(window.pageYOffset||document.documentElement.scrollTop)-(document.documentElement.clientTop||0),o=t-e,i=0;document.body.setAttribute("data-scrollable","true"),function t(){i+=16,window.scrollTo(0,function(t){return(t/=200)<1?o/2*t*t*t+e:o/2*((t-=2)*t*t+2)+e}(i)),i<400?setTimeout(t,16):document.body.removeAttribute("data-scrollable")}()}function t702__lazyLoad(){"y"!==window.lazy&&"yes"!==document.getElementById("allrecords").getAttribute("data-tilda-lazy")||t_onFuncLoad("t_lazyload_update",(function(){t_lazyload_update()}))}function t702__triggerEvent(t,e){var o;"function"==typeof window.CustomEvent?o=new CustomEvent(e):document.createEvent?(o=document.createEvent("HTMLEvents")).initEvent(e,!0,!1):document.createEventObject&&((o=document.createEventObject()).eventType=e),o.eventName=e,t.dispatchEvent?t.dispatchEvent(o):t.fireEvent?t.fireEvent("on"+o.eventType,o):t[e]?t[e]():t["on"+e]&&t["on"+e](),t702__checkJqueryEvent(t,e)&&$(t).trigger(e)}function t702__checkJqueryEvent(t,e){var o=$._data(t,"events")||!1,i=!1;if(o)for(var n in o)if(n===e){i=!0;break}return i}function t813_init(t,e){var o=document.getElementById("rec"+t);if(o){var i=o?o.querySelector(".t813"):null;t813_setYoutubeUrl(t),t813__setHeight(t,e),window.addEventListener("resize",t_throttle((function(){t813__setHeight(t)}))),i&&i.addEventListener("displayChanged",(function(){t813__setHeight(t)}))}}function t813_setYoutubeUrl(t){var e=document.getElementById("rec"+t);if(e){var o=e?e.querySelector(".t813__iframe"):null;if(o&&o.classList.contains("t813__iframe-youtube")){var i="https://www.youtube.com/embed/"+o.getAttribute("data-youtube-id")+"?rel=0&fmt=18&html5=1&showinfo=0";o.setAttribute("src",i)}}}function t813__setHeight(t,e){if(!e){var o=document.getElementById("rec"+t);if(!o)return;var i=o?o.querySelector(".t813__contentwrapper"):null;if(!i)return;e=.5625*i.offsetWidth,i.style.height=e+"px",i.parentElement&&(i.parentElement.style.height=e+"px")}}function t813_onSuccess(t){var e=t;t instanceof jQuery&&t.length&&(e=t.get(0));var o=e.querySelector(".t-form__inputsbox"),i=(o?o.offsetHeight:0)+(o?o.getBoundingClientRect().top+window.pageYOffset:0),n=e.querySelector(".t-form__successbox"),a=n?n.getBoundingClientRect().top+window.pageYOffset:0,r=a-(window.innerWidth>960?200:100),s=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight);a>window.pageYOffset||s-i<window.innerHeight-100?(o&&o.classList.add("t813__inputsbox_hidden"),setTimeout((function(){var t=document.querySelector(".t-body");if(t&&window.innerHeight>t.offsetHeight){var e=document.querySelector(".t-tildalabel");e&&t813_fadeOut(e,50)}}),300)):(t813_scrollToNextSection(r,400),setTimeout((function(){o&&o.classList.add("t813__inputsbox_hidden")}),400));var c=e.getAttribute("data-success-url");c&&setTimeout((function(){window.location.href=c}),500)}function t813_fadeOut(t,e){var o=1;e=parseInt(e);var i=setInterval((function(){t.style.opacity=o,(o-=.1)<=.1&&clearInterval(i)}),e>0?e/10:40)}function t813_scrollToNextSection(t,e){if(!(e<=0)){var o=(t-window.pageYOffset)/e*10;setTimeout((function(){window.scrollTo(0,window.pageYOffset+o),document.body.setAttribute("data-scrollable","true"),window.pageYOffset!==t?t813_scrollToNextSection(t,e-10):document.body.removeAttribute("data-scrollable")}),10),setTimeout((function(){"true"===document.body.getAttribute("data-scrollable")&&document.body.removeAttribute("data-scrollable")}),2*e)}}function t851_init(t){t851_updateLazyLoad(t)}function t851_updateLazyLoad(t){var e=document.querySelector("#rec"+t+" .t851__container_mobile-flex"),o=document.getElementById("allrecords"),i=o.getAttribute("data-tilda-mode");e&&"edit"!==i&&"preview"!==i&&e.addEventListener("scroll",t_throttle((function(){"y"!==window.lazy&&"yes"!==o.getAttribute("data-tilda-lazy")||t_onFuncLoad("t_lazyload_update",(function(){t_lazyload_update()}))}),500))}function t868_setHeight(t){var e=$("#rec"+t).find(".t868__video-carier"),o=.5625*e.width();e.height(o),e.parent().height(o)}function t868_initPopup(t){var e=$("#rec"+t);$("#rec"+t).attr("data-animationappear","off"),$("#rec"+t).css("opacity","1");var o=$("#rec"+t).find(".t-popup"),i=o.attr("data-tooltip-hook"),n=o.attr("data-track-popup"),a=t868__readCustomCode(e);""!==i&&$(".r").on("click",'a[href="'+i+'"]',(function(e){if(t868_showPopup(t,a),t868_resizePopup(t),e.preventDefault(),n>""){var o=i;"#popup:"==o.substring(0,7)&&(o=o.substring(7)),Tilda.sendEventToStatistics(n,o)}}))}function t868__readCustomCode(t){var e=t.find(".t868 .t868__code-wrap").html();return t.find(".t868 .t868__code-wrap").remove(),e}function t868_showPopup(t,e){var o=$("#rec"+t),i=o.find(".t-popup");o.find(".t-popup__container").html(e),i.css("display","block"),t868_setHeight(t),setTimeout((function(){i.find(".t-popup__container").addClass("t-popup__container-animated"),i.addClass("t-popup_show")}),50),$("body").addClass("t-body_popupshowed"),o.find(".t-popup").click((function(e){var o;e.target&&(o=e.target.closest(".t-popup__container")),o||t868_closePopup(t)})),o.find(".t-popup__close").click((function(e){t868_closePopup(t)})),o.find('a[href*="#"]').click((function(t){var e=$(this).attr("href");if(-1!=e.indexOf("#order")){var i=o.find(".t-popup__container");setTimeout((function(){i.empty()}),600)}e&&"#price:"==e.substring(0,7)||(t868_closePopup(),e&&"#popup:"!=e.substring(0,7)||setTimeout((function(){$("body").addClass("t-body_popupshowed")}),300))})),$(document).keydown((function(e){27==e.keyCode&&t868_closePopup(t)}))}function t868_closePopup(t){var e=$("#rec"+t),o=(e.find(".t-popup"),e.find(".t-popup__container"));$("body").removeClass("t-body_popupshowed"),$("#rec"+t+" .t-popup").removeClass("t-popup_show"),o.empty(),setTimeout((function(){$(".t-popup").not(".t-popup_show").css("display","none")}),300)}function t868_resizePopup(t){var e=$("#rec"+t),o=e.find(".t-popup__container").height(),i=$(window).height(),n=e.find(".t-popup__container");o>i?n.addClass("t-popup__container-static"):n.removeClass("t-popup__container-static")}function t868_sendPopupEventToStatistics(t){var e="/tilda/popup/",o="Popup: ";"#popup:"==t.substring(0,7)&&(t=t.substring(7)),e+=t,o+=t,ga&&"tilda"!=window.mainTracker&&ga("send",{hitType:"pageview",page:e,title:o}),window.mainMetrika>""&&window[window.mainMetrika]&&window[window.mainMetrika].hit(e,{title:o,referer:window.location.href})}