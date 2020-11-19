
$(document).ready(function() {

  const introImages = $(".introimg");
  const introDiv = $(".introdiv");
  const titleDiv = $(".titlediv");
  const mainDiv = $(".main");

	let controller = new ScrollMagic.Controller();

  // ---------------------------------------------------------------------------
  //         ---------------------- INTRO SCENE ----------------------
  // ---------------------------------------------------------------------------

  // set dimensions of intro scene
  function setIntroDivHeight() {
    let introDivHeight = ( $(introDiv).height() * $(introImages).length );
    $(introDiv).css("height", introDivHeight)
  };
  setIntroDivHeight();

  // opacity change on scroll
  $(window).scroll(function() {

    let scrollTop = $(this).scrollTop();
    let imgDivHeight = $(".introimg").height();
    let currentImg = $(".current");

    function opacityCalc() {
      let imgDivHeight = $(currentImg).height();
      let scrollcalc = (( (imgDivHeight * ($(currentImg).index() + 1) ) - scrollTop) /  imgDivHeight).toFixed(2);
      let opacityTotal = 1 - scrollcalc;
      return opacityTotal;
    };

    for (let i = 0; i < introImages.length; i++) {
      let img = introImages[i];

      if ( scrollTop <= imgDivHeight * ($(img).index() + 1) && scrollTop > imgDivHeight * $(img).index() ) {
        $(img).addClass("current");
        } else {
          $(img).removeClass("current");
        }
    };

    $(currentImg).css({
      opacity: opacityCalc()
    });

  });

  // ---------------------------------------------------------------------------
  //        ---------------------- TITLE SCENE ----------------------
  // ---------------------------------------------------------------------------

  const introSceneHeight = $(".introimg").height() * (introImages.length + 1);
  const sceneDuration = introSceneHeight / (introImages.length + 1);
  const offset = 100;
    const titlescene = new ScrollMagic.Scene({
      triggerElement: "#leTrigger",
      offset: (offset + (introSceneHeight)),
      triggerHook: 0.5,
      duration: 1
    })
    // .addIndicators()
    .addTo(controller);

    // TEXT ANIMATION
    const textWrapper = document.querySelector('#cloudtext');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    titlescene.on("enter", function (event) {

      setTimeout(function() {
        $(titleDiv).removeClass("inactive");
        $(introDiv).addClass("inactive");
        anime.timeline({loop: false})
        .add({
          targets: '#cloudtext .letter',
          translateY: [-120, 300],
          easing: "easeOutExpo",
          duration: 1400,
          delay: (el, i) => 100 * i
        }).add({
          targets: '#cloudtext',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 500
        });
      }, 1000);


    });

  // ---------------------------------------------------------------------------
  //          ---------------------- MAIN SCENE ----------------------
  // ---------------------------------------------------------------------------

  const mainscene = new ScrollMagic.Scene({
    triggerElement: "#leTrigger",
    offset: offset + introSceneHeight + 1,
    triggerHook: 0.5,
    duration: sceneDuration,
  })
 // .addIndicators()
 .addTo(controller);

 setTimeout(function() {
   mainscene.on("enter", function (event) {
     $(mainDiv).removeClass("inactive");
     $(mainDiv).addClass("visible");


     if ($(mainDiv).hasClass("visible")) {
       setTimeout(function() {
        $(".navbar-div").addClass("visible");
        $(image).css("opacity", "1");
         centerPile();
         pileImages();
         console.log("made it");
       }, 5000);
     }
   });
 }, 1000);

 // set up image variables
  const image = $(".image-wrapper");
  const main = $(mainDiv);
  let mainHeight = main.height();
  let mainWidth = main.width();
  let imgLeft = 0;
  let imgRight = 0;

  // pile images in center
  function centerPile() {
    $(image).each( (index,img)=> {
      $(img).css("position", "relative");
      $(img).css("transition", "all 1.0s");
      $(img).css("top", "50%");
      $(img).css("left", "50%");
    });
  }

  // get dimensions of main scene
  function getMainDimensions() {
    mainHeight = $(main).height();
    mainWidth = $(main).width();
  };

  // randomize image coordinates
  function pileImages() {

    if ($(main).hasClass("active")) {
      $(main).removeClass("active");
    }

    getMainDimensions();

    const mainPadding = 60;
    $(image).each( (index,img)=> {
      $(image).css("transition", "all 3.0s")
      $(image).css("position", "absolute");

      let randX = Math.floor( (Math.random() * mainWidth / 1.1) );
      let randY = Math.floor( (Math.random() * mainHeight / 1.1) );

      if ( randX < mainPadding ) {
        randX = randX + mainPadding;
      };

      if ( randX > (mainWidth - mainPadding) ) {
        randX = randX - mainPadding;
      }

      if ( randY < mainPadding ) {
        randY = randY + mainPadding;
      };

      if ( randY > (mainHeight - mainPadding) ) {
        randY = randY - mainPadding;
      }

      $(img).css("left", randX);
      $(img).css("top", randY);
    });
  }

  // orgainzes images into grid
  function toggleGrid() {
    main.addClass("active");
    $(image).css("position", "relative");

    if ($(main).hasClass("active")) {

      $(image).each( (index,img)=> {
        $(img).css("top", "0");
        $(img).css("left", "0");
      });

    }
  };

  // programmatically open fancybox?????????

  // fancybox init
  $(image).fancybox(
    {
      buttons: [
        "close"
      ],
      animationEffect: "fade",
      transitionIn: "fade",
      transitionOut: "fade",
      loop: true,
      changeFade: "fast",
      speedIn: 100,
      speedOut: 100,
      touch: false

    }
  );

  image

  // stops fancybox from opening after image is dragged
  function cancelFancybox() {
    $.fancybox.cancel;
    $.fancybox.close;
    $.fancybox.destroy();
  }

  document.addEventListener("mouseup", function(event) {
    cancelFancybox();
    console.log("mouseup fired")
  });
  document.addEventListener("dragend", function(event) {
    cancelFancybox();
    console.log("dragend fired")
  });

  // draggable init
  $(image).draggable(
    {
      delay: 1,
      containment: "main",
      distance: 0,
      cursor: 'eye.ico'
    }
  );


  $(function() {
     $(image).draggable({
         start: function(event, ui) { $(this).css("height",10); },
         stop: function(event, ui) { $(this).css("height",150); }
     });
 });


 // check window for resize
  window.addEventListener('resize', function(event) {
    if(this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
        $(this).trigger('resizeEnd');
    }, 300);
  });

  // reorganize after window resize
  $(window).bind('resizeEnd', function() {
    centerPile();
    pileImages();
    setIntroDivHeight();
  });



// ---------------------- NAVBAR ----------------------

  $("#close-me").click(function(){
    toggleSwitch()
  });

  $("#info-button").click(function() {
    toggleSwitch()
  });

  $(".gridImages").click(function() {
    toggleGrid();
  });

  $(".pileImages").click(function() {
    pileImages();
  });


});//end document.ready
