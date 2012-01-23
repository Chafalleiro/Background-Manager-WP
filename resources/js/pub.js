/*
 * Copyright (c) 2011-2012 Mike Green <myatus@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 */
(function(a){a.extend(myatu_bgm,{SetTimer:function(){if(background_manager_vars.change_freq<=0){return}if(myatu_bgm.timer){clearTimeout(myatu_bgm.timer)}myatu_bgm.timer=setTimeout("myatu_bgm.SwitchBackground()",background_manager_vars.change_freq*1000)},AnimationCompleted:function(){a("#myatu_bgm_top").css({left:"",top:""});a("#myatu_bgm_prev").remove();myatu_bgm.SetTimer()},AnimateSlide:function(n,f,q){var m=a("#myatu_bgm_top"),g=a("#myatu_bgm_prev"),r="-9000px",d="9000px",e="top",j=new Object,i=a(window).width(),l=((m.width()-i)*100)/i,h=(150+l)+"%",k="-"+(50+l)+"%",c=function(p){p=String(p);return(p.charAt(p.length-1)=="%")};switch(n){case"top":m.show();r="-"+m.height()+"px";d=m.height()+"px";m.hide();break;case"bottom":r=g.height()+"px";d="-"+g.height()+"px";break;case"left":e="left";var b=c(m.css(e));r=(b)?k:"-"+i+"px";d=(b)?h:i+"px";break;case"right":e="left";var b=c(m.css(e));r=(b)?h:i+"px";d=(b)?k:"-"+i+"px";break}var o=m.css(e);m.css(e,r).show();if(q==undefined||q==false){j[e]=d;g.animate(j,{duration:f,queue:false})}j[e]=o;m.animate(j,{duration:f,queue:false,complete:myatu_bgm.AnimationCompleted})},SwitchBackground:function(){var d=(background_manager_vars.is_fullsize=="true"),b=(d)?a("#myatu_bgm_top").attr("src"):a("body").css("background-image"),c=myatu_bgm.GetAjaxData("random_image",{prev_img:b,active_gallery:background_manager_vars.active_gallery});if(!c){return}if(d){a("#myatu_bgm_top").clone().attr("id","myatu_bgm_prev").appendTo("body");a("#myatu_bgm_top").hide().unbind("load").attr({src:c.url,alt:c.alt}).imgLoaded(function(){var e=c.transition_speed,f=false;switch(c.transition){case"none":a(this).show();myatu_bgm.AnimationCompleted();break;case"coverdown":f=true;case"slidedown":myatu_bgm.AnimateSlide("top",e,f);break;case"coverup":f=true;case"slideup":myatu_bgm.AnimateSlide("bottom",e,f);break;case"coverright":f=true;case"slideright":myatu_bgm.AnimateSlide("left",e,f);break;case"coverleft":f=true;case"slideleft":myatu_bgm.AnimateSlide("right",e,f);break;default:a("#myatu_bgm_prev").animate({opacity:0},{duration:c.transition_speed,queue:false});a(this).fadeIn(c.transition_speed,myatu_bgm.AnimationCompleted);break}})}else{a("body").css("background-image",'url("'+c.url+'")');myatu_bgm.SetTimer()}a("#myatu_bgm_info_tab").btOff();a(".myatu_bgm_info_tab a").attr("href",c.link);a(".myatu_bgm_info_tab_content img").attr("src",c.thumb);a(".myatu_bgm_info_tab_content h3").text(c.caption);a(".myatu_bgm_info_tab_desc").html(c.desc)}});a(document).ready(function(b){myatu_bgm.SetTimer();if(b.isFunction(b("#myatu_bgm_info_tab").bt)){b("#myatu_bgm_info_tab").bt({contentSelector:"$('.myatu_bgm_info_tab_content')",killTitle:false,trigger:["mouseover focus","mouseout blur"],positions:["right","left"],fill:"#333",strokeStyle:"#666",spikeLength:20,spikeGirth:20,overlap:0,shrinkToFit:true,width:"450px",textzIndex:19999,boxzIndex:19998,wrapperzIndex:19997,windowMargin:20,cssStyles:{fontFamily:'"Lucida Grande",Helvetica,Arial,Verdana,sans-serif',fontSize:"12px",padding:"14px 4px 9px 14px",color:"#eee"},shadow:true,shadowColor:"rgba(0,0,0,.5)",shadowBlur:8,shadowOffsetX:4,shadowOffsetY:4,showTip:function(c){if(!b(".myatu_bgm_info_tab_content img").attr("src")&&!b(".myatu_bgm_info_tab_desc").text()&&!b(".myatu_bgm_info_tab_content h3").text()){return}if(b(".myatu_bgm_info_tab_desc").text()==""){b(c).css("width","auto")}b(c).show()},})}})})(jQuery);
