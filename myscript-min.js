$(document).ready((function(){function e(){let e=$(c).height()*$(a).length;$(c).css("height",e)}function t(){$(v).each((e,t)=>{$(t).css("position","relative"),$(t).css("transition","all 1.0s"),$(t).css("top","50%"),$(t).css("left","50%")})}function n(){b=$(C).height(),w=$(C).width()}function i(){$(C).hasClass("active")&&$(C).removeClass("active"),n();const e=60;$(v).each((e,t)=>{$(v).css("transition","all 3.0s"),$(v).css("position","absolute");let n=Math.floor(Math.random()*w/1.1),i=Math.floor(Math.random()*b/1.1);n<60&&(n+=60),n>w-60&&(n-=60),i<60&&(i+=60),i>b-60&&(i-=60),$(t).css("left",n),$(t).css("top",i)})}function o(){C.addClass("active"),$(v).css("position","relative"),$(C).hasClass("active")&&$(v).each((e,t)=>{$(t).css("top","0"),$(t).css("left","0")})}function s(){$.fancybox.cancel,$.fancybox.close,$.fancybox.destroy()}const a=$(".introimg"),c=$(".introdiv"),l=$(".titlediv"),r=$(".main");let d=new ScrollMagic.Controller;e(),$(window).scroll((function(){function e(){let e=$(i).height(),n,o;return 1-((e*($(i).index()+1)-t)/e).toFixed(2)}let t=$(this).scrollTop(),n=$(".introimg").height(),i=$(".current");for(let e=0;e<a.length;e++){let i=a[e];t<=n*($(i).index()+1)&&t>n*$(i).index()?$(i).addClass("current"):$(i).removeClass("current")}$(i).css({opacity:e()})}));const u=$(".introimg").height()*(a.length+1),g=u/(a.length+1),f=100,h=new ScrollMagic.Scene({triggerElement:"#leTrigger",offset:100+u,triggerHook:.5,duration:1}).addTo(d),m=document.querySelector("#cloudtext");m.innerHTML=m.textContent.replace(/\S/g,"<span class='letter'>$&</span>"),h.on("enter",(function(e){setTimeout((function(){$(l).removeClass("inactive"),$(c).addClass("inactive"),anime.timeline({loop:!1}).add({targets:"#cloudtext .letter",translateY:[-120,300],easing:"easeOutExpo",duration:1400,delay:(e,t)=>100*t}).add({targets:"#cloudtext",opacity:0,duration:1e3,easing:"easeOutExpo",delay:500})}),1e3)}));const p=new ScrollMagic.Scene({triggerElement:"#leTrigger",offset:100+u+1,triggerHook:.5,duration:g}).addTo(d);setTimeout((function(){p.on("enter",(function(e){$(r).removeClass("inactive"),$(r).addClass("visible"),$(r).hasClass("visible")&&setTimeout((function(){$(".navbar-div").addClass("visible"),$(".titlediv").addClass("inactive"),$(v).css("opacity","1"),t(),i(),console.log("made it")}),5e3)}))}),1e3);const v=$(".image-wrapper"),C=$(r);let b=C.height(),w=C.width(),x=0,y=0;$(v).fancybox({buttons:["close"],animationEffect:"fade",transitionIn:"fade",transitionOut:"fade",loop:!0,changeFade:"fast",speedIn:100,speedOut:100,touch:!1}),document.addEventListener("mouseup",(function(e){s(),console.log("mouseup fired")})),document.addEventListener("dragend",(function(e){s(),console.log("dragend fired")})),$(v).draggable({delay:1,containment:"main",distance:0,cursor:"eye.ico"}),$((function(){$(v).draggable({start:function(e,t){$(this).css("height",10)},stop:function(e,t){$(this).css("height",150)}})})),window.addEventListener("resize",(function(e){this.resizeTO&&clearTimeout(this.resizeTO),this.resizeTO=setTimeout((function(){$(this).trigger("resizeEnd")}),300)})),$(window).bind("resizeEnd",(function(){t(),i(),e()})),$("#close-me").click((function(){toggleSwitch()})),$("#info-button").click((function(){toggleSwitch()})),$(".gridImages").click((function(){o()})),$(".pileImages").click((function(){i()}))}));