$(document).ready((function(){function n(n){for(var i=n.length,t,g;i;)g=Math.floor(Math.random()*i--),t=n[i],n[i]=n[g],n[g]=t;return n}function i(){for(let n=0;n<p.length;n++){let i=$(p)[n];$(l).append("<div class='introimg' id='introimg-"+(n+1)+"'></div>")}}function t(){for(let n=0;n<b.length;n++){let i=$(b)[n],t=$(p)[n];i.style.backgroundImage="url('"+$(t).prop("imgUrl")+"')"}}function g(){mainHeight=$(_).height(),mainWidth=$(_).width()}function e(){h=n(h);for(let n=0;n<h.length;n++){let i=$(h)[n];$(_).append("<a class='image-wrapper draggable' data-fancybox='gallery' data-selectable='false' href='"+$(i).prop("standard")+"' id='img-"+n+"'><img class='image-thumb' src='"+$(i).prop("thumb")+"' /></a>")}}function m(){let n=$(".image-wrapper");$(n).css("transition","all 3.0s"),$(".image-wrapper").each((n,i)=>{$(i).css("top","calc(40%)"),$(i).css("left","calc(50% - 20px)")})}function s(){$(_).addClass("pile-view"),g();let n=0;n=mainWidth<=829?20:70,m(),$(".image-wrapper").each((i,t)=>{$(t).css("transition","all 3.0s"),$(t).css("position","absolute");let g=Math.floor(Math.random()*mainWidth/1.1),e=Math.floor(Math.random()*mainHeight/1.1);g<n&&(g+=n),g>mainWidth-n&&(g-=n),e<n&&(e+=n),e>mainHeight-n&&(e-=n),setTimeout(()=>{$(t).css("transition","position 0s")},3500),$(t).css("left",g),$(t).css("top",e)})}function w(){let n=$(".image-wrapper");m(),$(_).addClass("grid-view"),setTimeout(()=>{$(n).css("opacity","0")},2e3),setTimeout(()=>{$(n).css("position","relative")},5e3),setTimeout(()=>{$(n).css("top","0"),$(n).css("left","0"),$(n).css("transition","position 0s")},5500),setTimeout(()=>{$(n).css("transition","opacity ease 3s"),$(n).css("opacity","1")},5500)}function o(){$.fancybox.cancel,$.fancybox.close,$.fancybox.destroy()}function a(n){if($(_).hasClass("moving"))return setTimeout(()=>{$(_).removeClass("moving")},n),!1}$(this).scrollTop(0);const l=$(".introdiv"),d=$(".titlediv"),_=$(".main");let r=new ScrollMagic.Controller,p=[{imgUrl:"img/introscenes/OG_IMG_001.jpg"},{imgUrl:"img/introscenes/OG_IMG_002.jpg"},{imgUrl:"img/introscenes/OG_IMG_003.jpg"},{imgUrl:"img/introscenes/OG_IMG_004.jpg"},{imgUrl:"img/introscenes/OG_IMG_005.jpg"},{imgUrl:"img/introscenes/OG_IMG_006.jpg"},{imgUrl:"img/introscenes/OG_IMG_007.jpg"},{imgUrl:"img/introscenes/OG_IMG_008.jpg"},{imgUrl:"img/introscenes/OG_IMG_009.jpg"},{imgUrl:"img/introscenes/OG_IMG_010.jpg"},{imgUrl:"img/introscenes/OG_IMG_011.jpg"},{imgUrl:"img/introscenes/OG_IMG_012.jpg"}],h=[{thumb:"/img/thumbs/001_lil_weknow.png",standard:"/img/001_weknow.jpg"},{thumb:"/img/thumbs/002_lil_weknow.png",standard:"/img/002_weknow.jpg"},{thumb:"/img/thumbs/003_lil_weknow.png",standard:"/img/003_weknow.jpg"},{thumb:"/img/thumbs/004_lil_weknow.png",standard:"/img/004_weknow.jpg"},{thumb:"/img/thumbs/005_lil_weknow.png",standard:"/img/005_weknow.jpg"},{thumb:"/img/thumbs/006_lil_weknow.png",standard:"/img/006_weknow.jpg"},{thumb:"/img/thumbs/007_lil_weknow.png",standard:"/img/007_weknow.jpg"},{thumb:"/img/thumbs/008_lil_weknow.png",standard:"/img/008_weknow.jpg"},{thumb:"/img/thumbs/009_lil_weknow.png",standard:"/img/009_weknow.jpg"},{thumb:"/img/thumbs/010_lil_weknow.png",standard:"/img/010_weknow.jpg"},{thumb:"/img/thumbs/011_lil_weknow.png",standard:"/img/011_weknow.jpg"},{thumb:"/img/thumbs/012_lil_weknow.png",standard:"/img/012_weknow.jpg"},{thumb:"/img/thumbs/013_lil_weknow.png",standard:"/img/013_weknow.jpg"},{thumb:"/img/thumbs/014_lil_weknow.png",standard:"/img/014_weknow.jpg"},{thumb:"/img/thumbs/015_lil_weknow.png",standard:"/img/015_weknow.jpg"},{thumb:"/img/thumbs/016_lil_weknow.png",standard:"/img/016_weknow.jpg"},{thumb:"/img/thumbs/017_lil_weknow.png",standard:"/img/017_weknow.jpg"},{thumb:"/img/thumbs/018_lil_weknow.png",standard:"/img/018_weknow.jpg"},{thumb:"/img/thumbs/018_lil_weknow.png",standard:"/img/018_weknow.jpg"},{thumb:"/img/thumbs/019_lil_weknow.png",standard:"/img/019_weknow.jpg"},{thumb:"/img/thumbs/020_lil_weknow.png",standard:"/img/020_weknow.jpg"},{thumb:"/img/thumbs/021_lil_weknow.png",standard:"/img/021_weknow.jpg"},{thumb:"/img/thumbs/022_lil_weknow.png",standard:"/img/022_weknow.jpg"},{thumb:"/img/thumbs/023_lil_weknow.png",standard:"/img/023_weknow.jpg"},{thumb:"/img/thumbs/024_lil_weknow.png",standard:"/img/024_weknow.jpg"},{thumb:"/img/thumbs/025_lil_weknow.png",standard:"/img/025_weknow.jpg"},{thumb:"/img/thumbs/026_lil_weknow.png",standard:"/img/026_weknow.jpg"},{thumb:"/img/thumbs/027_lil_weknow.png",standard:"/img/027_weknow.jpg"},{thumb:"/img/thumbs/028_lil_weknow.png",standard:"/img/028_weknow.jpg"},{thumb:"/img/thumbs/029_lil_weknow.png",standard:"/img/029_weknow.jpg"},{thumb:"/img/thumbs/030_lil_weknow.png",standard:"/img/030_weknow.jpg"},{thumb:"/img/thumbs/031_lil_weknow.png",standard:"/img/031_weknow.jpg"},{thumb:"/img/thumbs/032_lil_weknow.png",standard:"/img/032_weknow.jpg"},{thumb:"/img/thumbs/033_lil_weknow.png",standard:"/img/033_weknow.jpg"},{thumb:"/img/thumbs/034_lil_weknow.png",standard:"/img/034_weknow.jpg"},{thumb:"/img/thumbs/035_lil_weknow.png",standard:"/img/035_weknow.jpg"},{thumb:"/img/thumbs/036_lil_weknow.png",standard:"/img/036_weknow.jpg"},{thumb:"/img/thumbs/037_lil_weknow.png",standard:"/img/037_weknow.jpg"},{thumb:"/img/thumbs/038_lil_weknow.png",standard:"/img/038_weknow.jpg"},{thumb:"/img/thumbs/039_lil_weknow.png",standard:"/img/039_weknow.jpg"},{thumb:"/img/thumbs/040_lil_weknow.png",standard:"/img/040_weknow.jpg"},{thumb:"/img/thumbs/041_lil_weknow.png",standard:"/img/041_weknow.jpg"},{thumb:"/img/thumbs/042_lil_weknow.png",standard:"/img/042_weknow.jpg"},{thumb:"/img/thumbs/043_lil_weknow.png",standard:"/img/043_weknow.jpg"},{thumb:"/img/thumbs/044_lil_weknow.png",standard:"/img/044_weknow.jpg"},{thumb:"/img/thumbs/045_lil_weknow.png",standard:"/img/045_weknow.jpg"},{thumb:"/img/thumbs/046_lil_weknow.png",standard:"/img/046_weknow.jpg"},{thumb:"/img/thumbs/047_lil_weknow.png",standard:"/img/047_weknow.jpg"},{thumb:"/img/thumbs/048_lil_weknow.png",standard:"/img/048_weknow.jpg"},{thumb:"/img/thumbs/049_lil_weknow.png",standard:"/img/049_weknow.jpg"},{thumb:"/img/thumbs/050_lil_weknow.png",standard:"/img/050_weknow.jpg"},{thumb:"/img/thumbs/051_lil_weknow.png",standard:"/img/051_weknow.jpg"},{thumb:"/img/thumbs/052_lil_weknow.png",standard:"/img/052_weknow.jpg"},{thumb:"/img/thumbs/053_lil_weknow.png",standard:"/img/053_weknow.jpg"},{thumb:"/img/thumbs/054_lil_weknow.png",standard:"/img/054_weknow.jpg"},{thumb:"/img/thumbs/055_lil_weknow.png",standard:"/img/055_weknow.jpg"},{thumb:"/img/thumbs/056_lil_weknow.png",standard:"/img/056_weknow.jpg"},{thumb:"/img/thumbs/057_lil_weknow.png",standard:"/img/057_weknow.jpg"},{thumb:"/img/thumbs/058_lil_weknow.png",standard:"/img/058_weknow.jpg"},{thumb:"/img/thumbs/059_lil_weknow.png",standard:"/img/059_weknow.jpg"},{thumb:"/img/thumbs/060_lil_weknow.png",standard:"/img/060_weknow.jpg"},{thumb:"/img/thumbs/061_lil_weknow.png",standard:"/img/061_weknow.jpg"},{thumb:"/img/thumbs/062_lil_weknow.png",standard:"/img/062_weknow.jpg"},{thumb:"/img/thumbs/063_lil_weknow.png",standard:"/img/063_weknow.jpg"},{thumb:"/img/thumbs/064_lil_weknow.png",standard:"/img/064_weknow.jpg"},{thumb:"/img/thumbs/065_lil_weknow.png",standard:"/img/065_weknow.jpg"},{thumb:"/img/thumbs/066_lil_weknow.png",standard:"/img/066_weknow.jpg"},{thumb:"/img/thumbs/067_lil_weknow.png",standard:"/img/067_weknow.jpg"},{thumb:"/img/thumbs/068_lil_weknow.png",standard:"/img/068_weknow.jpg"},{thumb:"/img/thumbs/069_lil_weknow.png",standard:"/img/069_weknow.jpg"},{thumb:"/img/thumbs/070_lil_weknow.png",standard:"/img/070_weknow.jpg"},{thumb:"/img/thumbs/071_lil_weknow.png",standard:"/img/071_weknow.jpg"},{thumb:"/img/thumbs/072_lil_weknow.png",standard:"/img/072_weknow.jpg"},{thumb:"/img/thumbs/073_lil_weknow.png",standard:"/img/073_weknow.jpg"},{thumb:"/img/thumbs/074_lil_weknow.png",standard:"/img/074_weknow.jpg"},{thumb:"/img/thumbs/075_lil_weknow.png",standard:"/img/075_weknow.jpg"},{thumb:"/img/thumbs/076_lil_weknow.png",standard:"/img/076_weknow.jpg"},{thumb:"/img/thumbs/077_lil_weknow.png",standard:"/img/077_weknow.jpg"},{thumb:"/img/thumbs/078_lil_weknow.png",standard:"/img/078_weknow.jpg"},{thumb:"/img/thumbs/079_lil_weknow.png",standard:"/img/079_weknow.jpg"},{thumb:"/img/thumbs/080_lil_weknow.png",standard:"/img/080_weknow.jpg"},{thumb:"/img/thumbs/081_lil_weknow.png",standard:"/img/081_weknow.jpg"},{thumb:"/img/thumbs/082_lil_weknow.png",standard:"/img/082_weknow.jpg"},{thumb:"/img/thumbs/083_lil_weknow.png",standard:"/img/083_weknow.jpg"},{thumb:"/img/thumbs/084_lil_weknow.png",standard:"/img/084_weknow.png"},{thumb:"/img/thumbs/085_lil_weknow.png",standard:"/img/085_weknow.jpg"},{thumb:"/img/thumbs/086_lil_weknow.png",standard:"/img/086_weknow.jpg"},{thumb:"/img/thumbs/087_lil_weknow.png",standard:"/img/087_weknow.jpg"},{thumb:"/img/thumbs/088_lil_weknow.png",standard:"/img/088_weknow.jpg"},{thumb:"/img/thumbs/089_lil_weknow.png",standard:"/img/089_weknow.jpg"},{thumb:"/img/thumbs/090_lil_weknow.png",standard:"/img/090_weknow.jpg"},{thumb:"/img/thumbs/091_lil_weknow.png",standard:"/img/091_weknow.jpg"}];0==window.scrollY&&setTimeout(()=>{$("#scrollhintdiv").removeClass("inactive")},5e3),$(window).scroll(()=>{let n;$(window).scrollTop()>=100&&($("#scrollhintdiv").addClass("inactive"),setTimeout(()=>{$("#scrollhintdiv").css("display","none")},3e3))}),$("#mobilehintdiv").click(()=>{$("#mobilehintdiv").css("display","none")});let u=$(".introdiv").height()*p.length;$(".introdiv").css("height",u),p=n(p),i();let b=$(".introimg");t(),$(window).scroll(()=>{function n(){let n=$(g).height(),t,e;return 1-((n*($(g).index()+1)-i)/n*2).toFixed(2)}let i=$(this).scrollTop(),t=$(b).height(),g=$(".current");for(let n=0;n<b.length;n++){let g=b[n];i<=t*($(g).index()+1)&&i>t*$(g).index()+1?$(g).addClass("current"):$(g).removeClass("current")}$(g).css({opacity:n()})});const k=u/(p.length+1),c=400,j=undefined;new ScrollMagic.Scene({triggerElement:"#leTrigger",offset:u-400,triggerHook:.5,duration:1}).addTo(r).on("enter",n=>{setTimeout(()=>{$(d).removeClass("inactive"),$(l).addClass("inactive"),anime.timeline({loop:!1}).add({targets:".cloudtext",translateY:[-800,-40],easing:"easeOutExpo",duration:11e3,delay:(n,i)=>75*i}).add({targets:".cloudtext",opacity:1,duration:1e3,easing:"easeOutExpo",delay:0})},1e3),setTimeout(()=>{$(d).addClass("inactive")},1e4)});const v=undefined;new ScrollMagic.Scene({triggerElement:"#leTrigger",offset:u+1-400,triggerHook:.5,duration:k}).addTo(r).on("enter",n=>{$(_).removeClass("inactive"),$(_).addClass("visible"),$("#leTrigger").css("display","none"),setTimeout(()=>{$(".navbar-div").addClass("visible"),$(".introdiv").css("height","0"),$(".introdiv").css("display","none")},8e3),setTimeout(()=>{e()},1e4),$(_).hasClass("visible")&&setTimeout(()=>{$(".image-wrapper").css("opacity","1"),m(),s(),$(".draggable").draggable()},11e3),setTimeout(()=>{$(d).css("display","none")},13e3)}),$().fancybox({selector:".image-wrapper",protect:!0,animationEffect:"fade",transitionIn:"fade",transitionOut:"fade",loop:!0,changeFade:"slow",speedIn:3e3,speedOut:3e3,keyboard:!1,touch:!1,wheel:!1,buttons:["thumbs","close"]}),window.addEventListener("resize",n=>{this.resizeTO&&clearTimeout(this.resizeTO),this.resizeTO=setTimeout((function(){$(this).trigger("resizeEnd")}),300)}),$(window).bind("resizeEnd",()=>{if($(_).hasClass("grid-view")||$(_).hasClass("moving"))return!1;s()}),$("#closebutton").click(()=>{if($("#infobox").hasClass("inactive"))return!0;$("#infobox").addClass("inactive")}),$("#info-button").click(()=>{$("#infobox").toggleClass("inactive")}),$(".gridImages").click(()=>{if($(_).hasClass("grid-view")||$(_).hasClass("moving"))return!1;$(_).hasClass("pile-view")&&($(_).removeClass("pile-view"),$(_).addClass("grid-view"),$(_).addClass("moving"),w(),a(6500))}),$(".pileImages").click(()=>{if($(_).hasClass("moving"))return!1;$(_).hasClass("grid-view")&&($(_).removeClass("grid-view"),$(_).addClass("pile-view")),$(_).addClass("moving"),s(),a(3500)})})),$(window).on("load",(function(){$(this).scrollTop(0)}));