$(document).ready((function(){function e(){$(x).each((e,t)=>{$(t).css("position","relative"),$(t).css("transition","all 1.0s"),$(t).css("top","50%"),$(t).css("left","50%")})}function t(){z=$(O).height(),I=$(O).width()}function i(){$(O).hasClass("active")&&$(O).removeClass("active"),t();const e=60;$(x).each((e,t)=>{$(x).css("transition","all 3.0s"),$(x).css("position","absolute");let i=Math.floor(Math.random()*I/1.1),o=Math.floor(Math.random()*z/1.1);i<60&&(i+=60),i>I-60&&(i-=60),o<60&&(o+=60),o>z-60&&(o-=60),$(t).css("left",i),$(t).css("top",o)})}function o(){O.addClass("active"),$(x).css("position","relative"),$(O).hasClass("active")&&$(x).each((e,t)=>{$(t).css("top","0"),$(t).css("left","0")})}function n(){$.fancybox.cancel,$.fancybox.close,$.fancybox.destroy()}const r=$(".introimg"),s=$(".introdiv"),g=$(".titlediv"),a=$(".main");let l=new ScrollMagic.Controller;const c=9e3,d=9e3,f=new ScrollMagic.Scene({triggerElement:"#introtrigger1",offset:700,triggerHook:.8,duration:9e3}).setClassToggle("#introimg1","visible").addTo(l),u=new ScrollMagic.Scene({triggerElement:"#introtrigger2",offset:18e3,triggerHook:.5,duration:9e3}).setClassToggle("#introimg2","visible").addTo(l),m=new ScrollMagic.Scene({triggerElement:"#introtrigger3",offset:27e3,triggerHook:.5,duration:9e3}).setClassToggle("#introimg3","visible").addTo(l),T=new ScrollMagic.Scene({triggerElement:"#introtrigger4",offset:36e3,triggerHook:.5,duration:9e3}).setClassToggle("#introimg4","visible").addTo(l),S=new ScrollMagic.Scene({triggerElement:"#introtrigger5",offset:45e3,triggerHook:.5,duration:9e3}).setClassToggle("#introimg5","visible").addTo(l),v=new ScrollMagic.Scene({triggerElement:"#introtrigger6",offset:54e3,triggerHook:.5,duration:9e3}).setClassToggle("#introimg6","visible").addTo(l),h=new ScrollMagic.Scene({triggerElement:"#introtrigger7",offset:63e3,triggerHook:.5,duration:9e3}).setClassToggle("#introimg7","visible").addTo(l),w=new ScrollMagic.Scene({triggerElement:"#introtrigger8",offset:72e3,triggerHook:.5,duration:9e3}).setClassToggle("#introimg8","visible").addTo(l),b=new ScrollMagic.Scene({triggerElement:"#introtrigger9",offset:81e3,triggerHook:.5,duration:9e3}).setClassToggle("#introimg9","visible").addTo(l),C=new ScrollMagic.Scene({triggerElement:"#introtrigger10",offset:9e4,triggerHook:.5,duration:9e3}).setClassToggle("#introimg10","visible").addTo(l),p=new ScrollMagic.Scene({triggerElement:"#introtrigger11",offset:99e3,triggerHook:.5,duration:9e3}).setClassToggle("#introimg11","visible").addTo(l),E=new ScrollMagic.Scene({triggerElement:"#introtrigger12",offset:108e3,triggerHook:.5,duration:9e3}).setClassToggle("#introimg12","visible").addTo(l),M=new ScrollMagic.Scene({triggerElement:"#titletrigger",offset:117e3,triggerHook:.4,duration:9e3}).addTo(l),k=undefined;new ScrollMagic.Scene({triggerElement:"#titlekill",offset:131940,triggerHook:.1,duration:"100%"}).addTo(l).on("enter",(function(e){$(g).addClass("inactive")}));const H=document.querySelector("#cloudtext");H.innerHTML=H.textContent.replace(/\S/g,"<span class='letter'>$&</span>"),M.on("enter",(function(e){$(s).addClass("inactive"),setTimeout((function(){$(g).removeClass("inactive"),anime.timeline({loop:!1}).add({targets:"#cloudtext .letter",translateY:[-120,300],easing:"easeOutExpo",duration:1400,delay:(e,t)=>100*t}).add({targets:"#cloudtext",opacity:0,duration:2e3,easing:"easeOutExpo"})}),1e3)}));const y=new ScrollMagic.Scene({triggerElement:"#maintrigger",offset:117100,triggerHook:.4,duration:9e3}).addTo(l);setTimeout((function(){y.on("enter",(function(t){$(a).removeClass("inactive"),$(a).addClass("visible"),$(a).hasClass("visible")&&setTimeout((function(){$(x).css("opacity","1"),e(),i(),console.log("made it")}),6e3)}))}),5e3);const x=$(".image-wrapper"),O=$(a);let z=O.height(),I=O.width(),L=0,q=0;x.fancybox({buttons:["close"],animationEffect:"fade",transitionIn:"fade",transitionOut:"fade",loop:!0,changeFade:"fast",speedIn:100,speedOut:100,touch:!1}),document.addEventListener("mouseup",(function(e){n(),console.log("mouseup fired")})),document.addEventListener("dragend",(function(e){n(),console.log("dragend fired")})),$(x).draggable({delay:1,containment:"main",distance:0,cursor:"/eye.ico"}),$((function(){$(x).draggable({start:function(e,t){$(this).css("height",10)},stop:function(e,t){$(this).css("height",150)}})})),window.addEventListener("resize",(function(e){this.resizeTO&&clearTimeout(this.resizeTO),this.resizeTO=setTimeout((function(){$(this).trigger("resizeEnd")}),300)})),$(window).bind("resizeEnd",(function(){e(),i()})),$("#close-me").click((function(){toggleSwitch()})),$("#info-button").click((function(){toggleSwitch()})),$(".gridImages").click((function(){o()})),$(".pileImages").click((function(){i()}))}));